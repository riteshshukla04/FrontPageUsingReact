
import './intro.css';


function Intro(props){
    return(
        <div className="container">
            <div className="innerContainer">
                <p>Name- {props.name}</p>
                <p>Roll- {props.roll}</p>
                <p>Class -{props.classes}</p>
                <p>Session - {props.session}</p>

            
            
            
            </div>

        </div>
    )
}
export default Intro;