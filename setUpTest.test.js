const newEmployeeData = require('./newEmployeeData.js');
const newData = newEmployeeData();

test('Should show EmployeeID number, StartOfTheWeek, and AllHours ', () => {

    const expected = [{
        "EmployeeID": 8362536, 
        "RegularHours": 84, 
        "StartOfWeek": "2021-08-28"
    }]
    
    const actual = newData();
    expect(expected[0]).toEqual(actual);     
});


//need to set up testing properly



