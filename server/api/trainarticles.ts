import { trainarticles } from "~/drizzle/schema";
import { useDb } from "#imports";

export default defineEventHandler(async (event) => {
    const db = useDb();
})
