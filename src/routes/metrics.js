import { Create, List, Set } from '../metric';

// @todo - Refactor this so its sensible
module.exports.create = (event, context, callback) => {
  Create.create(event, context, callback);
};

// @todo - Refactor this so its sensible
module.exports.list = (event, context, callback) => {
  List.list(event, context, callback);
};

// @todo - Refactor this so its sensible
module.exports.set = (event, context, callback) => {
  Set.set(event, context, callback);
};
