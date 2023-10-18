const auth = (req, res, next) => {
    console.log("Auth Middleware");
    const num = 23;
    if (num > 18) {
        console.log("User Authorized!");
        next();
    }
    else {
        res.send("User Not Authorized");
    }
}

const auth2 = (req, res, next) => {
    console.log("Auth Middleware");
    const num = 17;
    if (num < 18) {
        console.log("User not Authorized!");
        res.send("User Not Authorized!");
    }
    else {
        console.log("User Authorized!");
        next();
    }
}

module.exports = { auth, auth2 };