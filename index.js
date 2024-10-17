// code your solution here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  


  
function mondayWork (activity = 'go to the office'){
return `This Monday, I will ${activity}.`;
}
/**
 * Function Definition: This code defines a function named mondayWork.

Default Parameter: The function takes one parameter called activity. It has a default value of 'go to the office'. This means if no argument is provided when calling the function, it will use this default value.

Template Literal: The function uses a template literal (denoted by backticks `) to create a string. This allows for easy insertion of variables or expressions into the string.

String Interpolation: Inside the template literal, ${activity} is used to insert the value of the activity parameter into the string.

Return Statement: The function returns the constructed string.
 */








function wrapAdjective(wrapper) {
    return function(adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }
  /**
   * Function Definition: The code defines a function called wrapAdjective that takes one parameter named wrapper.

Higher-Order Function: wrapAdjective is a higher-order function, which means it returns another function. This is a powerful concept in JavaScript that allows for more flexible and reusable code.

Returned Function: The function that wrapAdjective returns takes one parameter called adjective.

String Interpolation: Inside the returned function, a template literal (denoted by backticks ) is used to create a string. This string combines fixed text with the values of wrapper andadjective`.

Functionality: The purpose of this code is to create a customizable way to wrap adjectives in a given wrapper (like quotation marks, asterisks, etc.).


   */