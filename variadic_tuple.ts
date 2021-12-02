

// NOTES
type PersonProps = [name: string, age: number];

const person: PersonProps = ["Stefan", 39];

declare function useState<T>(initial: T): [state: T, setState: (updated: T) => void]

const [count, setCount] = useState(0);
const [comments, setComments] = useState([]);

const [stefansName, stefansAge] = person

declare function useStateNotSoCool<T>(initial: T): {state: T, setState: (updated: T) => void}

const {state: count_2, setState: setCount_2} = useStateNotSoCool(0);

count_2

function hello(...[name, age]: PersonProps): string {
    return `Hello ${name}, you are ${age} years old`
}

hello("Stefan", 39)

function search(query: string): Promise<unknown>
function search(query: string, cb: (result: unknown) => void): void
function search(query: any, cb?: any): any {
    throw "todo"
}

search("leffe").then()
search("leffe", (res) => {

})

type SearchParams = 
    [query: string] | [query: string, cb: (result: unknown) => void]

type SearchReturn<T> = 
    T extends [query: string] ? Promise<unknown> : void;

function search_2<T extends SearchParams>(...args: T): SearchReturn<T> {
    throw "todo"
}

function h(...rest: (number |string)[]) {
    for(let el of rest) {
        console.log(el)
    }
} 

type StartsWithNumberEndsWithString = [number, ...unknown[], string]
const a: StartsWithNumberEndsWithString = [2, "Hello"]
const b: StartsWithNumberEndsWithString = [3, 2, 3, true, false, {}, [], "Oh my"]

type Foo<T extends unknown[]> = [number, ...T, string]

type T1 = Foo<[2, "Hello"]>
type T2 = Foo<[]>

type HasCallback<T extends unknown[]> = [number, ...T, (...args: any[]) => any];

declare function needsCallback<T extends unknown[]>(...args: HasCallback<T>): void

needsCallback(2, 3, 4, () => {});
needsCallback(2, () => {});
needsCallback(3, () => {});
needsCallback(3, "string", 2, 3, 4, () => {});