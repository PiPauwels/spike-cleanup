# Spike mail cleanup

[Spike Mail](https://www.spikenow.com/) is a great e-mail client, that lets you treat your e-mails like they are regular (group) chats. Spike strips e-mails of quoted (previous) e-mails you are replying to, giving it a natural feel of a chatclient. 

However, the website only supports a handful of languages - English, Spanish, Catalan, German, Hebrew, French and Japanese. When mailing in unsupported languages, the chat bubble always includes part of the quoted text. Example:

![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCeoedIuWGsni0rwIJAgam-a91FtmQ0HGkqhEAhHbF_GjNEmSKTABzmmHKd2W6Hzuz68KTE0yZcPSwdH2bflxSOn2vxEzp_XprFHNHIP9NTELA37HMjW7cdSxqRkEmSdESg__P_3EcU3RqWMba4_h70K5Gbr9242JumM_zmChgTZE5-DRyRw-kyjIs1CfJ/s16000/Schermafbeelding%202024-02-15%20124330.png)

This breaks the natural feeling of a chat conversation and will start to annoy you real soon. This scripts removes quoted mail in other languages as well.

![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioleLBKsuycOhQwJ6MU_GiahB5seo4aYMnCmlWPxo56EG_LZrt8Y63aagdujp-VnPrXSxqTPvEhYZj7dibP2uHCJzVQOIa1g1yu_Euu0U8rzHVzz0AL6Tjm7QSJlTc7Gi0svBDNw6sPXSqfspRgBcb-7z9YQM6JRO25vvXXd110GXbyjW-Wfrj4GY7wiSp/s16000/Schermafbeelding%202024-02-15%20124412.png)

Currently, I've only added Dutch, but you can easily add regular expressions to the script to add other unsupported languaged. As a bonus, I've added some regular expressions to remove those annoying default e-mail signature that are often added by mobile clients ("Sent from my iPhone", etc.).

## Script installeren

Dit script maakt gebruik van User Script Manager Tampermonkey/Greasemonkey en is dus bruikbaar in Chrome, Microsoft Edge, Safari, Opera en Firefox. 

### Vereisten

Naast één van de hierboven vermelde browsers moet je eerst en vooral de plugin Tampermonkey installeren in je browser:
* [Google Chrome Tampermonkey extension](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* [Microsoft Edge Tampermonkey app](https://www.microsoft.com/store/apps/9NBLGGH5162S)
* [Apple Safari extension](https://safari.tampermonkey.net/tampermonkey.safariextz)
* [Mozilla Firefox addon](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
* [Opera extension](https://addons.opera.com/en/extensions/details/tampermonkey-beta/)

### Installatie

Ga naar [Spike quoted mail fix](https://greasyfork.org/nl/scripts/487366-spike-quoted-mail-fix) en klik op de groene knop "Install this script".

Je krijgt vervolgens het script te zien in de extensie van uw browser. Klik daar nogmaals op de knop "Install" om het script te installeren.
