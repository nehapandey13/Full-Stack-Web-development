const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin } = require("../db/index")
const { Course } = require("../db/index")


// Admin Routes
router.post('/signup', adminMiddleware, async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password,
    });

    res.json({
        msg: "Admin created successfully",
    })




});

router.post('/courses', async (req, res) => {
    // Implement course creation logic
    try {
        const username = req.headers['username'];
        const password = req.headers['password'];
        const title = req.body.title;
        const description = req.body.description;
        const price = req.body.price;
        const image = req.body.image;
        const purchased = req.body.purchased;

        if (await Admin.findOne({
            username: username,
            password: password
        })) {
            // console.log("this");
            const course = await Course.create({
                title: title,
                description: description,
                price: price,
                image: image,
                purchased: purchased
            });
            console.log(course);

            res.json({
                msg: "course created successflly"
            });
        }
        else {
            res.status(400).json({
                msg: "You dont have admin access",
            })
        }


    }
    catch (err) {
        res.status(400).json({
            msg: "error while creating course"
        });
    }


});

router.get('/courses', async (req, res) => {
    // Implement fetching all courses logic
    try {
        const username = req.headers['username'];
        const password = req.headers['password'];

        if (await Admin.findOne({
            username: username,
            passsword: password
        })) {
            const course = await Course.find();
            res.status(200).json({
                msg: "All course list",
                courses: course
            });
        }
        else {
            res.status(400).json({
                msg: "You do not have admin access"
            })
        }

    }
    catch (err) {
        res.json({
            msg: "error while getiing courses",
        });
    }

});

module.exports = router;