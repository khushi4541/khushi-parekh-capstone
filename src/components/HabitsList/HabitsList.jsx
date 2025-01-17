import HabitCard from "../HabitCard/HabitCard";
import "./HabitsList.scss";

function HabitsList({habitData}) {
    console.log(habitData)
  return (
    <section className="list">
      {habitData.map((data) => (
        <HabitCard data={data} key={data.id} />
      ))};
    </section>
  );
}

export default HabitsList;
