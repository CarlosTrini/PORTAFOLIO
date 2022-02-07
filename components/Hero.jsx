import React from 'react';
import Image from 'next/image';

import { dataHero, socials } from 'helpers/constants';

import photo from 'public/images/titulacion.jpg';
import styles from 'styles/modules/hero.module.scss';

const Hero = () => {

   const { title, presentation } = dataHero;
   const { head, body, bann} = presentation;

   return (
      <>
         <section className={styles.hero}>
            <div className="container">
               <figure className={styles.hero_image}>
                  <Image src={photo} alt="mi foto" />
               </figure>
               <div className={styles.hero_content}>
                  <h1 className={styles.hero_title}>{title}</h1>
                  {/* <h2 className={styles.hero_head}>{head}</h2> */}
                  <h3 className={styles.hero_body}>{bann}</h3>
                  <p className={styles.hero_body}>{body}</p>
               </div>
                  <ul className={styles.hero_socials}>
                     {
                        socials.map(s =>
                           <li key={s.social}>
                              <a href={s.link} target="_blank" rel="noreferrer">
                                 <Image
                                    src={`/images/iconsTech/${s.social}.png`}
                                    alt={`${s.social} icon`}
                                    width="50"
                                    height="50"
                                 />

                              </a>
                           </li>)
                     }
                     <li>trinidadcarlos952@gmail.com</li>
                  </ul>

            </div>
         </section>
      </>
   );
};

export default Hero;
