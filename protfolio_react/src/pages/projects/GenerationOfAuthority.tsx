const GenerationOfAuthority = () => {
  return (
    <>
      <div className="page-container">
        <h1>Introduction</h1>
        <div>
          This project contains both the Client and Server sides. When you start
          the game, you need to choose either to start as a Host or to connect
          to the Host as a Client. You can specify your IP address in the input
          field.
        </div>
        <div>
          <h2>Game Features</h2>
          <p>
            You have to choose your character at the start of the game. Then the
            players should take their actions by order. For more detail, you can
            see the rule books below. The game will continue till a player win
            the game, or a player loses a game then the rest of the players play
            the last round to decide their ranks.
          </p>
        </div>
        <div>
          <h2>Video Demonstration</h2>
          <video controls>
            <source src="path_to_video" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default GenerationOfAuthority;
