import "./Modal.scss";

function Modal({ handleLogout }) {
  return (
    <div className="modal">
      <article className="modal__foreground">
        <div className="modal__body">
          <svg
            className="modal__close"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 21.2167L11.2417 28.975C10.9514 29.2653 10.582 29.4104 10.1333 29.4104C9.68474 29.4104 9.31529 29.2653 9.02502 28.975C8.73474 28.6847 8.5896 28.3153 8.5896 27.8667C8.5896 27.4181 8.73474 27.0486 9.02502 26.7583L16.7834 19L9.02502 11.2417C8.73474 10.9514 8.5896 10.582 8.5896 10.1333C8.5896 9.68474 8.73474 9.31529 9.02502 9.02502C9.31529 8.73474 9.68474 8.5896 10.1333 8.5896C10.582 8.5896 10.9514 8.73474 11.2417 9.02502L19 16.7834L26.7583 9.02502C27.0486 8.73474 27.4181 8.5896 27.8667 8.5896C28.3153 8.5896 28.6847 8.73474 28.975 9.02502C29.2653 9.31529 29.4104 9.68474 29.4104 10.1333C29.4104 10.582 29.2653 10.9514 28.975 11.2417L21.2167 19L28.975 26.7583C29.2653 27.0486 29.4104 27.4181 29.4104 27.8667C29.4104 28.3153 29.2653 28.6847 28.975 28.975C28.6847 29.2653 28.3153 29.4104 27.8667 29.4104C27.4181 29.4104 27.0486 29.2653 26.7583 28.975L19 21.2167Z"
              fill="#553C8B"
            />
          </svg>
          <h3 className="modal__title">Log out?</h3>
          <p className="modal__message">
            Are you sure you would like to log out of your account?
          </p>
        </div>
        <div className="modal__buttons">
          <button className="modal__cancel">Cancel</button>
          <button className="modal__action" onClick={handleLogout}>Log out</button>
        </div>
      </article>
    </div>
  );
}

export default Modal;
