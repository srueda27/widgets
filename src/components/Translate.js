import React from "react";
import Convert from "./Convert";
import Dropdown from "./DropDown";

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
  {
    label: 'Spanish',
    value: 'es'
  }
]

const Translate = () => {
  const [language, setLanguage] = React.useState(options[1]);
  const [text, setText] = React.useState('');


  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        text="Select language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage} />
      <hr />
      <h3 className="ui">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate