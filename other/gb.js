const axios = require("axios");
const yaml = require("js-yaml");
const fs = require('fs');
const yargs = require('yargs');
let argv = yargs.argv._
global.config = yaml.load(fs.readFileSync('./config.yml', 'utf8'));
const $http=require("axios")
const hyck = config.hykb7.scookie
let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
//照料id 我没加好友所以随机取得 第一个是我,不建议改ヽ(*´з｀*)ﾉ
buid = [21039293,48653684,44191145,54216701,54184381,38442812,34977383,54099572,54060137,18344113,53950826,53334988,49100316,24158995,53043395,53746196,7495782,53752398,13268805,53540861,53169378,53481728,53480955,53236037,5015419,17998323,142234,53043027,53022651,52883552,52919017,52883915,2987459,52863870,52787172,52782808,52694050,20997885,51870224,51854475,45610785,51060995,51041635,22673480,26442566,49469272,49614447,2596430,49728164,49486242,49662192,49613978,46353292,49343258,45415658,49011759,48694743,48557745,39246562,48714555,7081589,19159172,1779737,48346086,48339861,47879039,23201290,48214589,48204930,48075558,576273,48074580,48043586,47937184,45231130,47937216,47236557,47889444,1656229,12094940,113403,35309397,47126286,39092668,46987060,46938478,33318766,39092819,24164451,46816636,20041171,1991977,45236927,45229941,45416573,45535123,11222716,45230227,29935848,32441297,23450463,45461447,8251603,45783763,14409304,12661364,45473957,45751761,23079057,140449,27139868,44840858,21273234,45078335,44758815,44838804,45234308,45466314,45562418,45045871,45507665,45263948,45249695,44042408,9169383,44761568,44471412,44440362]
uid = [50502194,33318766,52787172]
result=""
scookie = hyck.match(/\|/)?encodeURIComponent(hyck):hyck
function get(a, b) {
  return new Promise(async (resolve) => {
    try {
      let res = await $http.post(
        `https://huodong3.3839.com/n/hykb/${a}/ajax.php`,
        `ac=${b}&r=0.${Math.round(Math.random() * 8999999999999999) + 1000000000000000}&scookie=${scookie}`,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 10; MI 8 UD Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.101 Mobile Safari/537.36Androidkb/1.5.5.902(android;MI 8 UD;10;1080x2029;WIFI);@4399_sykb_android_activity@"
                  },
        }
      );

      if (JSON.stringify(res.data).match(/玉米成熟度已经达到100/)) {
        await get("grow", "PlantRipe"); //收获
        await get("grow", "PlantSow"); //播种
        await get(a, b); //播种        
      }
      if (JSON.stringify(res.data).match(/还没有播种玉米/)) {
          let bzs = await get("grow", "PlantSow"); //播种
          if (bzs.seed && bzs.seed == 0) {
            //    console.log("莫得种子了")
            await get("grow", "GouMai&resure=1&gmmode=seed&tmpNum=10"); //购买种子*10
            await get("grow", "PlantSow"); //播种
          }
          await get(a, b);
        }
      if (b == "Watering") {
        if (res.data.key == "ok") {
          waterresult = `今日浇灌成功,获得${res.data.add_bmh}爆米花,连续浇灌${res.data.nowJiaoGuanDay}天,成熟度：${res.data.csd_num},爆米花：${res.data.baomihua}`;
          back = waterresult;
        } else {
          waterresult = res.data.info;
          back = waterresult;
        }
      } else {
        back = res.data;
      }
      console.log(back);
    } catch (err) {
      console.log(err);
    }
    resolve(back);
  });
}

async function change() {
  egg = "鬼泣巅峰之战官宣6月11日正式上线"
  miling ="超凡先锋将于6月11日开测"
  await get("friend", `Secretorder&miling=${miling}`); //密令
  await get("wxsph", `send_egg&egg_data=${egg}`); //视频彩蛋

  //  for (i = 0; i < 90; i++) {
  //     await get("lottery/m","duihuanprize&dhid=2&comm_id=9&resure=1&isyuyue=0")
 //   }
}


