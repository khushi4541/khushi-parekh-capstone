import Logo from '../../assets/logo/levelup-logo.svg';
// import Logo from "../../assets/logo/levelup-logo";
import "./Header.scss";

function Header() {
  return (
    <section className="header">
      <img src={Logo} alt='level up logo' />
      <div className="header__profile"></div>
    </section>
  );
}

export default Header;
