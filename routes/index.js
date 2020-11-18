var express = require('express');
var router = express.Router();





/* GET home page. */
router.get('/', function(req, res, next) {

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  //console.log(dateTime)

  res.render('index', { title: 'Time & Attendance' ,
    time:dateTime
});




});

router.post("/subscribe", function(req, res, next) {
  const { name, email } = req.body;

  // 1. Validate the user data
 



  // 2. Subscribe the user to the mailing list
  // 3. Send a confirmation email

  res.render("subscribe", {
    title: "You are subscribed",
    name,
    email
  });
});



router.post("/submit", function(req, res, next) {

  // 1. Validate the user data
  let ip =req.connection.remoteAddress;
  console.log("User Ip -"+req.ip)//console.log(ip)
  console.log("Name"+req.body.empname)
  console.log("Number"+req.body.empnbr)
  console.log(req.headers.host)


  // 2. Subscribe the user to the mailing list
  // 3. Send a confirmation email



  res.render("submit", {
    empname:req.body.empname,
    empnbr:req.body.empnbr
  });
});







module.exports = router;
