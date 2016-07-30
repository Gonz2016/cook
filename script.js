


var PioneerSquare = {
  name: "Pioneer Square",
  minimumCustomerPerHour: 17,
  maximumCustomerPerHour: 88,
  cookiesPerCustomer: 5.2,
  cookies: [],
  totalCookies: 0,
  addInfo: function() {
  //setting up a function to get an element from the page by ID
    var list = document.getElementById('PioneerStand')
    var info = "<h2>"+this.name+"</h2>"
    list.innerHTML += info;
  },

  randomCustomerPerHour: function() {
    var customersThisHour = Math.floor(Math.random()*(this.maximumCustomerPerHour-this.minimumCustomerPerHour) ) + this.minimumCustomerPerHour
    //console.log(customersThisHour)
    return customersThisHour
  },
  cookiesPerHour: function() {
    var customersThisHour = this.randomCustomerPerHour()
    var cookiesThisHour = this.cookiesPerCustomer * customersThisHour
    cookiesThisHour = Math.floor(cookiesThisHour)
    //console.log(cookiesThisHour)
    return cookiesThisHour
  },

  cookiesPerDay: function() {
    //calls this cookiesPerHour() 8 times
    for (var i=0; i<8; i++) {
      var cookiesThisHour = this.cookiesPerHour()
      this.cookies[i] = cookiesThisHour;
      this.totalCookies = this.totalCookies + cookiesThisHour
      var listItem = document.createElement("li");
      listItem.innerHTML=this.totalCookies;

      var ul = document.getElementById("PioneerCookies");
      ul.appendChild(listItem);
      console.log(this.cookies)
    }
    //stores the results of each call in an array
  }
}



var PortlandAirport = {
  name: "Portland Airport",
  minimumCustomerPerHour: 6,
  maximumCustomerPerHour: 24,
  cookiesPerCustomer: 1.2,
  cookies: [],
  totalCookies: 0,
  addInfo: function() {
  //setting up a function to get an element from the page by ID
    var list = document.getElementById('AirportStand')
    var info = "<h2>"+this.name+"</h2>"
    list.innerHTML += info;
  },

  randomCustomerPerHour: function() {
    var customersThisHour = Math.floor(Math.random()*(this.maximumCustomerPerHour-this.minimumCustomerPerHour) ) + this.minimumCustomerPerHour
    //console.log(customersThisHour)
    return customersThisHour
  },
  cookiesPerHour: function() {
    var customersThisHour = this.randomCustomerPerHour()
    var cookiesThisHour = this.cookiesPerCustomer * customersThisHour
    cookiesThisHour = Math.floor(cookiesThisHour)
    //console.log(cookiesThisHour)
    return cookiesThisHour
  },

  cookiesPerDay: function() {
    //calls this cookiesPerHour() 8 times
    for (var i=0; i<8; i++) {
      var cookiesThisHour = this.cookiesPerHour()
      this.cookies[i] = cookiesThisHour;
      this.totalCookies = this.totalCookies + cookiesThisHour
      var listItem = document.createElement("li");
      listItem.innerHTML=this.totalCookies;

      var ul = document.getElementById("AirportCookies");
      ul.appendChild(listItem);
      (this.totalCookies)
      console.log(this.cookies)
    }
    //stores the results of each call in an array
  }
}


var WashingtonSquare = {
  name: "Washington Square",
  minimumCustomerPerHour: 11,
  maximumCustomerPerHour: 38,
  cookiesPerCustomer: 1.9,
  cookies: [],
  totalCookies: 0,
  addInfo: function() {
  //setting up a function to get an element from the page by ID
    var list = document.getElementById('WashingtonSquare')
    var info = "<h2>"+this.name+"</h2>"
    list.innerHTML += info;
  },

  randomCustomerPerHour: function() {
    var customersThisHour = Math.floor(Math.random()*(this.maximumCustomerPerHour-this.minimumCustomerPerHour) ) + this.minimumCustomerPerHour
    //console.log(customersThisHour)
    return customersThisHour
  },
  cookiesPerHour: function() {
    var customersThisHour = this.randomCustomerPerHour()
    var cookiesThisHour = this.cookiesPerCustomer * customersThisHour
    cookiesThisHour = Math.floor(cookiesThisHour)
    //console.log(cookiesThisHour)
    return cookiesThisHour
  },

  cookiesPerDay: function() {
    //calls this cookiesPerHour() 8 times
    for (var i=0; i<8; i++) {
      var cookiesThisHour = this.cookiesPerHour()
      this.cookies[i] = cookiesThisHour;
      this.totalCookies = this.totalCookies + cookiesThisHour
      var listItem = document.createElement("li");
      listItem.innerHTML=this.totalCookies;

      var ul = document.getElementById("WashingtonCookies");
      ul.appendChild(listItem);
      console.log(this.cookies)
    }
    //stores the results of each call in an array
  }
}


