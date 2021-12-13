# ---------------------------------- 互 助 码 填 写 示 例 ----------------------------------

################################## 互助码填法示例 ##################################
## **互助码是填在My系列变量中的，ForOther系统变量中只要填入My系列的变量名即可，按注释中的例子拼接，以东东农场为例，如下所示。**
## **实际上东东农场一个账号只能给别人助力3次，我多写的话，只有前几个会被助力。但如果前面的账号获得的助力次数已经达到上限了，那么还是会尝试继续给余下的账号助力，所以多填也是有意义的。**
## **ForOther系列变量必须从1开始编号，依次编下去。**

# MyFruit1="e6e04602d5e343258873af1651b603ec"  # 这是Cookie1这个账号的互助码
# MyFruit2="52801b06ce2a462f95e1d59d7e856ef4"  # 这是Cookie2这个账号的互助码
# MyFruit3="e2fd1311229146cc9507528d0b054da8"  # 这是Cookie3这个账号的互助码
# MyFruit4="6dc9461f662d490991a31b798f624128"  # 这是Cookie4这个账号的互助码
# MyFruit5="30f29addd75d44e88fb452bbfe9f2110"  # 这是Cookie5这个账号的互助码
# MyFruit6="1d02fc9e0e574b4fa928e84cb1c5e70b"  # 这是Cookie6这个账号的互助码
# MyFruitA="5bc73a365ff74a559bdee785ea97fcc5"  # 这是我和别人交换互助，另外一个用户A的互助码
# MyFruitB="6d402dcfae1043fba7b519e0d6579a6f"  # 这是我和别人交换互助，另外一个用户B的互助码
# MyFruitC="5efc7fdbb8e0436f8694c4c393359576"  # 这是我和别人交换互助，另外一个用户C的互助码

# ForOtherFruit1="${MyFruit2}@${MyFruitB}@${MyFruit4}"   # Cookie1这个账号助力Cookie2的账号的账号、Cookie4的账号以及用户B
# ForOtherFruit2="${MyFruit1}@${MyFruitA}@${MyFruit4}"   # Cookie2这个账号助力Cookie1的账号的账号、Cookie4的账号以及用户A
# ForOtherFruit3="${MyFruit1}@${MyFruit2}@${MyFruitC}@${MyFruit4}@${MyFruitA}@${MyFruit6}"  # 解释同上，东东农场实际上只能助力3次
# ForOtherFruit4="${MyFruit1}@${MyFruit2}@${MyFruit3}@${MyFruitC}@${MyFruit6}@${MyFruitA}"  # 解释同上，东东农场实际上只能助力3次
# ForOtherFruit5="${MyFruit1}@${MyFruit2}@${MyFruit3}@${MyFruitB}@${MyFruit4}@${MyFruit6}@${MyFruitC}@${MyFruitA}"
# ForOtherFruit6="${MyFruit1}@${MyFruit2}@${MyFruit3}@${MyFruitA}@${MyFruit4}@${MyFruit5}@${MyFruitC}"


## ---------------------------------- 手 动 填 写 互 助 码 区 域 （不推荐！） ----------------------------------
## 以下为互助码的手动填写区域，为特定活动或临时活动填写的地方。现已可一键自动生成，只需运行export_sharecodes.sh按提示操作即可。

################################## 1. 定义东东农场互助（选填） ##################################
## 具体填法及要求详见本文件最下方“互助码填法示例”
MyFruit1="5b77d1e3b0564c769c07042e02fd340f"
MyFruit2="ed579db3d4a1473280596fc1b91375ab"
MyFruitA="c3419bd3d68d46e9be072d00c60b369d"
MyFruitB="eec0583d8c9c49fea8265ade1c6f4324"
MyFruitC="c42fe08e836b4bb69d7bf5c812def9cd"

ForOtherFruit1="${MyFruit2}@${MyFruitA}@${MyFruitB}@${MyFruitC}"
ForOtherFruit2="${MyFruit1}@${MyFruitA}@${MyFruitB}@${MyFruitC}"


################################## 2. 定义东东萌宠互助（选填） ##################################
## 具体填法及要求详见本文件最下方“互助码填法示例”
MyPet1="MTAxODc2NTEzMzAwMDAwMDAzMTk4OTc0MQ=="
MyPet2="MTE1NDUwMTI0MDAwMDAwMDQ0MDI3NTU1"
MyPetA="MTAxODc2NTEzNTAwMDAwMDAyMjAxMzkxMQ=="
MyPetB="MTE1NDQ5OTUwMDAwMDAwNDM4MDcxNjE="
MyPetC="MTAxODc2NTEzMjAwMDAwMDAzMjc0MDQ0Nw=="

