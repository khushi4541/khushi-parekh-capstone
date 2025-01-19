import HabitCard from "../HabitCard/HabitCard";
import "./HabitsList.scss";

function HabitsList({habitData, getHabitData, openModal}) {
  return (
    <section className="list">
      {habitData.map((data) => (
        <HabitCard data={data} key={data.id} getHabitData={getHabitData} openModal={openModal}/>
      ))}
    </section>
  );
}

export default HabitsList;
