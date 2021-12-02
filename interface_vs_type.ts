export interface IPerson {
    name: string;
    age: number;
}

type AllCreatures = TPerson | {
    name: string;
    dogBreed: string;
}

export interface WorkingPerson extends IPerson {
    profession: string;
}

type TWorkingPerson = AllCreatures & {
    profession: string;
}

type TPerson = {
    name: string;
    age: number;
}


