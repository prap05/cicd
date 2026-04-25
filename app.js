const http = require("http");

http.createServer((req, res) => {
    res.write("CI/CD Pipeline Working !!");
    res.end();
}).listen(3000);