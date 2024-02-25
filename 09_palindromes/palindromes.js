const palindromes = function (str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ' || str[i] === '!' || str[i] === '.' || str[i] === ',') {
            str = str.slice(0, i) + str.slice(i + 1);
            i--; // Decrement i to adjust for removed character
        }
    }


    const strArr = str.toLowerCase().split('');
    const revStrArr = str.toLowerCase().split('').reverse();
    for(let i = 0; i < strArr.length; i++)
        if(strArr[i] != revStrArr[i])
            return false;
    return true;
};

// Do not edit below this line
module.exports = palindromes;
