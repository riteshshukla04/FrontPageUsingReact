import './Logo.css';
import logo  from './logo.gif';

function Logo(){
    return(
        <div className="Container">
            <img src={logo} className="image" alt="LOGO"></img>
        </div>
    )
}
export default Logo;