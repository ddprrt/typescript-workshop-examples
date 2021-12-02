/* We definitely want to include Headers like:
- Cookie
- Accept
- Authorization
- Cache-Control
- Accept-language
- Accept-Encoding
- Host
- From
- Referer
- User-Agent
- Upgrade

Plus Custom Headers
*/

/*
Tip:
Record<string, string> allows for every string key
*/

/*
Step 1: Refactor HTTPCalll, QueueEvent, Chrono into union & intersection types
Step 2: Collect all in an Event union
Step 3: Make method and headers from HTTPCall clearer (e.g. using value types for methods)
Step 4: Find a proper type for payload (which can be any object)

*/

type Event = {
    callId: number
    invocation: Date
}

type DefaultHTTPHeaders = "Cookie" | "Accept" | "Authorization" | "Cache-Control" | "Accept-language" | "Accept-Encoding" | "Host" | "From" | "Referer" | "User-Agent" | "Upgrade";

type Headers = {
    readonly [K in DefaultHTTPHeaders | `X-${string}`]?: string;
}

type HTTPCall = Event & {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEADER"
    headers: Headers
    params: Record<string, string>
    path: string
    kind: "http"
}

type QueueEvent = Event & {
    queue: string
    payload: Record<string, unknown>
    kind: "queue"
}

type Chrono = Event & {
    trigger: Date
    task: string
    kind: "chrono"
}

type Events = HTTPCall | QueueEvent | Chrono // TODO: As a union type 

export function handler(event: Events) {
    switch(event.kind) {
        case "chrono":
            break;
        case "http":
            break;
        case "queue":
            break;
        default: 
            event
    }
}