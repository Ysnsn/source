//快爆之旅
async function kbzl(){
    a ="xsrw"
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
    await get(a, "FlyGameCateDialog&id=10")
    await sleep(6000)
    await get(a, "FlyGameCate&id=10")
    await get(a, "FlyGameCateLing&id=10")
    
    await get(a, "FlyBylDialog&id=6")
    await sleep(6000)
    await get(a, "FlyByl&id=6")
    await get(a, "FlyBylLing&id=6")
    await get(a, "FlyLyksLing&id=7")
    await get(a, "BandWeixinLing&id=8")
    await get(a, "CloseZyw")
    await get(a, "SuperBaomihuaLing")
}

//
async function zhuli() {
    await get("2021zhuli", "login")
    for (i of new Array(5)) {
        await get("2021zhuli", "share")
    } //分享
    for (i of [1, 2, 3, 4, 5]) {
        await get("2021zhuli", `checklingqu&num=${i}`)
        await get("2021zhuli", `lingqu&num=${i}`)
    }
    await get("friend", "LingXinrenFuli")
    await get("yearend", "login")
    await get("yearend", "send&content=新年快乐&status=0")
}



//和平精英点卷(结束)
async function dj() {
    await get("yyzl/m","giftCode&comm_id=17&shareCode=794d541941e49&isyuyue=0&is_down=1")
    await get("yyzl/m","giftCode&comm_id=17&shareCode=0a3d5e2bc45b9&isyuyue=0&is_down=1")
    await get("yyzl/m","chouqu&comm_id=17&isyuyue=0&is_down=1")
} 

 
//游戏单  4.8
async function glist() {
    for (typeid of ["qq", "wx", "weibo"]) {
        await get("glist", `share&typeid=${typeid}&comm_id=1`)
        await sleep(1000)
    }
    await get("glist", "receiveBmh&comm_id=1")

}

async function yym(){
  await get("2021wuyi","xinshou&resure=1")
  await get("2021wuyi","gozhongcao&resure=1")
 await get("2021wuyi","lingqushare&resure=1")
 await get("2021wuyi","gofuli&resure=1")
  await get("2021wuyi","playgame&gameid=92547")
  await get("2021wuyi","lingqushiwan&gameid=92547")
  
}

//云养猫 -5-1 搜索  20210501
async function cat() {
    aid = "2021wuyi/m"
    await get(aid, "login")
    await get(aid, "gofuli&resure=1")
    await get(aid, "share")
    await get(aid, "gozhongcao&resure=1")
    await get(aid, "xinshou&resure=1")
    await get(aid, "guangczzl")
    await get(aid,"guang&resure=1")
    let res = await $http.get(
        "https://huodong3.3839.com/n/hykb/2021wuyi/m/index.php"
    );
    str = res.data.match(/prize1_lingqu_(\d+)/g);
    for (id of str) {
        await get(aid, "playgame&gameid=" + id.split("_")[2])
    }
    await sleep(60000)
    for (id of str) {
        await get(aid, "lingqushiwan&gameid=" + id.split("_")[2])
    }
    let info = await get(aid, "login")
    if (info.key == "ok") {
        msg = `\n【云养猫】：体重[${info.config.tizhong}]  毛球[${info.config.maoqiu}]`
        result += msg
        console.log(msg)
    }
}

async function btn(a,b){
 let res = await $http.get(
        `https://huodong3.3839.com/n/hykb/${a}/m/?comm_id=${b}`
    );
    str=res.data.match(/daily_btn_(\d+)/g);
    for (id of str) {
      id = id.split("_")[2]
      await lottery2(a,b,id)
    }
}
//获取任务id
async function lottery(a,b,c,d){
let res = await $http.get(
       `https://huodong3.3839.com/n/hykb/${a}/m/?comm_id=${b}`
   );
   str=res.data.match(/daily_btn_(\d+)/g);
 await lottery2(a,b,str,d)
}

async function other() {
    console.log("粉丝福利任务开始,记得去app中首页分别搜索80080 25525 630630 79979进行qq号绑定哦！！")
    await lottery2("lottery2", 2, [1, 2, 3, 6, 7, 8, 9, 10,11,12]) //80080
    result +="\n(无兑换)【80080】"+await dao(2)
    await lottery2("lottery", 5, [1, 2, 3, 4, 6, 7,8,10,9]) //630630
    result +="\n王牌勋章【630630】"+await dao(5)
    await lottery2("lottery", 4, [1, 2, 4, 5, 6, 8,14,12]) //25525
    result +="\n补给箱【25525】"+await dao(4)
    await lottery2("lottery", 3, [1, 2, 3, 6, 7, 8, 14,12])//79979
    result +="\n宝石【79979】"+await dao(3)
    await lottery2("lottery", 10,[1,2,3,4,5,6,7])
    result +="\n洞天百宝【123444】"+await dao(10)
    await lottery2("lottery",11, [2,3,4,5,6,7], "\n玉葫芦【669669】")
   await lottery2("lottery", 10,[1,2,3,4,5,6,7,9],"\n洞天百宝【123444】")

}
//7.31史莱姆
async function slm() {
    aid = "2021slm/m"
    await get(aid, "login")
    await get(aid, "gofuli&resure=1")
    await get(aid, "share")
    await get(aid, "gozhongcao&resure=1")
    await get(aid, "xinshou&resure=1")
    await get(aid, "guangczzl")
    await get(aid,"guang&resure=1")
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
    let info = await get(aid, "login")
    if (info.key == "ok") {
        msg = `\n【史莱姆】：魔法值[${info.config.tizhong}]  露珠[${info.config.maoqiu}]`
        result += msg
        console.log(msg)
    }
}

  /*
  for (i of [1,2,3,4,5,6,7,8]){
   await get("2021summer/m",`hzjx&cid=${i}`)
  }
  */
    //原神集卡
