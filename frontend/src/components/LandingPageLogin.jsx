import '../styles/LandingPageLogin.css';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';

function LandingPage() {
    return (
        <body>
            <div class="container">
                <div class="sign-in">
                    <p id="p1">Next Future</p>
                    <p id="p2">Agriculture.</p>
                    <form id="sign-in-form">
                        <input type="text" id="username" name="username" placeholder="Username" />
                        <input type="password" id="password" name="password" placeholder="Password" required />
                        <br /><br />
                        <button type="submit" className="submit-btn">Log in</button>
                        <br /><br />
                        <hr id="horizontal" />
                        <br /><br />
                        <button class="Oauth-btn"><img src={google} height="16px" />Sign in with Google</button>
                        <br />
                        <button class="Oauth-btn"><img src={facebook} height="16px" />Sign in with Facebook</button>
                    </form>
                </div>
            </div>
        </body>
    );
}





export default LandingPage