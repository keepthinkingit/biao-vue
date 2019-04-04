let app = new Vue({
    el: '#app',
    data : {
        foodList : ['葱','姜','蒜'],
        url : 'https://cn.bing.com/search?q=',
        isActive : true,
        name: '',
        lastName: '',
        price:'',
    },

    methods: {
        onClick: function(event) {
            alert('Hello');
        },

        onEnter: function() {
            console.log('mouse entered');
        },
        onOut: function() {
            console.log('mouse leave');
        },
        onSubmit: function (e) {
            e.preventDefault();
            console.log('submitted');
        },
        onEnter: function (e) {
            console.log('key up')
        }
    }


})