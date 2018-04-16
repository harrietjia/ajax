String.prototype.formate = function () {
    var str = this; //指调用该方法的字符串
    for (var i = 0; i < arguments.length; i++) {
        str = str.replace(new RegExp("\\{" + i + "\\}", "ig"), arguments[i]);
    }
    return str;
}


function initOrderList(elem, data) {
    //定义HTML页面模版
    /*
    * 对应关系：
    * 0 - order_num
    * 1 - shop_name
    * 2 - order_url
    * 3 - price
    * 4 - payment_mode
    * 5 - submit_time
    * 6 - order_state
    * 7 - product_name
    * 8 - product_url
    * 9 - product_img
    * 10 - date
    * 11 - time
    * */
    var template = '<tr class="trOrder"><td colspan="6">' +
        '<span>订单编号：{0}</span>' +
        '<span><a href="{2}">{1}</a></span></td></tr>' +
        '<tr class="trProd"><td><div class="imgList">' +
        '<a href={0} target="_blank">' +
        '<img src={9}' +
        ' title={7}' +
        ' alt="product" width="50" height="50"></a></div></td>' +
        '<td>aaa</td>' +
        '<td>￥{3}<br>{4}</td>' +
        '<td>{10}<br>{11}</td>' +
        '<td>{6}</td>' +
        '<td><a href="{0}">查看</a>|<a href="{1}">删除</a><br>' +
        '<a href="{2}">评价晒单</a><br>' +
        '<a class="btn_buy_again" href="{3}">还要买</a>' +
        '</td></tr>';

    var repeatstr = '<tr class="trProd"><td><div class="imgList">' +
        '<a href={0} target="_blank">' +
        '<img src={9}' +
        ' title={7}' +
        ' alt="product" width="50" height="50"></a></div></td>' +
        '<td>aaa</td>' +
        '<td>￥{3}<br>{4}</td>' +
        '<td>{10}<br>{11}</td>' +
        '<td>{6}</td>' +
        '<td><a href="{0}">查看</a>|<a href="{1}">删除</a><br>' +
        '<a href="{2}">评价晒单</a><br>' +
        '<a class="btn_buy_again" href="{3}">还要买</a>' +
        '</td></tr>';

    var new_html = "";
    var orderarr = [];
    $.each(data, function (index, obj) {
        var datetime = obj.submit_time;
        var date = datetime.split("T")[0];
        var time = datetime.split("T")[1];

        var state = parseInt(obj.order_state);
        var s;
        switch(state){
            case 0:
                s = "未付款";
                break;
            case 1:
                s = "已付款";
                break;
            case 2:
                s = "已发货";
                break;
            case 3:
                s = "已完成";
                break;
        }
            var strr ='';

            orderarr[index] = obj.order_num;

            if (orderarr[index]==orderarr[index-1]){

                strr = repeatstr.formate(
                    obj.order_num,
                    obj.shop_name,
                    obj.order_url,
                    obj.price,
                    obj.payment_mode,
                    obj.submit_time,
                    s,
                    obj.product_name,
                    obj.product_url,
                    obj.product_img,
                    date,
                    time
                );

            }else{
                strr = template.formate(
                    obj.order_num,
                    obj.shop_name,
                    obj.order_url,
                    obj.price,
                    obj.payment_mode,
                    obj.submit_time,
                    s,
                    obj.product_name,
                    obj.product_url,
                    obj.product_img,
                    date,
                    time
                );
            }

            new_html += strr;

    });


    elem.append(new_html);
}