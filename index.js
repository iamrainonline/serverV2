const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
// setCookie
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
   res.cookie("cookie", "poftim_cookie");
   res.send({ you: "hello" });
});
app.post("/cookie", (req, res) => {
   res.cookie("cookie", "poftim_cookie");
   res.send("Cookie has been set");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, (req, res) => {
   console.log("listening on port", PORT);
});
