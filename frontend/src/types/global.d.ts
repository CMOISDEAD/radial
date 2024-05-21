export { };

declare global {
  interface Point {
    id?: number; // FIX: id should be required
    name: string;
    description: string;
    img: string;
    lat: number;
    lng: number;
  }

  interface Feature {
    type: string;
    properties: {
      id: number;
      description: string;
      icon: string;
    };
    geometry: {
      type: string;
      coordinates: number[];
    };
  }

  interface IUser {
    name: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
  }
}
