import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 5001;

const app = express();
app.use(compression());
app.use(express.static('dist'));


app.get('/', function(req, res){
res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res){
res.json([
{"id":1, "firstName":"kamal", "lastName":"pandey", "email":"xyz@konfinity.com" },
{"id":2, "firstName": "agent", "lastName":"smith", "email":"new@matrix.com"},
{"id":3, "firstName":"good", "lastName":"god", "email":"heaven@god.com"}
]);
});

app.listen(port, function(err){
    if(err){
        /* eslint-disable no-console*/
console.log(err);
    }
else{
open('http://localhost:'+port);
}
});
