var oReq = new XMLHttpRequest();
var database;
oReq.open("GET", "database", true);
oReq.onload = function(e) {
   database = oReq.responseText; 
}
oReq.send();
var lines = database.split('\n');
var ip = "8.8.8.8";
var withcheese = '';
for(var i = 0;i < lines.length;i++){
    withcheese = lines[i].split(',')
    for(var e = 0;e < withcheese.length;e++){
        //help
        if (withcheese[1].split('.')[e] = ip.split('.')[1]) {
            if (withcheese[2].split('.')[e] = ip.split('.')[2]) {
                alert("is russian");
            }
        }
    }
}
