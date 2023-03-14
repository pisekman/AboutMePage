import Logo from './Logo';

const Home = () => {
  return (
    <>
      <div className='tokyo_tm_home'>
        <div className='home_content'>
          <div className='avatar'>
            <div
              className='image avatar_img'
              style={{
                backgroundImage: 'url/assets/img/slider/3.jpg',
              }}
            ></div>
          </div>

          <div className='details'>
            <h3 className='name'>Michal Pisarski</h3>
            <p className='job'>
              Creative WebDeveloper based in Warsaw. Experienced in
              sales, hospitality and project management. Optimist,
              full of energy alumni of E-commerce & tourism studies.
            </p>
            <Logo />
            {/* social */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
