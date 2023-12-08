const fs = require('fs')

function loadDB(filename) {
  return fs.readFileSync(filename, 'utf-8').trim().split(/\r?\n/).map(line => {
    return line.split(',')
  })
}

const customers = loadDB('../db/noahs-customers.csv')

const numberToLetterMap = {
  1: ['a', 'b', 'c'],
  2: ['d','e', 'f'],
  3: ['g', 'h', 'i'],
  4: ['j', 'k', 'l'],
  5: ['m', 'n', 'o'],
  6: ['p', 'q', 'r', 's'],
  7: ['t', 'u', 'v'],
  8: ['w', 'x', 'y', 'z']
}

//   const [ customerid, name, address, citystatezip, birthdate, phone, timezone, lat, long ] = customer


function getLastName(customer) {
  const [ customerid, name, address, citystatezip, birthdate, phone, timezone, lat, long ] = customer

  const nameWithoutQuotes = name.slice(1, name.length - 1)

  lowerNameSuffixes = ['jr.', 'sr.', 'i', 'iii', 'iii', 'iv']
  const nameArray = nameWithoutQuotes.split(' ').filter(nameSegment => {
    return !lowerNameSuffixes.includes(nameSegment.toLowerCase())
  })


  return nameArray[nameArray.length - 1]
}

function getPhoneNumber(customer) {
  const [ customerid, name, address, city, state, zip, birthdate, phone, timezone, lat, long ] = customer

  console.log(phone)
}

const customerColLabels = customers[0]
function hasPhoneNumberLengthLastName(customer) {
  const [ customerid, name, address, city, state, zip, birthdate, phone, timezone, lat, long ] = customer
  return name.split(' ')[1].length - 1 === 10
}

for (customer of customers) {
  const lastName = getLastName(customer)

  console.log(getPhoneNumber(customer))

}