// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    const username = req.body.username;
    const password = req.body.password;

    const admin = await Admin.findOne({
        username: username,
        password: password
    });
    if (admin) {
        res.json({
            msg: "Admin already exist with given credentials"
        });
    }
    else {

        next();
    }
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;