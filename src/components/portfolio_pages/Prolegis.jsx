import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Tooltip as ReactTooltip } from 'react-tooltip';

export const Prolegis = ({ toggleModalThree }) => {
  return (
    <>
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
    </>
  );
};
