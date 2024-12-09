$(function() {
    $('.menu').click(function() {
        $('.nav_list').addClass('navactive')
    });
})
//     document.addEventListener('click', function(event) {  
//   var x = event.clientX; // 鼠标点击位置的x坐标  
//   var y = event.clientY; // 鼠标点击位置的y坐标  
//   console.log('点击位置：', x, y);  
// });
$(document).on('click', function(event) {
    var targetElement = $('.nav_list'); // 指定元素的ID  
    var targetRect = targetElement.get(0).getBoundingClientRect(); // 获取指定元素的矩形区域  
    var x = event.clientX; // 鼠标点击位置的x坐标  
    var y = event.clientY; // 鼠标点击位置的y坐标  

    if (x > targetRect.left && x < targetRect.right && y > targetRect.top && y < targetRect.bottom) {
        // console.log('鼠标点击在指定元素内');

    } else {
        // console.log('鼠标点击不在指定元素内');
        $('.nav_list').removeClass('navactive')
    }
});
// 获取页面上的所有标签  
let tags = document.querySelectorAll('#yanchi li');

// 创建一个与标签数量相同的数组，并设置初始值  
let delays = new Array(tags.length).fill(0).map((_, i) => i * 0.05);
// 遍历数组和标签  
for (let i = 0; i < tags.length; i++) {
    // 如果标签的下标和数组的下标相同，则添加样式和动画延迟时间  
    if (i < delays.length) {
        tags[i].style.animationDelay = delays[i] + 's'; // 例如设置为0.5s、0.55s、0.6s等  
    } else {
        // 如果标签的数量少于数组的长度，添加一个新标签并添加样式和动画延迟时间  
        let newTag = document.createElement('p');
        newTag.textContent = '这是一个新标签';
        newTag.style.animationDelay = delays[i] + 's'; // 例如设置为0.5s、0.55s、0.6s等  
        document.getElementById('container').appendChild(newTag);
    }
}
$(function() {
    $('.lists_t>li>.navbars').each(function() {
        $(this).click(function() {
            $(this).children().find('.nav_xia svg').toggleClass('svg_active')
            $(this).next().slideToggle()
            // $(this).parent().siblings().children().next().slideUp()
        })
    })
})