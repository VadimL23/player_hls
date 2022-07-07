<template>
  <div class="inner">
    <h1>{{ title }}</h1>
    <video ref="video" width="600" height="370" controls="controls"></video>
    </div>
</template>

<script>
import Hls from 'hls.js';
// import BaseStreamController from 'hls.js';

export default {
  name: 'MyVideo',
  mounted() {
    let hls = new Hls();
    let stream = "https://live-streams.cdnvideo.ru/cdnvideo/caminandes/playlist.m3u8?sa=D&source=editors&ust=1657097701923187&usg=AOvVaw0cgrRZiKj2rkfYWy3VyQVT";
    let video = this.$refs["video"];
    hls.loadSource(stream);
    hls.attachMedia(video);



    function onLevelLoaded(event, data) {
      this.$emit('duration', data.frag.appendedPTS)
    }
    hls.on(Hls.Events.BUFFER_APPENDED, onLevelLoaded.bind(this));

    function onManifestPassed(event, data) {
      this.totalTime = data.stats.total;
      this.$emit('total', this.totalTime)
      console.log(data.stats.total);
    }

    hls.on(Hls.Events.MANIFEST_PARSED, onManifestPassed.bind(this));
  },
  props: {
    title: {
    type: String,
    rewuired: true
    }
  },
  data() {
    return {
      totalTime: 0,
      videoBuffer:0,
    }
  }
}
</script>

<style scoped>
.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
