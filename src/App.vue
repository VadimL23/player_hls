<template>
  <div class="wrapper">
    <MyVideo
    title="Test player for CDNvideo"
    @duration="setDuration"
    @total="setTotal"
    > </MyVideo>

    <p >Total time: {{total}} </p>
    <p >Buffered time: {{duration}} </p>
  </div>
</template>

<script>
import MyVideo from './components/MyVideo.vue'

export default {
  name: 'App',
  components: {
    MyVideo,
  },
  data() {
    return {
      video: "https://www.google.com/url?q=https://live-streams.cdnvideo.ru/cdnvideo/caminandes/playlist.m3u8&sa=D&source=editors&ust=1657097701923187&usg=AOvVaw0cgrRZiKj2rkfYWy3VyQVT",
      duration:0,
      total:0
    }
   },
   methods: {
     getTime(raw) {
       let min = Math.floor(raw / 60);
       let sec = Math.floor(raw - min * 60);
       return `${min}:${sec}`;
     },
     setDuration(raw) {
       this.duration = this.getTime(raw);
     },
     setTotal(raw) {
       this.total = this.getTime(raw);
     }
   }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding:0;
  box-sizing: border-box;

}
.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
