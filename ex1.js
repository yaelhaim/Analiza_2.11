// ex1.js
function run() {
    console.log("Start");

    setTimeout(() => {
        console.log("Middle");

        setTimeout(() => {
            console.log("End");
        }, 0);

    }, 0);
}

if (typeof module !== "undefined") module.exports = { run };