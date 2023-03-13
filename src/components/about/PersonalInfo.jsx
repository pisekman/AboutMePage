import React from 'react';

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: 'left',
      info: [
        {
          id: 1,
          name: 'Birthday',
          content: '1988',
        },
        {
          id: 2,
          name: 'Age',
          content: '35',
        },
        {
          id: 3,
          name: 'Address',
          content: 'Warsaw, Poland',
        },
        {
          id: 4,
          name: 'Email',
          content: (
            <>
              <a href='mailto:md.pisarski@gmail.com'>
                md.pisarski@gmail.com
              </a>
            </>
          ),
        },
        {
          id: 5,
          name: 'Phone',
          content: (
            <>
              <a href='tel:+48 791 810 890'>+48 791 810 890</a>
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      colClass: 'right',
      info: [
        {
          id: 1,
          name: 'Nationality',
          content: 'Polish',
        },
        {
          id: 2,
          name: 'Study',
          content: 'University of Lodz',
        },
        {
          id: 3,
          name: 'Degree',
          content: 'Master',
        },
        {
          id: 4,
          name: 'Interest',
          content: 'Olympic Weightlifting',
        },
        {
          id: 5,
          name: 'Freelance',
          content: 'Available',
        },
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className='tokyo_tm_info'>
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
