const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require('jsonwebtoken');
const { User } = require('../db/index');
const { Course } = require('../db/index');
const secretKey = '12345';

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    await User.create({
        username: username,
        password: password
    });
    res.json({
        msg: "User created successfully",
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signin logic
    const username = req.body.username;
    const password = req.body.password;
    if (await User.findOne({
        username: username,
        password: password
    })) {
        const payload = {
            username: username
        };
        const token = jwt.sign(payload, secretKey);
        res.json({
            token: token
        });
    }
    else {
        res.status(400).json({
            msg: "First create you account/signup"
        })
    }


});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try {
        const username = req.headers['username'];
        const password = req.headers['password'];
        if (await User.findOne({
            username: username,
            password: password
        })) {
            const course = await Course.find();
            res.json(course);
        }
        else {
            res.status(400).json({
                msg: "You do not have user access"
            });
        }
    }
    catch (err) {
        res.json({
            msg: "err while getting all the courses by user",
        });
    }

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try {
        const username = req.headers['username'];
        const password = req.headers['password'];
        const token = req.headers['Authorization'];
        const verification = await jwt.verify(token, secretKey, async (err, decoded) => {
            if (err) {
                res.json(400).json({
                    msg: "You do not have user access"
                });
            }
            else {
                const courseId = req.params.courseId;
                const course = await Course.findOneAndUpdate(
                    { _id: courseId },
                    { $set: { purchased: true } },
                    { new: true }
                )
                res.json({
                    msg: "Course purchased successfully",
                    course: course
                })
            }
        });



    }
    catch (err) {
        res.status(400).json({
            msg: "Error while purchasing the course",
        })
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try {
        const course = await Course.find({ purchased: true });
        res.json({
            msg: "list of purchased courses",
            course: course
        })
    }
    catch (err) {
        res.status(400).json({
            msg: "error while fetching purchased courses",
        });
    }
});

module.exports = router