import FeedbackItem from "./FeedbackItem";
import Proptypes from 'prop-types'

const FeedbackList = ({ feedback, handleDelete }) => {
    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }
    return (
        <div className="feedback-list">
            {feedback.map((feed, index) => (
                <FeedbackItem key={index} item={feed} handleDelete={handleDelete} />
            ))}
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: Proptypes.arrayOf(
        Proptypes.shape({
            id: Proptypes.number.isRequired,
            rating: Proptypes.number.isRequired,
            text : Proptypes.string.isRequired
        })
    )
}

export default FeedbackList
