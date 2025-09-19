import clsx from "clsx";
import Container from "../../components/Container/Container.jsx";
import Header from "../../components/Header/Header.jsx";
import styles from "./Homepage.module.css";
const Homepage = () => {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={styles.heroTexts}>
              <h1 className={styles.title}>
                The yield-backed stablecoin protocol boosting DeFi
                <span className={styles.logoImgBox}>
                  <img
                    className={styles.logoImg}
                    src="/src/img/hero.png"
                    alt="Flower"
                  ></img>
                </span>
                liquidity
              </h1>
              <p className={styles.subtitle}>
                Keep your yield working for you — we keep your liquidity
                accessible
              </p>
            </div>

            <img
              className={styles.tabletLogoImg}
              src="/src/img/hero-tablet.png"
              alt="Flower"
            ></img>
          </div>
          <ul className={styles.buttons}>
            <li>
              <button className={styles.primaryBtn}>Join Whitelist</button>
            </li>
            <li>
              <button className={styles.secondaryBtn}>
                <span>Learn More</span>
                <svg className={clsx(styles.icon, styles.iconRightArrow)}>
                  <use href="/src/assets/sprite.svg#iconRightArrow"></use>
                </svg>
              </button>
            </li>
          </ul>
        </section>
      </Container>
    </>
  );
};

export default Homepage;
