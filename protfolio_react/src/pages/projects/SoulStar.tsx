import demo_video from "../../assets/soul_star_demo_video.mov";
import soul_star_cutscene from "../../assets/soul_star_cutscene.png";
import soul_star_battle from "../../assets/soul_star_battle.png";

const SoulStar = () => {
  return (
    <>
      <div className="project-page-section-container">
        <h2>Key Contributions</h2>
        <li>Implementing all game features in code.</li>
        <li>Designing and testing enemy AI.</li>
        <li>Communicating with team members.</li>
      </div>
      <div className="project-page-section-container">
        <h2>Introduction</h2>
        <p>
          Soul Star is a turn-based strategy game where the players control
          various characters, utilising their skills to fight the enemies and
          reveal the truth of the world. The highlights of the battle mechanic
          is that the player needs to decide the sequence of the skills cast
          beforehand, providing complicated strategy possibilities.
        </p>
      </div>
      <div className="project-page-section-container">
        <h2>Game Features</h2>
        <p>
          Soul Star is a comprehensive single player RPG game, including battle,
          cutscene, teams management, and equipment systems.
        </p>
        <img src={soul_star_cutscene} />
        <p>
          The unique battle mechanic provides different strategy possibilities.
          Simply drag and drop the skills on the timeline. Play start. Then the
          skills will play frame-by-frame. Gameplay various characters and
          enemies, unique skill sets, and diverse terrains.Cutscene
        </p>
        <img src={soul_star_battle} />
      </div>
      <div className="project-page-section-container">
        <h2>Demo</h2>
        <video controls src={demo_video} className="project-page-video" />
      </div>
    </>
  );
};

export default SoulStar;
