// Your code here

function createEmployeeRecord(array) {
    let testEmployee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return testEmployee;
}

function createEmployeeRecords(employeeData) {
    let newArray = employeeData.map(row =>createEmployeeRecord(row));
    return newArray;
   
   

}
//const timeInEvents = new Date(2014,2,28,14,0);
function createTimeInEvent(employeeRecord,dateStamp) {
   // console.log("hey this is ",dateStamp)
    const [date,hour] = dateStamp.split(' ');
    // console.log("kitty",Hour);
    //const Date = dateStamp.split(' ');
    // console.log(Date[0]);
    //Object.assign(timeInEvents,{hour:"1400}"},{date:"2014-02-28"});
      
    employeeRecord.timeInEvents.push({
     type: "TimeIn",
     date:  date,
     hour: parseInt(hour)
    })
   // console.log(employeeRecord.timeInEvents)
    //  newEvents.date.push(Date[0]); 
    //  newEvents.hour.push(Hour[1]);
    //employeeRecord.timeInEvents.push(newEvents);
    //const { date,hour } = timeInEvents;
    //console.log(date,hour)
    // console.log(employeeRecord.timeInEvents[0].date)
     //console.log(employeeRecord.timeInEvents[0].hour)
    //  console.log(newEvents.date)
    //  console.log(newEvents.hour)
   // const newEmployeeRecord = employeeRecord.map(timeInEvents => timeInEvents.values);
  
    return employeeRecord;
     
 
    };

       
      

function createTimeOutEvent(employeeRecord,dateStamp) {
    const [date,hour] = dateStamp.split(' ');
   // console.log(Hour[1]);
   // const Date = dateStamp.split(' ');
   // console.log(Date[0]);
   employeeRecord.timeOutEvents.push({
        type: "TimeOut",
        date:  date,
        hour: parseInt(hour)
       })
      // employeeRecord.timeOutEvents.push(outEvents);
      // console.log(employeeRecord)
    //    console.log(timeOutEvents.date[0])
    //    console.log(timeOutEvents.hour)
       return employeeRecord;

}

function hoursWorkedOnDate(employeeRecord,date) {
    //let x = employeeRecord.timeInEvents[0].hour;
    //let y = employeeRecord.timeOutEvents[0].hour;
    // console.log(date)
    //console.log(employeeRecord.find(record => record > 1200));
    const clockIn = employeeRecord.timeInEvents.find(event => event.date === date );
    console.log(clockIn.hour)
    const clockOut = employeeRecord.timeOutEvents.find(event => event.date === date );
    console.log(clockOut.hour)
    let hrEarn = (clockOut.hour/100) - (clockIn.hour/100);
    console.log(hrEarn)
    return parseInt(hrEarn);

}

function wagesEarnedOnDate(employeeRecord,date) {
    // console.log(employeeRecord)
    // console.log(date)
    const clockIn = employeeRecord.timeInEvents.find(event => event.date === date );
   // console.log(clockIn.hour)
    const clockOut = employeeRecord.timeOutEvents.find(event => event.date === date );
    //console.log(clockOut.hour)
    let hrEarn = (clockOut.hour/100) - (clockIn.hour/100);
    //console.log(employeeRecord.payPerHour)
    const payRate = employeeRecord.payPerHour;
    let check = payRate * hrEarn;
    return check;
}

function allWagesFor(employeeRecord) {
    //wagesEarnedOnDate();
    const clockIn = employeeRecord.timeInEvents.map(event => event.date);
    //console.log("employeeRecord",employeeRecord)
     //console.log(clockIn)
     //const clockOut =  employeeRecord.timeOutEvents.map(event => event.date);
     //console.log(clockOut)
     let reduceDate =  clockIn.reduce(function (previousValue,eachDate) {
        return previousValue + wagesEarnedOnDate(employeeRecord,eachDate)
    },0);
     return reduceDate;
    
}

function calculatePayroll(employeeRecords) {
    // console.log(employeeRecords[0].timeInEvents)
    // console.log(employeeRecords[0].timeOutEvents)
    //console.log(employeeRecords[1])
    //  const dates = employeeRecord[0].timeInEvents.map(event => event.date);
    //   console.log(dates)
    let payRoll = employeeRecords.reduce((memo,rec) =>{
        return memo + allWagesFor(rec)
        //  console.log("rec",rec)
        // console.log("memo",memo)
        
    },0);
    return payRoll;
   // console.log(payRoll)
    //return payRoll;
    //allWagesFor();

//    const clockIn = employeeRecords.timeInEvents.map(event => event.date);
//    console.log(clockIn)

//    const clockOut = employeeRecords.timeOutEvents.map(event => event.date);
//    console.log(clockOut)


}