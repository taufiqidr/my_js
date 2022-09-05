function convertHTML(str) {
    let temp = ''
    for (let i in str) {
        // console.log(str[i])

        if (str[i].match(/&+|<+|>+|"+|'+/g)) {
            switch (str[i]) {
                case '&':
                    temp += '&amp;';
                    break;
                case '<':
                    temp += '&lt;'
                    break;
                case '>':
                    temp += '&gt;'
                    break
                case '\"':
                    temp += '&quot;';
                    break
                case "\'":
                    temp += '&apos;'

            }
        } else {
            temp += str[i]
        }

    }
    console.log(temp)
    return temp
}

convertHTML("Sixty > twelve");