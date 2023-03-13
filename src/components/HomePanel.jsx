import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import Home from './Home';
import AboutMain from './about/AboutMain';

export const HomePanel = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // toggle
    //set local storage
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <h1>Page Title</h1>

      <button
        className='theme-switcher-label'
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <>
            <FaMoon />
          </>
        ) : (
          <>
            <FaSun />
          </>
        )}
      </button>
      <Tabs>
        <TabList>
          {/* START LEFT MENU CONTENT */}
          <div className='leftpart'>
            <div className='leftpart_inner'>
              <div className='logo'>
                <Link className='navbar-brand' to='/'>
                  <img src='/assets/img/logo/dark.png' alt='brand' />
                </Link>
              </div>
              {/* END LOGO */}

              <div className='menu'>
                <ul>
                  <Tab>
                    <img
                      className='svg'
                      src='/assets/img/svg/home-run.svg'
                      alt='homerun'
                    />
                    <span className='menu_content'>Home</span>
                  </Tab>
                  <Tab>
                    <img
                      className='svg'
                      src='/assets/img/svg/avatar.svg'
                      alt='avatar'
                    />
                    <span className='menu_content'>About</span>
                  </Tab>
                  {/* <Tab>
                    <img
                      className='svg'
                      src='/assets/img/svg/setting.svg'
                      alt='avatar'
                    />
                    <span className='menu_content'>Service</span>
                  </Tab> */}
                  <Tab>
                    <img
                      className='svg'
                      src='/assets/img/svg/briefcase.svg'
                      alt='briefcase'
                    />
                    <span className='menu_content'>Portfolio</span>
                  </Tab>
                  {/* <Tab>
                    <img
                      className='svg'
                      src='/assets/img/svg/paper.svg'
                      alt='paper'
                    />
                    <span className='menu_content'>News</span>
                  </Tab> */}
                  <Tab>
                    <img
                      className='svg'
                      src='/assets/img/svg/mail.svg'
                      alt='mail'
                    />
                    <span className='menu_content'> Contact</span>
                  </Tab>
                </ul>
              </div>
              {/* END MENU */}

              {/* <CopyRight /> */}
              {/* END COPYRIGHT */}
            </div>
          </div>
          {/* END LEFT MENU CONTENT */}
        </TabList>
        {/* END SIDEBAR TABLIST */}

        {/* START RIGHT PART CONTENT */}
        <div className='rightpart'>
          <div className='rightpart_in'>
            <div className='tokyo_tm_section'>
              <TabPanel>
                <div data-aos='fade-right' data-aos-duration='1200'>
                  <Home />
                </div>
              </TabPanel>
              {/* END HOME MENU TAB CONTENT */}

              <TabPanel>
                <div
                  data-aos='fade-right'
                  data-aos-duration='1200'
                  data-aos-delay='100'
                >
                  <AboutMain />
                </div>
              </TabPanel>
              {/* END ABOUT MENU TAB CONTENT */}

              <TabPanel>{/* <Portfolio /> */}</TabPanel>
              {/* END PORTFOLIO MENU TAB CONTENT */}

              <TabPanel>{/* <News /> */}</TabPanel>
              {/* END NEWS MENU TAB CONTENT */}

              <TabPanel>
                <div
                  data-aos='fade-right'
                  data-aos-duration='1200'
                  data-aos-delay='200'
                >
                  {/* <Contact /> */}
                </div>
              </TabPanel>
              {/* END CONTACT MENU TAB CONTENT */}
            </div>
          </div>
        </div>
        {/* END RIGHT PART CONTENT */}
      </Tabs>
    </>
  );
};
