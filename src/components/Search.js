import React from "react";
import axios from "axios";
import react from "react";

const Search = () => {
  const [term, setTerm] = React.useState('');
  const [debouncedTerm, setDebouncedTerm] = React.useState(term);
  const [results, setResults] = React.useState([]);

  //the second argument controls when is called the useEffect hook
  /* 
  []: first time only
  no argument: when the component is rendered (including first time)
  [var]:  when the component is rendered&the var has changed 
          (both needs to happened, in case is rerendered but the var has no changed it´s not executed)
          multiple vars ([abc, cde]) if either
   */

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedTerm(term)
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  React.useEffect(() => {
    if (debouncedTerm.trim() === '') {
      setResults([])
      return
    }

    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        }
      });

      setResults(data.query.search);
    };

    search();
  }, [debouncedTerm]);

  const renderedResult = results.map(result => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}>
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">
        {renderedResult}
      </div>
    </div>
  );
}

export default Search;