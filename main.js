const { createApp } = Vue
createApp({
    data() {
        return {
            title: 'test',
            collection: 'null',
        }
    },
    mounted() {
        axios
            .get('server.php')
            .then(response => {
                this.collection = response.data
            })
    }
}).mount('#app')