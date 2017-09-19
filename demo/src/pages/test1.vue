<template>
  <div class="test">
    ddd
    <div id="upload-btn">
        <VueImgInputer 
            class="upload"
            v-model="picValue" 
            theme="light" 
            accept="image/jpg,png,gif,jepg"
            placeholder=""
            :maxSize="2048"
            :onChange="submitImg"
            :imgSrc="uploadBtnImg"
            ref="uploadInput"
            v-show="uploadBtnShow"
            bottomText="点击上传"
            size="small">
        </VueImgInputer>
    </div>
    <div v-for="(item,index) in upLoadData" :key="index">
      <p>{{index}}</p>
      <P>{{item.src}}</P>
      <img  :src="item.src" alt="">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import VueImgInputer from 'vue-img-inputer'
import uploadBtnImg from '../assets/uploadeLogo.png'
import { api_post } from '../utils/api'
export default {
  name: 'test',
  data () {
    return {
      content: '' ,
      htmlForEditor: '',
      // 上传的文件
      picValue: '',
      // 引入的上传图片的照片
      uploadBtnImg: uploadBtnImg,
      uploadBtnShow: true,
      upLoadData:[],
     
      
    }
  },
  methods: {
      
      commit (){
        
      },
      submitImg () {
        let that = this
        var formData = new FormData()
        formData.append('img', this.picValue)
        api_post({
          url: 'http://127.0.0.1:3000/upload',
          data: formData,
          callback: function(res){
            console.log(res)
            that.upLoadData.push(res)
            console.log(that.upLoadData)
            // 清空上传按钮上边的预览
            that.$refs.uploadInput.dataUrl = uploadBtnImg
            that.$refs.uploadInput.fileName = ''
            if(that.upLoadData.length === 4){
              that.uploadBtnShow = false
            }
          }
        })
      },
  },
  mounted(){
    
  },
  components:{VueImgInputer}
  // components:{Slick }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