var Sellwood = {
  name: "Sellwood",
  minimumCustomerPerHour: 20,
  maximumCustomerPerHour: 48,
  cookiesPerCustomer: 3.3,
  cookies: [],
  totalCookies: 0,
  addInfo: function() {
  //setting up a function to get an element from the page by ID
    var list = document.getElementById('Sellwood')
    var info = "<h2>"+this.name+"</h2>"
    list.innerHTML += info;
  },

  randomCustomerPerHour: function() {
    var customersThisHour = Math.floor(Math.random()*(this.maximumCustomerPerHour-this.minimumCustomerPerHour) ) + this.minimumCustomerPerHour
    //console.log(customersThisHour)
    return customersThisHour
  },
  cookiesPerHour: function() {
    var customersThisHour = this.randomCustomerPerHour()
    var cookiesThisHour = this.cookiesPerCustomer * customersThisHour
    cookiesThisHour = Math.floor(cookiesThisHour)
    //console.log(cookiesThisHour)
    return cookiesThisHour
  },

  cookiesPerDay: function() {
    //calls this cookiesPerHour() 8 times
    for (var i=0; i<8; i++) {
      var cookiesThisHour = this.cookiesPerHour()
      this.cookies[i] = cookiesThisHour;
      this.totalCookies = this.totalCookies + cookiesThisHour
      var listItem = document.createElement("li");
      listItem.innerHTML=this.totalCookies;

      var ul = document.getElementById("SellwoodCookies");
      ul.appendChild(listItem);
      console.log(this.cookies)
    }
    //stores the results of each call in an array
  }
}



var PearlDistrict = {
  name: "Pearl District",
  minimumCustomerPerHour: 3,
  maximumCustomerPerHour: 24,
  cookiesPerCustomer: 2.6,
  cookies: [],
  totalCookies: 0,
  addInfo: function() {
  //setting up a function to get an element from the page by ID
    var list = document.getElementById('PearlDistrict')
    var info = "<h2>"+this.name+"</h2>"
    list.innerHTML += info;
  },

  randomCustomerPerHour: function() {
    var customersThisHour = Math.floor(Math.random()*(this.maximumCustomerPerHour-this.minimumCustomerPerHour) ) + this.minimumCustomerPerHour
    //console.log(customersThisHour)
    return customersThisHour
  },
  cookiesPerHour: function() {
    var customersThisHour = this.randomCustomerPerHour()
    var cookiesThisHour = this.cookiesPerCustomer * customersThisHour
    cookiesThisHour = Math.floor(cookiesThisHour)
    //console.log(cookiesThisHour)
    return cookiesThisHour
  },

  cookiesPerDay: function() {
    //calls this cookiesPerHour() 8 times
    for (var i=0; i<8; i++) {
      var cookiesThisHour = this.cookiesPerHour()
      this.cookies[i] = cookiesThisHour;
      this.totalCookies = this.totalCookies + cookiesThisHour
      var listItem = document.createElement("li");
      listItem.innerHTML=this.totalCookies;

      var ul = document.getElementById("PearlDistrictCookies");
      ul.appendChild(listItem);
      console.log(this.cookies)
    }
    //stores the results of each call in an array
  }
}


console.log(PioneerSquare)
PioneerSquare.cookiesPerDay()
PioneerSquare.addInfo()

console.log(PortlandAirport)
PortlandAirport.cookiesPerDay()
PortlandAirport.addInfo()

console.log(WashingtonSquare)
WashingtonSquare.cookiesPerDay()
WashingtonSquare.addInfo()

console.log(Sellwood)
Sellwood.cookiesPerDay()
Sellwood.addInfo()

console.log(PearlDistrict)
PearlDistrict.cookiesPerDay()
PearlDistrict.addInfo()
