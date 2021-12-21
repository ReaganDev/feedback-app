import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from './context/FeedbackProvider'

const FeedbackForm = () => {
	const [text, setText] = useState('')
	const [rating, setRating] = useState(10)
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [message, setMessage] = useState('')

	const { addFeedback, updateFeedback, feedbackEdit } =
		useContext(FeedbackContext)

	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setText(feedbackEdit.item.text)
			setRating(feedbackEdit.item.rating)
			setBtnDisabled(false)
		}
	}, [feedbackEdit])
	const handleTextChange = (e) => {
		if (text === '') {
			setMessage(null)
			setBtnDisabled(true)
		} else if (text !== '' && text.trim().length <= 10) {
			setBtnDisabled(true)
			setMessage('Text must be at least 10 characters')
		} else {
			setMessage(null)
			setBtnDisabled(false)
		}
		setText(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (text.trim().length > 10) {
			const feedback = { rating, text }
			if (feedbackEdit.edit === true) {
				updateFeedback(feedbackEdit.item.id, feedback)
			} else {
				addFeedback(feedback)
			}
		}
		setText('')
		setRating(10)
	}
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate our service</h2>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className='input-group'>
					<input
						value={text}
						onChange={handleTextChange}
						type='text'
						placeholder='write a review'
					/>
					<Button isDisabled={btnDisabled} type='submit'>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	)
}

export default FeedbackForm
