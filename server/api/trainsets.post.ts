import { TrainSet } from "~/drizzle/schema";
import { TrainSetRequest } from "~/models/trainrequests";

export default defineEventHandler(async (event: TrainSetRequest) => {
    const db = useTurso();
})
