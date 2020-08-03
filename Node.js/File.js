const fs = require('fs');
fs.exists('HTTP-server.js', (exists) => {
    if(exists){
        // defalt: read file async
        // if want to be sync, use readFileSync()
        fs.readFile('HTTP-server.js', (err, content) => {
            if(err){
                console.log('Failed to read');
                return;
            }
            // content is a buffer
            // use .toString('utf-8') to convert to utf-8
            console.log(content.toString('utf-8'));
        });
    }else{
        console.log('HTTP-server.js does not exists!');
    }
});
