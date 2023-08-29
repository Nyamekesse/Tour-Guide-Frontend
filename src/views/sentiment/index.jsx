import React, { useEffect, useState } from "react";
import { useUploadFile } from "./hooks/useUpload";
import { CSVLink } from "react-csv";
import { preprocessForChart } from "../../shared/utils";
import ChartDisplay from "./components/ChartDisplay";
import LoadingButton from "../../shared/components/LoadingButton";
import Navbar from "./components/Navbar";

function SentimentAnalysisView({ user }) {
  const headers = [
    { label: "Reviews", key: "reviews" },
    { label: "Sentiment", key: "sentiment" },
  ];
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [sentimentsCount, setSentimentsCount] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);
  const { mutate, isLoading, isError, error, data } = useUploadFile();
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setSelectedFileName(e.target.files[0].name);
  };

  const uploadFile = (e) => {
    e.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      mutate(formData);
    } else {
      alert("Choose a file to proceed");
    }
  };
  useEffect(() => {
    if (data) {
      const sentimentCounts = preprocessForChart(data);
      setChartLabels(Object.keys(sentimentCounts));

      setSentimentsCount(Object.values(sentimentCounts));
    }
  }, [data]);

  return (
    <>
      <Navbar profile={user} />
      <div className="min-h-screen p-10">
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                {selectedFileName ? selectedFileName : "CSV files only"}
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              accept=".csv"
              onChange={handleFileChange}
            />
          </label>
        </div>
        <div className="flex items-center ">
          {isLoading ? (
            <LoadingButton />
          ) : (
            <button
              className="bg-blue-400 hover:bg-blue-light w-56 font-bold my-5 rounded-md py-2 px-4 inline-flex items-center"
              onClick={uploadFile}
            >
              <svg
                fill="#FFF"
                height="18"
                viewBox="0 0 24 24"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
              </svg>
              <span className="ml-2">Upload CSV</span>
            </button>
          )}
          {data && (
            <CSVLink data={data} headers={headers} filename={"my-file.csv"}>
              <button
                type="button"
                className="py-2 px-4 bg-green-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>

                <span className="ml-2">Download</span>
              </button>
            </CSVLink>
          )}
        </div>
        {data && (
          <ChartDisplay
            labels={chartLabels}
            sentimentsCount={sentimentsCount}
          />
        )}
      </div>
    </>
  );
}

export default SentimentAnalysisView;
