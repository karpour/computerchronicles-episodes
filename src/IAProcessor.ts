import { CCEpisodeMetadata } from "./CCEpisodeMetadata";
import iaMetadata, { IAMetadata } from "./InternetArchiveMetadata";
import { dateToYYYYMMDD } from "./dateToYYYYMMDD";

export function processIAItems(items: IAMetadata[]): CCEpisodeMetadata[] {
    let iaProcessed: CCEpisodeMetadata[] = [];
    items.forEach(item => processIAItem(item, iaProcessed));
    return iaProcessed;
}

export function processIAItem(item: IAMetadata, output: CCEpisodeMetadata[]) {
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
    let episodeYear: number | undefined;
    if (date) {
        episodeYear = date.getFullYear();
    } else if (years.length == 1) {
        episodeYear = years[0];
    }

    let possibleYears: number[] = years.length > 1 ? years : [];

    let out: CCEpisodeMetadata = {
        iaIdentifier: item.ia_identifier,
        airingDate: date ? dateToYYYYMMDD(date) : undefined,
        episodeNumber: item.episodeNumber,
        episodeTitle: item.ia_title,
        episodeYear: episodeYear,
        possibleYears: possibleYears,
        featuredProducts: [],
        guests: [],
        tags: tags,
    };

    console.log(out);
    output.push(out);
}
