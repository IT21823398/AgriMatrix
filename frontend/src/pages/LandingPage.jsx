import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';

function LandingPage() {
    return (
        <body>
            <div class="container">
                <div class="sign-in">
                    <p id="p1">For Tomorrow's</p>
                    <p id="p2">Future.</p>
                    <form id="sign-in-form">
                        <input type="text" id="username" name="username" placeholder="Username" />
                        <input type="password" id="password" name="password" placeholder="Password" required />
                        <button type="submit" className="submit-btn">Log in</button><br />
                        <hr id="horizontal" />
                        <button class="s-btn"><img src={google} height="18px" />Sign in with Google</button>
                        <br />
                        <button class="s-btn"><img src={facebook} height="18px" />Sign in with Facebook</button>
                    </form>
                </div>
            </div>
        </body>
    );
}





export default LandingPage