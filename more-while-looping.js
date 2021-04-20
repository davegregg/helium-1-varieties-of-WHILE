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

console.log("We've reached the end of the code. The loop has stopped.")