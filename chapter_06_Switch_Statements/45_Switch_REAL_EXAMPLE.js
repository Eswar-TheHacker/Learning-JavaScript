// You are working API Validation
// Response Code - 200, 404, 401, 403......404


let responseCode = 400;

switch (responseCode) {
    case 200:
        console.log("OK - Request was successful");
        break;
    case 404:
        console.log("Not Found - The requested resource could not be found");
        break;
    case 401:
        console.log("Unauthorized - Authentication is required and has failed or has not yet been provided");
        break;
    case 403:
        console.log("Forbidden - The server understood the request but refuses to authorize it");
        break;
    case 400:
        console.log("Bad Request - The server could not understand the request due to invalid syntax");
        break;
    case 500:
        console.log("Internal Server Error - The server encountered an unexpected condition that prevented it from fulfilling the request");
        break;
    default:
        console.log("Unknown response code");

}