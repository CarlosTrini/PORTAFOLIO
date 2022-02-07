import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import TechsItems from './TechsItems';

import styles from 'styles/modules/projects.module.scss';
import rym from 'public/images/sites/rym.png';
import myfeeling from 'public/images/sites/myfeeling.png';
import loginmern from 'public/images/sites/loginmern.png';
import eventorganizer from 'public/images/sites/eventorganizer.png';
import hallowenstore from 'public/images/sites/hallowenstore.png';
import barbershop from 'public/images/sites/barbershop.png';
import portafolio from 'public/images/sites/portafolio.png';

const sitesImg = {
  rym,
  myfeeling,
  loginmern,
  eventorganizer,
  hallowenstore,
  barbershop,
  portafolio
}

const CardProject = ({ project }) => {
  const { id, name, hosting, url, description, techs, img, github } = project;

  return (
    <article className={styles.card_project}>
      <header className={styles.project_head}>
        <figure>
          <Image
            src={sitesImg[img].src}
            alt='project image'
            layout="fill"
          />
        </figure>
      </header>
      <div className={styles.project_body}>
        <h3 className={styles.project_title}>{name}</h3>

        <h4 className={styles.project_host}>Host - {hosting}</h4>

        <ul className={styles.project_techs}>
          {
            techs.map(t => <TechsItems key={t} tech={t} />)
          }
        </ul>

        <p>
          {description.substring(0, 100)}...
        </p>

        <div className={styles.project_links}>
          <Link href="/project/[pid]" as={`/project/${id}`}>
            <a rel="noreferrer">Ver más</a>
          </Link>
          <a href={github.front} target="_blank" rel="noreferrer">github FrontEnd</a>
          {
            github?.back && <a href={github.back} target="_blank" rel="noreferrer">github BackEnd</a>
          }
          <a href={url} target="_blank" rel="noreferrer">sitio</a>
        </div>


      </div>
    </article>
  );
};

export default CardProject;
