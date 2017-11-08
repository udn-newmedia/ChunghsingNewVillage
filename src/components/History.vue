<template>
    <div class="design">
        <div class="block">
            <p class="title">1998</p>
            <p class="subtitle">省政府虛級化，推動「精省」</p>
        </div>
        <div class="block">
            <p class="title">1999</p>
            <p class="subtitle">921大地震，廳舍受創嚴重</p>
        </div>
        <div class="block">
            <p class="title">2002</p>
            <p class="subtitle">扁執政時期，規畫為「國際會議中心」</p>
        </div>
        <div class="block">
            <p class="title">2009</p>
            <p class="subtitle">經建會確定發展「高等研究園區」</p>
        </div>
        <div class="block">
            <p class="title">2009</p>
            <p class="subtitle">宿舍區列入文化資產保護</p>
        </div>
        <div class="block">
            <p class="title">2016</p>
            <p class="subtitle">行政院改推「明日村」計畫</p>
        </div>
        <div class="block">
            <p class="title">2016</p>
            <p class="subtitle">發展青創園區，邀20大專院校進駐</p>
        </div>
        <div class="block">
            <p class="title">2017</p>
            <p class="subtitle">遷都中部？賴揆表示會先到中興新村了解</p>
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
        font-size: 18px;
    }

    .block {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        margin: 10px 0;

    }

    .title {
        width: 20%;
        text-align: center;
        font-weight: bold;
        background: lightgray;
        border-radius: 15px;

    }

    .subtitle {
        width: 70%;
    }



    
    @media screen and (min-width: 1200px){

        .design {
            font-size: 21px;
        }

        .block {
            margin: 20px 0;
        }

        .title {
            width: 10%;
        }

        .subtitle {
            width: 80%;
        }

    }

</style>