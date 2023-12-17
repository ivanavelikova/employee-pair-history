import './App.css';
import { useState } from 'react';
import { splitString, formatArrayToMatrix, sanitizeArray } from './utils/dataUtils';
import DataTable from './components/molecules/DataTable';

function App() {
  const headings = ["Employee ID", "Project ID", "Start Date", "End Date"];
  const [data, setData] = useState([]);
  const [file, setFile] = useState([]);

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }
  
  function handleFileUpload() {
    const fileReader = new FileReader();

    fileReader.readAsText(file);

    fileReader.onload = function() {
      const dataArray = splitString(fileReader.result);
      const dataMatrix = formatArrayToMatrix(dataArray);
      const sanitizedData = sanitizeArray(dataMatrix);

      setData(sanitizedData);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleFileUpload(e);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type={"file"} accept={".csv"} onChange={handleFileChange}/>
        <button>IMPORT</button>
      </form>
      <div>
        <DataTable headings={headings} data={data}/>
      </div>
    </div>
  );
}

export default App;