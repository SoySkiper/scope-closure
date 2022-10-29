function sumWithClosure(firstNum) {
    return function(b) {
        if (typeof(b) == 'undefined'){
            return firstNum
        } else {
            return firstNum + b
        }
    }
}

console.log(sumWithClosure(90)())