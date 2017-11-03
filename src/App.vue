<template>
  <div id="app">

    <Indicator color="#FF4612"/>

    <HeadBar>
      <div class="hbutton" slot="inner-link" slot-scope="props" data-target="1" @click="hyperlink(link1,props.linkType)">住在貨櫃屋的女孩</div>
      <div class="hbutton" slot="outer-link" slot-scope="props" data-target="2" @click="hyperlink(link2,props.linkType)">中興新村</div>
    </HeadBar>

    <Cover title="<b>被遺忘的孩子</b><br />我8歲，我住貨櫃屋" font-size="38" title-bottom="65" title-left="30" title-width="320" title-height="95" title-width-web="500" title-height-web="124" title-left-web="116" title-bottom-web="112" :bgWeb="bg" :bg="bg_mobile"/>

    <ContentContainer background-color="#ECEAEA">
      <p><br/></p>
      <p class="orange">編按提醒：貧窮兒需要溫暖，但期盼讀者支持「不打擾的關心」。</p>
      <p><br/></p>
      <p>20年來，台灣邊緣弱勢兒童增加一倍。《聯合報》找到8歲住在貨櫃屋的女孩、找到住在破舊髒亂沒熱水澡可洗的10歲男孩，但我們不想一次性消費個案故事，也不是給予捐款就能幫孩子翻轉命運。我們想邀請讀者探究為何這麼多孩子落在社會安全網之外？理解社會制度出了何種問題，進一步督促政府補好安全網。</p>
      <p><br/></p>
      <Share href="https://udn.com/upf/newmedia/2017_data/poverty/index.html" />
      <p><br></p>
			<p><br/></p>
			<p>人們發現她的時候還沒上小學，除了這句話，她怕生不說話，對人充滿警戒，面無表情，就像野生動物。</p>
			<p><br/></p>
			<p>路過大橋的鄉民，好心幫爸爸介紹工作，讓他有收入，勉強可以租個房子安頓女兒，但因種種因素又遭房東趕出去。雇主把用來當倉庫的貨櫃屋清出來，讓父女有個遮風避雨的地方。</p>
			<p><br/></p>
			<p>「她爸爸來我這邊打工，我們每天六點就出門了，結果小孩常常沒上學，有時候6天沒上學、10天沒上學，情況很嚴重，老師找不到她爸爸，就打電話給我找小孩、校長也打給我、社會局也打給我，最後連少年組也打給我了！」雇主說，閒置的貨櫃屋剛好在學校附近，也方便學校老師早上來帶孩子去上課。</p>
			<p><br/></p>
			<p><br/></p>
			<p>人們發現她的時候還沒上小學，除了這句話，她怕生不說話，對人充滿警戒，面無表情，就像野生動物。</p>
			<p><br/></p>
      
    <!--<img class="lazyload" :data-src="pic2_web" alt="">-->
    <!--<img :src="pic2_web" alt="">-->

    <img v-lazy="pic2_web" />

    </ContentContainer>


    <illustration/>
    

		<ContentContainer background-color="#ECEAEA" id="start">
			<p>從車站到學校，沿途都是荒煙蔓草，雜草比人高，幾乎把車道掩埋。在這裡，有個小女孩住在貨櫃屋裡。</p>
			<p><br/></p>
			<p>她剛學會走路時，就跟著爸爸從花蓮流浪到西部偏鄉，最後在河邊橋下遊蕩，沒有居所。</p>
			<p><br/></p>
			<p><br/></p>
			<Quote text="檳榔攤的阿姨問她：「媽媽呢？」「媽媽跑了。」" color="#FF4612" borderColor="#B5B5B5"/>
			<p><br/></p>
			<p><br/></p>
			<p>人們發現她的時候還沒上小學，除了這句話，她怕生不說話，對人充滿警戒，面無表情，就像野生動物。</p>
			<p><br/></p>
			<p>路過大橋的鄉民，好心幫爸爸介紹工作，讓他有收入，勉強可以租個房子安頓女兒，但因種種因素又遭房東趕出去。雇主把用來當倉庫的貨櫃屋清出來，讓父女有個遮風避雨的地方。</p>
			<p><br/></p>
			<p>「她爸爸來我這邊打工，我們每天六點就出門了，結果小孩常常沒上學，有時候6天沒上學、10天沒上學，情況很嚴重，老師找不到她爸爸，就打電話給我找小孩、校長也打給我、社會局也打給我，最後連少年組也打給我了！」雇主說，閒置的貨櫃屋剛好在學校附近，也方便學校老師早上來帶孩子去上課。</p>
			<p><br/></p>
			<p><br/></p>
			<p>人們發現她的時候還沒上小學，除了這句話，她怕生不說話，對人充滿警戒，面無表情，就像野生動物。</p>
			<p><br/></p>
			<p>路過大橋的鄉民，好心幫爸爸介紹工作，讓他有收入，勉強可以租個房子安頓女兒，但因種種因素又遭房東趕出去。雇主把用來當倉庫的貨櫃屋清出來，讓父女有個遮風避雨的地方。</p>
			<p><br/></p>
			<p>「她爸爸來我這邊打工，我們每天六點就出門了，結果小孩常常沒上學，有時候6天沒上學、10天沒上學，情況很嚴重，老師找不到她爸爸，就打電話給我找小孩、校長也打給我、社會局也打給我，最後連少年組也打給我了！」雇主說，閒置的貨櫃屋剛好在學校附近，也方便學校老師早上來帶孩子去上課。</p>
			<p><br/></p>
			<p>人們發現她的時候還沒上小學，除了這句話，她怕生不說話，對人充滿警戒，面無表情，就像野生動物。</p>
			<p><br/></p>
			<p>路過大橋的鄉民，好心幫爸爸介紹工作，讓他有收入，勉強可以租個房子安頓女兒，但因種種因素又遭房東趕出去。雇主把用來當倉庫的貨櫃屋清出來，讓父女有個遮風避雨的地方。</p>
			<p><br/></p>
			<p>「她爸爸來我這邊打工，我們每天六點就出門了，結果小孩常常沒上學，有時候6天沒上學、10天沒上學，情況很嚴重，老師找不到她爸爸，就打電話給我找小孩、校長也打給我、社會局也打給我，最後連少年組也打給我了！」雇主說，閒置的貨櫃屋剛好在學校附近，也方便學校老師早上來帶孩子去上課。</p>
			<p><br/></p>
			<p>人們發現她的時候還沒上小學，除了這句話，她怕生不說話，對人充滿警戒，面無表情，就像野生動物。</p>
			<p><br/></p>
			<p>路過大橋的鄉民，好心幫爸爸介紹工作，讓他有收入，勉強可以租個房子安頓女兒，但因種種因素又遭房東趕出去。雇主把用來當倉庫的貨櫃屋清出來，讓父女有個遮風避雨的地方。</p>
			<p><br/></p>
			<p>「她爸爸來我這邊打工，我們每天六點就出門了，結果小孩常常沒上學，有時候6天沒上學、10天沒上學，情況很嚴重，老師找不到她爸爸，就打電話給我找小孩、校長也打給我、社會局也打給我，最後連少年組也打給我了！」雇主說，閒置的貨櫃屋剛好在學校附近，也方便學校老師早上來帶孩子去上課。</p>
			<p><br/></p>
			<p>人們發現她的時候還沒上小學，除了這句話，她怕生不說話，對人充滿警戒，面無表情，就像野生動物。</p>
			<p><br/></p>
			<p>路過大橋的鄉民，好心幫爸爸介紹工作，讓他有收入，勉強可以租個房子安頓女兒，但因種種因素又遭房東趕出去。雇主把用來當倉庫的貨櫃屋清出來，讓父女有個遮風避雨的地方。</p>
			<p><br/></p>
			<p>「她爸爸來我這邊打工，我們每天六點就出門了，結果小孩常常沒上學，有時候6天沒上學、10天沒上學，情況很嚴重，老師找不到她爸爸，就打電話給我找小孩、校長也打給我、社會局也打給我，最後連少年組也打給我了！」雇主說，閒置的貨櫃屋剛好在學校附近，也方便學校老師早上來帶孩子去上課。</p>
      <p><br/></p>
      <p><br/></p>

			<ImageContain width="720" height="580" :src="pic2_mobile" :src-web="pic2_web" width-web="880" height-web="580" imgsay="小女孩剛會走路時，爸爸就帶著她到處跑，開過卡車司機、當過搬運工人，現住在貨櫃屋裡安頓。"/>


      <!--<img v-lazy="pic2_web" />-->


			<p><br/></p>
			<p><br/></p>
			<Quote text="但小女孩不會洗澡，也不會洗衣服，因為貨櫃屋沒有浴室，也沒有晾衣服的地方，渾身異味導致其他孩子排斥她。" color="#FF4612" borderColor="#B5B5B5"/>
			<p><br/></p>
			<p><br/></p>
			<p>小女孩的班導師說，學校把校內的淋浴間整理出來給小女孩洗澡跟晾衣服，同學看她的眼光變友善，才能讓她融入群體。</p>
			<p><br/></p>
			<p>不只是洗澡問題，每天接她上課時，還會教導小女孩整理家裡。「家庭幾乎失去功能的情況下，學校老師能做的就是補強親職功能，」課後輔導老師說，小女孩長期只跟爸爸互動，到學校也需要「暖機」半小時以上才敢開口說話，而往往經過一個週末，周一到校又是一臉漠然，得重新開始輔導。</p>
			<p><br/></p>
			<p>貨櫃屋原本一無長物，只有簡陋的鐵皮搭蓋，地上鋪著一個二手床墊讓父女睡覺，「我去問心理師該怎麼做，他說要能提供給孩子一個安全的環境，來學校比在家覺得安全。現在她覺得家裡比較安全，因為學校會有功課壓力，能不能透過情感的連結，強化到在學校是受關愛，可以安全學習。」</p>
    </ContentContainer>
      
    <!--<illustration/>-->

    <ContentContainer>
			<Share href="https://udn.com/upf/newmedia/2017_data/poverty/index.html"/>
			<Logo />
			<p><br/></p>
			<Editor>
				<div>製作人、文字：林秀姿</div>
				<div>視覺設計、影音：許瑋琳</div>
				<div>攝影：林伯東、劉學聖、侯永全</div>
				<div>網頁製作：鄭偉廷</div>
				<div>監製：董谷音、蔡幸怡</div>
				<div>2017.10.03</div>
			</Editor>
			<p><br/></p>
      
      <Relate>
        <a href="./light.html" target="_blank" slot="relate-1">
          <img :src="relate1" />
          <p>我們長大，把光亮帶回黑暗家鄉</p>
        </a>
        <a href="https://udn.com/news/story/10722/2707319" target="_blank" slot="relate-2">
          <img :src="relate2" />
          <p>助脫貧…教技能 推存錢帳戶</p>
        </a>
        <a href="https://udn.com/news/story/7266/2698622?from=crm4-referralnews_ch2artbottom" target="_blank" slot="relate-3">
          <img :src="relate3" />
          <p>兒少發展帳戶推動3個月 申請率25%</p>
        </a>
        <a href="https://p.udn.com.tw/upf/newmedia/2016_data/20161003_quicksand_middle_age/index.html" target="_blank" slot="relate-4">
          <img :src="relate4" />
          <p>流沙中年 棄6萬月新顧爸媽，我在貧窮線下度日</p>
        </a>
      </Relate>

      <Foot background-color="#ECEAEA" />

		</ContentContainer>
    
    <!--<router-view/>-->

  </div>