async function dh(){
   while (true) {
    //await get("lottery/m","mycode&comm_id=10&isyuyue=0") //80080
  //  await get("zhuli","mycode&comm_id=41")
   //await get("yuyue2020/m","mycode&comm_id=17&isyuyue=0&testkey=4399NoneDeviceId")
      await get("lottery/m","duihuanprize&dhid=1&comm_id=37&resure=1&isyuyue=0")
         //await get("lottery/m","duihuanprize&dhid=1&comm_id=14&resure=1&isyuyue=0")  
     // await get("lottery/m","duihuanprize&dhid=1&comm_id=10&resure=1&isyuyue=0")  //25525 点卷
  }
}

async function t() {
 for (i of buid) {
    await get("grow", `gamehander&buid=${i}&icon_id=49`); //照料
    await get("grow",  `gamehander&buid=${i}&icon_id=888888`); //偷玉米
  }
  
}

async function sw3(id){
   pri2 = `\n[预约活动id${id}]`
   for (i = 0; i < 2; i++) {
   await get("yuyue2020/m",`yuyuedown&comm_id=${id}&isyuyue=1&testkey=4399NoneDeviceId`)
    await get("yuyue2020/m",`yuyue&comm_id=${id}&isyuyue=1&testkey=4399NoneDeviceId`)
    await get("yuyue2020/m",`checkfx&comm_id=${id}&isyuyue=1&isfx=1&testkey=4399NoneDeviceId`)
    await get("yuyue2020/m",`invite&comm_id=${id}&isyuyue=1&testkey=4399NoneDeviceId`)
   // await get("yuyue2020/m",`playgame&comm_id=${id}&isyuyue=1&testkey=4399NoneDeviceId`)
   // await sleep(5000)
     let res = await get("yuyue2020/m",`choujiang&comm_id=${id}&isyuyue=1&isdown=0&isdownonly=0&testkey=4399NoneDeviceId`)
    if(res.prize){
    pri2 +=res.prize+"-"
    }else{
     pri2 +="---" 
    }
      //await sleep(1000)
 }
 
   console.log(pri2)
}
    
//游戏分享抽奖
async function fx() {
 for (id of [113]) {
   await sw(id)
   await sw(id)
 }
}


async function bd() {
  //await get("bmhstore2","viewDialog&goodsid=3608&t=2021-05-30+19:39:5")

   await get("yuyue2020/m","checkqq&comm_id=17&isyuyue=0&qq=3245289855&qqt=3245289855&testkey=4399NoneDeviceId")
   await get("yuyue2020/m","submitqq&comm_id=17&isyuyue=0&qq=3245289855&testkey=4399NoneDeviceId")
   await get("yuyue2020/m","checkqq&comm_id=93&isyuyue=0&qq=3245289855&qqt=3245289855&testkey=4399NoneDeviceId")
   await get("yuyue2020/m","submitqq&comm_id=93&isyuyue=0&qq=3245289855&testkey=4399NoneDeviceId")
   id =41
  let logindata = await get("zhuli", `login&comm_id=${id}`)
   await get("yuyue2020/m","mycode&comm_id=93&testkey=4399NoneDeviceId")
  await get("yuyue2020/m","mycode&comm_id=17&testkey=4399NoneDeviceId")
   await get("yuyue2020/m","checkqq&comm_id=93&isyuyue=0&qq=2548797991&qqt=2548797991&testkey=4399NoneDeviceId")
   await get("yuyue2020/m","submitqq&comm_id=93&isyuyue=0&qq=2548797991&testkey=4399NoneDeviceId")
  await get("yuyue2020/m","checktel&comm_id=93&isyuyue=0&tel=15514122927&tel2=15514122927&testkey=4399NoneDeviceId")
   await get("yuyue2020/m","submittel&comm_id=93&isyuyue=0&tel=15514122927&testkey=4399NoneDeviceId")
   await get("yuyue2020/m","checkzhanghao&comm_id=93&isyuyue=0&tel=15514122927&name=王洋洋&address=天津市西青区宾水西道天津理工大学&qq=2548797991&testkey=4399NoneDeviceId")
   await get("yuyue2020/m","submitzhanghao&comm_id=93&isyuyue=0&tel=15514122927&name=王洋洋&address=天津市西青区宾水西道天津理工大学&qq=2548797991&testkey=4399NoneDeviceId")

}
async function sw4(id){
   pri2 = `\n[预约活动id${id}]`
   for (i = 0; i < 2; i++) {
    await get("yuyue2020/m",`checkfx&comm_id=${id}&isyuyue=0&isfx=1&testkey=4399NoneDeviceId`)
    await get("yuyue2020/m",`invite&comm_id=${id}&isyuyue=0&testkey=4399NoneDeviceId`)
    await get("yuyue2020/m",`playgame&comm_id=${id}&isyuyue=0&testkey=4399NoneDeviceId`)
    
     let res = await get("yuyue2020/m",`choujiang&comm_id=${id}&isyuyue=0&isdown=1&isdownonly=1&testkey=4399NoneDeviceId`)
    if(res.prize){
    pri2 +=res.prize+"-"
    }else{
     pri2 +="---" 
    }
      //await sleep(1000)
 }
  console.log(pri2)
}

