import { ITranslationData } from "../actions/TranslationActions";
import { IFeedItem } from "../components/RecentFeed";

export const compare = <T>(val1: T, val2: T): number => {
    if (val1 < val2) return -1;
    if (val1 > val2) return 1;
    return 0;
}

export const formatTranslationsFeed = (translations: ITranslationData[], total: number = 3): IFeedItem[] => {
    return translations.slice(-total).map((translation: ITranslationData) => {
        return {
            date: translation.submissionTime.split(' ')[0],
            summary: formatSummary(translation)
        }
    });
}

const formatSummary = (translation: ITranslationData): string => (
    `${translation.user.name} added a translation to the ${translation.language.language} dictionary`
);