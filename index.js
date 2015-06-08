var fs = require('fs');
var postcss = require('postcss');

var css = fs.readFileSync('./src/style.css', 'utf8')

var options = {
    theme: 'pstyle',
    name: 'Project name'
};

var output = postcss()
    .process(css, {
        from: 'src/simple.css'
    })
    .css;

fs.writeFileSync('./style.css', output)
