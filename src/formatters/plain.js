import _ from 'lodash';

const stringify = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }
  if (_.isString(data)) {
    return `'${data}'`;
  }
  return data;
};

const format = (path, node) => {
  const {
    value, type, oldValue, newValue,
  } = node;

  const addedType = () => `Property '${path}' was added with value: ${stringify(value)}`;
  const removedType = () => `Property '${path}' was removed`;
  const changedType = () => `Property '${path}' was updated. From ${stringify(oldValue)} to ${stringify(newValue)}`;

  const renders = {
    added: addedType,
    removed: removedType,
    changed: changedType,
  };

  if (!_.has(renders, type)) {
    throw new Error(`Type '${type}' is undefined`);
  }
  return renders[type]();
};

const build = (astTree) => {
  const iter = (innerAst, path) => {
    const result = innerAst
      .filter((node) => node.type !== 'unchanged')
      .map((node) => {
        const currentPath = [...path, node.key];
        if (node.type === 'nested') {
          return (iter(node.children, currentPath));
        }

        return format(currentPath.join('.'), node);
      });

    return result.join('\n');
  };
  return iter(astTree, []);
};

export default (astTree) => build(astTree);
