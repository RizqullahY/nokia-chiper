const nokiaChiper = {
  mapping: {
    2: "a", 22: "b", 222: "c",
    3: "d", 33: "e", 333: "f",
    4: "g", 44: "h", 444: "i",
    5: "j", 55: "k", 555: "l",
    6: "m", 66: "n", 666: "o",
    7: "p", 77: "q", 777: "r", 7777: "s",
    8: "t", 88: "u", 888: "v",
    9: "w", 99: "x", 999: "y", 9999: "z",
    0: " ",

    "|0": "0", "|1": "1", "|2": "2", "|3": "3", "|4": "4",
    "|5": "5", "|6": "6", "|7": "7", "|8": "8", "|9": "9",

    "!2": "A", "!22": "B", "!222": "C",
    "!3": "D", "!33": "E", "!333": "F",
    "!4": "G", "!44": "H", "!444": "I",
    "!5": "J", "!55": "K", "!555": "L",
    "!6": "M", "!66": "N", "!666": "O",
    "!7": "P", "!77": "Q", "!777": "R", "!7777": "S",
    "!8": "T", "!88": "U", "!888": "V",
    "!9": "W", "!99": "X", "!999": "Y", "!9999": "Z"
  },

  reverseMapping: function () {
    let reverse = {};
    for (let key in this.mapping) {
      reverse[this.mapping[key]] = key;
    }
    return reverse;
  },

  encrypt: function (text) {
    let reverseMap = this.reverseMapping();
    return text
      .split("")
      .map((char) => {
        if (char >= "A" && char <= "Z") {
          return reverseMap[char] || char; 
        }
        return reverseMap[char.toLowerCase()] || char; 
      })
      .join(" ");
  },

  decrypt: function (code) {
    return code
      .split(" ")
      .map((num) => this.mapping[num] || num)
      .join("");
  },
};

