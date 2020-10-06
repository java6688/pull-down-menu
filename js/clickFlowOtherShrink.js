// 功能二：点击菜单，其他展开的菜单全部收回
function clickFlowOtherShrink(shrinkBtn, itemNodes, menuNameNodes) {
  // 控制全部收起按钮
  var shrinkBtn = document.getElementsByClassName('shrink-btn')[0];
  // 一级菜单
  var itemNodes = document.getElementsByClassName('item');
  var menuNameNodes = document.getElementsByClassName('menu-name');
  for(var i = 0; i < itemNodes.length; i++) {
    itemNodes[i].onclick = function() {
      for(var j = 0; j < itemNodes.length; j++) {
        itemNodes[j].style.height = '50px';
      }
      var secItemNodes = this.getElementsByClassName('sec-item');
      var secItemLength = secItemNodes.length;
      this.style.transition = (secItemLength * 0.2) + 's';
      this.style.height = (secItemLength * 50) + 'px';
    }
    shrinkBtn.onclick = function() {
      for(var i = 0; i < itemNodes.length; i++) {
        itemNodes[i].style.height = '50px';
      }
    }
  }
}