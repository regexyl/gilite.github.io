
import Tooltip from '@mui/material/Tooltip';
import React, { useState } from 'react';

const Navbar = () => {
  const [emailTooltipVisibility, setEmailTooltipVisibility] = useState(false);

  const copyEmail = () => {
    setEmailTooltipVisibility(true)
    navigator.clipboard.writeText('reginaliuyx@gmail.com');

    setTimeout(() => {
      setEmailTooltipVisibility(false);
      console.log('set to false!');
    }, 1000);
  };

  return (
    <nav className="header-nav">
      <a href="https://github.com/gilite">github</a>
      <a href="https://www.linkedin.com/in/~rl/">linkedin</a>
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        open={emailTooltipVisibility}
        arrow
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title="Email copied!"
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a onClick={copyEmail}>email</a>
      </Tooltip>
    </nav>
  );
};

export default Navbar;
