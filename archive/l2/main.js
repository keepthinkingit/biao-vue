let app = new Vue({
    el: '#app',
    data : {
        foodList : ['葱','姜','蒜'],
        foodLists : [
            {
                name : '葱',
                price : 6,
            },
            {
                name : '姜',
                price : 10,
                discount : .7,
            },
            {
                name : '蒜',
                price : 15,
                discount : .9,
            },

        ],
    }
})