exports.calculate = function(expression) {
  // Split the expression into tokens
  const tokens = expression.split(" ");

  // Define a recursive helper function to evaluate the expression
  const evaluate = (tokens) => {
    const token = tokens.shift();

    if (token === "+") {
      const operand1 = evaluate(tokens);
      const operand2 = evaluate(tokens);
      return operand1 + operand2;
    } else if (token === "-") {
      const operand1 = evaluate(tokens);
      const operand2 = evaluate(tokens);
      return operand1 - operand2;
    } else if (token === "*") {
      const operand1 = evaluate(tokens);
      const operand2 = evaluate(tokens);
      return operand1 * operand2;
    } else if (token === "/") {
      const operand1 = evaluate(tokens);
      const operand2 = evaluate(tokens);
      return operand1 / operand2;
    } else {
      // The token is a number, parse and return it
      return parseInt(token);
    }
  };
   kimpa kisanagmeni

  // Call the evaluate function with the tokens and return the result
  return evaluate(tokens);
};

