// ex7.js
function loadUser(callback) {
    setTimeout(() => callback("Dana"), 30);
}

function loadOrders(callback) {
    setTimeout(() => callback(3), 10);
}

function run() {
    let user;
    let orders;
    loadUser((name) => {
        user = name;

        if (orders !== undefined) {
            console.log("User: " + user);
            console.log("Orders: " + orders);
        }
    });

    loadOrders((count) => {
        orders = count;

        if (user !== undefined) {
            console.log("User: " + user);
            console.log("Orders: " + orders);
        }
    });
}

if (typeof module !== "undefined") module.exports = { run };