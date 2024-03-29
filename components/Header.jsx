import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import menuIcon from 'public/images/menuIcon.svg';
import styles from 'styles/modules/header.module.scss';

const Header = () => {
   const [toggle, setToggle] = useState(false);
   const [hideArrow, setHideArrow] = useState(false);

   const handleMenu = (e) => {
      setToggle(!toggle);
      setHideArrow(true);
   }

   return (
      <header className={styles.header}>
         <div className={styles.menu_container}>
            <button className={styles.icon_button} onClick={handleMenu}>
               <Image src={menuIcon} alt="menu responsive icon" />
            </button>
            {
               !hideArrow &&
               <div className={styles.alert_menu}>
                  <Image src="/images/left-arrow.svg" alt='arrow' width="40" height="40" />
                  <span>click</span>
               </div>
            }

         </div>

         <a
            href="https://drive.google.com/file/d/1_VBXuBG16SYB5Yk4FiHHQKYqDmmGkLz4/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className={styles.cv_link}
         >Descarga mi CV</a>

         <ul className={`${styles.links}  ${toggle && styles.show_menu}`} >
            <li className={styles.link}> <Link href="/" >Inicio</Link>  </li>
            <li> <Link href="/about" >Acerca</Link>  </li>
            <li> <Link href="/projects" >Proyectos</Link>  </li>
         </ul>
      </header>
   );
}

export default Header;

