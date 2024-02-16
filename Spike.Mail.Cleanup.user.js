// ==UserScript==
// @name         Spike quoted mail fix
// @namespace    http://tampermonkey.net/
// @version      2024-02-11
// @description  Removes quoted text from Spike messages in unsupported languages and default junk signatures (style "Sent from my iThingy").
// @author       PiPauwels
// @match        https://spikenow.com/web/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @require      https://update.greasyfork.org/scripts/383527/701631/Wait_for_key_elements.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=spikenow.com
// @grant        GM.getValue
// ==/UserScript==

const QUOTED_TEXT_REGEX_DUT = /\n?\s?Op\s(maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag|zondag|ma|di|wo|do|vr|za|zo)?\s?\d+\s.*(schreef|heeft).*(<|lt;)+.*@.*(>|gt;)+.*(geschreven)?(.*|\n)*/g;
const DEFAULT_SIG_1 = /Enviado (de mi|de|desde) ((<|&lt;)a.*(>|&gt;)+)?.*/g;
const DEFAULT_SIG_2 = /Verstuurd vanaf mijn iPhone(.*|\n)*/g;
const TRAILING_NEWLINES = /(<br>|<br\/>|\s)+$/g;

waitForKeyElements (".thread", addThreadListener, false);

function addThreadListener (jNode) { jNode.click(function(){ clickThread(); }); }

function clickThread()
{
    waitForKeyElements ("#__hop_embed", stripQuotedText, true, ".messageframe");
    waitForKeyElements (".bubble > .body > .itemMessage", onMessagesRendered, false);
}

function onMessagesRendered(jNode)
{
    jNode.click(function(){ clickMessage(); });
    stripQuotedText(jNode);
}

function clickMessage()
{
    waitForKeyElements ("#__hop_embed", stripQuotedText, false, ".messageframe");
}

function stripQuotedText (jNode)
{
    jNode.html( jNode.html().replace(QUOTED_TEXT_REGEX_DUT, "")
                            .replaceAll(DEFAULT_SIG_1,"")
                            .replaceAll(DEFAULT_SIG_2,"")
                            .replaceAll(TRAILING_NEWLINES,""));
}
