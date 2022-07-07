const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
   devServer: {
     proxy:'https://live-streams.cdnvideo.ru'
 }
})
// https://www.google.com/url?q=https://live-streams.cdnvideo.ru/cdnvideo/caminandes/playlist.m3u8&sa=D&source=editors&ust=1657097701923187&usg=AOvVaw0cgrRZiKj2rkfYWy3VyQVT