import React from 'react';
import '../assets/styles/components/Login.scss'
import '../assets/styles/components/Media.scss'
import googleIcon from '../assets/static/logo-google.png';
import facebookIcon from '../assets/static/logo-facebook.png';
import twitterIcon from '../assets/static/logo-twitter.png';

const Login = () => {
  return (
    <section className="signin-container">
            <section className="signin-container__welcome">
                <div>
                    <h2 className="signin-container__welcome--title">Welcome</h2>
                    <h3 className="signin-container__welcome--subtitle">Enjoy the best app to track your business.</h3>
                </div>               
                <img className="signin-container__welcome--img" src="https://images.pexels.com/photos/590133/pexels-photo-590133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="welcome-image" />
            </section>

            <section className="signin-container__user-sign">
                    <form className = "signin-container__user-sign--form">
                        <p>Login</p>
                        <input className="input-signin" type="text" placeholder="e-mail" />
                        <input className="input-signin" type="password" placeholder="Contraseña" />
                        <button className="button-signin">Sign In</button>
                        <div className = "signin-container__user-sign--rememberme">
                                <label>
                                        <input type="checkbox" id="cbox1" value="checkbox" />Recuerdame
                                </label>
                            <a href="/">Olvidé mi contraseña</a>
                        </div>
                    </form>
                    <section className="signin-container__user-sign--social">
                        <h2>O inicie sesión con:</h2>
                        <div>
                            <img className="social-icon" src={googleIcon} alt="Google" />
                            <img className="social-icon" src={facebookIcon} alt="Twitter" />
                            <img className="social-icon" src={twitterIcon} alt="Facebook" />
                        </div>
                    </section>
                    <section className="signin-container__user-sign--create-account">
                        <a href="/">CREE UNA NUEVA CUENTA</a>
                    </section>
            </section>
      </section>
  );
};

export default Login;
