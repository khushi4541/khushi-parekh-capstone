import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL } from "../../../utils/api";
import "./HomePage.scss";
import HabitsList from "../../components/HabitsList/HabitsList";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

function Homepage({ openModal }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({});
  const [habitData, setHabitData] = useState({});

  const authToken = localStorage.getItem("authToken");

  const getUserData = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/users/profile`, {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });

      setUserData(data);
    } catch (error) {
      if (error.status === 401) {
        setError("You must be logged in to view this page");
      }
    }
  };

  const getHabitData = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/habits/`, {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });

      setHabitData(data);
    } catch (error) {
      if (error.status === 401) {
        setError("You must be logged in to view this page");
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([getUserData(), getHabitData()]);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <section className="dashboard">
      {isLoading && <h1 className="dashboard__loading">Loading...</h1>}
      {!isLoading && error && <h1 className="dashboard__error">{error}</h1>}
      {!isLoading && !error && (
        <>
          <WelcomeCard userData={userData} habitData={habitData} />
          <ProgressBar habitData={habitData} />
          <HabitsList
            habitData={habitData}
            getHabitData={getHabitData}
            openModal={openModal}
          />
        </>
      )}
    </section>
  );
}

export default Homepage;
