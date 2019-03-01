<template>
  <div class="index">
    <div class="photo-album">
      <h1>
        <span>
          <router-link to='/videos'><el-button type="primary" plain>视频</el-button></router-link>
          <router-link to='/images'><el-button type="primary" plain>图片</el-button></router-link>
          <router-link to='/timeline'><el-button type="primary" plain>Timeline</el-button></router-link>
        </span>
      </h1>

      <a href="#" class="large polaroid img1">
        <img src="../assets/4.jpg" alt>We are soulmate. Tell me am I yours?
      </a>
      <a href="#" class="large polaroid img2">
        <img src="../assets/2.jpg" alt>「我们之间是若隐若现的」
      </a>
      <a href="#" class="polaroid img3">
        <img src="../assets/3.jpg" alt>「像呼吸像约定 像某时某刻记起」
      </a>
      
      <a href="#" class="medium polaroid img4">
        <img src="../assets/1.jpg" alt>「走过的路还有脚下踏过的印记」
      </a>
      
      <a href="#" class="polaroid img5">
        <img src="../assets/5.jpg" alt>「Don't tell me, 眼神代表一切」
      </a>
      
      <a href="#" class="polaroid img6">
        <img src="../assets/14.jpg" alt>「Oh baby baby, 我们之间不需要语言」
      </a>
      
      <a href="#" class="polaroid img7">
        <img src="../assets/9.jpg" alt>「天生一对感觉够特别」
      </a>
      <a href="#" class="small polaroid img8">
        <img src="../assets/8.jpg" alt>「只要一个眼神心领神会」
      </a>
      <a href="#" class="large polaroid img9">
        <img src="../assets/10.jpg" alt>「何时何地 你有我 无可畏」
      </a>
      <a href="#" class="polaroid img10">
        <img src="../assets/11.jpg" alt>The feeling feeling feeling same, 
        I will never never never let you go.
      </a>
      <a href="#" class="polaroid img11">
        <img src="../assets/12.jpg" alt>「认真聆听彼此烦恼喜悲」
      </a>
      <a href="#" class="polaroid img12">
        <img src="../assets/13.jpg" alt>「感受 那空气 那飞雨 即使并不在一起」
      </a>
      <a href="#" class="polaroid img13">
        <img src="../assets/6.jpg" alt>「内心里真实真切的体会」
      </a>
      <a href="#" class="polaroid img14">
        <img src="../assets/15.png" alt>「不同的心连着 Yes I know」
      </a>
      <a href="#" class="polaroid img15">
        <img src="../assets/16.jpg" alt>Nothing to hide.
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.index {
  /* background-color: #c54646; */
  /* color: rgb(8, 72, 102); */
  font-family: "Lucida handwriting", "Snell Roundhand", "Helvetica Neue", Arial,
    Helvetica, sans-serif;
  font-size: 16px;
  margin-top: 0px;
}

.amp {
  font-family: Garamond, Baskerville, Georgia, serif !important;
  font-style: italic;
  font-weight: normal;
  border: none;
}

a.polaroid {
  display: block;
  text-decoration: none;
  color: #333;
  padding: 10px 10px 20px 10px;
  width: 150px;
  border: 1px solid #bfbfbf;
  background-color: white;
  z-index: 2;
  font-size: 0.7em;
  -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  -webkit-transition: -webkit-transform 0.5s ease-in;
}
a.polaroid:hover,
a.polaroid:focus,
a.polaroid:active {
  z-index: 999;
  border-color: #6a6a6a;
  -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  transform: rotate(0deg);
}
.polaroid img {
  margin: 0 0 15px;
  /* width: 150px; */
  /* height: 150px; */
  width: 100%
  /* height: 100% */
}

a img {
  border: none;
  display: block;
}

.photo-album {
  position: relative;
  width: 80%;
  margin: 0 auto;
  max-width: 70em;
  height: 530px;
  /* margin-top: 5em; */
  min-width: 800px;
  max-width: 900px;
}

.photo-album .polaroid {
  position: absolute;
}

