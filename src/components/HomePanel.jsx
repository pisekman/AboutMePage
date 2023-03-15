import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import Home from './Home';
import AboutMain from './about/AboutMain';
import Contact from './Contact';
import Portfolio from './Portfolio';

export const HomePanel = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    localStorage.setItem('isDarkModeEnabled', isDarkMode);
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
                  <img
                    src='/assets/img/logo/dark_W.png'
                    alt='brand'
                  />
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

                  <Tab>
                    <img
                      className='svg'
                      src='/assets/img/svg/briefcase.svg'
                      alt='briefcase'
                    />
                    <span className='menu_content'>Portfolio</span>
                  </Tab>
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

              <TabPanel>
                <div
                  data-aos='flip-right'
                  data-aos-duration='1200'
                  data-aos-delay='50'
                >
                  <AboutMain />
                </div>
              </TabPanel>

              <TabPanel>
                <Portfolio />
              </TabPanel>

              <TabPanel>
                <div
                  data-aos='fade-right'
                  data-aos-duration='1200'
                  data-aos-delay='200'
                >
                  <Contact />
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
