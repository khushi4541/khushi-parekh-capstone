import vectorArt from "../../assets/images/add-habits.svg";
import HabitsForm from "../../components/HabitsForm/HabitsForm";
import "./AddHabitsPage.scss";

function AddHabitsPage() {
  return (
    <section className="add-habits">
      <div className="add-habits__header">
        <img src={vectorArt} alt="" className="add-habits__image" />
      </div>
      <HabitsForm />
    </section>
  );
}

export default AddHabitsPage;
