var moment = require('moment');
// var a = moment('2018-03-01T13:03:38.131Z').subtract(1,'days').toDate();
// var b = moment(new Date())
// console.log(b)

const getKeyFromDate = (date) => date.toString().substr(0, 15);


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

// let array=[]
// for(var i=27;i>15;i--){
//     array.push(getKeyFromDate(new Date('Feb '+i+' 2018')));

// }
// array=shuffle(array);
// console.log('---------Before sort--------------------------------------------------------')
// console.log(array);
// array.sort(dateSort);
// console.log('---------After sort--------------------------------------------------------')

// console.log(array);

let a = ['Wed Mar 07 2017',
    'Mon Mar 05 2017',
    'Fri Mar 09 2017',
    'Thu Mar 01 2017',
    'Fri Mar 02 2017',
    'Tue Mar 06 2017',
    'Sat Mar 10 2017',
    'Thu Mar 08 2017',
    'Sat Mar 03 2017',
    'Sun Mar 04 2017', 'Mon Mar 19 2017',
    'Sat Mar 17 2017',
    'Thu Mar 15 2017',
    'Fri Mar 16 2017',
    'Wed Mar 14 2017',
    'Sun Mar 18 2017',
    'Tue Mar 20 2017', 'Mon Feb 19 2017',
    'Sun Feb 25 2017',
    'Sun Feb 18 2017',
    'Mon Feb 26 2017',
    'Thu Feb 22 2017',
    'Sat Feb 24 2017',
    'Fri Feb 23 2017',
    'Tue Feb 20 2017',
    'Sat Feb 17 2017',
    'Wed Feb 21 2017',
    'Tue Feb 27 2017',
    'Fri Feb 16 2017'];


const dateSort = (date1, date2) => {
    if (date1 > date2) return 1;
    if (date1 < date2) return -1;
    return 0;
};

const streaks = (a) => {
    let streak = 1;
    let _streaks = [];
    let currentStreak = 0;
    let dayWiseStats = [];
    let oneMonthBack = moment().subtract(30, 'days');
    let last30 = [];
    for (let i = 0; i < a.length; i++) {
        let today = moment(a[i]);
        let tommorow = moment(a[i + 1]);
        if (i != a.length - 1) {
            let flag = today.add(1, 'day').isSame(tommorow, 'day');
            if (flag) {
                streak++;
            } else {
                _streaks.push(streak);
                streak = 1;
            }
            if (dayWiseStats[today.day()]) {
                dayWiseStats[today.day()] += 1;
            } else {
                dayWiseStats[today.day()] = 1;
            }



        } else {
            _streaks.push(streak);

            let flag2 = moment().subtract(1, 'day').isSame(moment(a[i - 1]), 'day');
            if (flag2) {
                currentStreak = streak;
            }
        }

        if (today.isSameOrAfter(oneMonthBack, 'day')) {
            let diff = moment(today).diff(oneMonthBack, 'day');
            last30[diff] = 1;
        }
    }
    for(let i=0;i<30;i++){
        if(last30[i]!==1){
            last30[i]=0;
        }
    }
    let maxStreak = Math.max(..._streaks);
    console.log('streaks', _streaks);
    console.log('max', maxStreak);
    console.log('currentStreak', currentStreak)
    console.log('completedDays', a.length)
    console.log('dayWiseStats', dayWiseStats)
    console.log('last30',last30)
}



console.log('____________________________________________________________\n');
a = a.map((dt) => new Date(dt));
a.push( moment().subtract(5, 'day').toDate())
a.sort(dateSort);
// console.log(a);

streaks(a);

console.log('\n__________________________________________________________');



