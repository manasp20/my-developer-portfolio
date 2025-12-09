import React, {useContext} from "react";
import {achievementSection} from "../../portfolio";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import StyleContext from "../../contexts/StyleContext";
import "./Achievement.scss";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);

  if (!achievementSection.display) return null;

  return (
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1 className={isDark ? "dark-mode heading" : "heading"}>
            {achievementSection.title}
          </h1>
          <p className={isDark ? "dark-mode subTitle" : "subTitle"}>
            {achievementSection.subtitle}
          </p>
        </div>

        <div className="achievement-cards-div">
          {achievementSection.achievementsCards?.map((card, index) => (
            <AchievementCard key={index} cardInfo={card} isDark={isDark} />
          ))}
        </div>
      </div>
    </div>
  );
}
