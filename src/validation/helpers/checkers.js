export const isName = (name) => {
  const isValid = (typeof name === 'string' && name.length > 0 && name.length <= 50);
  return isValid;
};

export const isDescription = (description) => {
  const isValid = (
    typeof description === 'string' && description.length > 0 && description.length <= 255
  );
  return isValid;
};

export const isDate = (date) => !!new Date(date).getDate();

export const isBoolean = (bool) => {
  const isBool = ((bool === 'false' || bool === 'true') || !bool);
  return isBool;
};
