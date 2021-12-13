# -*- coding: utf8 -*-
# python >=3.8
import requests,json

ck= ""
url = f'https://www.yuketang.cn/v2/api/web/logs/learn/6685445?actype=14&page=0&offset=20&sort=-1'

  
headers = {
        "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",
    "User-Agent":"MiFit/4.6.0 (iPhone; iOS 14.0.1; Scale/2.00)",
       "cookie": ck
        }
 
     
def do():
   print (header)
   re= requests.get(url,headers=header).json()
  # r =re["data"]["activities"]
   print (re)

do()
#下载图片
def get_img(imgurl,name):
    img_name=f'{name}{imgurl[-4:]}'
    r = requests.get(url=imgurl, headers=ua(), timeout=6)
    print(f"开始下载 {img_name} 图片..")
    with open(img_name, 'wb') as f:
        f.write(r.content)
    print(f"下载 {img_name} 图片完成！")

#下载文件
def get_sky(url,name):
    down_url=get_real_url(url)
    down_name=f'{name}{down_url[-4:]}'
    r=requests.get(url=down_url,headers=ua(),timeout=6)
    print(f"开始下载 {down_name} 文件..")
    with open(down_name,'wb') as f:
        f.write(r.content)
    print(f"下载 {down_name} 文件完成！")
    
    
#####基于前一节代码之上####
session = requests.Session()

#爬取当前用户的相关用户信息
'''手动获取Cookie（不推荐） headers = {
   ‘'Cookie':'xxxx'
    }'''
detail_url = 'http://www.renren.com/976279344/profile'
detail_page_test = session.get(url = detail_url,headers = headers).text
with open('bobo.html','w',encoding = 'utf-8' ) as fp:
    fp.write(detail_page_test)
    