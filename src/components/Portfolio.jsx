import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Gallery } from 'react-photoswipe-gallery';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Modal from 'react-modal';
import { Prolegis } from './portfolio_pages/Prolegis';
import ModalVideo from 'react-modal-video';
import { navigate } from 'react-router-dom';

Modal.setAppElement('#root');

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVivo, setIsVivo] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isChesi, setIsChiesi] = useState(false);
  const [isDrsim, setIsDrsim] = useState(false);
  const [isFisheye, setIsFisheye] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalVivo() {
    setIsVivo(!isVivo);
  }

  function toggleModalChiesi() {
    setIsChiesi(!isChesi);
  }

  function toggleModalFisheye() {
    setIsFisheye(!isFisheye);
  }

  function toggleModalDrsim() {
    setIsDrsim(!isDrsim);
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
                <div
                  className='list_wrapper'
                  style={{ height: '100%' }}
                >
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

                      {/* sim */}

                      <li
                        data-aos='fade-right'
                        data-aos-duration='1200'
                        data-aos-delay='100'
                      >
                        <div className='inner'>
                          <div className='entry tokyo_tm_portfolio_animation_wrap'>
                            <img
                              src='assets/img/portfolio/drsimLogo.png'
                              alt='Details'
                              data-tip
                              data-for='detail'
                              onClick={toggleModalDrsim}
                            />

                            <ReactTooltip
                              id='detail'
                              place='bottom'
                              type='light'
                              effect='float'
                              className='tooltip-wrapper'
                            >
                              <div>
                                <h5>Dr Sim</h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

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
                              onClick={toggleModalChiesi}
                            />

                            <ReactTooltip
                              id='detail'
                              place='bottom'
                              type='light'
                              effect='float'
                              className='tooltip-wrapper'
                            >
                              <div>
                                <h5>Dr Chiesi</h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                      // data-aos='fade-right'
                      // data-aos-duration='1200'
                      // data-aos-delay='100'
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

                      <li>
                        <div className='inner'>
                          <div className='entry tokyo_tm_portfolio_animation_wrap'>
                            <img
                              src='assets/img/portfolio/fyLogo.png'
                              alt='Details'
                              data-tip
                              data-for='detail'
                              onClick={toggleModalFisheye}
                            />

                            <ReactTooltip
                              id='detail'
                              place='bottom'
                              type='light'
                              effect='float'
                              className='tooltip-wrapper'
                            >
                              <div>
                                <h5>Fisheye</h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className='inner'>
                          <div className='entry tokyo_tm_portfolio_animation_wrap'>
                            <img
                              src='assets/img/portfolio/tpLogo.png'
                              alt='Details'
                              data-tip
                              data-for='detail'
                              onClick={() =>
                                window.open(
                                  'https://www.tropemogara.pl/',
                                  '_blank',
                                )
                              }
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

                      <li>
                        <div className='inner'>
                          <div className='entry tokyo_tm_portfolio_animation_wrap'>
                            <img
                              src='assets/img/portfolio/pmLogo2.png'
                              alt='Details'
                              data-tip
                              data-for='detail'
                              onClick={() =>
                                window.open(
                                  'https://www.parkmagia.pl/',
                                  '_blank',
                                )
                              }
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

                      <li>
                        <div className='inner'>
                          <div className='entry tokyo_tm_portfolio_animation_wrap'>
                            <img
                              src='assets/img/portfolio/atrakcjeLogo.png'
                              alt='Details'
                              data-tip
                              data-for='detail2'
                              onClick={() =>
                                window.open(
                                  'https://magazynatrakcje.pl/',
                                  '_blank',
                                )
                              }
                            />

                            <ReactTooltip
                              id='detail2'
                              place='bottom'
                              type='light'
                              effect='float'
                              className='tooltip-wrapper'
                            >
                              <div>
                                <h5>Magazyn Atrakcje</h5>
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
                              onClick={toggleModalChiesi}
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
                              data-for='detail'
                              onClick={toggleModalFisheye}
                            />

                            <ReactTooltip
                              id='detail'
                              place='bottom'
                              type='light'
                              effect='float'
                              className='tooltip-wrapper'
                            >
                              <div>
                                <h5>Fisheye</h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
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
                              src='assets/img/portfolio/tpLogo.png'
                              alt='Details'
                              data-tip
                              data-for='detail'
                              onClick={() =>
                                window.open(
                                  'https://www.tropemogara.pl/',
                                  '_blank',
                                )
                              }
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
                              src='assets/img/portfolio/pmLogo2.png'
                              alt='Details'
                              data-tip
                              data-for='detail'
                              onClick={() =>
                                window.open(
                                  'https://www.parkmagia.pl/',
                                  '_blank',
                                )
                              }
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
                      {/* fisheye */}
                      <li
                        data-aos='fade-right'
                        data-aos-duration='1200'
                        data-aos-delay='100'
                      >
                        <div className='inner'>
                          <div className='entry tokyo_tm_portfolio_animation_wrap'>
                            <img
                              src='assets/img/portfolio/atrakcjeLogo.png'
                              alt='Details'
                              data-tip
                              data-for='detail2'
                              onClick={() =>
                                window.open(
                                  'https://magazynatrakcje.pl/',
                                  '_blank',
                                )
                              }
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
                      // data-aos='fade-right'
                      // data-aos-duration='1200'
                      // data-aos-delay='100'
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
                                <h5>Vivo product pages </h5>
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

          <div className='box_inner'>
            <div className='description_wrap scrollable'>
              <div className='image'>
                <img src='assets/img/thumbs/4-3.jpg' alt='tumb' />
                <div
                  className='main'
                  style={{
                    backgroundImage:
                      'url(assets/img/portfolio/prolegis1.png)',
                  }}
                ></div>
              </div>

              <div className='portfolio_main_title'>
                <h3>Prolegis</h3>
                <span>Details</span>
              </div>

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

                  <p>{/* todo */}</p>
                </div>
                <div className='detailbox'>
                  <ul>
                    <li>
                      <span className='first'>Client</span>
                      <span>Software House</span>
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
                <h3>ADS Abbvie</h3>
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
                    system and shopping cart component.
                  </p>
                  <p>
                    The purpose of the application was to create a
                    space for local representatives with upgrading
                    current ordering and invoicing system which
                    previously was created using php and bootstrap.
                  </p>
                </div>
                <div className='detailbox'>
                  <ul>
                    <li>
                      <span className='first'>Client</span>
                      <span>Software House</span>
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
        {/* END ADS */}
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
          <button className='close-modal' onClick={toggleModalVivo}>
            <img src='assets/img/svg/cancel.svg' alt='close icon' />
          </button>
          <div className='box_inner'>
            <div className='description_wrap scrollable'>
              <div className='image'>
                <img src='assets/img/thumbs/4-3.jpg' alt='tumb' />
                <div
                  className='main'
                  style={{
                    backgroundImage:
                      'url(assets/img/portfolio/vivoLogo2.png)',
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className='portfolio_main_title'>
                <h3>Vivo product carts</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className='main_details'>
                <div className='textbox'>
                  <p>
                    Created several product pages for one of the
                    mobile company. They are adjusted to price
                    agregators standards. The work included mobile and
                    desktop views.
                  </p>
                  <p>
                    <li>
                      <span
                        className='first'
                        style={{ padding: '0 15px' }}
                      >
                        LIVE:
                      </span>
                      <a href='https://effervescent-tiramisu-3c721f.netlify.app/'>
                        <span>
                          https://effervescent-tiramisu-3c721f.netlify.app/
                        </span>
                      </a>
                    </li>
                    <li>
                      <span
                        className='first'
                        style={{ padding: '0 15px' }}
                      >
                        LIVE:
                      </span>
                      <a href='https://superlative-taiyaki-e8453f.netlify.app/'>
                        <span>
                          https://superlative-taiyaki-e8453f.netlify.app/
                        </span>
                      </a>
                    </li>
                  </p>
                </div>
                <div className='detailbox'>
                  <ul>
                    <li>
                      <span className='first'>Client</span>
                      <span>Software House</span>
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

      <Modal
        isOpen={isChesi}
        onRequestClose={toggleModalVivo}
        contentLabel='My dialog'
        className='mymodal'
        overlayClassName='myoverlay'
        closeTimeoutMS={500}
      >
        <div className='tokyo_tm_modalbox_news portfolio_tm_modalbox'>
          <button className='close-modal' onClick={toggleModalChiesi}>
            <img src='assets/img/svg/cancel.svg' alt='close icon' />
          </button>
          <div className='box_inner'>
            <div className='description_wrap scrollable'>
              <div className='image'>
                <img src='assets/img/thumbs/4-3.jpg' alt='tumb' />
                <div
                  className='main'
                  style={{
                    backgroundImage:
                      'url(assets/img/portfolio/chiesi1.png)',
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className='portfolio_main_title'>
                <h3>Dr Chiesi</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className='main_details'>
                <div className='textbox'>
                  <p>
                    Dr Chiesi purpose was to engage internal
                    shareholders of the client. I was responsible for
                    implementing main layout, login, cards view.
                    Technology used: React, Scss, RestApi + wordpress
                  </p>
                  <p></p>
                </div>
                <div className='detailbox'>
                  <ul>
                    <li>
                      <span className='first'>Client</span>
                      <span>Software House</span>
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
                              'url(assets/img/portfolio/chiesi2.png)',
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

      <Modal
        isOpen={isDrsim}
        onRequestClose={toggleModalDrsim}
        contentLabel='My dialog'
        className='mymodal'
        overlayClassName='myoverlay'
        closeTimeoutMS={500}
      >
        <div className='tokyo_tm_modalbox_news portfolio_tm_modalbox'>
          <button className='close-modal' onClick={toggleModalDrsim}>
            <img src='assets/img/svg/cancel.svg' alt='close icon' />
          </button>
          <div className='box_inner'>
            <div className='description_wrap scrollable'>
              <div className='image'>
                <img src='assets/img/thumbs/4-3.jpg' alt='tumb' />
                <div
                  className='main'
                  style={{
                    backgroundImage:
                      'url(assets/img/portfolio/drsimLogo.png)',
                  }}
                >
                  <ModalVideo
                    channel='youtube'
                    autoplay
                    isOpen={isOpen}
                    videoId='U3yfNtW-5QQ'
                    onClose={() => setIsOpen(false)}
                  />
                </div>
              </div>
              {/* END IMAGE */}
              <div className='portfolio_main_title'>
                <h3>Dr Sim - RWD</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className='main_details'>
                <div className='textbox'>
                  <p>
                    Dr Sim is a quizz app, which purpose was to engage
                    internal shareholders of the client. I was
                    responsible for implementing RWD.
                  </p>
                  <p>
                    <li>
                      <span
                        className='first'
                        style={{ padding: '0 15px' }}
                      >
                        LIVE:
                      </span>
                      <a href='https://drsim.pl/'>
                        <span>https://drsim.pl/</span>
                      </a>
                    </li>
                  </p>
                  <p>
                    <iframe
                      width='560'
                      height='345'
                      src='https://www.youtube.com/embed/U3yfNtW-5QQ'
                      title='YouTube video player'
                      frameborder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowfullscreen
                    ></iframe>
                  </p>
                </div>
                <div className='detailbox'>
                  <ul>
                    <li>
                      <span className='first'>Client</span>
                      <span>Software House</span>
                    </li>

                    <li>
                      <span className='first'>Date</span>
                      <span>July, 2022</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>

      <Modal
        isOpen={isFisheye}
        onRequestClose={toggleModalFisheye}
        contentLabel='My dialog'
        className='mymodal'
        overlayClassName='myoverlay'
        closeTimeoutMS={500}
      >
        <div className='tokyo_tm_modalbox_news portfolio_tm_modalbox'>
          <button
            className='close-modal'
            onClick={toggleModalFisheye}
          >
            <img src='assets/img/svg/cancel.svg' alt='close icon' />
          </button>
          <div className='box_inner'>
            <div className='description_wrap scrollable'>
              <div className='image'>
                <img src='assets/img/thumbs/4-3.jpg' alt='tumb' />
                <div
                  className='main'
                  style={{
                    backgroundImage:
                      'url(assets/img/portfolio/fyLogo.png)',
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className='portfolio_main_title'>
                <h3>Fisheye</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className='main_details'>
                <div className='textbox'>
                  <p>
                    Fisheye is a digitial content management tool,
                    which is still being developed. During my
                    assignment I worked on login page, register, input
                    validation, main layout using Material UI and
                    Typescript
                  </p>
                  <p></p>
                  <p></p>
                </div>
                <div className='detailbox'>
                  <ul>
                    <li>
                      <span className='first'>Client</span>
                      <span>Software House</span>
                    </li>

                    <li>
                      <span className='first'>Date</span>
                      <span>June, 2022</span>
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
                              'url(assets/img/portfolio/f1.png)',
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className='my_image'
                      style={{ marginTop: '20px' }}
                    >
                      <div
                        className='main'
                        style={{
                          backgroundImage:
                            'url(assets/img/portfolio/f3.png)',
                          backgroundSize: 'cover',
                          height: '700px',
                          width: 'auto',
                        }}
                      ></div>
                    </div>
                  </li>
                  <li>
                    <div
                      className='my_image'
                      style={{ marginTop: '20px' }}
                    >
                      <div
                        className='main'
                        style={{
                          backgroundImage:
                            'url(assets/img/portfolio/f2.png)',
                          backgroundSize: 'cover',
                          height: '700px',
                        }}
                      ></div>
                    </div>
                  </li>
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
