import Heading from './Heading';
import { splitString, formatArrayToMatrix, sanitizeArray, groupDataByProject, getEmployeePairsForEachProject } from '../../utils/dataUtils';
import { useState } from 'react';

function FileUploader ({heading, setData, setResult}) {
  const [file, setFile] = useState(null);

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }
 
  function handleFileUpload(file) {
    if (file) {
      const fileReader = new window.FileReader();
   
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
    <>
      <div className="file-upload-title">
        <Heading heading={heading} />
      </div>
      <form onSubmit={handleSubmit}>
        <input type={"file"} accept={".csv"} onChange={handleFileChange} />
        <button>IMPORT</button>
      </form>
    </>
  );
}

export default FileUploader;