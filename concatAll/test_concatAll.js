const concatAll = require('./concatAll');
const tree = require('../mock/data_tree');

const flatTree = tree.concatAll();

console.log(flatTree);
