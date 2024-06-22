import demo_video from "../../assets/inferring_column_types_of_dataset_demo_video.mov";
const InferingColumnTypesOfDataset = () => {
  return (
    <>
      <div className="project-page-section-container">
        <h2>Introduction</h2>
        <p>
          A Fullstack website that can upload datasets, infer the data type of
          each column, perform data processing, and download the processed
          datasets.
        </p>
      </div>
      <div className="project-page-section-container">
        <h2>Main Objective: Data Inferring</h2>
        <p>
          When we collect raw data for Machine Learning projects, it is quite
          often that attribute types remain un-labelled and manually identifying
          each attribute in a Giga-bytes dataset is a tedious task. Let alone
          the precise attribute types are crucial for data cleaning and
          preprocessing.
        </p>
        <p>
          This project aims to solve this problem by automatically detecting
          values and suggesting the data type for each attribute. Human workers
          can then review the results and modify the mislabelled attribute
          types.
        </p>
      </div>
      <div className="project-page-section-container">
        <h2>Performance</h2>
        <p>
          This project uses Celery, a Python multiprocessing library, to
          implement multi-threading data inferring features.
        </p>
        <p>17 seconds for the 50 MB dataset</p>
        <p>378 seconds for the 1 GB dataset</p>
      </div>
      <div className="project-page-section-container">
        <h2>Demo</h2>
        <video controls src={demo_video} className="project-page-video" />
      </div>
    </>
  );
};

export default InferingColumnTypesOfDataset;
