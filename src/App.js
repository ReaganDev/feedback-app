import Header from './components/Header'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { useState } from 'react'
import FeedbackData from './data/FeedbackData'
import AboutPage from './components/pages/AboutPage'
import AboutIcon from './components/AboutIcon'

function App() {
	const [feedback, setFeedback] = useState(FeedbackData)
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
		<Router>
			<Header />
			<div className='container'>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<>
								<FeedbackForm handleAdd={addFeedback} />
								<FeedbackStats feedback={feedback} />
								<FeedbackList feedback={feedback} handleDelete={handleDelete} />
							</>
						}
					></Route>
					<Route path='/about' element={<AboutPage />} />
				</Routes>
				<AboutIcon />
			</div>
		</Router>
	)
}

export default App
