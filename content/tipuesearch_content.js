var tipuesearch = {"pages": [{'title': 'About', 'text': 'This is  https://github.com/mdecourse/cmstemplate \n 目前的 cmsimde 在編輯器下方新增一個 csave 按鈕, 意即 collabrative save, 當動態網際管理系統在多人同時維護登入維護網頁內容時, 編輯各頁面時段, 該頁面可能已經改版, 因此使用 csave 按鈕存檔時, 會導入當下最新的該頁面內容, 並試圖與編輯中的頁面內容進行合併. \n 使用 csave 按鈕存檔無法刪除頁面資料. \n 使用 Edit All 模式, 無法使用 csave 按鈕（尚未測試). \n', 'tags': '', 'url': 'About.html'}, {'title': '每週上課內容', 'text': '記錄每周上課的情況 \n', 'tags': '', 'url': '每週上課內容.html'}, {'title': 'W1-W2', 'text': '1.介紹網際網路管理這門課程，並且到\xa0 http://a.kmol.info:88/ \xa0下載 kmol2021_spring_v2.7z \n 2.利用\xa0 https://github.com/mdecourse/cmstemplate \xa0 建立個人倉儲與網站 \n 3.說明與 cmsimde 編輯及轉靜態網頁有關的認知 \n', 'tags': '', 'url': 'W1-W2.html'}, {'title': 'W3', 'text': '分組，每六人一組 \n 組員: \n github網站: 40923102 、 40923104 、 40923105 、 40923106 、 40923107 、 40923110 \n heroku網站: 40923102、40923104 、 40923105 、 40923106 、 40923107 、 40923110 \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '簡要說明網際內容管理課程開課緣由, 以及課程目標. 其次說明 wcm2021 Topic0 專案執行目的. \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '更新CMSIMDE \n 更新完成，從 data>tmp>wcm2021>cmsimde>up_dir 把新的檔案拉進 wcm2021 的資料夾裡 \n \n 啟用 ssh \n 進入 data>PuTTY>puttygen.exe>Generate>滑鼠在上面空白處移動，創造一把key>全選>複製>貼到 github 設定裡的SSH>要Save private key 檔案名稱為 → 學號.ppk \n \n > putty.exe \n \n \n ▲選取剛剛儲存的ppk檔 \n \n ▲由於我們是用自己的電腦不用設Proxy \n 用完要記得回到 Session 儲存。 \n > 在 start_ipv.bat 中設定\xa0 set  GIT_SSH=%Disk%:\\putty\\plink.exe \xa0 會讓原本 Github 倉儲中  .git/config url 指向 domain name 的機制， 轉為透過 Putty 設定的 session 名稱連線 \n 當倉儲使用github.com push 必須修改.git > config 中的 url 格式 \n 1.先以半形 # 去註解 Https 的連線設定 \n 2.git@ session :帳號/倉儲.git\xa0  ※ Session 名稱為自己在 putty.exe中所設定的 session \n \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '申請Heroku帳號，到\xa0 http://a.kmol.info:88/ \xa0下載 Heroku \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '設定Heroku同步倉儲 \n \n 進到 Heroku 建立一個 Heroku app，名稱為 s+學號 \n 修改其命令路徑，修改完要重新啟動 已經納入可執行 heroku.exe 的 start_ipv4.bat \n \n \n \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '123 \n', 'tags': '', 'url': 'W8.html'}, {'title': 'test', 'text': 'set path_heroku=%Disk%:\\heroku\\bin; \n path=%Disk%:;%path_python%;%path_portablegit%;%path_heroku%; \n', 'tags': '', 'url': 'test.html'}]};