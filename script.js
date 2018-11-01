
// //toggle buttons
// window.myFunction = function(event) {
//   var elms = document.querySelectorAll('ul button');
//   // reset all you menu items
//   for (var i = 0, len = elms.length; i < len; i++) {
//     elms[i].classList.remove('active');
//   }
//   // mark as active clicked menu item
//   event.target.classList.add("active");
// };


// function changeText()
//         {
//             document.getElementById("box2").style.display="block";
//             document.getElementById("boxx2").style.display="none";
//         }
// function changeback()
//         {
//            document.getElementById("box2").style.display="none";
//            document.getElementById("boxx2").style.display="block";
//         }

// function changeText2()
//         {
//             document.getElementById("box1").style.display="block";
//             document.getElementById("boxx1").style.display="none";
//         }
// function changeback2()
//         {
//            document.getElementById("box1").style.display="none";
//            document.getElementById("boxx1").style.display="block";
//         }

// function todaySales(){
//  var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       var response = this.responseText;
//       response = JSON.parse(response);
//       var total =  parseFloat(response.sum.totalsales).toFixed(0);
//       console.log(total);
//       var average = parseFloat(response.avgsales.averagesales).toFixed(0);
//       console.log(average);
//       var totalpurchase = parseFloat(response.totalpur.totalpurchase).toFixed(0);
//       console.log(totalpurchase);
//       var averagepurchase = parseFloat(response.averagepur.averagepurchase).toFixed(0);
//       console.log(averagepurchase);
//       var ethicalsales = parseFloat(response.ethsales.ethicalsales).toFixed(0);
//       console.log(ethicalsales);
//       var genericsales = parseFloat(response.gensales.genericsales).toFixed(0);
//       console.log(genericsales);
//       var totalpercentage = parseFloat(response.totalper.totalpercentage).toFixed(2);
//       console.log(totalpercentage);
//       var averagepercentage = parseFloat(response.avgper.averagepercentage).toFixed(2);
//       console.log(averagepercentage);
     
//     // alert(total);

//    document.getElementById("tsales").innerHTML = total;
//    document.getElementById("asales").innerHTML = average;
//    document.getElementById("Totalpurbox").innerHTML = totalpurchase;
//    document.getElementById("Averagepurbox").innerHTML = averagepurchase;
//    document.getElementById("ethic").innerHTML = ethicalsales;
//    document.getElementById("generic").innerHTML = genericsales;
//    document.getElementById("totalpercentage").innerHTML = totalpercentage;
//    document.getElementById("averagepercentage").innerHTML = averagepercentage;

//    var paragraph = document.getElementById("totalpercentage");
// var text = document.createTextNode("%");

// paragraph.appendChild(text);

//     }
//   };

// var date = new Date();
//         var day =date.getDate();
//         day = (day < 10 ? '0' : '') + day;
//         var month=date.getMonth()+1;
//         var year=date.getFullYear();
//         StartDate = year+"-"+month+"-"+day;

//         EndDate = year+"-"+month+"-"+day;
//   xhttp.open("POST", "http://127.0.0.1:3000/getToday/"+StartDate+"/"+EndDate+"", true);
//   // console.log("http://127.0.0.1:3000/getToday/"+StartDate+"/"+EndDate+"");
//   //xhttp.setRequestHeader('Content-type', 'application/x-www-form-url-encoded');
//   xhttp.send();
// }

// function yesterdaySales(){
//  var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       var response = this.responseText;
//       response = JSON.parse(response);
//       var total =  parseFloat(response.sum.totalsales).toFixed(0);
//       console.log(total);
//       var average = parseFloat(response.avgsales.averagesales).toFixed(0);
//       console.log(average);
//       var totalpurchase = parseFloat(response.totalpur.totalpurchase).toFixed(0);
//       console.log(totalpurchase);
//       var averagepurchase = parseFloat(response.averagepur.averagepurchase).toFixed(0);
//       console.log(averagepurchase);
//       var ethicalsales = parseFloat(response.ethsales.ethicalsales).toFixed(0);
//       console.log(ethicalsales);
//       var genericsales = parseFloat(response.gensales.genericsales).toFixed(0);
//       console.log(genericsales);
     
