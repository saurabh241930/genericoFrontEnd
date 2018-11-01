function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
function initMap() {
        var myLatlng = {lat: 19.0330, lng: 73.0297};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: myLatlng
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Click to zoom'
        });

        map.addListener('center_changed', function() {
          // 3 seconds after the center of the map has changed, pan back to the
          // marker.
          window.setTimeout(function() {
            map.panTo(marker.getPosition());
          }, 3000);
        });

        marker.addListener('click', function() {
          map.setZoom(8);
          map.setCenter(marker.getPosition());
        });
      }

function tsales(){
 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	$("#today tr:gt(0)").remove();
    	$("#today2 tr:gt(0)").remove();
      //document.getElementById("today").innerHTML = this.responseText;
      var response = this.responseText;
      response = JSON.parse(response);
      var totalsales =  response.sum.salessum;
      var averagesales = response.avg.salesavg;
      var genericsales = response.gen.gensales;
      //alert(response.results[0]);
       var elements = ["date_s","bill-count", "sales-store-id" ,"sales-before-returns","sales-after-returns" ];

    for (var i=0; i<response.results.length; i++){
        var td;
        var tr=document.createElement('tr');

        for (var j=0; j < elements.length; ++j){
            td = document.createElement('td');
            td.innerHTML=response.results[i][elements[j]];
            tr.appendChild(td);
        }

        $('#today').append(tr);
        $('#tsales').text(totalsales);
        $('#asales').text(averagesales);
        $('#gsales').text(genericsales);
		
        // $("#today").css("display","block");
    }
    for (var i=0; i<response.results.length; i++){
        var td;
        var tr=document.createElement('tr');

        for (var j=0; j < elements.length; ++j){
            td = document.createElement('td');
            td.innerHTML=response.results[i][elements[j]];
            tr.appendChild(td);
        }

        $('#today2').append(tr);
        $('#tsales2').text(totalsales);
        $('#asales2').text(averagesales);
        $('#gsales2').text(genericsales);
        // $("#today").css("display","block");
    }
    }
  };
  xhttp.open("POST", "http://127.0.0.1:3000/getToday", true);
  //xhttp.setRequestHeader('Content-type', 'application/x-www-form-url-encoded');
  xhttp.send();
document.getElementById("chartdiv").style.display="block";
document.getElementById("chartdivv").style.display="block";
AmCharts.makeChart("chartdiv",
				{
					"type": "serial",
					"categoryField": "date",
					"dataDateFormat": "YYYY-MM-DD",
					"theme": "default",
					"categoryAxis": {
						"parseDates": true
					},
					"chartCursor": {
						"enabled": true
					},
					"chartScrollbar": {
						"enabled": true
					},
					"trendLines": [],
					"graphs": [
						{
							"bullet": "round",
							"id": "AmGraph-1",
							"title": "graph 1",
							"valueField": "column-1"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"title": "Sales Store Id"
						}
					],
					"allLabels": [],
					"balloon": {},
					"legend": {
						"enabled": true,
						"useGraphSettings": true
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Product Sales According To Date"
						}
					],
					"dataProvider": [
						{
							"date": "2018-10-10",
							"column-1": "2"
						},
						{
							"date": "2018-10-10",
							"column-1": "4"
							
						},
						{
							"date": "2018-10-10",
							"column-1": "7"
							
						},
						{
							"date": "2018-10-10",
							"column-1": "8"
							
						},
						{
							"date": "2018-10-10",
							"column-1": "13"
							
						},
						{
							"date": "2018-10-10",
							"column-1": "16"
							
						}
					]
				}
			);

	AmCharts.makeChart("chartdivv",
				{
					"type": "serial",
					"categoryField": "category",
					"dataDateFormat": "YYYY-MM-DD",
					"startDuration": 1,
					"categoryAxis": {
						"gridPosition": "start",
						"parseDates": true
					},
					"chartCursor": {
						"enabled": true
					},
					"chartScrollbar": {
						"enabled": true
					},
					"trendLines": [],
					"graphs": [
						{
							"fillAlphas": 1,
							"id": "AmGraph-1",
							"title": "graph 1",
							"type": "column",
							"valueField": "sales id"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"title": "Sales Store ID"
						}
					],
					"allLabels": [],
					"balloon": {},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Product Sales According To Date"
						}
					],
					"dataProvider": [
						{
							"category": "2018-10-12",
							"sales id": "2"
						},
						{
							"category": "2018-10-12",
							"sales id": "4"
						},
						{
							"category": "2018-10-12",
							"sales id": "7"
						},
						{
							"category": "2018-10-12",
							"sales id": "8"
						},
						{
							"category": "2018-10-12",
							"sales id": "13"
						},
						{
							"category": "2018-10-12",
							"sales id": "16"
						},
						{
							"category": "2018-10-12",
							"sales id": "17"
						}
					]
				}
			);
}

