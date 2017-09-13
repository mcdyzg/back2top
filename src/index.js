/**
 * back2top: Let the window return to top
 * - stopTop: Where window stopped. (滚动到停止的位置，默认回到顶部)
 * - rate: rolling speed,default 2. (速度，默认2)
 * - callback: when the window stops rolling, the callback will execute. (滚动结束后的回调，传入停止位置)
 *
 * How to use it?
 * var back2top = require('back2top');
 * back2top()
**/
function backtotop(stopTop,rate,callback){
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(fn) {
            setTimeout(fn, 17);
        };
    }

    var doc = document.body.scrollTop? document.body : document.documentElement;
    var scrollTop = doc.scrollTop;
    stopTop = stopTop || 0

    var top = function () {
        scrollTop = scrollTop + (stopTop - scrollTop) / (rate || 2);

        // 临界判断，终止动画
        if (scrollTop < (stopTop + 1)) {
            doc.scrollTop = stopTop;
            callback && callback(stopTop)
            return;
        }
        doc.scrollTop = scrollTop;
        // 动画gogogo!
        requestAnimationFrame(top);
    };
    top();
}

export default backtotop