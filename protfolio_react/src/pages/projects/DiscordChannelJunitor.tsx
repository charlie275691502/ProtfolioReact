const DiscordChannelJunitor = () => {
  return (
    <>
      <div className="page-container">
        <h1>Introduction</h1>
        <div>
          A discord bot automatically removes banned words and replies warning
          message
        </div>
        <div>
          <h2>Goal</h2>
          <p>
            ban the use of certain emojis from certain users. The bot will
            delete the emoji immediately.
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

export default DiscordChannelJunitor;
