import { forwardRef, useState } from "react"
import EmojiSearch from "../emojiSearch";
import { data as emojiList } from './data'

export function EmojiPicker(props, inputRef) {

    const [isOpen, setIsOpen] = useState(false);
    const [emojis, setEmojis] = useState(emojiList)

    // function EmojiPickerContainer() {
    //     return (
    //         <div>
    //             <EmojiSearch onSearch={handleSearch} />
    //             <div>{
    //                 emojiList.map((emoji) => (
    //                     <div key={emoji.symbol}>{emoji.symbol}</div>
    //                 ))}
    //             </div>
    //         </div>
    //     )
    // }

    function handleClickOpen() {
        setIsOpen(!isOpen)
    }

    function handleSearch(e) {
        const query = e.target.value;
        if (!!query) {
            const search = emojiList.filter(emoji => {
                return emoji.name.toLowerCase().includes(query) ||
                    emoji.keywords.toLowerCase().includes(query)
            });
            setEmojis(search)
        } else {
            setEmojis(emojiList)
        }
    }

    return <div>
        <button onClick={handleClickOpen}>😊</button>
        {isOpen ?( <div>
                <EmojiSearch onSearch={handleSearch} />
                <div>{
                    emojiList.map((emoji) => (
                        <div key={emoji.symbol}>{emoji.symbol}</div>
                    ))}
                </div>
            </div>) : ""}
    </div>
}

export default forwardRef(EmojiPicker)