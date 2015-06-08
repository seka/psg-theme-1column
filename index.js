var fs = require('fs');
var postcss = require('postcss');
var styleGuide = require('postcss-style-guide');

var css = fs.readFileSync('./src/style.css', 'utf8')

var options = {
    theme: "pstyle",
    name: "Project name"
};

var output = postcss()
    .use(styleGuide(options))
    .process(css)
    .css;

fs.writeFileSync('./style.css', output)
