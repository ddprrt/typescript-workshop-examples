// Discriminated unions
type Toy = {
    age: number,
    units: number
    name: string
}

type Puzzle = Toy & {
    pieces: number,
    brand: string,
    kind: "puzzle"
}

type Boardgame = Toy & {
    players: number,
    kind: "boardgame"
}

type Doll = Toy & {
    material: "plush" | "plastic"
    kind: "doll"
}

type Videogame = Toy & {
    system: "Sega Genesis" | "NES" | "SNES" | "No need for more"
    medium: "disc" | "cartridge"
    kind: "videogame"
}

type Toys = Boardgame | Puzzle | Doll | Videogame;

type ToyKind = Toys["kind"]; // Index Access Type


type SelectToy<Group, Kind extends ToyKind> = 
    Group extends { kind: Kind } ? Group : never;

type GroupedToys = {
    [K in ToyKind]: SelectToy<Toys, K>[] // Mapped Type
}

type GroupedToys2 = {
    [K in ToyKind]: Extract<Toys, { kind: K }>[] // Mapped Type
}

/*
SelectToy<Boardgame | Puzzle | Doll, "doll"> == 
    Boardgame extends { kind: "doll" } ? Boardgame : never |
    Puzzle extends { kind: "doll" } ? Puzzle : never |
    Doll extends { kind: "doll" } ? Doll : never

    never | never | Doll == 

    Doll 
*/

type Test = SelectToy<Toys, "puzzle">

function printToyGroups(groups: GroupedToys) {
    for(let el of groups.puzzle) {
        
    }
}

const toy: Toys = {
    age: 7,
    units: 1_000_000,
    name: "LEGO Creator Dinosaurs",
    pieces: 500,
    brand: "LEGO Creator",
    kind: "puzzle",
}

function assertNever(input: never) {
    throw new Error("Wait, what's happening???!?!" + JSON.stringify(input))
}

function printToy(toy: Toys) {
    switch(toy.kind) {
        case "puzzle":
            console.log("Have fun puzzling", toy)
            break;
        case "boardgame":
            console.log("Bored game or board game?", toy)
            break;
        case "doll":
            console.log(toy.kind, toy)
            break;
        case "videogame":
            console.log("We all love playing on the ", toy.system)
            break;
        default:
            assertNever(toy)
    }
}
