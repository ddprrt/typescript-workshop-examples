// Type Format String Args using string template literal types and conditional types

type FormatStringArgs<T extends string> = 
    T extends `${string}{${infer Param}}${infer Rest}` ? 
        Param | FormatStringArgs<Rest> : never;

/*
${string}{${infer Param}}${string             }
  Hello  {  name        }  you are {years} old ==> "name"

${string }{${infer Param}}${string}
  you are {  years       }  ==> "years"

${string}{${infer Param}}${infer Rest}
old ==> never
*/

type X = FormatStringArgs<"Hello {name} you are {years} old">

declare function format<T extends string>(
    formatString: T, args: Record<FormatStringArgs<T>, unknown>): string

format("Hello {name}, you are {years} old {ok}", {
	name: "Stefan",
	years: 39,
    ok: ""
})