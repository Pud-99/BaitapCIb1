import sach from "./sach.js";
import tusach from "./tusach.js";

let idTS = 1;
let cactusach = [];
let checkmain = true;


while(checkmain){
let command = prompt(`
        Nhập 1 để thêm tủ sách
        Nhập 2 để bớt tủ sách
        Nhập 3 để sửa tủ sách
        Nhập 4 để xem danh sách tủ sách
        Nhập 5 để thêm sách vào tủ
        Nhập 6 để thoát khỏi chương trình Tủ Sách Cá Nhân`);

    if(command == 1){
        let soluong = prompt(`nhập số lượng sách lớn nhất chứa được`);
        let dateTS = new Date();
        let id = idTS;
        let newTuSach = new tusach(id,soluong,dateTS.toISOString());
        cactusach.push(newTuSach);
        idTS++;
    }
    if(command == 2){
        let check = 0;
        let id = prompt(`nhập id tủ sách bạn muốn bỏ`);
        for(let i = 0; i < cactusach.length ; i++){
            if (cactusach[i].id == id){
                cactusach.splice(i,1);
                check++;
            }
        }
        if ( check == 0){
            alert(`không tìm thấy tủ sách này`);
        }
    }
    if(command == 3){
        let check = 0;
        let id = prompt(`nhập id tủ sách bạn muốn sửa`);
        for(let i = 0; i < cactusach.length ; i++){
            if (cactusach[i].id == id){
                let newsoluong = prompt(`nhập số lượng sách lớn nhất mới`);
                if (newsoluong < cactusach[i].cacsach.length){
                    let commd = prompt(`
                    Sách trong tủ nhiều hơn số lượng tối đa bạn có muốn bớt sách hay làm sạch tủ sách
                    1:bớt sách
                    2:làm sạch sách
                    `)
                    if(commd == 1){
                        cactusach[i].botsach();
                    } if (commd == 2){
                        cactusach[i].cacsach = [];
                    }
                }
                let newdateTS = new Date();
                cactusach[i].soluong = newsoluong;
                cactusach[i].ngaytao = newdateTS;
            }
        }
        if ( check == 0){
            alert(`không tìm thấy tủ sách này`);
        }
    }
    if(command == 4){
        for(let i = 0 ; i < cactusach.length; i++){
            console.log(`
${i+1}: id tủ sách: ${cactusach[i].id}
số lượng sách tối đa : ${cactusach[i].soluong}`)
                    console.log(`các sách trong tủ :`)
            for(let j = 0 ; j < cactusach[i].cacsach.length ; j++){
                console.log(`${cactusach[i].cacsach[j].tensach}`)
            }
            console.log(`ngày tạo tủ sách : ${cactusach[i].ngaytao}`);
        }
       }
    if(command == 5){
        let check = 0;
        let id = prompt(`nhập vào id tủ muốn thêm sách`);
        for(let i = 0 ; i< cactusach.length ; i++){
            if (cactusach[i].id == id){
                cactusach[i].themsach();
                check++;
            }
        }
        if ( check == 0){
            alert(`không tìm thấy tủ sách này`);
        }
    }
    if(command == 6){
        checkmain = false;
    }
}

console.log(cactusach);