async function sw2(id){
/*
   await get("2021wxsh",`BandLxfs&mode=1&tel=&name=王洋洋&address=天津市西青区天津理工大学&qq=${id}`)
  await get("2021wxsh",`BandLxfs&mode=2&tel=&name=王洋洋&address=天津市西青区天津理工大学&qq=${id}`)

  await get("bangding",`submitqq&t=0&qq1=${id}&qq2=${id}`)
  await get("2021slm/m","sure_ty_lxfs&sid=1")

    await get("wzry2021", `BandQQ&mode=1&bqq=${id}`)
     await get("wzry2021", `BandQQ&mode=2&bqq=${id}`)


 for (i of [1,3,4,5,6]){
  await get("lottery2/m",`checkqq&comm_id=${i}&isyuyue=0&qq=${id}&qqt=${id}`)
   await get("lottery2/m",`submitqq&comm_id=${i}&isyuyue=0&qq=${id}`)
   }
   */
   await get("lottery2/m",`checkqq&comm_id=7&isyuyue=0&qq=${id}&qqt=${id}`)
   await get("lottery2/m",`submitqq&comm_id=7&isyuyue=0&qq=${id}`)

   /*
  await get("bangding",`submitqq&t=0&qq1=${id}&qq2=${id}`)
  await get("2021slm/m","sure_ty_lxfs&sid=1")
 /* await get("zhuli","mycode&comm_id=42")
    await get("zhuli","mycode&comm_id=43")
  await get("yuyue2020/m",`lianxifangshi&comm_id=${id}&isyuyue=1&testkey=4399NoneDeviceId`)
   await get("lottery/m",`checkqq&comm_id=12&isyuyue=0&qq=${id}&qqt=${id}`)
   await get("lottery/m",`submitqq&comm_id=12&isyuyue=0&qq=${id}`)
  await get("lottery/m","login&comm_id=12&isyuyue=0")

 //  await get("yuyue2020/m",`mycode&comm_id=${id}&isyuyue=1&testkey=4399NoneDeviceId`)

   await get("yuyue2020/m","checktel&comm_id=111&isyuyue=0&tel=18822707053&tel2=18822707053&testkey=4399NoneDeviceId")
   await get("yuyue2020/m","submittel&comm_id=111&isyuyue=0&tel=18822707053&testkey=4399NoneDeviceId")
   await get("yuyue2020/m","checkzhanghao&comm_id=111&isyuyue=0&tel=18822707053&name=王洋洋&address=河南省南阳市内乡县桃溪镇庙港邮政&qq=1517607179&testkey=4399NoneDeviceId")
   await get("yuyue2020/m","submitzhanghao&comm_id=111&isyuyue=0&tel=18822707053&name=王洋洋&address=河南省南阳市内乡县桃溪镇庙港邮政&qq=1517607179&testkey=4399NoneDeviceId")
   await get("yuyue2020/m","lianxifangshi&comm_id=111&isyuyue=0&testkey=4399NoneDeviceId")
*/
/*
   for (i of [119]){
     await get("yuyue2020/m",`checkqq&comm_id=${i}&isyuyue=0&qq=${id}&qqt=${id}&testkey=4399NoneDeviceId`)
     await get("yuyue2020/m",`submitqq&comm_id=${i}&isyuyue=0&qq=${id}&testkey=4399NoneDeviceId`)
 }
 */
}
async function ss(id){
  await get("yuyue2020/m",`mycode&comm_id=${id}&isyuyue=0&testkey=4399NoneDeviceId`)
/*
  aid ="2021summer/m"
   //await get(aid,"zsCode&shareCode=fc90210d7cbb2a53")

  for (a = 1; a < 9; a++) {
     await get(aid,`showzs&cid=${a}`)
     await get(aid,`surezs&chose_hz_cid=${a}`)
  }
 // await get(aid,"zsCode&shareCode=63acc3f153a6e8b1")
  // await get(aid,"GetFuliMa&ma=no_miling")
 /*  await get(aid, "lingquinvite")
    await get(aid, "xuyuan&resure=1")
    await get(aid,"showzs&cid=1")
   await get("2021summer/m","playgame")
   await get("2021summer/m","lingqushiwan")
 //await get("yuyue2020/m",`mycode&comm_id=${id}&isyuyue=0&testkey=4399NoneDeviceId`)
 //await get("yuyue2020/m","lianxifangshi&comm_id=111:&isyuyue=0&testkey=4399NoneDeviceId")
  // await get("yuyue2020/m","checktel&comm_id=107&isyuyue=0&tel=18822707053&tel2=18822707053&testkey=4399NoneDeviceId")
//   await get("yuyue2020/m","submittel&comm_id=107&isyuyue=0&tel=18822707053&testkey=4399NoneDeviceId")
 //  await get("yuyue2020/m","checkzhanghao&comm_id=107&isyuyue=0&tel=18822707053&name=王洋洋&address=河南省南阳市内乡县桃溪镇庙港邮政&qq=2746130558&testkey=4399NoneDeviceId")
 //  await get("yuyue2020/m","submitzhanghao&comm_id=107&isyuyue=0&tel=18822707053&name=王洋洋&address=河南省南阳市内乡县桃溪镇庙港邮政&qq=2746130558&testkey=4399NoneDeviceId")

   //await get("lottery/m","YcxAppJump&comm_id=12&isyuyue=0&id=1")
//  await get("lottery/m","YcxAppLing&comm_id=12&isyuyue=0&id=1")
*/
   }



