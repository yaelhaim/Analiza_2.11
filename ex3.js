// ex3.js
function run() {
    for (var i = 0; i < 3; i++) {
        (function(number) {
            setTimeout(() => console.log(number), 0);
        })(i);
    }
}

if (typeof module !== "undefined") module.exports = { run };