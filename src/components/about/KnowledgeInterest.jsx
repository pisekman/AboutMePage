import React from 'react';

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: 'left',
      title: 'Knowledge',
      content: [
        ' Bootstrap, Material UI',
        ' React, Ember, Javascript',
        ' Gulp, Webpack, Sass ',
      ],
    },
    {
      id: 2,
      colClass: 'right',
      title: 'Interests',
      content: [
        ' Consument behavior',
        ' Site Optimization',
        ' Custom Website',
      ],
    },
  ];

  return (
    <>
      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className='section_title'>
            <h3>{item.title}</h3>
          </div>
          <div className='tokyo_tm_skill_list'>
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <img
                      className='svg'
                      src='assets/img/svg/rightarrow.svg'
                      alt='arrow'
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default KnowledgeInterest;
