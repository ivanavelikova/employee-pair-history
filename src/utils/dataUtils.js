import { calculateDaysOnProject, calculateOverlappingDays, formatDateFromArray } from "./dateUtils";

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
      let maxOverlap = [0, '', ''];
      let maxOverlapPairs = [];

      for (let i = 0; i < group.length - 1; i++) {
        for (let j = i + 1; j < group.length; j++) {
          const overlapDays = calculateOverlappingDays(group[i], group[j]);

          if (overlapDays[0] > maxOverlap[0]) {
            maxOverlap = overlapDays;
            maxOverlapPairs = [group[i].employeeID, group[j].employeeID];
          } else if (overlapDays[0] === maxOverlap[0]) {
            maxOverlapPairs.push([group[i].employeeID, group[j].employeeID]);
          }
        }
      }

      // console.log(`ProjectID: ${projectID}`);
      // console.log("Overlapping days:", maxOverlap[0]);
      // console.log("Pairs with the most days working together:", maxOverlapPairs);
      // console.log("Starting from:", maxOverlap[1]);
      // console.log("Ending on:", maxOverlap[2]);
      // console.log("--------------------------");
      const employeePairString = maxOverlapPairs.join(" and ");
      const dateRange = [formatDateFromArray(maxOverlap[2].split(" ")), formatDateFromArray(maxOverlap[1].split(" "))].join(" - ");
      const overlappingDays = maxOverlap[0];
      
      employeePairs.push([projectID, employeePairString, dateRange, overlappingDays]);
    }
  }

  return employeePairs;
}

export { splitString, formatArrayToMatrix, sanitizeArray, groupDataByProject, getEmployeePairsForEachProject };