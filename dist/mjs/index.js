export var EffectedTerminalText;
(function (EffectedTerminalText) {
    EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER = "\x1b[";
    EffectedTerminalText.SGR_FUNC_NAME = "m";
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
            return EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.reset + EffectedTerminalText.SGR_FUNC_NAME;
        }
        reset() {
            this.#controlSequence =
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.reset + EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        bold() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.bold + EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        faintDecreasedIntensityOrDim() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.faintDecreasedIntensityOrDim +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        italic() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.italic + EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        underline() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.underline + EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        blinkSlowly() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.blinkSlowly + EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        blinkRapidly() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.blinkRapidly + EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        reverse() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.reverse + EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        hide() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.hide + EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        strike() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.strike + EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        primaryFont() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.primaryFont + EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        gothic() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.gothic + EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        doublyUnderlinedOrNotBold() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.doublyUnderlinedOrNotBold +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        normalIntensity() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.normalIntensity +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        neitherItalicNorBlackLetter() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.neitherItalicNorBlackLetter +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        notUnderlined() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.notUnderlined + EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        notBlinking() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.notBlinking + EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        proportionalSpacing() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.proportionalSpacing +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        notReversed() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.notReversed + EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        reveal() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.reveal + EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        notStrike() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.notStrike + EffectedTerminalText.SGR_FUNC_NAME;
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
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorBlack +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        foregroundColorRed() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorRed +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        foregroundColorGreen() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorGreen +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        foregroundColorYellow() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorYellow +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBlue() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorBlue +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        foregroundColorMagenta() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorMagenta +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        foregroundColorCyan() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorCyan +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        foregroundColorWhite() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorWhite +
                    EffectedTerminalText.SGR_FUNC_NAME;
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
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.setForegroundColor +
                    ";2;" +
                    prepareValidNumber(r) +
                    ";" +
                    prepareValidNumber(g) +
                    ";" +
                    prepareValidNumber(b) +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        setForegroundColorByRGBHex(code) {
            function RGBFromHex(code) {
                let reg = /^#([\dabcdef]{2})([\dabcdef]{2})([\dabcdef]{2})$/;
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
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.setForegroundColor +
                    ";5;" +
                    prepareValidNumber(code) +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        defaultForegroundColor() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.defaultForegroundColor +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBlack() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorBlack +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        backgroundColorRed() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorRed +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        backgroundColorGreen() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorGreen +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        backgroundColorYellow() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorYellow +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBlue() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorBlue +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        backgroundColorMagenta() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorMagenta +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        backgroundColorCyan() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorCyan +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        backgroundColorWhite() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorWhite +
                    EffectedTerminalText.SGR_FUNC_NAME;
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
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.setBackgroundColor +
                    ";2;" +
                    prepareValidNumber(r) +
                    ";" +
                    prepareValidNumber(g) +
                    ";" +
                    prepareValidNumber(b) +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        setBackgroundColorByRGBHex(code) {
            function RGBFromHex(code) {
                let reg = /^#([\dabcdef]{2})([\dabcdef]{2})([\dabcdef]{2})$/;
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
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.setBackgroundColor +
                    ";5;" +
                    prepareValidNumber(code) +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        defaultBackgroundColor() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.defaultBackgroundColor +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        disableProportionalSpacing() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.disableProportionalSpacing +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        framed() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.framed + EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        encircled() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.encircled + EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        overlined() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.overlined + EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        neitherFramedNorEncircled() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.neitherFramedNorEncircled +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        notOverlined() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.notOverlined + EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        setUnderlineColor() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.setUnderlineColor +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        defaultUnderlineColor() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.defaultUnderlineColor +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        ideogramUnderlineOrRightSideLine() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.ideogramUnderlineOrRightSideLine +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        ideogramDoubleUnderlineOrDoubleLineOnTheRightSide() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.ideogramDoubleUnderlineOrDoubleLineOnTheRightSide +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        ideogramOverlineOrLeftSideLine() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.ideogramOverlineOrLeftSideLine +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        ideogramDoubleOverlineOrDoubleLineOnTheLeftSide() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.ideogramDoubleOverlineOrDoubleLineOnTheLeftSide +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        ideogramStressMarking() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.ideogramStressMarking +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        noIdeogramAttributes() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.noIdeogramAttributes +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        superscript() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.superscript + EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        subscript() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.subscript + EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        neitherSuperscriptNorSubscript() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.neitherSuperscriptNorSubscript +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightBlack() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorBrightBlack +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightRed() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorBrightRed +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightGreen() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorBrightGreen +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightYellow() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorBrightYellow +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightBlue() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorBrightBlue +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightMagenta() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorBrightMagenta +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightCyan() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorBrightCyan +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        foregroundColorBrightWhite() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.foregroundColorBrightWhite +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightBlack() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorBrightBlack +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightRed() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorBrightRed +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightGreen() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorBrightGreen +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightYellow() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorBrightYellow +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightBlue() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorBrightBlue +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightMagenta() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorBrightMagenta +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightCyan() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorBrightCyan +
                    EffectedTerminalText.SGR_FUNC_NAME;
            return this;
        }
        backgroundColorBrightWhite() {
            this.#controlSequence +=
                EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                    SGR.backgroundColorBrightWhite +
                    EffectedTerminalText.SGR_FUNC_NAME;
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
            this.#controlSequence = "";
            return this;
        }
    }
    function newEffect() {
        return new EffectedText();
    }
    EffectedTerminalText.newEffect = newEffect;
})(EffectedTerminalText || (EffectedTerminalText = {}));
export default EffectedTerminalText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLEtBQVcsb0JBQW9CLENBbXVCcEM7QUFudUJELFdBQWlCLG9CQUFvQjtJQUNwQixnREFBMkIsR0FBRyxPQUFPLENBQUM7SUFDdEMsa0NBQWEsR0FBRyxHQUFHLENBQUM7SUFFakMsSUFBSyxHQTJFSjtJQTNFRCxXQUFLLEdBQUc7UUFDSixrQkFBVyxDQUFBO1FBQ1gsaUJBQVUsQ0FBQTtRQUNWLHlDQUFrQyxDQUFBO1FBQ2xDLG1CQUFZLENBQUE7UUFDWixzQkFBZSxDQUFBO1FBQ2Ysd0JBQWlCLENBQUE7UUFDakIseUJBQWtCLENBQUE7UUFDbEIsb0JBQWEsQ0FBQTtRQUNiLGlCQUFVLENBQUE7UUFDVixtQkFBWSxDQUFBO1FBQ1oseUJBQWtCLENBQUE7UUFDbEIsb0JBQWEsQ0FBQTtRQUNiLHVDQUFnQyxDQUFBO1FBQ2hDLDZCQUFzQixDQUFBO1FBQ3RCLHlDQUFrQyxDQUFBO1FBQ2xDLDJCQUFvQixDQUFBO1FBQ3BCLHlCQUFrQixDQUFBO1FBQ2xCLGlDQUEwQixDQUFBO1FBQzFCLHlCQUFrQixDQUFBO1FBQ2xCLG9CQUFhLENBQUE7UUFDYix1QkFBZ0IsQ0FBQTtRQUNoQixrQ0FBMkIsQ0FBQTtRQUMzQixnQ0FBeUIsQ0FBQTtRQUN6QixrQ0FBMkIsQ0FBQTtRQUMzQixtQ0FBNEIsQ0FBQTtRQUM1QixpQ0FBMEIsQ0FBQTtRQUMxQixvQ0FBNkIsQ0FBQTtRQUM3QixpQ0FBMEIsQ0FBQTtRQUMxQixrQ0FBMkIsQ0FBQTtRQUMzQixnQ0FBeUIsQ0FBQTtRQUN6QixvQ0FBNkIsQ0FBQTtRQUM3QixrQ0FBMkIsQ0FBQTtRQUMzQixnQ0FBeUIsQ0FBQTtRQUN6QixrQ0FBMkIsQ0FBQTtRQUMzQixtQ0FBNEIsQ0FBQTtRQUM1QixpQ0FBMEIsQ0FBQTtRQUMxQixvQ0FBNkIsQ0FBQTtRQUM3QixpQ0FBMEIsQ0FB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