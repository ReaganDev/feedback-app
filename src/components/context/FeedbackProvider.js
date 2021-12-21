import { v4 as uuidv4 } from 'uuid'
import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [feedback, setFeedback] = useState([])
	
	useEffect(() => {
		fetchFeedback()
	}, [])
	
	// FETCH FEEDBACK
	const fetchFeedback = async () => {
		const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=asc`)
		const data = await response.json()
		setFeedback(data);
		setIsLoading(false)
	}

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit : false
	})

    const handleDelete = (id) => {
			if (window.confirm('Are you sure?')) {
				setFeedback(feedback.filter((feed) => feed.id !== id))
			}
	}
	
	const addFeedback = (newFeedback) => {
		feedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}

	const updateFeedback = (id, updItem) => {
		setFeedback(feedback.map(item => item.id === id ? {...feedback, ...updItem} : item))
	}

	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit : true
		})
	}

    return (
			<FeedbackContext.Provider
				value={{
					feedback,
					handleDelete,
					addFeedback,
					editFeedback,
					feedbackEdit,
					updateFeedback,
				}}
			>
				{children}
			</FeedbackContext.Provider>
		)
}

export default FeedbackContext