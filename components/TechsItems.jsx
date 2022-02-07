import React from 'react';
import Image from 'next/image';

import styles from 'styles/modules/projects.module.scss';
import css from 'public/images/iconsTech/css.png';
import firebase from 'public/images/iconsTech/firebase.png';
import github from 'public/images/iconsTech/github.png';
import gulp from 'public/images/iconsTech/gulp.png';
import html from 'public/images/iconsTech/html.png';
import js from 'public/images/iconsTech/js.png';
import nextjs from 'public/images/iconsTech/nextjs.png';
import nodejs from 'public/images/iconsTech/nodejs.png';
import react from 'public/images/iconsTech/react.png';
import scss from 'public/images/iconsTech/scss.png';
import sweetalert from 'public/images/iconsTech/sweetalert.png';
import nodemailer from 'public/images/iconsTech/nodemailer.png';
import styledcomponents from 'public/images/iconsTech/styledcomponents.png';
import jsonwebtoken from 'public/images/iconsTech/jsonwebtoken.png';
import mongodb from 'public/images/iconsTech/mongodb.png';
import express from 'public/images/iconsTech/express.png';


const iconsTech = {
  css,
  firebase,
  github,
  gulp,
  html,
  js,
  nextjs,
  nodejs,
  react,
  scss,
  sweetalert,
  nodemailer,
  styledcomponents,
  jsonwebtoken,
  mongodb,
  express,
}

const TechsItems = ({ tech }) => {
  return (
    <>
      { 
        !(tech?.tech)
        ?( <li>
          <figure>
            <Image
              width="40"
              height="40"
              src={iconsTech[tech].src}
              alt={`${tech} icon`}
              title={tech}
            />
          </figure>
        </li>)
        :(
          <li className={styles.technologies}>
            <p>{tech.tech}</p>
          <figure>
            <Image
              width="25"
              height="25"
              src={iconsTech[tech.img].src}
              alt={`${tech.tech} icon`}
              title={tech.tech}
            />
          </figure>
        </li>
        )
      }
    </>
  );

}

export default TechsItems;