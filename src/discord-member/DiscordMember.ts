import {GuildMember} from "discord.js";
import {NicknameLengthException} from "../../exceptions/NicknameLengthException";

/**
 * @throws NicknameLengthException
 */
export const modifyNicknamePoints = async (newPoints: number, serverMember: GuildMember | null) => {
    if (serverMember) {
        const containsBracketsRe = /.*\[.*\].*/;
        const nickname = serverMember.nickname;
        if (nickname) {
            const newNickname = containsBracketsRe.test(nickname) ? nickname.replace(/\[(.+?)\]/g, `[${newPoints}]`) : `${nickname} [${newPoints}]`;
            if (nickname.length > 32) {
                throw new NicknameLengthException('Nickname is more than 32 characters');
            } else {
                return serverMember.setNickname(newNickname);
            }
        }
    }
}