//     // alert(total);

//    document.getElementById("tsales").innerHTML = total;
//    document.getElementById("asales").innerHTML = average;
//    document.getElementById("Totalpurbox").innerHTML = totalpurchase;
//    document.getElementById("Averagepurbox").innerHTML = averagepurchase;
//    document.getElementById("ethic").innerHTML = ethicalsales;
//    document.getElementById("generic").innerHTML = genericsales;

//     var lineChart = {
//                                                 labels: ["Sep28"],
//                                                 datasets: [{
//                                                     label: "Total Sales",
//                                                     backgroundColor: 'rgba(114, 124, 245, 0.3)',
//                                                     borderColor: '#727cf5',
//                                                     data: [response]
//                                                 }, {
//                                                     label: "Generic Sales",
//                                                     fill: true,
//                                                     backgroundColor: 'transparent',
//                                                     borderColor: "#0acf97",
//                                                     borderDash: [5, 5],
//                                                     data: [response]
//                                                 }]
//                                             };

//                                             var lineOpts = {
//                                                 maintainAspectRatio: false,
//                                                 legend: {
//                                                     display: false
//                                                 },
//                                                 tooltips: {
//                                                     intersect: false
//                                                 },
//                                                 hover: {
//                                                     intersect: true
//                                                 },
//                                                 plugins: {
//                                                     filler: {
//                                                         propagate: false
//                                                     }
//                                                 },
//                                                 scales: {
//                                                     xAxes: [{
//                                                         reverse: true,
//                                                         gridLines: {
//                                                             color: "rgba(0,0,0,0.05)"
//                                                         }
//                                                     }],
//                                                     yAxes: [{
//                                                         ticks: {
//                                                             stepSize: 2000
//                                                         },
//                                                         display: true,
//                                                         borderDash: [5, 5],
//                                                         gridLines: {
//                                                             color: "rgba(0,0,0,0)",
//                                                             fontColor: '#fff'
//                                                         }
//                                                     }]
//                                                 }
//                                             };

//                                             respChart($("#line-chart-example3"), 'Line', lineChart, lineOpts);

//     }
//   };

// var days = "1";
// var date = new Date();
//         var thisday =date.getDate();
//         thisday = (thisday < 10 ? '0' : '') + thisday;
//         var thismonth=date.getMonth()+1;
//         var thisyear=date.getFullYear();
//         var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
//         var day =last.getDate();
//         day = (day < 10 ? '0' : '') + day;
//         var month=last.getMonth()+1;
//         var year=last.getFullYear();
//         var todaydate = thisyear+"-"+thismonth+"-"+thisday;
//         var StartDate = year+"-"+month+"-"+day;
//         console.log(StartDate);
//         var EndDate = year+"-"+month+"-"+day;
//         console.log(EndDate);
//   xhttp.open("POST", "http://127.0.0.1:3000/getToday/"+StartDate+"/"+EndDate+"", true);
//   // console.log("http://127.0.0.1:3000/getToday/"+StartDate+"/"+EndDate+"");
//   //xhttp.setRequestHeader('Content-type', 'application/x-www-form-url-encoded');
//   xhttp.send();
//  document.getElementById('chart1').style.display = "none";
//  document.getElementById('chart2').style.display = "block";
//  document.getElementById('chart3').style.display = "none";
// }

// function lastSevenDays(){
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       var response = this.responseText;
//       response = JSON.parse(response);
//       var total =  parseFloat(response.sum.totalsales).toFixed(0);
//       console.log(total);
//       var average = parseFloat(response.avgsales.averagesales).toFixed(0);
//       console.log(average);
//       var totalpurchase = parseFloat(response.totalpur.totalpurchase).toFixed(0);
//       console.log(totalpurchase);
//       var averagepurchase = parseFloat(response.averagepur.averagepurchase).toFixed(0);
//       console.log(averagepurchase);
//       var ethicalsales = parseFloat(response.ethsales.ethicalsales).toFixed(0);
//       console.log(ethicalsales);
//       var genericsales = parseFloat(response.gensales.genericsales).toFixed(0);
//       console.log(genericsales);
     
//     // alert(total);

