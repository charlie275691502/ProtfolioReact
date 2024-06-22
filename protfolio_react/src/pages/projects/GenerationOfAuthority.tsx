const GenerationOfAuthority = () => {
  return (
    <>
      <div className="project-page-section-container">
        <h2>Main Achievement</h2>
        <li>Implementing a fully-funcional fullstack application for my board game.</li>
        <li>Including 18 characters with their skills and 24 strategy cards with different effects.</li>
        <li>Multiplayer is accessible even not under the same LAN.</li>
        <li>Basic AI Bot.</li>
      </div>
      <div className="project-page-section-container">
        <h2>Introduction</h2>
        <p> 
          This project contains both the Client and Server sides. When you start
          the game, you need to choose either to start as a Host or to connect
          to the Host as a Client. You can specify your IP address in the input
          field.
        </p>
      </div>
      <div className="project-page-section-container">
        <h2>Game Features</h2>
        <p>
            You have to choose your character at the start of the game. Then the
            players should take their actions by order. For more detail, you can
            see the rule books below. The game will continue till a player win
            the game, or a player loses a game then the rest of the players play
            the last round to decide their ranks.
        </p>
      </div>
    </>
  );
};

export default GenerationOfAuthority;
