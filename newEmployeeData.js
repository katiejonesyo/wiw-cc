//The total number of regular hours worked per employee in a given week. 
//Regular hours are the number of hours worked up to 40 hours.
//write a code that will loop through data to show total number of hours worked per employee.
//Testing is required and error handling is required but its okay if you dont finish this.


const newEmployeeData = (data) => {
    let employeeShift = []
    for (let i=0; i < data.length; i++) {
        const shift = data[i];
        const start = new Date(shift.StartTime);
        const end = new Date(shift.EndTime);
        const startHour = start.getHours();
        const endHour = end.getHours();
        const date = start.toISOString().substr(0,10);
        // const endDate = 
        // const startDate = 
        let shiftLength ;

        //this grabs the hours of each shift 
        if ( startHour < endHour) shiftLength = endHour - startHour
        else shiftLength = (24 - startHour) + endHour

        //this determines whether it's 40 hours or more for overtime
        if (startHour >= 40) overTimePay = (startHour - 40)
        //not finished and was going to do some error handling

        //this displays the shift data
        if ( !employeeShift[shift.EmployeeID])  employeeShift[shift.EmployeeID] = {
            EmployeeID: shift.EmployeeID,
            StartOfWeek: date,
            RegularHours: shiftLength
        } 
        else {
            employeeShift[shift.EmployeeID].RegularHours += shiftLength
        }    
    }

    return employeeShift;
}

module.exports = newEmployeeData;

