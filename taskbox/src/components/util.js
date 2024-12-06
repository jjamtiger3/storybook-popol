const getByteLength = (str) => {
    let byteLength = 0;

    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);

        if (charCode <= 0x7F) {
            // ASCII 문자 (0x00 ~ 0x7F): 1바이트
            byteLength += 1;
        } else if (charCode <= 0x7FF) {
            // 유니코드 문자 (0x80 ~ 0x7FF): 2바이트
            byteLength += 2;
        } else if (charCode <= 0xFFFF) {
            // 유니코드 문자 (0x800 ~ 0xFFFF): 3바이트
            byteLength += 3;
        } else {
            // 유니코드 문자 (0x10000 ~ 0x10FFFF): 4바이트
            byteLength += 4;
        }
    }

    return byteLength;
}
const setCursorPosition = (input, position) => {
    if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(position, position);
    } else if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', position);
        range.moveStart('character', position);
        range.select();
    }
}
const addStrToCursorPosition = (input, optionOrStr) => {
    if (typeof optionOrStr !== 'string' && !optionOrStr.text) {
        return;
    }
    var text = (typeof optionOrStr === 'string') ? optionOrStr : optionOrStr.text;
    var position = getCursorPosition(input);
    var content = input.value;
    var newContent = content.substr(0, position) + text + content.substr(position);
    var returnValue = true;

    if (optionOrStr.beforeChange && typeof optionOrStr.beforeChange === 'function') {
        returnValue = optionOrStr.beforeChange(input, content, newContent, position);
    }

    if (returnValue !== false) {
        input.value = newContent;
        setCursorPosition(input, position + text.length);

        if (optionOrStr.afterChange && typeof optionOrStr.afterChange === 'function') {
            optionOrStr.afterChange(input, content, newContent, position);
        }
    }
}
const getCursorPosition = (input) => {
    if (document.selection) {
        input.focus();
        var range = document.selection.createRange();
        range.moveStart('character', -input.value.length);
        return range.text.length;
    } else if (input.selectionStart || input.selectionStart === 0) {
        return input.selectionStart;
    }
    return 0;
}
export {
    getByteLength,
    getCursorPosition,
    setCursorPosition,
    addStrToCursorPosition
}