export const validateName = (name: string) => {
  const alphabaticText = /^[a-zA-Z]+$/;
  return !(alphabaticText.test(name) || name === '');
};

export const validateEmail = (email: string) => {
  const emailRule = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return !(emailRule.test(email) || email === '');
};

export const validatePhone = (phone: string) => {
  const phoneRule = /^0\d{9}$/;
  return !(phoneRule.test(phone) || phone === '');
};
