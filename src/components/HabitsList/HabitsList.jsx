import HabitCard from "../HabitCard/HabitCard";
import './HabitsList.scss'

function HabitsList(habitData) {
  return (
    <section className="list">
      <HabitCard />
    </section>
  );
}

export default HabitsList;
