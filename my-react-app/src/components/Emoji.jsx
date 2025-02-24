import { useEmojiContext } from "../context/EmojiContext";

function Emoji() {
    const {emoji, handleSwitchEmoji} = useEmojiContext('😊');

    return(
        <div className="Emoji componentBox">
            Emoji: {emoji}
            <button onClick={handleSwitchEmoji}>Switch Emoji</button>
        </div>
    )
}

export default Emoji;