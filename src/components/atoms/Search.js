import React from "react";

function Search({text, setText}) {
   const handleSearchChange = (event) => {
       setText(event.target.value);
   };

   return (
       <input type="text" value={text} onChange={handleSearchChange} placeholder="Search..." />
   )
}

export default Search;