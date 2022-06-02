export type CCEpisodeMetadata = {
    episodeNumber: number;
    description: string;
    title: string;
    host: CCPerson;
    coHosts: CCPerson[];
    guests: CCPerson;
    featuredProducts: CCProduct[];
    locations: CCLocation[];
    productionDate?: Date;
    originalAiringDate?: Date;
    tags: string[];
    iaIdentifier?: string;

}

export type CCLocation = {
    location: string;
    name: string;
}

export type CCProduct = {
    company: string;
    name: string;
}

export type CCPerson = {
    name: string
    occupation: string,
}