async function kbzl(){
    a ="xsrw"
    /*
    await get(a, "FlyPlayHomeDialog&id=13")
    await sleep(1000)
    await get(a, "FlyPlayHome&id=13")
    await get(a, "FlyPlayHomeLing&id=13")
    */
    await get(a, "FlyGameCateDialog&id=10")
    await sleep(1000)
    await get(a, "FlyGameCate&id=10")
    await get(a, "FlyGameCateLing&id=10")
    //await get(a, "CloseZyw")
    /*
    await get(a, "LookVideoDialog&id=1")
    await sleep(6000)
    await get(a, "LookVideo&id=1")
    await sleep(8000)
    await get(a, "LookVideoLing&id=1")
    await get(a, "WsgrzlLing&id=2")
    await get(a, "FlyStoreDialog&id=4")
    await sleep(6000)
    await get(a, "FlyStore&id=4")
    await get(a, "FlyStoreLing&id=4")
    await get(a, "FlyDailiGameDialog&id=9")
    await sleep(6000)
    await get(a, "FlyDailiGame&id=9")
    await get(a, "FlyDailiGameLing&id=9")
    await get(a, "FlyQdbDialog&id=5")
    await sleep(6000)
    await get(a, "FlyQdb&id=5")
    await get(a, "FlyQdbLing&id=5")
    await get(a, "FlyBylDialog&id=6")
    await sleep(6000)
    await get(a, "FlyByl&id=6")
    await get(a, "FlyBylLing&id=6")
    await get(a, "FlyLyksLing&id=7")
    await get(a, "BandWeixinLing&id=8")
    await get(a, "CloseZyw")
    await get(a, "SuperBaomihuaLing")
    */
}
//sw2(2746130558)
//sw2(703820493)
//sw2(3245289855)
//sw2(2548797991)
//sw2(1517607179)
//sw2(3627240239)
//sw2(2456295372)
//sw3(120)
//
//ss(17)
//sw3(115)

