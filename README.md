# Pair of employees who have worked together

## Task Description
A React application that identifies the pair of employees who have worked together on common projects for the longest period of time and the time for each of those projects.

## Algorithm Overview
The application uses a data processing algorithm to identify and calculate the overlapping days between pairs of employees on common projects. The algorithm initially organizes the data by project ID, then sorts it based based on individual employees' working days. FDuring the processing of each project, the algorithm iterates through the employees and identifies the most extended working pair, considering the overlapping days they share.

NB - the algorithm intentionally disregards projects involving only one employee, and it avoids pairing a single employee with multiple entries. This ensures the pairs include employees with distinct IDs

## Code Structure
- **src**
  - **components**
    - **atoms**
        - `FileUploader.js` - handles file uploading and processing
        - `Filter.js` - handles data filtering
        - `Heading.js` - renders headings for sections
        - `Search.js` - handles data searching
        - `TableBody.js` - manages table body's data
        - `TableHeader.js` - manages table head's data
    - **molecules**
        - `DataTable.js` - handles data presentation and processing
  - **data**
    - `sampleData.csv` - sample CSV data for testing and demonstration
  - **utils**
    - `dataUtils.js` - contains utility functions for general data manipulation
    - `dateUtils.js` - contains utility functions for date-related operations
  - `App.css` - stylesheet for styling the main application components
  - `App.js` - main component organizing the overall application flow
  - `index.css` - global styles for the entire application
  - `index.js` - entry point for rendering the React application

## Usage
To use the application, follow these steps:
1. Clone the repository
2. Run `npm install` to install dependencies
3. Launch the application using `npm start`
4. Upload a CSV file containing employee project data in the following format:\
    Employee ID, Project ID, Start Date*, End Date*\
    *Date formats supported:
    - ISO Date: `2015-03-25`
    - Short Date: `03/25/2015`
    - Long Date: `Mar 25 2015` or `25 Mar 2015`
5. View the results, including employee pairs, projects, and collaboration durations

## Challenges Faced
During development challenges were encountered in handling different date formats and ensuring accurate calculations of overlapping days. These challenges were addressed by implementing a date parsing and manipulation mechanism.


## Future Improvements
- **UI/UX:** Enhance the user interface for a better user experience
- **Sorting options:** Allow users to sort results.
- **File format support:** Extend support for JSON files

## Conclusion
The project taught me how to handle data, create algorithms, and design a user-friendly interface. I encountered challenges, but also found solutions.