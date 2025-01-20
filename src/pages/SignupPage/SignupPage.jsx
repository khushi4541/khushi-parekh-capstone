import VectorArt from "../../assets/images/signup.svg";
import SignupForm from "../../components/SignupForm/SignupForm";
import { useNavigate, Link } from "react-router-dom";
import "./SignupPage.scss";

function SignupPage() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <section className="signup">
      <div className="signup__header">
        <img src={VectorArt} alt="" className="signup__image" />
        <svg
          onClick={handleBack}
          className="signup__arrow"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.11667 20.8833C3.88258 20.6489 3.7511 20.3312 3.7511 20C3.7511 19.6687 3.88258 19.351 4.11667 19.1166L15.7617 7.44998C15.8769 7.33054 16.0148 7.23525 16.1673 7.16966C16.3198 7.10408 16.4838 7.06952 16.6497 7.068C16.8157 7.06648 16.9803 7.09803 17.134 7.16081C17.2876 7.22359 17.4272 7.31634 17.5446 7.43365C17.6621 7.55096 17.7549 7.69048 17.8179 7.84407C17.8808 7.99766 17.9125 8.16224 17.9111 8.32822C17.9098 8.49419 17.8754 8.65823 17.8099 8.81077C17.7445 8.9633 17.6493 9.10128 17.53 9.21665L8.01666 18.7483L35 18.73C35.3315 18.7295 35.6496 18.8608 35.8844 19.0949C36.1191 19.329 36.2512 19.6468 36.2517 19.9783C36.2521 20.3098 36.1208 20.628 35.8867 20.8627C35.6526 21.0974 35.3349 21.2295 35.0033 21.23L8.01333 21.2466L17.5317 30.7833C17.651 30.8987 17.7462 31.0367 17.8116 31.1892C17.877 31.3417 17.9114 31.5058 17.9128 31.6717C17.9142 31.8377 17.8825 32.0023 17.8195 32.1559C17.7566 32.3095 17.6637 32.449 17.5463 32.5663C17.4289 32.6836 17.2893 32.7764 17.1356 32.8391C16.982 32.9019 16.8174 32.9335 16.6514 32.932C16.4854 32.9304 16.3214 32.8959 16.1689 32.8303C16.0165 32.7647 15.8786 32.6694 15.7633 32.55L4.11667 20.8833Z"
          />
        </svg>
      </div>
      <SignupForm />
      <p className="signup__text">
        Already have an account?{" "}
        <Link to={"/login"} className="signup__link">
          <span className="signup__text--bold">Log in</span>
        </Link>
      </p>
    </section>
  );
}

export default SignupPage;
