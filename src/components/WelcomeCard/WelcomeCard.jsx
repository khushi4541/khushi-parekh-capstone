import Calendar from "../../assets/images/calendar.svg";
import './WelcomeCard.scss'

function WelcomeCard( {userData, habitData}) {
  return (
    <section className="card">
      <div className="card__text">
        <h3 className="card__greeting">
          Hi, <span className="card__greeting--bold">{userData.first_name}</span>
        </h3>
        <p className="card__tasks">You have {habitData.length} tasks for today</p>
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
