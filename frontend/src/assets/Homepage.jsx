import './css/homepage.css';
import fitpro_img from './assets/FitPro.png';
import google from './assets/google.png';
import facebook from './assets/facebook.png';
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <body>
            <div class="container1">
                <div class="image_1">
                    <img src={fitpro_img} width="650px" height="650px" />
                </div>
                <div class="sign-in">
                    <p id="p1">Happening now</p>
                    <p id="p2">Join today.</p>
                    <button class="s-btn"><img src={google} width="18px" height="18px" />Sign up with Google</button>
                    <br />
                    <button class="s-btn"><img src={facebook} width="18px" height="18px" />Sign up with Facebook</button>
                    <hr id="horizontal" />
                    <Link to="/register">
                        <button className="c-btn">Create account</button>
                    </Link>
                    <p id="terms">By signing up, you agree to the <a href="" >Terms & Conditions</a> and <a href="" >Privacy Policy.</a></p><br /><br />
                    <p id="already_have_an_account">Already have an account?</p>
                    <Link to="/login">
                        <button class="existing-sign-in">Sign in</button>
                    </Link>
                </div>
            </div>
        </body>
    );
}





export default Homepage