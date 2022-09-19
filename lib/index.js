const { db } = require("./db");
const PORT = process.env.PORT || 3000;
const app = require("./app");
const seed = require("../seed");

const init = async () => {
  try {
    if (process.env.SEED === "true") {
      await seed();
    } else {
      await db.sync();
    }
    app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

init();
