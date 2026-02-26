export const translations = {
  ca: {
    nav: {
      home: "Inici",
      about: "Qui Som",
      players: "Jugadores",
      festival: "Xolas Day",
      contact: "Contacte",
    },
    hero: {
      title: "MÉS QUE UN EQUIP, UNA FAMÍLLIA",
      subtitle:
        "Futbol sala de barri, amistat i molta canya. Benvingudes a l'univers Xolas.",
      cta: "Inscriu-te al Xolas Day",
    },
    about: {
      title: "QUI SOM",
      text: "Som un grup d'amigues del barri que un dia vam decidir que el futbol sala seria la nostra excusa per riure, suar i créixer juntes. No som professionals, però hi posem més cor que ningú. El nostre futbol és de carrer, de barri, i sobretot, de germanor.",
    },
    players: {
      title: "LES NOSTRES CRACKS",
      special_skill: "Habilitat especial",
    },
    festival: {
      title: "XOLAS DAY: EL FESTIVAL",
      description:
        "El Xolas Day no és només un torneig, és la nostra gran festa. Un dia sencer dedicat a l'esport, la comunitat i, per descomptat, la gresca.",
      day_plan: "Esport i activitats durant el dia + Festa grossa a la nit.",
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
      festival: "Xolas Day",
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
      text: "Somos un grupo de amigas del barrio que un día decidimos que el fútbol sala sería nuestra excusa para reír, sudar y crecer juntas. No somos profesionales, pero le ponemos más corazón que nadie. Nuestro fútbol es de calle, de barrio, y sobre todo, de hermandad.",
    },
    players: {
      title: "NUESTRAS CRACKS",
      special_skill: "Habilidad especial",
    },
    festival: {
      title: "XOLAS DAY: EL FESTIVAL",
      description:
        "El Xolas Day no es solo un torneo, es nuestra gran fiesta. Un día entero dedicado al deporte, la comunidad y, por supuesto, la juerga.",
      day_plan: "Deporte y actividades de día + Fiesta a tope de noche.",
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