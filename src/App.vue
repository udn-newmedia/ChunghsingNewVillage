<template>
  <div id="app">

    <Indicator color="#FF4612"/>

    <HeadBar>
      <div class="hbutton" slot="inner-link1" slot-scope="props" data-target="1" @click="hyperlink(link1,props.linkType)">空前絕後宋省長</div>
      <div class="hbutton" slot="inner-link2" slot-scope="props" data-target="2" @click="hyperlink(link2,props.linkType)">繁榮與沒落</div>
      <div class="hbutton" slot="inner-link3" slot-scope="props" data-target="3" @click="hyperlink(link3,props.linkType)">出路與困局</div>
      <div class="hbutton" slot="outer-link" slot-scope="props" data-target="4" @click="hyperlink(link4,props.linkType)">來去中興新村</div>
    </HeadBar>

    <CoverVideo :src="coverVideo_mobile" :src-web="coverVideo_web" :poster="coverVideoPoster" :poster-web="coverVideoPoster_web" :data-target="1"></CoverVideo>
    <!--<Cover title="<b>被遺忘的孩子</b><br />我8歲，我住貨櫃屋" font-size="38" title-bottom="65" title-left="30" title-width="320" title-height="95" title-width-web="500" title-height-web="124" title-left-web="116" title-bottom-web="112" :bgWeb="bg" :bg="bg_mobile"/>-->
    <h1 style="display: none;">中興新村 消失的國中國</h1>

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

		<ContentContainer background-color="#ECEAEA" id="anchor1">
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
		</ContentContainer>
    <PhotoComparison :src-new="compare1_new" :src-old="compare1_old" text="中興新村牌樓。記者鄭清元／攝影（老照片翻攝自「綠情懷舊專輯」）"></PhotoComparison>
    <ContentContainer>
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


    <ContentContainer background-color="#ECEAEA" id="anchor2">
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
			<Quote text="以前光華路滿滿的人和車，現在拿機關槍來掃射，也打不到人了。" color="#FFB93E" borderColor="#FFB93E" refer="─中心文具行老闆 林松期"/>
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
			<Quote text="對我來說，凍省感受最深的是，學生出去比賽再也沒車可坐了。" color="#FFB93E" borderColor="#FFB93E" refer="─光榮國小退休教師 丁志成"/>
			<p><br/></p>
			<p><br/></p>
      <p>談到中興新村「國中之國」的福利，丁志成有感而發地表示，學校學生每年遇到要打預防針時，都是在省府的安排下，優先進行注射，不像外鄉鎮的學校還要申請排隊；另由於村內自成的下水道、汙水處理及自來水廠系統，中興新村是全省第一個在自來水加氟的試辦區，當時成為全省蛀牙最少的地區。</p>      
      <p><br/></p>
			<p><br/></p>
      <LazyImageContain width="450" height="450" :src="img5" :src-web="img5_web" imgsay="中州科大教授鍾起岱曾是宋楚瑜的文膽。記者鄭清元／攝影"/>
			<p><br/></p>
			<p><br/></p>
      <h2>精省，迎來人生青天霹靂</h2>
      <p><br/></p>      
      <p>鍾起岱原本是省府經研會副主委，精省把他的人生布局都打壞了。鍾說，他自幼接受傳統愛國教育，一心想要報效國家，歷經連戰、宋楚瑜二位省主席，他幫省府打拚二十年，因為精省成了一場空，他也失去任公職繼續爬升的機會。</p>
			<p><br/></p>
      <p>宋楚瑜上任後，鍾起岱擔任編譯室主任，幫宋主席寫文稿。後來研考會和經建會合併成經研會，鍾起岱是副主委，成為宋楚瑜的重要文膽，經歷最繁華的「大省府時代」。</p>
      <p><br/></p>
			<p><br/></p>
      <LazyImageContain width="450" height="450" :src="img6" :src-web="img6_web" imgsay="台灣省政府大樓，見證了中興新村的興衰。記者鄭清元／攝影"/>
			<p><br/></p>
			<p><br/></p>
      <p>在鍾起岱的印象裡，宋是一個「很認真、對同仁很好、國際觀察深刻」的人，當時鍾起岱第一次寫稿給宋，心裡有些緊張，宋楚瑜默默看完，說「起岱啊，你的文筆很好，但以後請你每天給你老婆看稿，問問她看得懂嗎？」鍾起岱才恍然大悟，文章是寫給人看的，要更平易近人，宋點醒他這個道理。</p>
			<p><br/></p>
      <p>當時台灣的一些大事，如賀伯風災、彰化四信擠兌事件，省新聞處長黃義交緋聞案等，省府幕僚作業鍾起岱都曾參與，算是宋的核心了，因此精省後，宋省長請辭，鍾起岱額頭宛如繫上布條，寫著「宋派」二個字，他便也識趣離開。</p>
			<p><br/></p>
      <p>九二一地震後，行政院在中興新村成立「九二一重建委員會」，執行長黃榮村找鍾起岱擔任計畫處長，黃告訴鍾起岱，「我了解你的背景，重建要大家一起來，這和政黨無關」。黃榮村出任教育部長後，鍾起岱回任省政資料館主任。當時他被交付一個任務，就是勸說同仁離職。有同仁告訴鍾，「你要我們調離，那你自己要不要走」。</p>      
      <p><br/></p>
			<p><br/></p>
      <LazyImageContain width="450" height="450" :src="img7" :src-web="img7_web" imgsay="省長辦公室裡掛台灣省政府的旗幟。記者鄭清元／攝影"/>
			<p><br/></p>
			<p><br/></p>
      <p>鍾起岱這才大夢初醒。一星期後，他申請退休，告別省政府。走出省府大門，鐘起岱望著多雲的天空，跟老婆說：「我的公職生涯結束了。」</p>
      <p><br/></p>
			<p><br/></p>
			<Quote text="當時省府員工 (看精省) 都覺得宋一定會贏，他能凝聚人心。" color="#FFB93E" borderColor="#FFB93E" refer="─中州科大觀光與休閒管理系主任 鍾起岱"/>
			<p><br/></p>
			<p><br/></p>
      <p>鍾起岱說後來他寫成一本40萬字的大作《中興新村學》，研究中興新村的自然與水文、社會與人文、建村故事、文化景觀、歷史建築、宗教生活，並和中興高中校長王延煌合開了一門「中興學」課程，帶學子認識這個他們天天來上課，但可能不甚了解的村子歷史。</p>
			<p><br/></p>
      <p>鍾起岱說，精省一定是政治因素。精省的當下，他覺得是一個錯誤，他沒想到的是，過了二十年，精省真已「精到一滴不剩」，現在來評論精省功過，已無意義。</p>      
      <p><br/></p>
			<p><br/></p>
      <LazyImageContain width="450" height="450" :src="img8" :src-web="img8_web" imgsay="文史工作者陳樂人致力於保存中興新村歷史記憶。記者鄭清元／攝影"/>
			<p><br/></p>
			<p><br/></p>   
      <h2>精省，建築寶庫漸被遺忘</h2>         
			<p><br/></p>   
      <p>陳樂人是中興新村第二代居民。小時候常聽別人羨慕住中興超棒，長大收到存證信函，才領悟到「什麼都不是自己的，有什麼好棒」。父逝後，收到那紙存證信函要求歸還眷舍，才驚覺「這原來不是家」，是公家財產；這也意外成為陳對中興情感再延伸的轉捩點。</p>      
			<p><br/></p>   
      <p>陳父從軍退休轉後文職進入省府，正值疾呼「反攻大陸，建設台灣」的民國60年，陳家趕上最後一批眷舍分配，住進中興新村。</p>
			<p><br/></p>   
      <p>「『老蔣』就是中興新村當年的信仰。」陳指出，中興會堂猶如農村中的廟宇，操場就是廟埕，每逢國慶日、光復節和蔣公誕辰等10月慶典，辦運動會、園遊會或放煙火，規模就像農村趕集大拜拜，如今已不復見。</p>
    </ContentContainer>

		<FixedBackground :src="fixBg4" :src-web="fixBg4_web" text="中興新村有不少老舊宿舍久未整理，夕陽照在老舊的路牌上。記者鄭清元／攝影"/> 

    <ContentContainer background-color="#ECEAEA">
      <p><br/></p>
      <p>陳樂人說，外面的人都稱中興為「省府特區」，真的無法反駁，這裡確實有專屬交通車、垃圾車，孩子被指派讀中興第一或第二國校；只要管好自己院子裡的事，樹葉、垃圾堆在外面就有人掃，一切就是那麼自然。</p>
      <p><br/></p>
      <p>陳提到，入住當年是「中興新市鎮」最理想原型，省府引進「新市鎮」的現代建築和概念，減少不必要屋飾降低成本，造出能容納更多人且符合民生的空間，居住環境是國內僅有。</p>    
			<p><br/></p>
      <p>60年代後「大省府時代」來臨，理想性卻沒了。</p>      
			<p><br/></p>
      <p>中興新村堪稱「建築界的寶庫」，陳提到，當年許多知名建築師參與中興新村戰後第一代現代建築的規劃設計，像是擁雙屋面的紅瓦樓房就是出自「台灣建築設計國寶」王大閎之手。</p>      
      <p><br/></p>
			<p><br/></p>
      <LazyImageContain width="450" height="450" :src="img9" :src-web="img9_web" imgsay="台灣新生報中興新村辦事處舊址，是名建築師修澤蘭的作品，現為唱片餐廳。記者鄭清元／攝影"/>
			<p><br/></p>
			<p><br/></p>
      <p>其中，還有中山樓修建者「台灣第一女建築師」修澤蘭，曾設計台北圓山飯店和中正紀念堂等知名建築的楊卓城，虞曰鎮、關頌聲、吳文熹、張昌華、胡兆煇、吳梅興、倪世槐等產學界的代表性人物。</p>
			<p><br/></p>
      <p>陳說，不少建築學教授告訴學生，「中興新村是很棒的範本」，但沒有文化單位願意去重視，也不去談這村子的建築價值；60年了，不論怎麼改朝換代，政府始終選擇忽略中興新村的一切。</p>
      <p><br/></p>
			<p><br/></p>
			<Quote text="中興新村建築的價值，已被政府忽略了60年。" color="#FFB93E" borderColor="#FFB93E" refer="─文史工作者 陳樂人"/>

    </ContentContainer>

    <ContentContainer background-color="#ECEAEA" id="anchor3">
      <h1><b>出路與困局</b></h1>
      <p><br/></p>
      <p><br/></p>
      <YoutubeVideo :dataSrc="video_link1"></YoutubeVideo>
      <p><br/></p>
      <p><br/></p>
      <h2>精省20年大事紀</h2>
      <p><br/></p>
      <History></History>
      <p><br/></p>
      <p><br/></p>
      <h2>利多政策喚不回人口</h2>
      <p><br/></p>
      <LineChart :csvinput="csvfile1"></LineChart>
      <p><br/></p>      
      <h2>活化，扮演原來角色就好</h2>
      <p><br/></p>
      <p>前總統馬英九宣示讓中興新村發展成文創及高等研究園區，居民憂心原有建築遭損，為讓開發跟保存等達到平衡，曾提報全區聚落保存，最終通過的卻是文化景觀，「逾2000多戶組成怎會不是聚落」。</p>
      <p><br/></p>
      <p>陳樂人說，若要中興文化風華再現，就用文資保存角度進駐，後來卻是想將經濟和研究開發種進這片土地，但這是兩碼子事；起初強調兩者能並行，最後雙方都沒堅持住，部分眷舍遭拆，一切回到原點。</p>
      <p><br/></p>
      <p>「送走魔鬼卻迎來怪物。」中科管理局在高等園區的失敗，讓這爛攤子轉交至國有財產署，但從目前辦理的公聽會來看，一票人又在爛蘋果中找看起來稍好一點的，幾乎可預見再次失敗。</p>
      <p><br/></p>
      <p>時下文創正夯，陳樂人卻不樂見其隨意進駐，他指出，文創可行，但應以中興新村做為中心去發揚，只是政府一接手，這理想就沒了，公部門短視近利，盼村子熱度迅速提升，不是從外地引進文創，就是別的軍眷村翻版，之前辦「駐村藝術家」，畫家進來畫畫，和村民沒互動，也是給人奇怪的違和感，最後無疾而終。</p>
      <p><br/></p>
      <p>陳樂人說，這60年來，村內學校、市場或居民等從未因精省或其他政策而停擺，都是正常運作，所以喊「活化中興」、硬塞進各種元素成了四不像，讓他感覺不是滋味，其實扮好原來的角色就好。</p>
      <p><br/></p>
			<p><br/></p>
			<Quote text="現在是中興新村最美的時候，推動現地博物館便是「天下無敵」。" color="#FFB93E" borderColor="#FFB93E" refer="─文史工作者 陳樂人"/>
      <p><br/></p>
			<p><br/></p>
      <LazyImageContain width="450" height="450" :src="img10" :src-web="img10_web" imgsay="中興新村有不少老宿舍久未整理。記者鄭清元／攝影"/>
			<p><br/></p>
			<p><br/></p>
      <p>但這不代表現有逾2400戶平房都該原樣保存，陳認為，中興新村的老建築，是當年富有實驗性和冒險熱情的建築師們，想像「未來」所打造的生活空間，轉瞬間60年過去，「未來」變成現在，中興新村可延續這種精神，部分眷舍空間挪來延續當年的「實驗性冒險」，就像村子是國內最早將汙、雨水分流設置下水道的聚落，創新容納建築師對未來生活的願景。</p>
			<p><br/></p>
      <p>陳樂人盼家鄉成為「現地博物館」，讓中興新村永遠看得見「過去、現在、未來」三種建築並存。他說，村內從人孔蓋、行道樹、建築、操場和看台等，都深具價值，不只是室內的冰冷展場，他不定時舉辦「中興小旅行」，帶眾人瞭解這龐大、卻鮮為人知的「博物館」。</p>
      <p><br/></p>
			<p><br/></p>
      <LazyImageContain width="450" height="450" :src="img11" :src-web="img11_web" imgsay="作家李展平在中興新村住了30年。記者鄭清元／攝影"/>
			<p><br/></p>
			<p><br/></p>      
      <h2>感慨，各種計畫各種結束</h2>
      <p><br/></p>
      <p>中興新村60年前是一片墓地，因緣際會成為省府所在而冠蓋雲集，如今凍省20年，雖然政府提出許多規畫，但中興新村如遲暮美人鉛華盡退，詩人李展平說，中興新村的快速凋零，對照20年前的繁華，更讓中興人有「青絲怕見白頭」的感慨。</p>
      <p><br/></p>
      <p>李展平在中興新村住了30年，妻子黃幼杏是曾是省府主計處股長，86年凍省時，省府許多單位被廢除，政府鼓勵員工退休，或是降調到其他縣市政府服務，讓許多員工生涯被迫改變。李展平因為在台灣省文獻會擔任編纂，後來被劃歸國史館之下，成為台灣文獻館，至少不用擔心得退休或是搬離中興新村。</p>
    </ContentContainer>

		<FixedBackground :src="fixBg5" :src-web="fixBg5_web" text="中興新村有濃濃的眷村味。記者鄭清元／攝影"/> 

    <ContentContainer background-color="#ECEAEA">
      <p><br/></p>
      <p>中興新村居民的光榮感，在宋楚瑜擔任省長期間達到頂點，宋省長的高知名度，更讓省府如同小內閣。李展平說，沒想到宋楚瑜功高震主，為了拔除他的影響力，政府決定精省，卻讓省府的員工跟著遭殃。</p>
      <p><br/></p>
      <p>凍省之前，省府員工曾經發動抗爭，希望能夠挽救精省的命運。但當時政府強調精省之後，可以為台灣增加五千億元經費用於地方建設，因此，在多數民意支持下，省府還是被精簡，也注定中興新村日漸窮困的命運。結果這五千億元如石沉大海，完全看不出建設在哪裡，反而是中興新村日漸破落，每況愈下，讓他覺得所謂節省幾千億根本是「唬爛語言」。</p>    
      <p><br/></p>
      <p>他說，這20年來，政府為了安撫中興新村居民，曾提出不同的計畫，有縣長候選人說，要把台中捷運延長到中興新村，成為台中都會的後花園。也曾有藝術家駐村，營造為台灣的普羅旺斯，但不到兩三年就以經費不足結束。「藍綠都一樣，中興沒希望」。</p>
      <p><br/></p>
			<p><br/></p>
      <LazyImageContain width="450" height="450" :src="img12" :src-web="img12_web" imgsay="中興新村的林蔭綠地是一大特色。記者鄭清元／攝影"/>
			<p><br/></p>
			<p><br/></p>      
      <p>李展平說，中興新村有的員工宿舍、職務宿舍，居民都沒產權，因此，隨著老居民搬遷或過世，這些房舍又繳回政府。但省府和中科都無力管理，讓宿舍荒廢的狀況更嚴重，內部許多五金材料都被小偷搬光。他曾經帶愛好攝影的朋友來拍攝，結果友人看到宿舍如此破敗，不好意思地說「沒地方取景」，讓他當下很想找個洞鑽進去。</p>
      <p><br/></p>
			<p><br/></p>
			<Quote text="一個虛幻的城市、一個悲情的城市，綠意只能讓遊客短暫停留，剖開裡面是蛀蟲和小偷。" color="#FFB93E" borderColor="#FFB93E" refer="─作家 李展平"/>
      <p><br/></p>
			<p><br/></p>
      <p>中興新村空有花園城市美名，已經是金玉其外敗絮其內，夜晚一到更空空蕩蕩變的像鬼域。希望政府能對這些有歷史意義的老建築，能夠妥善保留，或是與企業合作，作為旅遊景點，讓國內外遊客住宿，維持中興新村的面貌。</p>
      <p><br/></p>
			<p><br/></p>
      <LazyImageContain width="450" height="450" :src="img13" :src-web="img13_web" imgsay="中興新村榮景促進會理事長史祝賢。記者鄭清元／攝影"/>
			<p><br/></p>
			<p><br/></p>  
      <h2>棘手，牽涉太廣各自為政</h2>
      <p><br/></p>
      <p>中興新村榮景促進會理事長史祝賢（冬冬），是光華里前里長，對於地方經濟和人口的繁華興衰，全都看在眼裡，他說，20年前在他任內居民還有逾2000人，隨公務員遷出，退休人員病逝，如今僅剩不到800人。他曾辦報「大中興報導」，希望喚起政府對村子的重視，結果政府毫無反應，報紙8期停刊，換來某高官一句「冬冬不要再鬧了」。</p>
      <p><br/></p>
      <p>在馬政府任內，前行政院長江宜樺也曾提出將中興新村交給文化部管轄，卻被已「量體太大」被打回票，畢竟2000多戶若以文資修建保存，所費不貲，誰願意承接。中科很努力想活化村子，但不懂文資法，窒礙難行，如今中科又將中興文史住宅區脫手，移交給國有財產署管理。</p>
    </ContentContainer>

		<FixedBackground :src="fixBg6" :src-web="fixBg6_web" text="如今的中興新村冷清許多，第一市場看來有些蕭條。記者鄭清元／攝影"/> 

    <ContentContainer background-color="#ECEAEA">
      <p><br/></p>
			<p><br/></p>
			<Quote text="流水的官兵，鐵打的營房，官員一個一個換，中興新村依然被遺忘。" color="#FFB93E" borderColor="#FFB93E" refer="─中興新村榮景促進會理事長 史祝賢"/>
      <p><br/></p>
			<p><br/></p>
      <p>史說，國產署想以ROT促使民間力量進駐，但「大包」單年綠美化經費少說700萬元，清理水溝更要上千萬元，若要分批外包中興會堂或小巨蛋，重新開放前須修建，後續維護也是一大筆錢，業者在商言商，因此想找到人接，沒那麼簡單。</p>
			<p><br/></p>
      <p>史祝賢認為，在中興新村管轄權被中科和國產署一分為二後，最讓居民和文史工作者關注的就是眷舍住宅群；而改善的最好方法就是讓人住進來。</p>
			<p><br/></p>
      <p>他指出，希望人住進來最好的方法就是不用修，但租金低廉，但有規範打契約可自行修繕，但不損及主體建築或外觀等，而有人員入住才有在地消費；以2000空戶試算，每戶住2人就帶進4000人，對餐飲和商業有幫助。</p>
      <p><br/></p>
			<p><br/></p>
      <LazyImageContain width="450" height="450" :src="img14" :src-web="img14_web" imgsay="中興兒童公園吸引許多小朋友遊玩。記者鄭清元／攝影"/>
			<p><br/></p>
			<p><br/></p>  
      <p>政府甚至可適當修建部分單身宿舍，鎖定特殊短期租賃客群，像是能做為做學生宿舍、背包客棧，甚至供全台都市計畫、建築或景觀科系等到中興新村觀摩，他們來中興就有地方住，中興會堂也有NGO教室可使用。</p>
			<p><br/></p>  
      <p>史祝賢說，中興新村問題之所以棘手，就是因為牽涉太廣，文化資產、科技研究、公務機關彙集，像北區有省府、役政署、經濟部所屬單位和將升格農業部的農委會，南區由中科掌科技研究和文創，中區就是國產署的文史眷舍。</p>
			<p><br/></p>  
      <p>而這些單位同樣在村內會有公共設施維護和使用上的問題，但長官們層級位階雷同，且各自為政，現在省主席的權力「可能比里長還小」，就需要更高一層的官員協助協調，因此建議政府應派駐專門政務委員，跨部會統籌協商，在中興新村的政策才有順利推行的可能。</p>
      <p><br/></p>
			<p><br/></p>
      <LazyImageContain width="450" height="450" :src="img15" :src-web="img15_web" imgsay="中台灣創新園區對中興新村的復興使不上力。記者黃仲裕／攝影"/>
			<p><br/></p>
			<p><br/></p>  
      <h2>無奈，管理複雜開發不易</h2>
      <p><br/></p>
      <p>中科在民國98年奉行政院之命承接中興新村的政策發展，然而100年環評通過，其結論是除了文創產業之外，不得量產，只能研發，和傳統科學園區的概念可說完全相背。</p>
      <p><br/></p>
      <p>中科副局長施文芳表示，101年時南投縣根據文資審議，公告中興新村90%的面積（約234公頃）規畫做文化景觀區，中興新村周遭本已欠缺科技人才，加上不能量產只能研發，沒有完整的生態鏈，開發起來的確不容易。</p>
      <p><br/></p>
      <p>村子管理也不符合中科過去的專業，中興新村除了既有的公家機關，村子裡有體育館、醫院、殯儀館、游泳池、高爾夫球場等場館，中科缺乏這部分的管理經驗；最困擾的是宿舍群，兩千多戶中一千五百多戶尚有人居，管理起來相當複雜。</p>
      <p><br/></p>
      <p>施文芳表示，南核心區持續招商，成績其實不錯，工研院、百佳泰、可速姆進駐、正瀚生技也在建廠，周圍的綠意讓南投市、草屯的居民也很願意來此活動。他相信北、中區在國產署接手後會找到最適合的管理方法。施文芳也建議：尋求最大公約數、和文化資產共存共榮、引進民間的專業，文資若要可長可久，也不能完全排斥工程的技術。</p>      
    </ContentContainer>

    <ContentContainer>
			<Share href="https://udn.com/upf/newmedia/2017_data/poverty/index.html"/>
			<Logo />
			<p><br/></p>
			<Editor>
				<div>採訪：劉重善、林新輝、程嘉文、鄭朝陽、賈寶楠、江良誠、黑中亮、張家樂、賴香珊、毛鼎言、陳俊傑</div>
				<div>影音：蔣宗裕、何純輝、王騰毅</div>
				<div>視覺設計：楊國長、蘇韋豪</div>
				<div>網頁製作：方泰鈞</div>
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
import History from './components/History.vue'
import LineChart from './components/LineChart.vue'
import PhotoComparison from './components/PhotoComparison.vue'

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
import img5 from './assets/mobile/b3.jpg'
import img5_web from './assets/b3.jpg'
import img6 from './assets/mobile/b31.jpg'
import img6_web from './assets/b31.jpg'
import img7 from './assets/mobile/b32.jpg'
import img7_web from './assets/b32.jpg'
import img8 from './assets/mobile/b4.jpg'
import img8_web from './assets/b4.jpg'
import img9 from './assets/mobile/b42.jpg'
import img9_web from './assets/b42.jpg'
import img10 from './assets/mobile/b45.jpg'
import img10_web from './assets/b45.jpg'
import img11 from './assets/mobile/c1.jpg'
import img11_web from './assets/c1.jpg'
import img12 from './assets/mobile/c12.jpg'
import img12_web from './assets/c12.jpg'
import img13 from './assets/mobile/c2.jpg'
import img13_web from './assets/c2.jpg'
import img14 from './assets/mobile/c22.jpg'
import img14_web from './assets/c22.jpg'
import img15 from './assets/mobile/c3.jpg'
import img15_web from './assets/c3.jpg'
import fixBg1_web from './assets/a1.jpg'
import fixBg1 from './assets/mobile/a1.jpg'
import fixBg2_web from './assets/b1.jpg'
import fixBg2 from './assets/mobile/b1.jpg'
import fixBg3_web from './assets/b22.jpg'
import fixBg3 from './assets/mobile/b22.jpg'
import fixBg4_web from './assets/b41.jpg'
import fixBg4 from './assets/mobile/b41.jpg'
import fixBg5_web from './assets/c11.jpg'
import fixBg5 from './assets/mobile/c11.jpg'
import fixBg6_web from './assets/c21.jpg'
import fixBg6 from './assets/mobile/c21.jpg'
import map1 from './assets/mobile/map1.jpg'
import map2 from './assets/mobile/map2.jpg'
import map1_web from './assets/map1.jpg'
import map2_web from './assets/map2.jpg'
import compare1_new from './assets/mobile/a2.jpg'
import compare1_old from './assets/mobile/a21.jpg'

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
      img5: img5,
      img5_web: img5_web,
      img6: img6,
      img6_web: img6_web,
      img7: img7,
      img7_web: img7_web,
      img8: img8,
      img8_web: img8_web,
      img9: img9,
      img9_web: img9_web,
      img10: img10,
      img10_web: img10_web,
      img11: img11,
      img11_web: img11_web,
      img12: img12,
      img12_web: img12_web,
      img13: img13,
      img13_web: img13_web,
      img14: img14,
      img14_web: img14_web,
      img15: img15,
      img15_web: img15_web,
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
      fixBg4_web: fixBg4_web,
      fixBg4: fixBg4,
      fixBg5_web: fixBg5_web,
      fixBg5: fixBg5,
      fixBg6_web: fixBg6_web,
      fixBg6: fixBg6,
      map1: map1,
      map2: map2,
      map1_web: map1_web,
      map2_web: map2_web,
      compare1_new: compare1_new,
      compare1_old: compare1_old,
      relate1: 'http://via.placeholder.com/480x304',
      relate2: 'http://via.placeholder.com/480x304',
      relate3: 'http://via.placeholder.com/480x304',
      relate4: 'http://via.placeholder.com/480x304',
      link1: "anchor1",
      link2: "anchor2",
      link3: "anchor3",
      link4: "./trip.html",
      video_link1: 'https://www.youtube.com/embed/nNXjZim2dRc?rel=0',
      csvfile1: '../static/newdata.csv'
    }
  },
  components: {
    Indicator, HeadBar, Cover, CoverVideo, YoutubeVideo, ContentContainer, Quote, Share, ImageContain, LazyImageContain, Editor, Logo, FBComment, Relate, Foot, FixedBackground, UrbanDesign, History, LineChart, PhotoComparison
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

      //toggle hamburger menu
      var menu = document.getElementById('hbutton-contain');
      menu.classList.toggle("open");

      var hamburger = document.getElementById('nav-icon');
      hamburger.classList.toggle("open");

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
