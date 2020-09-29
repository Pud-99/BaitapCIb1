import sach from "./sach.js";
let ids = 1;


export default class tusach {
    id;
    soluong;
    cacsach=[];
    ngaytao;

    constructor(id,soluong,ngaytao){
        this.id = id;
        this.soluong = soluong;
        this.ngaytao = ngaytao;
        this.cacsach = [];
    }

    themsach(){
        if(this.cacsach.length <= this.soluong-1){
        let tensach = prompt(`nhập tên sách`);
        let tacgia = prompt(`nhập tên tác giả`);
        let id = ids;
        let theloai = prompt(`nhập thể loại sách`);
        let dateSach = new Date();
        let newSach = new sach(id,tensach,tacgia,theloai,dateSach.toISOString());
        this.cacsach.push(newSach);
        ids++;
        } else{
            let com = prompt(`
            số lượng sách trong tủ đã đầy bạn có muốn bỏ bớt sách không
            1: Yes 
            2: No`)
            if(com == 1){
                this.botsach();
            } else return;
        }
        
    };

    botsach(){
        let id = prompt(`nhập id sách mà bạn muốn bỏ khỏi tủ sách`);
        let check = 0;
        for(let i = 0 ; i < this.cacsach.length ; i++){
            if(this.cacsach[i].id == id){
                this.cacsach.splice(i,1);
                check++;
            } 
        }
        if (check == 0){
            alert(`không tìm thấy id xin vui lòng nhập lại`);
            this.botsach();
        }
    }
}