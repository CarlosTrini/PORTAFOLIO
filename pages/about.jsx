import React from 'react';

import Layout from 'components/Layout';
import AsideAbout from 'components/AsideAbout';
import { personalData, presentation, jobExperience } from 'helpers/constants';

import styles from 'styles/modules/about.module.scss';
import Jobs from 'components/Jobs';

const About = () => {
  return (
    <>
      <Layout>
        <section className={`${styles.about} ${styles.show_about_section}`}>
          <AsideAbout personalData={personalData} />
          <Jobs presentation={presentation} jobExperience={jobExperience} />
        </section>
      </Layout>
    </>
  );
};

export default About;


