let isLoggedIn = true;
let userRole = "editor";


if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("admin can do all the things");
    } else if (userRole === "editor") {
        console.log("Welcome Editor - Edit access Granted.");
    } else if (userRole === "viewer") {
        console.log("Welcome Viewer - Read Only access.");
    } else {
        console.log("No Idea which role you are !");
    }
} else {
    console.log("You are not logged in!!");

}