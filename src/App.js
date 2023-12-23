import DataTable from './components/molecules/DataTable';
import FileUploader from './components/atoms/FileUploader';
import './App.css';
import { useState } from 'react';

function App() {
  const headingDataTable = "Imported Data";
  const headingsDataTable = ["Employee ID", "Project ID", "Start Date", "End Date"];
  const headingPairsTable = "Longest Employee Pairs on Each Project";
  const headingsPairsTable = ["Project ID", "Employees", "Period", "Days"];
  const headingFileUpload = "Upload CSV File";

  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);

  return (
    <div className="App">
      <div className="container">
        <FileUploader heading={headingFileUpload} setData={setData} setResult={setResult}/>
        <div>
          {data.length > 0 && <DataTable heading={headingDataTable} headings={headingsDataTable} data={data} />}
        </div>
        <div>
          {result.length > 0 && <DataTable heading={headingPairsTable} headings={headingsPairsTable} data={result} />}
        </div>
      </div>
    </div>
  );
}

export default App;