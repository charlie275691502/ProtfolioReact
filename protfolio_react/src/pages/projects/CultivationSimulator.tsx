import demo_video from "../../assets/cultivation_simulator_demo.mov";

const CultivationSimulator = () => {
  return (
    <>
      <div className="project-page-section-container">
        <h2>Key Contributions</h2>
        <li>Implementing all game features in code.</li>
        <li>Communicating with team members.</li>
        <li>Designing game mechanics.</li>
      </div>
      <div className="project-page-section-container">
        <h2>Introduction</h2>
        <p>
          Cultivation Simulator is a turn-based strategy simulation game where players manage a cultivation sect, guiding disciples
  through their immortal journey from mortal to ascension. The core mechanic revolves around strategic disciple management and
  task assignment—players must carefully allocate disciples to gathering, combat, and exploration tasks based on their aptitudes
   and cultivation levels, balancing resource acquisition with spiritual progression to achieve the ultimate goal: cultivating
  an immortal.
        </p>
      </div>
      <div className="project-page-section-container">
        <h2>Game Features</h2>
        <p>
          Cultivation Simulator is a comprehensive cultivation management game featuring disciple cultivation, task systems,
  tribulation mechanics, and map exploration.
        </p>
        <br/>
        <h3> Dual Interface Architecture </h3>
        <p>Both web-based (React + TypeScript frontend with Rust backend API) and CLI modes provide flexible
   gameplay experiences. The turn-based strategy requires players to assign disciples to tasks each round, leveraging their
  unique aptitudes (spiritual roots, sword mastery, alchemy, etc.) for optimal results.
        </p>
        <h3> Multi-layered Systems </h3>
        <p> Seven cultivation realms from Qi Refining to Ascension, each with unique mechanics. Tribulation
  challenges test disciples' resolve. Dynamic map elements including villages, sects, sacred lands, and monsters create an
  evolving strategic landscape. Disciples possess varying lifespans, aptitudes, and spiritual hearts, creating deep emergent
  gameplay as generations pass.
        </p>
      </div>
      <div className="project-page-section-container">
        <h2>Technical Implementation</h2>
        <p>
          The project demonstrates robust software engineering practices essential to delivering a complex simulation game. The Rust 
  backend (Axum framework, Tokio async runtime) provides type-safe, concurrent game state management using DashMap for
  multi-threaded access, ensuring data integrity across simultaneous API requests. The RESTful API architecture cleanly
  separates game logic from presentation, enabling both web and CLI interfaces to share the same core engine. The React frontend
   with TypeScript delivers a responsive, type-safe UI, while the modular Rust codebase (event systems, cultivation mechanics,
  task processing) ensures maintainability and extensibility for future features.
        </p>
      </div>
      <div className="project-page-section-container">
        <h2>Demo</h2>
        <video controls src={demo_video} className="project-page-video" />
      </div>
    </>
  );
};

export default CultivationSimulator;
