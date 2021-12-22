var http = require('http');
const homeworkJson = {
    nama : 'Almujab Sidik',
    kota : 'Papua',
    skill : ['WordPress', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap']
}


const jsonContent = JSON.stringify(homeworkJson)

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(jsonContent);
}).listen(3000, 'localhost', function(){
    console.info('server is listening at port 3000')
});

// Start with node app