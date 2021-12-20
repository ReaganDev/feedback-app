import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import { useState } from 'react'
import FeedbackData from './data/FeedbackData'

function App() {
	const [feedback, setFeedback] = useState(FeedbackData)
	const handleDelete = (id) => {
		if (window.confirm('Are you sure?')) {
			setFeedback(feedback.filter((feed) => feed.id !== id))
		}
	}
	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackList feedback={feedback} handleDelete={handleDelete} />
			</div>
		</>
	)
}

export default App
