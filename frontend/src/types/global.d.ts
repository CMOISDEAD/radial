export {};

declare global {
  interface Point {
    id: string;
    userId: string;
    name: string;
    description: string;
    comments: any[];
    images: string[];
    feature: Feature;
    numbers: string[];
    schedule: any[];
    checked: boolean;
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
      coordinates: [number, number];
    };
  }

  interface IUser {
    id: string;
    role: "ADMIN" | "USER";
    image: string | undefined;
    name: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
  }
}
