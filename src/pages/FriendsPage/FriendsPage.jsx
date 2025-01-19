import VectorArt from "../../assets/images/friends.svg";
import RequestList from "../../components/RequestList/RequestList";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./FriendsPage.scss";

function FriendsPage() {
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
      <RequestList />
    </section>
  );
}

export default FriendsPage;
