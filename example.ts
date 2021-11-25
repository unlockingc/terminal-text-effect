import ett from "./index.js";
let effect = ett.newEffect().setForegroundColorByRGB(255, 255, 0);

console.log(effect.parse("RGB(255,255,0) [need terminal support]"));

effect.setBackgroundColorByRGBHex("#00FFFF");

console.log(effect.parse("text: RGB(50,255,0), background: #00ffff "));

console.log(
    effect
        .strike()
        .bold()
        .red()
        .parse("add strike bold, change text color to red")
);

let effect1 = ett.newEffect();

effect1
    .red()
    .bufferToPrint("red")
    .backgroundColorBlue()
    .bufferToPrint("bg blue", "text red")
    .reset()
    .yellow()
    .bufferToPrint("yellow")
    .commitPrint()
    .bold()
    .print("bold yellow another line");

effect
    .print("I'm strike bold and red", "me too")
    .blue()
    .printAndReset("I'm blue but still strike", " yeah")
    .print("I have no effect");

function error(...args: any[]) {
    return (
        ett
            .newEffect()
            // .yellow()
            .bufferToPrint("TIME")
            .white()
            .backgroundColorRed()
            .bufferToPrint("ERROR")
            .reset()
            .red()
            .bufferToPrint(...args)
            .commitPrint()
    );
}

error("An error message");
