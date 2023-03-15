import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Gallery } from 'react-photoswipe-gallery';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Modal from 'react-modal';
import { Prolegis } from './portfolio_pages/Prolegis';

Modal.setAppElement('#root');

const Portfolio = () => {
  // // for popup video for youtube
  // const [isOpen, setOpen] = useState(false);

  // // popup video for vimeo
  // const [isOpen2, setOpen2] = useState(false);

  // for modal details
  const [isVivo, setIsVivo] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  // for modal details method
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalVivo() {
    setIsVivo(!isVivo);
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
                  <Tab>Web</Tab>
                  <Tab>Wordpress</Tab>
                  <Tab>SPA</Tab>
                </TabList>
                {/* END TABLIST */}
                <div className='list_wrapper'>
                  <TabPanel>
                    <ul className='portfolio_list'>
                      <Prolegis toggleModalThree={toggleModalThree} />

                      <li
                        data-aos='fade-right'
                        data-aos-duration='1200'
                        data-aos-delay='100'
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
                                <h5>ADS - invoicing </h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END DETAILS */}
                      {/* chiesi */}
                      <li
                        data-aos='fade-right'
                        data-aos-duration='1200'
                        data-aos-delay='100'
                      >
                        <div className='inner'>
                          <div className='entry tokyo_tm_portfolio_animation_wrap'>
                            <img
                              src='assets/img/portfolio/chiesiLogo.png'
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

                      <li
                        data-aos='fade-right'
                        data-aos-duration='1200'
                        data-aos-delay='100'
                      >
                        <div className='inner'>
                          <div className='entry tokyo_tm_portfolio_animation_wrap'>
                            <img
                              src='assets/img/portfolio/vivoLogo.png'
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
                                <h5>Vivo X90 </h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos='fade-right'
                        data-aos-duration='1200'
                      >
                        <div className='inner'>
                          <div className='entry tokyo_tm_portfolio_animation_wrap'>
                            <img
                              src='assets/img/portfolio/tpLogo.png'
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
                                <h5>Tropem Ogara</h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      {/* PM */}

                      <li
                        data-aos='fade-right'
                        data-aos-duration='1200'
                      >
                        <div className='inner'>
                          <div className='entry tokyo_tm_portfolio_animation_wrap'>
                            <img
                              src='assets/img/portfolio/pm1.png'
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
                                <h5>ParkMagia</h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos='fade-right'
                        data-aos-duration='1200'
                        data-aos-delay='100'
                      >
                        <div className='inner'>
                          <div className='entry tokyo_tm_portfolio_animation_wrap'>
                            <img
                              src='assets/img/portfolio/pm2.png'
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
                                <h5>Park Magia</h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END ALL PORTFOLIO GALLERY */}

                  {/*  TAB 2 */}
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
                                <h5>ADS - invoicing </h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END DETAILS */}
                      {/* chiesi */}
                      <li
                        data-aos='fade-right'
                        data-aos-duration='1200'
                        data-aos-delay='100'
                      >
                        <div className='inner'>
                          <div className='entry tokyo_tm_portfolio_animation_wrap'>
                            <img
                              src='assets/img/portfolio/chiesiLogo.png'
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
                  <TabPanel>
                    <ul className='portfolio_list'>
                      <li
                        data-aos='fade-right'
                        data-aos-duration='1200'
                      >
                        <div className='inner'>
                          <div className='entry tokyo_tm_portfolio_animation_wrap'>
                            <img
                              src='assets/img/portfolio/tp1.png'
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
                                <h5>Tropem Ogara</h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      {/* PM */}

                      <li
                        data-aos='fade-right'
                        data-aos-duration='1200'
                      >
                        <div className='inner'>
                          <div className='entry tokyo_tm_portfolio_animation_wrap'>
                            <img
                              src='assets/img/portfolio/pm1.png'
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
                                <h5>ParkMagia</h5>
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
                              src='assets/img/portfolio/pm2.png'
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
                    </ul>
                  </TabPanel>
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
                              src='assets/img/portfolio/vivoLogo.png'
                              alt='Details'
                              data-tip
                              data-for='detail2'
                              onClick={toggleModalVivo}
                            />

                            <ReactTooltip
                              id='vivo'
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
                    </ul>
                  </TabPanel>
                </div>
                {/* END LIST WRAPPER */}
              </Tabs>
            </div>
          </div>
        </div>
      </Gallery>
      {/* Prolegis Modal  */}
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
                    Prolegis is a website dedicated for education
                    sector. In this project I was reponsible for
                    building the view of the application, creating
                    menus/submenus, cards. From the frontend
                    perspective the page is using graphql, rebass as
                    styles and react as a framework.
                  </p>

                  <p>
                    Prolegis is a website dedicated for education
                    sector. In this project I was reponsible for
                    building the view of the application, creating
                    menus/submenus, cards. From the frontend
                    perspective the page is using graphql, rebass as
                    styles and react as a framework.
                  </p>
                </div>
                <div className='detailbox'>
                  <ul>
                    <li>
                      <span className='first'>Client</span>
                      <span>Software House</span>
                    </li>
                    <li>
                      <span className='first'>Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className='first'>Website url</span>
                      <a href='https://prolegis.com.pl/'>
                        <span>https://prolegis.com.pl/</span>
                      </a>
                    </li>
                    <li>
                      <span className='first'>Date</span>
                      <span>March-April, 2021</span>
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
                              'url(assets/img/portfolio/pl1.png)',
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
                              'url(assets/img/portfolio/pl3.png)',
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
                              'url(assets/img/portfolio/pl5.png)',
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
                    reducer. During the project I got familiar with
                    the, implemented invoicing component, messaging
                    system and
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
                      <span>Software House</span>
                    </li>
                    <li>
                      <span className='first'>Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className='first'>Date</span>
                      <span>May, 2022</span>
                    </li>
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

      <Modal
        isOpen={isVivo}
        onRequestClose={toggleModalVivo}
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
                      'url(assets/img/portfolio/vivo1.png)',
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
                    reducer. During the project I got familiar with
                    the, implemented invoicing component, messaging
                    system and
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
                      <span>Software House</span>
                    </li>
                    <li>
                      <span className='first'>Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className='first'>Date</span>
                      <span>May, 2022</span>
                    </li>
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
                              'url(assets/img/portfolio/vivo3.png)',
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}

                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
    </>
  );
};

export default Portfolio;
