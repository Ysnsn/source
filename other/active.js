let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

//  助力抽奖通用https://huodong3.3839.com/n/hykb/zhuli?comm_id=44
async function jhy(id) {
     prize = `\n[活动id${id}]`
    let logindata = await get("zhuli", `login&comm_id=${id}`)
    if (logindata.loginStatus == 100 && logindata.key == "ok") {
        uid = logindata.config.uid
        for (i = 0; i < 3; i++) {
            await get("zhuli", `zhuli&uid=${uid}&comm_id=${id}`)
            await sleep(1000)
            let res = await get("zhuli", `choujiang&isdown=1&comm_id=${id}`)
            if(res.prize){
            prize +=res.prize+"-"
          }else{
           prize +="-无-" //未中奖
            }
           
        }
    }
    return prize
}


//快爆粉丝福利80080
async function lottery(a, b, c,d) {
    prize=""
    await get(`${a}/m`, `login&comm_id=${b}&isyuyue=0`)
     await get(`${a}/m`, `jumpbdqq&comm_id=${b}&isyuyue=0`)
    for (i of c) {
        await get(`${a}/m`, `DailyAppJump&comm_id=${b}&isyuyue=0&id=${i}`)
        await get(`${a}/m`, `DailyAppLing&comm_id=${b}&isyuyue=0&id=${i}`)
        let res =await get(`${a}/m`, `chouqu&comm_id=${b}&isyuyue=0`)
        if(res.prizename){
            prize +=res.prizename
         }else{
           prize +="-" //未中奖
        }
        await sleep(1000)
        await get(`${a}/m`, `BaoXiangLing&comm_id=${b}&isyuyue=0&id=${i}`)
    }
    let login = await get(`${a}/m`, `login&comm_id=${b}&isyuyue=0`)
    jifen = login.config.jifen
    play=login.config.played
    if (login.config.daoju){
     daoju =login.config.daoju
    }else{
     daoju = 0
    }
    result +=d + "积分:" + jifen+ "抽取次数:"+play+"道具:"+daoju+" "+prize
    console.log(result)
}

async function lottery2(a, b, c,d) {
    prize=""
    await get(`${a}/m`, `login&comm_id=${b}&isyuyue=1`)
     await get(`${a}/m`, `jumpbdqq&comm_id=${b}&isyuyue=1`)
    for (i of c) {
        await get(`${a}/m`, `DailyAppJump&comm_id=${b}&isyuyue=1&id=${i}`)
        await get(`${a}/m`, `DailyAppLing&comm_id=${b}&isyuyue=1&id=${i}`)
        let res =await get(`${a}/m`, `chouqu&comm_id=${b}&isyuyue=1`)
        if(res.prizename){
            prize +=res.prizename
         }else{
           prize +="-" //未中奖
        }
        await sleep(1000)
        await get(`${a}/m`, `BaoXiangLing&comm_id=${b}&isyuyue=1&id=${i}`)
    }
    let login = await get(`${a}/m`, `login&comm_id=${b}&isyuyue=1`)
    jifen = login.config.jifen
    play=login.config.played
    if (login.config.daoju){
     daoju =login.config.daoju
    }else{
     daoju = 0
    }
    result +=d + "积分:" + jifen+ "抽取次数:"+play+"道具:"+daoju+" "+prize
    console.log(result)
}



//秦时明月世界试玩 狼人 鬼泣巅峰
async function sw(id){
   pri = `\n[预约活动id${id}]`
   for (i = 0; i < 2; i++) {
    await get("yuyue2020/m",`checkfx&comm_id=${id}&isyuyue=0&isfx=1&testkey=4399NoneDeviceId`)
    await get("yuyue2020/m",`invite&comm_id=${id}&isyuyue=0&testkey=4399NoneDeviceId`)
    await get("yuyue2020/m",`playgame&comm_id=${id}&isyuyue=0&testkey=4399NoneDeviceId`)
    await sleep(2000)
    let res = await get("yuyue2020/m",`choujiang&comm_id=${id}&isyuyue=0&isdown=1&isdownonly=1&testkey=4399NoneDeviceId`)
    if(res.prize){
    pri +=res.prize+"-"
    }else if (res.msg){
       pri +=res.msg
       break
    }else{
     pri +="无-" 
    }
 }
 
  return pri
}

