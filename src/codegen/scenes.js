// @codegen
const glob = require('glob');
const files = glob.sync('./src/data/scenes/**/*.js');

module.exports = files.map(filepath => {
  const module_name = filepath.split('/').pop().split('.')[0];
  return `export ${module_name} from 'data/scenes/${module_name}'`;
}).join('\n');
