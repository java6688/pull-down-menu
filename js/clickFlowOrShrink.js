// 功能一（匿名函数实现）：点击自身展开或收回功能
function clickFlowOrShrink() {
  // 控制全部收起按钮
  var shrinkBtn = document.getElementsByClassName('shrink-btn')[0];
  // 一级菜单
  var itemNodes = document.getElementsByClassName('item');
  shrinkBtn.style.display = 'none';
  for(var i = 0; i < itemNodes.length; i++) {
    // 使用匿名函数解决闭包问题，使得flag菜单收缩控件是独立的
    (function(i) {
      var flag = true;
      itemNodes[i].onclick = function() {
        var secItemNodes = this.getElementsByClassName('sec-item');
        var secItemLength = secItemNodes.length;
        if(flag) {
          this.style.transition = (secItemLength * 0.2) + 's';
          this.style.height = (secItemLength * 50) + 'px';
          flag = !flag;
        } else {
          this.style.height = '50px';
          flag = !flag;
        }
      }
    })(i)
  }
}