//    document.getElementById("tsales").innerHTML = total;
//    document.getElementById("asales").innerHTML = average;
//    document.getElementById("Totalpurbox").innerHTML = totalpurchase;
//    document.getElementById("Averagepurbox").innerHTML = averagepurchase;
//    document.getElementById("ethic").innerHTML = ethicalsales;
//    document.getElementById("generic").innerHTML = genericsales;

//    // var days = "7"; // Days you want to subtract
//         var date = new Date();
//         var thisday =date.getDate();

//         thisday = (thisday < 10 ? '0' : '') + thisday;        
//         var thismonth=date.getMonth()+1;
//         var thisyear=date.getFullYear();
//         var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
//         var day =last.getDate();
//         day = (day < 10 ? '0' : '') + day;
//         var month=last.getMonth()+1;
//         var year=last.getFullYear();
//         var EndDate = thisyear+"-"+thismonth+"-"+thisday;
//         var StartDate = year+"-"+month+"-"+day;
//         console.log(EndDate);
//         console.log(StartDate);
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var label1 = days[date.getDay()];
// var label2 = days[date.getDay()+1];
// var label3 = days[date.getDay()+2];
// var label4 = days[date.getDay()+3];
// var label5 = days[date.getDay()+4];
// var label6 = days[date.getDay()+5];
// var label7 = days[date.getDay()-1];



//    var lineChart = {
//                                                 labels: [label1,label2,label3,label4,label5,label6,label7],
//                                                 datasets: [{
//                                                     label: "Total Sales",
//                                                     backgroundColor: 'rgba(114, 124, 245, 0.3)',
//                                                     borderColor: '#727cf5',
//                                                     data: [total,average,totalpurchase,ethicalsales,genericsales]
//                                                 }, {
//                                                     label: "Generic Sales",
//                                                     fill: true,
//                                                     backgroundColor: 'transparent',
//                                                     borderColor: "#0acf97",
//                                                     borderDash: [5, 5],
//                                                     data: [total,average,totalpurchase,ethicalsales,genericsales]
//                                                 }]
//                                             };

//                                             var lineOpts = {
//                                                 maintainAspectRatio: false,
//                                                 legend: {
//                                                     display: false
//                                                 },
//                                                 tooltips: {
//                                                     intersect: false
//                                                 },
//                                                 hover: {
//                                                     intersect: true
//                                                 },
//                                                 plugins: {
//                                                     filler: {
//                                                         propagate: false
//                                                     }
//                                                 },
//                                                 scales: {
//                                                     xAxes: [{
//                                                         reverse: true,
//                                                         gridLines: {
//                                                             color: "rgba(0,0,0,0.05)"
//                                                         }
//                                                     }],
//                                                     yAxes: [{
//                                                         ticks: {
//                                                             stepSize: 580000
//                                                         },
//                                                         display: true,
//                                                         borderDash: [5, 5],
//                                                         gridLines: {
//                                                             color: "rgba(0,0,0,0)",
//                                                             fontColor: '#fff'
//                                                         }
//                                                     }]
//                                                 }
//                                             };

//                                             respChart($("#line-chart-example4"), 'Line', lineChart, lineOpts);

//     }
//   };

// var days = "7"; // Days you want to subtract
//         var date = new Date();
//         var thisday =date.getDate();
//         thisday = (thisday < 10 ? '0' : '') + thisday;        
//         var thismonth=date.getMonth()+1;
//         var thisyear=date.getFullYear();
//         var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
//         var day =last.getDate();
//         day = (day < 10 ? '0' : '') + day;
//         var month=last.getMonth()+1;
//         var year=last.getFullYear();
//         var EndDate = thisyear+"-"+thismonth+"-"+thisday;
//         var StartDate = year+"-"+month+"-"+day;
//         console.log(EndDate);
//         console.log(StartDate);
//   xhttp.open("POST", "http://127.0.0.1:3000/getToday/"+StartDate+"/"+EndDate+"", true);
//   // console.log("http://127.0.0.1:3000/getToday/"+StartDate+"/"+EndDate+"");
//   //xhttp.setRequestHeader('Content-type', 'application/x-www-form-url-encoded');
//   xhttp.send();
//   document.getElementById("chart3").style.display = "block";
//   document.getElementById("chart1").style.display = "none";
//   document.getElementById("chart2").style.display = "none";
// }

