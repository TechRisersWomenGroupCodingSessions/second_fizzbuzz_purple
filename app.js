function fizzbuzz(number) {
    let text = ""
    for (let i=1; i <= number; i++) {
        text += i.toString()
        text += "\n"
    }
    text = text.trim()
    return text
  }
  module.exports = fizzbuzz;