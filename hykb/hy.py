# -*- coding: utf8 -*-
# python >=3.8
import requests,json,time,os,yaml,sys
i = sys.argv[1]

file = open("config.yml", 'r', encoding="utf-8")
file_data = file.read()
file.close()
data = yaml.safe_load(file_data)
print("账号: ", i ," 开始签到")
scookie = data['hykb'+i]['scookie']

#msg= ""

def get(a,b):
   
   url= f"https://huodong3.3839.com/n/hykb/{a}/ajax.php"
   headers={
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 UD Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.101 Mobile Safari/537.36Androidkb/1.5.5.902(android;MI 8 UD;10;1080x2029;WIFI);@4399_sykb_android_activity@"
          }
   b = b.replace("&","=")
   b = b.split("=")
   data ={}
   data1 ={
      "r": f"0.{int(time.time() * 100000)}",
      "scookie": scookie
   }
   for i in range(len(b)//2) :
      data[ b[i*2] ] = b[i*2+1]
   data.update(data1)
   re=requests.post(url ,headers=headers, data=data)
   if re.status_code ==200 :
    print(re.json())
    return re.json()
   else :
    print ("这个账号失效了🌚，快去更新吧")



#get("grow","ac=StartProduce&preNum=250&resure=1")


def xr():
 info = get("friend","ac=xinrenlogin")
 print(info["config"]["name"] +" 新人福利截止时间: "+info["config"]["zhuce_time"] )

#get("yuyue2020/m","ac=mycode&comm_id=107&isyuyue=0")

#get("wzry2021","ac=MyPrizes")
def ta():
 for id in [14]:
   get("lottery/m",f"ac=YcxLiYiLing&comm_id={id}&isyuyue=0&id=1")
   get("lottery/m",f"ac=YcxAppJump&comm_id={id}&isyuyue=0&id=2")
   get("lottery/m",f"ac=YcxAppLing&comm_id={id}&isyuyue=0&id=2")
   
'''
get("grow","ac=DailyGameLing&id=445")
get("yuyue2020/m","ac=mycode&comm_id=115&isyuyue=0&testkey=4399NoneDeviceId")
get("yuyue2020/m","ac=lianxifangshi&comm_id=115&isyuyue=0&testkey=4399NoneDeviceId")
'''
def zp():
   for i in [132] :
     print (f"转盘活动id{i}\n\n")
     get("yuyue2020/m",f"ac=mycode&comm_id={i}&isyuyue=0&testkey=4399NoneDeviceId")
     get("yuyue2020/m",f"ac=lianxifangshi&comm_id={i}&isyuyue=0&testkey=4399NoneDeviceId")


#get("2021summer/m","ac=xuyuan&resure=1")
#get("grow","ac=GrowLog&page=0")
def glist(id) :
    for typeid in ["qq", "wx", "weibo"] :
        get("glist", f"ac=share&typeid={typeid}&comm_id={id}")
        time.sleep(2)
    get("glist", f"ac=receiveBmh&comm_id={id}")

'''
for i in range(3):
  get("kbshare2","ac=share&t=2021-08-5+20:07:10")

get("kbshare2","ac=sureReceive&t=2021-08-7+11:00:38")
get("kbshare2","ac=receive&t=2021-08-7+11:00:38")
get("kbshare2","ac=receiveJump&type=1&t=2021-08-7+11:00:39")
get("kbshare2","ac=receiveJump&type=2&t=2021-08-7+11:00:40")

get("qingzhu/m","ac=checkfx&comm_id=15")
get("qingzhu/m","ac=invite&comm_id=15")
get("qingzhu/m","ac=lingqu&comm_id=15")

get("2021wxsh","ac=Duihuan&id=10&resure=2")
get("2021wxsh","ac=Duihuan&id=9&resure=2")

for i in [1,2,3,4,5,6,7,8] :
   get("2021summer/m",f"ac=hzjx&cid={i}")

get("2021wxsh","ac=Duihuan&id=10&resure=2")
get("2021wxsh","ac=Duihuan&id=9&resure=2")
'''
#while True :
##get("yyzl4/m","ac=giftCode&comm_id=9&shareCode=9b030c29062a5&isyuyue=0&is_down=1")
#for i in range(7) :
# i=i+1
 #get("yyzl4/m",f"ac=chouqu&dhid={i}&comm_id=9&is_down=1&isyuyue=0")
#get("yyzl4/m","ac=mycode&comm_id=9&isyuyue=0")
#res =get("yyzl4/m","ac=login&comm_id=9&isyuyue=0")
#print (res['config']['invite_code'])
#get("bmhstore2", "ac=mylog")   
#get("lottery/m","ac=YcxAppLing&comm_id=16&isyuyue=0&id=1")
def ripe():
 get("grow", "ac=PlantRipe")
 get("grow", "ac=PlantSow")

#zp()
#get("2021hero","ac=ChouJiang&resure=2")

#get("lottery2/m","ac=mychouqu_list&comm_id=7&isyuyue=0")

#get("bmhstore2", "ac=viewDialog&goodsid=7938")  
#get("bmhstore2", "ac=mylog")  
#get("yuyue2020/m","ac=choujiang&comm_id=134&isyuyue=0&isdown=1&isdownonly=1&testkey=4399NoneDeviceId")
#get("lottery/m","ac=duihuanprize&dhid=4&comm_id=17&resure=1&isyuyue=0")
#get("lottery2/m", "ac=chouqu&comm_id=6&isyuyue=0")
#zp()
#get("grow","ac=StartProduce&preNum=50&resure=1")
#get("lottery/m","ac=duihuanprize&dhid=2&comm_id=16&resure=1&isyuyue=0")

def dh():
  for id in [34] :
   get("lottery/m",f"ac=duihuanprize&dhid=1&comm_id={id}&resure=1&isyuyue=0")
   get("lottery/m",f"ac=duihuanprize&dhid=2&comm_id={id}&resure=1&isyuyue=0")


# 特别任务一次
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
   get("lottery2/m",f"ac=YcxAppLing&comm_id={id}&isyuyue=0&id=2")
  dh()
   

#get("lottery2/m", "ac=chouqu&comm_id=5&isyuyue=0")
#
#xr()
def dati():
      res = get("grow", "ac=DailyDati&id=4")
      kw = input("输入答案: ")
      answer = res['option' + kw] #"下载后进不去游戏，不了解缘由，直接在评价区随手给1星" # "在评论中引战，与其他爆友吵架"
      get("grow", f"ac=DailyDatiAnswer&option={answer}&id=4")
      get("grow", "ac=DailyDati&id=4")


#ling()
#ripe()

#get("zhuli","ac=mycode&comm_id=50")
#get("yuyue2020/m","ac=mycode&comm_id=144&isyuyue=0&testkey=4399NoneDeviceId")
#get("cfm2/m", "ac=chouqu&comm_id=1&isyuyue=0")
def bang(qq,tel=18822707053):
  # get("2022shujia/m","ac=qq_new")
  get("bangding","ac=login")
  get("bangding",f"ac=submitqq&t=16&tid=0&hdid=0&qq1={qq}&qq2={qq}")
 # get("2022yyh/m","ac=refurbish_prize3")
 # get("2022yyh/m","ac=lianxifangshi")
  #
 #  get("zhuli",f"ac=submitzhanghao&comm_id=59&tel={tel}&name=王洋洋&address=天津市西青区天津理工大学&qq={qq}")
#   get("zhuli","ac=lianxifangshi&comm_id=59")
  
  # get("lottery/m",f"ac=submitzhanghao&comm_id=52&isyuyue=0&tel={tel}&name=王洋洋&address=天津市西青区天津理工大学&qq={qq}")

   #get("yuyue2020/m",f"ac=submitqq&comm_id=167&isyuyue=0&qq={qq}&testkey=4399NoneDeviceId")

  # get("lottery2/m",f"ac=submitqq&comm_id=8&qq={qq}&isyuyue=0")
   #get("lottery2/m",f"ac=submitqq&comm_id=7&qq={qq}&isyuyue=0")
 #  get("lottery2/m",f"ac=submitqq&comm_id=9&qq={qq}&isyuyue=0")
   
 #  get("bangding","ac=login")
   #get("bangding",f"ac=submitqq&t=7&tid=0&qq1={qq}&qq2={qq}")
  # get("bangding","ac=querenaddress&i=3&t=7&tid=0")
   #get("bangding","ac=postaddress&i=3&t=7&tid=0")
  # get("zhuli",f"ac=submitzhanghao&comm_id=50&tel={tel}&name=王洋洋&address=河南省南阳市内乡县桃溪镇庙港邮政&qq={qq}")
  # get("zhuli","ac=lianxifangshi&comm_id=50")

#  get("lottery/m",f"ac=submitzhanghao&comm_id=37&isyuyue=0&tel={tel}&name=王洋洋&address=河南省南阳市内乡县桃溪镇庙港邮政&qq={qq}")
#  get("lottery/m","ac=lianxifangshi&comm_id=37&isyuyue=0")
#bang(2746130558,18822707053)
#bang(703820493,15522865847)
#bang(3245289855,15514122927)
#bang(2548797991,15778893930)
#bang(3627240239,17303777296)
#bang(1517607179,15522865847)
#bang(1497   916660)
#get("2022xinnian/m","ac=lianxifangshi")
#get("zhuli","ac=mycode&comm_id=52")

#get("bmhstore2","ac=mylog")
#get("grow","ac=StartProduce&preNum=200&resure=1")
#get("yuyue2020/m","ac=lingqukamicj&comm_id=166&isyuyue=0&testkey=4399NoneDeviceId")

#get("zhuli", "ac=choujiang&isdown=1&comm_id=47")
'''
get("yearend2021","ac=login")
get("yearend2021","ac=send&content=虎年的思念扶摇直上九万里，把思念挂在天空最高的地方，时刻照耀着你，让每个角落都有我思念你的影子，时刻让你知道，我很想你，虎年大吉！&status=0")
get("2022sfshare","ac=login")
get("2022sfshare","ac=share")
get("2022sfshare","ac=checkComment")
get("2022sfshare","ac=postComment&content=虎年的思念扶摇直上九万里，把思念挂在天空最高的地方，时刻照耀着你，让每个角落都有我思念你的影子，时刻让你知道，我很想你，虎年大吉！")

get("lottery/m", "ac=DailyAppJump&comm_id=35&isyuyue=0&id=1")
get("lottery/m", "ac=DailyAppLing&comm_id=35&isyuyue=0&id=1")
'''
#dh()
def s() :
  #while True:
   get("2022shujia/m","ac=guang&resure=0")
   get("2022shujia/m", "ac=guangczzl")
   get("2022shujia/m","ac=guang&resure=1")
   print("\n\n")
   
  
#s()
#get("zqby_new","ac=start&comm_id=2")

#get("2022aqtwsf","ac=lingqu&isdown=1")

   
#get("2022xinnian/m","ac=duihuan&dhid=51&resure=1")
#get("lottery/m","ac=duihuanprize&dhid=2&comm_id=38&resure=1&isyuyue=0")
#get("lottery/m","ac=duihuanprize&dhid=1&comm_id=38&resure=1&isyuyue=0")
#get("2022sfshare","ac=openaward&pid=1")

#get("2022xinnian/m","ac=dhcjq&resure=1")
#get("zhuli","ac=lianxifangshi&comm_id=50")
#get("myprize","ac=login")
#get("lottery/m","ac=mycode&comm_id=39&isyuyue=0")
#get("yuyue2020/m","ac=mycode&comm_id=136&isyuyue=1&testkey=4399NoneDeviceId")
#get("yyzl4/m","ac=login&comm_id=15&isyuyue=0")
#get("yyzl4/m","ac=giftCode&comm_id=15&shareCode=da765de95024f&isyuyue=0")
#get("grow","ac=StartProduce&preNum=330&resure=1")

#get("yuyue2020/m","ac=mycode&comm_id=169&isyuyue=0&testkey=4399NoneDeviceId")
#get("yuyue2020/m","ac=lianxifangshi&comm_id=170&isyuyue=0&testkey=4399NoneDeviceId")

#get("yuyue2020/m","ac=lingqukamicj&comm_id=142&id=3&isyuyue=0&testkey=4399NoneDeviceId")

#get("lottery/m","ac=mycode&comm_id=55&isyuyue=0")
#get("lottery/m","ac=mycode&comm_id=47&isyuyue=0")
#get("5zhounian/m","ac=myprize")
#get("lottery/m","ac=duihuanprize&resure=1&dhid=3&comm_id=48&isyuyue=0")
#get("collage","ac=detaillogin&pid=223")
#get("collage","ac=OpenNewTuan&pid=223")
#get("collage","ac=JoinTuan&pid=223&tuanid=22364664530171539&resure=1")
#get("grow", "ac=GuanZhu&csid=8785")
#get("grow", "ac=GuanZhu&singleUid=66948830")

#get("grow", "ac=DailyChangshangGuanzhu&id=650")
#get("grow", "ac=DailyChangshangLing&id=650")
    
#get("lottery/m","ac=duihuanprize&resure=1&dhid=6&comm_id=65&isyuyue=0")
#get("lottery/m","ac=duihuanprize&resure=1&dhid=4&comm_id=67&isyuyue=0")
#get("lottery/m","ac=mycode&comm_id=52&isyuyue=0")

#get("zhuli","ac=mycode&comm_id=59")
#get("2022shujia/m","ac=mycode")
#get("2022shujia/m","ac=duihuan&dhid=56&resure=1")
#get("2022shujia/m","ac=duihuan&dhid=57&resure=1")
#get("2022ahphssf","ac=lingqu&isdown=1")
#get("summer_share","completeTask&id=1000")
#get("2022yyh/m","ac=duihuan&resure=1&dhid=10")
#get("2022yyh/m","ac=duihuan&resure=1&dhid=8")
#
#get("2022yyh/m", "ac=mycode")
#get("lotterysj/m","ac=mycode&comm_id=1")
#get("2022xinpinjie", "ac=shiwan&gid=145001")
#get("2022xinpinjie", "ac=addjifen&id=24&isdown=1")
#get("myprize","ac=login")
#get("tequan","ac=lingqufuli&code=9dba38d90b67c818")
#get("tequan","ac=lingqu&num=2")
get("universal","ac=getAllTasklist&comm_id=8")
#get("universal","ac=getDuihuanlist&comm_id=8")
