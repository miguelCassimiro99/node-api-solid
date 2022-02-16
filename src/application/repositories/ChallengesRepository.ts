import {Challenge} from "../../domain/entitites/challenge";

export interface ChallengesRepository {
    findById(id: string): Promise<Challenge | null>;
}
