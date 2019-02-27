import { IUserData } from "./UserActions";

export interface INarrativeData {
    audio: string
    title: string
    language: string
    transcription?: string
    user: IUserData
    submissionTime: string
}