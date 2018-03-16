// var moment = require('moment');
// var a = moment('2018-03-01T13:03:38.131Z').subtract(1,'days').toDate();
// var b = moment(new Date())
// console.log(b)

const getKeyFromDate = (date) => date.toString().substr(0, 15);

let array=[]
for(var i=20;i>0;i--){
    array.push(getKeyFromDate(new Date('Mar '+i+' 2018')));

}
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
console.log(shuffle(array));