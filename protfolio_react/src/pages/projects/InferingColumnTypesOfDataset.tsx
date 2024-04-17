const InferingColumnTypesOfDataset = () => {
  return (
    <>
      <div className="page-container">
        <h1>Introduction</h1>
        <div>
          A Fullstack website that can upload dataset, infer the data type of
          each column, perform data cleaning and processing, and download
          processed dataset.
        </div>
        <div>
          <h2>What is Data Inferring</h2>
          <p>
            I search every cell in the column, count the number of each data
            types, then decide a best type for this column. I also use
            multi-thread processing to increase the efficiency. In conclusion,
            it takes 17 seconds to infer a 50MB dataset on my computer, and 378
            seconds for a 1 GB one.
          </p>
        </div>
        <div>
          <h2>Video Demonstration</h2>
          <video controls>
            <source src="path_to_video" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h2>Logic Flow</h2>
          <img src="path_to_image" alt="Specification Image" />
          <ul>
            <li>Upload dataset</li>
            <li>Infer datatype for each column</li>
            <li>Manually change datatype of each column</li>
            <li>Download dataset</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InferingColumnTypesOfDataset;
