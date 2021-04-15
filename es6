function Temperature(degrees) {
    this.degrees = degrees;
}
Temperature.prototype[Symbol.toPrimitive] = function(hint) {
    switch (hint) {
        case "string":
return this.degrees + "\u00b0"; // 温度符号 case "number":
    return this.degrees;
case "default":
    return this.degrees + " degrees";
} };
let freezing = new Temperature(32);
console.log(freezing + "!");
console.log(freezing / 2);
console.log(String(freezing));
// "32 degrees!"
// 16
// "32°"
