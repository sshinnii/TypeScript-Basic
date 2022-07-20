declare const maybe : unknown;
//unknown은 number에 바로 할당이 불가능 하다.
//const aNumber : number = maybe;


//type 가드
//다른 type 할당에 제약을 받는다.
if (maybe === true){
    const aBoolean : boolean = maybe;
}

if (typeof maybe === 'string'){
    //이안에서는 maybe가 string 타입으로 
    //제한을 받게 된다.
    const aString : string = maybe;
}