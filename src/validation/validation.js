import errMessages from './helpers/messages.js';
import {
  isBoolean, isName, isDescription, isDate,
} from './helpers/checkers.js';

export default (body, method) => {
  const errs = [];
  switch (method) {
    case 'POST':
      if (!isName(body.name)) {
        errs.push(errMessages.name);
      }
      if (!isDescription(body.description)) {
        errs.push(errMessages.description);
      }
      if (!isBoolean(body.is_ready)) {
        errs.push(errMessages.is_ready);
      }
      if (!isDate(body.expires)) {
        errs.push(errMessages.expires);
      }
      return errs;
    case 'PUT':
      if (!isName(body.name) && body.name) {
        errs.push(errMessages.name);
      }
      if (!isDescription(body.description) && body.description) {
        errs.push(errMessages.description);
      }
      if (!isBoolean(body.is_ready) && body.is_ready) {
        errs.push(errMessages.is_ready);
      }
      if (!isDate(body.expires) && body.expires) {
        errs.push(errMessages.expires);
      }
      return errs;
    default:
      return errs;
  }
};
