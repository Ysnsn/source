    //await lottery("lottery2", 13, [1, 2, 3, 4,5],"\n[730730]") 
  //await lottery("lottery2", 11, [1, 2, 3, 4],"\n[155155]") 
   //await lottery("lottery2", 8, [1, 2, 3, 4, 5, 6,7,8],"\n[120120]") 
   //await lottery("lottery2", 9, [1, 2, 3, 4],"\n[130130]") 
   
    //await lottery("lottery2", 3, [1, 2, 3, 4, 5, 6, 7, 8, 9],"\n[41616]") 
   // await lottery("lottery2", 5, [1, 2, 3, 4, 5, 6, 7],"\n[037037]") 
    //await lottery("lottery2", 6, [1, 2, 3, 4, 5, 6,8],"\n[72020]") 
    
    //await lottery("lottery2", 1, [1, 2, 3, 4, 5, 6, 7, 8, 9],"\n[331330]") 
    await lottery("lottery", 5, [1, 2, 3, 4, 6, 7,8,10,9],"\n王牌勋章[630630]") //630630
    await lottery("lottery", 4, [1, 2, 3, 4, 5, 6, 8,14,12],"\n补给箱[25525]") //25525
    await lottery("lottery", 3, [1, 2, 3, 6, 7, 8, 14,12],"\n宝石[79979]")//79979
    
    
//原神2.7 2022.05.31
async function un(){
 prize= "\n原神: "
 await get("universal","login&comm_id=6")
 await get("universal","WeChatValidate&comm_id=6")
 await get("universal","signIn&comm_id=6")
// await get("universal","signPost&comm_id=6&id=47")
 await get("universal","taskGamePlayTime&comm_id=6&gameid=106235")
 await get("universal","getTaskPrize&comm_id=6&id=26")
 for (id of [27,28,29,30] ) {
  await get("universal",`completeTask&comm_id=6&id=${id}`)
  await get("universal",`getTaskPrize&comm_id=6&id=${id}`)
 }
 await get("universal","share&comm_id=6&share_type=task&task_id=30")
 await get("universal","getTaskPrize&comm_id=6&id=30")
  for (i = 0; i < 5; i++) {
  let inf = await get("universal","getLuckyPrize&comm_id=6")
  if (inf.key == 'ok') {
        prize += inf.name+ '-'
   }else{
    prize +="-无-"
    console.log(prize)
    break
    }
  }
  result += prize
  console.log(prize)
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
   console.log(resu
   
   
async function xpj(){
  msg = ""
  s= "2022xinpinjie"
  await get(s, "login")
  await get(s, "addjifen&id=2&isdown=0")
  await get(s, "checkfx")
  await get(s, "addjifen&id=3&isdown=0")
  await get(s, "shiwan&gid=115866")
  await get(s, "shiwan&gid=139010")
  
  await get(s, "addjifen&id=4&isdown=1")
  await get(s, "addjifen&id=15&isdown=1")
  await get(s, "choujiang")
  let inf = await get(s, 'login',true)
  if (inf.key == 'ok') {
        msg = `\n新品会积分： [${inf.config.syjifen}]`
        result += msg
        console.log(msg)
 }
}

async function yyh(){
  msg = ""
  s= "2022yyh/m"
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
        "https://huodong3.3839.com/n/hykb/2022yyh/m/index.php"
    );
    str1 = res.data.match(/green shiwan(\d+)/g);
   // str = res.data.match(/green yygameid-(\d+)/g);
    for (id of str1) {
        await get(s, "playgame&gameid=" + id.split("wan")[1])
    }
    await sleep(1000)
    /*
    for (id of str) {
        //await get(aid, "lingqushiwan&gameid=" + id.split("_")[2])
        await get(s, "lingquyuyue&gameid=" + id.split("-")[1])
    }*/
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
        msg = `\n夏日游园会： [${inf.config.maoqiu}]`
        result += msg
        console.log(msg)
 }
 console.log('\n--------航海结束-------\n')
 
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
    for (i of [2,3,4]){
          await get(aid, "lingqushiwan&gameid=" + str1[i].split("wan")[1])
        }
    let info = await get(aid, "login")
    if (info.key == "ok") {
        msg = `\n【庙会】：福气[${info.config.tizhong}]  爆珠[${info.config.maoqiu}]`
        result += msg
        console.log(msg)
    }
}


async function zn5() {
      console.log('\n--------5周年活动开始--------\n')
      aid = '5zhounian/m'
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
        msg = `\n5周年：卡片 ${info.config.mykpnum} 奖励 ${pn}`
        result += msg
        console.log(msg)
      }
      console.log('\n--------5周年活动结束--------\n')
}