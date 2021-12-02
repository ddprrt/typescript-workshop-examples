function identity<T>(arg: T): T {
    return arg;
}

const z = identity("Thank you Louis, for checking");

type URLList = {
    [K in string]: URL
}

const videoFormats = {
    "format4k": new URL(""),
    "format1080p": new URL("")
}

const bestArticlesOnFettblog = {
    "1": new URL("Low maintenance types"),
    "2": new URL("Union to Intersection Type")
}

type LoadedDocument<T extends string | number | symbol> = {
    [K in T]: string
}

function loadFormats<
    Formats extends URLList,
    Key extends keyof Formats
>(list: Formats, key: Key): LoadedDocument<Key> {
    return "" as any as LoadedDocument<Key>; // ignore this
}

const zz = loadFormats(videoFormats, "format4k")
