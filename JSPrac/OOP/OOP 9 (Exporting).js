// 내보낼 파일 만들기
const foo = Math.PI * Math.SQRT2;

function cube(x){
    return x * x * x;
}

var graph = {
    option:{
        color:"white",
        thickness:"2px"
    },
    draw:function(){
        console.log("Draw Fucntion");
    }
}
export {foo, graph, cube} // 순서 상관 X