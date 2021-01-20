const app = Vue.createApp({
    //data, functions
    //template: '<h2>template</h2>'
    data(){
        return{
            title: 'the final empire',
            author: 'brandon sanderson',
            age: 45,
            showBox: true,
            x: 0,
            y: 0,
            books: [
                { title: 'title1', author: 'auhtor1', img: 'assets/red.jpg', isFav: true },
                { title: 'title2', author: 'auhtor2', img: 'assets/aqua.jpg', isFav: false},
                { title: 'title3', author: 'auhtor3', img: 'assets/cyan.jpg', isFav: false}
            ],
            url: 'https://www.google.com/',
        }
    },
    methods:{
        changeTitle(param){
            this.title = param
        },
        incrementAge(){
            console.log(1)
            this.age++
        },
        decrementAge(){
            this.age--
        },
        toggleShowBox(){
            this.showBox = !this.showBox
        },
        mouseEvent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        mouseMove(e){
            console.log(e)
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleIsFav(book){
            console.log(book)
            book.isFav = !book.isFav

            /*
            let newArr = this.books.find(newArr => newArr.title === book)
            console.log('newArr',newArr)
            if(newArr.title === book){
                newArr.isFav = !newArr.isFav
            }
            */
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')