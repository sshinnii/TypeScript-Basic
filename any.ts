function returnAny(message :any): any {
    console.log(message);
}

const any1 = returnAny('리턴은 아무거나');

//any 타입은 어떤 것이던지 제약이 없다.
//어떤 타입이여도 상관없는 것 => 불안정한 코드가 될 수 있죠
any1.toString();

//그럼 어디서 사용될까?
//위에 함수와 같이 그냥 메세지를 뿌려주는 함수의 가능 어떤 메세지든 return이 가느하다는 의미로 any타입을 사용할 수 있다.
//아무값이나 넣을 수 있다. 그렇지 않은 경우에는 적절한 type을 작성하여]
// 값은 울타리를 만들어 주는것이 좋다.
// 가능한 any type은 사용하지 않는것이 좋다. => 타입 안정성이 없이 때문이다.

let looselyTyped : any = {};
const d = looselyTyped.a.b.c.d;

function leakingAny(obj:any){
    const a = obj.num;
    const b = a + 1;
    return b; 
}

const c = leakingAny({num : 0});
c.indexOf("0");