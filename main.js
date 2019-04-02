Vue.component('balance', {
    template: `
    <div>
        <show @show_balance="show_balance"></show>
        <div v-if="show">
        your balance is $99999.
        </div>
    </div>
    `,

    methods: {
        show_balance: function (data) {
            this.show = true;
            console.log(data);
        }
    },
    data: function() {
        return {
            show:false,
        }
    }
});

//子组件 show 进行操作,完成后 回调数据(事件)给父组件 (此处是 balance )
Vue.component('show', {
    template: '<button @click="onClick">show balance</button>',
    methods: {
        onClick() {
            this.$emit('show_balance', {a: 1, b: '2'});
        }
    }
});

new Vue({
    el: '#seg1',
});

// new Vue({
//     el: '#seg2',
// });