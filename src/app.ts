import express from "express";
import prisma from "./db/db";

const PORT = parseInt(process.env.PORT ?? "3000", 10);
const HOST = process.env.HOST ?? "localhost";

const app = express();
