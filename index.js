const app = require("./app");
const db = require("./database/database");
const config = require("./config");
app.set("port",config.port);
app.listen(app.get("port"),()=>{
    console.log("app listening on port " + app.get("port"));
})