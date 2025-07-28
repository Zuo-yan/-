// 当DOM内容加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取切换按钮元素
    const toggleBtn = document.getElementById('toggleSubs');
    
    // 获取所有附属模组行（带有sub-mod类的行）
    const subMods = document.querySelectorAll('.sub-mod');
    
    // 记录当前隐藏状态（默认显示）
    let isHidden = false;
    
    // 为切换按钮添加点击事件监听器
    toggleBtn.addEventListener('click', function() {
        // 切换隐藏状态
        isHidden = !isHidden;
        
        // 遍历所有附属模组行
        subMods.forEach(mod => {
            if (isHidden) {
                // 如果当前是隐藏状态，添加hidden类
                mod.classList.add('hidden');
            } else {
                // 如果当前是显示状态，移除hidden类
                mod.classList.remove('hidden');
            }
        });
        
        // 更新按钮文本
        toggleBtn.textContent = isHidden ? 
            '显示附属模组' : 
            '隐藏附属模组';
    });
});

/*
代码原理说明：

1. DOMContentLoaded 事件：
   - 确保在DOM完全加载后再执行JavaScript代码
   - 避免在元素未加载完成时操作元素导致错误

2. 元素选择：
   - document.getElementById() 获取切换按钮
   - document.querySelectorAll() 获取所有附属模组行（带有sub-mod类的<tr>元素）

3. 状态管理：
   - 使用isHidden变量记录当前附属模组的显示/隐藏状态
   - 初始状态为false（显示附属模组）

4. 事件处理：
   - 当按钮被点击时，切换isHidden的状态（true/false）
   - 遍历所有附属模组行：
     * 如果isHidden为true，添加hidden类（隐藏行）
     * 如果isHidden为false，移除hidden类（显示行）

5. 按钮文本更新：
   - 根据isHidden状态更新按钮文本
     * 隐藏状态时显示"显示附属模组"
     * 显示状态时显示"隐藏附属模组"

6. CSS类作用：
   - .sub-mod：标识附属模组行
   - .hidden：通过display: none;隐藏元素

这种实现方式利用了CSS类来控制显示/隐藏，通过JavaScript切换类名来实现功能。
*/