async function ysjk() {
    aid = "2021summer/m"
    await get(aid, "giftcode&shareCode=0a3d5e2bc45b9")
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
    info =`\n【原神集卡】 绯樱碎片${config.wzsp_nums} 神${config.cid1}泡${config.cid2}鸣${config.cid3}动${config.cid4}不${config.cid5}灭${config.cid6}影${config.cid7}断${config.cid8}`
    result += info
}

async function wxsh(){
  a= "2021wxsh"
  await get(a,"login")
  await get(a,"check")
  await get(a,"dayshare")
  await get(a,"DayLingShare")
  await get(a,"DayGoGG")
  await get(a,"DayLingGG")
  await get(a,"DailyGamePlay")
  await get(a,"DayLingGamedown")
  await get(a,"DayGoFuli&mode=1")
  await get(a,"DayGoFuli&mode=2")
  await get(a,"Zhuli&invitecode=d23g629q7x3")
  await get(a,"DayLingInvite")
  await get(a,"lingZhuliPrize")
  let info = await get(a,"login")
  msg ="\n妄想山海共有拼图: " + info.config.somethingNum +"张"
  console.log(msg)
  result += msg
}

async function wzry(){
  prize= ""
  a= "wzry2021"
  await get(a,"login")
  await get(a,"check")
  await get(a,"dayshare")
  await get(a,"DayLingShare")
  //await get(a,"Zhuli&invitecode=esbc553hpvj")
  await get(a,"DayLingInvite")
  await get(a,"DailyGamePlay")
  await get(a,"DayLingGamedown")
  for (i=1; i<6; i++){
    let res =await get(a,`ChouJiang&tag=${i}`)
    if(res.title){
            prize +=res.title+""
      }else{
           prize +="" //未中奖
    }
  }
  let info=await get(a,"login")
  msg = "\n王者探索值: "+info.config.score+"奖励:" +prize
  console.log(msg)
  result +=msg
  
}

async function cfm(){
  prize="\n穿越火线: "
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

def ling():
  for i in [3,4] :
   get("lottery/m",f"ac=YcxAppJump&comm_id={i}&isyuyue=0&id=1")
   get("lottery/m",f"ac=YcxAppLing&comm_id={i}&isyuyue=0&id=1")
   get("lottery/m",f"ac=YcxBangWXLing&comm_id={i}&isyuyue=0&id=2")
  get("lottery/m","ac=YcxAppJump&comm_id=5&isyuyue=0&id=2")
  get("lottery/m","ac=YcxAppLing&comm_id=5&isyuyue=0&id=2")
  get("lottery/m","ac=YcxBangWXLing&comm_id=5&isyuyue=0&id=3")
  for id in [1]:
   get("lottery2/m",f"ac=YcxLiYiLing&comm_id={id}&isyuyue=0&id=1")
   get("lottery2/m",f"ac=YcxAppJump&comm_id={id}&isyuyue=0&id=2")
   get("lottery2/m",f"ac=YcxAppLing&comm_id={id}&isyuyue=0&id=2")
   get("lottery2/m",f"ac=YcxBangWXLing&comm_id={id}&isyuyue=0&id=2")
  for id in [3,5,6]:
   get("lottery2/m",f"ac=YcxLiYiLing&comm_id={id}&isyuyue=0&id=1")
   get("lottery2/m",f"ac=YcxAppJump&comm_id={id}&isyuyue=0&id=2")
   get("lottery2/m",f"a

//原神20210928
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
        msg = `\n【原神】：魔法值[${info.config.tizhong}]  魔法值[${info.config.maoqiu}]`
        result += msg
        console.log(msg)
    }
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
}

async function shujia(){
  msg = ""
  s= "2022shujia/m"
  await get(s, "login")
  await get(s, "gofuli&resure=1")
  await get(s, "lingqushare&resure=0")
  await get(s, "share")
  await get(s, "gozhongcao&resure=1")
  await get(s, "xinshou&resure=1")
  await get("2022shujia/m", "guang&resure=0")
  await get("2022shujia/m", "guangczzl")
  await get("2022shujia/m", "guang&resure=1")
  await get(s,"lingqulicheng&i=1")
  await get(s,"lingqulicheng&i=2")
  await get(s,"lingqulicheng&i=3")
  let res = await $http.get(
        "https://huodong3.3839.com/n/hykb/2022shujia/m/index.php"
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
        msg = `\n夏日航海 水晶： [${inf.config.maoqiu}]`
        result += msg
        console.log(msg)
 }
 console.log('\n--------航海结束-------\n')
 
}
