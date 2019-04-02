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

//子组件 show 进行操作,完成后 回调数据(事件)给父组件 (此处是 balance )
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