

var cookieStand1 = {
  name: "Pioneer Square",
  minimumCustomerPerHour: 17,
  maximumCustomerPerHour: 88,
  cookiesPerCustomer: 5.2,
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
    var totalCookies = 0
    var cookies = []
    //calls this cookiesPerHour() 8 times
    for (var i=0; i<8; i++) {
      var cookiesThisHour = this.cookiesPerHour()
      cookies[i] = cookiesThisHour;
      totalCookies = totalCookies + cookiesThisHour
      console.log(totalCookies)
      console.log(cookies)
    }
    //stores the results of each call in an array

  }
}
cookieStand1.cookiesPerDay()
