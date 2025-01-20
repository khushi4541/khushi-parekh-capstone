import "./LeaderBoardItem.scss";
import streakIcon from "../../assets/icons/streak-icon.svg";

function LeaderBoardItem({ data, index }) {
  return (
    <article className="board-item">
      <p className="board-item__text board-item__username">{data.username}</p>
      <p className="board-item__text">#{index + 1}</p>
      <div className="board-item__streak">
        <p className="board-item__text board-item__streak-count">
          {data.total_streaks}
        </p>
        <img
          src={streakIcon}
          alt="purple flame"
          className="board-item__image"
        />
      </div>
      <p className="board-item__text">{data.active_habits}</p>
      <p className="board-item__text">{parseFloat(data.score).toFixed(2)}</p>
    </article>
  );
}

export default LeaderBoardItem;
