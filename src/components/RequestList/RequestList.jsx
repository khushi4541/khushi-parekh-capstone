import { useState, useEffect } from "react";
import FriendRequest from "../FriendRequest/FriendRequest";
import axios from "axios";
import { baseURL } from "../../../utils/api";
import "./RequestList.scss";
import EmptyInbox from "../EmptyInbox/EmptyInbox";

function RequestList({ fetchLeaderboard }) {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [friendRequests, setFriendRequests] = useState([]);
  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchFriendRequests = async () => {
      try {
        const response = await axios.get(`${baseURL}/friends/requests`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setFriendRequests(response.data);
      } catch (error) {
        console.error("Error fetching friend requests:", error);
      }
    };
    setIsLoading(false);
    fetchFriendRequests();
  }, []);

  const handleAction = (id) => {
    setFriendRequests(friendRequests.filter((request) => request.id !== id));
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  if (isLoading) {
    return <h3 className="dashboard__loading">Loading requests...</h3>;
  }

  return (
    <section className="request-list">
      <h3 className="request-list__title">Friend Requests</h3>
      {!isLoading && message ? (
        <p className="request__message">{message}</p>
      ) : (
        ""
      )}
      {friendRequests.length === 0 ? (
        <EmptyInbox />
      ) : (
        friendRequests.map((request) => (
          <FriendRequest
            request={request}
            key={request.id}
            handleAction={handleAction}
            setMessage={setMessage}
            fetchLeaderboard={fetchLeaderboard}
          />
        ))
      )}
    </section>
  );
}

export default RequestList;
