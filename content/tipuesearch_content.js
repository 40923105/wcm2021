var tipuesearch = {"pages": [{'title': 'About', 'text': 'This is  https://github.com/mdecourse/cmstemplate \n 目前的 cmsimde 在編輯器下方新增一個 csave 按鈕, 意即 collabrative save, 當動態網際管理系統在多人同時維護登入維護網頁內容時, 編輯各頁面時段, 該頁面可能已經改版, 因此使用 csave 按鈕存檔時, 會導入當下最新的該頁面內容, 並試圖與編輯中的頁面內容進行合併. \n 使用 csave 按鈕存檔無法刪除頁面資料. \n 使用 Edit All 模式, 無法使用 csave 按鈕（尚未測試). \n', 'tags': '', 'url': 'About.html'}, {'title': '每週上課內容', 'text': '記錄每周上課的情況 \n', 'tags': '', 'url': '每週上課內容.html'}, {'title': 'W1-W2', 'text': '1.介紹網際網路管理這門課程，並且到\xa0 http://a.kmol.info:88/ \xa0下載 kmol2021_spring_v2.7z \n 2.利用\xa0 https://github.com/mdecourse/cmstemplate \xa0 建立個人倉儲與網站 \n 3.說明與 cmsimde 編輯及轉靜態網頁有關的認知 \n', 'tags': '', 'url': 'W1-W2.html'}, {'title': 'W3 分組', 'text': '六人一組 \n 小組倉儲網站: wcm2021-ag2 \n 組員: \n github網站: 40923102 、 40923104 、 40923105 、 40923106 、 40923107 、 40923110 \n heroku網站: 40923102、40923104 、 40923105 、 40923106 、 40923107 、 40923110 \n', 'tags': '', 'url': 'W3 分組.html'}, {'title': 'W4', 'text': '簡要說明網際內容管理課程開課緣由, 以及課程目標. 其次說明 wcm2021 Topic0 專案執行目的. \n import requests\nimport bs4\n# for os.environ and os.system()\nimport os\n# for geting html file path\nimport pathlib\n \n# for pythn 3.9\n \n\'\'\'\nurl:  \'class_ajax.php\',\ndata: { pselyr: pselyr, pselclss: pselclss\n\'\'\'\nsemester = \'1092\'\nclassno = \'42311\'\ncolumn = True\n \nif semester == None:\n    semester = \'1091\'\nif classno == None:\n    # 42311 is 設一甲\n    classno = \'42311\'\n     \nheaders = {\'X-Requested-With\': \'XMLHttpRequest\'}\n \nurl = \'https://qry.nfu.edu.tw/class_ajax.php\'\npost_var = {\'pselyr\': semester, \'pselclss\': classno}\n \nresult = requests.post(url, data = post_var, headers = headers)\n \nsoup = bs4.BeautifulSoup(result.content, \'lxml\')\n \n# 先除掉所有 anchor\nfor a in soup.findAll(\'a\'):\n    # bs3 語法\n    #a.replaceWithChildren()\n    # bs4 語法, 將標註與內容拆開\n    a.unwrap()\n \n# 根據輸出設定, 取出 class=\'tbcls\' 的 table 資料\ntable = soup.find(\'table\', {\'class\': \'tbcls\'})\n \n# 重建 table, 設定邊線為 1 pixel\noutput = "<table border=\'1\'>"\n \nfor i in table.contents:\n    # 利用 replace 復原  \n    output += str(i).replace("&nbsp", " ")\noutput += "</table>"\n# print(output)\n# 將 output 寫入 w1_class_local.html\nwith open("w1_class_local.html", "w", encoding="utf-8") as file:\n    file.write(output)\n# 利用 os.system() 以 default browser 開啟 w1_class_local.html\nfilePath = pathlib.Path(__file__).parent.absolute()\n#print(filePath)\n# set firefox as default browser and start url to open html file\nos.system("start file:///" + str(filePath) + "\\\\w1_class_local.html") \n \xa0將程式碼貼上 start_ipv4.bat 裡的編輯器，然後 Tools > go\xa0 \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '更新CMSIMDE \n 更新完成，從 data>tmp>wcm2021>cmsimde>up_dir 把新的檔案拉進 wcm2021 的資料夾裡 \n \n 啟用 ssh \n 進入 data>PuTTY>puttygen.exe>Generate>滑鼠在上面空白處移動，創造一把key>全選>複製>貼到 github 設定裡的SSH>要Save private key 檔案名稱為 → 學號.ppk \n \n > putty.exe \n \n \n ▲選取剛剛儲存的ppk檔 \n \n ▲由於我們是用自己的電腦不用設Proxy \n 用完要記得回到 Session 儲存。 \n > 在 start_ipv.bat 中設定\xa0 set  GIT_SSH=%Disk%:\\putty\\plink.exe \xa0 會讓原本 Github 倉儲中  .git/config url 指向 domain name 的機制， 轉為透過 Putty 設定的 session 名稱連線 \n 當倉儲使用github.com push 必須修改.git > config 中的 url 格式 \n 1.先以半形 # 去註解 Https 的連線設定 \n 2.git@ session :帳號/倉儲.git\xa0  ※ Session 名稱為自己在 putty.exe中所設定的 session \n \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '申請Heroku帳號，到\xa0 http://a.kmol.info:88/ \xa0下載 Heroku \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '設定Heroku同步倉儲 \n \n \n 進到 Heroku 建立一個 Heroku app，名稱為 s+學號 \n \n \n 修改其命令路徑，修改完要重新啟動已經納入可執行 heroku.exe 的 start_ipv4.bat \n set path_heroku=%Disk%:\\heroku\\bin;\npath=%Disk%:;%path_python%;%path_portablegit%;%path_heroku%; \n \n \n 輸入 heroku version 若回應所使用的版本表示上述路徑設定已經成功 \n \n \n 我們已經知道網路的應用包含 client 與 server，不同 client 採用不同的 proxy 設定與 server 連線, 其中 firefox 作為 WWW 網路協定的 client，有其自己的網路 Proxy 設定，也可以直接使用操作系統的 Proxy 設定 \n Chrome 作為 WWW 網路協定的 client，目前 Windows 下的最新版，只能使用操作系統的 Proxy 設定 \n 而 git 作為 git client 與 github server 連線的 Proxy 設定，則寫在 y:\\home_ipv6 下的 .giconfig 中，以 git config --global http.proxy "http://your_proxy:port" 進行設定 \n 相同的道理 heroku cli 作為 \xa0 https://heroku.com \xa0 伺服器的 client 端, 也有其 Proxy 的設定方式, 也就是在 start_ipv6.bat 中加入 \n REM for heroku login\nset HTTP_PROXY=http://[2001:288:6004:17::53]:3128\nset HTTPS_PROXY=http://[2001:288:6004:17::53]:3128 \n 由於使用自己電腦的是用 ipv4，如果加入了上面的 proxy 在之後的登入會遇到一些狀況，所以要在前面加上 REM 使其變成註解 \n REM for heroku login\nREM set HTTP_PROXY=http://[2001:288:6004:17::53]:3128\nREM set HTTPS_PROXY=http://[2001:288:6004:17::53]:3128 \n \n \n 利用 Heroku 同步 Github Pages 上的網站內容，只需要透過 git remote add，之後只要在 heroku login 狀態下，可以直接利用 git push 在近端設定一個連線到 Heroku 倉儲的代號，就能在每次更新 Github Pages 倉儲後， 再將內容同步至 Heroku \n 網際內容管理課程將使用 2 種 Heroku app 設定: \n 靜態網頁 - 採用 php 方式部署，讓 Heroku 將靜態網頁視為 PHP 程式，利用 index.php 跳轉到 index.html \n 動態網頁 - 讓 Heroku 執行 cmsimde/wsgi.py 的方式進行雲端伺服 \n heroku login -i\nheroku git:remote -a heroku app名稱 \n \n \n 利用 heroku git:remote -a 設定的同步倉儲其推送名稱內定為 "heroku"，使用者只要使用 git push heroku 就可以將改版內容推送到對應的 Heroku app 倉儲 \n \n \n \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '\n \n \n 6樓 \n BGA0611 \n BGA0620 \n BGA0640 \n \n \n \n \n 7樓 \n BGA0710 \n BGA0730 \n \n \n \n \n \n 8樓 \n  BGA0810 \n BGA0820 \n BGA0823 \n BGA0830 \n BGA0842 \n \n \n 9樓 \n BGA0901 \n BGA0911 \n BGA0933 \n \n \n \n \n \n import requests\nimport bs4\n# for os.environ and os.system\nimport os\n# for geting html file path\nimport pathlib\n# 以下因應改為 Heroku based 程式所需導入模組,  修改步驟 1/6\nfrom flask import Flask, request \nfrom flask_cors import CORS\n \n \n# 修改步驟 2/6 , 加入 Flask 相關物件設定\napp = Flask(__name__)\n# 此一設定可以讓程式跨網域擷取資料\nCORS(app)\n \n# for pythn 3.9,  在近端測試時仍需要設定 proxy, 若使用 Python 3.8 執行則會自動使用系統的 Proxy 設定\n\n\'\'\'\nurl:  \'jclassroom_ajax.php\',\ndata: { pselyr: pselyr, pselclssroom: pselclssroom },\n\'\'\'\n \n# 修改步驟 3/6, 試著將程式改為網際模式, 需要套用 Flask 的網際 decorator\n@app.route(\'/\')\ndef timeTableList():\n    semester = \'1092\'\n    classroomno = \'BGA0810\'\n    column = True\n \n    if semester == None:\n        semester = \'1092\'\n    if classroomno == None:\n        # BGA0810 電腦輔助設計室\n        classroomno = \'BGA0810\'\n         \n    headers = {\'X-Requested-With\': \'XMLHttpRequest\'}\n \n    url = \'https://qry.nfu.edu.tw/jclassroom_ajax.php\'\n    post_var = {\'pselyr\': semester, \'pselclssroom\': classroomno}\n \n    result = requests.post(url, data = post_var, headers = headers)\n \n    soup = bs4.BeautifulSoup(result.content, \'lxml\')\n \n    # 先除掉所有 anchor\n    for a in soup.findAll(\'a\'):\n        # bs3 語法\n        #a.replaceWithChildren()\n        # bs4 語法, 將標註與內容拆開\n        a.unwrap()\n \n    # 根據輸出設定, 取出 class=\'tbcls\' 的 table 資料\n    table = soup.find(\'table\', {\'class\': \'tbcls\'})\n \n    # 重建 table, 設定邊線為 1 pixel\n    output = "<table border=\'1\'>"\n \n    for i in table.contents:\n        # 利用 replace 復原  \n        output += str(i).replace("\xa0", " ")\n    output += "</table>"\n    #print(output)\n    # 修改步驟 5/6 , 因為已經將原先可列印出程式的步驟改為 function, 因此必須以 return 將擷取到的網頁資料傳回\n    return output\n     \n# 修改步驟 4/6 , 因為改寫為網際程式後, 下列將內容存檔並自動呼叫 Firefox 的程式碼不再適用, 必須蓋掉\n\'\'\'\n# 將 output 寫入 w1_classroom.html\nfileName = "w1_classroom.html"\nwith open(fileName, "w", encoding="utf-8") as file:\n    file.write(output)\n# 利用 os.system() 以 default browser 開啟 w1_class_local.html\nfilePath = pathlib.Path(__file__).parent.absolute()\n#print(filePath)\n# set firefox as default browser and start url to open html file\nos.system("start file:///" + str(filePath) + "\\\\" + fileName)\n\'\'\'\n \n# 修改步驟 6/6, 配合網際程式啟動,  以及 Python 程式執行與納入其他程式執行的特定進行配置\n \nif __name__ == \'__main__\':\n    app.run(host=\'127.0.0.1\', port=8080, debug=True)\n \n \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '打期望成績 \n', 'tags': '', 'url': 'W9.html'}, {'title': 'W10', 'text': '\n http://a.kmol.info:88/ \xa0下載\xa0 robodk522_kmol.7z \n https://sqlitebrowser.org/dl/ \xa0下載\xa0DB Browser for SQLite - .zip (no installer) for 64-bit \n \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '至  http://a.kmol.info:88/  下載 robodk522_portable.7z \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '此週開始使用同步線上教學 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14分組連結', 'text': 'wcm2021--ag1 \n 40923135 web  |  40923135 repo  |  grp web  |  grp repo     40923108 web  |  40923108 repo  |  grp web  |  grp repo     40923101 web  |  40923101 repo  |  grp web  |  grp repo     40923142 web  |  40923142 repo  |  grp web  |  grp repo    wcm2021--ag2   40923105 web  |  40923105 repo  |  grp web  |  grp repo     40923104 web  |  40923104 repo  |  grp web  |  grp repo     40923107 web  |  40923107 repo  |  grp web  |  grp repo     40923110 web  |  40923110 repo  |  grp web  |  grp repo     40923102 web  |  40923102 repo  |  grp web  |  grp repo     40923106 web  |  40923106 repo  |  grp web  |  grp repo    wcm2021--ag3   40923123 web  |  40923123 repo  |  grp web  |  grp repo     40923151 web  |  40923151 repo  |  grp web  |  grp repo     40923139 web  |  40923139 repo  |  grp web  |  grp repo     40923147 web  |  40923147 repo  |  grp web  |  grp repo    wcm2021--ag4   40923148 web  |  40923148 repo  |  grp web  |  grp repo     40923111 web  |  40923111 repo  |  grp web  |  grp repo     40923116 web  |  40923116 repo  |  grp web  |  grp repo     40923122 web  |  40923122 repo  |  grp web  |  grp repo     40923109 web  |  40923109 repo  |  grp web  |  grp repo     40923146 web  |  40923146 repo  |  grp web  |  grp repo    wcm2021--ag5   40923127 web  |  40923127 repo  |  grp web  |  grp repo     40923128 web  |  40923128 repo  |  grp web  |  grp repo     40923125 web  |  40923125 repo  |  grp web  |  grp repo     40923136 web  |  40923136 repo  |  grp web  |  grp repo     40923124 web  |  40923124 repo  |  grp web  |  grp repo     40923126 web  |  40923126 repo  |  grp web  |  grp repo    wcm2021--ag6   40723240 web  |  40723240 repo  |  grp web  |  grp repo     40723238 web  |  40723238 repo  |  grp web  |  grp repo    wcm2021--ag7   40523923 web  |  40523923 repo  |  grp web  |  grp repo     40523148 web  |  40523148 repo  |  grp web  |  grp repo    wcm2021--ag8   40923117 web  |  40923117 repo  |  grp web  |  grp repo     40923120 web  |  40923120 repo  |  grp web  |  grp repo     40923119 web  |  40923119 repo  |  grp web  |  grp repo \n', 'tags': '', 'url': 'W14分組連結.html'}, {'title': 'W15', 'text': '填寫線上表單-打成績、上課問題、上課心得 \n', 'tags': '', 'url': 'W15.html'}, {'title': '123', 'text': '', 'tags': '', 'url': '123.html'}]};