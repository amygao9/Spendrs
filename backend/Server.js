const app = require("./App.js");
const db = require("./Database/Database.js");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
db.connect();
let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
