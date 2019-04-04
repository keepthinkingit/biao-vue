//自定义指令 , 配置传参与修饰符

Vue.directive('pin', function (el, binding) {
    let pinned = binding.value;
    let position = binding.modifiers;
    let warning = binding.arg;

    if (pinned){
        el.style.position = 'fixed';

        for(let key in position){
            if(position[key]) {
                el.style[key] = '20px';
            }
        }
        if(warning === 'true'){
            el.style.background = 'yellow';
        }
        }
    else {
        el.style.position = 'static';
    }

});


new Vue({
    el: '#seg1',
    data: {
        card1: {
            pinned: false,
        },
        card2: {
            pinned: false,
        },
        card3: {
            pinned: false,
        },

    }
});

// new Vue({
//     el: '#seg2',
// });