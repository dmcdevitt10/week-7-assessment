function sumZero(array){
    for(i = 0; i < array.length; i++){
        for(k = 0; k < array.length; k++){
            if(i !== k){
                if(array[i] + array[k] === 0){
                    return true
                }     
            }
        }
    }
    return false
}
console.log(sumZero([1, 3, 5, -3]))
// time complexity: O(n^2)
// space complexity: O(1)



function uniqueCharacters(str){
    for(let i = 0; i < str.length; i++){
        for(let k = 0; k < str.length; k++){
            if(i !== k && str[i] === str[k]){
                return false
            }
        }
    }
    return true
}
console.log(uniqueCharacters('Moonday'))
//time complexity: O(n^2)
// space complexity: O(1)



function isPangram(str){
    let alphabet = 'abcdevghijklmnopqrstuvwxyz'
    for(let i = 0; i < alphabet.length; i++){
        if(str.indexOf(alphabet[i]) === -1){
            return false
        }
    }
    return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// time complexity: O(1)
// space complexity: O(1)



function longestWord(array){
     let longestLength = 0
     for(let i = 0; i < array.length; i++){
        if(array[i].length > longestLength){
            longestLength = array[i].length
        }
     }
     return longestLength
}
console.log(longestWord(['hi', 'hello']))
// time complexity: O(n)
// space complexity: O(1)