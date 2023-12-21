import React from "react";
import Heading from "../atoms/Heading";
import TableHeader from '../atoms/TableHeader';
import TableBody from '../atoms/TableBody';

function DataTable({heading, headings, data}) {
  return (
    <>
    <Heading heading={heading}/>
    <table>
      <TableHeader headings={headings}/>
      <TableBody data={data}/>
    </table>
    </>
  );
}

export default DataTable;