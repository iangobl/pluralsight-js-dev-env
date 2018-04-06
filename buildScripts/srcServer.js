import express from 'express';
import path from 'path';
import open from 'open';
import chalk from 'chalk';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req,res){
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1, "firstName":"Joe", "lastName":"Morris", "email":"joe@fake.com"},
    {"id": 2, "firstName":"Richard", "lastName":"Morris", "email":"rich@fake.com"},
    {"id": 3, "firstName":"Ciara", "lastName":"Morris", "email":"ciara@fake.com"}
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
