const express = require('express');

const port = 3000;
const server = express();

server.use(express.urlencoded());
server.use(express.json());

const user = require("./routes/userRoute");
const admin = require("./routes/adminRoute");
const tt = require("./routes/tableTipsRoute");
const tp = require("./routes/tipsPaymentRoute");
const rt = require("./routes/restaurantTableRoute");
const service = require("./routes/serviceRoute");
const su = require("./routes/serviceUserRoute");

user(server);
admin(server);
tt(server);
tp(server);
rt(server);
service(server);
su(server);

server.listen(port, () => {
    console.log(`Server running on ${port}`);
}
);