// ==UserScript==
// @name         Kahoot name bypass
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Bypass kahoot bad word filter
// @author       2222jokeri
// @updateURL    https://github.com/jokeri2222/Kahoot-bad-name-bypasser/raw/main/KahootNameBypasser.user.js
// @downloadURL  https://github.com/jokeri2222/Kahoot-bad-name-bypasser/raw/main/KahootNameBypasser.user.js
// @match        https://kahoot.it/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kahoot.it
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function GetUnblockName()
{
    var text = $("#nickname")[0].value
    var unblockedText = ""

    for (var i=0; i<text.length; i++) {unblockedText += text[i]+"\u200b"}
    return unblockedText
}

function initialize()
{
    var div = $(".join__FormWrapper-sc-1ezg926-0")
    div.append("<button id=UnblockBtn><span id=UnblockName>!!!Unblock name!!!<span></button>")
    var unblockBtn = $("#UnblockBtn")[0]
    unblockBtn.innerHTML += "&NewLine;&NewLine;After clicking this button do these things."
    unblockBtn.innerHTML += "&NewLine;1. Click at the end of name."
    unblockBtn.innerHTML += "&NewLine;2. Press backspace once."
    unblockBtn.innerHTML += "&NewLine;3. Click \"OK, go\" or press enter."

    $("#UnblockBtn").css({
        "width": "100%",
        "margin": "0px",
        "border": "0px",
        "cursor": "pointer",
        "display": "inline-block",
        "box-shadow": "rgb(0 0 0 / 15%) 0px 2px 4px, rgb(0 0 0 / 25%) 0px -4px inset",
        "background": "rgb(51, 51, 51)",
        "color": "rgb(255, 255, 255)",
        "border-radius": "4px",
        "font-size": "0.875rem",
        "font-weight": "bold",
        "text-align": "center",
        "text-decoration": "none",
        "min-width": "48px",
        "min-height": "48px",
        "padding": "0px 16px 4px",
        "margin-top": "15px",
        "white-space": "pre-wrap",
        "font-family": "Montserrat, \"Noto Sans Arabic\", \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    })
    $("#UnblockBtn").hover(function (){
        $(this).css({
            "min-height": "46px",
            "margin-top": "17px",
            "padding-bottom": "2px",
            "background-color": "rgb(47, 47, 47)",
            "box-shadow": "rgb(0 0 0 / 25%) 0px -2px inset"
        })
    }, function () {
        $(this).css({
            "width": "100%",
            "margin": "0px",
            "border": "0px",
            "cursor": "pointer",
            "display": "inline-block",
            "box-shadow": "rgb(0 0 0 / 15%) 0px 2px 4px, rgb(0 0 0 / 25%) 0px -4px inset",
            "background": "rgb(51, 51, 51)",
            "color": "rgb(255, 255, 255)",
            "border-radius": "4px",
            "font-size": "0.875rem",
            "font-weight": "bold",
            "text-align": "center",
            "text-decoration": "none",
            "min-width": "48px",
            "min-height": "48px",
            "padding": "0px 16px 4px",
            "margin-top": "15px",
            "white-space": "pre-wrap",
            "font-family": "Montserrat, \"Noto Sans Arabic\", \"Helvetica Neue\", Helvetica, Arial, sans-serif"
        })
    })
    $("#UnblockName").css({
            "font-size": "1.85rem",
            "color": "rgb(255, 0, 0)"
        })


    var nickname = $("#nickname")
    unblockBtn.addEventListener('click', async function(){
        var unblockedName = GetUnblockName()
        console.log("Unlocked name is \""+unblockedName+"\"")
        nickname[0].value = unblockedName.substring(0)
        alert("Changed name to \""+unblockedName+"\"")
    });
}

while (true)
{
    while (true)
    {
        if ($(".join__FormWrapper-sc-1ezg926-0")[0] != undefined) break
        await sleep(100)
    }
    initialize()

    while (true)
    {
        if ($(".join__FormWrapper-sc-1ezg926-0")[0] == undefined) break
        await sleep(100)
    }
}
