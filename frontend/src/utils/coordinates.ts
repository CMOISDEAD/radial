export const getCurrentPosition = async () => {
  return navigator.geolocation.getCurrentPosition(
    (position) => {
      return {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    },
    (error) => {
      console.error(error);
    },
  );
};
