<template>
  <div>
    <div class="div">
      <div class="childe_div" @click="$emit('goTo')">
        <p class="nav">Вверх</p>
      </div>
      <div class="childe_div">
        <div class="head">
          <a href="" class="logo_link">Библиотека</a>
        </div>
        <div class="add">
          <router-link class="add_link" to="/book-create">Добавить объект</router-link>
        </div>
        <transition  name="custom-classes-transition"  enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight">
          <div class="content" v-if="items">
            <div class="block" v-for="element_books in items">
              <a class="more_link" @click="$emit('book_view', element_books)">Подробнее</a>
              <div class="inform_block">
                <p class="json_text">{{ element_books.id }}</p>
              </div>
              <div class="inform_block">
                <p class="json_text">{{ element_books.name }}</p>
              </div>
              <div class="inform_block">
                <p class="json_text">{{ element_books.surname }}</p>
              </div>
              <div class="inform_block">
                <p class="json_text">{{ element_books.fullname }}</p>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="childe_div" @click="$emit('goTo', 'bottom')">
        <p class="nav">Вниз</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "books",
      props: {
        items:Array
      }
    }
</script>

<style>
  body{
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    min-width: 1200px;
  }
  .div{
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
  }
  .childe_div{
    background-color: #f2f5fa;
  }

  .head{
    width: 900px;
    margin: 20px auto 30px auto;
  }
  .logo_link{
    color: orange;
    font-size: 30px;
    font-weight: 600;
    text-decoration: none;
  }
  .add{
    width: 900px;
    margin: 0 auto;
  }
  .add_link{
    color: orange;
    font-size: 18px;
    text-decoration: none;
  }
  .content{
    width: 900px;
    margin: 15px auto auto auto;
  }
  .block{
    width: 600px;
    background-color: #f2f5fa;
    border-radius: 3px;
    padding: 20px;
    overflow: hidden;
    margin: 0 0 15px 0;
  }
  .more_link{
    color: orange;
    font-size: 17px;
    float: right;
    text-decoration: none;
    cursor: pointer;
  }
  .json_text{
    color: grey;
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 10px 0;
  }


  .nav{
    text-align: center;
    color: orange;
    margin: 20px 0 0 0;
    font-size: 20px;
    position: sticky;
    top: 20px;
  }
  .childe_div:nth-child(2){
    margin: 0 10px 0 10px;
    background-color: #fff;
  }
  .childe_div:nth-child(odd){
    height: 100%;
    cursor: pointer;
  }
</style>
