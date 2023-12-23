import React from "react";
import Heading from "../atoms/Heading";
import TableHeader from '../atoms/TableHeader';
import TableBody from '../atoms/TableBody';
import Search from "../atoms/Search";
import Filter from "../atoms/Filter";
import { useState } from 'react';

function DataTable({ heading, headings, data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState({ type: '', index: null });

  const filteredData = data.filter((item) => {
    if (filterType.type && item[filterType.index]) {
      return item[filterType.index].toString().includes(searchTerm.toString());
    }
    
    return item.toString().includes(searchTerm.toString());
  });

  const handleFilterChange = (filter) => {
    setFilterType(filter);
  };

  return (
    <>
      <div className="table-title">
        <Heading heading={heading} />
        <div className="search-filter">
          <Search text={searchTerm} setText={setSearchTerm} />
          <Filter fields={headings} onFilterChange={handleFilterChange} />
        </div>
      </div>
      <table>
        <TableHeader headings={headings} />
        <TableBody data={searchTerm ? filteredData : data} />
      </table>
    </>
  );
}

export default DataTable;