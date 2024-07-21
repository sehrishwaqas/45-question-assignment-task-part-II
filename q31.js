let userGroup = ["Admin", "shehryar", "Hassan", "Ali", "Mirha"];
if (userGroup.length == 0) {
    console.log("We need to find some users");
}
else {
    userGroup.forEach((userGroup) => {
        if (userGroup == "Admin") {
            console.log(`Hello, ${userGroup} would you like to check the status of the report?`);
        }
        else {
            console.log(`Hello, ${userGroup} thank you for login again.`);
        }
    });
}
let userGroup1 = [];
if (userGroup1.length == 0) {
    console.log("We need to find some users");
}
else {
    userGroup1.forEach((userGroup1) => {
        if (userGroup1 == "Admin") {
            console.log(`Hello, ${userGroup1} would you like to check the status of the report?`);
        }
        else {
            console.log(`Hello, ${userGroup1} thank you for login again.`);
        }
    });
}
export {};
