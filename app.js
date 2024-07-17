function fizzbuzz(number) {
    let text = ""
    for (let i=1; i <= number; i++) {
        if (i % 3 === 0) {
            text += 'Fizz'
        } else if (i % 5 === 0) {
            text += 'Buzz'
        } else {
        text += i.toString()
        }
        text += "\n"
    }
    text = text.trim()
    return text
  }
  module.exports = fizzbuzz;