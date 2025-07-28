import React, { useContext } from 'react';
import { ServiceContext } from '../../../ServiceContext';
import './Education.css';

const Education = () => {
  const { utilData, isDarkMode } = useContext(ServiceContext);

  return (
    <>
      <div className={`educ_container ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="educ_div_section">
          {utilData?.ProjectStyle?.my_education_data?.map((data, index) => {
            return (
              <>
                <div className="educ_upper_section" key={index}>
                  <div className="educ_container_one">
                    <img
                      src={utilData?.globalImages?.dyp_college_img}
                      alt="educ_image"
                    />
                  </div>
                  <div className="educ_container_two">
                    <div className="upper_container_section">
                      <div className="upper_left">
                        <img
                          src={utilData?.globalImages?.college_logo}
                          alt="college logo"
                        />
                      </div>
                      <div className="upper_middle">
                        <h3>{data.college_name}</h3>
                        <div className="upper_right">
                          <h4>{data.college_degree_name}</h4>
                          <h5 style={{ color: 'green' }}>
                            {data.education_spam}
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="educ_lower_section">
                      {data.education_info.map((indata, index) => {
                        return (
                          <div className="educ_data_info" key={index}>
                            <p>{indata.educ_info}</p>
                          </div>
                        );
                      })}
                      <div className="educ_btn">
                        <a href={data.btn_link} target="_blank">
                          <button>{data.btn_name}</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Education;
