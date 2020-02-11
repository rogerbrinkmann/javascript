const no_argument_function = function () {
    return 'This is the output of a function that takes no argument:'
}

const argument_function = function (x) {
    return 'This is the output of a function that takes one argument: ' + x;
}

const no_argument_function_short_hand = () => {
    return 'This is the output of a short hand function that takes no argument: ';
}

const one_argument_function_short_hand = x => {
    return 'This is the output of a short hand function that takes one argument: ' + x;
}

const two_argument_function_short_hand = (x, y) => {
    return 'This is the output of a short hand function that takes two argument: ' + x * y;
}

document.write('<p>' + no_argument_function() + '</p>');
document.write('<p>' + argument_function(1) + '</p>');
document.write('<p>' + no_argument_function_short_hand() + '</p>');
document.write('<p>' + one_argument_function_short_hand(2) + '</p>');
document.write('<p>' + two_argument_function_short_hand(3, 4) + '</p>');
