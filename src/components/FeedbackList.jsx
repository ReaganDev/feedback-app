import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import Spinner from './shared/Spinner'
import FeedbackContext from './context/FeedbackProvider'

const FeedbackList = () => {
	const { feedback, isLoading } = useContext(FeedbackContext)
	
	if (!isLoading && (!feedback || feedback.length === 0)) {
		return <p>No feedback yet</p>
	}
	return isLoading ? <Spinner /> : (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map((feed, index) => (
                    <motion.div key={index} initial={{ opacity: 0 }}
                        animate={{opacity : 1}} exit={{opacity : 0}}
                    >
						<FeedbackItem key={index} item={feed} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}


export default FeedbackList
