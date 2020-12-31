const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Asks for name of user
rl.question("What is your name? ", function(name) {
    // Replies with name of user
    console.log(`Well hello ${name}!`)
    // Asks for question from user
    rl.question("What question would you like the magic eight ball to answer? ", function(question) {
        console.log('The eight ball says:')
        // Selects random number from 1 to 7 and assigns this value to num
        let num = Math.floor(Math.random()*8)

        if (num === 0) {
            console.log('It is certain')
        }

        else if (num === 1) {
            console.log('It is decidly so')
        }

        else if (num === 2) {
            console.log('Reply hazy, try again')
        }

        else if (num === 3) {
            console.log('Cannot predict now')
        }

        else if (num === 4) {
            console.log('Do not count on it')
        }

        else if (num === 5) {
            console.log('My sources say no')
        }

        else if (num === 6) {
            console.log('Outlook not so good')
        }

        else if (num === 7) {
            console.log('Signs point to yes')
        };

        rl.close();
    });
});

rl.on("close", function() {
    console.log("Goodbye.");
    process.exit(0);
});

