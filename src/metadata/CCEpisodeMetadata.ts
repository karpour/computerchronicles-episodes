export type CCEpisodeMetadata = {
    airingDate?: string;
    episodeYear?: number;
    reRunOf?: string;
    episodeNumber?: number;
    episodeTitle: string;
    guests: string[];
    featuredProducts: string[];
    tags: string[];
    possibleYears: number[];
    iaIdentifier?: string;
};