//sw4(124)
//sw3(133)
//sw2(1497916660)

//快爆粉丝福利80080
async function lottery(a, b, c,d) {
    prize=""
    //result =""
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
       pri+=res.msg
       break
    }else{
     pri +="无-" 
    }
 }
 console.log(pri)
}



async function ys() {
    aid = "2021ys/m"
    await get(aid, "login")
    await get(aid, "gofuli&resure=1")
    await get(aid, "share")
    await get(aid, "gozhongcao&resure=1")
    await get(aid, "xinshou&resure=1")
    await get(aid, "guangczzl")
    await get(aid, "guang&resure=1")
    await get(aid, "playgame")
    await get(aid, "lingqushiwan")
    /*
    let res = await $http.get(
        "https://huodong3.3839.com/n/hykb/2021slm/m/index.php"
    );
    str = res.data.match(/prize1_lingqu_(\d+)/g);
    for (id of str) {
        await get(aid, "playgame&gameid=" + id.split("_")[2])
    }
    await sleep(6000)
    for (id of str) {
        await get(aid, "lingqushiwan&gameid=" + id.split("_")[2])
    }
    */
    let info = await get(aid, "login")
    if (info.key == "ok") {
        msg = `\n【史莱姆】：魔法值[${info.config.tizhong}]  露珠[${info.config.maoqiu}]`
        result += msg
        console.log(msg)
    }
}
async function cfm(){
  prize="\n穿越$火线: "
  a= "cfm/m"
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
         }else{
           prize +="-无-" //未中奖
        }
   }
   result += prize
   console.log(result)
}


async function smjk() {
    aid = "2021jika/m"
    await get(aid, "login", true)
    await get(aid, "giftcode&shareCode=eda2584d97466")
    await get(aid, "playgame")
    await get(aid, "lingqushiwan")
    await get(aid, "lingquinvite")
    await get(aid, "xuyuan&resure=1")
    await get(aid, "share")
    await get(aid, "lingqushare")
    await get(aid, "qiandao")
    // await get(aid,"GetFuliMa&ma=no_miling")
    for (a = 1; a < 4; a++) {
        await get(aid, "jumprw&rwid=" + a)
        let cdata = await get(aid, "lingqujumprw&rwid=" + a, true)
        if (cdata.is_huizhang == 1) {
            console.log(`恭喜您获得卡牌 ${cdata.hz_name}`)
        } else if (cdata.is_huizhang == 0) {
            console.log(`恭喜您获得绯樱碎片 ${cdata.wzsp_num} 共${cdata.all_wzsp}`)
        } else {
            console.log(cdata.msg)
        }
    }
    let loginres = await get(aid, "login", true)
    config = loginres.config
    info =`\n【使命集卡】 碎片${config.wzsp_nums} 年${config.cid1}球${config.cid2}典${config.cid3}全${config.cid4}周${config.cid5}盛${config.cid6}两${config.cid7}庆${config.cid8}`
    result += info
    console.log(info)
}


async function jika(){
  aid ="2021jika/m"
   await get(aid,"zsCode&shareCode=54ca09290643ae82")
   kaa =""
  for (a = 1; a < 9; a++) {
     let ka = await get(aid,`showzs&cid=${a}`)
     if (ka.cdkey) {
         kaa += ka.cdkey+ "\n"
      }
     await get(aid,`surezs&chose_hz_cid=${a}`)
  }
  console.log(kaa)
}

