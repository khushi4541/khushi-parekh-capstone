import Calendar from "../../assets/images/calendar.svg";
import './WelcomeCard.scss'

function WelcomeCard() {
  return (
    <section className="card">
      <div className="card__text">
        <h3 className="card__greeting">
          Hi, <span className="card__greeting--bold">Julia</span>
        </h3>
        <p className="card__tasks">You have 3 tasks for today</p>
      </div>
      <img
        src={Calendar}
        alt="purple calendar with man peeking out from behind"
        className="card__image"
      />
    </section>
  );
}

export default WelcomeCard;
