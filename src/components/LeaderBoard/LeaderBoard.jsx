import LeaderBoardItem from "../LeaderBoardItem/LeaderBoardItem";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../../utils/api";
import "./LeaderBoard.scss";

function LeaderBoard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [error, setError] = useState("");
  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get(`${baseURL}/friends/leaderboard`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setLeaderboard(response.data);
      } catch (error) {
        setError("Failed to fetch leaderboard. Please try again.");
        console.error("Error fetching leaderboard:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  if (error) {
    return <p className="leaderboard__error">{error}</p>;
  }

  return (
    <section className="leaderboard">
      <h3 className="leaderboard__title">Leaderboard</h3>
      <article className="leaderboard__body">
        <div className="leaderboard__headings">
          <p className="leaderboard__heading">Username</p>
          <p className="leaderboard__heading">Rank</p>
          <p className="leaderboard__heading">Total streaks</p>
          <p className="leaderboard__heading">Active habits</p>
          <p className="leaderboard__heading">Score</p>
        </div>
        {leaderboard.map((data, index) => (
          <LeaderBoardItem key={data.user_id} data={data} index={index} />
        ))}
      </article>
    </section>
  );
}

export default LeaderBoard;
