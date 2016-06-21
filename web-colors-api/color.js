var request = require ("request");

request("https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json", function (error, response, body) {
    if (!error && response.statusCode === 200) {
        //console.log(JSON.parse(body)); // Show the HTML for the webcolors homepage.
        var arrayOfColors = JSON.parse(body);
        //Loop through the array of colors and search the name in the array and print out the name and the r g b
        for (var color of arrayOfColors) {
           //console.log(color.name)
           if (color.name.toLowerCase() === process.argv[2].toLowerCase()) {
               console.log(process.argv[2] + " " + color.rgb.r + " " + color.rgb.g + " " + color.rgb.b)
           }
        }
    }

});
