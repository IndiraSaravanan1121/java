path = "C:\\Users\\indira.saravanan\\Desktop\\javascriptpractise\\BookFlight\\data.json";

var helper = require('./helper.js');
var readlineSync = require('readline-sync');

/**
 * Method is used to choose seat
 */
function selectSeat() {

    try {
        //helper.searchFlight(fileName);
        seatPreference = ['Window', 'Middle', 'Aisle'],
            index = readlineSync.keyInSelect(seatPreference, 'Which seat do you want?');
        selectedSeat = helper.seatSelection(index + 1, seatPreference[index]);
    }
    catch (e) {
        throw e;
    }
}

//selectSeat();
//payment();

/**
 * This method is used to choose payment mode
 */
function payment() {
    try {
        paymentMode = ['credit', 'debit'],
            index = readlineSync.keyInSelect(paymentMode, 'How do yoy like to pay?');
        payment = helper.payment(index + 1, paymentMode[index]);
    } catch (e) {
        throw e;
    }
}

/**
 * This method is used to choose add-ons(in-flight meal,seat reservation,priority boarding,extra luggage,travel insurance)
 */
function addOns() {
    try {
        addOns = ['in-flight meal','priority boarding'],
            index = readlineSync.keyInSelect(addOns, 'What do you want?');
            addons = helper.addOnsService(index+1);
    }catch(e){
        throw e;
    }
}

addOns();

function travelerDetail(){

}
helper.searchFlight(path);
