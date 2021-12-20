import Header from './components/Header'
import {v4 as uuidv4} from 'uuid'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { useState } from 'react'
import FeedbackData from './data/FeedbackData'

function App() {
	const [feedback, setFeedback] = useState(FeedbackData)
	const handleDelete = (id) => {
		if (window.confirm('Are you sure?')) {
			setFeedback(feedback.filter((feed) => feed.id !== id))
		}
	}

	const addFeedback = (newFeedback) => {
		feedback.id = uuidv4()
		setFeedback([newFeedback,...feedback])
	}
	return (
		<>
			<Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={handleDelete} />
			</div>
		</>
	)
}

export default App