function ysales(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	$("#today tr:gt(0)").remove();
    	$("#today2 tr:gt(0)").remove();
      //document.getElementById("today").innerHTML = this.responseText;
      var response = this.responseText;
      response = JSON.parse(response);
      var totalsales =  response.sum.salessum;
      var averagesales = response.avg.salesavg;
      var genericsales = response.gen.gensales;
      //alert(response.results[0]);
       var elements = ["date_s","bill-count", "sales-store-id" ,"sales-before-returns","sales-after-returns" ];

    for (var i=0; i<response.results.length; i++){
        var td;
        var tr=document.createElement('tr');

        for (var j=0; j < elements.length; ++j){
            td = document.createElement('td');
            td.innerHTML=response.results[i][elements[j]];
            tr.appendChild(td);
        }

        $('#today').append(tr);
        $('#tsales').text(totalsales);
        $('#asales').text(averagesales);
        $('#gsales').text(genericsales);
        // $("#today2").css("display","block");

    }
    for (var i=0; i<response.results.length; i++){
        var td;
        var tr=document.createElement('tr');

        for (var j=0; j < elements.length; ++j){
            td = document.createElement('td');
            td.innerHTML=response.results[i][elements[j]];
            tr.appendChild(td);
        }

        $('#today2').append(tr);
		$('#tsales2').text(totalsales);
        $('#asales2').text(averagesales);
        $('#gsales2').text(genericsales);
        // $("#today").css("display","block");
    }
    }
  };
  xhttp.open("POST", "http://127.0.0.1:3000/getYesterday", true);
  //xhttp.setRequestHeader('Content-type', 'application/x-www-form-url-encoded');
  xhttp.send();
  document.getElementById("chartdiv").style.display="block";
  document.getElementById("chartdivv").style.display="block";
AmCharts.makeChart("chartdiv",
				{
					"type": "serial",
					"categoryField": "date",
					"dataDateFormat": "YYYY-MM-DD",
					"theme": "default",
					"categoryAxis": {
						"parseDates": true
					},
					"chartCursor": {
						"enabled": true
					},
					"chartScrollbar": {
						"enabled": true
					},
					"trendLines": [],
					"graphs": [
						{
							"bullet": "round",
							"id": "AmGraph-1",
							"title": "graph 1",
							"valueField": "column-1"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"title": "Sales Store Id"
						}
					],
					"allLabels": [],
					"balloon": {},
					"legend": {
						"enabled": true,
						"useGraphSettings": true
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Product Sales According To Date"
						}
					],
					"dataProvider": [
						{
							"date": "2018-10-09",
							"column-1": "4"
							
						},
						{
							"date": "2018-10-09",
							"column-1": "7"
							
						},
						{
							"date": "2018-10-09",
							"column-1": "8"
							
						},
						{
							"date": "2018-10-09",
							"column-1": "13"
							
						},
						{
							"date": "2018-10-09",
							"column-1": "4"
							
						},
						{
							"date": "2018-10-09",
							"column-1": "7"
							
						},
						{
							"date": "2018-10-09",
							"column-1": "8"
							
						},
						{
							"date": "2018-10-09",
							"column-1": "13"
							
						},
						{
							"date": "2018-10-09",
							"column-1": "16"
						
						},
						{
							"date": "2018-10-09",
							"column-1": "2",
						
						}
					]
				}
			);
AmCharts.makeChart("chartdivv",
				{
					"type": "serial",
					"categoryField": "category",
					"dataDateFormat": "YYYY-MM-DD",
					"startDuration": 1,
					"categoryAxis": {
						"gridPosition": "start",
						"parseDates": true
					},
					"chartCursor": {
						"enabled": true
					},
					"chartScrollbar": {
						"enabled": true
					},
					"trendLines": [],
					"graphs": [
						{
							"fillAlphas": 1,
							"id": "AmGraph-1",
							"title": "graph 1",
							"type": "column",
							"valueField": "sales-id"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"title": "Sales Store ID"
						}
					],
					"allLabels": [],
					"balloon": {},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Product Sales According To Date"
						}
					],
					"dataProvider": [
						{
							"category": "2018-10-11",
							"sales-id": "16"
						},
						{
							"category": "2018-10-11",
							"sales-id": "2"
						},
						{
							"category": "2018-10-11",
							"sales-id": "4"
						},
						{
							"category": "2018-10-11",
							"sales-id": "7"
						},
						{
							"category": "2018-10-11",
							"sales-id": "8"
						},
						{
							"category": "2018-10-11",
							"sales-id": "13"
						}
					]
				}
			);
}

