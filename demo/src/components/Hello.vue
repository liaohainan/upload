<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
    <vue-editor id="editor"
      useCustomImageHandler
      @imageAdded="handleImageAdded" v-model="htmlForEditor">
    </vue-editor>
    <button @click="commit">commit</button>
    <slick ref="slick" :options="slickOptions" class="slick">
      <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
      <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
      <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
      <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
      <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
    </slick>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import axios from 'axios'
import Slick from 'vue-slick'
import '../../node_modules/slick-carousel/slick/slick.css'
export default {
  name: 'hello',
  data () {
    return {
      content: '<h1>Some initial content</h1>' ,
      htmlForEditor: '',
      slickOptions: {
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '35px',
              slidesToShow: 1
            }
          }
        ]
      }
    }
  },
  methods: {
      handleImageAdded: function(file, Editor, cursorLocation) {
        // An example of using FormData
        // NOTE: Your key could be different such as:
        // formData.append('file', file)

        // var formData = new FormData();
        // formData.append('image', file)

        // axios({
        //   url: 'https://fakeapi.yoursite.com/images',
        //   method: 'POST',
        //   data: formData
        // })
        // .then((result) => {
        //   let url = result.data.url // Get url from response
        //   Editor.insertEmbed(cursorLocation, 'image', url);
        // })
        // .catch((err) => {
        //   console.log(err);
        // })
        let url = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504678994916&di=983e3655dc2947137f356f83ad06692b&imgtype=0&src=http%3A%2F%2Fimg2.mtime.cn%2Fup%2F213%2F808213%2F153C9018-5133-4903-B09F-034E67558930_o.jpg'
        Editor.insertEmbed(cursorLocation, 'image', url);
      },
      commit (){
        console.log(this.htmlForEditor)
      },
      test: async function(){
        // function ss(){
        //   return new Promise((resolve)=>{
        //   setTimeout(()=>{
        //     console.log('1')
        //     // return 1
        //   },2000)
        // })
        // }
        // let aa = await ss()





        console.log('3')
        return await 'aa'
      }
  },
  mounted(){
    this.test().then((r)=>{
      console.log(r)
      console.log(4)
    })
    console.log('2')
  },
  components:{VueEditor,Slick}
  // components:{Slick }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.slick {
  width:375px;
  height:200px;
  
  // margin-left:20px;
  // a{
  //   display: table-cell;
  //   vertical-align: middle;
  //   text-align: center;
  //   // display: flex;
  // }
  img {
    width:300px;
    // display: block;
    vertical-align: middle;
  }
  .slick-center{
    // img{
    //   height:200px;
    // }
  }
}

</style>
