import "./FriendRequest.scss";
import profileImage from "../../assets/icons/account-icon.svg";
import acceptIcon from "../../assets/icons/accept-icon.svg";
import declineIcon from "../../assets/icons/decline-icon.svg";
import { baseURL } from "../../../utils/api";
import axios from "axios";
import { useState } from "react";

function FriendRequest({ request, handleAction }) {
  const [message, setMessage] = useState("");
  const requestId = request.id;
  const authToken = localStorage.getItem("authToken")

  const handleRequest = async (action) => {
    try {
      if (action === "accept") {
        await axios.patch(
          `${baseURL}/friends/request/${requestId}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setMessage("Friend request accepted!");
      } else if (action === "decline") {
        await axios.delete(`${baseURL}/friends/request/${requestId}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setMessage("Friend request declined.");
      }
      handleAction(requestId); 
    } catch (error) {
      console.error("Error processing friend request:", error);
    }
  };

  return (
    <article className="request">
      <img
        src={profileImage}
        alt="account profile placeholder"
        className="request__image"
      />
      <p className="request__text">
        <span className="request__text--bold">{request.sender_username}</span>{" "}
        has sent you a friend request
      </p>
      <div className="request__options">
        <img src={acceptIcon} alt="purple checkmark" className="request__icon" onClick={() => handleRequest("accept")}/>
        <p className="request__action">Accept</p>
      </div>
      <div className="request__options">
        <img src={declineIcon} alt="red X" className="request__icon" />
        <p className="request__action">Decline</p>
      </div>
    </article>
  );
}

export default FriendRequest;
