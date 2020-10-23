const http = require("http")
const ip = "89.250.165.81"; // example russian ip

let options = {
   host: 'ip-api.com',
   path: `/json/${ip}`
};

callback = function(response) {
   var str = '';
 
   // another chunk of data has been received, so append it to `str`
   response.on('data', function (chunk) {
      str += chunk;
   });
 
   // the whole response has been received, so we just print it out here
   response.on('end', function () {
      if (JSON.parse(str).country == "Russia") console.log("Russian hacker detected")
      else console.log("Network is safe")
   });
}
 
http.request(options, callback).end();
