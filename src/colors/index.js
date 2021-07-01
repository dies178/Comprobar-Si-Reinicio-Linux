//modulo
const colors = require("colors");

colors.setTheme({
comprobar:"green",
no_reinciar:"blue",
reinciar:"red"
});

const console_colors = (message, color) => console.log( eval( `colors.${color}(message)` ) );

module.exports = {"colors": console_colors};