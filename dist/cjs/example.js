"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("./index.js"));
let effect = index_js_1.default.newEffect().setForegroundColorByRGB(255, 255, 0);
console.log(effect.parse("RGB(255,255,0) [need terminal support]"));
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
    .printAndReset("I'm blue but still strike", " yeah")
    .print("I have no effect");
function error(...args) {
    return (index_js_1.default
        .newEffect()
        // .yellow()
        .bufferToPrint("TIME")
        .white()
        .backgroundColorRed()
        .bufferToPrint("ERROR")
        .reset()
        .red()
        .bufferToPrint(...args)
        .commitPrint());
}
error("An error message");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2V4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwREFBNkI7QUFDN0IsSUFBSSxNQUFNLEdBQUcsa0JBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRWxFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7QUFFcEUsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRTdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUM7QUFFdkUsT0FBTyxDQUFDLEdBQUcsQ0FDUCxNQUFNO0tBQ0QsTUFBTSxFQUFFO0tBQ1IsSUFBSSxFQUFFO0tBQ04sR0FBRyxFQUFFO0tBQ0wsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQzFELENBQUM7QUFFRixJQUFJLE9BQU8sR0FBRyxrQkFBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBRTlCLE9BQU87S0FDRixHQUFHLEVBQUU7S0FDTCxhQUFhLENBQUMsS0FBSyxDQUFDO0tBQ3BCLG1CQUFtQixFQUFFO0tBQ3JCLGFBQWEsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDO0tBQ3BDLEtBQUssRUFBRTtLQUNQLE1BQU0sRUFBRTtLQUNSLGFBQWEsQ0FBQyxRQUFRLENBQUM7S0FDdkIsV0FBVyxFQUFFO0tBQ2IsSUFBSSxFQUFFO0tBQ04sS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFFdkMsTUFBTTtLQUNELEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxRQUFRLENBQUM7S0FDMUMsSUFBSSxFQUFFO0tBQ04sYUFBYSxDQUFDLDJCQUEyQixFQUFFLE9BQU8sQ0FBQztLQUNuRCxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUUvQixTQUFTLEtBQUssQ0FBQyxHQUFHLElBQVc7SUFDekIsT0FBTyxDQUNILGtCQUFHO1NBQ0UsU0FBUyxFQUFFO1FBQ1osWUFBWTtTQUNYLGFBQWEsQ0FBQyxNQUFNLENBQUM7U0FDckIsS0FBSyxFQUFFO1NBQ1Asa0JBQWtCLEVBQUU7U0FDcEIsYUFBYSxDQUFDLE9BQU8sQ0FBQztTQUN0QixLQUFLLEVBQUU7U0FDUCxHQUFHLEVBQUU7U0FDTCxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDdEIsV0FBVyxFQUFFLENBQ3JCLENBQUM7QUFDTixDQUFDO0FBRUQsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMifQ==