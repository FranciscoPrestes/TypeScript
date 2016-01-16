// @declaration: true
// @noImplicitAny: true

interface Map<T> {
    [x: string]: number;
}

interface Option {
    // Intentionally omitting "boolean".
    kind: "string" | "number" | Map<number>;
}

declare const boolVal1: boolean;
declare const boolVal2: boolean;

let option1: Option;

let option2: Option = {
    kind: boolVal1
            ? "string"
            : boolVal2
                ? "number"
                : ({} as Map<number>)
};

let option3 = {
    kind: boolVal1
            ? "string"
            : boolVal2
                ? "number"
                : ({} as Map<number>)
};

option1 = option2;
option1 = option3;

option2 = option1;
option2 = option3;

option3 = option2;
option3 = option3;