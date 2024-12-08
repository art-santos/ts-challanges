type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    return args.length
};




const s = argumentsLength({}, null, "3"); // 3
console.log("🚀 ~ s:", s)


