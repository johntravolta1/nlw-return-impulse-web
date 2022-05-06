import express from "express"
import { prisma } from "./prisma";
import nodemailer from 'nodemailer'
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import { PrimsaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { NodeMailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
    const {type, comment, screenshot} = req.body

    const prismaFeedbackRepository = new PrimsaFeedbacksRepository()
    const nodemailerMailAdapter = new NodeMailerMailAdapter()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbackRepository, nodemailerMailAdapter)

    await submitFeedbackUseCase.execute({
        type,comment,screenshot
    })



    return res.status(201).send()
})