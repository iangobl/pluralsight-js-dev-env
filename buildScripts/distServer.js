import express from 'express';
import path from 'path';
import open from 'open';
import chalk from 'chalk';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req,res){
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1, "firstName":"Joe", "lastName":"Bloggs", "email":"joe@fake.com"},
    {"id": 2, "firstName":"Richard", "lastName":"Manela", "email":"rich@fake.com"},
    {"id": 3, "firstName":"Ciara", "lastName":"Lee", "email":"ciara@fake.com"}
  ]);
});

app.listen(port, function(err){
  if(err){
    console.log(chalk.green(err));
  }
  else{
    open('http://localhost:' + port);
  }
})
