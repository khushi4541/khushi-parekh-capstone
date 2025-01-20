import emptyInbox from "../../assets/images/empty-inbox.svg"
import "./EmptyInbox.scss"

function EmptyInbox () {
    return (
        <article className="empty">
            <p className="empty__message">You're all caught up on friend requests!</p>
            <img src={emptyInbox} alt="vector art mailbox with a bug flying out of it" className="empty__image" />
        </article>
    )
}

export default EmptyInbox;