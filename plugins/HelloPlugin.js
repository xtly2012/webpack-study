class HelloPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    console.log("compiler value", compiler);
    compiler.plugin("compilation", function(compilation) {
      console.log("Assets are being optimized");
    });
  
    compiler.plugin('done', function(stats) {
      console.log('compile done !');
    });
  }
}

module.exports = HelloPlugin;