// function wtdsales(){
//  var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       var response = this.responseText;
//       response = JSON.parse(response);
//       var total =  parseFloat(response.sum.totalsales).toFixed(2);
//       console.log(total);
//       var average = parseFloat(response.avgsales.averagesales).toFixed(2);
//       console.log(average);
//       var totalpurchase = parseFloat(response.totalpur.totalpurchase).toFixed(2);
//       console.log(totalpurchase);
//       var averagepurchase = parseFloat(response.averagepur.averagepurchase).toFixed(2);
//       console.log(averagepurchase);
//       var ethicalsales = parseFloat(response.ethsales.ethicalsales).toFixed(2);
//       console.log(ethicalsales);
//       var genericsales = parseFloat(response.gensales.genericsales).toFixed(2);
//       console.log(genericsales);
     
//     // alert(total);

//    document.getElementById("tsales").innerHTML = total;
//    document.getElementById("asales").innerHTML = average;
//    document.getElementById("Totalpurbox").innerHTML = totalpurchase;
//    document.getElementById("Averagepurbox").innerHTML = averagepurchase;
//    document.getElementById("ethic").innerHTML = ethicalsales;
//    document.getElementById("generic").innerHTML = genericsales;

//     }
//   };

// var days = "7"; // Days you want to subtract
//         var date = new Date();
//         var thisday =date.getDate();
//         thisday = (thisday < 10 ? '0' : '') + thisday;        
//         var thismonth=date.getMonth()+1;
//         var thisyear=date.getFullYear();
//         var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
//         var day =last.getDate();
//         day = (day < 10 ? '0' : '') + day;
//         var month=last.getMonth()+1;
//         var year=last.getFullYear();
//         var EndDate = thisyear+"-"+thismonth+"-"+thisday;
//         var d = new Date(d);
//         var day = d.getDay();
//         var StartDate = d.getDate() - date + (date == 0 ? -6:1);
//         console.log(EndDate);
//         console.log(StartDate);
//   xhttp.open("POST", "http://127.0.0.1:3000/getToday/"+StartDate+"/"+EndDate+"", true);
//   // console.log("http://127.0.0.1:3000/getToday/"+StartDate+"/"+EndDate+"");
//   //xhttp.setRequestHeader('Content-type', 'application/x-www-form-url-encoded');
//   xhttp.send();
//   return new Date(d.setDate(StartDate));
// }

// function lastThirtyDays(){
//    var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       var response = this.responseText;
//       response = JSON.parse(response);
//       var total =  response.sum.totalsales;
//       console.log(total);
//       var average = response.avgsales.averagesales;
//       console.log(average);
//       var totalpurchase = response.totalpur.totalpurchase;
//       console.log(totalpurchase);
//       var averagepurchase = response.averagepur.averagepurchase;
//       console.log(averagepurchase);
//       var ethicalsales = response.ethsales.ethicalsales;
//       console.log(ethicalsales);
//       var genericsales = response.gensales.genericsales;
//       console.log(genericsales);
     
//     // alert(total);

//    document.getElementById("tsales").innerHTML = total;
//    document.getElementById("asales").innerHTML = average;
//    document.getElementById("Totalpurbox").innerHTML = totalpurchase;
//    document.getElementById("Averagepurbox").innerHTML = averagepurchase;
//    document.getElementById("ethic").innerHTML = ethicalsales;
//    document.getElementById("generic").innerHTML = genericsales;

//     }
//   };

// var days = "30"; // Days you want to subtract
//         var date = new Date();
//         var thisday =date.getDate();
//         thisday = (thisday < 10 ? '0' : '') + thisday;
//         var thismonth=date.getMonth()+1;
//         var thisyear=date.getFullYear();
//         var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
//         var day =last.getDate();
//         day = (day < 10 ? '0' : '') + day;
//         var month=last.getMonth()+1;
//         var year=last.getFullYear();
//         var EndDate = thisyear+"-"+thismonth+"-"+thisday;
//         var StartDate = year+"-"+month+"-"+day;
//         console.log(EndDate);
//         console.log(StartDate);
//   xhttp.open("POST", "http://127.0.0.1:3000/getToday/"+StartDate+"/"+EndDate+"", true);
//   // console.log("http://127.0.0.1:3000/getToday/"+StartDate+"/"+EndDate+"");
//   //xhttp.setRequestHeader('Content-type', 'application/x-www-form-url-encoded');
//   xhttp.send();
// }


