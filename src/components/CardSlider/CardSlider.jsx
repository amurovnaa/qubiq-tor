import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

import styles from "./CardSlider.module.css";
import firstCardImg from "../../img/card1.png";
import secondCardImg from "../../img/card2.png";
import thirdCardImg from "../../img/card3.png";

const CardSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 1278px)": {
        slides: { perView: 3, spacing: 78 },
      },
      "(min-width: 1920px)": {
        slides: { perView: 3, spacing: 145 },
      },
    },
  });

  const cards = [
    {
      img: firstCardImg,
      title: "Yield Aggregator",
      description: "One-click yield aggregation",
      text: "Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity",
    },
    {
      img: secondCardImg,
      title: "Yield-backed Stablecoin",
      description: "Unlock liquidity with BYD",
      text: "Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time",
    },
    {
      img: thirdCardImg,
      title: "Boost DeFi Liquidity",
      description: "Boost protocols, earn more",
      text: "Your liquidity empowers DeFi — vote for pools, earn bribes, and maximize your rewards.",
    },
  ];

  return (
    <div>
      <div ref={sliderRef} className={`keen-slider ${styles.keenSlider}`}>
        {cards.map((card, idx) => (
          <div key={idx} className={`keen-slider__slide ${styles.slide}`}>
            <img className={styles.cardImg} src={card.img} alt="Card" />
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIndex}>{idx + 1}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>
              <div className={styles.cardTexts}>
                <p className={styles.cardDescription}>{card.description}</p>
                <p className={styles.cardText}>{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className={styles.indicators}>
        {cards.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${
              currentSlide === idx ? styles.dotActive : ""
            }`}
            onClick={() => slider.current?.moveToIdx(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
