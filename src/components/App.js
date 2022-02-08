import React, { useState } from "react";

import Accordion from "./Accordion";
import Dropdown from "./DropDown";
import Search from "./Search";

const items = [
  {
    title: 'Whats',
    content: 'About what'
  },
  {
    title: 'Why',
    content: 'Explain why'
  },
  {
    title: 'Where',
    content: 'Tell where'
  }
]

const options = [
  {
    label: 'Red',
    value: 'red'
  },
  {
    label: 'Blue',
    value: 'blue'
  },
  {
    label: 'Green',
    value: 'green'
  },
]

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle DropDown</button>
      {showDropdown ? <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      /> : null
      }
    </div>
  );
};