// function thirty(){
// 	var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//     	$("#today tr:gt(0)").remove();
//     	$("#today2 tr:gt(0)").remove();
//       //document.getElementById("today").innerHTML = this.responseText;
//       var response = this.responseText;
//       response = JSON.parse(response);
//       var totalsales =  response.sum.salessum;
//       var averagesales = response.avg.salesavg;
//       var genericsales = response.gen.gensales;
//       var genaverage = response.genavg.gensales;
//       var genper = response.gen.gen_percent;
//       //alert(response.results[0]);
//        var elements = ["date_s","bill-count", "sales-store-id" ,"sales-before-returns","sales-after-returns" ];

//     for (var i=0; i<response.results.length; i++){
//         var td;
//         var tr=document.createElement('tr');

//         for (var j=0; j < elements.length; ++j){
//             td = document.createElement('td');
//             td.innerHTML=response.results[i][elements[j]];
//             tr.appendChild(td);
//         }

//         $('#today').append(tr);
//         $('#tsales').text(85927.54);
//         $('#asales').text(1062257.13);
//         $('#gsales').text(1004914.29);
//         $('#per2').text(17.89);
//     }
//     for (var i=0; i<response.results.length; i++){
//         var td;
//         var tr=document.createElement('tr');

//         for (var j=0; j < elements.length; ++j){
//             td = document.createElement('td');
//             td.innerHTML=response.results[i][elements[j]];
//             tr.appendChild(td);
//         }

//         $('#today2').append(tr);
//         $('#tsales2').text(totalsales);
//         $('#asales2').text(averagesales);
//         $('#gsales2').text(genericsales);

		
//         // $("#today").css("display","block");
//     }
//     }
//   };
//   xhttp.open("POST", "http://127.0.0.1:3000/getSevenDays", true);
//   //xhttp.setRequestHeader('Content-type', 'application/x-www-form-url-encoded');
//   xhttp.send();
//   var lineChart = {
//                                                 labels: ["Sep20", "Sep25", "Sep30", "Oct5", "Oct10", "Oct15", "Oct20"],
//                                                 datasets: [{
//                                                     label: "Total Sales",
//                                                     backgroundColor: 'rgba(114, 124, 245, 0.3)',
//                                                     borderColor: '#727cf5',
//                                                     data: [5043.58,6919.03,1346.82,1938.49,5587.93,1502.30,195.50]
//                                                 }, {
//                                                     label: "Generic Sales",
//                                                     fill: true,
//                                                     backgroundColor: 'transparent',
//                                                     borderColor: "#0acf97",
//                                                     borderDash: [5, 5],
//                                                     data: [19118.86,13849.348,3698.89,2506.73,5384.886,5460.09,5132.33]
//                                                 }]
//                                             };

//                                             var lineOpts = {
//                                                 maintainAspectRatio: false,
//                                                 legend: {
//                                                     display: false
//                                                 },
//                                                 tooltips: {
//                                                     intersect: false
//                                                 },
//                                                 hover: {
//                                                     intersect: true
//                                                 },
//                                                 plugins: {
//                                                     filler: {
//                                                         propagate: false
//                                                     }
//                                                 },
//                                                 scales: {
//                                                     xAxes: [{
//                                                         reverse: true,
//                                                         gridLines: {
//                                                             color: "rgba(0,0,0,0.05)"
//                                                         }
//                                                     }],
//                                                     yAxes: [{
//                                                         ticks: {
//                                                             stepSize: 2000
//                                                         },
//                                                         display: true,
//                                                         borderDash: [5, 5],
//                                                         gridLines: {
//                                                             color: "rgba(0,0,0,0)",
//                                                             fontColor: '#fff'
//                                                         }
//                                                     }]
//                                                 }
//                                             };

