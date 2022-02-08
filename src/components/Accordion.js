import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeClass, setActiveClass] = useState(false);
  
  //Every time a setHook is called the entire component is rerendered
  //excluding the definition
  const onTitleClick = (index) => {
    setActiveIndex(index);
    setActiveClass(!activeClass);
  };
  
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex && activeClass ? 'active' : '';

    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  });

  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  );
}

export default Accordion;