
type AnyFn = (...arg: any[]) => any;

type InferArguments<T> = 
    T extends (...t: [...infer Args, AnyFn]) => any ? Args : never;

type InferCallbackResults<T> = 
    T extends (...t: [...infer Args, (res: infer Res) => any]) => any ? Res : never;

function promisify<
    Fun extends AnyFn
>(f: Fun): (...args: InferArguments<Fun>) => Promise<InferCallbackResults<Fun>> {
    return function(...args: InferArguments<Fun>) {
      return new Promise((resolve) => {
        function callback(result: InferCallbackResults<Fun>) {
          resolve(result)
        }
        args.push(callback);
        f.call(null, ...args)
      })
    }
  }
  
  declare function load(file: string, encoding: string, callback: (result: string) => void): void
  
  const loadAsync = promisify(load);
  
  loadAsync("./text.md", "utf-8").then(res => {
      console.log(res.toUpperCase())
  })
  
  type Messages = 'open' | 'write' | 'end' | 'error'
  declare function on(msg: Messages, callback: (msg: { type: Messages, content: string}) => void): void
  
  const onAsync = promisify(on)
  onAsync("open").then(res => {
      console.log(res.content);
  })

  declare function httpCall(url: URL, cb: (result: Response) => void): void;

  const httpCallAsync = promisify(httpCall);
  httpCallAsync(new URL("https://fettblog.eu")).then(result => {
      return result.json()
  })