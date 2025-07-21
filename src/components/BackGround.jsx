import { useEffect, useState } from "react";

export const BackGround = () => {
  const [stars, setStars] = useState([]);
  const [Meteor, setMeteor] = useState([]);

  function generateStars() {
    const numberOfstars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newstars = [];
    for (let i = 0; i < numberOfstars; i++) {
      newstars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newstars);
  }

  function generateMeteor() {
    const numberOfstars = 4;
    const newMeteor = [];
    for (let i = 0; i < numberOfstars; i++) {
      newMeteor.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteor(newMeteor);
  }
  useEffect(() => {
    generateStars();
    generateMeteor();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            top: star.y + "%",
            left: star.x + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}
      {Meteor.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            top: meteor.y + "%",
            left: meteor.x + "%",
            animationDuration: meteor.animationDuration + "s",
            delay: meteor.delay,
          }}
        />
      ))}
    </div>
  );
};
