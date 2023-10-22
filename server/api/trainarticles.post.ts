import { LibSQLDatabase } from "drizzle-orm/libsql";
import { inArray } from "drizzle-orm";
import { trainarticles } from "~/drizzle/migrations/schema";
import { TrainArticle } from "~/drizzle/types";
import type { TrainArticleRequest } from "~/models/trainrequests";

async function searchByComponent(db: LibSQLDatabase, compNum: string[]) {
    const articles = await db.select()
        .from(trainarticles)
        .where(inArray(trainarticles.component, compNum));

    return articles as unknown as TrainArticle[];
}

export default defineEventHandler(async (event) => {
    const db = useTurso();
    const request = await readBody<TrainArticleRequest>(event);

    if (!request.component) {
        return new Response("Missing component number", { status: 400 });
    }

    return searchByComponent(db, request.component);
})