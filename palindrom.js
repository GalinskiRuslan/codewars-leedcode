var isPalindrome = function (x) {
    const arr = x.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[arr.length - 1 - i]) {
            return true;
        } else {
            return false;
        }
    }

};



console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
