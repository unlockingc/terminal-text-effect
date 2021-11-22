import { EffectedTerminalText as ett } from "./index.js";
test("hello world", () => { });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2luZGV4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLG9CQUFvQixJQUFJLEdBQUcsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV6RCxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDO0FBRTlCLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRWpFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBRTNDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBRTVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7QUFFbkQsTUFBTTtLQUNELEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztLQUMvQixJQUFJLEVBQUU7S0FDTixhQUFhLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7S0FDdEMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUV0QixPQUFPLENBQUMsR0FBRyxDQUNQLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FDMUUsQ0FBQztBQUNGLE9BQU8sQ0FBQyxHQUFHLENBQ1AsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FDM0UsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQ1AsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FDM0UsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQ1AsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUMxRSxDQUFDO0FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FDUCxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUMzRSxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FDUCxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUMzRSxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FDUCxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNoQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUM1RCxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDIn0=