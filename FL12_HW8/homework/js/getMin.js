function getMin () {
    let minNumber = arguments[0];
    let wantedArguments = arguments.length;

    for ( let i = 0; i < wantedArguments; i++) {
        if (arguments[i] < minNumber) {
            minNumber = arguments[i];
        }
    } return minNumber
} getMin(3, 0, -3);