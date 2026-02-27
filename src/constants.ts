export const translations = {
  ca: {
    nav: {
      home: "Inici",
      about: "Qui Som",
      players: "Jugadores",
      festival: "Galeria",
      contact: "Contacte",
    },

    hero: {
      title: "Xolas, FC",
      subtitle:
        "Uneix-te a la marea rosa", 
      cta: "Inscriu-te al Xolas Day",
    },

    about: {
      title: "QUI SOM",
      text: "Som un grup de noies que, sincerament, havíem tocat ben poc una pilota.<br />Tot va començar quan ens vam apuntar a un torneig simplement per passar-nos-ho bé. Era una excusa per riure, fer equip i provar alguna cosa nova.<br />El que va començar com una tonteria… ha acabat convertint-se en una realitat.<br />Després d’aquell torneig vam decidir fer un pas més. Vam contactar amb el Futbol Sala Montpedrós per poder fer realitat aquest projecte, i ens van obrir les portes des del primer moment.<br />Ja fa uns mesos que entrenem i juguem partits, anant sempre a tope per millorar cada dia. Hem evolucionat moltíssim, dins i fora de la pista, i el que més ens defineix és la il·lusió, el compromís i les ganes d’aprendre.<br />I si una cosa tenim clara… és que tenim la millor grada d’animació del món!"
    },

    players: {
      title: "LES NOSTRES CRACKS",
      special_skill: "Habilitat especial",

      skills: {
        gina: "Dispara des de casa seva i també marca.",
        anna: "Corre tant que el GPS es perd.",
        maria: "Controla la pilota com si tingués imant.",
        marta: "Si xuta, aparta el cap.",
        leire: "Recupera pilotes fins i tot somiant.",
        lydia: "No té por ni del VAR imaginari.",
        ona: "Té més gol que gana.",
        jana: "Apareix i de sobte el partit millora.",
        noa: "Sempre troba espais on no n'hi ha.",
        mara: "Intensitat màxima del minut 1 al 40.",
      },
    },

    festival: {
      title: "XOLAS DAY: EL FESTIVAL",
      description:
        "El Xolas Day no és només un torneig, és la nostra gran festa. Un dia sencer dedicat a l'esport, la comunitat i, per descomptat, la gresca.",
      day_plan:
        "Esport i activitats durant el dia + Festa grossa a la nit.",
      schedule: "HORARIS",
      morning: "Matí: Torneig de Futbol Sala",
      afternoon: "Tarda: Activitats i tallers",
      night: "Nit: Festa i DJ Set",
      cta: "Compra la teva entrada a Entrapolis",
      sponsors: "ELS NOSTRES SPONSORS",
    },

    contact: {
      title: "CONTACTA AMB NOSALTRES",
      name: "Nom",
      email: "Email",
      message: "Missatge",
      send: "Enviar Missatge",
      follow: "Segueix-nos a Instagram",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      about: "Quiénes Somos",
      players: "Jugadoras",
      festival: "Galeria",
      contact: "Contacto",
    },

    hero: {
      title: "MÁS QUE UN EQUIPO, UNA FAMILIA",
      subtitle:
        "Fútbol sala de barrio, amistad y mucha caña. Bienvenidas al universo Xolas.",
      cta: "Inscríbete al Xolas Day",
    },

    about: {
      title: "QUIÉNES SOMOS",
      text: "Somos un grupo de chicas que, sinceramente, habíamos tocado muy poco un balón.<br />Todo empezó cuando nos apuntamos a un torneo simplemente para pasarlo bien. Era una excusa para reír, hacer equipo y probar algo nuevo.<br />Lo que empezó como una tontería… ha acabado convirtiéndose en una realidad.<br />Después de aquel torneo decidimos dar un paso más. Contactamos con el Fútbol Sala Montpedrós para poder hacer realidad este proyecto, y nos abrieron las puertas desde el primer momento.<br />Hace ya unos meses que entrenamos y jugamos partidos, yendo siempre a tope para mejorar cada día. Hemos evolucionado muchísimo, dentro y fuera de la pista, y lo que más nos define es la ilusión, el compromiso y las ganas de aprender.<br />Y si hay algo que tenemos claro… es que tenemos la mejor grada de animación del mundo."
    },

    players: {
      title: "NUESTRAS CRACKS",
      special_skill: "Habilidad especial",

      skills: {
        gina: "Dispara desde su casa y también marca.",
        anna: "Corre tanto que el GPS se pierde.",
        maria: "Controla el balón como si tuviera imán.",
        marta: "Si chuta, aparta la cabeza.",
        leire: "Recupera balones hasta en sueños.",
        lydia: "No tiene miedo ni al VAR imaginario.",
        ona: "Tiene más gol que hambre.",
        jana: "Aparece y de repente el partido mejora.",
        noa: "Siempre encuentra espacios imposibles.",
        mara: "Intensidad máxima del minuto 1 al 40.",
      },
    },

    festival: {
      title: "XOLAS DAY: EL FESTIVAL",
      description:
        "El Xolas Day no es solo un torneo, es nuestra gran fiesta. Un día entero dedicado al deporte, la comunidad y, por supuesto, la juerga.",
      day_plan:
        "Deporte y actividades de día + Fiesta a tope de noche.",
      schedule: "HORARIOS",
      morning: "Mañana: Torneo de Fútbol Sala",
      afternoon: "Tarde: Actividades y talleres",
      night: "Noche: Fiesta y DJ Set",
      cta: "Compra tu entrada en Entrapolis",
      sponsors: "NUESTROS SPONSORS",
    },

    contact: {
      title: "CONTACTA CON NOSOTROS",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar Mensaje",
      follow: "Síguenos en Instagram",
    },
  },
};

