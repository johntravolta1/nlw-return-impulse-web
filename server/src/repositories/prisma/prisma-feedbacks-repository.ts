import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrimsaFeedbacksRepository implements FeedbacksRepository {
    async create({type,comment,screenshot}: FeedbackCreateData): Promise<void> {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        })
    }
}