/* BU BOT İSTEK ÜZERİNE YAPILMIŞ BİR BOTTUR
OLASI DURUMLARDAN BİZ SORUMLULUK KABUL ETMEZ
Telegram / @orgutsahibi
GitHub / ErdemBey1

WhatsSiri SİRİ-ERDEM/BEY

OWNER|ErdemBey
*/

const Siri = require('../events');
const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys'); // Boredom 😬

const Language = require('../language');
const Lang = Language.getString('locate'); // Language supp. 😉


    Siri.addCommand({pattern: 'locate', fromMe: true, desc: Lang.L_DESC, warn: Lang.L_WARN}, (async (message, match) => {

        var r_text = new Array ();
        r_text[0] = "degreesLatitude: 24.121231, degreesLongitude: 55.1121221"; // Actually, I don't know where is this place..
        r_text[1] = "degreesLatitude: 8.838637, degreesLongitude: -13.721434"; // U too homie

        var i = Math.floor(2*Math.random()) // Random func. 🤪

        await message.sendMessage(`My Location! ${r_text[i]}`, MessageType.location); // It sends ur location. Cool tho 😱

}));
