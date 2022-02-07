import React from 'react';

import Layout from 'components/Layout';
import TechsItems from 'components/TechsItems';
import CardProject from 'components/CardProject';
import { projects, technologies } from 'helpers/constants';

import styles from 'styles/modules/projects.module.scss';
const Projects = () => {
  return (
    <Layout>
      <div className={styles.techs}>
        <h2 className="titles_sections">Tecnologías</h2>
        <small>Las tecnologías de Backend aún las estoy aprendiendo pero ya las he usado a nivel básico</small>
        <ul className={`${styles.technologies_container}`}>
          {
            technologies.map(t => <TechsItems key={t.tech} tech={t} />)
          }
        </ul>
      </div>
      <div className={styles.projects}>
        <h2 className="titles_sections">Algunos de mis proyectos</h2>
        <section className={`container ${styles.projects_container}`}>
          {
            projects.map(p => <CardProject key={p.id} project={p} />)
          }
        </section>
      </div>

    </Layout>
  );
};

export default Projects;
