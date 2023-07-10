

export const checkNumValidity = (num: number) => {
    if (isNaN(num) || !isFinite(num)) return 0;
    return num;
};


export const sort = (arr: string[]) => {
    if (!Array.isArray(arr)) return []
    const regex = /[\D]+/g;
    return arr.sort((a, b) => checkNumValidity(Number(a.replace(regex, ''))) - checkNumValidity(Number(b.replace(regex, ''))));
}


export const paginate = ({ data, max, count }: { data: string[], max: number, count: number }) => {
    const newData: string[][] = [];
    if (!Array.isArray(data) || !checkNumValidity(max) || !checkNumValidity(count)) return []

    for (let i = 0; i < max; i++) {
        const start = i * count;
        const end = start + count;

        newData.push(sort(data).filter((item, index) => index >= start && index < end));
    }
    return newData
}