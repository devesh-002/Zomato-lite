var dt = new Date();//current Date that gives us current Time also

var startTime = '03:30';
var endTime = '23:50';

var s =  startTime.split(':');
var dt1 = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(),
                   parseInt(s[0]), parseInt(s[1]));

var e =  endTime.split(':');
var dt2 = new Date(dt.getFullYear(), dt.getMonth(),
                   dt.getDate(),parseInt(e[0]), parseInt(e[1]));

console.log( (dt >= dt1 && dt <= dt2) ? 'Current time is between startTime and endTime' : 
                                  'Current time is NOT between startTime and endTime');
console.log ('dt = ' + dt  + ',  dt1 = ' + dt1 + ', dt2 =' + dt2)