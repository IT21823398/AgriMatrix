import { Link } from 'react-router-dom';
import './styles/LandingPage.css';
import google from './assets/google.png';
import facebook from './assets/facebook.png';

function LandingPage() {
    return (
        <body>
            <div class="container">
                <div class="sign-in">
                    <p id="p1">For Tomorrow's</p>
                    <p id="p2">Future.</p>
                    <button class="s-btn"><img src={google} width="18px" height="18px" />Sign in with Google</button>
                    <br />
                    <button class="s-btn"><img src={facebook} width="18px" height="18px" />Sign in with Facebook</button>
                    <hr id="horizontal" />
                    <Link to="/sign-in">
                        <button className="c-btn">Sign in</button>
                    </Link>
                </div>
            </div>
        </body>
    );
}





export default LandingPage