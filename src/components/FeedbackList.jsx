import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback }) => {
    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }
    return (
        <div className="feedback-list">
            {feedback.map((feed, index) => (
                <FeedbackItem key={index} item={feed} />
            ))}
        </div>
    )
}



export default FeedbackList