//                                             respChart($("#line-chart-example3"), 'Line', lineChart, lineOpts);
//                                             document.getElementById('chart3').style.display="block";
//                                             document.getElementById('chart1').style.display="none";
//                                             document.getElementById('chart2').style.display="none";
// }

// function six(){
// 	var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//     	$("#today tr:gt(0)").remove();
//     	$("#today2 tr:gt(0)").remove();
//       //document.getElementById("today").innerHTML = this.responseText;
//       var response = this.responseText;
//       response = JSON.parse(response);
//       var totalsales =  response.sum.salessum;
//       var averagesales = response.avg.salesavg;
//       var genericsales = response.gen.gensales;
//       var genaverage = response.genavg.gensales;
//       var genper = response.gen.gen_percent;
//       //alert(response.results[0]);
//        var elements = ["date_s","bill-count", "sales-store-id" ,"sales-before-returns","sales-after-returns" ];

//     for (var i=0; i<response.results.length; i++){
//         var td;
//         var tr=document.createElement('tr');

//         for (var j=0; j < elements.length; ++j){
//             td = document.createElement('td');
//             td.innerHTML=response.results[i][elements[j]];
//             tr.appendChild(td);
//         }

//         $('#today').append(tr);
//         $('#tsales').text(515565.24);
//         $('#asales').text(63735.42);
//         $('#gsales').text(60294.85);
//         $('#per2').text(53.67);
//     }
//     for (var i=0; i<response.results.length; i++){
//         var td;
//         var tr=document.createElement('tr');

//         for (var j=0; j < elements.length; ++j){
//             td = document.createElement('td');
//             td.innerHTML=response.results[i][elements[j]];
//             tr.appendChild(td);
//         }

//         $('#today2').append(tr);
//         $('#tsales2').text(totalsales);
//         $('#asales2').text(averagesales);
//         $('#gsales2').text(genericsales);

		
//         // $("#today").css("display","block");
//     }
//     }
//   };
//   xhttp.open("POST", "http://127.0.0.1:3000/getSevenDays", true);
//   //xhttp.setRequestHeader('Content-type', 'application/x-www-form-url-encoded');
//   xhttp.send();
//   var lineChart = {
//                                                 labels: ["April", "May", "June", "July", "Aug", "Sep", "Oct"],
//                                                 datasets: [{
//                                                     label: "Total Sales",
//                                                     backgroundColor: 'rgba(114, 124, 245, 0.3)',
//                                                     borderColor: '#727cf5',
//                                                     data: [5043.58,6919.03,1346.82,1938.49,5587.93,1502.30,195.50]
//                                                 }, {
//                                                     label: "Generic Sales",
//                                                     fill: true,
//                                                     backgroundColor: 'transparent',
//                                                     borderColor: "#0acf97",
//                                                     borderDash: [5, 5],
//                                                     data: [19118.86,13849.348,3698.89,2506.73,5384.886,5460.09,5132.33]
//                                                 }]
//                                             };

//                                             var lineOpts = {
//                                                 maintainAspectRatio: false,
//                                                 legend: {
//                                                     display: false
//                                                 },
//                                                 tooltips: {
//                                                     intersect: false
//                                                 },
//                                                 hover: {
//                                                     intersect: true
//                                                 },
//                                                 plugins: {
//                                                     filler: {
//                                                         propagate: false
//                                                     }
//                                                 },
//                                                 scales: {
//                                                     xAxes: [{
//                                                         reverse: true,
//                                                         gridLines: {
//                                                             color: "rgba(0,0,0,0.05)"
//                                                         }
//                                                     }],
//                                                     yAxes: [{
//                                                         ticks: {
//                                                             stepSize: 2000
//                                                         },
//                                                         display: true,
//                                                         borderDash: [5, 5],
//                                                         gridLines: {
//                                                             color: "rgba(0,0,0,0)",
//                                                             fontColor: '#fff'
//                                                         }
//                                                     }]
//                                                 }
//                                             };

//                                             respChart($("#line-chart-example3"), 'Line', lineChart, lineOpts);
//                                             document.getElementById('chart3').style.display="block";
//                                             document.getElementById('chart1').style.display="none";
//                                             document.getElementById('chart2').style.display="none";
// }

