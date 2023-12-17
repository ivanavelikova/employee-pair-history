import React from "react";
import TableHeader from '../atoms/TableHeader';
import TableBody from '../atoms/TableBody';

function DataTable({headings, data}) {
  return (
    <table>
      <TableHeader headings={headings}/>
      <TableBody data={data}/>
    </table>
  );
}

export default DataTable;