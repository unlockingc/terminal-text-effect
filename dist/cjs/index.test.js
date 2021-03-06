"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("./index.js"));
let effect = index_js_1.default.newEffect().setForegroundColorByRGB(50, 255, 0);
console.log(effect.parse("RGB(50,255,0) [need terminal support]"));
effect.setBackgroundColorByRGBHex("#00FFFF");
console.log(effect.parse("text: RGB(50,255,0), background: #00ffff "));
console.log(effect
    .strike()
    .bold()
    .red()
    .parse("add strike bold, change text color to red"));
let effect1 = index_js_1.default.newEffect();
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
console.log(index_js_1.default.newEffect().foregroundColorBrightGreen().parse("green text"));
console.log("normal");
console.log(index_js_1.default.newEffect().setForegroundColorByRGB(255, 255, 0).parse("blinkBold"));
console.log(index_js_1.default.newEffect().setForegroundColorByRGBHex("#ffff00").parse("blinkBold"));
console.log(index_js_1.default.newEffect().setForegroundColorBy256ColorMode(196).parse("blinkBold"));
console.log(index_js_1.default.newEffect().setBackgroundColorByRGB(255, 255, 0).parse("blinkBold"));
console.log(index_js_1.default.newEffect().setBackgroundColorByRGBHex("#FFFF00").parse("blinkBold"));
console.log(index_js_1.default.newEffect().setBackgroundColorBy256ColorMode(196).parse("blinkBold"));
console.log(index_js_1.default.newEffect().strike().bold().blinkSlowly().parse("blink"));
console.log(index_js_1.default.newEffect().hide().parse("Good") +
    index_js_1.default.newEffect().italic().overlined().parse("morning"));
console.log();
test("hello world", () => { });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2luZGV4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwREFBNkI7QUFFN0IsSUFBSSxNQUFNLEdBQUcsa0JBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRWpFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUM7QUFFbkUsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRTdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUM7QUFFdkUsT0FBTyxDQUFDLEdBQUcsQ0FDUCxNQUFNO0tBQ0QsTUFBTSxFQUFFO0tBQ1IsSUFBSSxFQUFFO0tBQ04sR0FBRyxFQUFFO0tBQ0wsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQzFELENBQUM7QUFFRixJQUFJLE9BQU8sR0FBRyxrQkFBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBRTlCLE9BQU87S0FDRixHQUFHLEVBQUU7S0FDTCxhQUFhLENBQUMsS0FBSyxDQUFDO0tBQ3BCLG1CQUFtQixFQUFFO0tBQ3JCLGFBQWEsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDO0tBQ3BDLEtBQUssRUFBRTtLQUNQLE1BQU0sRUFBRTtLQUNSLGFBQWEsQ0FBQyxRQUFRLENBQUM7S0FDdkIsV0FBVyxFQUFFO0tBQ2IsSUFBSSxFQUFFO0tBQ04sS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFFdkMsTUFBTTtLQUNELEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxRQUFRLENBQUM7S0FDMUMsSUFBSSxFQUFFO0tBQ04sYUFBYSxDQUFDLG1DQUFtQyxFQUFFLE9BQU8sQ0FBQztLQUMzRCxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUUvQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUM5RSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQ1Asa0JBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FDMUUsQ0FBQztBQUNGLE9BQU8sQ0FBQyxHQUFHLENBQ1Asa0JBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQzNFLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUNQLGtCQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUMzRSxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FDUCxrQkFBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUMxRSxDQUFDO0FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FDUCxrQkFBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FDM0UsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQ1Asa0JBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQzNFLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FDUCxrQkFBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDaEMsa0JBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQzVELENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDZCxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDIn0=