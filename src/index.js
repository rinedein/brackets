module.exports = function check(str, bracketsConfig) {
    if(str.length % 2 !== 0) return false;
    for(let n = 0; n < str.length * 40; n++) {
        bracketsConfig.map(n => {
            const b = n.join('');
            if(str.includes(b)) str = str.replace(b,'');
            return b;
        });
    }

    if (str.length) return false
    else return true
}
