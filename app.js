const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.url;

    if (url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<header><title>Node Server</title></header>')
        res.write('<body>');
        res.write('<h1>Hello from my Node JS Server!</h1>')
        res.write('<form action="/create-user" method="post"><label for="username">Username:</label><input type="text" name="username"><button type="submit">Submit</button></form>');
        res.write('</html>');
        res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<header><title>Users</title></header>')
        res.write('<body><ul><li>User 1</li> <li>User 1</li> <li>User 2</li></ul></body>')
        res.write('</html>');
        res.end();
    }
    if(url === '/create-user'){
        const body = [];
        req.on('data', (chunk) =>{
            body.push(chunk);
        });

        req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.statusCode = '302';
            res.setHeader('Location', '/')
            res.end();
        })
    
    }
});

server.listen(3000);

