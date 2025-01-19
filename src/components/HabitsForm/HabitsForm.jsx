import { useNavigate } from "react-router-dom";
import { useState } from "react";
import errorIcon from "../../assets/icons/error-icon.svg";
import { baseURL } from "../../../utils/api";
import axios from "axios";
import "./HabitsForm.scss";

function HabitsForm() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    frequency: "Daily",
  });
  const authToken = localStorage.getItem("authToken");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      setError("Title is required.");
      return;
    }

    try {
      await axios.post(
        `${baseURL}/habits/`,
        {
          title: formData.title,
          frequency: formData.frequency,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article className="habits-form">
      <h1 className="habits-form__title">Add a new habit</h1>
      <form className="habits-form__form" onSubmit={handleSubmit}>
        <div className="habits-form__functions">
          <div className="habits-form__form-group">
            <p className="habits-form__label">Habit Title</p>
            <input
              type="text"
              className="habits-form__input"
              name="title"
              onChange={handleChange}
            />
            {error && (
              <div className="habits-form__error-message">
                <img
                  src={errorIcon}
                  alt="error icon with x in middle"
                  className="habits-form__error-icon"
                />
                <p className="habits-form__error">{error}</p>
              </div>
            )}
          </div>
          <div className="habits-form__form-group">
            <p className="habits-form__label">Frequency</p>
            <select
              className="habits-form__dropdown"
              id="frequency"
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
          <div className="habits-form__buttons">
            <button
              className="habits-form__cancel"
              type="button"
              onClick={() => navigate("/dashboard")}
            >
              Cancel
            </button>
            <button className="habits-form__action" type="submit">
              Add Habit
            </button>
          </div>
        </div>
      </form>
    </article>
  );
}

export default HabitsForm;
