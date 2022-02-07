import React from "react";
import Accordion from "./Accordion";

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

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};