import React from "react";
import TableHeader from '../atoms/TableHeader';
import TableBody from '../atoms/TableBody';

function DataTable({heading, headings, data}) {
  return (
    <>
    <h2>{heading}</h2>
    <table>
      <TableHeader headings={headings}/>
      <TableBody data={data}/>
    </table>
    </>
  );
}

export default DataTable;