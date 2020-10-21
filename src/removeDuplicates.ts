export default function removeDuplicates<T>(array: T[]): T[] {
    return Array.from(new Set(array));
}
