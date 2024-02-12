export const interestPoints = [
  {
    id: 1,
    img: "https://www.semana.com/resizer/wQ4F8cSwlYYL-sZNWh9UQJDKdFI=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/P3NAEEX3GRFABP3RD2WWPY4QM4.jpg",
    name: "Museo del Arte de Pereira",
    value: "Museo del Arte de Pereira",
    lat: 4.804359937903271,
    lng: -75.69598400619088,
    description:
      "El Museo del Arte de Pereira es un museo de arte en Pereira, Colombia. Fue fundado en 1978 y es uno de los museos más importantes de la región del Eje Cafetero.",
    category: "Cultural",
    icon: "museum",
  },
  {
    id: 2,
    img: "https://www.eldiario.com.co/wp-content/uploads/2019/05/lucy-tejada.jpg",
    name: "Centro Cultural Lucy Tejada",
    value: "Centro Cultural Lucy Tejada",
    description:
      "El Centro Cultural Lucy Tejada es un centro cultural en Pereira, Colombia. Fue fundado en 1986 y es uno de los centros culturales más importantes de la región del Eje Cafetero.",
    lat: 4.81222838476927,
    lng: -75.69230642700612,
    category: "Cultural",
    icon: "museum",
  },
  {
    id: 3,
    img: "https://cdn0.matrimonio.com.co/vendor/5418/3_2/960/jpg/fachada-01_10_95418.jpeg",
    name: "Gran Hotel Pereira",
    value: "Gran Hotel Pereira",
    description:
      "El Gran Hotel Pereira es un hotel en Pereira, Colombia. Fue fundado en 1948 y es uno de los hoteles más importantes de la región del Eje Cafetero.",
    lat: 4.8129400485754985,
    lng: -75.69449216948566,
    category: "Hotel",
    icon: "hotel",
  },
  {
    id: 4,
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/ac/e5/61/salon-principal.jpg?w=1200&h=-1&s=1",
    name: "Restaurante El Rancherito",
    value: "Restaurante El Rancherito",
    description:
      "El Restaurante El Rancherito es un restaurante en Pereira, Colombia. Fue fundado en 1986 y es uno de los restaurantes más importantes de la región del Eje Cafetero.",
    lat: 4.81174919109182,
    lng: -75.69866555246281,
    category: "Restaurant",
    icon: "restaurant",
  },
];

export const features = [
  {
    type: "Feature",
    properties: {
      id: 1,
      description:
        "El Museo del Arte de Pereira es un museo de arte en Pereira, Colombia. Fue fundado en 1978 y es uno de los museos más importantes de la región del Eje Cafetero.",
      icon: "museum",
    },
    geometry: {
      type: "Point",
      coordinates: [-75.69598400619088, 4.804359937903271],
    },
  },
  {
    type: "Feature",
    properties: {
      id: 2,
      description:
        "El Centro Cultural Lucy Tejada es un centro cultural en Pereira, Colombia. Fue fundado en 1986 y es uno de los centros culturales más importantes de la región del Eje Cafetero.",
      icon: "museum",
    },
    geometry: {
      type: "Point",
      coordinates: [-75.69230642700612, 4.81222838476927],
    },
  },
  {
    type: "Feature",
    properties: {
      id: 3,
      description:
        "El Gran Hotel Pereira es un hotel en Pereira, Colombia. Fue fundado en 1948 y es uno de los hoteles más importantes de la región del Eje Cafetero.",
      icon: "lodging",
    },
    geometry: {
      type: "Point",
      coordinates: [-75.69449216948566, 4.8129400485754985],
    },
  },
  {
    type: "Feature",
    properties: {
      id: 4,
      description:
        "El Restaurante El Rancherito es un restaurante en Pereira, Colombia. Fue fundado en 1986 y es uno de los restaurantes más importantes de la región del Eje Cafetero.",
      icon: "restaurant",
    },
    geometry: {
      type: "Point",
      coordinates: [-75.69866555246281, 4.81174919109182],
    },
  },
];
