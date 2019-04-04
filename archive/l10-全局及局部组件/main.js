// let app = new Vue({
//     el: '#app',
//     data : {
//         foodList : ['葱','姜','蒜'],
//         math: 80,
//         english : 77,
//         music: 55,
//     },
//
//     methods: {
//         onClick: function(event) {
//             alert('Hello');
//         },
//     },
//
//     computed: {
//         sum : function() {
//             return parseFloat(this.math )+ parseFloat(this.english) + parseFloat(this.music);
//         },
//
//         average: function () {
//             return Math.round(this.sum/3);
//         }
//     }
//
//
// })

Vue.component('like',{

    template: '#like-component-tpl',
    //组件中必须有返回值
    data: function(){
        return {
            like_count: 3,
            liked: false,
        }
    },

    methods: {
        onClick: function() {
            if (!this.liked)
                this.like_count ++;
            else
                this.like_count --;

            this.liked =! this.liked ;
        }
    }
});

new Vue({
    el: '#seg1',
});

// new Vue({
//     el: '#seg2',
// });