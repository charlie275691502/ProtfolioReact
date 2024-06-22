import demo_video from "../../assets/cat_fight_demo_video.mp4";
import cat_fight_thumbnail from "../../assets/cat_fight_thumbnail.png";
import cat_fight_deck from "../../assets/cat_fight_deck.png";
import cat_fight_reward from "../../assets/cat_fight_reward.png";
import cat_fight_stage_2 from "../../assets/cat_fight_stage_2.png";
import cat_fight_stage_3 from "../../assets/cat_fight_stage_3.png";

const CatFight = () => {
  return (
    <>
      <div className="project-page-section-container">
        <h2>Key Contributions</h2>
        <li>Leading my team to make a game in two days at the Game Jam event.</li>
        <li>Implementing all game features in code.</li>
        <li>Communicating with Game Designers and Digital Artists.</li>
      </div>
      <div className="project-page-section-container">
        <h2>Introduction</h2>
        <p> Cat Fight is a single-player strategy game made in two days at the Student Game Jam event.
 Inspired by The Battle Cats, my team and I combined it with a roguelike dungeon and infinite enemies.
        </p>
      </div>
      <div className="project-page-section-container">
        <h2>Game Features</h2>
        <p>
          In Cat Fight, Players must play cards to summon the cat minions to destroy the enemy's castle.
        </p>
        <img src={cat_fight_thumbnail} />
        <p>
          Upon the stage completion, players must choose one card as a reward.
        </p>
        <img src={cat_fight_reward} />
        <p>
          The chosen card will be added into the deck. Maintaining balance between different cards is the core mechanic in this game.
        </p>
        <img src={cat_fight_deck} />
        <p>
          Playes will face the stronger enemy in each stage. Providing the roguelike gameplay experience.
        </p>
        <img src={cat_fight_stage_2} />
        <img src={cat_fight_stage_3} />
      </div>
      <div className="project-page-section-container">
        <h2>Demo</h2>
        <video controls src={demo_video} className="project-page-video" />
      </div>
    </>
  );
};

export default CatFight;
