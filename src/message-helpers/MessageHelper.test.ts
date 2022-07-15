import {formatDiscordUserTag, parseServerCommand, stripDiscordCharactersFromId} from "./MessageHelpers";

describe("MessageHelpers", () => {
    describe("parseServerCommand", () => {
        it("parses a server command single context", () => {
            const serverCommand = '!test';
            const message = '!test modifypoints +10';

            const parsedCommand = parseServerCommand(message, serverCommand);

            expect(parsedCommand.command).toEqual('modifypoints');
            expect(parsedCommand.context).toEqual('+10');
            expect(parsedCommand.context2).toBeNull();
        });

        it("parses a server command double context", () => {
            const serverCommand = '!test';
            const message = '!test modifypoints +10 context2';

            const parsedCommand = parseServerCommand(message, serverCommand);

            expect(parsedCommand.command).toEqual('modifypoints');
            expect(parsedCommand.context).toEqual('+10');
            expect(parsedCommand.context2).toEqual("context2");
        });
    });

    describe("formatDiscordUserTag", () => {
        it("adds expects formatting", () => {
            const inputString = 'test';
            const expected = '<@test>';

            const result = formatDiscordUserTag(inputString);

            expect(result).toEqual(expected);
        });
    });

    describe("stripDiscordCharactersFromId", () => {
        it("strips discord @ sign", () => {
            const inputString = '@12345567';
            const expected = '12345567';

            const result = stripDiscordCharactersFromId(inputString);

            expect(result).toEqual(expected);
        });
        it("strips discord # sign", () => {
            const inputString = '#12345567';
            const expected = '12345567';

            const result = stripDiscordCharactersFromId(inputString);

            expect(result).toEqual(expected);
        });
    });
});