import "./FriendRequest.scss"
import profileImage from "../../assets/icons/account-icon.svg"
import acceptIcon from "../../assets/icons/accept-icon.svg"
import declineIcon from "../../assets/icons/decline-icon.svg"

function FriendRequest() {
  return (
  <article className="request">
    <img src={profileImage} alt="account profile placeholder" className="request__image" />
    <p className="request__text"><span className="request__text--bold">Username</span> has sent you a friend request</p>
    <div className="request__options">
      <img src={acceptIcon} alt="" className="request__icon" />
      <p className="request__action">Accept</p>
    </div>
    <div className="request__options">
      <img src={declineIcon} alt="red X" className="request__icon" />
      <p className="request__action">Decline</p>
    </div>
  </article>)
}

export default FriendRequest;
