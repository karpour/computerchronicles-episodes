
export function dateToYYYYMMDD(date: Date) {
    return date.toISOString().substring(0, 10);
}
