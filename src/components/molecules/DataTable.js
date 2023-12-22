import React, { useState } from "react";
import Heading from "../atoms/Heading";
import TableHeader from '../atoms/TableHeader';
import TableBody from '../atoms/TableBody';
import Search from "../atoms/Search";

function DataTable({heading, headings, data}) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredData = data.filter((item) =>
    item.toString().includes(searchTerm.toString())
  );

  return (
    <>
    <div className="table-title">
      <Heading heading={heading}/>
      <Search text={searchTerm} setText={setSearchTerm} />
    </div>
    <table>
      <TableHeader headings={headings}/>
      <TableBody data={searchTerm ? filteredData : data}/>
    </table>
    </>
  );
}

export default DataTable;