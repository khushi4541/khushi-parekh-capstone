import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL } from "../../../utils/api";
import "./HomePage.scss";

function Homepage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    const authToken = localStorage.getItem("authToken");

    try {
      const { data } = await axios.get(`${baseURL}/users/profile`, {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });

      setUserData(data);
      setIsLoading(false);
    } catch (error) {
      // If the backend responded with a 401 status, that means their JWT isn't valid
      if (error.status === 401) {
        setError("You must be logged in to view this page");
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      {isLoading && <h1 className="home__loading">Loading...</h1>}
      {!isLoading && !error && <WelcomeCard data={userData} />}
    </>
  );
}

export default Homepage;
