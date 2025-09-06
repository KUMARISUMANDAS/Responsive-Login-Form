import SocialLogin from "./components/SocialLogin";
import InputField from "./InputField";

const App = () => {
  return (
    <div className="Login-container">
      <h2 className="form-title">Log In With</h2>
      
      <SocialLogin />

      <p className="separator">
        <span>or</span>
      </p>

      <form action="#" className="login-form">
        <InputField type="email" placeholder="Email address" icon="mail"/>
        <InputField type="password" placeholder="Password" icon="lock"/>
        
        <a href="#" className="forgot-pass-link">Forgot Password?</a>

        <button className="login-button">Log In</button>
      </form>
      <p className="signup-text">Don&apos;t have an account? <a href="#"> Signup Now</a></p>
    </div>
  );
};

export default App;
