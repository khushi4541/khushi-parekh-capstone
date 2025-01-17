import { useState } from "react";
import completedIcon from "../../assets/icons/complete-icon.svg";
import incompleteIcon from "../../assets/icons/incomplete-icon.svg";
import deleteIcon from "../../assets/icons/delete-icon.svg";
import streak from "../../assets/icons/streak-icon.svg";
import "./HabitCard.scss";

function HabitCard({ data }) {
  const [isCompleted, setIsCompleted] = useState(data.completed);
  const hasStreak = data.streak_count !== 0;

  console.log(data.completed)

  return (
    <article className="habit-card">
      {isCompleted ? (
        <img
          src={completedIcon}
          alt="checkmark inside purple circle"
          className="habit-card__completion"
        />
      ) : (
        <img
          src={incompleteIcon}
          alt="purple circle border"
          className="habit-card__completion"
        />
      )}
      <div className="habit-card__text">
        <p className="habit-card__title">{data.title}</p>
        {hasStreak ? (
          <div className="habit-card__streak-div">
            <p className="habit-card__streaks">
              {data.streak_count}-day streak
            </p>
            <img
              src={streak}
              alt="purple flame vector art"
              className="habit-card__streak-icon"
            />
          </div>
        ) : (
          <p className="habit-card__streaks">
            Complete today for first streak!
          </p>
        )}
      </div>
      <img
        src={deleteIcon}
        alt="purple vector art trashcan"
        className="habit-card__delete"
      />
    </article>
  );
}

export default HabitCard;
