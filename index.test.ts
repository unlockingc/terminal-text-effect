import ett from "./index.js";

let effect = ett.newEffect().setForegroundColorByRGB(50, 255, 0);

console.log(effect.parse("RGB(50,255,0) [need terminal support]"));

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
    .printAndReset("I'm blue but still strike and red", " yeah")
    .print("I have no effect");

console.log(ett.newEffect().foregroundColorBrightGreen().parse("green text"));
console.log("normal");

console.log(
    ett.newEffect().setForegroundColorByRGB(255, 255, 0).parse("blinkBold")
);
console.log(
    ett.newEffect().setForegroundColorByRGBHex("#ffff00").parse("blinkBold")
);

console.log(
    ett.newEffect().setForegroundColorBy256ColorMode(196).parse("blinkBold")
);

console.log(
    ett.newEffect().setBackgroundColorByRGB(255, 255, 0).parse("blinkBold")
);
console.log(
    ett.newEffect().setBackgroundColorByRGBHex("#FFFF00").parse("blinkBold")
);

console.log(
    ett.newEffect().setBackgroundColorBy256ColorMode(196).parse("blinkBold")
);

console.log(ett.newEffect().strike().bold().blinkSlowly().parse("blink"));
console.log(
    ett.newEffect().hide().parse("Good") +
        ett.newEffect().italic().overlined().parse("morning")
);

console.log();
test("hello world", () => {});
