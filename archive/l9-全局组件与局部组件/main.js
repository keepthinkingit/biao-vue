//Vue.component('alert',);

let alert_component = {
    template: '<button @click="onClick">点一下</button>',
    methods: {
        onClick: function() {
            alert('Yoo~');
        }
    }
};

new Vue({
    el: '#seg1',
    components: {
        'alert' : alert_component,
    }
});

new Vue({
    el: '#seg2',
});