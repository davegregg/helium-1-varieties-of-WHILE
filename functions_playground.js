// A Function is a block of code that you can execute/run/call/invoke whenever you want, as many times as you want.

// A Function optionally recieves input (parameters/arguments)
// A Function optionally returns output
// But all Functions will DO something when run.

function validateWord (word) {
    // return (typeof word === "string")

    if (typeof word === "string") {
        return true
    } else {
        return false
    }
}

function pluralize (word) {
    let isValid = validateWord(word)
    // Boolean variables usually should be named with 
    // a "to be", or a "to have" verb: is, has, etc.
    if (isValid) {
        return word + "s"
    } else {
        alert("Oops! Something went wrong. Try again.")
        return null
    }
}

console.log(pluralize("") === "s")
console.log(pluralize(" ") === " s")
console.log(pluralize("Victor") === "Victors")
// console.log(pluralize(356) === null)
// console.log(pluralize(undefined) === null)
// console.log(pluralize(["123"]) === null)

let userResponse = prompt("Give us a singular word:")
let pluralizedResponse = pluralize(userResponse)
console.log(pluralizedResponse)