ForOtherPet1="${MyPet2}@${MyPetA}@${MyPetB}@${MyPetC}"
ForOtherPet2="${MyPet1}@${MyPetA}@${MyPetB}@${MyPetC}"


################################## 3. 定义种豆得豆互助（选填） ##################################
## 具体填法及要求详见本文件最下方“互助码填法示例”
MyBean1="e7lhibzb3zek2lj32fan2xscpeeomkmdbx4azaq"
MyBean2="h3cggkcy6agkhvjdnbdvejhi7mxmt522tioduly"
MyBeanA="e7lhibzb3zek3lpsqv4ansrnoggucxpjy4cazay"
MyBeanB="nkiu2rskjyetbjpyxts2baq3fxs6ahqdljrb4ay"
MyBeanC="olmijoxgmjutyzbfyuzm77ovjmljvhlwaglolnq"

ForOtherBean1="${MyBean2}@${MyBeanA}@${MyBeanB}@${MyBeanC}"
ForOtherBean2="${MyBean1}@${MyBeanA}@${MyBeanB}@${MyBeanC}"


################################## 4. 定义东东工厂互助（选填） ##################################
## 具体填法及要求详见本文件最下方“互助码填法示例”
MyJdFactory1="T0225KkcRB8YplTRIhvylaYCIACjVWnYaS5kRrbA"
MyJdFactory2="T0205KkcKktCqCKqakWlzop_CjVWnYaS5kRrbA"
MyJdFactoryA="T0225KkcREsYowHRdRyllfYKIQCjVWnYaS5kRrbA"
MyJdFactoryB="T0205KkcJUdsgQiXSFKC0JNjCjVWnYaS5kRrbA"
MyJdFactoryC="T0225KkcRhYQ_FOFJRihxf8McQCjVWnYaS5kRrbA"

ForOtherJdFactory1="${MyJdFactory2}@${MyJdFactoryA}@${MyJdFactoryB}@${MyJdFactoryC}"
ForOtherJdFactory2="${MyJdFactory1}@${MyJdFactoryA}@${MyJdFactoryB}@${MyJdFactoryC}"


################################## 5. 定义京喜工厂互助（选填） ##################################
## 具体填法及要求详见本文件最下方“互助码填法示例”
MyDreamFactory1="4RSgvsOyu-EFHcO-Rzkiiw=="
MyDreamFactory2="gviaisi6ypURz3Gf6RF7iw=="
MyDreamFactoryA="N46KaH6AlohCC2-AMlG0bA=="
MyDreamFactoryB=""
MyDreamFactoryC="lcQhU26Ccgxm9SAauf1RVQ=="

ForOtherDreamFactory1="${MyDreamFactoryA}@${MyDreamFactory2}@${MyDreamFactoryC}"
ForOtherDreamFactory2="${MyDreamFactoryA}@${MyDreamFactory1}@${MyDreamFactoryC}"


################################## 6. 定义京东赚赚互助（选填） ##################################
## 具体填法及要求详见本文件最下方“互助码填法示例”
MyJdzz1="S5KkcRB8YplTRIhvylaYCIA"
MyJdzz2="S5KkcKktCqCKqakWlzop_"
MyJdzzA="S5KkcREsYowHRdRyllfYKIQ"
MyJdzzB="S5KkcJUdsgQiXSFKC0JNj"
MyJdzzC="S5KkcRhYQ_FOFJRihxf8McQ"

ForOtherJdzz1="${MyJdzz2}@${MyJdzzA}@${MyJdzzB}@${MyJdzzC}"
ForOtherJdzz2="${MyJdzz1}@${MyJdzzA}@${MyJdzzB}@${MyJdzzC}"

################################## 7. 定义疯狂的JOY互助（选填） ##################################
## 具体填法及要求详见本文件最下方“互助码填法示例”
MyJoy1="M-t3Wje3DmxnE4D2vLNja6t9zd5YaBeE"
MyJoy2="JuB12Ekv-oSCZpLCPpUrag=="
MyJoyA="6iuAV9-3WIlDJ9RP-nsrD6t9zd5YaBeE"
MyJoyB=""
MyJoyC="bpdnrBYCRLZosEZLIMRclqt9zd5YaBeE"

ForOtherJoy1="${MyJoy2}@${MyJoyA}@${MyJoyC}"
ForOtherJoy2="${MyJoy1}@${MyJoyA}@${MyJoyC}"

################################## 8. 定义口袋书店互助（选填） ##################################
## 具体填法及要求详见本文件最下方“互助码填法示例”
MyBookShop1="32a34780811b4507938b4b81e5ac20f5"
MyBookShop2=""
MyBookShopA="0b976b7b612b42cca3411b164902f735"
MyBookShopB=""

ForOtherBookShop1="${MyBookShop2}@${MyBookShopA}"
ForOtherBookShop2="${MyBookShopA}@${MyBookShop1}"


