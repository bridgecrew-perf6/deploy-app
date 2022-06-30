const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.DEFAULT_REGION,
  endpoint: process.env.END_POINT_DDB_CONSOLE,
});

const dynamoDB = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient({ convertEmptyValues: true });

exports.docClient = docClient;
exports.dynamoDB = dynamoDB;
