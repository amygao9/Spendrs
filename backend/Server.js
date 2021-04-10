const app = require("./App.js");
const db = require("./Database/Database.js");

require("dotenv").config();

db.connect();
let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
