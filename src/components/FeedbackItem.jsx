import Card from './shared/Card'
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackProvider'

const FeedbackItem = ({ item }) => {
	const { handleDelete, editFeedback } = useContext(FeedbackContext)
   
	return (
		<Card reverse={true}>
			<div className='num-display'>{item.rating}</div>
			<button onClick={() => handleDelete(item.id)} className='close'>
				<FaTimes color='red' />
			</button>
			<button  onClick={() => editFeedback(item)} className="edit">
				<FaEdit color='blue' />
			</button>
			<div className='text-display'>{item.text}</div>
		</Card>
	)
}


export default FeedbackItem
