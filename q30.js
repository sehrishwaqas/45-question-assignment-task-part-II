let userGroup = ["Admin", "shehryar", "Hassan", "Ali", "Mirha"];
console.log(userGroup);
userGroup.forEach((userGroup) => {
    if (userGroup == "Admin") {
        console.log(`Hello, ${userGroup} would you like to check the status of the report?`);
    }
    else {
        console.log(`Hello, ${userGroup} thank you for login again.`);
    }
});
export {};
