import { calculateDaysOnProject, calculateOverlappingDays } from "./dateUtils";

function splitString(string) {
  return string.split(/(\r\n|\r|\n)/g);
}

function trimString(string) {
  return string.trim();
}

function formatArrayToMatrix(array) {
  return array
    .filter((row) => row.trim().length !== 0)
    .map((row) => row.split(",").map(trimString));
}

function sanitizeArray(array) {
  return array.map((row) => {
    return row.map(trimString);
  });
}

function groupDataByProject(array) {
  const groupedData = {};

  array.forEach(([employeeID, projectID, start, end]) => {
    if(!groupedData[projectID]) {
      groupedData[projectID] = [];
    }

    groupedData[projectID].push({employeeID, start, end});
  });

  for (const projectID in groupedData) {
    if (groupedData.hasOwnProperty(projectID)) {
      groupedData[projectID].sort((firstEmployee, secondEmployee) => {
        const firstEmployeeDays = calculateDaysOnProject(firstEmployee.start, firstEmployee.end);
        const secondEmployeeDays = calculateDaysOnProject(secondEmployee.start, secondEmployee.end);

        return secondEmployeeDays - firstEmployeeDays;
      });
    }
  }

  return groupedData;
}

function getEmployeePairsForEachProject(groupedData) {
  const employeePairs = [];

  for (const projectID in groupedData) {
    if (groupedData.hasOwnProperty(projectID)) {
      const group = groupedData[projectID];
      let maxOverlapDays = 0;
      let maxOverlapPairs = [];

      for (let i = 0; i < group.length - 1; i++) {
        for (let j = i + 1; j < group.length; j++) {
          const overlapDays = calculateOverlappingDays(group[i], group[j]);

          if (overlapDays > maxOverlapDays) {
            maxOverlapDays = overlapDays;
            maxOverlapPairs = [{ firstEmployee: group[i].employeeID, secondEmployee: group[j].employeeID }];
          } else if (overlapDays === maxOverlapDays) {
            maxOverlapPairs.push({ firstEmployee: group[i].employeeID, secondEmployee: group[j].employeeID });
          }
        }
      }

      console.log(`ProjectID: ${projectID}`);
      console.log("Overlapping days:", maxOverlapDays);
      console.log("Pairs with the most days working together:", maxOverlapPairs);
      console.log("--------------------------");

      employeePairs.push({projectID, maxOverlapDays, maxOverlapPairs});
    }
  }

  return employeePairs;
}

export { splitString, formatArrayToMatrix, sanitizeArray, groupDataByProject, getEmployeePairsForEachProject };