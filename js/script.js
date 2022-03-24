const app = new Vue (
    {
        el : '#app',


        data : {
            emails : []
        },


        methods : {
            genBtn: function() {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(reply => ( this.emails.push(reply.data.response) ))
            }
        }
    }
)