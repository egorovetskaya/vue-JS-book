<template>
  <div>
    <div class="head">
      <a href="">
        <p>Библиотека</p>
      </a>
    </div>
    <div class="body">
      <div class="div_add_object">
        <router-link class="add_object" to="/book-create">Добавить объект</router-link>
        <a class="back_object" onclick="history.back()">Назад</a>
      </div>
      <div class="result" v-if="item">
        <div class="result_div"><span class="title_result">Index: </span><span class="result_result">{{ item.id }}</span></div>
        <div class="result_div"><span class="title_result">index_start_at: </span><span class="result_result">{{ item.index_start_at }}</span></div>
        <div class="result_div"><span class="title_result">integer: </span><span class="result_result">{{ item.integer }}</span></div>
        <div class="result_div"><span class="title_result">float: </span><span class="result_result">{{ item.float }}</span></div>
        <div class="result_div"><span class="title_result">name: </span><span class="result_result">{{ item.name }}</span></div>
        <div class="result_div"><span class="title_result">surname: </span><span class="result_result">{{ item.surname }}</span></div>
        <div class="result_div"><span class="title_result">fullname: </span><span class="result_result">{{ item.fullname }}</span></div>
        <div class="result_div"><span class="title_result">email: </span><span class="result_result">{{ item.email }}</span></div>
        <div class="result_div_bottom"><span class="title_result">bool: </span><span class="result_result">{{ item.bool }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default: null
      }
    },
  }
</script>

<style lang="sass" scoped>
  .head
    width: 900px
    margin: 0 auto

    p
      margin: 0
      color: orange
      font-size: 30px
      font-weight: 600


  .body
    margin: 20px auto 30px auto

  .result
    width: 560px
    float: left
    background-color: #f2f5fa
    padding: 20px
    border-radius: 3px

  .result_div
    width: 600px
    margin-bottom: 10px
    overflow: hidden

  .result_div_bottom
    width: 600px
    overflow: hidden

  .title_result
    color: #808080
    margin: 0
    font-size: 18px
    font-weight: 600
    float: left

  .result_result
    color: #808080
    margin: 0 0 0 10px
    font-size: 18px
    font-weight: 600
    float: left

</style>
