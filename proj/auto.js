var express = require ('express');
var path = require ('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var rp = require('request-promise');
var nodemailer = require('nodemailer');
var app = express();
var Crawler = require("crawler");
var port = 6111;


var c = new Crawler({
    maxConnections : 500,
    // This will be called for each crawled page
    rateLimit: 100,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
// specs details code here /////////////////////////////////////////////////////////////
var name = $('h1').each(function(){
$(this).html($(this).html().split(" Specifications").join(""));
});
var car = name.text();
var image = $('meta[name=image_src]').attr("content");
//////////////////////////// specs start //////////////////////////////////////////////

//dimensions section//////////
var dimensions = $('.mb40').eq(0).find('table');
var bootSpace = dimensions.find('td:contains("Boot Space") + td').text();
var groundClearance = dimensions.find('td:contains("Ground Clearance") + td').text();
var kerbWeight = dimensions.find('td:contains("Kerb Weight") + td').text();
var noDoors = dimensions.find('td:contains("No of Doors") + td').text();
var overallHeight = dimensions.find('td:contains("Overall Height") + td').text();
var overallLength = dimensions.find('td:contains("Overall Length") + td').text();
var overallWidth = dimensions.find('td:contains("Overall Width") + td').text();
var wheelBase = dimensions.find('td:contains("Wheel Base") + td').text();
//engine section/////////////
var engine = $('.mb40').eq(5).find('table');
var cylinderConfiguration = engine.find('td:contains("Cylinder Configuration") + td').text();
var displacement = engine.find('td:contains("Displacement") + td').text();
var enginePower = engine.find('td:contains("Engine Power") + td').text();
var fuelSystem = engine.find('td:contains("Fuel System") + td').text();
var fuelType = engine.find('td:contains("Fuel Type") + td').text();
var noCylinders = engine.find('td:contains("No of Cylinders") + td').text();
var torque = engine.find('td:contains("Torque") + td').text();
var valveMechanism = engine.find('td:contains("Valve Mechanism") + td').text();
var valvesCylinder = engine.find('td:contains("Valves per Cylinder") + td').text();
var compressionRatio = engine.find('td:contains("Compression Ratio") + td').text();
//Steering ////////////////
var steering = $('.mb40').eq(1).find('table');
var turningRadius = steering.find('td:contains("Minimum Turning Radius") + td').text();
var steeringType  = steering.find('td:contains("Steering Type") + td').text();
var powerAssisted = steering.find('td:contains("Power Assisted") + td').text();
//Fuel Economy ////////////
var fuelEconomy = $('.mb40').eq(2).find('table');
var mileageCity = fuelEconomy.find('td:contains("Mileage City") + td').text();
var mileageHighway = fuelEconomy.find('td:contains("Mileage Highway") + td').text();
//Transmission ////////////
var transmission = $('.mb40').eq(3).find('table');
var gearbox = transmission.find('td:contains("Gearbox") + td').text();
var transmissionType = transmission.find('td:contains("Transmission Type") + td').text();
//Performance /////////////
 var performance = $('.mb40').eq(4).find('table');
var topSpeed = performance.find('td:contains("Top Speed") + td').text();
//Capacities /////////////
var capacities = $('.mb40').eq(7).find('table');
var fuelCapacity = capacities.find('td:contains("Fuel Tank Capacity") + td').text();
var seatingCapacity = capacities.find('td:contains("Seating Capacity") + td').text();
//Wheels and Tyres ///////
var wheels = $('.mb40').eq(6).find('table');
var tyres = wheels.find('td:contains("Tyres") + td').text();
var wheelSize = wheels.find('td:contains("Wheel Size") + td').text();
var PCD = wheels.find('td:contains("PCD") + td').text();
var wheelType = wheels.find('td:contains("Wheel Type") + td').text();
//Suspension /////////////
var suspension = $('.mb40').eq(8).find('table');
var Suspensions = suspension.find('td:contains("Suspension") + td').text();
// Brakes ////////////////
var brakes = $('.mb40').eq(9).find('table');
var brake = suspension.find('td:contains("Brakes") + td').text();

////////////////////////////// specs end ///////////////////////////////////////////////
var specsTable = '<div class="row version-specifications" itemscope="" itemtype="https://schema.org/Vehicle">   <div class="col-md-6">  <div class="firstTable">   <h2 class="mb10">Dimensions and Weights</h2>   <table class="table table-striped table-bordered">  <tbody>    <tr> <td>Boot Space</td>    <td>'+bootSpace+'</td>   </tr>   <tr>    <td>Ground Clearance</td>   <td>'+groundClearance+'</td>    </tr>    <tr>  <td>Kerb Weight</td>  <td>'+kerbWeight+'</td> </tr>    <tr>     <td>No of Doors</td>   <td itemprop="numberOfDoors">'+noDoors+'</td>  </tr>   <tr>   <td>Overall Height</td>    <td itemprop="height">'+overallHeight+'</td> </tr> <tr>   <td>Overall Length</td>     <td>'+overallLength+'</td>   </tr>   <tr>  <td>Overall Width</td>  <td itemprop="width">'+overallWidth+'</td>   </tr>  <tr itemscope="" itemtype="https://auto.schema.org/"> <td>Wheel Base</td>   <td itemprop="wheelbase">'+wheelBase+'</td>  </tr>    </tbody>          </table>  </div>  <div class="secondTable">  <h2 class="mb10">Engine</h2>   <table class="table table-striped table-bordered">   <tbody>    <tr>     <td>Cylinder Configuration</td>   <td>'+cylinderConfiguration+'</td>   </tr>    <tr>     <td>Displacement</td>  <td>'+displacement+'</td>    </tr>  <tr>   <td>Engine Power</td>     <td itemprop="vehicleEngine">'+enginePower+'</td>    </tr>   <tr>   <td>Fuel System</td>   <td>'+fuelSystem+'</td>  </tr>  <tr>     <td>Fuel Type</td>        <td itemprop="fuelType">'+fuelType+'</td>    </tr>   <tr>      <td>No of Cylinders</td>     <td>'+noCylinders+'</td>   </tr> <tr>     <td>Torque</td>    <td>'+torque+'</td>    </tr>    <tr>   <td>Valve Mechanism</td> <td>'+valveMechanism+'</td>     </tr>   <tr>  <td>Valves per Cylinder</td>  <td>'+valvesCylinder+'</td>    </tr>   <tr>  <td>Compression Ratio</td>  <td>'+compressionRatio+'</td>  </tr>    </tbody>          </table>  </div> <div class="thirdTable">    <h2 class="mb10">Fuel Economy</h2>  <table class="table table-striped table-bordered">   <tbody>     <tr>    <td>Mileage City</td>  <td itemprop="fuelConsumption">'+mileageCity+'</td>  </tr>    <tr>  <td>Mileage Highway</td>                <td itemprop="fuelConsumption">'+mileageHighway+'</td> </tr>    </tbody>   </table>  </div>        <div class="fourthTable">   <h2 class="mb10">Transmission</h2>   <table class="table table-striped table-bordered"><tbody>  <tr>  <td>Gearbox </td>   <td itemprop="speed">'+gearbox+'</td>  </tr>  <tr> <td>Transmission Type</td>  <td>   <strong itemprop="vehicleTransmission">'+transmissionType+'</strong>   </td>  </tr>   </tbody>   </table>   </div>        <div class="fifthTable">   <h2 class="mb10">Performance</h2>   <table class="table table-striped table-bordered">   <tbody>   <tr itemscope="" itemtype="http://schema.org/speed">   <td>Top Speed </td>    <td itemprop="maxValue">'+topSpeed+'</td> </tr>            </tbody>          </table>        </div>   </div>  <div class="col-md-7">       <div class="sixthTable">    <h2 class="mb10">Steering</h2>  <table class="table table-striped table-bordered"> <tbody>   <tr>   <td>Minimum Turning Radius</td>   </tr>    <tr>    <td>Steering Type</td>   <td>'+steeringType+'</td>   </tr>   <tr>   <td>Power Assisted</td>   <td>'+powerAssisted+'</td>  </tr>     </tbody></table>   </div>   <div class="seventhTable">    <h2 class="mb10">Wheels and Tyres</h2>  <table class="table table-striped table-bordered">  <tbody>      <tr>    <td>Tyres</td>    <td>'+tyres+'</td>   </tr>   <tr>  <td>Wheel Size </td>   <td>'+wheelSize+'</td>  </tr>  <tr>  <td>PCD </td>    <td>'+PCD+'</td> </tr><tr>  <td>Wheel Type </td>  <td>'+wheelType+'</td> </tr> </tbody> </table>  </div> <div class="eighthTable">   <h2 class="mb10">Capacities</h2> <table class="table table-striped table-bordered"> <tbody> <tr>   <td>Fuel Tank Capacity</td>    <td itemprop="fuelCapacity">'+fuelCapacity+'</td></tr>   <tr>   <td>Seating Capacity</td>   <td itemprop="seatingCapacity">'+seatingCapacity+'</td>   </tr>   </tbody>   </table>   </div> <div class="ninthTable">  <h2 class="mb10">Suspension</h2>   <table class="table table-striped table-bordered">  <tbody> <tr> <td>Suspension </td>   <td>'+Suspensions+'</td> </tr></tbody>  </table>        </div>  <div class="tenthTable">   <h2 class="mb10">Brakes</h2><table class="table table-striped table-bordered"><tbody><tr><td>Brakes </td><td>'+brake+'</td></tr></tbody></table></div></div></div>';
// second page code start here//////////////////////////////////////////////////////////
var options = {
    uri: 'https://www.pakwheels.com/new-cars/suzuki/cultus/auto-gear-shift-vxl/',
    transform: function (body) {
        return cheerio.load(body);
    }
};
rp(options)
    .then(function ($) {
        // write all code here ////////////////////////////////////////////////////////////
       var price =  $('body').find('.fs22').text();
 ////////////////////////// final table start here ////////////////////////////////////////

////////////////////////// final table end here ////////////////////////////////////////

//email sending code start here ///////////////////////////////////////////////////////////
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maher786afrasiab786@gmail.com',
    pass: 'mahar7865'
  }
});

var mailOptions = {
  from: 'maherafrasiab786@gmail.com',
  to: 'maherafrasiab786.0808@blogger.com',
  subject: car,
  html: '<h3 style="text-align:center">pkr '+price+'</h3><div class="photo-car"><img src="cid:carphoto"></div>' +specsTable,
  attachments: [
 {   // use URL as an attachment
            filename: 'photo.jpg',
            path: image,
            cid:'carphoto'
        }
  ]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


 })
    .catch(function (err) {
        // Crawling failed or Cheerio choked...
    });
        }
        done();
    }
});
 
// Queue a list of URLs
// Queue URLs with custom callbacks & parameters
c.queue(['https://www.pakwheels.com/new-cars/suzuki/cultus/auto-gear-shift-vxl/']);
console.log('server is listening on'+port);
