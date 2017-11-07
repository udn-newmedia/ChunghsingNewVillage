<template>
  <div id="app">

    <Indicator color="#FF4612"/>

    <HeadBar>
      <div class="hbutton" slot="inner-link" slot-scope="props" data-target="1" @click="hyperlink(link1,props.linkType)">空前絕後宋省長</div>
      <div class="hbutton" slot="outer-link" slot-scope="props" data-target="2" @click="hyperlink(link2,props.linkType)">來去中興新村</div>
    </HeadBar>

    <CoverVideo :src="coverVideo_mobile" :src-web="coverVideo_web" :poster="coverVideoPoster" :poster-web="coverVideoPoster_web" :data-target="1"></CoverVideo>
    <!--<Cover title="<b>被遺忘的孩子</b><br />我8歲，我住貨櫃屋" font-size="38" title-bottom="65" title-left="30" title-width="320" title-height="95" title-width-web="500" title-height-web="124" title-left-web="116" title-bottom-web="112" :bgWeb="bg" :bg="bg_mobile"/>-->

    <ContentContainer background-color="#ECEAEA">
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
    </ContentContainer>

		<ContentContainer background-color="#ECEAEA" id="start">
      <h1><b>空前絕後宋省長</b></h1>
      <p><br/></p>
      <p><br/></p>
      <YoutubeVideo :dataSrc="video_link1"></YoutubeVideo>
      <p><br/></p>
      <p><br/></p>
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
		</ContentContainer>
		<FixedBackground :src="fixBg1" :src-web="fixBg1_web" text="宋楚瑜圖說待補圖說待補圖說待補。記者曾吉松／攝影"/>    
    <ContentContainer background-color="#ECEAEA">
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

      <LazyImageContain width="450" height="450" :src="img1" :src-web="img1_web" imgsay="公務員老宿舍，有些後院還設計有小池塘。圖／翻攝自「綠情懷舊專輯」"/>
			<!--<ImageContain width="720" height="580" :src="pic2_mobile" :src-web="pic2_web" width-web="880" height-web="580" imgsay="小女孩剛會走路時，爸爸就帶著她到處跑，開過卡車司機、當過搬運工人，現住在貨櫃屋裡安頓。"/>-->

			<p><br/></p>
			<p><br/></p>
			<p>小女孩的班導師說，學校把校內的淋浴間整理出來給小女孩洗澡跟晾衣服，同學看她的眼光變友善，才能讓她融入群體。</p>
			<p><br/></p>
			<p>不只是洗澡問題，每天接她上課時，還會教導小女孩整理家裡。「家庭幾乎失去功能的情況下，學校老師能做的就是補強親職功能，」課後輔導老師說，小女孩長期只跟爸爸互動，到學校也需要「暖機」半小時以上才敢開口說話，而往往經過一個週末，周一到校又是一臉漠然，得重新開始輔導。</p>
			<p><br/></p>
			<p>貨櫃屋原本一無長物，只有簡陋的鐵皮搭蓋，地上鋪著一個二手床墊讓父女睡覺，「我去問心理師該怎麼做，他說要能提供給孩子一個安全的環境，來學校比在家覺得安全。現在她覺得家裡比較安全，因為學校會有功課壓力，能不能透過情感的連結，強化到在學校是受關愛，可以安全學習。」</p>
    </ContentContainer>


    <ContentContainer background-color="#ECEAEA">
      <h1><b>繁榮與沒落</b></h1>
      <p><br/></p>
      <p><br/></p>
      <YoutubeVideo :dataSrc="video_link1"></YoutubeVideo>
      <p><br/></p>
      <p><br/></p>
      <LazyImageContain width="451" height="801" :src="map1" :src-web="map1_web" />
      <LazyImageContain width="451" height="801" :src="map2" :src-web="map2_web" />
      <p><br/></p>
      <p><br/></p>
      <h2>8大特殊都市設計</h2>
      <p><br/></p>
      <UrbanDesign></UrbanDesign>
      <p><br/></p>
      <p><br/></p>
      <h2>精省，人車錢潮統統少了</h2>
      <p><br/></p>
      <p>民國32年台灣尚未光復，當時21歲的林松期是日據時期的公務員，在草屯街衙亭（現草屯鎮公所）服務，民國48年退休後來到中興新村，在中心市場（後稱中興員工消費合作社）裡開了「中心文具店」，這家店至今已58歲。</p>
      <p><br/></p>
      <p>凍省前後，中興新村變化最大的是什麼？95歲的林松期覺得「人少了好多」。以前省政府有建設廳、財政廳等多個廳處，上班的公務員把光華路塞得水洩不通，他從抽屜裡拿出帳本，說精省前生意最好的時候，一天甚至賺過五千元，如今每天進帳都是「一百塊」。</p>
    </ContentContainer>

		<FixedBackground :src="fixBg2" :src-web="fixBg2_web" text="95歲的林松期，與58歲的「中心文具店」。記者鄭清元／攝影"/> 

    <ContentContainer background-color="#ECEAEA">
      <p><br/></p>
      <p>滿滿的車潮最讓他懷念，婦人乘上三輪車、孩子騎著腳踏車、公務員搭交通車，在村裡疾駛著。以前省府權力很大，舉凡地方造橋、 鋪路、治水……皆是上報省府，由省府和中央請求預算，省府就像是地方與中央的橋梁，業務既多且雜，便設立公路銜接台中、彰化、西部縱鐵等。中興新村以「發車頻率高」、「收班時間晚」、「公車站牌多」出名，每天最多有 29 輛交通車接送公務員上下班，公務員們整齊排隊布入車陣的畫面，對林松期來說鮮明如昨日。</p>
      <p><br/></p>
      <p>民國61年，謝東閔成為第一位本省籍省主席，林松期對他讚譽有佳，那是「客廳即工場」的年代。林松期也聊起中興會堂看電影的回憶，有「小白宮」稱號的中興會堂，省政府有任何正式活動都會在這裡舉辦，中興會堂為了犒賞省府員工，每個禮拜播放二輪電影，學生總會在外面等，若電影快放映了而裡面還沒坐滿，就會放人進去看，一天常播放三場二輪電影，票價2塊錢，是當時的「小確幸」。</p>
			<p><br/></p>
			<p><br/></p>
      <LazyImageContain width="450" height="450" :src="img2" :src-web="img2_web" imgsay="中興會堂竣工於民國48年，是一座典雅歐風建築。記者黃仲裕／攝影"/>
			<p><br/></p>
			<p><br/></p>
      <p>然而接連歷經凍省和九二一大震兩次衝擊，公務員漸漸離開，林松期所熟悉、熱鬧的中興新村也緩緩睡去。曾有人提出中興大學來此設立分部，讓林松期興奮不已，他認為，中興大學若來了，人氣應該也會回來，然而最後中興新村沒走上大學城一途。</p>
			<p><br/></p>
			<p><br/></p>
			<Quote text="以前光華路滿滿的人和車，現在拿機關槍來掃射，也打不到人了。" color="#FFB93E" borderColor="#FFB93E" refer="中心文具行老闆 林松期"/>
			<p><br/></p>
			<p><br/></p>
      <p>要怎麼找回中興新村的榮景？林松期好希望一個學校或公家機關「搬回來」，在他記憶裡，公務員是村子的血液，凍省後公務員漸漸離開，村子抽離了血液怎還會有活力？</p>
      <p><br/></p>
      <p>中興新村的居民氣色們個個身體健康，林松期是箇中代表，雖然現在只有假日比較熱鬧（外地人帶孩子來放風箏），他仍堅持每天開店，問他為甚麼？「做健康的啦！」</p>
			<p><br/></p>
			<p><br/></p>
      <LazyImageContain width="450" height="450" :src="img3" :src-web="img3_web" imgsay="丁志成回想從前在光榮國小任教的時光，滿是驕傲。記者鄭清元／攝影"/>
			<p><br/></p>
			<p><br/></p>
      <h2>精省，減掉了國中國福利</h2>
      <p><br/></p>      
      <p>丁志成就住在光榮國小的圍牆邊，一牆之隔更讓他數十年來「以校為家」，包括在校學生或是畢業校友，只要一走進學校、操場，就經常能夠看到丁老師的身影。丁志成表示，民國53年在友人的推薦下，騎著腳踏車來看看中興第二國民小學（現今南投縣立光榮國小），沒想到就此長住下來。</p>
      <p><br/></p>      
      <p>丁志成要來中興新村任教的時候，不少老師都要他小心，「中興的家長都很會刁難老師」，因為學生都是公務人員子弟，父母本身的教育程度高，對子女的管教也很用心，當時光榮的第一任校長田瑋在他入校服務時，就曾對他說，「這裡的小孩不一樣！」</p>
      <p><br/></p>
			<p><br/></p>
      <LazyImageContain width="450" height="450" :src="img4" :src-web="img4_web" imgsay="光榮國小現今變成小班，學生數不比從前。記者鄭清元／攝影"/>
			<p><br/></p>
			<p><br/></p>
      <p>丁志成和學生、家長的互動中，明顯感到家長的素質很高，不會有無理的要求。他發現，同樣的課程，村內的子弟的學習反應不一樣，程度水平高，也比外面學校優秀、平均，多年後，發現一班至少有7個台大生，不少學生現在在社會上都很有成就。</p>
			<p><br/></p>
      <p>丁志成經歷了謝東閔、林洋港到李登輝幾任的本土籍省主席，印象最深的是李登輝當年常常在村子裡散步，見面時會主動親切地和民眾打招呼，並不會有官架子的派頭，感覺非常好，但國語真的「說不好」。</p>
			<p><br/></p>
      <p>丁志成有一年被選在省府運動會時，在省主席林洋港面前帶過大會操，更是永難忘記的的榮譽，當年省府運動會盛況，不但是集合全省府員工的大聚會，來自省府轄屬的各級機關都派運動菁英與會，競爭熱鬧程度堪比省運會。</p>      
			<p><br/></p>
      <p>每年最高潮的項目，像是各廳處的拔河比賽，都是調派全省各機關單位的壯漢來參加，常常比到最後決賽，大家的嗓子都喊啞了，省府子弟印象最深刻的就是「農林廳對上建設廳」，勇壯如牛、力能拔樹的運動員，常常看得大家熱血沸騰。</p>
    </ContentContainer>

		<FixedBackground :src="fixBg3" :src-web="fixBg3_web" text="民國51年，省公路局第一輛冷暖氣公路客車停在中興會堂前。圖／翻攝自「綠情懷舊專輯」"/> 

    <ContentContainer background-color="#ECEAEA">
      <p><br/></p>
      <p>在交通並不發達的時代，省府員工有令人咋舌的福利「省府交通車」，10多部的大客車，每天上午、中午、傍晚，都在各個路口巡迴設線接送員工上下班。而每周日一早，更安排數輛省府交通車定點接送省府員工子弟免費搭乘，赴台中市往返出遊消費，羨煞附近鄉鎮的民眾，員工若是有婚喪喜慶需要用車，也可以申請自費派車。</p>
			<p><br/></p>
			<p><br/></p>
			<Quote text="對我來說，凍省感受最深的是，學生出去比賽再也沒車可坐了。" color="#FFB93E" borderColor="#FFB93E" refer="光榮國小退休教師 丁志成"/>
			<p><br/></p>
			<p><br/></p>
      <p>談到中興新村「國中之國」的福利，丁志成有感而發地表示，學校學生每年遇到要打預防針時，都是在省府的安排下，優先進行注射，不像外鄉鎮的學校還要申請排隊；另由於村內自成的下水道、汙水處理及自來水廠系統，中興新村是全省第一個在自來水加氟的試辦區，當時成為全省蛀牙最少的地區。</p>      
      
    </ContentContainer>

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
/* components */
import Indicator from './components/Indicator'
import HeadBar from './components/HeadBar'
import Cover from './components/Cover'
import CoverVideo from './components/CoverVideo'
import YoutubeVideo from './components/YoutubeVideo'
import ContentContainer from './components/Content'
import Share from './components/Share'
import Quote from './components/Quote'
import ImageContain from './components/ImageContain'
import LazyImageContain from './components/LazyImageContain'
import Editor from './components/Editor'
import Logo from './components/Logo'
import FBComment from './components/FBComment'
import Relate from './components/Relate'
import Foot from './components/Footer'
import FixedBackground from './components/FixedBackground.vue'
import UrbanDesign from './components/UrbanDesign.vue'

