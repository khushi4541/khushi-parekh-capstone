import Logo from '../../assets/logo/levelup-logo.svg';
import Profile from '../../assets/icons/account-icon.svg'
import { useLocation } from 'react-router-dom';
import "./Header.scss";

function Header() {
  const location = useLocation();
  const hideHeader = ["/", "/login", "/signup", "/add-habit"];
  const shouldHideHeader = hideHeader.includes(location.pathname);

  return (
    <>
    {!shouldHideHeader && ( <section className="header">
      <img src={Logo} alt='level up logo' />
      <img src={Profile} alt='user account icon' />
    </section>)}
    </>
  );
}

export default Header;
