import ett from "./index.js";
let effect = ett.newEffect().setForegroundColorByRGB(50, 255, 0);
console.log(effect.parse("RGB(50,255,0) [need terminal support]"));
effect.setBackgroundColorByRGBHex("#00FFFF");
console.log(effect.parse("text: RGB(50,255,0), background: #00ffff "));
console.log(effect
    .strike()
    .bold()
    .red()
    .parse("add strike bold, change text color to red"));
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
console.log(ett.newEffect().setForegroundColorByRGB(255, 255, 0).parse("blinkBold"));
console.log(ett.newEffect().setForegroundColorByRGBHex("#ffff00").parse("blinkBold"));
console.log(ett.newEffect().setForegroundColorBy256ColorMode(196).parse("blinkBold"));
console.log(ett.newEffect().setBackgroundColorByRGB(255, 255, 0).parse("blinkBold"));
console.log(ett.newEffect().setBackgroundColorByRGBHex("#FFFF00").parse("blinkBold"));
console.log(ett.newEffect().setBackgroundColorBy256ColorMode(196).parse("blinkBold"));
console.log(ett.newEffect().strike().bold().blinkSlowly().parse("blink"));
console.log(ett.newEffect().hide().parse("Good") +
    ett.newEffect().italic().overlined().parse("morning"));
console.log();
test("hello world", () => { });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2luZGV4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxHQUFHLE1BQU0sWUFBWSxDQUFDO0FBRTdCLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRWpFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUM7QUFFbkUsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRTdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUM7QUFFdkUsT0FBTyxDQUFDLEdBQUcsQ0FDUCxNQUFNO0tBQ0QsTUFBTSxFQUFFO0tBQ1IsSUFBSSxFQUFFO0tBQ04sR0FBRyxFQUFFO0tBQ0wsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQzFELENBQUM7QUFFRixJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7QUFFOUIsT0FBTztLQUNGLEdBQUcsRUFBRTtLQUNMLGFBQWEsQ0FBQyxLQUFLLENBQUM7S0FDcEIsbUJBQW1CLEVBQUU7S0FDckIsYUFBYSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUM7S0FDcEMsS0FBSyxFQUFFO0tBQ1AsTUFBTSxFQUFFO0tBQ1IsYUFBYSxDQUFDLFFBQVEsQ0FBQztLQUN2QixXQUFXLEVBQUU7S0FDYixJQUFJLEVBQUU7S0FDTixLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUV2QyxNQUFNO0tBQ0QsS0FBSyxDQUFDLHlCQUF5QixFQUFFLFFBQVEsQ0FBQztLQUMxQyxJQUFJLEVBQUU7S0FDTixhQUFhLENBQUMsbUNBQW1DLEVBQUUsT0FBTyxDQUFDO0tBQzNELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRS9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUV0QixPQUFPLENBQUMsR0FBRyxDQUNQLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FDMUUsQ0FBQztBQUNGLE9BQU8sQ0FBQyxHQUFHLENBQ1AsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FDM0UsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQ1AsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FDM0UsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQ1AsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUMxRSxDQUFDO0FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FDUCxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUMzRSxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FDUCxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUMzRSxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FDUCxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNoQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUM1RCxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2QsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUMsQ0FBQyJ9