################################## 9. 定义签到领现金互助（选填） ##################################
## 具体填法及要求详见本文件最下方“互助码填法示例”
MyCash1="eU9YaO2zNfwg82_TyiIbgg"
MyCash2="eU9YBrnpO4pbuzGEkQ5m"
MyCashA="eU9YaLmzMKkgpGiEynITgw"
MyCashB="eU9YCbXHEqBmmSajjxd6"
MyCashC="eU9YauS7b_t09GyAmnsV0w"

ForOtherCash1="${MyCash2}@${MyCashA}@${MyCashB}@${MyCashC}"
ForOtherCash2="${MyCash1}@${MyCashA}@${MyCashB}@${MyCashC}"


################################## 10. 定义京喜农场互助（选填） ##################################
## 具体填法及要求详见本文件最下方“互助码填法示例”
## 京喜农场助力码为 JSON 格式因此使用单引号，json 格式如下
## {"smp":"22bdadsfaadsfadse8a","active":"jdnc_1_btorange210113_2","joinnum":"1"}
## 助力码获取可以通过 bash jd.sh jd_get_share_code now 命令获取
## 注意：京喜农场 种植种子发生变化的时候，互助码也会变！！
MyJxnc1='{"smp":"6be9c8fd02c0ae4e85768f5f362d9fd4","active":"jdnc_1_tomato210315_2","joinnum":1}'
MyJxnc2='{"smp":"ad9a56440f4b13fe17b89b8d14ada370","active":"jdnc_1_xiacheng210315_2","joinnum":1}'
MyJxncA='{"smp":"68440a9e0bab10a2e5cb90cd5023f774","active":"jdnc_1_ganju210315_2","joinnum":1}'
MyJxncB=''
MyJxncC='{"smp":"94bc82bcebfd0bfe05fab1e0da11a973","active":"jdnc_1_papaya210315_2","joinnum":1}'

ForOtherJxnc1="${MyJxnc2}@${MyJxncA}@${MyJxncC}"
ForOtherJxnc2="${MyJxnc1}@${MyJxncA}@${MyJxncC}"


################################## 11. 定义闪购盲盒互助（选填） ##################################
## 具体填法及要求详见本文件最下方“互助码填法示例”
MySgmh1="T0225KkcRB8YplTRIhvylaYCIACjVQmoaT5kRrbA"
MySgmh2="T0205KkcKktCqCKqakWlzop_CjVQmoaT5kRrbA"
MySgmhA="T0225KkcREsYowHRdRyllfYKIQCjVQmoaT5kRrbA"
MySgmhB="T0205KkcJUdsgQiXSFKC0JNjCjVQmoaT5kRrbA"
MySgmhC="T0225KkcRhYQ_FOFJRihxf8McQCjVQmoaT5kRrbA"

ForOtherSgmh1="${MySgmh2}@${MySgmhA}@${MySgmhB}@${MySgmhC}"
ForOtherSgmh2="${MySgmh1}@${MySgmhA}@${MySgmhB}@${MySgmhC}"


################################## 12. 定义京喜财富岛互助（选填） ##################################
## 具体填法及要求详见本文件最下方“互助码填法示例”
MyCfd1="C07BE24390E8576693BAD25210921DC602F6A546C30432AD58C6B5B7CE575450"
MyCfd2="B0A8EFAD2C03A7AA9ABA13431C3E2427C00DA55C140506BFD8BDF37C67261D0C"
MyCfdA="DAF3314546ED3DAE22BBBCE94EE71738534E24B381030644ACF0F3B97F00B244"
MyCfdB="D037B14B14F55BACA9E1CAB56B17F4D21807B047236A7A1D00C7A46C8EFCA265"
MyCfdC="1F0A40C680C04AC1F693AA46B76549E2B53CB7C8CDBAD94CE0BBC246A89A5505"

ForOtherCfd1="${MyCfd2}@${MyCfdA}@${MyCfdB}@${MyCfdC}"
ForOtherCfd2="${MyCfd1}@${MyCfdA}@${MyCfdB}@${MyCfdC}"


################################## 13. 定义京东手机狂欢城互助（选填） ##################################
## 具体填法及要求详见本文件最下方“互助码填法示例”
MyCarnivalcity1=""
MyCarnivalcity2=""
MyCarnivalcityA="241bc2c8-8b5b-42d5-ba17-929f69585660"
MyCarnivalcityB="a260ab1a-4173-4a71-b16a-f404b4e927ff"

ForOtherCarnivalcity1="${MyCarnivalcity2}@${MyCarnivalcityA}@${MyCarnivalcityB}"
ForOtherCarnivalcity2="${MyCarnivalcity1}@${MyCarnivalcityA}@${MyCarnivalcityB}"
