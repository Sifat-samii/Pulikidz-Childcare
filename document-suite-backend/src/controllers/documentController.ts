import { Request, Response } from "express";
import AWS from "aws-sdk";
import prisma from "../utils/prisma";

const s3 = new AWS.S3({ region: process.env.AWS_REGION });

export const uploadDocument = async (req: Request, res: Response) => {
    const file = req.file;
    if (!file) return res.status(400).send("No file uploaded");

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: `${Date.now()}_${file.originalname}`,
        Body: file.buffer,
    };

    try {
        const result = await s3.upload(params).promise();
        const document = await prisma.document.create({
            data: { name: file.originalname, url: result.Location },
        });
        res.status(201).send(document);
    } catch (error) {
        res.status(500).send("Upload failed");
    }
};
