import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Gallery } from 'react-photoswipe-gallery';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Portfolio = () => {
  // // for popup video for youtube
  // const [isOpen, setOpen] = useState(false);

  // // popup video for vimeo
  // const [isOpen2, setOpen2] = useState(false);

  // for modal details
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  // for modal details method
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <Gallery>
        <div className='container'>
          <div className='tokyo_tm_portfolio'>
            <div className='tokyo_tm_title'>
              <div className='title_flex'>
                <div className='left'>
                  <span>Portfolio</span>
                  <h3>Portfolio</h3>
                </div>
              </div>
            </div>

            <div className='portfolio_filter'>
              <Tabs>
                <TabList>
                  <Tab>All</Tab>
                  <Tab>SPA</Tab>
                  <Tab>Wordpress</Tab>
                  <Tab>Photography</Tab>
                  <Tab>Details</Tab>
                </TabList>
                {/* END TABLIST */}
                <div className='list_wrapper'>
                  <TabPanel>
                    <ul className='portfolio_list'>
                      <li
                        data-aos='fade-right'
                        data-aos-duration='1200'
                        data-aos-delay='100'
                      >
                        <div className='inner'>
                          <div className='entry tokyo_tm_portfolio_animation_wrap'>
                            <img
                              src='assets/img/portfolio/prolegisBG.png'
                              alt='Details'
                              data-tip
                              data-for='detail'
                              onClick={toggleModalThree}
                            />

                            <ReactTooltip
                              id='detail'
                              place='bottom'
                              type='light'
                              effect='float'
                              className='tooltip-wrapper'
                            >
                              <div>
                                <h5>Prolegis</h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END DETAILS */}
                      <li
                        data-aos='fade-right'
                        data-aos-duration='1200'
                        data-aos-delay='200'
                      >
                        <div className='inner'>
                          <div className='entry tokyo_tm_portfolio_animation_wrap'>
                            <img
                              src='assets/img/portfolio/abbvie-6.png'
                              alt='Details'
                              data-tip
                              data-for='detail2'
                              onClick={toggleModalFour}
                            />

                            <ReactTooltip
                              id='detail2'
                              place='bottom'
                              type='light'
                              effect='float'
                              className='tooltip-wrapper'
                            >
                              <div>
                                <h5>ADS Abbvie</h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END DETAILS */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END ALL PORTFOLIO GALLERY */}

                  <TabPanel>
                    <ul className='portfolio_list'>
                      <li
                        data-aos='fade-right'
                        data-aos-duration='1200'
                      >
                        <div className='inner'>
                          <div className='entry tokyo_tm_portfolio_animation_wrap'>
                            <img
                              src='assets/img/portfolio/prolegisBG.png'
                              alt='Details'
                              data-tip
                              data-for='detail'
                              onClick={toggleModalThree}
                            />

                            <ReactTooltip
                              id='detail'
                              place='bottom'
                              type='light'
                              effect='float'
                              className='tooltip-wrapper'
                            >
                              <div>
                                <h5>Prolegis</h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END DETAILS */}
                      {/* fisheye */}
                      <li
                        data-aos='fade-right'
                        data-aos-duration='1200'
                        data-aos-delay='100'
                      >
                        <div className='inner'>
                          <div className='entry tokyo_tm_portfolio_animation_wrap'>
                            <img
                              src='assets/img/portfolio/fyLogo.png'
                              alt='Details'
                              data-tip
                              data-for='detail2'
                              onClick={toggleModalFour}
                            />

                            <ReactTooltip
                              id='detail2'
                              place='bottom'
                              type='light'
                              effect='float'
                              className='tooltip-wrapper'
                            >
                              <div>
                                <h5>ADS - invoicing </h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END DETAILS */}

                      <li
                        data-aos='fade-right'
                        data-aos-duration='1200'
                        data-aos-delay='100'
                      >
                        <div className='inner'>
                          <div className='entry tokyo_tm_portfolio_animation_wrap'>
                            <img
                              src='assets/img/portfolio/prolegisBG.png'
                              alt='Details'
                              data-tip
                              data-for='detail'
                              onClick={toggleModalThree}
                            />

                            <ReactTooltip
                              id='detail'
                              place='bottom'
                              type='light'
                              effect='float'
                              className='tooltip-wrapper'
                            >
                              <div>
                                <h5>Prolegis</h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* first fisheye */}

                      {/* second  dr chiesi*/}

                      {/* third dr sim */}

                      {/* koj */}

                      {/* wordpress TropemOGara */}

                      {/* wordpress nolimit */}
                    </ul>
                    {/* END DETAILS GALLERY */}
                  </TabPanel>
                  {/* END CREATIVE PORTFOLIO GALLERY */}
                </div>
                {/* END LIST WRAPPER */}
              </Tabs>
            </div>
          </div>
        </div>
      </Gallery>
      {/* popup vidoe for youtube modal activation */}
      {/* <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='1gyTUHP6ne8'
        onClose={() => setOpen(false)}
      /> */}

      {/* popup vidoe for vimeo modal activation */}
      {/* <ModalVideo
        channel='vimeo'
        autoplay
        isOpen={isOpen2}
        videoId='100171151'
        onClose={() => setOpen2(false)}
      /> */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel='My dialog'
        className='mymodal'
        overlayClassName='myoverlay'
        closeTimeoutMS={500}
      >
        <div className='tokyo_tm_modalbox_news portfolio_tm_modalbox'>
          <button className='close-modal' onClick={toggleModalThree}>
            <img src='assets/img/svg/cancel.svg' alt='close icon' />
          </button>
          {/* END CLOSE ICON */}
          <div className='box_inner'>
            <div className='description_wrap scrollable'>
              <div className='image'>
                <img src='assets/img/thumbs/4-3.jpg' alt='tumb' />
                <div
                  className='main'
                  style={{
                    backgroundImage:
                      'url(assets/img/portfolio/prolegis_1.png)',
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className='portfolio_main_title'>
                <h3>Prolegis</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className='main_details'>
                <div className='textbox'>
                  <p>
                    Prolegis is a website dedicated to . In this
                    project I was reponsible for building the view of
                    the application, creating menus/submenus, cards.
                    From the frontend perspective the page is using
                    graphql, rebass as styles and react as a framework{' '}
                  </p>
                  <p>
                    Mockups are useful both for the creative phase of
                    the project - for instance when you're trying to
                    figure out your user flows or the proper visual
                    hierarchy - and the production phase when they
                    will represent the target product. Making mockups
                    a part of your creative and development process
                    allows you to quickly and easily ideate.
                  </p>
                </div>
                <div className='detailbox'>
                  <ul>
                    <li>
                      <span className='first'>Client</span>
                      <span>Alvaro Morata</span>
                    </li>
                    <li>
                      <span className='first'>Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className='first'>Date</span>
                      <span>March 07, 2021</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
              {/* prolegis */}
              <div className='additional_images'>
                <ul className='gallery_zoom'>
                  <li>
                    <div className='list_inner'>
                      <div className='my_image'>
                        <img src='img/thumbs/4-2.jpg' alt='thumb' />
                        <div
                          className='main'
                          style={{
                            backgroundImage:
                              'url(assets/img/portfolio/abbvie1.png)',
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className='list_inner'>
                      <div className='my_image'>
                        <img src='img/thumbs/4-2.jpg' alt='thumb' />
                        <div
                          className='main'
                          style={{
                            backgroundImage:
                              'url(assets/img/portfolio/2.jpg)',
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className='list_inner'>
                      <div className='my_image'>
                        <img src='img/thumbs/4-2.jpg' alt='thumb' />
                        <div
                          className='main'
                          style={{
                            backgroundImage:
                              'url(assets/img/portfolio/3.jpg)',
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
      {/* abbvie */}
      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel='My dialog'
        className='mymodal'
        overlayClassName='myoverlay'
        closeTimeoutMS={500}
      >
        <div className='tokyo_tm_modalbox_news portfolio_tm_modalbox'>
          <button className='close-modal' onClick={toggleModalFour}>
            <img src='assets/img/svg/cancel.svg' alt='close icon' />
          </button>
          {/* END CLOSE ICON */}
          <div className='box_inner'>
            <div className='description_wrap scrollable'>
              <div className='image'>
                <img src='assets/img/thumbs/4-3.jpg' alt='tumb' />
                <div
                  className='main'
                  style={{
                    backgroundImage:
                      'url(assets/img/portfolio/abbvie1.png)',
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className='portfolio_main_title'>
                <h3>Ave Simone</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className='main_details'>
                <div className='textbox'>
                  <p>
                    Application created usinng Material UI and REST
                    API. For storing local data use context and
                    reducer
                  </p>
                  <p>
                    Mockups are useful both for the creative phase of
                    the project - for instance when you're trying to
                    figure out your user flows or the proper visual
                    hierarchy - and the production phase when they
                    will represent the target product. Making mockups
                    a part of your creative and development process
                    allows you to quickly and easily ideate.
                  </p>
                </div>
                <div className='detailbox'>
                  <ul>
                    <li>
                      <span className='first'>Client</span>
                      <span>Alvaro Morata</span>
                    </li>
                    <li>
                      <span className='first'>Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className='first'>Date</span>
                      <span>March 07, 2021</span>
                    </li>{' '}
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className='additional_images'>
                <ul className='gallery_zoom'>
                  <li>
                    <div className='list_inner'>
                      <div className='my_image'>
                        <img src='img/thumbs/4-2.jpg' alt='thumb' />
                        <div
                          className='main'
                          style={{
                            backgroundImage:
                              'url(assets/img/portfolio/abbvie4.png)',
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className='list_inner'>
                      <div className='my_image'>
                        <img src='img/thumbs/4-2.jpg' alt='thumb' />
                        <div
                          className='main'
                          style={{
                            backgroundImage:
                              'url(assets/img/portfolio/abbvie3.png)',
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className='list_inner'>
                      <div className='my_image'>
                        <img src='img/thumbs/4-2.jpg' alt='thumb' />
                        <div
                          className='main'
                          style={{
                            backgroundImage:
                              'url(assets/img/portfolio/abbvie2.png)',
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </>
  );
};

export default Portfolio;
