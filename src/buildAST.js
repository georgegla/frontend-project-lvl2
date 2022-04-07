import _ from 'lodash';

const buildAST = (object1, object2) => _.sortBy(_.union(_.keys(object1), _.keys(object2)))
  .map((key) => {
    if (!_.has(object1, key)) {
      return { key, value: object2[key], type: 'added' };
    }

    if (!_.has(object2, key)) {
      return { key, value: object1[key], type: 'removed' };
    }

    const value1 = object1[key];
    const value2 = object2[key];

    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return { key, children: buildAST(value1, value2), type: 'nested' };
    }

    if (_.isEqual(value1, value2)) {
      return { key, value: value1, type: 'unchanged' };
    }
    return {
      key, oldValue: value1, newValue: value2, type: 'changed',
    };
  });
export default buildAST;
