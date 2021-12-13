from lxml import html
import time
import random
import requests
 
import re
import urllib.request
import urllib.parse
 
firefoxHead = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0"}
IPRegular = r"(([1-9]?\d|1\d{2}|2[0-4]\d|25[0-5]).){3}([1-9]?\d|1\d{2}|2[0-4]\d|25[0-5])"
host = "https://bbs.3839.com"
urls = [
  "https://bbs.3839.com/thread-3043499.htm"
]
codes = ["106651719", "106533059", "107508976", "106658304", "106594490", "106242605"]
 
 
def parseIPList(url="https://www.89ip.cn/tqdl.html?num=600&address=&kill_address=&port=9999&kill_port=&isp="):
    req = urllib.request.Request(url)  # 创建请求对象
    res = urllib.request.urlopen(req)  # 对网页发起请求并获取响应
    html = res.read().decode("utf-8")
    p = re.compile(r'(?<![\.\d])(?:\d{1,3}\.){3}\d{1,3}(?![\.\d])')
    IPS = re.findall(p, html)
    return IPS
 
 
 
def PV():
    s = requests.Session()
    s.headers = firefoxHead
    count = 0
    while True:
        count += 1
        print("正在进行第{}次访问\t".format(count), end="\t")
        IPs = parseIPList()
        # print(random.choice(IPs))
 
        # IPs = ["36.248.129.106","36.248.132.123"]
        newip = random.choice(IPs)
        print('ip地址是{}'.format(newip))
        s.proxies = {"http: {}:9999".format(newip)}
        s.get(host)
        # r = s.get(url.format(random.choice(codes)))
        for url in urls :
          r = s.get(url)#.format(codes[random.randint(0, 5)]))
          tm = '<li class="sp1">(.*?)<span class="edit"></span></li>'
          ex = '<li class="sp2">(.*?)</li>'
          t = re.findall(ex, r.text)
          rr = re.findall(tm, r.text)
          print("创建时间: \t", end="\t")
          print(rr)
          print("访问量：\t", end="\t")
          print(t)
        '''
        en = html.etree.HTML(r.text)  # 将网页源代码解析成xpath对象
        result = en.xpath('//*[@id="articleContentId"]/text()')
        print(result)
        Views = en.xpath('//*[@id="mainBox"]/main/div[1]/div/div/div[2]/div[1]/div/span[2]/text()')
        print('访问量是{}'.format(Views))        
        time.sleep(1)#random.randint(1,2))
 
        '''



 
def main():
    PV()
    # parseIPList()
 
if __name__ == "__main__":
    main()