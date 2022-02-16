import {Student} from "../../domain/entitites/student";

export interface StudentsRepository {
    findById(id: string): Promise<Student | null>;
}
