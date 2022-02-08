import React from "react";

const Link = ({className, href, children}) => {
  const onClick = (event) => {
    //if the user press crtl (Windows) or app (Mac) let the a do its normal behavior
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({},'', href);

    //tell the Route components that something has change
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  return (
    <a onClick={onClick} className={className} href={href} >
      {children}
    </a>
  );
}

export default Link