let drinks = ["chocolate milk", "mojito", "latte", "chai", "rooibos", "buttermilk", "Arnold Palmer"]

document.write("<ul>") // open an unordered list
while (drinks.length > 0) {
    let drink = drinks.pop()
    let html = `<li>${drink}</li>`
    document.write(html)
}
document.write("</ul>") // close the list

let poodles = ["Batman", "Henry Cavill", "Dana", "Thorin"]
let index = 0
while (index < poodles.length) {
    let poodleName = poodles[index]
    console.log(index, poodleName)
    
    index += 1
    
    if (poodleName.length > 5) {
        continue
    } else {
        break
    }
}


let result = ""
for (let index = 0; index < poodles.length; index += 1) {
    let poodle = poodles[index]
    result += poodle

    let lastIndex = poodles.length - 1
    let secondToLastIndex = lastIndex - 1
    if (index < secondToLastIndex) {
        result += ", "
    } else if (index === secondToLastIndex) {
        result += ", and "
    }
}
console.log(result)



console.log("We've reached the end of the code. The loop has stopped.")