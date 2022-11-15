// html에서 요청이 오면
onmessage = (e) => {
    // html에서 전송한 데이터 받기
    let inputNum = e.data;
    let result = 0;
    for(let i = 0; i <= inputNum; i++){
        result += i;
    }
    // 작업 수행이후 html 파일로 결과를 전송
    postMessage(result);
}