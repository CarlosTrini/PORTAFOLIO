import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';


import styles from 'styles/modules/about.module.scss';
import aboutIcon from 'public/images/aboutIcon.svg';
import jobIcon from 'public/images/jobIcon.svg';
import aboutImage from 'public/images/img1.svg';


const Jobs = ({ presentation, jobExperience }) => {

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const cb = (entries) => {
    const [entry] = entries;
    console.log(entry.isIntersecting)
    setIsVisible(entry.isIntersecting); // false or true
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: .5
  };


  useEffect(() => {
    const observer = new IntersectionObserver(cb, options);
    if (elementRef.current) observer.observe(elementRef.current);


    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    }
  }, [elementRef, options]);


  return (
    <>
      <section
        className={`${styles.show_content} ${styles.about_content}`}
      >
        <div className={styles.about_content_presentation}
        >
          <figure className={`${styles.about_content_image}`} >
          <Image src={aboutImage} alt="image about section" />
        </figure>
        
          <figure>
            <Image src={aboutIcon} alt="presetation icon" />
          </figure>
          <p>
            {presentation.details}
          </p>
        </div>

        <h3 className="titles_sections ">Experiencia</h3>
        <div className={`${styles.about_card_container} ${styles.show_job}  `}>
          {
            jobExperience.map(({ company, activities, time }) =>
              <article
                key={company}
                className={`${styles.about_content_card}`}>
                <header>
                  <figure>
                    <Image src={jobIcon} alt="jobIcon" />
                  </figure>
                  <h4>{company}</h4>
                </header>
                <h5>{time}</h5>
                {
                  activities.map((a, i) => <ul key={i}><li>{a}</li></ul>)
                }
              </article>

            )
          }
        </div>
      </section>
    </>
  );
};

export default Jobs;
