import "./ProgressBar.scss";
import AddIcon from "../../assets/icons/AddIcon";
import { NavLink } from "react-router-dom";

function ProgressBar({ habitData }) {
  const totalHabits = habitData.length;
  const completedHabits = habitData.filter((habit) => habit.completed).length;
  const progressPercentage = (completedHabits / totalHabits) * 100;

  const getMessage = () => {
    if (progressPercentage === 100) return "Amazing! All habits completed!";
    if (progressPercentage >= 75) return "You're almost there! Keep going!";
    if (progressPercentage >= 50) return "Great progress so far!";
    if (progressPercentage >= 25) return "You're just getting started!";
    return "Let's start crushing those habits!";
  };

  return (
    <section className="progress">
      <div className="progress__group">
        <p className="progress__text">{getMessage()}</p>
        <div className="progress__bar">
          <div
            className="progress__fill"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
      <NavLink to={"/add-habit"}>
        <AddIcon className="progress__add" />
      </NavLink>
    </section>
  );
}

export default ProgressBar;
