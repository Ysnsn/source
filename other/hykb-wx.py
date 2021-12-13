# encoding:utf-8
import requests,time,json
cks = []
msg=""

def task(op, id,ck):
      url= "https://huodong3.3839.com/weixin/2021/cqhd/ajax.php"
      headers= {
        'User-Agent':'Mozilla/5.0 (Linux; Android 10; MI 8 UD Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045617 Mobile Safari/537.36 MMWEBID/5859 MicroMessenger/8.0.6.1900(0x28000653) Process/tools WeChat/arm64 Weixin NetType/4G Language/zh_CN ABI/arm64', 
        'X-Requested-With':'XMLHttpRequest',
        'cookie': ck
      }
      data = {
        'op': op, 
        'renwu_id': id, 
        't':'0.755908490600546'
      }
      response = requests.post(url = url,data = data,headers = headers)
      t= response.text
      if isinstance(t,dict):
        print (t)
      else:
        print("这个b又失效了,快去更新吧呜呜呜≥﹏≤")
        print (t)

    
def task1(op,ck):
    url= "https://huodong3.3839.com/weixin/2021/cqhd/ajax.php"
    headers= {
      'User-Agent':'Mozilla/5.0 (Linux; Android 10; MI 8 UD Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045617 Mobile Safari/537.36 MMWEBID/5859 MicroMessenger/8.0.6.1900(0x28000653) Process/tools WeChat/arm64 Weixin NetType/4G Language/zh_CN ABI/arm64', 
      'X-Requested-With':'XMLHttpRequest',
      'cookie': ck
    }
    data1="op=myPrize&t=0.755908490600546"
    data = {
      'op': op, 
      't': '0.755908490600546'
    }
    response = requests.post(url = url,data = data, headers = headers)
    t= response.text
    if isinstance(t,dict):
      print (t)
    else:
      print("这个b又失效了,快去更新吧呜呜呜≥﹏≤")
      print (t)
    
    
def start():
  i=0
  for ck in cks:
    i = i+1
    print("账号{}开始签到".format(i))
    task("sign", 1,ck)
    task("read", 2,ck)
    task("read", 3,ck)
    task("gominiapp", 5,ck)
    task1("getPrize",ck)
    task1("myPrize",ck)
    print("\n=================\n")
  print("完事")

def prize():
    for ck in cks:
     task1(ck)

#prize()
start()