import { useState } from "react";
import styles from "./Header.module.css";
import clsx from "clsx";
import Container from "../Container/Container.jsx";
import logo from "../../assets/logo.png";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <img className={styles.logoImg} src={logo} alt="logo"></img>
            <span className={styles.logoText}>Backyard</span>
          </div>

          <ul className={styles.navLinks}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#how-works">How it works</a>
            </li>
            <li>
              <a href="#token">Token design</a>
            </li>
            <li>
              <a href="#flywheel">YARD flywheel</a>
            </li>
          </ul>

          <div className={styles.actions}>
            <button className={styles.connectBtn}>Connect</button>
          </div>

          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className={clsx(styles.icon, styles.iconCloseMenu)}>
                <use href="/src/assets/sprite.svg#icon-closeMenu"></use>
              </svg>
            ) : (
              <svg className={clsx(styles.icon, styles.iconOpenMenu)}>
                <use href="/src/assets/sprite.svg#icon-openMenu"></use>
              </svg>
            )}
          </button>
        </nav>

        {menuOpen && (
          <div className={styles.mobileMenu}>
            <ul className={styles.mobileMenuList}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#how-works">How it works</a>
              </li>
              <li>
                <a href="#token">Token design</a>
              </li>
              <li>
                <a href="#flywheel">YARD flywheel</a>
              </li>
            </ul>
            <div className={styles.btnContainer}>
              <button className={styles.connectMenuBtn}>Connect</button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
