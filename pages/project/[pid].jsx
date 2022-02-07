import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import Layout from 'components/Layout';
import TechsItems from 'components/TechsItems';
import { projects } from 'helpers/constants';

import styles from 'styles/modules/project.module.scss';

const ProjectDetail = () => {
  const [project, setProject] = useState({});
  const router = useRouter();
  const { pid } = router.query;

  const getProject = () => {
    const projectSelected = projects.filter(p => p.id === pid);
    setProject(projectSelected[0]);
    console.log('tecnologias => ', project.techs);
  }

  useEffect(() => {
    pid && getProject();
  }, [pid]);

  if (!(project?.techs)) {
    return <h2 className="titles_sections">CARGANDO...</h2>
  }

  return (
    <Layout>
      <section className={`container ${styles.project}`}>
        <div className={styles.project_top}>
          <header>
            <figure className={styles.project_img}>
              <Image
                src={`/images/sites/${project.img}.png`}
                width="500"
                height="300"
              />
            </figure>
          </header>
          <div>
            <h2 className={styles.project_name}>{project.name}</h2>

            <ul className={styles.project_techs}>
              {
                project.techs.map(t => <TechsItems key={t} tech={t} />)
              }
            </ul>
            <p>Hosting:<span> {project.hosting} </span></p>
          </div>
        </div>

        <div className={styles.project_bottom}>
          <ul className={styles.project_tags}>
            {project.tags.map(t => <li key={t}>{t}</li>)}
          </ul>
          <p className={styles.project_description}>
            {project.description}
          </p>

          <div className={styles.project_links}>
            <a href={project.github.front} target="_blank">github FrontEnd</a>
            {
              project.github?.back && <a href={project.github.back} target="_blank">github BackEnd</a>
            }
            <a href={project.url} target="_blank">sitio</a>
            <Link href="/projects">
              <a >Regresar...</a>
            </Link>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
