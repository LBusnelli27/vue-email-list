const app = new Vue (
    {
        el : '#app',


        data : {
            emails : []
        },


        methods : {
            genBtn: function() {
                for (let i = 0; i < 10; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(reply => ( this.emails.push(reply.data.response) ))
                }
            }
        }
    }
)