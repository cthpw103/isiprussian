var oReq = new XMLHttpRequest();
var database;
oReq.open("GET", "database", true);
oReq.onload = function(e) {
   database = oReq.responseText; 
}
oReq.send();
var lines = database.split('\n');
var ip = "a russian ip";
var withcheese = '';
var russian = false;
for(var i = 0;i < lines.length;i++){
    withcheese = lines[i].split(',')
    if (withcheese[1].split('.')[1].toString() = ip.split('.')[1]) {
       russian = true;
    } else if (withcheese[1].split('.')[2].toString() = ip.split('.')[2]) {
       russian = true;
    }
}
return russian;
