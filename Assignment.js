// https://github.com/tauhidhasan/assignment3

function kilometerToMeter(kilometer) {
    if (typeof kilometer != 'number' || kilometer < 0) {
        return 'Opps! Enter Wrong Keyword';
    } else {
        const meter = kilometer * 1000;
        return meter;
    }

}

console.log(kilometerToMeter(50));

// budgetCalculator
function budgetCalculator(ghori, phone, laptop) {
    if (typeof ghori != 'number' || typeof phone != 'number' || typeof laptop != 'number' || ghori < 0 || phone < 0 || laptop < 0) {
        return 'Opps! Enter Wrong Keyword';
    } else {
        var totalCost = ghori * 50 + phone * 100 + laptop * 500;
        return totalCost;
    }



}


console.log(budgetCalculator(40, 54, 60));



// hotelCost
function hotelCost(day) {
    if (typeof day != 'number' || day < 0) {
        return 'Opps! Enter Wrong Keyword';
    }
    if (day <= 10) {
        var totalCost = day * 100;

    } else if (day <= 20) {
        cost = 10 * 100;
        reminder = day - 10;
        reminderDayCost = reminder * 80;
        totalcost1 = cost + reminderDayCost;


    } else if (day > 20) {
        cost = 10 * 100;
        cost1 = 10 * 80;
        reminder = day - 20;
        reminderDayCost = reminder * 50;
        totalcost1 = cost + cost1 + reminderDayCost;

    }
    return totalcost1;


}
console.log(hotelCost(28));



//Largest String

var friend = ['Eshaque', 'Shamim', 'Rijvi']

function megaFriend(arr) {
    if (typeof arr != 'object' || arr.length == 0) {
        return 'Opps!Enter Wrong Keyword!please Enter Correct keyword';

    }
    var maximum = arr[0];
    for (var i = 0; i < arr.length; i++) {

        var friendName = arr[i]
        if (friendName.length > maximum.length) {
            maximum = friendName;
        }
    }
    return maximum;
}



console.log(megaFriend(friend));