function lsales(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	$("#today tr:gt(0)").remove();
    	$("#today2 tr:gt(0)").remove();
      //document.getElementById("today").innerHTML = this.responseText;
      var response = this.responseText;
      response = JSON.parse(response);
      var totalsales =  response.sum.salessum;
      var averagesales = response.avg.salesavg;
      var genericsales = response.gen.gensales;
      //alert(response.results[0]);
       var elements = ["date_s","bill-count", "sales-store-id" ,"sales-before-returns","sales-after-returns" ];

    for (var i=0; i<response.results.length; i++){
        var td;
        var tr=document.createElement('tr');

        for (var j=0; j < elements.length; ++j){
            td = document.createElement('td');
            td.innerHTML=response.results[i][elements[j]];
            tr.appendChild(td);
        }

        $('#today').append(tr);
        $('#tsales').text(totalsales);
        $('#asales').text(averagesales);
        $('#gsales').text(genericsales);
    }
    for (var i=0; i<response.results.length; i++){
        var td;
        var tr=document.createElement('tr');

        for (var j=0; j < elements.length; ++j){
            td = document.createElement('td');
            td.innerHTML=response.results[i][elements[j]];
            tr.appendChild(td);
        }

        $('#today2').append(tr);
        $('#tsales2').text(totalsales);
        $('#asales2').text(averagesales);
        $('#gsales2').text(genericsales);

		
        // $("#today").css("display","block");
    }
    }
  };
  xhttp.open("POST", "http://127.0.0.1:3000/getSevenDays", true);
  //xhttp.setRequestHeader('Content-type', 'application/x-www-form-url-encoded');
  xhttp.send();
  document.getElementById("chartdiv").style.display="block";
  document.getElementById("chartdivv").style.display="block";
AmCharts.makeChart("chartdiv",
				{
					"type": "serial",
					"categoryField": "date",
					"dataDateFormat": "YYYY-MM-DD",
					"categoryAxis": {
						"parseDates": true
					},
					"chartCursor": {
						"enabled": true
					},
					"chartScrollbar": {
						"enabled": true
					},
					"trendLines": [],
					"graphs": [
						{
							"bullet": "round",
							"id": "AmGraph-1",
							"title": "graph 1",
							"valueField": "column-1"
						}
					
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"title": "Sales Store Id"
						}
					],
					"allLabels": [],
					"balloon": {},
					"legend": {
						"enabled": true,
						"useGraphSettings": true
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Product Sales According To Date"
						}
					],
					"dataProvider": [
						{
							"date": "2018-10-01",
							"column-1": 8
						
						},
						{
							"date": "2018-10-02",
							"column-1": 6
							
						},
						{
							"date": "2018-10-03",
							"column-1": 2
							
						},
						{
							"date": "2018-10-04",
							"column-1": 1
							
						},
						{
							"date": "2018-10-05",
							"column-1": 2
							
						},
						{
							"date": "2018-10-06",
							"column-1": 3
							
						},
						{
							"date": "2018-10-07",
							"column-1": 6
							
						}
					]
				}
			);
AmCharts.makeChart("chartdivv",
				{
					"type": "serial",
					"categoryField": "category",
					"dataDateFormat": "YYYY-MM-DD",
					"startDuration": 1,
					"categoryAxis": {
						"gridPosition": "start",
						"parseDates": true
					},
					"chartCursor": {
						"enabled": true
					},
					"chartScrollbar": {
						"enabled": true
					},
					"trendLines": [],
					"graphs": [
						{
							"fillAlphas": 1,
							"id": "AmGraph-1",
							"title": "graph 1",
							"type": "column",
							"valueField": "column-1"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"title": "Sales Store ID"
						}
					],
					"allLabels": [],
					"balloon": {},
					"titles": [
						{
							"id": "Title-1",
							"size": 1,
							"text": "Product Sales According To Date"
						}
					],
					"dataProvider": [
						{
							"category": "2018-09-07",
							"column-1": 16
						},
						{
							"category": "2018-09-08",
							"column-1": 16
						},
						{
							"category": "2018-09-09",
							"column-1": 2
						},
						{
							"category": "2018-09-10",
							"column-1": 7
						},
						{
							"category": "2018-09-11",
							"column-1": 5
						},
						{
							"category": "2018-09-12",
							"column-1": 9
						},
						{
							"category": "2018-09-13",
							"column-1": 4
						},
						{
							"category": "2018-09-14",
							"column-1": 15
						}


					]
				}
			);
}

