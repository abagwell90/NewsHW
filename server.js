var express = require("express");
var path = require("path");
// var apiRoutes = require("./app/routing/apiRoutes");
var bodyParser = require('body-parser');
var scraper = require("./models/scraper");
var exphbs  = require('express-handlebars');
// could not get mondoDB or Mongoose to work correctly

const app = express();
var port = process.env.PORT || 8050;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


// apiRoutes(app);

 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {

    scraper.getArticle()
        .then((articles)=>{
            res.render('home' ,{title: "Cool Dev News", articles: articles});
            
        });

   
});
 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))