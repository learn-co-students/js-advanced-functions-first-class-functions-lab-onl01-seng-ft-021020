// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){

    let result = [drivers[0], drivers[1]]
    return result

}

const returnLastTwoDrivers = function(drivers){

    let result = [drivers[drivers.length - 2], drivers[drivers.length - 1]]
    return result

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(a){
    return function(b){
        return a*b

    }
}

function fareDoubler(a){
    return a*2

}

function fareTripler(a){
    return a*3

}

function selectDifferentDrivers(arrayOfDrivers, inputFunction){
    return inputFunction(arrayOfDrivers)

}