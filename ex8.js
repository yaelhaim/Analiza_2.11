function run() {
    const steps = ["Step 1", "Step 2", "Step 3"];

    for (var i = 0; i < steps.length; i++) {
        (function(index) {
            setTimeout(() => {
                setMessage(steps[index]);
                addLine(steps[index]);

                if (index === steps.length - 1) {
                    setMessage("Done!");
                    addLine("Done!");
                }
            }, 10 * (index + 1));
        })(i);
    }
}

if (typeof module !== "undefined") module.exports = { run };