async function sw2(id){
   pri2 = `\n[预约活动id${id}]`
   for (i = 0; i < 2; i++) {
    await get("yuyue2020/m",`yuyuedown&comm_id=${id}&isyuyue=1&testkey=4399NoneDeviceId`)
    await get("yuyue2020/m",`yuyue&comm_id=${id}&isyuyue=1&testkey=4399NoneDeviceId`)
    await get("yuyue2020/m",`checkfx&comm_id=${id}&isyuyue=1&isfx=1&testkey=4399NoneDeviceId`)
    await get("yuyue2020/m",`invite&comm_id=${id}&isyuyue=1&testkey=4399NoneDeviceId`)
    await get("yuyue2020/m",`playgame&comm_id=${id}&isyuyue=1&testkey=4399NoneDeviceId`)
    await sleep(2000)
      let res = await get("yuyue2020/m",`choujiang&comm_id=${id}&isyuyue=1&isdown=0&isdownonly=0&testkey=4399NoneDeviceId`)
    if(res.prize){
    pri2 +=res.prize+"-"
    }else if (res.msg){
       pri2 +=res.msg
       break
    }else{
     pri2 +="无-" 
    }

 }
 
    return pri2
}



//游戏分享抽奖 https://huodong3.3839.com/n/hykb/yuyue2020/m/?comm_id=17
async function fx() { 
 //鬼泣 一起来飞车111
 for (id of [67,136,141]) {
   result +=await sw2(id) //花与剑119 秦时明月世界, 漫威107 120 ,比特114 月神的迷宫121
 }
//50黎明觉醒 明日之后127 138炉石 //136重返帝国
 //魔力宝贝141
 //144幻塔
 //result += await sw2(133) //荣耀新三国133,134
   //三国无双125 128  哈利波特45 132 134
 //result += await sw2(50)  //镇魂街67     王牌115
// result += await sw3(124)   122黑月
//139数码宝贝

 for (id of [153]) {
   result +=await sw(id) //花与剑119 秦时明月世界, 漫威107 120 ,比特114 月神的迷宫121
 }
 
 
}


async function ddd(id) {
    await get("yuyue2020/m",`invite&comm_id=${id}&isyuyue=0&isfx=1&testkey=4399NoneDeviceId`)
    await get("yuyue2020/m",`choujiang&comm_id=${id}&isyuyue=0&isdown=1&isdownonly=1&testkey=4399NoneDeviceId`)
    await get("yuyue2020/m",`mycode&comm_id=${id}&isyuyue=0&testkey=4399NoneDeviceId`)
   
}


Date.prototype.Format = function(fmt) { 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


function getToday() {
    return new Date().Format("yyyy-MM-dd+hh:mm:ss")
}

//榜单游戏分享
async function gt() {
 id = await hd()
 console.log(id)
 y= getToday()
 get("gs",`shareback&gameid=${id}&t=${y}`)
 t = getToday()
 get("gs",`supershare&gameid=${id}&t=${t}`,"")
 r= getToday()
 get("gs",`superling&gameid=${id}&t=${r}`,"")
}

async function hd() {
      let res = await $http.post( 
         "https://huodong3.3839.com/hykb/gs2/",
       {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 8.0.0; FRD-AL10 Build/HUAWEIFRD-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045224 Mobile Safari/537.36 V1_AND_SQ_7.1.0_0_TIM_D TIM/3.0.0.2860 QQ/6.5.5  NetType/WIFI WebP/0.3.0 Pixel/1080",
          },
        }
      );
      id= res.data.match(/HdmodelUser\.YouxiInfo\((\d+)\)/)[1]
      return id
}

 
//游戏单  7.9
async function glist(id) {
    for (typeid of ["qq", "wx", "weibo"]) {
        await get("glist", `share&typeid=${typeid}&comm_id=${id}`)
        await sleep(1000)
    }
    await get("glist", `receiveBmh&comm_id=${id}`)

}
async function cfm2(){
  prize="\n穿越火线: "
  a= "cfm2/m"
  await get(a, "login&comm_id=1&isyuyue=0")
  await get(a, "DailyQiandao&comm_id=1&isyuyue=0&id=1")
  await get(a, "DailyGamePlay&comm_id=1&isyuyue=0&id=2")
  await get(a, "DailyGameLing&comm_id=1&isyuyue=0&id=2")
  await get(a, "DailyAppJump&comm_id=1&isyuyue=0&id=3")
  await get(a, "DailyAppLing&comm_id=1&isyuyue=0&id=3")
  await get(a, "DailyAppJump&comm_id=1&isyuyue=0&id=4")
  await get(a, "DailyAppLing&comm_id=1&isyuyue=0&id=4")
  for (i = 1; i < 3; i++) {
     await get(a, "DailyInviteJump&comm_id=1&isyuyue=0&id=5")
     await get(a, "DailyShareback&mode=qq&comm_id=1&isyuyue=0&id=5")
     await get(a, "DailyInviteLing&comm_id=1&isyuyue=0&id=5")
   let re = await get(a, "chouqu&comm_id=1&isyuyue=0")
   if(re.prizename){
            prize +=re.prizename
         }else if (re.msg){
             prize +=re.msg
             break
          }else{
           prize +="-无-" //未中奖
        }
   }
   result += prize
   console.log(result)
}

