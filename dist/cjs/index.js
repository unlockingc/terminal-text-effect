"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffectedTerminalText = void 0;
var EffectedTerminalText;
(function (EffectedTerminalText) {
    var _EffectedText_instances, _EffectedText_controlSequence, _EffectedText_addResetTag, _EffectedText_messageBuffer;
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
        constructor() {
            _EffectedText_instances.add(this);
            _EffectedText_controlSequence.set(this, "");
            _EffectedText_messageBuffer.set(this, []);
        }
        reset() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, "", "f");
            return this;
        }
        bold() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER + SGR.bold + SGR_FUNC_NAME), "f");
            return this;
        }
        faintDecreasedIntensityOrDim() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.faintDecreasedIntensityOrDim +
                SGR_FUNC_NAME), "f");
            return this;
        }
        italic() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER + SGR.italic + SGR_FUNC_NAME), "f");
            return this;
        }
        underline() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER + SGR.underline + SGR_FUNC_NAME), "f");
            return this;
        }
        blinkSlowly() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER + SGR.blinkSlowly + SGR_FUNC_NAME), "f");
            return this;
        }
        blinkRapidly() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER + SGR.blinkRapidly + SGR_FUNC_NAME), "f");
            return this;
        }
        reverse() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER + SGR.reverse + SGR_FUNC_NAME), "f");
            return this;
        }
        hide() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER + SGR.hide + SGR_FUNC_NAME), "f");
            return this;
        }
        strike() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER + SGR.strike + SGR_FUNC_NAME), "f");
            return this;
        }
        primaryFont() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER + SGR.primaryFont + SGR_FUNC_NAME), "f");
            return this;
        }
        gothic() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER + SGR.gothic + SGR_FUNC_NAME), "f");
            return this;
        }
        doublyUnderlinedOrNotBold() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.doublyUnderlinedOrNotBold +
                SGR_FUNC_NAME), "f");
            return this;
        }
        normalIntensity() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.normalIntensity +
                SGR_FUNC_NAME), "f");
            return this;
        }
        neitherItalicNorBlackLetter() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.neitherItalicNorBlackLetter +
                SGR_FUNC_NAME), "f");
            return this;
        }
        notUnderlined() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER + SGR.notUnderlined + SGR_FUNC_NAME), "f");
            return this;
        }
        notBlinking() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER + SGR.notBlinking + SGR_FUNC_NAME), "f");
            return this;
        }
        proportionalSpacing() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.proportionalSpacing +
                SGR_FUNC_NAME), "f");
            return this;
        }
        notReversed() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER + SGR.notReversed + SGR_FUNC_NAME), "f");
            return this;
        }
        reveal() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER + SGR.reveal + SGR_FUNC_NAME), "f");
            return this;
        }
        notStrike() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER + SGR.notStrike + SGR_FUNC_NAME), "f");
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
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBlack +
                SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorRed() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorRed +
                SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorGreen() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorGreen +
                SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorYellow() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorYellow +
                SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorBlue() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBlue +
                SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorMagenta() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorMagenta +
                SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorCyan() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorCyan +
                SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorWhite() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorWhite +
                SGR_FUNC_NAME), "f");
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
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.setForegroundColor +
                ";2;" +
                prepareValidNumber(r) +
                ";" +
                prepareValidNumber(g) +
                ";" +
                prepareValidNumber(b) +
                SGR_FUNC_NAME), "f");
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
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.setForegroundColor +
                ";5;" +
                prepareValidNumber(code) +
                SGR_FUNC_NAME), "f");
            return this;
        }
        defaultForegroundColor() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.defaultForegroundColor +
                SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorBlack() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBlack +
                SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorRed() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorRed +
                SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorGreen() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorGreen +
                SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorYellow() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorYellow +
                SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorBlue() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBlue +
                SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorMagenta() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorMagenta +
                SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorCyan() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorCyan +
                SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorWhite() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorWhite +
                SGR_FUNC_NAME), "f");
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
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.setBackgroundColor +
                ";2;" +
                prepareValidNumber(r) +
                ";" +
                prepareValidNumber(g) +
                ";" +
                prepareValidNumber(b) +
                SGR_FUNC_NAME), "f");
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
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.setBackgroundColor +
                ";5;" +
                prepareValidNumber(code) +
                SGR_FUNC_NAME), "f");
            return this;
        }
        defaultBackgroundColor() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.defaultBackgroundColor +
                SGR_FUNC_NAME), "f");
            return this;
        }
        disableProportionalSpacing() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.disableProportionalSpacing +
                SGR_FUNC_NAME), "f");
            return this;
        }
        framed() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER + SGR.framed + SGR_FUNC_NAME), "f");
            return this;
        }
        encircled() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER + SGR.encircled + SGR_FUNC_NAME), "f");
            return this;
        }
        overlined() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER + SGR.overlined + SGR_FUNC_NAME), "f");
            return this;
        }
        neitherFramedNorEncircled() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.neitherFramedNorEncircled +
                SGR_FUNC_NAME), "f");
            return this;
        }
        notOverlined() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER + SGR.notOverlined + SGR_FUNC_NAME), "f");
            return this;
        }
        setUnderlineColor() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.setUnderlineColor +
                SGR_FUNC_NAME), "f");
            return this;
        }
        defaultUnderlineColor() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.defaultUnderlineColor +
                SGR_FUNC_NAME), "f");
            return this;
        }
        ideogramUnderlineOrRightSideLine() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.ideogramUnderlineOrRightSideLine +
                SGR_FUNC_NAME), "f");
            return this;
        }
        ideogramDoubleUnderlineOrDoubleLineOnTheRightSide() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.ideogramDoubleUnderlineOrDoubleLineOnTheRightSide +
                SGR_FUNC_NAME), "f");
            return this;
        }
        ideogramOverlineOrLeftSideLine() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.ideogramOverlineOrLeftSideLine +
                SGR_FUNC_NAME), "f");
            return this;
        }
        ideogramDoubleOverlineOrDoubleLineOnTheLeftSide() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.ideogramDoubleOverlineOrDoubleLineOnTheLeftSide +
                SGR_FUNC_NAME), "f");
            return this;
        }
        ideogramStressMarking() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.ideogramStressMarking +
                SGR_FUNC_NAME), "f");
            return this;
        }
        noIdeogramAttributes() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.noIdeogramAttributes +
                SGR_FUNC_NAME), "f");
            return this;
        }
        superscript() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER + SGR.superscript + SGR_FUNC_NAME), "f");
            return this;
        }
        subscript() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER + SGR.subscript + SGR_FUNC_NAME), "f");
            return this;
        }
        neitherSuperscriptNorSubscript() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.neitherSuperscriptNorSubscript +
                SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorBrightBlack() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightBlack +
                SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorBrightRed() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightRed +
                SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorBrightGreen() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightGreen +
                SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorBrightYellow() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightYellow +
                SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorBrightBlue() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightBlue +
                SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorBrightMagenta() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightMagenta +
                SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorBrightCyan() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightCyan +
                SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorBrightWhite() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightWhite +
                SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorBrightBlack() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightBlack +
                SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorBrightRed() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightRed +
                SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorBrightGreen() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightGreen +
                SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorBrightYellow() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightYellow +
                SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorBrightBlue() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightBlue +
                SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorBrightMagenta() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightMagenta +
                SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorBrightCyan() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightCyan +
                SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorBrightWhite() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightWhite +
                SGR_FUNC_NAME), "f");
            return this;
        }
        parse(str) {
            let rtn = __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + str + __classPrivateFieldGet(this, _EffectedText_instances, "m", _EffectedText_addResetTag).call(this);
            return rtn;
        }
        parseAndReset(str) {
            let rtn = __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + str + __classPrivateFieldGet(this, _EffectedText_instances, "m", _EffectedText_addResetTag).call(this);
            __classPrivateFieldSet(this, _EffectedText_controlSequence, "", "f");
            return rtn;
        }
        print(...args) {
            console.log(__classPrivateFieldGet(this, _EffectedText_controlSequence, "f"), ...args, __classPrivateFieldGet(this, _EffectedText_instances, "m", _EffectedText_addResetTag).call(this));
            return this;
        }
        printAndReset(...args) {
            this.print(...args);
            this.reset();
            return this;
        }
        bufferToPrint(...args) {
            __classPrivateFieldSet(this, _EffectedText_messageBuffer, __classPrivateFieldGet(this, _EffectedText_messageBuffer, "f").concat([
                __classPrivateFieldGet(this, _EffectedText_controlSequence, "f"),
                ...args,
                __classPrivateFieldGet(this, _EffectedText_instances, "m", _EffectedText_addResetTag).call(this),
            ]), "f");
            return this;
        }
        commitPrint() {
            console.log(...__classPrivateFieldGet(this, _EffectedText_messageBuffer, "f"));
            __classPrivateFieldSet(this, _EffectedText_messageBuffer, [], "f");
            return this;
        }
        clearBuffer() {
            __classPrivateFieldSet(this, _EffectedText_messageBuffer, [], "f");
            return this;
        }
        mergeEffect(other) {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + __classPrivateFieldGet(other, _EffectedText_controlSequence, "f"), "f");
            return this;
        }
    }
    _EffectedText_controlSequence = new WeakMap(), _EffectedText_messageBuffer = new WeakMap(), _EffectedText_instances = new WeakSet(), _EffectedText_addResetTag = function _EffectedText_addResetTag() {
        return CONTROL_SEQUENCE_INTRODUCER + SGR.reset + SGR_FUNC_NAME;
    };
    EffectedTerminalText.EffectedText = EffectedText;
    function newEffect() {
        return new EffectedText();
    }
    EffectedTerminalText.newEffect = newEffect;
})(EffectedTerminalText = exports.EffectedTerminalText || (exports.EffectedTerminalText = {}));
exports.default = EffectedTerminalText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQWlCLG9CQUFvQixDQW13QnBDO0FBbndCRCxXQUFpQixvQkFBb0I7O0lBQ2pDLE1BQU0sMkJBQTJCLEdBQUcsT0FBTyxDQUFDO0lBQzVDLE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQztJQUUxQixJQUFLLEdBMkVKO0lBM0VELFdBQUssR0FBRztRQUNKLGtCQUFXLENBQUE7UUFDWCxpQkFBVSxDQUFBO1FBQ1YseUNBQWtDLENBQUE7UUFDbEMsbUJBQVksQ0FBQTtRQUNaLHNCQUFlLENBQUE7UUFDZix3QkFBaUIsQ0FBQTtRQUNqQix5QkFBa0IsQ0FBQTtRQUNsQixvQkFBYSxDQUFBO1FBQ2IsaUJBQVUsQ0FBQTtRQUNWLG1CQUFZLENBQUE7UUFDWix5QkFBa0IsQ0FBQTtRQUNsQixvQkFBYSxDQUFBO1FBQ2IsdUNBQWdDLENBQUE7UUFDaEMsNkJBQXNCLENBQUE7UUFDdEIseUNBQWtDLENBQUE7UUFDbEMsMkJBQW9CLENBQUE7UUFDcEIseUJBQWtCLENBQUE7UUFDbEIsaUNBQTBCLENBQUE7UUFDMUIseUJBQWtCLENBQUE7UUFDbEIsb0JBQWEsQ0FBQTtRQUNiLHVCQUFnQixDQUFBO1FBQ2hCLGtDQUEyQixDQUFBO1FBQzNCLGdDQUF5QixDQUFBO1FBQ3pCLGtDQUEyQixDQUFBO1FBQzNCLG1DQUE0QixDQUFBO1FBQzVCLGlDQUEwQixDQUFBO1FBQzFCLG9DQUE2QixDQUFBO1FBQzdCLGlDQUEwQixDQUFBO1FBQzFCLGtDQUEyQixDQUFBO1FBQzNCLGdDQUF5QixDQUFBO1FBQ3pCLG9DQUE2QixDQUFBO1FBQzdCLGtDQUEyQixDQUFBO1FBQzNCLGdDQUF5QixDQUFBO1FBQ3pCLGtDQUEyQixDQUFBO1FBQzNCLG1DQUE0QixDQUFBO1FBQzVCLGlDQUEwQixDQUFBO1FBQzFCLG9DQUE2QixD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