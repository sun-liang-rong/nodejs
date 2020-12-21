# HTTP 报文

## 请求报文
* 请求行
* 请求头
* 空行
* 请求体

```
请求行    GET https://www.baidu.com/ HTTP/1.1
请求头     Accept: text/html, application/xhtml+xml, image/jxr, */*
          Accept-Language: zh-Hans-CN,zh-Hans;q=0.5
          User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko
          Accept-Encoding: gzip, deflate
          Host: www.baidu.com
          Connection: Keep-Alive
          Cookie: BD_UPN=1126314751; BD_HOME=1; BAIDUID=9A7F1ACC178A01CA746C5D09E8C93EB6:FG=1; BIDUPSID=9A7F1ACC178A01CA746C5D09E8C93EB6; PSTM=1565575876; BA_HECTOR=852g0l8lag81202l641fslra90r; BDRCVFR[k2U9xfnuVt6]=mk3SLVN4HKm; H_PS_PSSID=1424_32854_33123_33058_31254_33099_33100_32937_32845_26350_33198_33238
空行       
请求体     
```

### 请求行
```
GET https://www.baidu.com/ HTTP/1.1
```
* GET                         请求类型  get, post, delete, patch
* https://www.baidu.com/      URL 
* HTTP/1.1                    HTTP协议的版本 1.0  1.1  2.0

#### URL
URL 是一个特殊格式的字符串
```
https://www.baidu.com:443/s?wd=URL&rsv_spt=1#logo
```
* https                                         协议 http, https, ssh, mongodb, mysql, ftp
* www.baidu.com                      域名
* :443                                            端口号
* /s                                                 路径
* wd=URL&rsv_spt=1&a=100    查询字符串
* \#logo                                          锚点

```
<a href="#logo">回到顶部</a>
```

### 请求头
格式: 『头的名: 头的值』
```
Accept: text/html, application/xhtml+xml, image/jxr, */*
Accept-Language: zh-Hans-CN,zh-Hans;q=0.5
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko
Accept-Encoding: gzip, deflate
Host: www.baidu.com
Connection: Keep-Alive
Cookie: BD_UPN=1126314751; BD_HOME=1; BAIDUID=9A7F1ACC178A01CA746C5D09E8C93EB6:FG=1; BIDUPSID=9A7F1ACC178A01CA746C5D09E8C93EB6; PSTM=1565575876; BA_HECTOR=852g0l8lag81202l641fslra90r; BDRCVFR[k2U9xfnuVt6]=mk3SLVN4HKm; H_PS_PSSID=1424_32854_33123_33058_31254_33099_33100_32937_32845_26350_33198_33238
```
* Accept              接受的数据类型
* Accept-Language     接受的语言类型  q=0.5 喜好系数   吃饭100%  睡觉100%  抽烟 50%
* Accept-Encoding     接受的压缩方式
* User-Agent          用户代理. 『浏览器的字符串标识』
* Host                主机名
* Connection          请求响应完成后链接的处理方式  Keep-Alive 保持连接  close 关闭
* Cookie              小甜饼. 特殊的请求头, 每一次向服务器发送请求, cookie 会自动携带, 传递给服务器

> 请求头的类型比较多, 如果遇到需要处理的请求头, 可以百度查询

### 请求体
```html
<input name="login_email">
<input name="login_password">

login_email=779498590@qq.com&login_password=zDAZn2w76CUCPzD
{"name":"xiaohigh", "age": 33}
```

> 请求体格式是非常灵活的, 任意编写. url 参数与 JSON 格式两种情况用的较多


## 响应报文

* 响应行
* 响应头
* 空行
* 响应体

```
HTTP/1.1 200 OK
Bdpagetype: 1
Bdqid: 0x89717dcd00324a37
Cache-Control: private
Connection: keep-alive
Content-Type: text/html;charset=utf-8
Date: Sat, 05 Dec 2020 02:15:41 GMT
Expires: Sat, 05 Dec 2020 02:15:41 GMT
Server: BWS/1.1
Set-Cookie: BDSVRTM=13; path=/
Set-Cookie: BD_HOME=1; path=/
Set-Cookie: H_PS_PSSID=1424_32854_33123_33058_31254_33099_33100_32937_32845_26350_33198_33238; path=/; domain=.baidu.com
Strict-Transport-Security: max-age=172800
Traceid: 160713454103495616109903835374989494839
X-Ua-Compatible: IE=Edge,chrome=1
Content-Length: 293313

<!DOCTYPE html><!--STATUS OK-->
    <html><head><meta http-equiv="Content-Type" content="text/html;charset=utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta content="always" name="referrer"><meta name="theme-color" content="#2932e1"><meta name="description" content="全球最大的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网页数据库，可以瞬间找到相关的搜索结果。"><link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /><link rel="search" type="application/opensearchdescription+xml" href="/content-search.xml" title="百度搜索" /><link rel="icon" sizes="any" mask href="//www.baidu.com/img/baidu_85beaf5496f291521eb75ba38eacbd87.svg"><link rel="dns-prefetch" href="//dss0.bdstatic.com"/><link rel="dns-prefetch" href="//dss1.bdstatic.com"/><link rel="dns-prefetch" href="//ss1.bdstatic.com"/><link rel="dns-prefetch" href="//sp0.baidu.com"/><link rel="dns-prefetch" href="//sp1.baidu.com"/><link rel="dns-prefetch" href="//sp2.baidu.com"/><title>百度一下，你就知道</title><style index="newi" type="text/css">#form .bdsug{top:39px}.
```

### 响应行

```
HTTP/1.1 200 OK
```

* HTTP/1.1       协议的版本
* 200                 响应的状态码  200 成功   404 找不到    403  禁止的   500  服务器内部错误
  * https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status  响应状态码的 MDN 地址
  * 1xx    信息响应  临时响应
  * 2xx    成功
  * 3xx    重定向
  * 4xx    客户端错误
  * 5xx    服务器错误
* OK                     响应状态字符串.  默认情况下与状态码是一一对应的

### 响应头

```
Bdpagetype: 1
Bdqid: 0x89717dcd00324a37
Cache-Control: private
Connection: keep-alive
Content-Type: text/html;charset=utf-8
Date: Sat, 05 Dec 2020 02:15:41 GMT
Expires: Sat, 05 Dec 2020 02:15:41 GMT
Server: BWS/1.1
Set-Cookie: BDSVRTM=13; path=/
Set-Cookie: BD_HOME=1; path=/
Set-Cookie: H_PS_PSSID=1424_32854_33123_33058_31254_33099_33100_32937_32845_26350_33198_33238; path=/; domain=.baidu.com
Strict-Transport-Security: max-age=172800
Traceid: 160713454103495616109903835374989494839
X-Ua-Compatible: IE=Edge,chrome=1
Content-Length: 293313
```

* Cache-Control  缓存控制  private  私有的只允许客户端缓存  public 公开的
* Connection      链接配置
* Content-Type   内容(响应体)类型    text/html  HTML格式(的字符串)   charset=utf-8  
* Date                  响应时间
* Expires             过期时间
* Server              服务器的信息
* Set-Cookie       设置 cookie
* Strict-Transport-Security     告知浏览器后续请求都使用 HTTPS 协议  了解
* Traceid             跟踪id (轨迹)
* X-Ua-Compatible       IE=Edge,chrome=1    edge 边缘    了解
* Content-Length    内容(响应体)长度   

### 响应体

响应体就是之前的 HTML CSS JS

> 响应体内容也是非常灵活的.