async function xinnian() {
    aid = "2022xinnian/m"
    await get(aid, "login")
    await get(aid, "giftcode&shareCode=da765de95024f")
    await get(aid, "gofuli&resure=1")
    await get(aid, "share")
    await get(aid, "gozhongcao&resure=1")
    await get(aid, "xinshou&resure=1")
    await get(aid, "guangczzl")
    await get(aid,"guang&resure=1")
    let res = await $http.get(
        "https://huodong3.3839.com/n/hykb/2022xinnian/m/index.php"
    );
    str1 = res.data.match(/btn shiwan(\d+)/g);
    str = res.data.match(/btn yygameid-(\d+)/g);
    for (id of str1) {
        await get(aid, "playgame&gameid=" + id.split("wan")[1])
    }
    await sleep(1000)
    for (id of str) {
        //await get(aid, "lingqushiwan&gameid=" + id.split("_")[2])
        await get(aid, "lingquyuyue&gameid=" + id.split("-")[1])
    }  
    for (i of [3,4,5]){
          await get(aid, "lingqushiwan&gameid=" + str1[i].split("wan")[1])
        }
    let info = await get(aid, "login")
    if (info.key == "ok") {
        msg = `\n【庙会】：福气[${info.config.tizhong}]  爆珠[${info.config.maoqiu}]`
        result += msg
        console.log(msg)
    }
}

async function other() {
    await fx()
    await sleep(5000)
    await xinnian()
    await get("2022sfshare","login")
    await get("2022sfshare","share")
   // await cfm2()
    console.log("粉丝福利任务开始,记得去app中首页分别搜索进行qq号绑定哦！！")
   await lottery("lottery", 36, [1, 2, 3, 4],"\n[222668]")
   await lottery("lottery", 35, [1, 2, 3, 4, 5,6],"\n[220128]")
    await lottery("lottery", 34, [1, 2, 3, 4, 5],"\n[20220124]")
    await lottery("lottery", 33, [1, 2, 3, 4, 5],"\n[220111]")
     
    await lottery("lottery2", 3, [1, 2, 3, 4, 5, 6, 7, 8, 9],"\n[41616]") 
    await lottery("lottery2", 5, [1, 2, 3, 4, 5, 6, 7],"\n[037037]") 
    await lottery("lottery2", 6, [1, 2, 3, 4, 5, 6,8],"\n[72020]") 
    
    await lottery("lottery2", 1, [1, 2, 3, 4, 5, 6, 7, 8, 9],"\n[331330]") 
    /*
    await lottery("lottery", 5, [1, 2, 3, 4, 6, 7,8,10,9],"\n王牌勋章[630630]") //630630
    await lottery("lottery", 4, [1, 2, 3, 4, 5, 6, 8,14,12],"\n补给箱[25525]") //25525
    await lottery("lottery", 3, [1, 2, 3, 6, 7, 8, 14,12],"\n宝石[79979]")//79979
    */
        
    
    for (i = 0; i < 3; i++) {
     console.log("榜单游戏\n\n")
     await gt()
    }
    await glist(3)
    for (id of [48,49,50]){
     console.log(" 助力抽奖通用\n\n")
     result += await jhy(id)
    }

}