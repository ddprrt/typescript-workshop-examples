type CallbackFn<T extends string> = (req: Record<ExtractRouteParams<T>, string>) => void

function get<T extends string>(path: T, callback: CallbackFn<T>): void {

}

type ExtractRouteParams<T extends string> = 
    T extends `${string}/:${infer Param}/${infer Rest}` 
        ? Param | ExtractRouteParams<`/${Rest}`> :
    T extends `${string}/:${infer Param}` ? Param : never;


// any ⊃ string ⊃ ??? ⊃ "userId" | "orderId" ⊃ "userId" ⊃ never

get("/profiles/:userId", (req) => {
    req.userId
})

get("/:userId", (req) => {
    req.userId
})


get("/profiles/:userId/orders/:orderId", (req) => {
    req.orderId
    req.userId
})


// Notes

type CustomHeader = `X-${string}`

const header: CustomHeader = "X-NGBE-Workshop-Header"
//const wrong_header: CustomHeader = "Accept"

type Events<T extends string> = {
    [K in T]: `on${Capitalize<K>}`
}

type Tst = Events<"changed" | "keypress" | "mousemove">

function createEvent<T extends string>(event: T): Events<T> {
    throw "todo"
}

type Trim<T extends string> =
    T extends ` ${infer Trimmed}` ? Trim<Trimmed> :
    T extends `${infer Trimmed} ` ? Trim<Trimmed> :
    T extends `${infer Trimmed}` ? Trimmed : never;

type Trimmed = Trim<"      hellloo      ">
