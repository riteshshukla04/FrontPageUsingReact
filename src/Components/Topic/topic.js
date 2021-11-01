import './topic.css';


function Topic(props){
    return(
        <div className="Container">
            TOPIC :- {props.topic}
        </div>
    )
}
export default Topic;