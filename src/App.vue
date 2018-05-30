<template>
  <div>
    <router-view
        @put='put'
        @goTo='goTo'
        @book_view='book_view'
        :item="item"
        :items="items"/>
  </div>
</template>

<script>
  export default{
    name: 'App',
    data() {
      return {
        items: null,
        item: null
      }
    },
    methods: {
      goTo(type = 'top') {
        setTimeout(() => {
          let go = type === 'top' ? 0 : document.querySelector('body').offsetHeight
          window.scroll(0, go) 
        }, 50)
      },
      put(item) {
        let id = this.items.reduce((prev, current) => current.id > prev.id ? current : prev, {id: -Infinity}).id;
        this.items.push(Object.assign({id: id + 1}, item));
        this.$router.push({path: '/books'});
      },
      book_view(item) {
        this.item = item;
        this.$router.push({path: '/book-view'});
      },
    },
    created() {
      if (!this.items) {
        fetch('/src/lib/object.json').then((response) => {
          if(response.ok) {
            return response.json();
          }
        }).then((json) => {
          this.items = [];
          for(let item of  json.items){
            let map = {'index': 'id'},
                newItem = Object.keys(item).map((key) => {
                  const newKey = map[key] || key;
                  return { [newKey] : item[key] };
                });
            this.items.push(newItem.reduce((a, b) => Object.assign({}, a, b)));
          }
        });
      }
    }
  }
</script>

<style>
  body{
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  }

  /*ШАПКА*/
  .head{
    width: 900px;
    padding: 10px;
    overflow: hidden;
  }
  .head p{
    margin: 0;
    color: orange;
    font-size: 30px;
    float: left;
    font-weight: 600;
  }
  /*/ШАПКА*/

  .body{
    width: 900px;
    overflow: hidden;
    margin-top: 20px;
  }
  .div_add_object{
    width: 600px;
    overflow: hidden;
    float: left;
    margin-bottom: 15px;
  }
  .add_object{
    color: orange;
    font-size: 18px;
    text-decoration: none;
    float: left;
  }
  .back_object{
    color: orange;
    font-size: 18px;
    text-decoration: none;
    float: right;
    cursor: pointer;
  }
</style>
