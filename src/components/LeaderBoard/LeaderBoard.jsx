import LeaderBoardItem from "../LeaderBoardItem/LeaderBoardItem";
import { useEffect } from "react";
import "./LeaderBoard.scss";

function LeaderBoard({ fetchLeaderboard, leaderboard }) {
  useEffect(() => {
    fetchLeaderboard();
  }, []);

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
