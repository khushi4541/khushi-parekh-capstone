import { useState } from "react";
import completedIcon from "../../assets/icons/complete-icon.svg";
import incompleteIcon from "../../assets/icons/incomplete-icon.svg";
import { baseURL } from "../../../utils/api";
import deleteIcon from "../../assets/icons/delete-icon.svg";
import streak from "../../assets/icons/streak-icon.svg";
import axios from "axios";
import "./HabitCard.scss";

function HabitCard({ data, getHabitData }) {
  const [streakData, setStreakData] = useState(data);
  const [isCompleted, setIsCompleted] = useState(data.completed);
  const [hasStreak, setHasStreak] = useState(data.streak_count);
  const authToken = localStorage.getItem("authToken");

  const updateHabitCompletion = async () => {
    setIsCompleted(!isCompleted);
    try {
      const response = await axios.post(
        `${baseURL}/habits/${data.id}/completion`,
        { completed: !isCompleted },
        {
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      );
      setStreakData(response.data.habit);
      setHasStreak(response.data.habit.streak_count);
      getHabitData();
    } catch (error) {
      console.error("Error updating habit completion:", error);
    }
  };

  return (
    <article className="habit-card">
      {isCompleted ? (
        <img
          src={completedIcon}
          alt="checkmark inside purple circle"
          className="habit-card__completion"
          onClick={updateHabitCompletion}
        />
      ) : (
        <img
          src={incompleteIcon}
          alt="purple circle border"
          className="habit-card__completion"
          onClick={updateHabitCompletion}
        />
      )}
      <div className="habit-card__text">
        <p className="habit-card__title">{data.title}</p>
        {hasStreak ? (
          <div className="habit-card__streak-div">
            <p className="habit-card__streaks">
              {streakData.streak_count}-day streak
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
