"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Epm = /** @class */ (function () {
    function Epm() {
        this.id = "dcs";
        this.name = "Ram";
        this.salary = 99000;
        this.address = "Borivali";
    }
    Epm.prototype.displayInfo = function () {
        console.log(this.id, this.name, this.salary, this.address);
    };
    return Epm;
}());
var e = new Epm();
e.displayInfo();
