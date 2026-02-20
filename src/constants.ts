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
      title: "MÉS QUE UN EQUIP, UNA FAMÍLIA",
      subtitle: "Futbol sala de barri, amistat i molta canya. Benvingudes a l'univers Xolas.",
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
    gallery: {
      title: "GALERIA",
      subtitle: "Moments Xolas",
    },
    festival: {
      title: "XOLAS DAY: EL FESTIVAL",
      description: "El Xolas Day no és només un torneig, és la nostra gran festa. Un dia sencer dedicat a l'esport, la comunitat i, per descomptat, la gresca.",
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
    }
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
      subtitle: "Fútbol sala de barrio, amistad y mucha caña. Bienvenidas al universo Xolas.",
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
    gallery: {
      title: "GALERÍA",
      subtitle: "Momentos Xolas",
    },
    festival: {
      title: "XOLAS DAY: EL FESTIVAL",
      description: "El Xolas Day no es solo un torneo, es nuestra gran fiesta. Un día entero dedicado al deporte, la comunidad y, por supuesto, la juerga.",
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
    }
  }
};

export const playersData = [
  { 
    id: 1, 
    name: "La Capi", 
    number: "10", 
    position: "Cierre", 
    skill: "Visión de juego y liderazgo", 
    image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80&w=400",
    bio: "La que pone orden tanto en el campo como en el grupo de WhatsApp. Si hay que protestar un árbitro o decidir dónde se cena, ella es la voz.",
    hometown: "El Raval",
    stats: { matches: 45, goals: 12, assists: 30, beers: "Incalculables" }
  },
  { 
    id: 2, 
    name: "Muro", 
    number: "1", 
    position: "Portera", 
    skill: "Reflejos de gato", 
    image: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&q=80&w=400",
    bio: "Dicen que no ha dejado pasar ni una mosca desde 2019. Su grito de guerra asusta a las delanteras rivales antes de que lleguen al área.",
    hometown: "Poble Sec",
    stats: { matches: 42, saves: 156, cleanSheets: 18, injuries: 3 }
  },
  { 
    id: 3, 
    name: "Flecha", 
    number: "7", 
    position: "Ala", 
    skill: "Velocidad punta", 
    image: "https://images.unsplash.com/photo-1526232759583-02144e6743ef?auto=format&fit=crop&q=80&w=400",
    bio: "Si parpadeas, te la pierdes. Es capaz de cruzar la pista en 3 segundos y llegar a tiempo para pedir la penúltima en el bar.",
    hometown: "Gràcia",
    stats: { matches: 38, goals: 25, sprints: 450, yellowCards: 2 }
  },
  { 
    id: 4, 
    name: "Tanque", 
    number: "9", 
    position: "Pívot", 
    skill: "Potencia de disparo", 
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=400",
    bio: "No la mueves ni con una grúa. Protege el balón como si fuera su tesoro y tiene un disparo que dobla las manos de las porteras.",
    hometown: "Sants",
    stats: { matches: 40, goals: 32, strength: 99, goalsPerMatch: 0.8 }
  },
  { 
    id: 5, 
    name: "Magia", 
    number: "8", 
    position: "Ala", 
    skill: "Regate imposible", 
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=400",
    bio: "Hace desaparecer el balón y aparecerlo en la escuadra. Es la alegría del vestuario y la pesadilla de las defensas cerradas.",
    hometown: "Sant Antoni",
    stats: { matches: 35, nutmegs: 88, assists: 22, danceMoves: "Top Tier" }
  },
  { 
    id: 6, 
    name: "Roca", 
    number: "4", 
    position: "Cierre", 
    skill: "Infranqueable", 
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=400",
    bio: "Silenciosa pero letal. No hace falta que corra mucho porque siempre sabe dónde va a estar el balón antes que nadie.",
    hometown: "Barceloneta",
    stats: { matches: 44, interceptions: 210, headerGoals: 5, patience: 100 }
  },
  { 
    id: 7, 
    name: "Chispa", 
    number: "11", 
    position: "Ala", 
    skill: "Energía inagotable", 
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=400",
    bio: "Corre los 40 minutos como si acabara de tomarse tres cafés. Es la primera en presionar y la última en irse de la fiesta.",
    hometown: "Poblenou",
    stats: { matches: 39, distance: "120km", recoveries: 95, smiles: "Infinitas" }
  },
  { 
    id: 8, 
    name: "Killer", 
    number: "22", 
    position: "Pívot", 
    skill: "Olfato goleador", 
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=400",
    bio: "Solo necesita medio metro para marcar. No le preguntes cómo lo hace, ella simplemente está ahí en el momento justo.",
    hometown: "Horta",
    stats: { matches: 30, goals: 28, hatTricks: 4, luck: 85 }
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1526232759583-02144e6743ef?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800",
];
