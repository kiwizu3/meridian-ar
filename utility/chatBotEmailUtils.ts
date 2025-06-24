export const generateUniqueId = () => '_' + Math.random().toString(36);
export const credentials = btoa(
  `${process.env.API_USERNAME}:${process.env.API_PASSWORD}`,
);
