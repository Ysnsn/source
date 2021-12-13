from bs4 import BeautifulSoup
import requests,json,time,os,yaml,sys,re
i = sys.argv[1]

file = open("config.yml", 'r', encoding="utf-8")
file_data = file.read()
file.close()
data = yaml.safe_load(file_data)
scookie = data['hykb'+i]['scookie']

def getid():
  res= requests.get("https://huodong3.3839.com/n/hykb/qdjh/index.php").text
  soup =BeautifulSoup(res, 'lxml')

  info_list = soup.find_all(attrs={'class': 'blink'})
  print(soup.title.text)
  item = []
  for i in info_list :
    tits=i['onclick']
    tit = re.findall("每日签到领(.*?])", tits) #tit
    id = re.findall("hd_id=(\d+)", tits) #tit
    print(tit,           id,        i.text)
    if i.text== "参加":
       push={
        "id": id[0], 
        "title": tit[0]
       }
       item.append(push)
    else :
       print(id[0],  "结束")
  
  return item
  


def get(a,b):
   headers= {
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 UD Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.210 Mobile Safari/537.36Androidkb/1.5.5.704(android;MI 8 UD;10;1080x2029;WIFI);@4399_sykb_android_activity@"
   }
   data= {
        "ac": a, 
        "t": "2020-08-3+11%3A14%3A48", 
        "r": f"0.{int(time.time() * 100000)}", 
        "hd_id": b, 
        "hd_id2": b, 
        "scookie": scookie
   }
   res = requests.post(url="https://huodong3.3839.com/n/hykb/signcard/ajax.php", headers=headers, data=data).json()
   return res

def task() :
     items =getid()
     print(items)
     for i in range(len(items)) :
        id =items[i]["id"]
        tit = items[i]["title"]
        get("login", id)
        data = get("signToday", id)
        keys = data["key"]
        keys = str(keys)
        if keys == "-1007" :
            get("sharelimit", id) 
            print(f"{tit}  分享成功✅")
            #result += f"{tit}  分享成功✅\n"
            get("login", id)
            get("signToday", id)
        elif keys == "-1005" :
            print("体验游戏中,请一分钟后再刷新领取☑️")
            get("tiyan", id)
        elif keys == "-1002" :
            print(f"{tit}  今日已签☑️")
            #result += f"{tit}  今日已签☑️\n"
        elif keys == "200" :
            print(f"{tit} 签到成功✅ 已签到{data['signnum']}天")
            #result +=f"{tit} 签到成功✅ 已签到{data[signnum]}天\n"
        elif keys == "no_login" :
            print("⚠️⚠️scookie失效,请重新配置⚠️⚠️")
        else :
            print(data)


task( )