import { content as data } from "../assets/publicData.json";
import AES from "crypto-js/aes";
import CryptoJS from "crypto-js";

function getPassword() {
    return new URLSearchParams(window.location.search).get("t");
}

export function decrypt(text) {
    return AES.decrypt(text, getPassword()).toString(CryptoJS.enc.Utf8);
}

export function encrypt(text) {
    const result = AES.encrypt(text, getPassword());
    return result.formatter.stringify(result);
}

export function getTuerchen() {
    const decrypted = decrypt(data, getPassword());
    try {
        return JSON.parse(decrypted);
    } catch (e) {
        console.error("Error parsing data", e, decrypted)
        return [];
    }
}