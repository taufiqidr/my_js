function truthCheck(collection, pre) {

    for (let i in collection) {
        if (collection[i][pre]) {

        } else {
            return false
        }
    }
    return true;
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");