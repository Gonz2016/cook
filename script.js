// class # 8 constructor functions

var store = function(location, minCustomer, maxCustomer, avgCookieSale, totalCookies){
 this.location = location,
 this.minCustomer = minCustomer,
 this.maxCustomer = maxCustomer,
 this.avgCustomer = avgCookieSale,
 this.totalCookies = totalCookies,
 this.numberOfCookiesPerHour=[],

this.calculateCookies = function() {
var total = 0
for(var i=0; i<8;i++){
 var number = Math.floor(Math.random()*(this.maxCustomer-this.minCustomer+1)+
 this.minCustomer);
 this.numberOfCookiesPerHour.push(number);
 total += number;
 this.totalCookies = total;
}
return total;
},

this.getCookieOutput = function(){
  var row = document.createElement('tr');
  var locationCell = document.createElement('td')
  var text = document.createTextNode(this.location);
locationCell.appendChild(text);
row.appendChild(locationCell);
  this.calculateCookies();
var cookieArray = this.numberOfCookiesPerHour;
for (i=0; i<cookieArray.length; i++){
  var cell = document.createElement('td');
  var data = document.createTextNode(cookieArray[i]);
  cell.appendChild(data);
  row.appendChild(cell);
}
var data = document.createElement('td');
var text = document.createTextNode('Total:' + this.totalCookies);
  data.appendChild(text);
  row.appendChild(data);
  return row;
 }
}
var pioneerSquare = new store("Pioneer Square",17,80,5.2,0);
var portlandAirport = new store("Portland Airport",6, 24,1.2,0);
var washingtonSquare = new store("Washington Square", 11,38,1.9,0);
var sellwood = new store("Sellwood",20,48,3.3,0);
var pearlDistrict = new store("Pearl District", 20,48,3.3,0)

function createTable(){
  var time = ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];
  var row = document.getElementById('time');
  var emptyCell = document.createElement('td');
  row.appendChild(emptyCell);
  for(i=0; i<time.length;i++){
  var cell = document.createElement('td');
  var data = document.createTextNode(time[i]);
  console.log(data);
  cell.appendChild(data);
  row.appendChild(cell);
  }
  var table = document.getElementById('storeInfo');
  var data = document.createElement('tr');
  var cookieSales = [pioneerSquare, portlandAirport, washingtonSquare, sellwood, pearlDistrict];
  table.appendChild(data);
  for(var i=0; i<cookieSales.length; i++){
  var cookieData = cookieSales[i].getCookieOutput();
  table.appendChild(cookieData);
  }
 }

createTable();

button.addEventListener("click", function(){
  var loctionName, avgCustomers;
  locationName = document.getElementById('name').value;
  var addLocation = new location(locationName);
  var returnedTable = addLocation.addLocation();

  var tableContainer = document.getElementById("table");
  tableContainer.appendChild(returnedTable);

})

function resetFunction(){
  document.getElementById("myForm").reset();
}
