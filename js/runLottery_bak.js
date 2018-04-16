function start() {
    
}

function runLottery(elem) {
    var context = elem.getContext('2d');

    const WIDTH = elem.width;
    const HEIGHT = elem.height;

    // 图片加载
    var as = new Image();
    as.src = "img/timg.png";
    var point = new Image();
    point.src = "img/point.png";
    point.width = 50;
    point.height = 180;

    // 平移画布
    context.translate(WIDTH/2,HEIGHT/2);
    // 绘制图片
    as.onload = function () {
        context.drawImage(as,-as.width/2,-as.height/2);
        context.drawImage(point,-point.width/2+1,-point.height/2-30);
    }


    var startTime;
    var loop;

    this.start =function () {
        running();
        // 当start方法被调用时，第一次旋转
        startTime = new Date().getTime();
        loop = setInterval(running,50);
    }

    var pie = Math.PI/15;
    function running() {
        // 设置每次旋转的度数
        pie += Math.PI/15;

        context.rotate(pie);
        context.drawImage(as,-as.width/2,-as.height/2);
        context.rotate(-pie);
        context.drawImage(point,-point.width/2+1,-point.height/2-30);

        var endTime = new Date().getTime();
        // 判断endTime - startTime = 指定值（旋转多长时间-毫秒）

        if(endTime - startTime >= 3000){
            clearInterval(loop);
        }
    }

}