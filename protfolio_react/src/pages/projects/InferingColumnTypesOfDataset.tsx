import "../../styles/ProjectPage.css";

const InferingColumnTypesOfDataset = () => {
  return (
    <>
      <div className="project-page-section-container">
        <h2>Introduction</h2>
        <p>
          A Fullstack website that can upload dataset, infer the data type of
          each column, perform data cleaning and processing, and download
          processed dataset.
        </p>
      </div>
      <div className="project-page-section-container">
        <h2>What is Data Inferring</h2>
        <p>
          I search every cell in the column, count the number of each data
          types, then decide a best type for this column. I also use
          multi-thread processing to increase the efficiency. In conclusion, it
          takes 17 seconds to infer a 50MB dataset on my computer, and 378
          seconds for a 1 GB one.
        </p>
      </div>
      <div className="project-page-section-container">
        <h2>Video Demonstration</h2>
        <video controls className="project-page-video">
          <source src="path_to_video" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="project-page-section-container">
        <h2>Logic Flow</h2>
        <ul>
          <li>Upload dataset</li>
          <li>Infer datatype for each column</li>
          <li>Manually change datatype of each column</li>
          <li>Download dataset</li>
        </ul>
      </div>
    </>
  );
};

export default InferingColumnTypesOfDataset;
