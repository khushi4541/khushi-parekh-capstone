import Logo from "../../assets/logo/levelup-logo.svg";
import { Link } from "react-router-dom";
import "./LandingPage.scss";

function LandingPage() {
  return (
    <section className="landing">
      <div className="landing__content">
        <img src={Logo} alt="level up logo" className="landing__logo" />
        <div className="landing__interactions">
          <Link to={"/login"} className="landing__link">
            <button className="landing__button">Log in</button>
          </Link>
          <p className="landing__text">
            Don't have an account?{" "}
            <Link to={"/signup"} className="landing__link">
              <span className="landing__text--bold">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
