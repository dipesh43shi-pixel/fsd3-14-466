import http from 'http';
import { createReadStream } from 'fs';

const server = http.createServer((req, res) => {
    console.log("method:", req.method);

    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Products details</h1>");
    }

    else if (req.url === "/products" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });

        const stream = createReadStream("./data/products.json", {
            encoding: "utf-8"
        });

        stream.on("error", (err) => {
            res.statusCode = 500;
            res.end("Unable to read products file");
        });

        stream.pipe(res);
    }

    else {
        res.statusCode = 404;
        res.end("Not found");
    }
});

server.listen(4444, () => {
    console.log("prg10 is running at port 4444");
});