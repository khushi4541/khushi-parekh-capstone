import VectorArt from "../../assets/images/friends.svg";
import LeaderBoard from "../../components/LeaderBoard/LeaderBoard";
import RequestList from "../../components/RequestList/RequestList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";
import axios from "axios";
import { baseURL } from "../../../utils/api";
import "./FriendsPage.scss";

function FriendsPage() {
  const [leaderboard, setLeaderboard] = useState([]);
  const authToken = localStorage.getItem("authToken");

  const fetchLeaderboard = async () => {
    try {
      const response = await axios.get(`${baseURL}/friends/leaderboard`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setLeaderboard(response.data);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    }
  };

  return (
    <section className="friends-page">
      <div className="friends-page__header">
        <img
          src={VectorArt}
          alt="3 friends raising their arms in the air"
          className="friends-page__image"
        />
      </div>
      <SearchBar />
      <RequestList fetchLeaderboard={fetchLeaderboard} />
      <LeaderBoard fetchLeaderboard={fetchLeaderboard} leaderboard={leaderboard}/>
    </section>
  );
}

export default FriendsPage;
