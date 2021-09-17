const dataset = require('./dataset.json');
const data = dataset;
const newEmployeeData = require('./newEmployeeData.js');

const newData = newEmployeeData(data);

console.log(newData);

