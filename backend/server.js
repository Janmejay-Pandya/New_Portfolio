const express = require('express');
const app = express();
const port = 3000;
const connectDb = require('./utils/db');
const contactRoute = require("./router/contact-router");
const cors = require('cors');

const corsOption = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD ",
    credentials: true,
};
app.use(cors(corsOption));
app.use(express.json());
app.use("/api/auth", contactRoute);

connectDb().then(() => {
    app.listen(port, () => {
        console.log("Server started on port", port);
    });
});