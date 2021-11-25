export var EffectedTerminalText;
(function (EffectedTerminalText) {
    const CONTROL_SEQUENCE_INTRODUCER = "\x1b[";
    const SGR_FUNC_NAME = "m";
    let SGR;
    (function (SGR) {
        SGR["reset"] = "0";
        SGR["bold"] = "1";
        SGR["faintDecreasedIntensityOrDim"] = "2";
        SGR["italic"] = "3";
        SGR["underline"] = "4";
        SGR["blinkSlowly"] = "5";
        SGR["blinkRapidly"] = "6";
        SGR["reverse"] = "7";
        SGR["hide"] = "8";
        SGR["strike"] = "9";
        SGR["primaryFont"] = "10";
        SGR["gothic"] = "20";
        SGR["doublyUnderlinedOrNotBold"] = "21";
        SGR["normalIntensity"] = "22";
        SGR["neitherItalicNorBlackLetter"] = "23";
        SGR["notUnderlined"] = "24";
        SGR["notBlinking"] = "25";
        SGR["proportionalSpacing"] = "26";
        SGR["notReversed"] = "27";
        SGR["reveal"] = "28";
        SGR["notStrike"] = "29";
        SGR["foregroundColorBlack"] = "30";
        SGR["foregroundColorRed"] = "31";
        SGR["foregroundColorGreen"] = "32";
        SGR["foregroundColorYellow"] = "33";
        SGR["foregroundColorBlue"] = "34";
        SGR["foregroundColorMagenta"] = "35";
        SGR["foregroundColorCyan"] = "36";
        SGR["foregroundColorWhite"] = "37";
        SGR["setForegroundColor"] = "38";
        SGR["defaultForegroundColor"] = "39";
        SGR["backgroundColorBlack"] = "40";
        SGR["backgroundColorRed"] = "41";
        SGR["backgroundColorGreen"] = "42";
        SGR["backgroundColorYellow"] = "43";
        SGR["backgroundColorBlue"] = "44";
        SGR["backgroundColorMagenta"] = "45";
        SGR["backgroundColorCyan"] = "46";
        SGR["backgroundColorWhite"] = "47";
        SGR["setBackgroundColor"] = "48";
        SGR["defaultBackgroundColor"] = "49";
        SGR["disableProportionalSpacing"] = "50";
        SGR["framed"] = "51";
        SGR["encircled"] = "52";
        SGR["overlined"] = "53";
        SGR["neitherFramedNorEncircled"] = "54";
        SGR["notOverlined"] = "55";
        SGR["setUnderlineColor"] = "58";
        SGR["defaultUnderlineColor"] = "59";
        SGR["ideogramUnderlineOrRightSideLine"] = "60";
        SGR["ideogramDoubleUnderlineOrDoubleLineOnTheRightSide"] = "61";
        SGR["ideogramOverlineOrLeftSideLine"] = "62";
        SGR["ideogramDoubleOverlineOrDoubleLineOnTheLeftSide"] = "63";
        SGR["ideogramStressMarking"] = "64";
        SGR["noIdeogramAttributes"] = "65";
        SGR["superscript"] = "73";
        SGR["subscript"] = "74";
        SGR["neitherSuperscriptNorSubscript"] = "75";
        SGR["foregroundColorBrightBlack"] = "90";
        SGR["foregroundColorBrightRed"] = "91";
        SGR["foregroundColorBrightGreen"] = "92";
        SGR["foregroundColorBrightYellow"] = "93";
        SGR["foregroundColorBrightBlue"] = "94";
        SGR["foregroundColorBrightMagenta"] = "95";
        SGR["foregroundColorBrightCyan"] = "96";
        SGR["foregroundColorBrightWhite"] = "97";
        SGR["backgroundColorBrightBlack"] = "100";
        SGR["backgroundColorBrightRed"] = "101";
        SGR["backgroundColorBrightGreen"] = "102";
        SGR["backgroundColorBrightYellow"] = "103";
        SGR["backgroundColorBrightBlue"] = "104";
        SGR["backgroundColorBrightMagenta"] = "105";
        SGR["backgroundColorBrightCyan"] = "106";
        SGR["backgroundColorBrightWhite"] = "107";
    })(SGR || (SGR = {}));
    class EffectedText {
        constructor() { }
        #controlSequence = "";
        #addResetTag() {
            return CONTROL_SEQUENCE_INTRODUCER + SGR.reset + SGR_FUNC_NAME;
        }
        reset() {
            this.#controlSequence = "";
            return this;
        }
        bold() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.bold + SGR_FUNC_NAME;
            return this;
        }
        faintDecreasedIntensityOrDim() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.faintDecreasedIntensityOrDim +
                    SGR_FUNC_NAME;
            return this;
        }
        italic() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.italic + SGR_FUNC_NAME;
            return this;
        }
        underline() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.underline + SGR_FUNC_NAME;
            return this;
        }
        blinkSlowly() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.blinkSlowly + SGR_FUNC_NAME;
            return this;
        }
        blinkRapidly() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.blinkRapidly + SGR_FUNC_NAME;
            return this;
        }
        reverse() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.reverse + SGR_FUNC_NAME;
            return this;
        }
        hide() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.hide + SGR_FUNC_NAME;
            return this;
        }
        strike() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.strike + SGR_FUNC_NAME;
            return this;
        }
        primaryFont() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.primaryFont + SGR_FUNC_NAME;
            return this;
        }
        gothic() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.gothic + SGR_FUNC_NAME;
            return this;
        }
        doublyUnderlinedOrNotBold() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.doublyUnderlinedOrNotBold +
                    SGR_FUNC_NAME;
            return this;
        }
        normalIntensity() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.normalIntensity +
                    SGR_FUNC_NAME;
            return this;
        }
        neitherItalicNorBlackLetter() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.neitherItalicNorBlackLetter +
                    SGR_FUNC_NAME;
            return this;
        }
        notUnderlined() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.notUnderlined + SGR_FUNC_NAME;
            return this;
        }
        notBlinking() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.notBlinking + SGR_FUNC_NAME;
            return this;
        }
        proportionalSpacing() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.proportionalSpacing +
                    SGR_FUNC_NAME;
            return this;
        }
        notReversed() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.notReversed + SGR_FUNC_NAME;
            return this;
        }
        reveal() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.reveal + SGR_FUNC_NAME;
            return this;
        }
        notStrike() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.notStrike + SGR_FUNC_NAME;
            return this;
        }
        black() {
            return this.foregroundColorBlack();
        }
        red() {
            return this.foregroundColorRed();
        }
        green() {
            return this.foregroundColorGreen();
        }
        yellow() {
            return this.foregroundColorYellow();
        }
        blue() {
            return this.foregroundColorBlue();
        }
        magenta() {
            return this.foregroundColorMagenta();
        }
        cyan() {
            return this.foregroundColorCyan();
        }
        white() {
            return this.foregroundColorWhite();
        }
        foregroundColorBlack() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorBlack +
                    SGR_FUNC_NAME;
            return this;
        }
        foregroundColorRed() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorRed +
                    SGR_FUNC_NAME;
            return this;
        }
        foregroundColorGreen() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorGreen +
                    SGR_FUNC_NAME;
            return this;
        }
        foregroundColorYellow() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorYellow +
                    SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBlue() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorBlue +
                    SGR_FUNC_NAME;
            return this;
        }
        foregroundColorMagenta() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorMagenta +
                    SGR_FUNC_NAME;
            return this;
        }
        foregroundColorCyan() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorCyan +
                    SGR_FUNC_NAME;
            return this;
        }
        foregroundColorWhite() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorWhite +
                    SGR_FUNC_NAME;
            return this;
        }
        colorByRGB(r, g, b) {
            return this.setBackgroundColorByRGB(r, g, b);
        }
        colorByRGBHex(code) {
            return this.setForegroundColorByRGBHex(code);
        }
        colorBy256ColorMode(code) {
            return this.setForegroundColorBy256ColorMode(code);
        }
        setForegroundColorByRGB(r, g, b) {
            function prepareValidNumber(arg) {
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
        setForegroundColorByRGBHex(code) {
            function RGBFromHex(code) {
                let reg = /^#([\dabcdefABCDEF]{2})([\dabcdefABCDEF]{2})([\dabcdefABCDEF]{2})$/;
                if (!code.match(reg)) {
                    return [0, 0, 0];
                }
                else {
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
        setForegroundColorBy256ColorMode(code) {
            function prepareValidNumber(arg) {
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
        defaultForegroundColor() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.defaultForegroundColor +
                    SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBlack() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorBlack +
                    SGR_FUNC_NAME;
            return this;
        }
        backgroundColorRed() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorRed +
                    SGR_FUNC_NAME;
            return this;
        }
        backgroundColorGreen() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorGreen +
                    SGR_FUNC_NAME;
            return this;
        }
        backgroundColorYellow() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorYellow +
                    SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBlue() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorBlue +
                    SGR_FUNC_NAME;
            return this;
        }
        backgroundColorMagenta() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorMagenta +
                    SGR_FUNC_NAME;
            return this;
        }
        backgroundColorCyan() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorCyan +
                    SGR_FUNC_NAME;
            return this;
        }
        backgroundColorWhite() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorWhite +
                    SGR_FUNC_NAME;
            return this;
        }
        setBackgroundColorByRGB(r, g, b) {
            function prepareValidNumber(arg) {
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
        setBackgroundColorByRGBHex(code) {
            function RGBFromHex(code) {
                let reg = /^#([\dabcdefABCDEF]{2})([\dabcdefABCDEF]{2})([\dabcdefABCDEF]{2})$/;
                if (!code.match(reg)) {
                    return [0, 0, 0];
                }
                else {
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
        setBackgroundColorBy256ColorMode(code) {
            function prepareValidNumber(arg) {
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
        defaultBackgroundColor() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.defaultBackgroundColor +
                    SGR_FUNC_NAME;
            return this;
        }
        disableProportionalSpacing() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.disableProportionalSpacing +
                    SGR_FUNC_NAME;
            return this;
        }
        framed() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.framed + SGR_FUNC_NAME;
            return this;
        }
        encircled() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.encircled + SGR_FUNC_NAME;
            return this;
        }
        overlined() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.overlined + SGR_FUNC_NAME;
            return this;
        }
        neitherFramedNorEncircled() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.neitherFramedNorEncircled +
                    SGR_FUNC_NAME;
            return this;
        }
        notOverlined() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.notOverlined + SGR_FUNC_NAME;
            return this;
        }
        setUnderlineColor() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.setUnderlineColor +
                    SGR_FUNC_NAME;
            return this;
        }
        defaultUnderlineColor() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.defaultUnderlineColor +
                    SGR_FUNC_NAME;
            return this;
        }
        ideogramUnderlineOrRightSideLine() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.ideogramUnderlineOrRightSideLine +
                    SGR_FUNC_NAME;
            return this;
        }
        ideogramDoubleUnderlineOrDoubleLineOnTheRightSide() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.ideogramDoubleUnderlineOrDoubleLineOnTheRightSide +
                    SGR_FUNC_NAME;
            return this;
        }
        ideogramOverlineOrLeftSideLine() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.ideogramOverlineOrLeftSideLine +
                    SGR_FUNC_NAME;
            return this;
        }
        ideogramDoubleOverlineOrDoubleLineOnTheLeftSide() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.ideogramDoubleOverlineOrDoubleLineOnTheLeftSide +
                    SGR_FUNC_NAME;
            return this;
        }
        ideogramStressMarking() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.ideogramStressMarking +
                    SGR_FUNC_NAME;
            return this;
        }
        noIdeogramAttributes() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.noIdeogramAttributes +
                    SGR_FUNC_NAME;
            return this;
        }
        superscript() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.superscript + SGR_FUNC_NAME;
            return this;
        }
        subscript() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER + SGR.subscript + SGR_FUNC_NAME;
            return this;
        }
        neitherSuperscriptNorSubscript() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.neitherSuperscriptNorSubscript +
                    SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightBlack() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorBrightBlack +
                    SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightRed() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorBrightRed +
                    SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightGreen() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorBrightGreen +
                    SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightYellow() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorBrightYellow +
                    SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightBlue() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorBrightBlue +
                    SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightMagenta() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorBrightMagenta +
                    SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightCyan() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorBrightCyan +
                    SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightWhite() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorBrightWhite +
                    SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightBlack() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorBrightBlack +
                    SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightRed() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorBrightRed +
                    SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightGreen() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorBrightGreen +
                    SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightYellow() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorBrightYellow +
                    SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightBlue() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorBrightBlue +
                    SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightMagenta() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorBrightMagenta +
                    SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightCyan() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorBrightCyan +
                    SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightWhite() {
            this.#controlSequence +=
                CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorBrightWhite +
                    SGR_FUNC_NAME;
            return this;
        }
        parse(str) {
            let rtn = this.#controlSequence + str + this.#addResetTag();
            return rtn;
        }
        parseAndReset(str) {
            let rtn = this.#controlSequence + str + this.#addResetTag();
            this.#controlSequence = "";
            return rtn;
        }
        print(...args) {
            console.log(this.#controlSequence, ...args, this.#addResetTag());
            return this;
        }
        printAndReset(...args) {
            this.print(...args);
            this.reset();
            return this;
        }
        #messageBuffer = [];
        bufferToPrint(...args) {
            this.#messageBuffer = this.#messageBuffer.concat([
                this.#controlSequence,
                ...args,
                this.#addResetTag(),
            ]);
            return this;
        }
        commitPrint() {
            console.log(...this.#messageBuffer);
            this.#messageBuffer = [];
            return this;
        }
        clearBuffer() {
            this.#messageBuffer = [];
            return this;
        }
        mergeEffect(other) {
            this.#controlSequence += other.#controlSequence;
            return this;
        }
    }
    EffectedTerminalText.EffectedText = EffectedText;
    function newEffect() {
        return new EffectedText();
    }
    EffectedTerminalText.newEffect = newEffect;
})(EffectedTerminalText || (EffectedTerminalText = {}));
export default EffectedTerminalText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLEtBQVcsb0JBQW9CLENBbXdCcEM7QUFud0JELFdBQWlCLG9CQUFvQjtJQUNqQyxNQUFNLDJCQUEyQixHQUFHLE9BQU8sQ0FBQztJQUM1QyxNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUM7SUFFMUIsSUFBSyxHQTJFSjtJQTNFRCxXQUFLLEdBQUc7UUFDSixrQkFBVyxDQUFBO1FBQ1gsaUJBQVUsQ0FBQTtRQUNWLHlDQUFrQyxDQUFBO1FBQ2xDLG1CQUFZLENBQUE7UUFDWixzQkFBZSxDQUFBO1FBQ2Ysd0JBQWlCLENBQUE7UUFDakIseUJBQWtCLENBQUE7UUFDbEIsb0JBQWEsQ0FBQTtRQUNiLGlCQUFVLENBQUE7UUFDVixtQkFBWSxDQUFBO1FBQ1oseUJBQWtCLENBQUE7UUFDbEIsb0JBQWEsQ0FBQTtRQUNiLHVDQUFnQyxDQUFBO1FBQ2hDLDZCQUFzQixDQUFBO1FBQ3RCLHlDQUFrQyxDQUFBO1FBQ2xDLDJCQUFvQixDQUFBO1FBQ3BCLHlCQUFrQixDQUFBO1FBQ2xCLGlDQUEwQixDQUFBO1FBQzFCLHlCQUFrQixDQUFBO1FBQ2xCLG9CQUFhLENBQUE7UUFDYix1QkFBZ0IsQ0FBQTtRQUNoQixrQ0FBMkIsQ0FBQTtRQUMzQixnQ0FBeUIsQ0FBQTtRQUN6QixrQ0FBMkIsQ0FBQTtRQUMzQixtQ0FBNEIsQ0FBQTtRQUM1QixpQ0FBMEIsQ0FBQTtRQUMxQixvQ0FBNkIsQ0FBQTtRQUM3QixpQ0FBMEIsQ0FBQTtRQUMxQixrQ0FBMkIsQ0FBQTtRQUMzQixnQ0FBeUIsQ0FBQTtRQUN6QixvQ0FBNkIsQ0FBQTtRQUM3QixrQ0FBMkIsQ0FBQTtRQUMzQixnQ0FBeUIsQ0FBQTtRQUN6QixrQ0FBMkIsQ0FBQTtRQUMzQixtQ0FBNEIsQ0FBQTtRQUM1QixpQ0FBMEIsQ0FBQTtRQUMxQixvQ0FBNkIsQ0FBQTtRQUM3QixpQ0FBMEIsQ0FBQTtRQUMxQixrQ0FBMkIsQ0FBQTtRQUMzQixnQ0FBeUIsQ0FBQTtRQUN6QixvQ0FBNkIsQ0FBQTtRQUM3Qix3Q0FBaUMsQ0FBQTtRQUNqQyxvQkFBYSxDQUFBO1FBQ2IsdUJBQWdCLENBQUE7UUFDaEIsdUJBQWdCLENBQUE7UUFDaEIsdUNBQWdDLENBQUE7UUFDaEMsMEJBQW1CLENBQUE7UUFDbkIsK0JBQXdCLENBQUE7UUFDeEIsbUNBQTRCLENBQUE7UUFDNUIsOENBQXVDLENBQUE7UUFDdkMsK0RBQXdELENBQUE7UUFDeEQsNENBQXFDLENBQUE7UUFDckMsNkRBQXNELENBQUE7UUFDdEQsbUNBQTRCLENBQUE7UUFDNUIsa0NBQTJCLENBQUE7UUFDM0IseUJBQWtCLENBQUE7UUFDbEIsdUJBQWdCLENBQUE7UUFDaEIsNENBQXFDLENBQUE7UUFDckMsd0NBQWlDLENBQUE7UUFDakMsc0NBQStCLENBQUE7UUFDL0Isd0NBQWlDLENBQUE7UUFDakMseUNBQWtDLENBQUE7UUFDbEMsdUNBQWdDLENBQUE7UUFDaEMsMENBQW1DLENBQUE7UUFDbkMsdUNBQWdDLENBQUE7UUFDaEMsd0NBQWlDLENBQUE7UUFDakMseUNBQWtDLENBQUE7UUFDbEMsdUNBQWdDLENBQUE7UUFDaEMseUNBQWtDLENBQUE7UUFDbEMsMENBQW1DLENBQUE7UUFDbkMsd0NBQWlDLENBQUE7UUFDakMsMkNBQW9DLENBQUE7UUFDcEMsd0NBQWlDLENBQUE7UUFDakMseUNBQWtDLENBQUE7SUFDdEMsQ0FBQyxFQTNFSSxHQUFHLEtBQUgsR0FBRyxRQTJFUDtJQUVELE1BQWEsWUFBWTtRQUNyQixnQkFBZSxDQUFDO1FBRWhCLGdCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUU5QixZQUFZO1lBQ1IsT0FBTywyQkFBMkIsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztRQUNuRSxDQUFDO1FBRUQsS0FBSztZQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7WUFDM0IsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELElBQUk7WUFDQSxJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkIsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztZQUMzRCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsNEJBQTRCO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQjtvQkFDM0IsR0FBRyxDQUFDLDRCQUE0QjtvQkFDaEMsYUFBYSxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxNQUFNO1lBQ0YsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7WUFDN0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELFNBQVM7WUFDTCxJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkIsR0FBRyxHQUFHLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztZQUNoRSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsV0FBVztZQUNQLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQixHQUFHLEdBQUcsQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO1lBQ2xFLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxZQUFZO1lBQ1IsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCLEdBQUcsR0FBRyxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUM7WUFDbkUsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELE9BQU87WUFDSCxJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkIsR0FBRyxHQUFHLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztZQUM5RCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsSUFBSTtZQUNBLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQixHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1lBQzNELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxNQUFNO1lBQ0YsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7WUFDN0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELFdBQVc7WUFDUCxJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkIsR0FBRyxHQUFHLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztZQUNsRSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsTUFBTTtZQUNGLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQixHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO1lBQzdELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCx5QkFBeUI7WUFDckIsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCO29CQUMzQixHQUFHLENBQUMseUJBQXlCO29CQUM3QixhQUFhLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELGVBQWU7WUFDWCxJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkI7b0JBQzNCLEdBQUcsQ0FBQyxlQUFlO29CQUNuQixhQUFhLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELDJCQUEyQjtZQUN2QixJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkI7b0JBQzNCLEdBQUcsQ0FBQywyQkFBMkI7b0JBQy9CLGFBQWEsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsYUFBYTtZQUNULElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQixHQUFHLEdBQUcsQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1lBQ3BFLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxXQUFXO1lBQ1AsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCLEdBQUcsR0FBRyxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7WUFDbEUsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELG1CQUFtQjtZQUNmLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQjtvQkFDM0IsR0FBRyxDQUFDLG1CQUFtQjtvQkFDdkIsYUFBYSxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxXQUFXO1lBQ1AsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCLEdBQUcsR0FBRyxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7WUFDbEUsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELE1BQU07WUFDRixJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkIsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztZQUM3RCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsU0FBUztZQUNMLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQixHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1lBQ2hFLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxLQUFLO1lBQ0QsT0FBTyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUN2QyxDQUFDO1FBRUQsR0FBRztZQUNDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDckMsQ0FBQztRQUVELEtBQUs7WUFDRCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ3ZDLENBQUM7UUFFRCxNQUFNO1lBQ0YsT0FBTyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUN4QyxDQUFDO1FBRUQsSUFBSTtZQUNBLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDdEMsQ0FBQztRQUVELE9BQU87WUFDSCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ3pDLENBQUM7UUFFRCxJQUFJO1lBQ0EsT0FBTyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN0QyxDQUFDO1FBRUQsS0FBSztZQUNELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDdkMsQ0FBQztRQUVELG9CQUFvQjtZQUNoQixJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkI7b0JBQzNCLEdBQUcsQ0FBQyxvQkFBb0I7b0JBQ3hCLGFBQWEsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQsa0JBQWtCO1lBQ2QsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCO29CQUMzQixHQUFHLENBQUMsa0JBQWtCO29CQUN0QixhQUFhLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELG9CQUFvQjtZQUNoQixJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkI7b0JBQzNCLEdBQUcsQ0FBQyxvQkFBb0I7b0JBQ3hCLGFBQWEsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QscUJBQXFCO1lBQ2pCLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQjtvQkFDM0IsR0FBRyxDQUFDLHFCQUFxQjtvQkFDekIsYUFBYSxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxtQkFBbUI7WUFDZixJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkI7b0JBQzNCLEdBQUcsQ0FBQyxtQkFBbUI7b0JBQ3ZCLGFBQWEsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0Qsc0JBQXNCO1lBQ2xCLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQjtvQkFDM0IsR0FBRyxDQUFDLHNCQUFzQjtvQkFDMUIsYUFBYSxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxtQkFBbUI7WUFDZixJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkI7b0JBQzNCLEdBQUcsQ0FBQyxtQkFBbUI7b0JBQ3ZCLGFBQWEsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0Qsb0JBQW9CO1lBQ2hCLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQjtvQkFDM0IsR0FBRyxDQUFDLG9CQUFvQjtvQkFDeEIsYUFBYSxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxVQUFVLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUVELGFBQWEsQ0FBQyxJQUFZO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFFRCxtQkFBbUIsQ0FBQyxJQUFZO1lBQzVCLE9BQU8sSUFBSSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFFRCx1QkFBdUIsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7WUFDbkQsU0FBUyxrQkFBa0IsQ0FBQyxHQUFXO2dCQUNuQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7b0JBQy9DLE9BQU8sR0FBRyxDQUFDO2lCQUNkO2dCQUNELEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEMsQ0FBQztZQUVELDJCQUEyQjtZQUMzQixxREFBcUQ7WUFDckQsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCO29CQUMzQixHQUFHLENBQUMsa0JBQWtCO29CQUN0QixLQUFLO29CQUNMLGtCQUFrQixDQUFDLENBQUMsQ0FBQztvQkFDckIsR0FBRztvQkFDSCxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLEdBQUc7b0JBQ0gsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO29CQUNyQixhQUFhLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELDBCQUEwQixDQUFDLElBQVk7WUFDbkMsU0FBUyxVQUFVLENBQUMsSUFBWTtnQkFDNUIsSUFBSSxHQUFHLEdBQ0gsb0VBQW9FLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNsQixPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDcEI7cUJBQU07b0JBQ0gsT0FBTzt3QkFDSCxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNqQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNqQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2pDLENBQUM7aUJBQ0w7WUFDTCxDQUFDO1lBQ0QsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsQ0FBQztRQUVELGdDQUFnQyxDQUFDLElBQVk7WUFDekMsU0FBUyxrQkFBa0IsQ0FBQyxHQUFXO2dCQUNuQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7b0JBQy9DLE9BQU8sR0FBRyxDQUFDO2lCQUNkO2dCQUNELEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEMsQ0FBQztZQUNELElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQjtvQkFDM0IsR0FBRyxDQUFDLGtCQUFrQjtvQkFDdEIsS0FBSztvQkFDTCxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7b0JBQ3hCLGFBQWEsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQsc0JBQXNCO1lBQ2xCLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQjtvQkFDM0IsR0FBRyxDQUFDLHNCQUFzQjtvQkFDMUIsYUFBYSxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxvQkFBb0I7WUFDaEIsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCO29CQUMzQixHQUFHLENBQUMsb0JBQW9CO29CQUN4QixhQUFhLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELGtCQUFrQjtZQUNkLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQjtvQkFDM0IsR0FBRyxDQUFDLGtCQUFrQjtvQkFDdEIsYUFBYSxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxvQkFBb0I7WUFDaEIsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCO29CQUMzQixHQUFHLENBQUMsb0JBQW9CO29CQUN4QixhQUFhLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELHFCQUFxQjtZQUNqQixJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkI7b0JBQzNCLEdBQUcsQ0FBQyxxQkFBcUI7b0JBQ3pCLGFBQWEsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsbUJBQW1CO1lBQ2YsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCO29CQUMzQixHQUFHLENBQUMsbUJBQW1CO29CQUN2QixhQUFhLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELHNCQUFzQjtZQUNsQixJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkI7b0JBQzNCLEdBQUcsQ0FBQyxzQkFBc0I7b0JBQzFCLGFBQWEsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsbUJBQW1CO1lBQ2YsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCO29CQUMzQixHQUFHLENBQUMsbUJBQW1CO29CQUN2QixhQUFhLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELG9CQUFvQjtZQUNoQixJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkI7b0JBQzNCLEdBQUcsQ0FBQyxvQkFBb0I7b0JBQ3hCLGFBQWEsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQsdUJBQXVCLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1lBQ25ELFNBQVMsa0JBQWtCLENBQUMsR0FBVztnQkFDbkMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO29CQUMvQyxPQUFPLEdBQUcsQ0FBQztpQkFDZDtnQkFDRCxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDaEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RDLENBQUM7WUFDRCxJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkI7b0JBQzNCLEdBQUcsQ0FBQyxrQkFBa0I7b0JBQ3RCLEtBQUs7b0JBQ0wsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO29CQUNyQixHQUFHO29CQUNILGtCQUFrQixDQUFDLENBQUMsQ0FBQztvQkFDckIsR0FBRztvQkFDSCxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLGFBQWEsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQsMEJBQTBCLENBQUMsSUFBWTtZQUNuQyxTQUFTLFVBQVUsQ0FBQyxJQUFZO2dCQUM1QixJQUFJLEdBQUcsR0FDSCxvRUFBb0UsQ0FBQztnQkFDekUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ2xCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNwQjtxQkFBTTtvQkFDSCxPQUFPO3dCQUNILFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ2pDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ2pDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDakMsQ0FBQztpQkFDTDtZQUNMLENBQUM7WUFDRCxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDO1FBRUQsZ0NBQWdDLENBQUMsSUFBWTtZQUN6QyxTQUFTLGtCQUFrQixDQUFDLEdBQVc7Z0JBQ25DLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtvQkFDL0MsT0FBTyxHQUFHLENBQUM7aUJBQ2Q7Z0JBQ0QsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QyxDQUFDO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCO29CQUMzQixHQUFHLENBQUMsa0JBQWtCO29CQUN0QixLQUFLO29CQUNMLGtCQUFrQixDQUFDLElBQUksQ0FBQztvQkFDeEIsYUFBYSxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxzQkFBc0I7WUFDbEIsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCO29CQUMzQixHQUFHLENBQUMsc0JBQXNCO29CQUMxQixhQUFhLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELDBCQUEwQjtZQUN0QixJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkI7b0JBQzNCLEdBQUcsQ0FBQywwQkFBMEI7b0JBQzlCLGFBQWEsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsTUFBTTtZQUNGLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQixHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO1lBQzdELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxTQUFTO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCLEdBQUcsR0FBRyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7WUFDaEUsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELFNBQVM7WUFDTCxJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkIsR0FBRyxHQUFHLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztZQUNoRSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QseUJBQXlCO1lBQ3JCLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQjtvQkFDM0IsR0FBRyxDQUFDLHlCQUF5QjtvQkFDN0IsYUFBYSxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxZQUFZO1lBQ1IsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCLEdBQUcsR0FBRyxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUM7WUFDbkUsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELGlCQUFpQjtZQUNiLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQjtvQkFDM0IsR0FBRyxDQUFDLGlCQUFpQjtvQkFDckIsYUFBYSxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxxQkFBcUI7WUFDakIsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCO29CQUMzQixHQUFHLENBQUMscUJBQXFCO29CQUN6QixhQUFhLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELGdDQUFnQztZQUM1QixJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkI7b0JBQzNCLEdBQUcsQ0FBQyxnQ0FBZ0M7b0JBQ3BDLGFBQWEsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsaURBQWlEO1lBQzdDLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQjtvQkFDM0IsR0FBRyxDQUFDLGlEQUFpRDtvQkFDckQsYUFBYSxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCw4QkFBOEI7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCO29CQUMzQixHQUFHLENBQUMsOEJBQThCO29CQUNsQyxhQUFhLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELCtDQUErQztZQUMzQyxJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkI7b0JBQzNCLEdBQUcsQ0FBQywrQ0FBK0M7b0JBQ25ELGFBQWEsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QscUJBQXFCO1lBQ2pCLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQjtvQkFDM0IsR0FBRyxDQUFDLHFCQUFxQjtvQkFDekIsYUFBYSxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxvQkFBb0I7WUFDaEIsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCO29CQUMzQixHQUFHLENBQUMsb0JBQW9CO29CQUN4QixhQUFhLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELFdBQVc7WUFDUCxJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkIsR0FBRyxHQUFHLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztZQUNsRSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsU0FBUztZQUNMLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQixHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1lBQ2hFLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCw4QkFBOEI7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCO29CQUMzQixHQUFHLENBQUMsOEJBQThCO29CQUNsQyxhQUFhLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELDBCQUEwQjtZQUN0QixJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkI7b0JBQzNCLEdBQUcsQ0FBQywwQkFBMEI7b0JBQzlCLGFBQWEsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0Qsd0JBQXdCO1lBQ3BCLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQjtvQkFDM0IsR0FBRyxDQUFDLHdCQUF3QjtvQkFDNUIsYUFBYSxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCwwQkFBMEI7WUFDdEIsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCO29CQUMzQixHQUFHLENBQUMsMEJBQTBCO29CQUM5QixhQUFhLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELDJCQUEyQjtZQUN2QixJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkI7b0JBQzNCLEdBQUcsQ0FBQywyQkFBMkI7b0JBQy9CLGFBQWEsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QseUJBQXlCO1lBQ3JCLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQjtvQkFDM0IsR0FBRyxDQUFDLHlCQUF5QjtvQkFDN0IsYUFBYSxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCw0QkFBNEI7WUFDeEIsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCO29CQUMzQixHQUFHLENBQUMsNEJBQTRCO29CQUNoQyxhQUFhLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELHlCQUF5QjtZQUNyQixJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkI7b0JBQzNCLEdBQUcsQ0FBQyx5QkFBeUI7b0JBQzdCLGFBQWEsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsMEJBQTBCO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQjtvQkFDM0IsR0FBRyxDQUFDLDBCQUEwQjtvQkFDOUIsYUFBYSxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCwwQkFBMEI7WUFDdEIsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCO29CQUMzQixHQUFHLENBQUMsMEJBQTBCO29CQUM5QixhQUFhLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELHdCQUF3QjtZQUNwQixJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkI7b0JBQzNCLEdBQUcsQ0FBQyx3QkFBd0I7b0JBQzVCLGFBQWEsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsMEJBQTBCO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQjtvQkFDM0IsR0FBRyxDQUFDLDBCQUEwQjtvQkFDOUIsYUFBYSxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCwyQkFBMkI7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCO29CQUMzQixHQUFHLENBQUMsMkJBQTJCO29CQUMvQixhQUFhLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELHlCQUF5QjtZQUNyQixJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkI7b0JBQzNCLEdBQUcsQ0FBQyx5QkFBeUI7b0JBQzdCLGFBQWEsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsNEJBQTRCO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pCLDJCQUEyQjtvQkFDM0IsR0FBRyxDQUFDLDRCQUE0QjtvQkFDaEMsYUFBYSxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCx5QkFBeUI7WUFDckIsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakIsMkJBQTJCO29CQUMzQixHQUFHLENBQUMseUJBQXlCO29CQUM3QixhQUFhLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELDBCQUEwQjtZQUN0QixJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQiwyQkFBMkI7b0JBQzNCLEdBQUcsQ0FBQywwQkFBMEI7b0JBQzlCLGFBQWEsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQsS0FBSyxDQUFDLEdBQVc7WUFDYixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM1RCxPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7UUFFRCxhQUFhLENBQUMsR0FBVztZQUNyQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM1RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1lBQzNCLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQztRQUVELEtBQUssQ0FBQyxHQUFHLElBQVc7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7WUFDakUsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELGFBQWEsQ0FBQyxHQUFHLElBQVc7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxjQUFjLEdBQVUsRUFBRSxDQUFDO1FBQzNCLGFBQWEsQ0FBQyxHQUFHLElBQVc7WUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztnQkFDN0MsSUFBSSxDQUFDLGdCQUFnQjtnQkFDckIsR0FBRyxJQUFJO2dCQUNQLElBQUksQ0FBQyxZQUFZLEVBQUU7YUFDdEIsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELFdBQVc7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxXQUFXO1lBQ1AsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7WUFDekIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELFdBQVcsQ0FBQyxLQUFtQjtZQUMzQixJQUFJLENBQUMsZ0JBQWdCLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDO1lBQ2hELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7S0FNSjtJQTdxQlksaUNBQVksZUE2cUJ4QixDQUFBO0lBRUQsU0FBZ0IsU0FBUztRQUNyQixPQUFPLElBQUksWUFBWSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUZlLDhCQUFTLFlBRXhCLENBQUE7QUFDTCxDQUFDLEVBbndCZ0Isb0JBQW9CLEtBQXBCLG9CQUFvQixRQW13QnBDO0FBRUQsZUFBZSxvQkFBb0IsQ0FBQyJ9