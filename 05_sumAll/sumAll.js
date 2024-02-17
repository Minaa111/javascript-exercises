const sumAll = function(int1, int2) {
    let sum = 0;

    if(
        int1 < 0 || int2 < 0 || 
        !Number.isInteger(int1) || !Number.isInteger(int2)
    )
        return "ERROR"
    
    if (int1 > int2)
        for (let n = int1; n >= int2; n--)
            sum += n;
    else
        for (let n = int1; n <= int2; n++)
            sum += n;
    

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
