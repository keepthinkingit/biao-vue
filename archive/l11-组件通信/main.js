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

Vue.component('myanchor',{

    template: '<a :href="\'/user/\' + username">@{{username}}</a>',
    //父组件传值给子组件 -> props
    props: ['username'],

    methods: {
        onClick: function() {
        }
    }
});

new Vue({
    el: '#seg1',
});

// new Vue({
//     el: '#seg2',
// });