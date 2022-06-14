var isValid = function (s) {
    const stack = [];

    // for (let i = 0; i < s.length; i += 1) {
    //     const prev = stack[stack.length - 1];
    //     const curr = s[i];

    //     if (prev && (prev === '(' && curr === ')') || (prev === '{' && curr === '}') || (prev === '[' && curr === ']')) {
    //         stack.pop();
    //         continue;
    //     }
    //     stack.push(curr);
    // }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "{") {
            stack.push("}");
        } else if (s[i] === "[") {
            stack.push("]");
        } else if (s[i] === "(") {
            stack.push(")");
        } else if (s[i] !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
};
console.log(isValid('(){}[]'))