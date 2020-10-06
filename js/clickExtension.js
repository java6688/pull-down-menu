// 功能一（面向对象方式实现：新添一键全部收缩功能）：点击自身展开或收回功能
function clickExtension(itemClass, menuNameClass, shrinkClass) {
  // 控制全部收起按钮
  var shrinkBtn = document.getElementsByClassName(shrinkClass)[0];
  // 每个大菜单项
  var itemNodes = document.getElementsByClassName(itemClass);
  // 每个一级菜单包裹项
  var menuNameNodes = document.getElementsByClassName(menuNameClass);
  for(var i = 0; i < menuNameNodes.length; i++) {
    menuNameNodes[i].flag = true;
    menuNameNodes[i].onclick = function() {
      /* 绑定菜单名元素，绑定包裹的父元素会导致撑开高度后，点击子菜单会有冒泡行为自动收起菜单 */
      var currentParent = this.parentNode;
      var secItemNodes = currentParent.getElementsByClassName('sec-item');
      var secItemLength = secItemNodes.length;
      if(this.flag) {
        currentParent.style.transition = (secItemLength * 0.2) + 's';
        currentParent.style.height = (secItemLength * 50) + 'px';
        this.flag = !this.flag;
      } else {
        currentParent.style.height = '50px';
        this.flag = !this.flag;
      }
    }
    shrinkBtn.onclick = function() {
      for(var i = 0; i < itemNodes.length; i++) {
        itemNodes[i].style.height = '50px';
        menuNameNodes[i].flag = true;
      }
    }
  }
}