import { EffectedTerminalText as ett } from "./index.js";

test("hello world", () => {});

let effect = ett.newEffect().setForegroundColorByRGB(50, 255, 0);

console.log(effect.parse("effected text"));

effect.strike().bold().foregroundColorRed();

console.log(effect.parse("updated effected text"));

effect
    .print("asda", "asdas", "asdas")
    .blue()
    .printAndReset("asdas", "asda", "blue")
    .print("asfasfgsfa");

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
