//Error Handling In Js
//try Catch In Js


try {
    const a = 10; // Use `const` since `a` is not reassigned
    if (a > 10) {
        console.log("Your statement is correct");
    } else {
        throw new Error(`Condition failed: ${a} is not greater than 10`); // Template literal for error message
    }
} catch (error) {
    console.log(`Caught an error: ${error}`); // Use console.error for better visibility
}
