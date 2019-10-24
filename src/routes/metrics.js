import { Create, List, Set } from '../metric';

// @todo - Refactor this so its sensible
export const create = (event, context, callback) => {
  Create(event, context, callback);
};

// @todo - Refactor this so its sensible
export const list = (event, context, callback) => {
  List(event, context, callback);
};

// @todo - Refactor this so its sensible
export const set = (event, context, callback) => {
  Set(event, context, callback);
};
