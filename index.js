var express = require('express');
var app = express();
var fs = require("fs");
var cors = require('cors')
app.use(cors())
 
var bodyParser = require('body-parser');



var multer  = require('multer');
var storage = multer.diskStorage({
  // destination: function (req, file, cb) {
  //   cb(null, 'tmp/image')
  // },
  destination:'tmp/image',// 设置存储路径
  filename: function (req, file, cb) {
    // 设置存储文件名
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })
 
app.use(express.static('public'));
app.use(express.static('tmp'));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({ dest: '/tmp/'}).array('image'));
 
app.get('/',function(req,res){
  res.send('hello')
})
 
app.post('/upload',upload.array('img',12), function (req, res) {
 
    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
        
        res.json({
          message:'File uploaded successfully', 
          filename:req.files[0].originalname,
          src:'http://127.0.0.1:3000/image/'+req.files[0].originalname
        })

    });
   // res.json({src:'qq'})
})
 
var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})