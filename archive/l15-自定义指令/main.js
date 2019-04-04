//自定义指令

Vue.directive('pin', function (el, binding) {
    let pinned = binding.value;
    if (pinned){
        el.style.position = 'fixed';
        el.style.top = '10px';
        el.style.left = '20px';
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