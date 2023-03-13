import React from 'react';

const Resume = () => {
  const resumeContent = [
    {
      id: 1,
      colClass: 'left',
      title: 'Education',
      resume: [
        {
          id: 1,
          year: '2020-21',
          institute: 'Coderslab ',
          degree: 'Frontend Developer, Javascript: React',
        },
        {
          id: 2,
          year: '2011 - 2013',
          institute: 'E-commerce, University of Lodz',
          degree: 'Bachelor Degree',
        },
        {
          id: 3,
          year: '2008 - 2010',
          institute:
            'Tourism and Hospitality Studies, University of Lodz',
          degree: 'Masters Degree',
        },
      ],
    },
    {
      id: 2,
      colClass: 'right',
      title: 'Experience',
      resume: [
        {
          id: 1,
          year: '09.2022 - Now',
          institute: 'Shiji Group',
          degree: 'Junior Frontend Developer',
        },
        {
          id: 2,
          year: '02.2022 - 09.2022',
          institute: 'Softwebo (software house)',
          degree: 'Junior Frontend Developer',
        },
        {
          id: 3,
          year: '2017 - 2022',
          institute: 'Booking.com',
          degree: 'Key Account Manager',
        },
      ],
    },
  ];
  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className='section_title'>
            <h3>{item.title}</h3>
          </div>
          <div className='tokyo_tm_resume_list'>
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className='list_inner'>
                    <div className='time'>
                      <span>{value.year}</span>
                    </div>
                    <div className='place'>
                      <h3>{value.institute}</h3>
                      <span>{value.degree}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
