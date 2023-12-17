import React from "react";

function TableHeader({headings}) {
  return (
    <thead>
      <tr>
        {headings.map((heading, index) => {
          return (
            <th key={index}>
              {heading}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default TableHeader;