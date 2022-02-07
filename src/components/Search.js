import React from "react";

const Search = () => {
  const [term, setTerm] = React.useState('');

  //the second argument controls when is called the useEffect hook
  /* 
  no argument: first time only
  []: when the component is rerendered
  [var]: when the component is rerendered&the var has changed
   */
  React.useEffect(() => {
    
  },);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
}

export default Search;