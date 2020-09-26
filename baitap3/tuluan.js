import { cauhoi } from "./cauhoi.js";

export class tuluan extends cauhoi {
    noidung;
    constructor(id,noidung,dapan){
        super(id,dapan);
        this.noidung = noidung;
    }

}