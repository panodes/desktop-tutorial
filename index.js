const colors = require('colors')
const Passenger = require('./passenger')
const Driver = require('./driver')
const passengerDatabase = require('./passenger-database')
const driverDatabase = require('./driver-database')

// const levent = new Passenger('Levent', 'Lozan')
// const umit = new Passenger('Ümit', 'Kastamonu')
// const eray = new Driver('Eray', 'Sans Suplice')
// const betul = new Passenger('Betül', 'Weimar')


// const booking1 = levent.book(eray, 'Lutry', 'Renens')
// const booking2 = levent.book(eray, 'St. Suplice', 'La Sarraz')
// const booking3 = levent.book(eray, 'Crisier', 'Lozan')
// const booking4 = levent.book(eray, 'Crisier', 'Renens')
// const booking5 = umit.book(eray, 'Şanzelize', 'Renens')
// const booking6 = betul.book(eray, 'Nişantaşı', 'Renens')

function printBooking(booking) {
    console.log(`${booking.passenger.name.bgBlue.white} booked ${booking.driver.name} and want to travel from ${booking.origin.red} to ${booking.destination.green} asap.`)
}

function printBookingHistory(passenger) {
    if(passenger.bookings.length == 0) 
        return console.log(`${passenger.name.bgBlue.white} has no booking.`)
    passenger.bookings.forEach(printBooking)
}

// passengerDatabase.save([levent, umit, betul])

// db.save('passengers', [levent, umit])
// db.save('drivers', [eray])
// passengers.forEach(printBookingHistory)

// db.insert('passengers', betul)
// db.remove('passengers', 3)

// const passengers = db.load('passengers')

const levent = passengerDatabase.findByName('Levent')

levent.book(eray, 'GNV', 'TXL')

printBookingHistory(levent)


// passengers.forEach(p => console.log(p.name))

// printBookingHistory(levent)