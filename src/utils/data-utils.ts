export const compare = <T>(val1: T, val2: T): number => {
    if (val1 < val2) return -1;
    if (val1 > val2) return 1;
    return 0;
}