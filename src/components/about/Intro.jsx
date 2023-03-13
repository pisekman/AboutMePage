import React from 'react';

const Intro = () => {
  const introContent = {
    image: 'assets/img/slider/1.jpg',
    name: 'Michal Pisarski',
    designation: 'Frontend Developer',
    text: (
      <>
        <p>
          I am an energetic, sociable, and curious individual who
          draws inspiration from social situations and enjoys being
          creative. I like being active, and my spontaneous and lively
          nature makes me comfortable undertaking new challenges.
        </p>
        <p>
          I’m a team spirit and always willing to help out others and
          contribute to group projects. I'm energized by competitions.
          Attention to detail keeps me away from mistakes. I value
          practical solutions and proven methods. Thus, I have
          self-discipline and I am responsible and committed to my
          duties. I maintain productivity even when faced with
          distractions.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className='top_author_image'>
        <img src={introContent.image} alt='about' />
      </div>
      <div className='about_title'>
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className='about_text'>{introContent.text}</div>
    </>
  );
};

export default Intro;
