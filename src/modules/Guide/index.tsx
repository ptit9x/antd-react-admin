import { driver } from "driver.js";
import "driver.js/dist/driver.css";

import { Button, Typography } from 'antd';

// import useGuide from './useGuide';

const GuideModule = () => {
  const onShowGuide = () => {
    const driverObj = driver({
      animate: false,
      showProgress: false,
      showButtons: ['next', 'previous', 'close'],
      steps: [
        { element: '#sidebar-trigger', popover: { title: 'Sidebar Trigger', description: 'Open and close the Sidebar.', side: "left", align: 'start' }},
        { element: '#theme-change', popover: { title: 'Switch mode', description: 'You can click here to switch your mode,', side: "bottom", align: 'start' }},
        { element: '#language-change', popover: { title: 'Switch Languages', description: 'You can click here to switch languages,', side: "bottom", align: 'start' }},
        { popover: { title: 'Happy Coding', description: 'And that is all, go ahead and start adding tours to your applications.' } }
      ]
    });
    
    driverObj.drive();
  }

  return (
    <div className="guide-page ">
      <div className="innerText">
        <Typography className="guide-intro">
          The guide page is useful for
          some people who entered the 
          project for the first time. 
          You can briefly introduce 
          the features of the project. 
          Demo is based on
          <Button
            type="link"
            className="driverjs-link"
            href="https://github.com/kamranahmedse/driver.js"
            rel="noopener noreferrer"
            target="_blank"
          >
            driver.js
          </Button>
          .
        </Typography>
        <Button type="primary" onClick={onShowGuide}>
          Show Guide
        </Button>
      </div>
    </div>
  );
};

export default GuideModule;
