import requests,random,json
#session = requests.Session()

#爬取当前用户的相关用户信息

url2= 'http://www.renren.com/976279344/profile'
#detail_page_test = session.get(url = url).json()
#with open('bobo.html','w',encoding = 'utf-8' ) as fp:
#    fp.write(detail_page_test)
#print (detail_page_test)
it= []
push={
 'id': 2,
 'tit': '奇葩战斗家'
}
push2={
 'id': 3,
 'tit': '奇葩战斗家'
}

it.append(push)
it.append(push2)
print(it)

i=random.randint(0, 1)
print(i)