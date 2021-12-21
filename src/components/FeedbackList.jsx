import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
import Proptypes from 'prop-types'

const FeedbackList = ({ feedback, handleDelete }) => {
	if (!feedback || feedback.length === 0) {
		return <p>No feedback yet</p>
	}
	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map((feed, index) => (
                    <motion.div key={index} initial={{ opacity: 0 }}
                        animate={{opacity : 1}} exit={{opacity : 0}}
                    >
						<FeedbackItem key={index} item={feed} handleDelete={handleDelete} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}

FeedbackList.propTypes = {
	feedback: Proptypes.arrayOf(
		Proptypes.shape({
			id: Proptypes.number.isRequired,
			rating: Proptypes.number.isRequired,
			text: Proptypes.string.isRequired,
		})
	),
}

export default FeedbackList
