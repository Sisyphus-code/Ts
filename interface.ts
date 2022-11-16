interface Point{
    x:number;
    y:number;
}
function printCoord (pt: Point) {
    console.log("坐标x的值是:" + pt.x);
    console.log("坐标y的值是:" + pt.y);
  }printCoord({x:100,y:300});

//向现有的类型添加字段
interface MyWindow {
    count : number
}
interface MyWindow {
    title ?: string
}

const w: MyWindow = {
    count : 3
}
console.log(w)
