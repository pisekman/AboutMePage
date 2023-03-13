import PersonalInfo from './PersonalInfo';
import Intro from './Intro';
import Skills from './Skills';
import Resume from './Resume';
import KnowledgeInterest from './KnowledgeInterest';
const AboutMain = () => {
  return (
    <>
      <div className='container'>
        <div className='tokyo_tm_about'>
          <div className='tokyo_tm_title'>
            <div className='title_flex'>
              <div className='left'>
                <span>About</span>
                <h3>About Me</h3>
              </div>
            </div>
          </div>
          {/* End title */}

          <Intro />
          <div className='tokyo_tm_short_info'>
            <PersonalInfo />
          </div>
          {/* End personal info */}

          <div className='tokyo_tm_button' data-position='left'>
            <a href='assets/img/CV.pdf' download>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
      {/* End .container */}

      <div className='tokyo_tm_progressbox'>
        <div className='container'>
          <div className='in'>
            <Skills />
          </div>
          {/* End in */}
        </div>
        {/* End .container */}
      </div>

      <div className='tokyo_tm_skillbox'>
        <div className='container'>
          <div className='in'>
            <KnowledgeInterest />
          </div>
        </div>
      </div>

      <div className='tokyo_tm_resumebox'>
        <div className='container'>
          <div className='in'>
            <Resume />
          </div>
        </div>
      </div>

      {/* /ABOUT */}
    </>
  );
};

export default AboutMain;
