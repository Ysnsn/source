async function guoyu(){
    await task("观影国语记录", "\/api\/watchHistory\/add.action", {
        "duration": 1562,
        "sactionUuid": "ff808081790d553801795e6b8c552953",
        "time": 2892,
        "vodUuid": "ff8080817825bd3701783a09c7230a1e"
    })
    await task("上传观影时长", "\/missionApi\/action\/uploadAction", {
        "actionCode": "watch_vod",
        "params": "{\"duration\":32000,\"session_id\":\"4701617887966740\",\"vod_type\":0,\"vod_uuid\":\"ff8080817825bd3701783a09c7230a1e\"}"
       })
       await sleep(10000)
       await task("观影粤语记录", "\/api\/watchHistory\/add.action", {
        "duration": 1562,
        "sactionUuid": "ff808081790d553801795e65fb982945",
        "time": 2892,
        "vodUuid": "ff80808176ad70cc01771482f6a230ca"
    })
    await task("上传观影时长", "\/missionApi\/action\/uploadAction", {
        "actionCode": "watch_vod",
        "params": "{\"duration\":32000,\"session_id\":\"4701617887966740\",\"vod_type\":0,\"vod_uuid\":\"ff80808176ad70cc01771482f6a230ca\"}"
       })
       await sleep(10000)
      await task("分享剧集","\/api\/vod\/shareVod.action",{
       "isServiceShareNum": "1",
       "vodUuid": "ff8080817825bd3701783a09c7230a1e"
      })
     
   await task("分享剧集", "\/missionApi\/action\/uploadAction", {
    "actionCode": "share_vod_to_out",
    "params": "{\"vod_type\":0,\"vod_uuid\":\"ff8080817825bd3701783a09c7230a1e\"}"
  },)
  
        await task("发送影视弹幕", "\/api\/barrage\/addBarrage396.action", {
        "barrageUuid": "1",
        "content": "好看",
        "sactionUuid": "ff808081790d553801795e6b8c552953",
        "times": 8,
        "vodUuid": "ff8080817825bd3701783a09c7230a1e"
    }) 
    await task("发送影视弹幕", "\/api\/barrage\/addBarrage396.action", {
        "barrageUuid": "1",
        "content": "日常打卡",
        "sactionUuid": "ff808081790d553801795e6b8c552953",
        "times": 9,
        "vodUuid": "ff8080817825bd3701783a09c7230a1e"
    }) 
    await task("发送影视弹幕", "\/api\/barrage\/addBarrage396.action", {
        "barrageUuid": "1",
        "content": "好看的很",
        "sactionUuid": "ff808081790d553801795e6b8c552953",
        "times": 11,
        "vodUuid": "ff8080817825bd3701783a09c7230a1e"
    }) 
    
   // await task("一键领取奖励", "\/missionApi\/award\/acceptAll", {})

}



async function mmm(){

    await task("观影国语记录", "\/api\/watchHistory\/add.action", {
        "duration": 1562,
        "sactionUuid": "ff80808178c47cf70178f8fcc7ef1d29",
        "time": 2892,
        "vodUuid": "ff8080817825bd37017839bb80b009c7"
    })
    await task("上传观影时长", "\/missionApi\/action\/uploadAction", {
        "actionCode": "watch_vod",
        "params": "{\"duration\":32000,\"session_id\":\"4701617887966740\",\"vod_type\":0,\"vod_uuid\":\"ff8080817825bd37017839bb80b009c7\"}"
       })
   await sleep(10000)
   await task("观影粤语记录", "\/api\/watchHistory\/add.action", {
        "duration": 1562,
        "sactionUuid": "ff80808178c47cf70178f8da58d61d00",
        "time": 2892,
        "vodUuid": "ff8080817655969d017689db61e11f6d"
    })
    await task("上传观影时长", "\/missionApi\/action\/uploadAction", {
        "actionCode": "watch_vod",
        "params": "{\"session_id\":\"4701617887966740\",\"vod_type\":0,\"vod_uuid\":\"ff8080817655969d017689db61e11f6d\",\"duration\":32000}"
    })
    await sleep(10000)
    await task("分享","\/api\/vod\/shareVod.action",{
       "isServiceShareNum": "1",
       "vodUuid": "ff8080817825bd37017839bb80b009c7"
      })
      
   await task("分享帖子", "\/missionApi\/action\/uploadAction", {
    "actionCode": "share_post",
    "params": "{\"vodUuid\":\"ff8080817825bd37017839bb80b009c7\"}"
  },)

    //await task("一键领取奖励", "\/missionApi\/award\/acceptAll", {})

}

async function ad(){
 for (i = 0; i < 5; i++) {
   await task("广告奖励","\/missionApi\/action\/uploadAction",{
   "actionCode" : "watch_reward_ad",
   "params" : "{\"mission_uuid\":\"533\",\"topon_ad_seat_uuid\":\"b615ffa7ee9c30\",\"watch_status\":1}"
   })
   await task("广告奖励领取","\/missionApi\/award\/accept",{
   "missionUuid" : "533"
   })
 }
}
   
async function guoyu2(){
    await task("观影国语记录", "\/api\/watchHistory\/add.action", {
        "duration": 1562,
        "sactionUuid": "f885787c27e411eca22a9c7da384e5a3",
        "time": 2892,
        "vodUuid": "6dcb40017f674ef085cc9f8c57b089bd"
    })
    await task("上传观影时长", "\/missionApi\/action\/uploadAction", {
        "actionCode": "watch_vod",
        "params": "{\"duration\":32000,\"session_id\":\"4701617887966740\",\"vod_type\":0,\"vod_uuid\":\"6dcb40017f674ef085cc9f8c57b089bd\"}"
       })
}

async function other(){
   console.log("========开始考试=======")
   await guoyu()
   await sleep(5000)
   await mmm()
   await ad()
   await guoyu2()
   console.log("=========考试结束========")
}
