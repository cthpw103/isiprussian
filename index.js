const http = require("http")
const ip = "89.250.165.81"; // example russian IP
// 89.20.165.81 works to test for non-russian IP.

let options = { // http request options
   host: 'ip-api.com',
   path: `/json/${ip}`
};

callback = function(response) {
   let str = '';
   // a chunk of data has been received, so append it to `str`
   response.on('data', function (chunk) {
      str += chunk;
   });
 
   // the whole response has been received, so we handle the result
   response.on('end', function () {
      let country = JSON.parse(str).country;
      if (country == "Russia") console.log(`Russian hacker detected at IP address ${ip}`)
      else console.log(`Network is safe, IP origin is ${country}`)
   });
}
 
http.request(options, callback).end();
