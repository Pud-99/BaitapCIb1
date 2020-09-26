import { cauhoi } from "./cauhoi.js";

export class tracnghiem extends cauhoi {
    cauhoichinh;
    noidung=[];
    constructor(id,cauhoichinh,noidung,dapan){
        super(id,dapan);
        this.noidung = noidung;
        this.cauhoichinh = cauhoichinh;
    }

}