</template>

<script>
import Indicator from './components/Indicator'
import HeadBar from './components/HeadBar'
import Cover from './components/Cover'
import ContentContainer from './components/Content'
import Share from './components/Share'
import Quote from './components/Quote'
import ImageContain from './components/ImageContain'
import Editor from './components/Editor'
import Logo from './components/Logo'
import FBComment from './components/FBComment'
import Relate from './components/Relate'
import Foot from './components/Footer'
import Illustration from './components/Illustration'


import bg from './assets/bg.jpg'
import bg_mobile from './assets/bg_mobile.jpg'
import pic2_web from './assets/pic2.jpg'
import pic2_mobile from './assets/mobile/pic2.jpg'

var scroll_now = 0;

export default {
  name: 'app',
  data: function(){
    return{
      bg: bg,
      bg_mobile: bg_mobile,
      pic2_web: pic2_web,
      pic2_mobile: pic2_mobile,
      relate1: 'http://via.placeholder.com/480x304',
      relate2: 'http://via.placeholder.com/480x304',
      relate3: 'http://via.placeholder.com/480x304',
      relate4: 'http://via.placeholder.com/480x304',
      link1: "start",
      link2: "https://nmdap.udn.com.tw/ChunghsingNewVillage/"
    }
  },
  components: {
    Indicator, HeadBar, Cover, ContentContainer, Quote, Share, ImageContain, Editor, Logo, FBComment, Relate, Foot, Illustration
  },
  mounted: function(){
    window.addEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll: function(){
      scroll_now = window.pageYOffset;
    },
    hyperlink: function(link,type){
      if(type==="inner"){
            // scrolling to anchor animation
            var scrollDuration = 500;
            var destination = document.getElementById(link).getBoundingClientRect().top + scroll_now;
            var scrollStep = (destination - scroll_now) / (scrollDuration / 15);

            var scrollInterval = setInterval(function () {
                scroll_now = window.pageYOffset;
                destination = document.getElementById(link).getBoundingClientRect().top + scroll_now;
                
                if (scroll_now < destination) {
                    scrollStep = (destination - scroll_now) / (scrollDuration / 15);
                    window.scrollBy(0, scrollStep);
                }
                else {
                  clearInterval(scrollInterval);
                }    
                scrollDuration-=15;    
            }, 15);

      }else if(type==="outer"){
        window.open(link);
      }
    }
  }
}
</script>

<style>

#app {
  line-height: 1.5;
  font-family: Arial, "微軟正黑體", sans-serif;
  word-wrap: break-word;
  text-align: justify;
}
</style>
