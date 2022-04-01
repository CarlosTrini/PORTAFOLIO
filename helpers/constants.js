export const dataHero = {
  title: "{ Portafolio }",
  presentation: {
    head: "Bienvenido a mi portafolio web",
    bann: "FrontEnd Development",
    body: "Aquí podrás encontrar un poco acerca de mí, de las técnologías que he estado aprendiendo, (De manera totalmente autodidacta) asi como algunos proyectos FrontEnd, y fullStack que he realizado durante mi aprendizaje",
  },
};
export const personalData = [
  { title: "nombre", details: "Carlos Trinidad" },
  { title: "Grado", details: "Ing. En Sistemas Computacionales" },
  { title: "Escuela", details: "Instituto Tecnológico de Iztapalapa (TecNM)" },
  {
    title: "intereses",
    details: ["Desarrollo web", "desarrollo de sistemas", "aprendizaje"],
  },
];
export const socials = [
  {social: 'github', link: 'https://github.com/CarlosTrini'},
  {social: 'linkedin', link: 'https://linkedin.com/in/carlos-trinidad-b45956220'}
]
export const presentation = {
  title: "Presentación",
  details:
    "Encontré el gusto por el desarrollo web y de sistemas de una forma inesperada. Al avanzar y tropezar mucho tiempo con el querer saberlo todo decidí dirigir mis esfuerzos hacía el lado del FrontEnd. Voy comenzando y aunque hay demasiado por recorrer, sigo aprendiendo, intento mantenerme actualizado y buscando una oportunidad que me permita avanzar como desarrollador.",
};
export const jobExperience = [
  {
    company: "Telmex",
    activities: [
      "Levatamiento de datos personales",
      "Seguimiento a servicios",
      "Atención al usuario",
    ],
    time: "Marzo 2015 - Agosto 2015",
  },
  {
    company: "Solcat",
    activities: [
      "Soporte técnico",
      "Instalación de equipos y cámaras",
      "Mantenimiento a equipos de computo",
      "Alta de correos",
      "Instalación de S.O. Windows y Mac",
    ],
    time: "Julio 2019 - Mayo 2021",
  },
  {
    company: "Mainbit",
    activities: [
      "Cambios de equipos de computo",
      "Subir equipos a dominio",
      "Configuración de correos",
      "Instalación de UPS",
    ],
    time: "Julio 2021 - Septiembre 2021",
  },
];
export const projects = [
  {
    id: "258d600d-e20b-4f44-b26c-44a49d1d49ff",
    name: "MyFeeling",
    hosting: "vercel y firebase",
    url: "https://my-feeling-carlostrini.vercel.app/",
    description:
      "MyFeeling es un sitio en el que te puedes registrar, iniciar sesión, publicar historias breves con una imagen de portada, dar like y comentar tus publicaciones y las de otros. Tambien puedes visitar los perfiles de otros usuarios",
    tags: [
      "react",
      "nextjs",
      "server-Side-Props",
      "firebase-database",
      "firebase-auth",
      "firebase-storage",
      "css-module",
      "javascript",
      "react-useContext",
      "SweetAlert",
      "Github",
    ],
    techs: ["react", "nextjs", "firebase", "css", "sweetalert"],
    img: "myfeeling",
    github: {
      front: "https://github.com/CarlosTrini/myFeeling",
      back: "",
    },
  },
  {
    id: "003fb9d6-25c8-404c-aabe-b64c9b4c2c63",
    name: "BarberShop stack-MERN",
    hosting: "netlify y heroku",
    url: "https://barber-shop-mern.netlify.app/",
    description:
      "BarberShop esta construida en dos partes. FrontEnd: React, Backend: Nodejs, express, JsonWebToken, Mongodb Atlas, Mongoose. Es una barbería en la cual se pueden registrar, iniciar sesión y agendar citas siempre y cuando se este registrado. Los servicios son agregados a un carrito con localstorage. cuenta con una sección para el administrador en el cual se puede buscar citas agendadas, dar por atendidas, agregar, eliminar, ver y editar servicios. Para acceder como administrador usar: user => carlos@carlos.com, pass => contrasena"  ,
    tags: [
      "react",
      "react-redux",
      "axios",
      "scss",
      "SweetAlert",
      "Github",
      "localstorage",
      "nodejs",
      "express",
      "mongoose",
      "mongoDB",
      "json-web-token"
    ],
    techs: ["react", "mongodb", "express", "scss", "sweetalert", "nodejs", "jsonwebtoken"],
    img: "barbershop",
    github: {
      front: "https://github.com/CarlosTrini/barbershop-front",
      back: "https://github.com/CarlosTrini/barbershop-back",
    },
  },
  {
    id: "614d334d-3ece-40e1-80c9-9e5142278132",
    name: "Login stack-MERN",
    hosting: "netlify y heroku",
    url: "https://login-mern-front.netlify.app/",
    description:
      "Simulador de login contruido en dos partes: FrontEnd con React y BackEnd con NodeJs, Express, JWT, MongoDB atlas, Mongoose y NodeMailer. Una vez registrado se envia un mensaje a tu correo con ayuda de NodeMailer para verificar la cuenta, una vez verificada se permite el acceso. Igualmente se cuenta con el poder recuperar una contraseña olvidada mediante un mensaje enviado con NodeMailer. El acceso se permite gracias al manejo de Token con Json Web Token",
    tags: [
      "React",
      "React Router Dom v6",
      "Styled Components",
      "SweetAlert",
      "NodeJS",
      "NodeMailer",
      "Github",
      "mongoose",
      "mongodb",
    ],
    techs: [
      "react",
      "styledcomponents",
      "sweetalert",
      "nodemailer",
      "mongodb",
      "nodejs",
      "jsonwebtoken",
      "express"
    ],
    img: "loginmern",
    github: {
      front:
        "https://github.com/CarlosTrini/login-MERN-FROM/blob/main/src/styles/home.js",
      back: "https://github.com/CarlosTrini/login-MERN-BACK",
    },
  },
  {
    id: "31b4fa1f-7eee-4f1e-b3cb-2b1226677379",
    name: "Star Wars",
    hosting: "netlify",
    url: "https://star-wars-api-react.netlify.app/",
    description:
      "Página construida con  ReactJs, la cual consume una api de star wars. Aplicando scroll infinito, modo oscuro. Haciendo uso de Redux, permite agregar y eliminar un personaje de favoritos con data persistente , y ejecutar peticiones para llenar el state de los personajes",
    tags: ["React", "SCSS", "JavaScript", "Github", "React-intersection-observer", "Redux", "Redux-thunk"],
    techs: ["react", "scss", "js", "github", "redux"],
    img: "starwars",
    github: {
      front: "https://github.com/CarlosTrini/star-wars-api",
      back: "",
    },
  },
  {
    id: "821fb4j7-903cs-2943c-ñlks-g239a3i7s1t09",
    name: "Portafolio",
    hosting: "vercel",
    url: "https://portafolio-nine-zeta.vercel.app/",
    description:
      "Mi portafolio web. Realizado con Nextjs, SCSS module"  ,
    tags: [
      "react",
      "NextJs",
      "scss",
      "Github",
    ],
    techs: ["react", "nextjs", "scss"],
    img: "portafolio",
    github: {
      front: "https://github.com/CarlosTrini/PORTAFOLIO",
      back: "",
    },
  },
  {
    id: "69f41795-1049-441c-9ba7-606ae54a0502",
    name: "Juego Rick&Morty",
    hosting: "netlify",
    url: "https://rickandmorty-api-memorama.netlify.app/",
    description:
      "Juego de memorama de la caricatura de Rick & Morty con tres niveles de dificultad. Las imágenes son dinámicas en cada juego ya que son traidas desde la misma API de rickymorty",
    tags: ["HTML", "Javascript", "SCSS", "SweetAlert", "Github"],
    techs: ["html", "scss", "js"],
    img: "rym",
    github: {
      front: "https://github.com/CarlosTrini/memorama-r-m",
      back: "",
    },
  },

  {
    id: "54792ac4-3294-413e-bc46-28ef03025478",
    name: "Event Organizer",
    hosting: "netlify",
    url: "https://event-organizer-gulp.netlify.app/",
    description:
      "Página para organizador de eventos, que extrae los datos desde archivos JavaScript simulando dicha data como si fuera traida desde alguna API. Realizada con Gulp, SCSS y libreria ScrollReveal",
    tags: ["HTML", "SCSS", "JavaScript", "Github", "Gulp"],
    techs: ["html", "scss", "js", "gulp"],
    img: "eventorganizer",
    github: {
      front: "https://github.com/CarlosTrini/event-organizer",
      back: "",
    },
  },

  {
    id: "09489b2a-c944-40dd-91bb-3d942e05cc13",
    name: "Hallowen store",
    hosting: "netlify",
    url: "https://hallowen-store.netlify.app/",
    description:
      "Página estática de venta de productos para Hallowen, los productos se pintan simulando que dicha data es consumida desde alguna API. Realizada con Gulp, SCSS y libreria ScrollReveal",
    tags: ["HTML", "SCSS", "JavaScript", "Github", "Gulp"],
    techs: ["html", "scss", "js", "gulp"],
    img: "hallowenstore",
    github: {
      front: "https://github.com/CarlosTrini/hallowen-store",
      back: "",
    },
  },
  ,


];
export const technologies = [
  {tech :"javaScript", img:"js"},
  {tech:"css", img:"css"},
  {tech:"scss", img:"scss"},
  {tech: "HTML", img:"html"},
  {tech:"React Js", img:"react"},
  {tech:"Next Js", img:"nextjs"},
  {tech:"Node Js", img:"nodejs"},
  {tech:"GULP", img:"gulp"},
  {tech:"Sweet Alert", img:"sweetalert"},
  {tech:"Express Js", img: "express"},
  {tech: "Json Web Token", img: "jsonwebtoken"},
  {tech: "Nodemailer", img:"nodemailer"},
  {tech: "Firebase", img:"firebase"},
  {tech: "Mongo DB", img:"mongodb"},
];