export type Player = {
  id: number;
  name: string;
  slug: string; // para rutas seguras (sin acentos/espacios)
  images: [string, string];
};

export const playersData: Player[] = [
  {
    id: 1,
    name: "Gina Moré",
    slug: "gina-more",
    images: [
      "/assets/fotos/fotos_jugadoras/GinaMore.jpeg",
      "/assets/fotos/fotos_jugadoras/GinaMore2.jpeg",
    ],
  },
  {
    id: 2,
    name: "Anna Solé",
    slug: "anna-sole",
    images: [
      "/assets/fotos/fotos_jugadoras/AnaSole.jpg",
      "/assets/fotos/fotos_jugadoras/AnaSole2.jpeg",
    ],
  },
  {
    id: 3,
    name: "Maria Solé",
    slug: "maria-sole",
    images: [
      "/assets/fotos/fotos_jugadoras/MariaSole.jpg",
      "/assets/fotos/fotos_jugadoras/MariaSole2.jpeg",
    ],
  },
  {
    id: 4,
    name: "Marta Vizcaino",
    slug: "marta-vizcaino",
    images: [
      "/assets/fotos/fotos_jugadoras/MartaVizcaino.jpeg",
      "/assets/fotos/fotos_jugadoras/MartaVizcaino2.jpeg",
    ],
  },
  {
    id: 5,
    name: "Leire Garrido",
    slug: "leire-garrido",
    images: [
      "/assets/fotos/fotos_jugadoras/LeireGarrido.jpeg",
      "/assets/fotos/fotos_jugadoras/LeireGarrido2.jpeg",
    ],
  },

  {
    id: 6,
    name: "Jana Puig",
    slug: "jana-puig",
    images: [
      "/assets/fotos/fotos_jugadoras/JanaPuig.jpeg",
      "/assets/fotos/fotos_jugadoras/JanaPuig2.jpeg",
    ],
  },

  {
    id: 7,
    name: "Ona Pérez",
    slug: "ona-perez",
    images: [
      "/assets/fotos/fotos_jugadoras/OnaPerez.jpeg",
      "/assets/fotos/fotos_jugadoras/OnaPerez2.jpeg",
    ],
  },
  {
    id: 8,
    name: "Lydia Fernández",
    slug: "lydia-fernandez",
    images: [
      "/assets/fotos/fotos_jugadoras/LydiaFernandez.jpeg",
      "/assets/fotos/fotos_jugadoras/LydiaFernandez2.jpeg",
    ],
  },
  {
    id: 9,
    name: "Noa Plaza",
    slug: "noa-plaza",
    images: [
      "/assets/fotos/fotos_jugadoras/NoaPlaza.jpeg",
      "/assets/fotos/fotos_jugadoras/NoaPlaza2.jpeg",
    ],
  },
  {
    id: 10,
    name: "Mara Plaza",
    slug: "mara-plaza",
    images: [
      "/assets/fotos/fotos_jugadoras/MaraPlaza.jpeg",
      "/assets/fotos/fotos_jugadoras/MaraPlaza2.jpeg",
    ],
  },
];



export const galleryImages = [
  "/assets/fotos/fotos_equip/foto1.jpeg",
  "/assets/fotos/fotos_equip/foto2.jpeg",
  "/assets/fotos/fotos_equip/foto3.jpeg",
  "/assets/fotos/fotos_equip/foto4.jpeg",
  "/assets/fotos/fotos_equip/foto5.jpeg",
  "/assets/fotos/fotos_equip/foto6.jpeg",
];