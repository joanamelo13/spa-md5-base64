const text = document.getElementById("text");

const [resultBase64Encode] = document.getElementsByClassName("base64encode");
const [resultBase64Decode] = document.getElementsByClassName("base64decode");
const [resultUpper] = document.getElementsByClassName("upper");
const [resultCapital] = document.getElementsByClassName("capital");
const [resultLower] = document.getElementsByClassName("lower");
const [resultProper] = document.getElementsByClassName("proper");
const [form] = document.getElementsByTagName('form');

const firstLetterUpper = (str) => {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') continue;

        result = str[i].toUpperCase() + str.slice(i + 1);
        break;
    }

    return result || str;
}

function capitalCase(str) {
    let result = str;

    const splitDot = result.split('.');
    result = splitDot.map(firstLetterUpper).join(' ');

    const splitSpace = result.split(' ');
    result = splitSpace.map(firstLetterUpper).join(' ');

    return result;
}

function encode(str) {
    const words = CryptoJS.enc.Utf8.parse(str);
    return CryptoJS.enc.Base64.stringify(words);
}

function decode(base64) {
    const words = CryptoJS.enc.Base64.parse(base64);
    return CryptoJS.enc.Utf8.stringify(words);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const { value } = text;

    const encoded = encode(value);
    const decoded = decode(encoded);

    resultBase64Encode.innerHTML = encoded;
    resultBase64Decode.innerHTML = decoded;

    resultUpper.innerHTML = value.toUpperCase();
    resultLower.innerHTML = value.toLowerCase();

    resultCapital.innerHTML = capitalCase(value);
});