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
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.bold + EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        faintDecreasedIntensityOrDim() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.faintDecreasedIntensityOrDim +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        italic() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.italic + EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        underline() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.underline + EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        blinkSlowly() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.blinkSlowly + EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        blinkRapidly() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.blinkRapidly + EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        reverse() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.reverse + EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        hide() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.hide + EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        strike() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.strike + EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        primaryFont() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.primaryFont + EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        gothic() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.gothic + EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        doublyUnderlinedOrNotBold() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.doublyUnderlinedOrNotBold +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        normalIntensity() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.normalIntensity +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        neitherItalicNorBlackLetter() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.neitherItalicNorBlackLetter +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        notUnderlined() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.notUnderlined + EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        notBlinking() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.notBlinking + EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        proportionalSpacing() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.proportionalSpacing +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        notReversed() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.notReversed + EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        reveal() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.reveal + EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        notStrike() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.notStrike + EffectedTerminalText.SGR_FUNC_NAME), "f");
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
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBlack +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorRed() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorRed +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorGreen() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorGreen +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorYellow() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorYellow +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorBlue() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBlue +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorMagenta() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorMagenta +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorCyan() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorCyan +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorWhite() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorWhite +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
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
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.setForegroundColor +
                ";2;" +
                prepareValidNumber(r) +
                ";" +
                prepareValidNumber(g) +
                ";" +
                prepareValidNumber(b) +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
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
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.setForegroundColor +
                ";5;" +
                prepareValidNumber(code) +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        defaultForegroundColor() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.defaultForegroundColor +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorBlack() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBlack +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorRed() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorRed +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorGreen() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorGreen +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorYellow() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorYellow +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorBlue() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBlue +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorMagenta() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorMagenta +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorCyan() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorCyan +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorWhite() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorWhite +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
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
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.setBackgroundColor +
                ";2;" +
                prepareValidNumber(r) +
                ";" +
                prepareValidNumber(g) +
                ";" +
                prepareValidNumber(b) +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
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
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.setBackgroundColor +
                ";5;" +
                prepareValidNumber(code) +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        defaultBackgroundColor() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.defaultBackgroundColor +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        disableProportionalSpacing() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.disableProportionalSpacing +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        framed() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.framed + EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        encircled() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.encircled + EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        overlined() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.overlined + EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        neitherFramedNorEncircled() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.neitherFramedNorEncircled +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        notOverlined() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.notOverlined + EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        setUnderlineColor() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.setUnderlineColor +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        defaultUnderlineColor() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.defaultUnderlineColor +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        ideogramUnderlineOrRightSideLine() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.ideogramUnderlineOrRightSideLine +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        ideogramDoubleUnderlineOrDoubleLineOnTheRightSide() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.ideogramDoubleUnderlineOrDoubleLineOnTheRightSide +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        ideogramOverlineOrLeftSideLine() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.ideogramOverlineOrLeftSideLine +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        ideogramDoubleOverlineOrDoubleLineOnTheLeftSide() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.ideogramDoubleOverlineOrDoubleLineOnTheLeftSide +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        ideogramStressMarking() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.ideogramStressMarking +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        noIdeogramAttributes() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.noIdeogramAttributes +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        superscript() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.superscript + EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        subscript() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.subscript + EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        neitherSuperscriptNorSubscript() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.neitherSuperscriptNorSubscript +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorBrightBlack() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightBlack +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorBrightRed() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightRed +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorBrightGreen() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightGreen +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorBrightYellow() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightYellow +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorBrightBlue() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightBlue +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorBrightMagenta() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightMagenta +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorBrightCyan() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightCyan +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        foregroundColorBrightWhite() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.foregroundColorBrightWhite +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorBrightBlack() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightBlack +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorBrightRed() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightRed +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorBrightGreen() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightGreen +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorBrightYellow() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightYellow +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorBrightBlue() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightBlue +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorBrightMagenta() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightMagenta +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorBrightCyan() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightCyan +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
            return this;
        }
        backgroundColorBrightWhite() {
            __classPrivateFieldSet(this, _EffectedText_controlSequence, __classPrivateFieldGet(this, _EffectedText_controlSequence, "f") + (EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER +
                SGR.backgroundColorBrightWhite +
                EffectedTerminalText.SGR_FUNC_NAME), "f");
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
            this.print(...__classPrivateFieldGet(this, _EffectedText_messageBuffer, "f"));
            __classPrivateFieldSet(this, _EffectedText_messageBuffer, [], "f");
            return this;
        }
    }
    _EffectedText_controlSequence = new WeakMap(), _EffectedText_messageBuffer = new WeakMap(), _EffectedText_instances = new WeakSet(), _EffectedText_addResetTag = function _EffectedText_addResetTag() {
        return EffectedTerminalText.CONTROL_SEQUENCE_INTRODUCER + SGR.reset + EffectedTerminalText.SGR_FUNC_NAME;
    };
    function newEffect() {
        return new EffectedText();
    }
    EffectedTerminalText.newEffect = newEffect;
})(EffectedTerminalText = exports.EffectedTerminalText || (exports.EffectedTerminalText = {}));
exports.default = EffectedTerminalText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQWlCLG9CQUFvQixDQW92QnBDO0FBcHZCRCxXQUFpQixvQkFBb0I7O0lBQ3BCLGdEQUEyQixHQUFHLE9BQU8sQ0FBQztJQUN0QyxrQ0FBYSxHQUFHLEdBQUcsQ0FBQztJQUVqQyxJQUFLLEdBMkVKO0lBM0VELFdBQUssR0FBRztRQUNKLGtCQUFXLENBQUE7UUFDWCxpQkFBVSxDQUFBO1FBQ1YseUNBQWtDLENBQUE7UUFDbEMsbUJBQVksQ0FBQTtRQUNaLHNCQUFlLENBQUE7UUFDZix3QkFBaUIsQ0FBQTtRQUNqQix5QkFBa0IsQ0FBQTtRQUNsQixvQkFBYSxDQUFBO1FBQ2IsaUJBQVUsQ0FBQTtRQUNWLG1CQUFZLENBQUE7UUFDWix5QkFBa0IsQ0FBQTtRQUNsQixvQkFBYSxDQUFBO1FBQ2IsdUNBQWdDLENBQUE7UUFDaEMsNkJBQXNCLENBQUE7UUFDdEIseUNBQWtDLENBQUE7UUFDbEMsMkJBQW9CLENBQUE7UUFDcEIseUJBQWtCLENBQUE7UUFDbEIsaUNBQTBCLENBQUE7UUFDMUIseUJBQWtCLENBQUE7UUFDbEIsb0JBQWEsQ0FBQTtRQUNiLHVCQUFnQixDQUFBO1FBQ2hCLGtDQUEyQixDQUFBO1FBQzNCLGdDQUF5QixDQUFBO1FBQ3pCLGtDQUEyQixDQUFBO1FBQzNCLG1DQUE0QixDQUFBO1FBQzVCLGlDQUEwQixDQUFBO1FBQzFCLG9DQUE2QixDQUFBO1FBQzdCLGlDQUEwQixDQUFBO1FBQzFCLGtDQUEyQixDQUFBO1FBQzNCLGdDQUF5QixDQUFBO1FBQ3pCLG9DQUE2QixDQUFBO1FBQzdCLGtDQUEyQixDQUFBO1FBQzNCLGdDQUF5QixDQUFBO1FBQ3pCLGtDQUEyQixDQUFBO1FBQzNCLG1DQUE0QixDQUFBO1FBQzVCLGlDQUEwQixDQUFBO1FBQzFCLG9DQUE2QixDQUFBO1FBQzdC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