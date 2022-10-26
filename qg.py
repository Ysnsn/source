# -*- coding: utf8 -*-
# python >=3.8

import requests,json,time,os,yaml,sys
import asyncio
import httpx
import threading

client = httpx.AsyncClient()
i = sys.argv[1]

file = open("config.yml", 'r', encoding="utf-8")
file_data = file.read()
file.close()
data = yaml.safe_load(file_data)
print("账号: ", i ," 开始签到")
scookie = data['hykb'+i]['scookie']

#msg= ""

async def get(a,b):
   
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
   re=await client.post(url ,headers=headers, data=data)
   if re.status_code ==200 :
    print(re.json())
    return re.json()
   else :
    print ("这个账号失效了🌚，快去更新吧")


async def async_main(url, sign):
    response = await client.get(url)
    status_code = response.status_code
    print(f'async_main: {threading.current_thread()}: {sign}:{status_code}')


loop = asyncio.get_event_loop()
#loop = asyncio.new_event_loop()
#asyncio.set_event_loop(loop)

#tasks = [async_main(url='http://www.baidu.com', sign=i) for i in range(200)]
tasks= [get("zhuli","ac=mycode&comm_id=61") for i in range(5)]
async_start = time.time()
loop.run_until_complete(asyncio.wait(tasks))

async_end = time.time()
#loop.close()
print(async_end - async_start)