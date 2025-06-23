const returnFirstTwoDrivers= function(drivers){
 return drivers.slice(0, 2);    
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2); // slice from the end
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier; // multiply the fare
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverFunction) {
  return driverFunction(drivers);
}
