import { config } from "dotenv";
config();

export const PORT = 'mongodb://notesdb4:t7qjkqowkEABBs3GelbGnvObKo09UKDH3ShmvNxSy8dM3G3eDZI6vPLk1aS9mQz5Lf2x0IZxC0Fl2mmXW1Tocg%3D%3D@notesdb4.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@notesdb4@' || 4000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/notesdb";
