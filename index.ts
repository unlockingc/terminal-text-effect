export namespace EffectedTerminalText {
    const CONTROL_SEQUENCE_INTRODUCER = "\x1b[";
    const SGR_FUNC_NAME = "m";

    enum SGR {
        reset = "0",
        bold = "1",
        faintDecreasedIntensityOrDim = "2",
        italic = "3",
        underline = "4",
        blinkSlowly = "5",
        blinkRapidly = "6",
        reverse = "7",
        hide = "8",
        strike = "9",
        primaryFont = "10",
        gothic = "20",
        doublyUnderlinedOrNotBold = "21",
        normalIntensity = "22",
        neitherItalicNorBlackLetter = "23",
        notUnderlined = "24",
        notBlinking = "25",
        proportionalSpacing = "26",
        notReversed = "27",
        reveal = "28",
        notStrike = "29",
        foregroundColorBlack = "30",
        foregroundColorRed = "31",
        foregroundColorGreen = "32",
        foregroundColorYellow = "33",
        foregroundColorBlue = "34",
        foregroundColorMagenta = "35",
        foregroundColorCyan = "36",
        foregroundColorWhite = "37",
        setForegroundColor = "38",
        defaultForegroundColor = "39",
        backgroundColorBlack = "40",
        backgroundColorRed = "41",
        backgroundColorGreen = "42",
        backgroundColorYellow = "43",
        backgroundColorBlue = "44",
        backgroundColorMagenta = "45",
        backgroundColorCyan = "46",
        backgroundColorWhite = "47",
        setBackgroundColor = "48",
        defaultBackgroundColor = "49",
        disableProportionalSpacing = "50",
        framed = "51",
        encircled = "52",
        overlined = "53",
        neitherFramedNorEncircled = "54",
        notOverlined = "55",
        setUnderlineColor = "58",
        defaultUnderlineColor = "59",
        ideogramUnderlineOrRightSideLine = "60",
        ideogramDoubleUnderlineOrDoubleLineOnTheRightSide = "61",
        ideogramOverlineOrLeftSideLine = "62",
        ideogramDoubleOverlineOrDoubleLineOnTheLeftSide = "63",
        ideogramStressMarking = "64",
        noIdeogramAttributes = "65",
        superscript = "73",
        subscript = "74",
        neitherSuperscriptNorSubscript = "75",
        foregroundColorBrightBlack = "90",
        foregroundColorBrightRed = "91",
        foregroundColorBrightGreen = "92",
        foregroundColorBrightYellow = "93",
        foregroundColorBrightBlue = "94",
        foregroundColorBrightMagenta = "95",
        foregroundColorBrightCyan = "96",
        foregroundColorBrightWhite = "97",
        backgroundColorBrightBlack = "100",
        backgroundColorBrightRed = "101",
        backgroundColorBrightGreen = "102",
        backgroundColorBrightYellow = "103",
        backgroundColorBrightBlue = "104",
        backgroundColorBrightMagenta = "105",
        backgroundColorBrightCyan = "106",
        backgroundColorBrightWhite = "107",
    }

    export class EffectedText {
        constructor() {}

        #controlSequence: string = "";

        #addResetTag(): string {
            return CONTROL_SEQUENCE_INTRODUCER + SGR.reset + SGR_FUNC_NAME;
        }

        reset(): EffectedText {
            this.#controlSequence = "";
            return this;
        }

        bold(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.bold + SGR_FUNC_NAME;
            return this;
        }
        faintDecreasedIntensityOrDim(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.faintDecreasedIntensityOrDim +
                SGR_FUNC_NAME;
            return this;
        }
        italic(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.italic + SGR_FUNC_NAME;
            return this;
        }
        underline(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.underline + SGR_FUNC_NAME;
            return this;
        }
        blinkSlowly(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.blinkSlowly + SGR_FUNC_NAME;
            return this;
        }
        blinkRapidly(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.blinkRapidly + SGR_FUNC_NAME;
            return this;
        }
        reverse(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.reverse + SGR_FUNC_NAME;
            return this;
        }
        hide(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.hide + SGR_FUNC_NAME;
            return this;
        }
        strike(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.strike + SGR_FUNC_NAME;
            return this;
        }
        primaryFont(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.primaryFont + SGR_FUNC_NAME;
            return this;
        }
        gothic(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.gothic + SGR_FUNC_NAME;
            return this;
        }
        doublyUnderlinedOrNotBold(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.doublyUnderlinedOrNotBold +
                SGR_FUNC_NAME;
            return this;
        }
        normalIntensity(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.normalIntensity +
                SGR_FUNC_NAME;
            return this;
        }
        neitherItalicNorBlackLetter(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.neitherItalicNorBlackLetter +
                SGR_FUNC_NAME;
            return this;
        }
        notUnderlined(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.notUnderlined + SGR_FUNC_NAME;
            return this;
        }
        notBlinking(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.notBlinking + SGR_FUNC_NAME;
            return this;
        }
        proportionalSpacing(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.proportionalSpacing +
                SGR_FUNC_NAME;
            return this;
        }
        notReversed(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.notReversed + SGR_FUNC_NAME;
            return this;
        }
        reveal(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.reveal + SGR_FUNC_NAME;
            return this;
        }
        notStrike(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.notStrike + SGR_FUNC_NAME;
            return this;
        }

        black(): EffectedText {
            return this.foregroundColorBlack();
        }

        red(): EffectedText {
            return this.foregroundColorRed();
        }

        green(): EffectedText {
            return this.foregroundColorGreen();
        }

        yellow(): EffectedText {
            return this.foregroundColorYellow();
        }

        blue(): EffectedText {
            return this.foregroundColorBlue();
        }

        magenta(): EffectedText {
            return this.foregroundColorMagenta();
        }

        cyan(): EffectedText {
            return this.foregroundColorCyan();
        }

        white(): EffectedText {
            return this.foregroundColorWhite();
        }

        foregroundColorBlack(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBlack +
                SGR_FUNC_NAME;
            return this;
        }

        foregroundColorRed(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorRed +
                SGR_FUNC_NAME;
            return this;
        }
        foregroundColorGreen(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorGreen +
                SGR_FUNC_NAME;
            return this;
        }
        foregroundColorYellow(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorYellow +
                SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBlue(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBlue +
                SGR_FUNC_NAME;
            return this;
        }
        foregroundColorMagenta(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorMagenta +
                SGR_FUNC_NAME;
            return this;
        }
        foregroundColorCyan(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorCyan +
                SGR_FUNC_NAME;
            return this;
        }
        foregroundColorWhite(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorWhite +
                SGR_FUNC_NAME;
            return this;
        }

        colorByRGB(r: number, g: number, b: number): EffectedText {
            return this.setBackgroundColorByRGB(r, g, b);
        }

        colorByRGBHex(code: string): EffectedText {
            return this.setForegroundColorByRGBHex(code);
        }

        colorBy256ColorMode(code: number): EffectedText {
            return this.setForegroundColorBy256ColorMode(code);
        }

        setForegroundColorByRGB(r: number, g: number, b: number): EffectedText {
            function prepareValidNumber(arg: number): string {
                if (isNaN(arg) || arg == undefined || arg == null) {
                    return "0";
                }
                arg = arg % 256;
                return Math.floor(arg).toString();
            }

            // this.#controlSequence +=
            //     CONTROL_SEQUENCE_INTRODUCER + "38;2;255;0;0m";
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.setForegroundColor +
                ";2;" +
                prepareValidNumber(r) +
                ";" +
                prepareValidNumber(g) +
                ";" +
                prepareValidNumber(b) +
                SGR_FUNC_NAME;
            return this;
        }

        setForegroundColorByRGBHex(code: string): EffectedText {
            function RGBFromHex(code: string): [number, number, number] {
                let reg =
                    /^#([\dabcdefABCDEF]{2})([\dabcdefABCDEF]{2})([\dabcdefABCDEF]{2})$/;
                if (!code.match(reg)) {
                    return [0, 0, 0];
                } else {
                    return [
                        parseInt("0x" + code.slice(1, 3)),
                        parseInt("0x" + code.slice(3, 5)),
                        parseInt("0x" + code.slice(5)),
                    ];
                }
            }
            let rtn = RGBFromHex(code);
            return this.setForegroundColorByRGB(rtn[0], rtn[1], rtn[2]);
        }

        setForegroundColorBy256ColorMode(code: number): EffectedText {
            function prepareValidNumber(arg: number): string {
                if (isNaN(arg) || arg == undefined || arg == null) {
                    return "0";
                }
                arg = arg % 256;
                return Math.floor(arg).toString();
            }
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.setForegroundColor +
                ";5;" +
                prepareValidNumber(code) +
                SGR_FUNC_NAME;
            return this;
        }

        defaultForegroundColor(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.defaultForegroundColor +
                SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBlack(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBlack +
                SGR_FUNC_NAME;
            return this;
        }
        backgroundColorRed(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorRed +
                SGR_FUNC_NAME;
            return this;
        }
        backgroundColorGreen(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorGreen +
                SGR_FUNC_NAME;
            return this;
        }
        backgroundColorYellow(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorYellow +
                SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBlue(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBlue +
                SGR_FUNC_NAME;
            return this;
        }
        backgroundColorMagenta(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorMagenta +
                SGR_FUNC_NAME;
            return this;
        }
        backgroundColorCyan(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorCyan +
                SGR_FUNC_NAME;
            return this;
        }
        backgroundColorWhite(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorWhite +
                SGR_FUNC_NAME;
            return this;
        }

        setBackgroundColorByRGB(r: number, g: number, b: number): EffectedText {
            function prepareValidNumber(arg: number): string {
                if (isNaN(arg) || arg == undefined || arg == null) {
                    return "0";
                }
                arg = arg % 256;
                return Math.floor(arg).toString();
            }
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.setBackgroundColor +
                ";2;" +
                prepareValidNumber(r) +
                ";" +
                prepareValidNumber(g) +
                ";" +
                prepareValidNumber(b) +
                SGR_FUNC_NAME;
            return this;
        }

        setBackgroundColorByRGBHex(code: string): EffectedText {
            function RGBFromHex(code: string): [number, number, number] {
                let reg =
                    /^#([\dabcdefABCDEF]{2})([\dabcdefABCDEF]{2})([\dabcdefABCDEF]{2})$/;
                if (!code.match(reg)) {
                    return [0, 0, 0];
                } else {
                    return [
                        parseInt("0x" + code.slice(1, 3)),
                        parseInt("0x" + code.slice(3, 5)),
                        parseInt("0x" + code.slice(5)),
                    ];
                }
            }
            let rtn = RGBFromHex(code);
            return this.setBackgroundColorByRGB(rtn[0], rtn[1], rtn[2]);
        }

        setBackgroundColorBy256ColorMode(code: number): EffectedText {
            function prepareValidNumber(arg: number): string {
                if (isNaN(arg) || arg == undefined || arg == null) {
                    return "0";
                }
                arg = arg % 256;
                return Math.floor(arg).toString();
            }
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.setBackgroundColor +
                ";5;" +
                prepareValidNumber(code) +
                SGR_FUNC_NAME;
            return this;
        }

        defaultBackgroundColor(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.defaultBackgroundColor +
                SGR_FUNC_NAME;
            return this;
        }
        disableProportionalSpacing(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.disableProportionalSpacing +
                SGR_FUNC_NAME;
            return this;
        }
        framed(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.framed + SGR_FUNC_NAME;
            return this;
        }
        encircled(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.encircled + SGR_FUNC_NAME;
            return this;
        }
        overlined(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.overlined + SGR_FUNC_NAME;
            return this;
        }
        neitherFramedNorEncircled(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.neitherFramedNorEncircled +
                SGR_FUNC_NAME;
            return this;
        }
        notOverlined(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.notOverlined + SGR_FUNC_NAME;
            return this;
        }
        setUnderlineColor(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.setUnderlineColor +
                SGR_FUNC_NAME;
            return this;
        }
        defaultUnderlineColor(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.defaultUnderlineColor +
                SGR_FUNC_NAME;
            return this;
        }
        ideogramUnderlineOrRightSideLine(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.ideogramUnderlineOrRightSideLine +
                SGR_FUNC_NAME;
            return this;
        }
        ideogramDoubleUnderlineOrDoubleLineOnTheRightSide(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.ideogramDoubleUnderlineOrDoubleLineOnTheRightSide +
                SGR_FUNC_NAME;
            return this;
        }
        ideogramOverlineOrLeftSideLine(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.ideogramOverlineOrLeftSideLine +
                SGR_FUNC_NAME;
            return this;
        }
        ideogramDoubleOverlineOrDoubleLineOnTheLeftSide(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.ideogramDoubleOverlineOrDoubleLineOnTheLeftSide +
                SGR_FUNC_NAME;
            return this;
        }
        ideogramStressMarking(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.ideogramStressMarking +
                SGR_FUNC_NAME;
            return this;
        }
        noIdeogramAttributes(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.noIdeogramAttributes +
                SGR_FUNC_NAME;
            return this;
        }
        superscript(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.superscript + SGR_FUNC_NAME;
            return this;
        }
        subscript(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.subscript + SGR_FUNC_NAME;
            return this;
        }
        neitherSuperscriptNorSubscript(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.neitherSuperscriptNorSubscript +
                SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightBlack(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightBlack +
                SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightRed(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightRed +
                SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightGreen(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightGreen +
                SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightYellow(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightYellow +
                SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightBlue(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightBlue +
                SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightMagenta(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightMagenta +
                SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightCyan(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightCyan +
                SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightWhite(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightWhite +
                SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightBlack(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightBlack +
                SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightRed(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightRed +
                SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightGreen(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightGreen +
                SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightYellow(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightYellow +
                SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightBlue(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightBlue +
                SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightMagenta(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightMagenta +
                SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightCyan(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightCyan +
                SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightWhite(): EffectedText {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightWhite +
                SGR_FUNC_NAME;
            return this;
        }

        parse(str: string): string {
            let rtn = this.#controlSequence + str + this.#addResetTag();
            return rtn;
        }

        parseAndReset(str: string): string {
            let rtn = this.#controlSequence + str + this.#addResetTag();
            this.#controlSequence = "";
            return rtn;
        }

        print(...args: any[]): EffectedText {
            console.log(this.#controlSequence, ...args, this.#addResetTag());
            return this;
        }

        printAndReset(...args: any[]): EffectedText {
            this.print(...args);
            this.reset();
            return this;
        }

        #messageBuffer: any[] = [];
        bufferToPrint(...args: any[]): EffectedText {
            this.#messageBuffer = this.#messageBuffer.concat([
                this.#controlSequence,
                ...args,
                this.#addResetTag(),
            ]);
            return this;
        }

        commitPrint(): EffectedText {
            console.log(...this.#messageBuffer);
            this.#messageBuffer = [];
            return this;
        }

        clearBuffer(): EffectedText {
            this.#messageBuffer = [];
            return this;
        }

        mergeEffect(other: EffectedText): EffectedText {
            this.#controlSequence += other.#controlSequence;
            return this;
        }

        // subtractEffect(other: EffectedText): EffectedText {
        //     //todo
        //     return this;
        // }
    }

    export function newEffect(): EffectedText {
        return new EffectedText();
    }
}

export default EffectedTerminalText;
