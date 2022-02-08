import React, { useState } from "react";

import Accordion from "./Accordion";
import Dropdown from "./DropDown";
import Route from "./Route";
import Search from "./Search";
import Translate from "./Translate";

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

  return (
    <div>
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          text="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};