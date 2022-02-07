import React from "react";

const Search = () => {
  const [term, setTerm] = React.useState('');
  const [abc, setAbc] = React.useState('');

  //the second argument controls when is called the useEffect hook
  /* 
  []: first time only
  no argument: when the component is rendered (including first time)
  [var]:  when the component is rendered&the var has changed 
          (both needs to happened, in case is rerendered but the var has no changed it´s not executed)
          multiple vars ([abc, cde]) if either
   */
  React.useEffect(() => {
    console.log('first time')
  }, []);

  React.useEffect(() => {
    console.log('every time')
  });

  React.useEffect(() => {
    console.log('rendered and abc changed')
  }, [abc]);

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