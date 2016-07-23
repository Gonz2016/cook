

var cookieStand1 = {
  name: "Pioneer Square",
  minimumCustomerPerHour: 17,
  maximumCustomerPerHour: 88,
  cookiesPerCustomer: 5.2,
  cookies: [],
  totalCookies: 0,
  addInfo: function() {
  //setting up a function to get an element from the page by ID    
  },
  randomCustomerPerHour: function() {
    var customersThisHour = Math.floor( Math.random()*(this.maximumCustomerPerHour-this.minimumCustomerPerHour) ) + this.minimumCustomerPerHour
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
      console.log(this.totalCookies)
      console.log(this.cookies)
    }
    //stores the results of each call in an array

  }
}
console.log(cookieStand1)
cookieStand1.cookiesPerDay()
console.log(cookieStand1)
