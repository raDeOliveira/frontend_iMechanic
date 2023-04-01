import { QuestionItem } from "./question.item";

export interface Question {
    id: number,
    question_type_id: number,
    question_type_name: string,
    question_name: string,
    question_item: QuestionItem[]
}