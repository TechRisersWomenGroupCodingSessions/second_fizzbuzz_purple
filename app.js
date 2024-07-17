function fizzbuzz(number) {
    try {
        let text = ""
        for (let i = 1; i <= number; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                text += 'FizzBuzz'
            } else if (i % 3 === 0) {
                test += 'Fizz'
            } else if (i % 5 === 0) {
                text += 'Buzz'
            } else {
                text += i.toString()
            }
            text += "\n"
        }
        text = text.trim()
        return text
    } catch (error) {
        console.log(error);
        console.error(error);
        console.log(".......");
        console.error("I stand out like a sore thumb")
        throw new Error('Lol, you messed up :P')
    }


}
module.exports = fizzbuzz;