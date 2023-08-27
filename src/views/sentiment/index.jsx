import React, { useEffect, useState } from "react";
import { useUploadFile } from "./hooks/useUpload";
import { CSVLink } from "react-csv";
import { preprocessForChart } from "../../shared/utils";
import ChartDisplay from "./components/ChartDisplay";

function FileUpload() {
  const headers = [
    { label: "Reviews", key: "reviews" },
    { label: "Sentiment", key: "sentiment" },
  ];
  const [selectedFile, setSelectedFile] = useState(null);
  const [sentimentsCount, setSentimentsCount] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);
  const { mutate, isLoading, isError, error, data } = useUploadFile();
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadFile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    mutate(formData);
  };
  useEffect(() => {
    if (data) {
      const sentimentCounts = preprocessForChart(data);
      setChartLabels(Object.keys(sentimentCounts));

      setSentimentsCount(Object.values(sentimentCounts));
    }
  }, [data]);

  return (
    <div className="min-h-screen">
      <input type="file" name="file" onChange={handleFileChange} />
      <button onClick={uploadFile}>
        {isLoading ? "Loading..." : "Upload"}
      </button>
      {data && (
        <CSVLink data={data} headers={headers} filename={"my-file.csv"}>
          Download me
        </CSVLink>
      )}

      {data && (
        <ChartDisplay labels={chartLabels} sentimentsCount={sentimentsCount} />
      )}
    </div>
  );
}

export default FileUpload;
