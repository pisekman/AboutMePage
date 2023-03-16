import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen);
    e.preventDefault();
  }

  const serviceContent = [
    {
      id: 1,
      no: '01',
      title: 'Web Development',
      text: `Single Page Applications, code maintainer, portfolio builder. Technology stack - React, Material Ui, Styled Components, Wordpress and Scss`,
    },
    {
      id: 2,
      no: '02',
      title: 'OTA property management',
      text: `Implementing rate pricing strategy to increase revenue and direct bookings. Improving property booking intent o uncover new revenue opportunities`,
    },
    {
      id: 3,
      no: '03',
      title: 'Online branding',
      text: `Digital advertising includes mobile apps, website banner ads, Google advertising, and social networks. I will supportu you to deliver creative content to a wide, diverse audience and introduce them to your products.`,
    },
  ];

  return (
    <>
      {serviceContent.map((item) => (
        <li key={item.id}>
          <div className='list_inner'>
            <span className='number'>{item.no}</span>
            <h3 className='title'>{item.title}</h3>
            <p className='text'>{item.text}</p>
            <div className='tokyo_tm_read_more'>
              <a href='#'>
                <span>&nbsp;&nbsp;</span>
              </a>
            </div>
          </div>
        </li>
      ))}

      {/* START MODAL */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel='My dialog'
        className='mymodal'
        overlayClassName='myoverlay'
        closeTimeoutMS={500}
      >
        <div className='tokyo_tm_modalbox_news'>
          <button className='close-modal' onClick={toggleModal}>
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
                    backgroundImage: 'url(assets/img/news/2.jpg)',
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className='details'>
                <div className='extra'>
                  <p className='date'>
                    By <a href='#'>Alex Watson</a>
                    <span>05 April 2021</span>
                  </p>
                </div>
                <h3 className='title'>
                  Format releases a new tool that enables direct video
                  hosting
                </h3>
              </div>
              {/* END DETAILS */}
              <div className='main_content '>
                <div className='descriptions'>
                  <p className='bigger'>
                    Just because we can't get out and about like we
                    normally would, doesn’t mean we have to stop
                    taking pictures. There’s still plenty you can do,
                    provided you're prepared to use some imagination.
                    Here are a few ideas to keep you shooting until
                    normal life resumes.
                  </p>
                  <p>
                    Most photographers love to shoot the unusual, and
                    you don’t get much more unusual than These
                    Unprecedented Times. Right now everything counts
                    as out of the ordinary. There are a number of
                    remarkable things about these lockdown days that
                    are worth photographing now so we can remember
                    them when it is all over.
                  </p>
                  <p>
                    Streets empty that are usually busy are remarkable
                    and can evoke the sense of historical pictures
                    from before the invention of the motorcar. Other
                    things that are different at the moment will be
                    queues to get into stores and the lines marked out
                    on the floor to show how far apart we should be.
                  </p>
                </div>
                {/* END DESCRIPTION */}

                {/* END NEWS SHARE */}
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL */}
    </>
  );
};

export default Services;
