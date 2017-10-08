var lines = database.split('\n');
var ip = "8.8.8.8";
var withcheese = '';
for(var i = 0;i < lines.length;i++){
    withcheese = lines[i].split(',')
    for(var e = 0;e < withcheese.length;i++){
        //help
        if (withcheese[e].split('.')[1] = ip.split('.')[1]) {
            alert("probably russian");
            if (withcheese[e].split('.')[2] = ip.split('.')[2]) {
                alert("is russian :)");
            }
        }
    }
}
