const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
const mongoose = require('mongoose');
// Middleware for parsing request bodies
mongoose.connect('mongodb+srv://nehapandey13:Luvumapapa@cluster1.fhejeqb.mongodb.net/').then(() => {
    console.log("DB Connected bro chill");
});
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
