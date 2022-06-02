import iaMetadata, { IAMetadata } from "./metadata/IAEpisodeMetadata";
import { ProcessedIAMetadata, processIAItems } from "./IAProcessor";
import tvdbMetadata, { TVDBMetadata } from "./metadata/TVDBMetadata";
import joinObjectArrays from "./joinObjectArrays";
import removeDuplicates from "./removeDuplicates";
import moment from "moment";
import dateToYYYYMMDD from "./dateToYYYYMMDD";
import escapeCsvString from "./escapeCsvString";

type IA_TVDB_MergedMetadata = (ProcessedIAMetadata & TVDBMetadata);

type SpreadSheetEntry = {
    iaIdentifier: string,
    iaUrl: string,
    youtubeUrl: string;
    status: string;
    episodeNumber: string;
    reRunOf: string;
    isReRun: string,
    title: string;
    description: string;
    iaDescription: string;
    airingDate: string;
    possibleDates: string;
    coHost: string;
    guests: string;
    featuredProducts: string;
    tags: string;
};

function getEpisodeNumber(item: TVDBMetadata) {
    const r = /^S(\d\d)E(\d\d)$/;
    let result = r.exec(item.tvdb_episode);
    if (result) {
        return Number(`${result[1]}${result[2]}`);
    }
    throw new Error(`Cannot parse ${item.tvdb_episode}`);
}

let tvdbDict: { [key: string]: TVDBMetadata; } = {};

tvdbMetadata.forEach(item => {
    let id = item.ia_identifier;
    if (id) {
        if (tvdbDict[id] == undefined) {
            tvdbDict[id] = item;
        } else {
            if (!item.tvdb_title.startsWith("REPEAT")) {
                console.log(`===== Duplicate =====`);
                console.log(tvdbDict[id]);
                console.log(item);
            }
        }
    }
});

function filterForeignLanguageItems(items: IAMetadata[]) {
    return items.filter(item => !(item.ia_title.endsWith("Spanish") || item.ia_title.endsWith("French") || item.ia_title.endsWith("Arabic") || item.ia_identifier.startsWith("randomaccess")));
}

let iaItems = processIAItems(iaMetadata);

let mergedMetadata = joinObjectArrays(tvdbMetadata, iaItems, (a, b) => a.ia_identifier == b.ia_identifier);


let takenIdentifiers = mergedMetadata.map(item => item.ia_identifier);
let leftOverData = iaItems.filter(item => !takenIdentifiers.includes(item.ia_identifier));

let completeMetadata: IA_TVDB_MergedMetadata[] = [...mergedMetadata, ...leftOverData] as IA_TVDB_MergedMetadata[];

function parseTVDBDate(tvdb_date: string): Date {
    return moment.utc(tvdb_date, "MMMM DD, YYYY").toDate();
}

function process(data: IA_TVDB_MergedMetadata[]): SpreadSheetEntry[] {
    return data.map(item => {
        let title: string = "";
        let description: string = "";
        let iaDescription: string = item.ia_description ?? "";

        let episodeNumber: string = "";

        if (item.tvdb_episode) {
            episodeNumber = String(getEpisodeNumber(item));
        } else if (item.episode_number) {
            episodeNumber = String(item.episode_number);
        }


        let possibleDates: string[] = [];
        if (item.airing_date) possibleDates.push(item.airing_date);
        if (item.tvdb_copyright) possibleDates.push(`${item.tvdb_copyright}`);
        if (item.possible_years) possibleDates.push(...item.possible_years.map(year => String(year)));

        let date: string = "";
        if (item.tvdb_date) date = dateToYYYYMMDD(parseTVDBDate(item.tvdb_date));

        let airingDate = "";
        if (item.tvdb_date) {
            airingDate = dateToYYYYMMDD(parseTVDBDate(item.tvdb_date));
        } else if (item.airing_date) {
            airingDate = item.airing_date;
        }

        let isRerun: boolean = false;
        if (item.tvdb_episode) {
            title = item.tvdb_title;
            if (title.startsWith("REPEAT")) isRerun = true;
            description = item.tvdb_description ?? "FIXME";

            if (!isRerun && item.ia_title && item.ia_title != title) {
                title = `FIXME ${title} OR ${item.ia_title}`;
            }
        }

        let out: SpreadSheetEntry = {
            iaIdentifier: item.ia_identifier ?? "",
            iaUrl: "",
            youtubeUrl: "",
            status: "unknown",
            title: title,
            description: description,
            iaDescription: iaDescription,
            episodeNumber: episodeNumber,
            airingDate: airingDate,
            possibleDates: possibleDates.join(', '),
            reRunOf: "",
            isReRun: isRerun ? "TRUE" : "FALSE",
            coHost: "",
            guests: item.tvdb_guests ?? "",
            featuredProducts: item.tvdb_demos ?? "",
            tags: item.tags ? item.tags.join(', ') : "",
        };
        return out;
    });
}

let columns = ["iaIdentifier", "iaUrl", "youtubeUrl", "status", "episodeNumber", "isReRun","reRunOf",  "title", "description", "iaDescription", "airingDate", "possibleDates", "coHost", "guests", "featuredProducts", "tags"];

function toCsvRow(item: SpreadSheetEntry): string {
    let items: string[] = [];
    columns.forEach(column => {
        items.push(escapeCsvString((item as any)[column]));
    });
    return items.join(",");
}

//console.log(columns.join(','))
process(completeMetadata).map(toCsvRow).forEach(item => console.log(item));