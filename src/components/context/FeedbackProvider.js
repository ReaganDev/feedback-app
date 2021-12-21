import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
			{
				id: 1,
				text: 'This is feedback item 1.',
				rating: 10,
			},
			{
				id: 2,
				text: 'This is feedback item 2.',
				rating: 9,
			},
			{
				id: 3,
				text: 'This is feedback item 3.',
				rating: 8,
			},
		])

    const handleDelete = (id) => {
			if (window.confirm('Are you sure?')) {
				setFeedback(feedback.filter((feed) => feed.id !== id))
			}
	}
	
	const addFeedback = (newFeedback) => {
		feedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}

    return (
			<FeedbackContext.Provider
				value={{
					feedback,
					handleDelete,
					addFeedback,
				}}
			>
				{children}
			</FeedbackContext.Provider>
		)
}

export default FeedbackContext