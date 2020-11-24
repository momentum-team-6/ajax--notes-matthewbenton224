//console.log(customers)
//const firstCustomer = customers[0]
//let date = new Date()

//const customersDiv = document.createElement('div')
//customersDiv.innerHTML =   `<img src=${firstCustomer.picture.large}>`
//customersDiv.innherHTML += `<h3>${firstCustomer.name}</h3>`
//customersDiv.innerHTML += `<p>${firstCustomer.email}</p>`
//customersDiv.innerHTML += `<p>${firstCustomer.location.street.number} ${firstCustomer.state} ${firstCustomer.country} ${firstCustomer.postcode}</p>`
//customersDiv.innerHTML += `<p>${'DOB: ' + firstcustomer.dob.date}</p>`
//customersDiv.innerHTML += `<p>${'Customer since ' + firstCustomer.registered.date}</p>`

//document.querySelector('body').appendChild(customersDiv)
//console.log(customersDiv)

console.log('hello')
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const header = document.createElement('h1')
header.classList.add('h1')
document.querySelector('body').appendChild(header)
header.innerHTML = "Customer Directory"

for (let customer of customers) {
    const customerDIV = document.createElement('div')
    customerDIV.classList.add('customers')
    document.querySelector('body').appendChild(customerDiv)

    const birth = new Date(customer.dob.date)
    const monthIndex = birth.getMonth()
    const monthName = months[monthIndex]
    const day = birth.getDate()
    const year = birth.getFullYear()

    const registered = newDate(customer.registered.date)
    const regMonthIndex = registered.getMonth()
    const MonthName = months[regMonthIndex]
    const regDay = registered.getdate()
    const regYear = registered.getFullYear()
    const abbrState = nameToAbbr(customer.location.state)

    customerDiv.innerHTML = `<img src=${customer.picture['large']}>`
    <div class='name'>${customer.name.first} ${customer,name.last}</div>
    <div class ='email'>${customer.email}</div>
    <div class ='address'>${customer.email}</div>
    <div class='address'>${customer.location.city}, ${customer.location.street}</div>
    <div class='dob'>DOB: ${monthName, ${day}, ${year}}</div>
    <div class='registered'>Customer since: ${regMonthnAME}, ${regDay}, ${regYear}</div>



}