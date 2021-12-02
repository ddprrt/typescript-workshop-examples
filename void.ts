// Substitutability and void

function doNothing() {

}

const what_is_it = doNothing();

function doSomething(callback: (status: number, result: unknown[]) => void) {
    let callback_result = callback(404, [])
}

let is_it_a_number = void 2;

function does_it_return_something(): void {
    // return 2; // this breaks
}

doSomething((status) => {
    return 2
})


// void: Not that we are returning no return value, we just don't care about it. TypeScript drops it.

// Excess property checking

type Dog = {
    breed: string,
    age: number,
    name: string
}

function printDog(dog: Dog) {
    
}

const doggie = {
    breed: "Golden Retriever",
    age: 7,
    name: "good boy",
    owner: "Stefan Baumgartner"
}

printDog(doggie);

printDog({
    breed: "Golden Retriever",
    age: 7,
    name: "good boy",
    // owner: "Stefan Baumgartner" // this errors
})