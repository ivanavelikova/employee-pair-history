import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [file, setFile] = useState([]);

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }
  
  function handleFileUpload() {
    const fileReader = new FileReader();

    fileReader.readAsText(file);

    fileReader.onload = function() {
      setData(fileReader.result);
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
        {data}
      </div>
    </div>
  );
}

export default App;
