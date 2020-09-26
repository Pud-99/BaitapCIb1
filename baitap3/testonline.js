import { tracnghiem } from "./trachnghiem.js";
import { tuluan } from "./tuluan.js";

class testonline {
    idtest;
    caccauhoi = [];
    thoiluong;
    constructor(idtest,caccauhoi,thoiluong){
        this.idtest = idtest;
        this.caccauhoi = caccauhoi;
        this.thoiluong = thoiluong;
    }

    themcauhoi(type){
        let id = prompt(`nhập id câu hỏi`);
        if (type == '1'){
            let noidung = prompt(`nhập nội dung câu hỏi tự luận`);
            let dapan = prompt(`nhập đáp án câu hỏi tự luận`);
            let newtuluan = new tuluan(id,noidung,dapan);
            this.caccauhoi.push(newtuluan);
        }
        if (type == '2'){
            let arrnoidung = [];
            let cauhoichinh = prompt(`nhập câu hỏi trắc nhiệm`);
            let n = prompt(`nhập số lượng đáp án`);
            for(let i = 0; i<n; i++){
                let cauhoi = prompt(`nhập đáp án ${i+1}`);
                arrnoidung.push(cauhoi);
            }
            let dapan = prompt(`nhập đáp án câu hỏi trắc nhiệm`);
            let newtracnghiem = new tracnghiem(id,cauhoichinh,arrnoidung,dapan);
            this.caccauhoi.push(newtracnghiem);
        }
    }

    xoacauhoi(){
        let id = prompt(`nhập vào id câu hỏi bạn muốn xóa`);
        let count = 0;
        for(let i = 0 ; i<this.caccauhoi.length; i++){
            if(this.caccauhoi[i].id == id ){
                this.caccauhoi.splice(i,1);
                count++;
            }
            if(count == 0){
                alert('không tìm thấy id này');
            } 
        }
    }

    suacauhoi(){
        let id = prompt(`nhập vào id câu hỏi bạn muốn sửa`);
        let count = 0;
        for(let i = 0 ; i<this.caccauhoi.length; i++){
            if(this.caccauhoi[i].id == id ){
                if(this.caccauhoi[i].cauhoichinh == undefined){
                    let newid = prompt(`nhập id mới cho câu hỏi tự luận`);
                    let newnoidung = prompt(`nhập nội dung mới cho câu hỏi tự luận`);
                    let newdapan = prompt(`nhập đáp án mới cho câu hỏi tự luận`);
                    this.caccauhoi[i].id = newid;
                    this.caccauhoi[i].noidung = newnoidung;
                    this.caccauhoi[i].dapan = newdapan;
                }
                if(this.caccauhoi[i].cauhoichinh != undefined){
                    let newid = prompt(`nhập id mới cho câu hỏi trắc nhiệm`);
                    let newcauhoichinh = prompt(`nhập vào câu hỏi chính cho câu trắc nhiệm`)
                    let newnoidung = prompt(`nhập các đáp án mới cho câu hỏi trắc nhiệm`);
                    let newdapan = prompt(`nhập đáp án đúng cho câu hỏi trắc nhiệm`);
                    this.caccauhoi[i].id = newid;
                    this.caucauhoi[i].cauhoichinh = newcauhoichinh;
                    this.caccauhoi[i].noidung = newnoidung;
                    this.caccauhoi[i].dapan = newdapan;
                }
                count++;
            }
            if(count == 0){
                alert('không tìm thấy id này');
            } 
        }
    }
}

export default testonline ;