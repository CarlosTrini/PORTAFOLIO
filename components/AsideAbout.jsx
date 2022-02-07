import React from 'react';


import styles from 'styles/modules/about.module.scss';

const AsideAbout = ({ personalData }) => {

  return (
    <>
      <aside className={styles.about_aside}>
        {
          personalData.map(({ title, details }) => (
            !(details instanceof Object)
              ? (
                <div key={title}>
                  <p>{title}: <span>{details}</span></p>
                </div>
              )
              : (
                <div key={title}>
                  <p>{title}</p>
                  <ul>
                    {details.map((d, i) => <li key={i} >{d}</li>)}
                  </ul>
                </div>
              )
          ))
        }
      </aside>
    </>
  );
};

export default AsideAbout;