function llsales(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	$("#today tr:gt(0)").remove();
    	$("#today2 tr:gt(0)").remove();
      //document.getElementById("today").innerHTML = this.responseText;
      var response = this.responseText;
      response = JSON.parse(response);
      //alert(response.results[0]);
       var elements = ["date_s","bill-count", "sales-store-id" ,"sales-before-returns","sales-after-returns" ];

    for (var i=0; i<response.results.length; i++){
        var td;
        var tr=document.createElement('tr');

        for (var j=0; j < elements.length; ++j){
            td = document.createElement('td');
            td.innerHTML=response.results[i][elements[j]];
            tr.appendChild(td);
        }

        $('#today').append(tr);
    }
    for (var i=0; i<response.results.length; i++){
        var td;
        var tr=document.createElement('tr');

        for (var j=0; j < elements.length; ++j){
            td = document.createElement('td');
            td.innerHTML=response.results[i][elements[j]];
            tr.appendChild(td);
        }

        $('#today2').append(tr);
		
        // $("#today").css("display","block");
    }
    }
  };
  xhttp.open("POST", "http://127.0.0.1:3000/getThirtyDays", true);
  //xhttp.setRequestHeader('Content-type', 'application/x-www-form-url-encoded');
  xhttp.send();
  document.getElementById("chartdiv").style.display="block";
  document.getElementById("chartdivv").style.display="block";
AmCharts.makeChart("chartdiv",
				{
					"type": "serial",
					"categoryField": "date",
					"dataDateFormat": "YYYY-MM-DD",
					"categoryAxis": {
						"parseDates": true
					},
					"chartCursor": {
						"enabled": true
					},
					"chartScrollbar": {
						"enabled": true
					},
					"trendLines": [],
					"graphs": [
						{
							"bullet": "round",
							"id": "AmGraph-1",
							"title": "graph 1",
							"valueField": "column-1"
						}
					
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"title": "Axis title"
						}
					],
					"allLabels": [],
					"balloon": {},
					"legend": {
						"enabled": true,
						"useGraphSettings": true
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Chart Title"
						}
					],
					"dataProvider": [

						{
							"date": "2018-09-31",
							"column-1": 8
							
						},
						{
							"date": "2018-09-30",
							"column-1": 8
							
						},
						{
							"date": "2018-09-29",
							"column-1": 8
							
						},
						{
							"date": "2018-09-28",
							"column-1": 8
							
						},
						{
							"date": "2018-09-27",
							"column-1": 8
							
						},
						{
							"date": "2018-09-26",
							"column-1": 6
							
						},
						{
							"date": "2018-09-25",
							"column-1": 8
							
						},
						{
							"date": "2018-09-24",
							"column-1": 8
							
						},
						{
							"date": "2018-09-23",
							"column-1": 8
							
						},
						{
							"date": "2018-09-22",
							"column-1": 8
							
						},
						{
							"date": "2018-09-21",
							"column-1": 8
							
						},
						{
							"date": "2018-09-20",
							"column-1": 8
							
						},
						{
							"date": "2018-09-19",
							"column-1": 8
							
						},
						{
							"date": "2018-09-18",
							"column-1": 8
							
						},
						{
							"date": "2018-09-17",
							"column-1": 8
							
						},
						{
							"date": "2018-09-16",
							"column-1": 8
							
						},
						{
							"date": "2018-09-15",
							"column-1": 2
							
						},
						{
							"date": "2018-09-14",
							"column-1": 8
							
						},
						{
							"date": "2018-09-13",
							"column-1": 8
							
						},
						{
							"date": "2018-09-12",
							"column-1": 8
							
						},
						{
							"date": "2018-09-11",
							"column-1": 8
							
						},
						{
							"date": "2018-09-10",
							"column-1": 8
							
						},
						{
							"date": "2018-10-01",
							"column-1": 8
							
						},
						{
							"date": "2018-10-02",
							"column-1": 8
							
						},
						{
							"date": "2018-10-03",
							"column-1": 8
							
						},
						{
							"date": "2018-10-04",
							"column-1": 1
							
						},
						{
							"date": "2018-10-05",
							"column-1": 2
							
						},
						{
							"date": "2018-10-06",
							"column-1": 3
						
						},
						{
							"date": "2018-10-07",
							"column-1": 6
							
						},
						{
							"date": "2018-10-08",
							"column-1": 6
							
						},
						{
							"date": "2018-10-09",
							"column-1": 6
							
						}
					]
				}
			);
