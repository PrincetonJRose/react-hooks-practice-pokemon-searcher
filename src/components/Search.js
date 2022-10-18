import React from "react";

function Search( props ) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={ props.changeSearch } />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
