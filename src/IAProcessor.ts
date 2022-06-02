
import iaMetadata, { IAMetadata } from "./metadata/IAEpisodeMetadata";
import dateToYYYYMMDD from "./dateToYYYYMMDD";
import removeDuplicates from "./removeDuplicates";

export type ProcessedIAMetadata = {
    airing_date?: string;
    ia_description?: string;
    ia_title: string;
    episode_number?: number;
    episode_title: string;
    tags: string[];
    possible_years: number[];
    ia_identifier: string;
};



export function processIAItems(items: IAMetadata[]): ProcessedIAMetadata[] {
    let iaProcessed: ProcessedIAMetadata[] = [];
    items.forEach(item => processIAItem(item, iaProcessed));
    return iaProcessed;
}

export function processIAItem(item: IAMetadata, output: ProcessedIAMetadata[]) {
    let tags: string[] = [];

    if (item.ia_title.endsWith("Spanish") || item.ia_title.endsWith("French") || item.ia_title.endsWith("Arabic") || item.ia_identifier.startsWith("randomaccess"))
        return;

    let date: Date | undefined = item.ia_proddate ? new Date(item.ia_proddate) : undefined;
    //console.log(`${item.ia_identifier} | ${item.ia_title}`);
    if (item.ia_subject) {
        tags = item.ia_subject.split(/;\s?/).filter(item => item);
    }

    let years: number[] = tags.filter(tag => tag.startsWith("Episode year: ")).map(tag => parseInt(tag.split(":")[1]));
    tags = tags.filter(tag => !tag.startsWith("Episode year:"));
    if (item.ia_year)
        years.push(item.ia_year);
    if (item.ia_broadcastyear)
        years.push(item.ia_broadcastyear);
    // Remove duplicates
    years = removeDuplicates(years);

    if (date && years.length) {
        if (years.length == 1 && years[0] == date.getFullYear())
            years = [];
        years = years.filter(year => year != date!.getFullYear());
    }

    //console.log(`${item.ia_identifier} | ${item.ia_title}`);

    let out: ProcessedIAMetadata = {
        ia_identifier: item.ia_identifier,
        ia_description: item.ia_description,
        airing_date: date ? dateToYYYYMMDD(date) : undefined,
        episode_number: item.episodeNumber,
        episode_title: item.ia_title,
        possible_years: years,
        tags: tags,
        ia_title: item.ia_title,
    };

    //console.log(out);
    output.push(out);
}
