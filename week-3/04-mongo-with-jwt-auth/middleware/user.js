async function userMiddleware(req, res, next) {
    // Implement user auth logic
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({
        username: username,
        password: password
    });

    if (user) {
        res.json({
            msg: "User already exist",
        })
    }
    else {
        next();
    }

    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;