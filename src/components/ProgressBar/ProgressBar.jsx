import "./ProgressBar.scss";
import AddIcon from "../../assets/icons/AddIcon";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function ProgressBar({ habitData }) {
  const totalHabits = habitData.length;
  const completedHabits = habitData.filter((habit) => habit.completed).length;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress((completedHabits / totalHabits) * 100);
    }, 300);

    return () => clearTimeout(timeout);
  }, [completedHabits, totalHabits]);

  const getMessage = () => {
    if (progress === 100) return "Amazing! All habits completed!";
    if (progress >= 75) return "You're almost there! Keep going!";
    if (progress >= 50) return "Great progress so far!";
    if (progress >= 25) return "You're just getting started!";
    return "Let's start crushing those habits!";
  };

  return (
    <section className="progress">
      <div className="progress__group">
        <p className="progress__text">{getMessage()}</p>
        <div className="progress__bar">
          <div
            className="progress__fill"
            style={{ width: `${progress}%` }}
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
