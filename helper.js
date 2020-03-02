module.exports = {
    parseJsonFile,
    validateJsonObject,
    fileExists,
    getDetail,
    searchFlight,
    seatSelection,
    payment,
    addOnsService
}

var fs = require('fs');
var readlineSync = require('readline-sync');

/**
 * Method to convert string to JSON Object
 * @param {*} fileName 
 */
function parseJsonFile(fileName) {

    var file = fs.readFileSync(fileName);
    var obj = JSON.parse(file);
    return obj;

}

/**
 * Method to validate JSON object.
 * @param {} parsedEmployeeData 
 */
function validateJsonObject(parsedEmployeeData) {

    if (typeof parsedEmployeeData === "object") {
        return parsedEmployeeData;
    }
    else {
        throw new MyException('Invalid Datatype');
    }
}
/**
 * Method to check file exists or not
 * @param {*} fileName 
 */
function fileExists(fileName) {
    if (fs.existsSync(fileName) == true) {
        return fileName;
    } else {
        throw new MyException('File Not Found');
    }
}

/**
 * Method to throw custom exception
 * @param {} message 
 */
function MyException(message) {
    this.message = message;
    this.name = 'UserException';
}



/**
 * function to get travelers detail
 */
function getDetail(validateJsonObject) {
    console.log(validateJsonObject);
}


/**
 * Method to search flight
 */
function searchFlight(fileName) {

    var departure = readlineSync.question("Enter your departure city :");
    var arrival = readlineSync.question("Enter your arrival city :");
    var departureDate = readlineSync.question("Enter your departure date :");
    var noOfAdult = readlineSync.question("Enter No Of Adult :");
    var noOfChild = readlineSync.question("Enter No Of Child :");

    pushIntoJsonFile(fileName, departure, arrival, departureDate, noOfAdult, noOfChild);

    function pushIntoJsonFile(fileName, departure, arrival, departureDate, noOfAdult, noOfChild) {

        existFile = fileExists(fileName);

        if (existFile) {
            console.log(existFile);

            var oneWay = [];
            oneWay.push({ "oneway": [{ "from": departure, "to": arrival, "departureDate": departureDate, "adult": noOfAdult, "child": noOfChild }] });
            parsed = JSON.parse(oneWay);
            console.log(parsed.from);

        }
        else {

        }

    }

    parsedData = parseJsonFile(existFile);

    validatedData = validateJsonObject(parsedData);

}


function seatSelection(seatNo, seat) {
    if (seatNo < 4) {
        switch (seatNo) {
            case 1:
                window = ['1A', '2A', '3A', '4A', '5A', '1F', '2F', '3F', '4F', '5F'],
                    index = readlineSync.keyInSelect(window, 'Which seat do you want?');
                console.log('Ok, ' + seat + "-" + window[index] + ' seat for you!.');
                break;
            case 2:
                middle = ['1B', '2B', '3B', '4B', '5B', '1E', '2E', '3E', '4E', '5E'],
                    index = readlineSync.keyInSelect(middle, 'Which seat do you want?');
                console.log('Ok, ' + seat + "-" + middle[index] + ' seat for you!.');
                break;
            case 3:
                aisle = ['1C', '2C', '3C', '4C', '5C', '1D', '2D', '3D', '4D', '5D'],
                    index = readlineSync.keyInSelect(aisle, 'Which seat do you want?');
                console.log('Ok, ' + seat + "-" + aisle[index] + ' seat for you!.');
                break;
        }
    } else {
        throw new MyException('You Entered Invalid Seat');
    }
}

function payment(modeOfPayment,payment){
    if(modeOfPayment <= 2){
        console.log(payment+ " card is accepted")
    }
    else {
        throw new MyException('Invalid payment mode');
    }
}

function addOnsService(addons){
    if(addons){
        switch(addons){
            case 1:
                

        }
    }
    else{
        throw new MyException('Invalid add-ons');
    }
}