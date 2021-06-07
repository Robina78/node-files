const fs = require('fs');
const process = require('process');
const axios = require('axios');

// Read File
function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if(err) {
            console.log(`Error reading ${path}: ${err}`);
            process.exit(1);
        } else {
            console.log("DATA ...", data)
        }   
       
    });
}

// Read URL
async function webCat(url) {
    try {
        const res = await axios.get(url);
        console.log(res.data);
    } catch (err) {
        console.log(`Error fetching ${URL} : ${err}`);
        process.exit(1);
    }
}


let path = process.argv[2];

if (path.slice(0,4) === 'http') {
    webCat(path);
} else {
    cat(path);
}