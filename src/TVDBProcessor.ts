import { CCEpisodeMetadata } from "./metadata/CCEpisodeMetadata";
import iaMetadata from "./metadata/InternetArchiveMetadata";
import removeDuplicates from "./removeDuplicates";
import tvdb_eps, { TVDBMetadata } from "./TVDBMetadata";

export function processTVDBItems(items: TVDBMetadata[]): CCEpisodeMetadata[] {
    let iaProcessed: CCEpisodeMetadata[] = [];
    items.forEach(item=>processTVDBItem(item,iaProcessed));
    return iaProcessed;
}

export function processTVDBItem(item: TVDBMetadata, output: CCEpisodeMetadata[]) {
    if(!item.tvdb_is_repeat) console.log(item.tvdb_episode + ' ' + (item.ia_identifier ? item.ia_identifier : ''));
    return [];
}

let tvdb_ids = tvdb_eps.filter(item=>item.ia_identifier2);
console.log(tvdb_ids);