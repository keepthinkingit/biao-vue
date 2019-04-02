//重复功能的数据储存器

let base = {
    methods: {
        show: function () {
            this.visible = true;
        },
        hide: function () {
            this.visible = false;
        },
        toggle: function () {
            this.visible = !this.visible;
        }
    },
    data: function () {
        return {
            visible: false,
        }
    }
};

Vue.component('tooltip', {
    template:`
    <div>
        <span @mouseenter="show" @mouseleave="hide">bjj</span>
        <div v-if="visible">
        败军军
        </div>
    </div>
    `,
    mixins: [base],
    date: function () {
        return {
            visible: true,
        }
    }
});

Vue.component('popup',{
    template: `
    <div>
        <button @click="toggle">Popup</button>
            <div v-if="visible">
            <span @click="hide">X</span>
            <h3>title</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore doloribus enim exercitationem explicabo laudantium saepe ut vitae voluptatem voluptatibus. At culpa eveniet ex iusto odit porro temporibus totam vero.
            </div>
            </div>
    `,
    mixins:[base],
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