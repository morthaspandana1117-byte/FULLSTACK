require('dotenv').config();

const port = process.env.PORT;
const appName = process.env.APP_NAME;
console.log(`${appName} running on port ${port}`);