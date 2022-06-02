/**
 * Adds quotation marks to a string as necessary for use in CSV files
 * @param str string to quote
 */


export default function escapeCsvString(str: string): string {
    if (str.includes(",") || str.includes("\"") || str.includes("\r") || str.includes("\n")) {
        let outString = "\"";
        for (const c of str) {
            outString = outString + c;
            if (c == '"')
                outString = outString + "\"";
        }
        outString = outString + "\"";
        return outString;
    }
    return str;
}
