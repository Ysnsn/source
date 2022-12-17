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
async function sw3(id){
   pri = `\n[预活id${id}]`
   for (i = 0; i < 5; i++) {
       await get("yuyue2020/m",`invite&comm_id=${id}&isyuyue=0&isfx=1&testkey=4399NoneDeviceId`)
       let rrr = await get("yuyue2020/m",`choujiang&comm_id=${id}&isyuyue=0&isdown=0&isdownonly=0&testkey=4399NoneDeviceId`)
       if(rrr.prize){
            pri += rrr.prize+"-"
        }else{
           pri +="-无-" //未中奖
        }
    }
    return pri
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

async function un1(){
 prize= "\n光遇: "
 s= "universal"
 await get(s,"login&comm_id=12") 
 let res = await get("universal","getAllTasklist&comm_id=12");
    str1 = res.list.match(/data-task_id="(\d+)"/g);
    str = res.list.match(/data-gameid="(\d+)"/g);
 //console.log(str)
 for (id of str) {
  await get(s, "taskGamePlayTime&comm_id=12&gameid=" + id.split('"')[1])
}
 for (id of str1) {
   await get("universal","completeTask&comm_id=12&id=" + id.split('"')[1])
    await get("universal","getTaskPrize&comm_id=12&id=" + id.split('"')[1])
 }
 /*
 for (i of [136127,60881,63681,83294] ) {
 await get(s, `taskGamePlayTime&comm_id=12&gameid=${i}`)
 }
 for (id of [57,58,59,60,61,62] ) {
  await get("universal",`completeTask&comm_id=12&id=${id}`)
    await get("universal",`getTaskPrize&comm_id=12&id=${id}`)
 }
 */
  await get(s,"share&comm_id=12&share_type=task&task_id=62")
  for (i = 0; i < 3; i++) {
  let inf = await get("universal","getLuckyPrize&comm_id=12")
  if (inf.key == 'ok') {
        prize += inf.name+ '-'
      //  result += prize
        console.log(prize)
   }else{
    prize +="-无-"
    console.log(prize)
    break
   }
   }
  let ress = await get(s,"login&comm_id=8")
  if (ress.key == 'ok') {
    prize += ress.config.user_score
   }
   result += prize
}

async function un2(){
 prize= "\n光遇: "
 s= "universal"
 await get(s,"login&comm_id=12")
 await get(s,"signIn&comm_id=12")
 /*await get(s,"signPost&comm_id=12&id=72")
 await get(s,"signLuckyPost&comm_id=12&id=81")
 await get(s, "signLuckyPost&comm_id=12&id=83")
 await get(s, "signLuckyPost&comm_id=12&id=87")
 ac=luckyDraw  ac=getTaskPrize&id=146215
 */
 await get(s,"share&comm_id=12&share_type=task&task_id=122")
 //await get(s,"taskGamePlayTime&comm_id=12&gameid=106235")
 for (id of [126,123,124,122] ) {
  await get("universal",`completeTask&comm_id=12&id=${id}`)
    await get("universal",`getTaskPrize&comm_id=12&id=${id}`)
 }
 for (i = 0; i < 3; i++) {
  let inf = await get("universal","getLuckyPrize&comm_id=12")
  if (inf.key == 'ok') {
        prize += inf.name+ '-'
        console.log(prize)
   }else{
    prize +="-无-"
    console.log(prize)
    break
    }
   }
   result += prize
}

async function un3(id){
 prize= "\n原神: "
 s= "universal"
 await get(s,`login&comm_id=${id}`)
 await get(s,`signIn&comm_id=${id}`)
 //await get(s,"signPost&comm_id=16&id=206")
 await get(s,"signLuckyPost&comm_id=16&id=210")
 //await get(s, "signLuckyPost&comm_id=12&id=83")
// await get(s, "signLuckyPost&comm_id=12&id=87")
 
 await get(s,`share&comm_id=${id}&share_type=task&task_id=218`)
 await get(s,`taskGamePlayTime&comm_id=${id}&gameid=106235`)
 for (ids of [219,218,217,216,215,214] ) {
  await get("universal",`completeTask&comm_id=${id}&id=${ids}`)
    await get("universal",`getTaskPrize&comm_id=${id}&id=${ids}`)
 }
 for (i = 0; i < 3; i++) {
  let inf = await get("universal",`getLuckyPrize&comm_id=${id}`)
  if (inf.key == 'ok') {
        prize += inf.name+ '-'
        console.log(prize)
   }else{
    prize +="-无-"
    console.log(prize)
    break
    }
   }
   result += prize
}

async function un4(ids){
  prize= "\n光子: "
  s= "universal"
  await get(s,`login&comm_id=${ids}`)
  await get(s, "share&comm_id=17&share_type=task&task_id=261")
  let res = await get("universal","getAllTasklist&comm_id=17");
  str = res.all.Daily.match(/completeTask_(\d+)/g);
  for (id of str) {
    id = id.split('_')[1]
    await get("universal",`completeTask&comm_id=${ids}&id=${id}`)
    await get("universal",`getTaskPrize&comm_id=${ids}&id=${id}`)
 }
 for (i = 0; i < 3; i++) {
  let inf = await get("universal",`getLuckyPrize&comm_id=${ids}`)
  if (inf.key == 'ok') {
        prize += inf.name+ '-'
        console.log(prize)
   }else{
    prize +="-无-"
    console.log(prize)
    break
    }
   }
   result += prize
}


async function ce(){
 s= "celebrate"
 prize = "" 
 await get(s,"login")
 await get(s,"getTasklist")
 await get(s,"share")
 await get(s,"share")
 await get(s,"getBmhReward")
 await get(s,"toReply&content=快快快点吧快乐！！！快点了乐乐乐快乐快乐大本营&vsersionCode=282")
 await get(s,"completeTask&id=1006")
 await get(s,"isRead")
 await get(s,"getMedal")
// await get(s,"getReward&id=1006") //抽奖次数
// await get(s,"getReward&id=1004") 
 
 for (i = 0; i < 3; i++) {
  let inf = await get(s,"getLuckyPrize")
  if (inf.key == 'ok') {
        prize += inf.name+ '-'
        console.log(prize)
   }else{
    prize +="-无-"
    console.log(prize)
    break
    }
   }
 let res= await get(s,"login")
 yh = "\n烟花：" + res.config.fireworks + prize
 console.log(yh)
 result += yh
}


async function yyh1(){
  msg = ""
  s= "2022yyh1/m"
  await get(s, "login")
  await get(s, "gofuli&resure=1")
  await get(s, "lingqushare&resure=0")
  await get(s, "share")
  await get(s, "gozhongcao&resure=1")
  await get(s, "xinshou&resure=1")
  await get(s, "guang&resure=0")
  await get(s, "guangczzl")
  await get(s, "guang&resure=1")
  await get(s,"lingqulicheng&i=1")
  await get(s,"lingqulicheng&i=2")
  await get(s,"lingqulicheng&i=3")
  let res = await $http.get(
        "https://huodong3.3839.com/n/hykb/2022yyh1/m/index.php"
    );
    str1 = res.data.match(/green shiwan(\d+)/g);
    str = res.data.match(/green yygameid-(\d+)/g);
    for (id of str1) {
        await get(s, "playgame&gameid=" + id.split("wan")[1])
    }
    await sleep(1000)
    
    for (id of str) {
        //await get(aid, "lingqushiwan&gameid=" + id.split("_")[2])
        await get(s, "lingquyuyue&gameid=" + id.split("-")[1])
    }
    for (id of str1) {
        await get(s, "lingqushiwan&gameid=" + id.split("n")[2])
        //await get(s, "lingquyuyue&gameid=" + id.split("-")[1])
    }
 let info = await get(s, 'login',true)
  rr= info.config.tizhong
  for (i = 0; i < rr; i++) {
   await get(s, "chouqu")
   }
      //查询
 let inf = await get(s, 'login',true)
 if (inf.key == 'ok') {
        msg = `\n冬日游园会： [${inf.config.maoqiu}]`
        result += msg
        console.log(msg)
 }
 console.log('\n--------航海结束-------\n')
 
}


//游戏分享抽奖 https://huodong3.3839.com/n/hykb/yuyue2020/m/?comm_id=17
async function fx() { 
 //鬼泣 一起来飞车111
// result +=await sw(177)
 
 for (id of [174,176,178,179]) {
   result +=await sw2(id) //花与剑119 秦时明月世界, 漫威107 120 ,比特114 月神的迷宫121
 }
/*
 for (id of [154,155]) {
   result +=await sw3(id) //花与剑119 秦时明月世界, 漫威107 120 ,比特114 月神的迷宫121
 }
 */
}


async function other() {
    await fx()
    await sleep(5000)
    await yyh1()
    await un3(16)
    await un4(17)
    
    console.log("粉丝福利任务开始,记得去app中首页分别搜索进行qq号绑定哦！！")
    //await lottery("lotterysj", 1,[15,11,10,13,3,4,6], "\n[220824]")
   // await lottery("lottery", 70, [1,2,3,4,5,7],"\n[166266]") 
   // await lottery("lottery", 71, [1,2,3,4,6,5,7],"\n[102828]") 
    //await lottery("lottery", 67, [1,2,3,4],"\n[923333]") 
    
    //await lottery("lottery", 66, [1, 2, 3, 4,5],"\n[621621]") 
   // await lottery("lottery2", 13, [1, 2, 3, 4,5],"\n[730730]") 
   for (i = 0; i < 3; i++) {
     console.log("榜单游戏\n\n")
     await gt()
    }
    /*
    for (id of [61]){
     console.log(" 助力抽奖通用\n\n")
     result += await jhy(id)
    }
    */
    //await glist(5)

}