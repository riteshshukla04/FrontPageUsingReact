import './Logo.css';
import logo  from './logo.gif';

function Logo(props){
    return(
        <div className="Container">
            <img src={props.url? props.url : logo} className="image" alt="LOGO"></img>
        </div>
    )
}
export default Logo;