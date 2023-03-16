import Services from './Service';
const ServiceMain = () => {
  return (
    <>
      {/* SERVICE */}

      <div className='container'>
        <div className='tokyo_tm_services'>
          <div className='tokyo_tm_title'>
            <div className='title_flex'>
              <div className='left'>
                <span>Services</span>
                <h3>What I Do</h3>
              </div>
            </div>
          </div>
          {/* End tokyo_tm_title */}

          <div className='list' style={{ maxWidth: '1000px' }}>
            <ul>
              <Services />
            </ul>
          </div>
          {/* End list */}
        </div>
      </div>
      {/* End .container */}
    </>
  );
};

export default ServiceMain;
