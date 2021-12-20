import { useState } from "react"
import Card from "./shared/Card"

const FeedbackForm = () => {
    const [text, setText] = useState('')
    const handleTextChange = (e) => {
        setText(e.target.value);
    }
    return (
        <Card>
            <form>
                <h2>How would you rate our service</h2>
                <div className="input-group">
                    <input value={text} onChange={handleTextChange} type="text" placeholder="write a review"/>
                    <button type="submit">Send</button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm
