const defaultOptions = {
    src: "./src",
    dest: "./dest",
    writeable: true
}

type Options = typeof defaultOptions;

function copy(options: Partial<Options>): void {
}

copy({
    src: ".", dest: "."
})