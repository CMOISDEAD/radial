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
}
