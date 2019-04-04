let Event = new Vue();

Vue.component('huahua', {
    template: `
    <div>
        I say : <input @keyup="on_change" type="text" v-model="iSaid">
        {{ iSaid }}
    </div>
    `,

    data: function() {
        return {
            iSaid : '',
        }
    },
    methods: {
        on_change:function () {
            Event.$emit('iSaidWords', this.iSaid);
        }
    }
});


Vue.component('erdan', {
    template:`
    <div>
        you said:{{ youSaid }}
    </div>
    `
    ,
    data:function () {
        return {
            youSaid: '',
        }
    },
    mounted: function () {
        let me = this;
        Event.$on('iSaidWords', function (data) {
            // console.log(data);
            // console.log(this);
            // console.log(me);
            me.youSaid = data;
        })
    }
});

new Vue({
    el: '#seg1',
});

// new Vue({
//     el: '#seg2',
// });