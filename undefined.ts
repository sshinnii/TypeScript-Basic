//return으로 무언가를 하지 않겠다.
function retrunVoid(message : string) :void{
    console.log(message);
    //undefined만 가능하다.
    return undefined;
}

//사용 불가.
const r:undefined = retrunVoid('리터닝 없어.');