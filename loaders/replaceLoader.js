const loaderUtils = require('loader-utils');
module.exports = function (source) {
  debugger
  const options = loaderUtils.getOptions(this);
  const { value } = options;
  console.log('options value', options);
  const result = source.replace("{{ __path__ }}", JSON.stringify(value));
  console.log('result value', result);
  this.callback(null, result);
}