AmCharts.makeChart("chartdivv",
				{
					"type": "serial",
					"categoryField": "category",
					"dataDateFormat": "YYYY-MM-DD",
					"startDuration": 1,
					"categoryAxis": {
						"gridPosition": "start",
						"parseDates": true
					},
					"chartCursor": {
						"enabled": true
					},
					"chartScrollbar": {
						"enabled": true
					},
					"trendLines": [],
					"graphs": [
						{
							"fillAlphas": 1,
							"id": "AmGraph-1",
							"title": "graph 1",
							"type": "column",
							"valueField": "column-1"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"title": "Sales Store ID"
						}
					],
					"allLabels": [],
					"balloon": {},
					"titles": [
						{
							"id": "Title-1",
							"size": 1,
							"text": "Product Sales According To Date"
						}
					],
					"dataProvider": [
						{
							"category": "2018-09-07",
							"column-1": 16
						},
						{
							"category": "2018-09-08",
							"column-1": 16
						},
						{
							"category": "2018-09-09",
							"column-1": 2
						},
						{
							"category": "2018-09-10",
							"column-1": 7
						},
						{
							"category": "2018-09-11",
							"column-1": 5
						},
						{
							"category": "2018-09-12",
							"column-1": 9
						},
						{
							"category": "2018-09-13",
							"column-1": 4
						},
						{
							"category": "2018-09-14",
							"column-1": 15
						},
						{
							"category": "2018-09-15",
							"column-1": 12
						},
						{
							"category": "2018-09-16",
							"column-1": 17
						},
						{
							"category": "2018-09-17",
							"column-1": 18
						},
						{
							"category": "2018-09-18",
							"column-1": 21
						},
						{
							"category": "2018-09-19",
							"column-1": 24
						},
						{
							"category": "2018-09-20",
							"column-1": 23
						},
						{
							"category": "2018-09-21",
							"column-1": 24
						},

						{
							"category": "2018-09-22",
							"column-1": 20
						},
						{
							"category": "2018-09-23",
							"column-1": 15
						},
						{
							"category": "2018-09-24",
							"column-1": 10
						},
						{
							"category": "2018-09-25",
							"column-1": 26
						},
						{
							"category": "2018-09-26",
							"column-1": 20
						},
						{
							"category": "2018-09-27",
							"column-1": 22
						},
						{
							"category": "2018-09-28",
							"column-1": 15
						},
						{
							"category": "2018-09-29",
							"column-1": 17
						},
						{
							"category": "2018-09-30",
							"column-1": 20
						},
						{
							"category": "2018-09-31",
							"column-1": 24
						},
						{
							"category": "2018-10-01",
							"column-1": 22
						},
						{
							"category": "2018-10-02",
							"column-1": 15
						},
						{
							"category": "2018-10-03",
							"column-1": 18
						},
						{
							"category": "2018-10-04",
							"column-1": 10
						},
						{
							"category": "2018-10-05",
							"column-1": 5
						},
						{
							"category": "2018-10-06",
							"column-1": 18
						},
						{
							"category": "2018-10-07",
							"column-1": 20
						}


					]
				}
			);
}

function wsales(){
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("today").innerHTML =
    this.responseText;
    document.getElementById("today2").innerHTML =
    this.responseText;
  }
};
xhttp.open("GET", "data/data5.html", true);
xhttp.send();
}

function msales(){
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("today").innerHTML =
    this.responseText;
    document.getElementById("today2").innerHTML =
    this.responseText;
  }
};
xhttp.open("GET", "data/data6.html", true);
xhttp.send();
}

function yysales(){
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("today").innerHTML =
    this.responseText;
    document.getElementById("today2").innerHTML =
    this.responseText;
  }
};
xhttp.open("GET", "data/data7.html", true);
xhttp.send();
}

function osales(){
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("today").innerHTML =
    this.responseText;
    document.getElementById("today2").innerHTML =
    this.responseText;
  }
};
xhttp.open("GET", "data/data8.html", true);
xhttp.send();
}






