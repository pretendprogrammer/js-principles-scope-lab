var customerName = 'bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
    bestCustomer = 'not bob'
    return bestCustomer
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'obo'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob'
}