function luminosity (r, g, b) {
   return process.argv[2]*0.2126 + process.argv[3]*0.7152 + process.argv[4]*0.0722;
}

function darken (r, g, b) {
   return ((process.argv[2]*0.8).toFixed(1) + " " + (process.argv[3]*0.8).toFixed(1) + " " + (process.argv[4]*0.8).toFixed(1));
}

module.exports = {
   luminosity : luminosity,
   darken : darken
};
