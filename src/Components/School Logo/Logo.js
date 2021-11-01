import './Logo.css';
import logo  from './logo.png';

function Logo(){
    return(
        <div className="Container">
            <img src={logo} className="image"></img>
        </div>
    )
}
export default Logo;