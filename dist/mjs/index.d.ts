export declare namespace EffectedTerminalText {
    export const CONTROL_SEQUENCE_INTRODUCER = "\u001B[";
    export const SGR_FUNC_NAME = "m";
    class EffectedText {
        #private;
        constructor();
        reset(): EffectedText;
        bold(): EffectedText;
        faintDecreasedIntensityOrDim(): EffectedText;
        italic(): EffectedText;
        underline(): EffectedText;
        blinkSlowly(): EffectedText;
        blinkRapidly(): EffectedText;
        reverse(): EffectedText;
        hide(): EffectedText;
        strike(): EffectedText;
        primaryFont(): EffectedText;
        gothic(): EffectedText;
        doublyUnderlinedOrNotBold(): EffectedText;
        normalIntensity(): EffectedText;
        neitherItalicNorBlackLetter(): EffectedText;
        notUnderlined(): EffectedText;
        notBlinking(): EffectedText;
        proportionalSpacing(): EffectedText;
        notReversed(): EffectedText;
        reveal(): EffectedText;
        notStrike(): EffectedText;
        black(): EffectedText;
        red(): EffectedText;
        green(): EffectedText;
        yellow(): EffectedText;
        blue(): EffectedText;
        magenta(): EffectedText;
        cyan(): EffectedText;
        white(): EffectedText;
        foregroundColorBlack(): EffectedText;
        foregroundColorRed(): EffectedText;
        foregroundColorGreen(): EffectedText;
        foregroundColorYellow(): EffectedText;
        foregroundColorBlue(): EffectedText;
        foregroundColorMagenta(): EffectedText;
        foregroundColorCyan(): EffectedText;
        foregroundColorWhite(): EffectedText;
        colorByRGB(r: number, g: number, b: number): EffectedText;
        colorByRGBHex(code: string): EffectedText;
        colorBy256ColorMode(code: number): EffectedText;
        setForegroundColorByRGB(r: number, g: number, b: number): EffectedText;
        setForegroundColorByRGBHex(code: string): EffectedText;
        setForegroundColorBy256ColorMode(code: number): EffectedText;
        defaultForegroundColor(): EffectedText;
        backgroundColorBlack(): EffectedText;
        backgroundColorRed(): EffectedText;
        backgroundColorGreen(): EffectedText;
        backgroundColorYellow(): EffectedText;
        backgroundColorBlue(): EffectedText;
        backgroundColorMagenta(): EffectedText;
        backgroundColorCyan(): EffectedText;
        backgroundColorWhite(): EffectedText;
        setBackgroundColorByRGB(r: number, g: number, b: number): EffectedText;
        setBackgroundColorByRGBHex(code: string): EffectedText;
        setBackgroundColorBy256ColorMode(code: number): EffectedText;
        defaultBackgroundColor(): EffectedText;
        disableProportionalSpacing(): EffectedText;
        framed(): EffectedText;
        encircled(): EffectedText;
        overlined(): EffectedText;
        neitherFramedNorEncircled(): EffectedText;
        notOverlined(): EffectedText;
        setUnderlineColor(): EffectedText;
        defaultUnderlineColor(): EffectedText;
        ideogramUnderlineOrRightSideLine(): EffectedText;
        ideogramDoubleUnderlineOrDoubleLineOnTheRightSide(): EffectedText;
        ideogramOverlineOrLeftSideLine(): EffectedText;
        ideogramDoubleOverlineOrDoubleLineOnTheLeftSide(): EffectedText;
        ideogramStressMarking(): EffectedText;
        noIdeogramAttributes(): EffectedText;
        superscript(): EffectedText;
        subscript(): EffectedText;
        neitherSuperscriptNorSubscript(): EffectedText;
        foregroundColorBrightBlack(): EffectedText;
        foregroundColorBrightRed(): EffectedText;
        foregroundColorBrightGreen(): EffectedText;
        foregroundColorBrightYellow(): EffectedText;
        foregroundColorBrightBlue(): EffectedText;
        foregroundColorBrightMagenta(): EffectedText;
        foregroundColorBrightCyan(): EffectedText;
        foregroundColorBrightWhite(): EffectedText;
        backgroundColorBrightBlack(): EffectedText;
        backgroundColorBrightRed(): EffectedText;
        backgroundColorBrightGreen(): EffectedText;
        backgroundColorBrightYellow(): EffectedText;
        backgroundColorBrightBlue(): EffectedText;
        backgroundColorBrightMagenta(): EffectedText;
        backgroundColorBrightCyan(): EffectedText;
        backgroundColorBrightWhite(): EffectedText;
        parse(str: string): string;
        parseAndReset(str: string): string;
        print(...args: any[]): EffectedText;
        printAndReset(...args: any[]): EffectedText;
    }
    export function newEffect(): EffectedText;
    export {};
}
export default EffectedTerminalText;
