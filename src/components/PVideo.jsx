export default PortfolioMedia = () => {
  return (
    <>
      <TabPanel>
        <ul className='portfolio_list'>
          <li data-aos='fade-right' data-aos-duration='1200'>
            <div className='inner'>
              <div className='entry tokyo_tm_portfolio_animation_wrap'>
                <img
                  src='assets/img/portfolio/5.jpg'
                  alt='Vimeo'
                  data-tip
                  data-for='vimeo'
                  onClick={() => setOpen2(true)}
                />
                <ReactTooltip
                  id='vimeo'
                  place='bottom'
                  type='light'
                  effect='float'
                  className='tooltip-wrapper'
                >
                  <div>
                    <h5>Teresa Butler</h5>
                    <span>Vimeo</span>
                  </div>
                </ReactTooltip>
              </div>
            </div>
          </li>
          {/* END VIMEO */}
        </ul>
        {/* END PORTFOLIO LIST */}
      </TabPanel>
      {/* END VIMEO VIDEO */}

      <TabPanel>
        <ul className='portfolio_list'>
          <li data-aos='fade-right' data-aos-duration='1200'>
            <div className='inner'>
              <div className='entry tokyo_tm_portfolio_animation_wrap'>
                <img
                  src='assets/img/portfolio/2.jpg'
                  alt='Youtube'
                  data-tip
                  data-for='youtube'
                  onClick={() => setOpen(true)}
                />
                <ReactTooltip
                  id='youtube'
                  place='bottom'
                  type='light'
                  effect='float'
                  className='tooltip-wrapper'
                >
                  <div>
                    <h5>Ashely Flores</h5>
                    <span>Youtube</span>
                  </div>
                </ReactTooltip>
              </div>
            </div>
          </li>
          {/* END YOUTUBE */}
        </ul>
        {/* END PORTFOLIO LIST */}
      </TabPanel>
      {/* END YOUTUBE VIDEO */}

      <TabPanel>
        <ul className='portfolio_list'>
          <li data-aos='fade-right' data-aos-duration='1200'>
            <div className='inner'>
              <div className='entry tokyo_tm_portfolio_animation_wrap'>
                <Item
                  original='assets/img/portfolio/4.jpg'
                  thumbnail='assets/img/portfolio/4.jpg'
                  width={500}
                  height={550}
                >
                  {({ ref, open }) => (
                    <img
                      src='assets/img/portfolio/4.jpg'
                      alt='Childhood'
                      data-tip
                      data-for='shot'
                      role='button'
                      ref={ref}
                      onClick={open}
                    />
                  )}
                </Item>
                <ReactTooltip
                  id='shot'
                  place='bottom'
                  type='light'
                  effect='float'
                  className='tooltip-wrapper'
                >
                  <div>
                    <h5>Derek Smith</h5>
                    <span>Shot</span>
                  </div>
                </ReactTooltip>
              </div>
            </div>
          </li>
          {/* END SHOT */}
          <li
            data-aos='fade-right'
            data-aos-duration='1200'
            data-aos-delay='100'
          >
            <div className='inner'>
              <div className='entry tokyo_tm_portfolio_animation_wrap'>
                <Item
                  original='assets/img/portfolio/3.jpg'
                  thumbnail='assets/img/portfolio/3.jpg'
                  width={500}
                  height={550}
                >
                  {({ ref, open }) => (
                    <img
                      src='assets/img/portfolio/3.jpg'
                      alt='Childhood'
                      data-tip
                      data-for='shot'
                      role='button'
                      ref={ref}
                      onClick={open}
                    />
                  )}
                </Item>
                <ReactTooltip
                  id='shot2'
                  place='bottom'
                  type='light'
                  effect='float'
                  className='tooltip-wrapper'
                >
                  <div>
                    <h5>Gloria jenkins</h5>
                    <span>Shot</span>
                  </div>
                </ReactTooltip>
              </div>
            </div>
          </li>
          {/* END SHOT */}
        </ul>
        {/* END PORTFOLIO LIST */}
      </TabPanel>
      {/* END PHOTOGRAHY */}
    </>
  );
};
