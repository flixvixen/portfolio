import { createServer } from "http";
import { readFile } from "fs";
import { join } from "path";

const PORT = 3000;

const server = createServer((req, res) => {
    let filePath = join(__dirname, "public", "index.html");
    readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain"});
            res.end("Server Error");
        } else {
            res.writeHead(200, { "Content-Type": "texthtml"});
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});