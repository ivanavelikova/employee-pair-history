const MILLISECONDS_PER_DAY = 86400000;

function formatStringToDate(string) {
    const today = new Date();
    const date = string !== "NULL" ? new Date(string) : today;

    return date;
}

function calculateDaysOnProject(start, end) {
    const startDate = formatStringToDate(start);
    const endDate = formatStringToDate(end);
    const days = Math.ceil(Math.abs(endDate - startDate) / MILLISECONDS_PER_DAY);

    return days;
}

function calculateOverlappingDays(firstEmployee, secondEmployee) {
    const firstEmployeeStart = formatStringToDate(firstEmployee.start);
    const firstEmployeeEnd = formatStringToDate(firstEmployee.end);
    const secondEmployeeStart = formatStringToDate(secondEmployee.start);
    const secondEmployeeEnd = formatStringToDate(secondEmployee.end);

    const overlapStart = firstEmployeeStart < secondEmployeeStart ? secondEmployeeStart : firstEmployeeStart;
    const overlapEnd = firstEmployeeEnd > secondEmployeeEnd ? secondEmployeeEnd : firstEmployeeEnd;

    const overlapDays = Math.ceil(Math.abs(overlapEnd-overlapStart) / MILLISECONDS_PER_DAY);

    return overlapDays;
}

export { calculateDaysOnProject, calculateOverlappingDays }