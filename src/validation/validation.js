const isValidName = (name) => {
  const isValid = (typeof name === 'string' && name.length > 0 && name.length <= 50);
  return isValid;
};

const isValidDescription = (description) => {
  const isValid = (
    typeof description === 'string' && description.length > 0 && description.length <= 255
  );
  return isValid;
};

const isValidDate = (date) => (!!new Date(date).getDate());

const isBoolean = (bool) => {
  const isBool = ((bool === 'false' || bool === 'true') || !bool);
  return isBool;
};

export default (body, method) => {
  const errs = [];
  switch (method) {
    case 'POST':
      if (!isValidName(body.name)) {
        errs.push('Name must be string and have at least 1 symbol and 50 max symbols');
      }
      if (!isValidDescription(body.description)) {
        errs.push('Description must be string and have at least 1 symbol and 255 max symbols');
      }
      if (!isBoolean(body.is_ready)) {
        errs.push('is_ready must be a boolean!');
      }
      if (!isValidDate(body.expires)) {
        errs.push('Expires must have a date!');
      }
      return errs;
    case 'PUT':
      if (!isValidName(body.name) && body.name) {
        errs.push('Name must be string and have at least 1 symbol and 50 max symbols');
      }
      if (!isValidDescription(body.description) && body.description) {
        errs.push('Description must be string and have at least 1 symbol and 255 max symbols');
      }
      if (!isBoolean(body.is_ready) && body.is_ready) {
        errs.push('is_ready must be a boolean!');
      }
      if (!isValidDate(body.expires) && body.expires) {
        errs.push('Expires must have a date!');
      }
      return errs;
    default:
      return errs;
  }
};