//sw3(144)
//get("2021jika/m", "lingquinvite")

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


//lottery("lottery", 30, [1],"\n宝石[79979]")//79979

//sw3(146)
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
            }else if (res.msg){
              prize +=res.msg
              break
          }else{
           prize +="-无-" //未中奖
            }
           
        }
    }
    console.log(prize)
}
//jhy(47)
//sw4(146)
//dh()
async function glist(id) {
    for (typeid of ["qq", "wx", "weibo"]) {
        await get("glist", `share&typeid=${typeid}&comm_id=${id}`)
        await sleep(1000)
    }
    await get("glist", `receiveBmh&comm_id=${id}`)

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
     await get(aid, "lingqushiwan&gameid=" + str1[0].split("wan")[1])
     await get(aid, "lingqushiwan&gameid=" + str1[4].split("wan")[1])
     await get(aid, "lingqushiwan&gameid=" + str1[5].split("wan")[1])
    let info = await get(aid, "login")
    if (info.key == "ok") {
        msg = `\n【庙会】：福气[${info.config.tizhong}]  爆珠[${info.config.maoqiu}]`
        result += msg
        console.log(result)
    }
}
async function tr(){
for (i = 0; i < 5; i++) {
       await get("yuyue2020/m","invite&comm_id=154&isyuyue=0&isfx=1&testkey=4399NoneDeviceId")
      let res= await get("yuyue2020/m","choujiang&comm_id=154&isyuyue=0&isdown=0&isdownonly=0&testkey=4399NoneDeviceId")
    
          if(res.prize){
            result += res.prize+"-"
        }else{
           result +="-无-" //未中奖
        }
        console.log(result)
        
    }
  }
//xinnian()
//kbzl()
//jhy(50)
//jhy(49)
//"lottery("lottery2", 7, [1, 2, 3, 4, 5, 6],"\n[618618]") 
//lottery("lottery2", 8, [1, 2, 3, 4, 5, 6,7,8],"\n[120120]") 
//lottery("lottery2", 9, [1, 2, 3, 4],"\n[130130]") 
 
//tr()

//sw3(142)
async function q(){
  await lottery("lottery", 43, [1, 2, 3, 4,5,6,7],"\n[220318]")
    //await lottery("lottery", 42, [1, 3, 4,2],"\n[1212999]")
    await lottery("lottery", 44, [1, 2, 3, 4,5,6,7],"\n[856888]")
    await lottery("lottery", 45, [1, 2, 3, 4,5,6,7],"\n[221011]")
}

async function zn5() {
      console.log('\n--------5周年活动开始--------\n')
      aid = '5zhounian/m'
      await get(aid, 'login')
      await get(aid, 'share')
      for (i = 5; i < 14; i++) {
        await get(aid, 'DailyAppJump&id=' + i)
        await get(aid, 'DailyAppLing&id=' + i)
      }

      pn = ''
      info1 = await get(aid, 'login',true)
      if (info1.key == 'ok') {
        mh = info1.config.mh
        console.log('可抽取盲盒次数：' + mh)
        //开盲盒
        for (k = 0; k < mh; k++) {
          let cq = await get(aid, 'chouqu')
          if (cq.key == 'ok') pn += cq.prizename + '  '
        }
        //勋章
        if (info1.config.liuyanling != 1) {
          await get(aid, 'chaundi&liuyan=五周年快乐快乐周年快乐(ง+•̀_•́)ง&resource=0')
          await get(aid, 'lingquliuyan')
        }
      }
      let info = await get(aid, 'login',true)
      //查询
      if (info.key == 'ok') {
        msg = `5周年：卡片 ${info.config.mykpnum} 奖励 ${pn}  \n`
        result += msg
        console.log(msg)
      }
      console.log('\n--------5周年活动结束--------\n')
}
lottery("lottery", 42, [1, 3, 4,2,5, 6],"\n[1212999]")
