

var cookieStand1 = {
  name: "Pioneer Square",
  minimumCustomerPerHour: 17,
  maximumCustomerPerHour: 88,
  cookiesPerCustomer: 5.2,
  randomCustomerPerHour: function() {
    var customersThisHour = Math.floor( Math.random()*(this.maximumCustomerPerHour-this.minimumCustomerPerHour) ) + this.minimumCustomerPerHour
    console.log(customersThisHour)
    return customersThisHour
  },
  cookiesPerHour: function() {
    var customersThisHour = this.randomCustomerPerHour()
    var cookiesThisHour = this.cookiesPerCustomer * customersThisHour
    cookiesThisHour = Math.floor(cookiesThisHour)
    console.log(cookiesThisHour)
    return cookiesThisHour

  }
}
cookieStand1.cookiesPerHour()
