import { Emoji } from "discord.js";

export const NumberEmojis = {
    ONE: '1️⃣',
    TWO: '2️⃣',
    THREE: '3️⃣',
    FOUR: '4️⃣',
    FIVE: '5️⃣',
    SIX: '6️⃣',
    SEVEN: '7️⃣',
    EIGHT: '8️⃣',
    NINE: '9️⃣',
    TEN: '🔟'
}

export const convertNumberToEmoji = (num: number) => {
    switch (num) {
        case 1:
            return NumberEmojis.ONE;
        case 2:
            return NumberEmojis.TWO;
        case 3:
            return NumberEmojis.THREE;
        case 4:
            return NumberEmojis.FOUR;
        case 5:
            return NumberEmojis.FIVE;
        case 6:
            return NumberEmojis.SIX;
        case 7:
            return NumberEmojis.SEVEN;
        case 8:
            return NumberEmojis.EIGHT;
        case 9:
            return NumberEmojis.NINE;
        case 10:
            return NumberEmojis.TEN;
    }
}

const convertDiscordEmojiToNumber = (emoji: Emoji) => {
    switch (emoji.name) {
        case NumberEmojis.ONE:
            return 1;
        case NumberEmojis.TWO:
            return 2;
        case NumberEmojis.THREE:
            return 3;
        case NumberEmojis.FOUR:
            return 4;
        case NumberEmojis.FIVE:
            return 5;
        case NumberEmojis.SIX:
            return 6;
        case NumberEmojis.SEVEN:
            return 7;
        case NumberEmojis.EIGHT:
            return 8;
        case NumberEmojis.NINE:
            return 9;
        case NumberEmojis.TEN:
            return 10;
        default:
            return null;
    }
}
