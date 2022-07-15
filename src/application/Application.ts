import {Guild, OverwriteResolvable, PartialUser, Permissions, TextChannel, User} from "discord.js";

export type ApplicationChannelArguments = {
    server: Guild,
    applicant: User | PartialUser,
    applicationsChannelParentId?: string | null,
    allowedRoleIds?: Array<string>
    botId?: string | null
}
export const createApplicationChannel = async (args: ApplicationChannelArguments): Promise<TextChannel | null> => {
    const {applicant, server, applicationsChannelParentId, allowedRoleIds, botId} = args;
    const channelName = `application-${applicant.username}`
    const applicationChannel = server.channels.cache.find(x => x.name === channelName);
    if (applicationChannel) {
        console.log('application channel already exists');
        return null;
    }
    const channel = await server.channels.create(channelName, {
        type: 'text',
        topic: 'application'
    });
    if (applicationsChannelParentId) {
        await channel.setParent(applicationsChannelParentId);
    }
    // need to set parent before permissions
    if (allowedRoleIds && allowedRoleIds.length) {
        const overwrites = allowedRoleIds.map((x): OverwriteResolvable => ({
            id: x,
            type: 'role',
            allow: Permissions.DEFAULT
        }));

        await channel.overwritePermissions([
            ...overwrites,
            {
                id: applicant.id,
                type: 'member',
                allow: ['READ_MESSAGE_HISTORY', 'SEND_MESSAGES', 'VIEW_CHANNEL']
            },
            {
                id: botId ?? '',
                type: 'member',
                allow: Permissions.DEFAULT
            },
            {
                id: server.id,
                deny: ['VIEW_CHANNEL']
            }
        ]);
    }
    return channel;
}