import ett from "./index.js";
let effect = ett.newEffect().setForegroundColorByRGB(255, 255, 0);
console.log(effect.parse("RGB(255,255,0) [need terminal support]"));
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
    .printAndReset("I'm blue but still strike", " yeah")
    .print("I have no effect");
function error(...args) {
    return (ett
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2V4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxHQUFHLE1BQU0sWUFBWSxDQUFDO0FBQzdCLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRWxFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7QUFFcEUsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRTdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUM7QUFFdkUsT0FBTyxDQUFDLEdBQUcsQ0FDUCxNQUFNO0tBQ0QsTUFBTSxFQUFFO0tBQ1IsSUFBSSxFQUFFO0tBQ04sR0FBRyxFQUFFO0tBQ0wsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQzFELENBQUM7QUFFRixJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7QUFFOUIsT0FBTztLQUNGLEdBQUcsRUFBRTtLQUNMLGFBQWEsQ0FBQyxLQUFLLENBQUM7S0FDcEIsbUJBQW1CLEVBQUU7S0FDckIsYUFBYSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUM7S0FDcEMsS0FBSyxFQUFFO0tBQ1AsTUFBTSxFQUFFO0tBQ1IsYUFBYSxDQUFDLFFBQVEsQ0FBQztLQUN2QixXQUFXLEVBQUU7S0FDYixJQUFJLEVBQUU7S0FDTixLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUV2QyxNQUFNO0tBQ0QsS0FBSyxDQUFDLHlCQUF5QixFQUFFLFFBQVEsQ0FBQztLQUMxQyxJQUFJLEVBQUU7S0FDTixhQUFhLENBQUMsMkJBQTJCLEVBQUUsT0FBTyxDQUFDO0tBQ25ELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRS9CLFNBQVMsS0FBSyxDQUFDLEdBQUcsSUFBVztJQUN6QixPQUFPLENBQ0gsR0FBRztTQUNFLFNBQVMsRUFBRTtRQUNaLFlBQVk7U0FDWCxhQUFhLENBQUMsTUFBTSxDQUFDO1NBQ3JCLEtBQUssRUFBRTtTQUNQLGtCQUFrQixFQUFFO1NBQ3BCLGFBQWEsQ0FBQyxPQUFPLENBQUM7U0FDdEIsS0FBSyxFQUFFO1NBQ1AsR0FBRyxFQUFFO1NBQ0wsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3RCLFdBQVcsRUFBRSxDQUNyQixDQUFDO0FBQ04sQ0FBQztBQUVELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDIn0=