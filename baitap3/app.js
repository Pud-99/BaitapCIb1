import testonline from "./testonline.js";

alert(`Nhập 1 Thêm bài test mới`)

    let idtest = prompt(`nhập id bài test`);
    let thoiluong = prompt(`nhập thời lượng bài test`);
    let cauhoi = [];
    let Testonline = new testonline(idtest,cauhoi,thoiluong);
    while(true){
    let command = prompt(`nhập 1 để thêm câu hỏi
                          nhập 2 để sửa câu hỏi
                          nhập 3 để xóa câu hỏi  `);
    if(command == 1){
        let type = prompt(`nhập 1 nếu là câu hỏi tự luận, nhập 2 nếu là câu hỏi trác nghiệm`);
        Testonline.themcauhoi(type);
    }
    if(command == 2){
        
        Testonline.suacauhoi();
    }
    if(command == 3){
        Testonline.xoacauhoi();
    }
    if(command == 4){
        break;
    }
    console.log(Testonline);
}
    



