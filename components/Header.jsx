import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import menuIcon from 'public/images/menuIcon.svg';
import styles from 'styles/modules/header.module.scss';

const Header = () => {
   const [toggle, setToggle] = useState(false);

   const handleMenu = (e) => {
      setToggle(!toggle);
   }

   return (
      <header className={styles.header}>
         <button className={styles.icon_button} onClick={handleMenu}>
            <Image src={menuIcon} alt="menu responsive icon" />
         </button>

         <ul className={`${styles.links}  ${toggle && styles.show_menu}`} >
            <li className={styles.link}> <Link href="/" >Inicio</Link>  </li>
            <li> <Link href="/about" >Acerca</Link>  </li>
            <li> <Link href="/projects" >Proyectos</Link>  </li>
         </ul>
      </header>
   );
}

export default Header;

