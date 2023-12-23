import React from "react";

function Search({text, setText}) {
   const handleSearchChange = (event) => {
       setText(event.target.value);
   };

   return (
    <div>
       <span>Search:</span>
       <input type="text" value={text} onChange={handleSearchChange} placeholder="Search..." />
    </div>
   )
}

export default Search;