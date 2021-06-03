// const momentBusinessTime = require('moment-business-time');

// moment.locale('en', {
//     workinghours: {
//         0: null,
//         1: ['10:00:00', '19:00:00'],
//         2: ['10:00:00', '19:00:00'],
//         3: ['10:00:00', '19:00:00'],
//         4: ['10:00:00', '19:00:00'],
//         5: ['10:00:00', '19:00:00'],
//         6: null
//     }
// });

// moment().addWorkingTime(5, 'hours');



const engl = {
    price : 0.12 ,
    allowablePrice : 120 ,
    symvolsInHour : 333
}

const ua = {
    price : 0.05 ,
    allowablePrice : 50 ,
    symvolsInHour : 1333 
}

function calculation(obj , str) {
    let finalPrice;
    let finalTime;
    let price = obj.price;
    let allowablePrice = obj.allowablePrice ;
    let symvolsInHour = obj.symvolsInHour; 

    let amountSymvols = str.length;
    finalPrice = amountSymvols * price ;

    if (finalPrice <= allowablePrice) {
        finalPrice = allowablePrice;
    }

    let symvolsInSec = symvolsInHour / 3600;
    finalTime = Math.ceil(amountSymvols / symvolsInSec) + 1800;
    if (finalTime <= 3600) {
        finalTime = 3600;
    }
    console.log(finalTime)

    // if (str.endsWith(".doc" || ".docx" || ".rtf")) {
    //     finalPrice = finalPrice * 1.2;
    //     finalTime = finalTime * 1.2;
    // }

    console.log (finalPrice);

    // return finalPrice,finalTime
}

// calculation(engl , 'qweqweqwe');





    

