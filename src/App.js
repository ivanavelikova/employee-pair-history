import './App.css';
import { useState } from 'react';
import { splitString, formatArrayToMatrix, sanitizeArray, groupDataByProject, getEmployeePairsForEachProject } from './utils/dataUtils';
import DataTable from './components/molecules/DataTable';

function App() {
  const headingDataTable = "Imported Data";
  const headingsDataTable = ["Employee ID", "Project ID", "Start Date", "End Date"];
  const headingPairsTable = "Longest Employee Pairs on Each Project";
  const headingsPairsTable = ["Project ID", "Employees", "Period", "Days"];

  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);
  const [file, setFile] = useState(null);

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }
  
  function handleFileUpload(file) {
    if (file) {
      const fileReader = new FileReader();
  
      fileReader.readAsText(file);
  
      fileReader.onload = function() {
        const dataArray = splitString(fileReader.result);
        const dataMatrix = formatArrayToMatrix(dataArray);
        const sanitizedData = sanitizeArray(dataMatrix);
  
        setData(sanitizedData);
  
        const groupedEmployeeData = groupDataByProject(sanitizedData);
        const employeePairs = getEmployeePairsForEachProject(groupedEmployeeData);
        
        setResult(employeePairs);
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleFileUpload(file);
  }

  return (
    <div className="App">
      <div className="container">
        <h2>Upload CSV file</h2>
        <form onSubmit={handleSubmit}>
          <input type={"file"} accept={".csv"} onChange={handleFileChange}/>
          <button>IMPORT</button>
        </form>
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