/* images */
import bg from './assets/bg.jpg'
import bg_mobile from './assets/bg_mobile.jpg'
import pic2_web from './assets/pic2.jpg'
import pic2_mobile from './assets/mobile/pic2.jpg'
import img1 from './assets/mobile/a3.jpg'
import img1_web from './assets/a3.jpg'
import img2 from './assets/mobile/b11.jpg'
import img2_web from './assets/b11.jpg'
import img3 from './assets/mobile/b2.jpg'
import img3_web from './assets/b2.jpg'
import img4 from './assets/mobile/b21.jpg'
import img4_web from './assets/b21.jpg'
import fixBg1_web from './assets/a1.jpg'
import fixBg1 from './assets/mobile/a1.jpg'
import fixBg2_web from './assets/b1.jpg'
import fixBg2 from './assets/mobile/b1.jpg'
import fixBg3_web from './assets/b22.jpg'
import fixBg3 from './assets/mobile/b22.jpg'
import map1 from './assets/mobile/map1.jpg'
import map2 from './assets/mobile/map2.jpg'
import map1_web from './assets/map1.jpg'
import map2_web from './assets/map2.jpg'

/* videos */
// import coverVideo_mobile from './assets/videos/mobile/phone_cover.mp4'
import coverVideo_mobile from './assets/videos/mobile/main.mp4'

