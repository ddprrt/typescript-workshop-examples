type NumberLabel = {
    id: number
}

type NamedLabel = {
    name: string
}

type Person = {
    name: string,
    age: number
}

// and example that can get out of hand
function createLabel(id: number): NumberLabel
function createLabel(name: string): NamedLabel
function createLabel(person: Person): NamedLabel
function createLabel(idOrName: string | Person): NamedLabel
function createLabel(idOrName: number | string | Person): NumberLabel | NamedLabel
function createLabel(idOrName: any): any {
    throw "todo"
}

const me = {
    name: "Stefan",
    age: 39
}

createLabel(2)
createLabel("Stefan")
declare const nameorIdorPerson: number | string | Person;

// better createLabel
type LabelType<T extends string | number | Person> = 
    T extends number ? NumberLabel : NamedLabel

function createBetterLabel<T extends string | number | Person>(input: T): LabelType<T> {
    throw "todo"
}

const l_1 = createBetterLabel(2)
const l_2 = createBetterLabel("Stefan")
const l_3 = createBetterLabel(me);
const l_4 = createBetterLabel(nameorIdorPerson)