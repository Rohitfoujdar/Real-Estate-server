import SES from "aws-sdk/clients/ses.js";
import S3 from "aws-sdk/clients/s3.js";
import dotenv from "dotenv"
dotenv.config();
// import NodeGeocoder from "node-geocoder"

export const DATABASE ="mongodb+srv://kickrtechnology1:H5KDvPmkjj52qrjr@realstate.qmvjt.mongodb.net/?retryWrites=true&w=majority&appName=realstate";

export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_ID

export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_KEY

export const EMAIL_FROM = '"Realist"<rohitfoujdar8696@gmail.com>';

export const REPLY_TO = "rohitfoujdar8696@gmail.com";

const awsConfig = {
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: "eu-north-1",
  acl: 'public-read',
  apiVersion: "2010-12-01",
};

export const AWSSES = new SES(awsConfig);
export const AWSS3 = new S3(awsConfig);

// const options = {
//   provider: 'google',
//   apiKey: 'AIzaSyBsjVPC3VpGqj0GU6H1tuZ6AF0MR5Hh-q8', // for Mapquest, OpenCage, APlace, Google Premier
//   formatter: null 
// };

// export const GOOGLE_GEOCODER = NodeGeocoder(options);
export const JWT_SECRET = "FOUJDAR123";

export const CLIENT_URL = "http://localhost:3000";