.photo-album h1 {
  position: absolute;
  z-index: 5;
  top: 230px;
  text-align: center;
  width: 100%;
  line-height: 1.9;
}

.photo-album h1 span {
  background-color: rgba(0, 0, 0, 0.5);
  font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
  padding: 0.2em 0.4em 0.6em 0.4em;
  -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  /* border: 1px solid #6a6a6a; */
  border-radius: 8px;
}

.photo-album .small {
  width: 75px;
  padding: 6px 6px 12px 6px;
  font-size: 0.6em;
}
.photo-album .small img {
  width: 75px;
  /* height: 75px; */
}
.photo-album .medium {
  width: 200px;
  padding: 13px 13px 26px 13px;
  font-size: 0.8em;
}
.photo-album .medium img {
  width: 200px;
  /* height: 200px; */
}
.photo-album .large {
  width: 300px;
  padding: 20px 20px 30px 20px;
  font-size: 1em;
}
.photo-album .large img {
  width: 300px;
  /* height: 300px; */
}
.photo-album .img1 {
  bottom: 10px;
  right: 365px;
  -webkit-transform: rotate(10deg);
  -moz-transform: rotate(10deg);
  transform: rotate(10deg);
}
.photo-album .img2 {
  top: 130px;
  right: 20px;
  -webkit-transform: rotate(-4deg);
  -moz-transform: rotate(-4deg);
  transform: rotate(-4deg);
}
.photo-album .img3 {
  left: 400px;
  top: 80px;
  -webkit-transform: rotate(-5deg);
  -moz-transform: rotate(-5deg);
  transform: rotate(-5deg);
}
.photo-album .img4 {
  top: 90px;
  left: 495px;
  -webkit-transform: rotate(-20deg);
  -moz-transform: rotate(-20deg);
  transform: rotate(-20deg);
}
.photo-album .img5 {
  bottom: 0;
  right: 0;
  -webkit-transform: rotate(1deg);
  -moz-transform: rotate(1deg);
  transform: rotate(1deg);
}
.photo-album .img6 {
  bottom: 10px;
  right: 156px;
  -webkit-transform: rotate(6deg);
  -moz-transform: rotate(6deg);
  transform: rotate(6deg);
}
.photo-album .img7 {
  bottom: 0;
  left: 400px;
  -webkit-transform: rotate(-10deg);
  -moz-transform: rotate(-10deg);
  transform: rotate(-10deg);
}
.photo-album .img8 {
  bottom: -20px;
  left: 700px;
  -webkit-transform: rotate(-8deg);
  -moz-transform: rotate(-8deg);
  transform: rotate(-8deg);
}
.photo-album .img9 {
  bottom: 0;
  left: 0;
  -webkit-transform: rotate(-8deg);
  -moz-transform: rotate(-8deg);
  transform: rotate(-8deg);
}
.photo-album .img10 {
  top: 80px;
  left: 20px;
  -webkit-transform: rotate(8deg);
  -moz-transform: rotate(8deg);
  transform: rotate(8deg);
}
.photo-album .img11 {
  top: 80px;
  right: 0;
  -webkit-transform: rotate(-8deg);
  -moz-transform: rotate(-8deg);
  transform: rotate(-8deg);
}
.photo-album .img12 {
  top: 80px;
  left: 680px;
  -webkit-transform: rotate(18deg);
  -moz-transform: rotate(18deg);
  transform: rotate(18deg);
}
.photo-album .img13 {
  bottom: -20px;
  right: 630px;
  -webkit-transform: rotate(4deg);
  -moz-transform: rotate(4deg);
  transform: rotate(4deg);
}
.photo-album .img14 {
  top: 170px;
  left: 430px;
  -webkit-transform: rotate(15deg);
  -moz-transform: rotate(15deg);
  transform: rotate(15deg);
}
.photo-album .img15 {
  left: 176px;
  top: 100px;
  -webkit-transform: rotate(-8deg);
  -moz-transform: rotate(-8deg);
  transform: rotate(-8deg);
}

a:hover,
a:focus {
  z-index: 5;
}

.el-button {
    margin-left: 8px;
    margin-right: 8px;
}
</style>
