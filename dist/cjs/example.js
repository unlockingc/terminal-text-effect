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
console.log(effect.strike().bold().red().parse("add strike bold, change text color to red"));
let effect1 = index_js_1.default.newEffect();
effect1
    .red().bufferToPrint("red")
    .backgroundColorBlue().bufferToPrint("bg blue", "text red")
    .reset().yellow().bufferToPrint("yellow")
    .commitPrint()
    .bold().print("bold yellow another line");
effect
    .print("I'm strike bold and red", "me too")
    .blue()
    .printAndReset("I'm blue but still strike and red", " yeah")
    .print("I have no effect");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2V4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwREFBNkI7QUFFN0IsSUFBSSxNQUFNLEdBQUcsa0JBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRWxFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7QUFFcEUsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRTdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUM7QUFFdkUsT0FBTyxDQUFDLEdBQUcsQ0FDUCxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQ2xGLENBQUM7QUFFRixJQUFJLE9BQU8sR0FBRyxrQkFBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBRTlCLE9BQU87S0FDRixHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO0tBQzFCLG1CQUFtQixFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUM7S0FDMUQsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztLQUN4QyxXQUFXLEVBQUU7S0FDYixJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUU5QyxNQUFNO0tBQ0QsS0FBSyxDQUFDLHlCQUF5QixFQUFFLFFBQVEsQ0FBQztLQUMxQyxJQUFJLEVBQUU7S0FDTixhQUFhLENBQUMsbUNBQW1DLEVBQUUsT0FBTyxDQUFDO0tBQzNELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDIn0=