<template>
  <div>
    <div class="head">
      <a href="">
        <p>Библиотека</p>
      </a>
    </div>
    <div class="body">
      <div class="result">
        <p class="body_title">Добавить новую запись</p>
        <a class="back_object" onclick="history.back()">Назад</a>
        <div class="add_entry">
          <form>
            <input type="text" v-model="postBody.name" placeholder="name" class="input">
            <input type="text" v-model="postBody.surname" placeholder="surname" class="input">
            <input type="text" v-model="postBody.fullname" placeholder="fullname" class="input">
            <input type="number" v-model="postBody.index" placeholder="index" class="input">
            <input type="number" v-model="postBody.index_start_at" placeholder="index_start_at" class="input">
            <input type="text" v-model="postBody.integer" placeholder="integer" class="input">
            <input type="text" v-model="postBody.float" placeholder="float" class="input">
            <input type="email" v-model="postBody.email" placeholder="email" class="input">
            <input type="text" v-model="postBody.bool" placeholder="bool" class="input">
            <button v-on:click="postPost()" class="submit_input">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      props: {
        items: {
          type: Array,
          default: null
        }
      },
      data() {
        return {
          postBody: {
            name: '',
            surname: '',
            fullname: '',
            index: '',
            index_start_at: '',
            integer: '',
            float: '',
            email: '',
            bool: ''
          }
        }
      },
      methods: {
        postPost() {
          this.$emit('put', this.postBody);
        }
      }
    }
</script>

<style lang="scss" scoped>
  .head{
    width: 900px;
    margin: 0 auto;
  }
  .head p{
    margin: 0;
    color: orange;
    font-size: 30px;
    font-weight: 600;
  }

  .body{
    margin: 20px auto 30px auto;
  }
  .result{
    overflow: hidden;
    width: 600px;
    float: left;
    margin: 0 0 15px 0;
  }
  .body_title{
    color: grey;
    font-size: 18px;
    float: left;
    margin: 0 0 10px 0;
   }
  .add_entry{
    width: 600px;
    float: left;
  }
  .input::-webkit-input-placeholder{
    color: #c3c1c1;
  }
  .input{
    padding: 10px;
    float: left;
    font-size: 18px;
    border: 2px solid #d8d8d8;
    outline: none;
    border-radius: 3px;
    color: grey;
    width: 576px;
    margin-bottom: 10px;
  }
  .submit_input{
    width: 200px;
    padding: 10px;
    -webkit-appearance: none;
    border: solid #d48d0b;
    border-top-width: 0;
    border-right-width: 0;
    border-bottom-width: 2.5px;
    border-left-width: 0;
    border-radius: 3px;
    font-size: 19px;
    outline: none;
    cursor: pointer;
    color: #fff;
    background-color: orange;
    float: left;
  }
</style>
