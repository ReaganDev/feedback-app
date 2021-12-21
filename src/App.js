import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './components/pages/AboutPage'
import { FeedbackProvider } from './components/context/FeedbackProvider'
import AboutIcon from './components/AboutIcon'

function App() {
	
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<>
									<FeedbackForm handleAdd />
									<FeedbackStats/>
									<FeedbackList />
								</>
							}
						></Route>
						<Route path='/about' element={<AboutPage />} />
					</Routes>
					<AboutIcon />
				</div>
			</Router>
		</FeedbackProvider>
	)
}

export default App
