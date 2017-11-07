<template>
    <div class="design">
        <div class="block">
            <p class="title">仿倫敦新市鎮</p>
            <p class="subtitle">低成本、高容納量、符合民生需求</p>
        </div>
        <div class="block">
            <p class="title">田園行政社區</p>
            <p class="subtitle">辦公和住宅合一</p>
        </div>
        <div class="block">
            <p class="title">早期低碳社區</p>
            <p class="subtitle">建築開發低密度，擁大片綠地樹木</p>
        </div>
        <div class="block">
            <p class="title">街廓以人為本</p>
            <p class="subtitle">道路系統採人車分離</p>
        </div>
        <div class="block">
            <p class="title">囊底路的設計</p>
            <p class="subtitle">降低車速，便於車輛迴轉</p>
        </div>
        <div class="block">
            <p class="title">生活機能充足</p>
            <p class="subtitle">擁市場、醫院、圖書館、公園等場域</p>
        </div>
        <div class="block">
            <p class="title">下水道有系統</p>
            <p class="subtitle">雨、汙水分流，開生活環保之先例</p>
        </div>
        <div class="block">
            <p class="title">建築藝術寶庫</p>
            <p class="subtitle">知名建築師王大閎、修澤蘭等規畫設計</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'urbandesign',
    data: function() {
        return {
            opacity: 0,
            isHidden: false
        }
    }
}
</script>

<style scoped>

    /** {
        border: solid 1px black;
    }*/

    .design {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        font-size: 18px;
    }

    .block {
        width: calc(100%/2);
        padding: 10px;
    }

    .title {
        text-align: center;
        font-weight: bold;
        background: lightgray;
        border-radius: 10px;
    }

    .subtitle {
        padding: 0 5px;
    }

    @media screen and (min-width: 1200px){

        .design {
            font-size: 21px;
        }

        .block {
            padding: 0 20px;
            width: calc(100%/4);
        }

        .subtitle {
            padding: 0 10px;
        }
    }

</style>