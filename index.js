const fs = require("fs");

fs.writeFile( "19092022-1905.txt", "1663594521368", "utf-8", function(err) {
         if (err) throw err;
         console.log("File Created")
})

fs.readdir("../node_task1",function (err,files) {
      if (err) throw err;
      console.log(files);
})