import coverVideo_web from './assets/videos/pc_cover.mp4'
import coverVideoPoster from './assets/videos/mobile/mobile.jpg'
import coverVideoPoster_web from './assets/videos/main.jpg'

export default {
  name: 'app',
  data: function(){
    return{
      scroll_now: 0,
      bg: bg,
      bg_mobile: bg_mobile,
      pic2_web: pic2_web,
      pic2_mobile: pic2_mobile,
      img1: img1,
      img1_web: img1_web,
      img2: img2,
      img2_web: img2_web,
      img3: img3,
      img3_web: img3_web,
      img4: img4,
      img4_web: img4_web,
      coverVideo_mobile: coverVideo_mobile,
      coverVideo_web: coverVideo_web,
      coverVideoPoster: coverVideoPoster,
      coverVideoPoster_web: coverVideoPoster_web,
      fixBg1_web: fixBg1_web,
      fixBg1: fixBg1,
      fixBg2_web: fixBg2_web,
      fixBg2: fixBg2,
      fixBg3_web: fixBg3_web,
      fixBg3: fixBg3,
      map1: map1,
      map2: map2,
      map1_web: map1_web,
      map2_web: map2_web,
      relate1: 'http://via.placeholder.com/480x304',
      relate2: 'http://via.placeholder.com/480x304',
      relate3: 'http://via.placeholder.com/480x304',
      relate4: 'http://via.placeholder.com/480x304',
      link1: "start",
      link2: "./trip.html",
      video_link1: 'https://www.youtube.com/embed/nNXjZim2dRc?rel=0'
    }
  },
  components: {
    Indicator, HeadBar, Cover, CoverVideo, YoutubeVideo, ContentContainer, Quote, Share, ImageContain, LazyImageContain, Editor, Logo, FBComment, Relate, Foot, FixedBackground, UrbanDesign
  },
  created: function(){
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed: function() {
    window.removeEventListener('scroll', this.onScroll);
  },  
  methods: {
    onScroll: function(){
      this.scroll_now = window.pageYOffset;
    },
    hyperlink: function(link,type){
      if(type==="inner"){
            // scrolling to anchor animation
            let scrollDuration = 500;
            let destination = document.getElementById(link).getBoundingClientRect().top + this.scroll_now;
            let scrollStep = (destination - this.scroll_now) / (scrollDuration / 15);

            let scrollInterval = setInterval(function () {
                this.scroll_now = window.pageYOffset;
                destination = document.getElementById(link).getBoundingClientRect().top + this.scroll_now;
                
                if (this.scroll_now < destination) {
                    scrollStep = (destination - this.scroll_now) / (scrollDuration / 15);
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
