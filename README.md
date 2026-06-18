# AI 雲端專題介紹生成器

這是一個使用 Next.js、TypeScript 與 Tailwind CSS 製作的期末作業專案。使用者可以輸入專題名稱、組員姓名、系所班級、使用技術、專題目標與成果說明，系統會用前端邏輯模擬 AI，自動產生專題摘要、技術亮點、預期效益與雲端部署說明。

## 作者資訊

- 學校：國立勤益科技大學
- 系所：智慧自動化工程系
- 班級：四智三丙
- 姓名：龔孟謙
- 學號：3B261084

## 專案特色

- 使用 Next.js App Router 建立單頁式應用程式
- 使用 TypeScript 定義表單資料與生成結果型別
- 使用 Tailwind CSS 製作現代化響應式 UI
- 不需要資料庫
- 不需要 API Key
- 使用前端邏輯模擬 AI 內容生成
- 適合部署到 Railway 並產生公開網址
- 首頁提供作業完成狀態檢查
- 生成結果可一鍵複製，方便整理到簡報或報告

## 功能說明

使用者可以輸入：

- 專題名稱
- 組員姓名
- 系所班級
- 使用技術
- 專題目標
- 成果說明

按下「生成專題介紹」後，頁面會自動產生：

- 專題摘要
- 技術亮點
- 預期效益
- 雲端部署說明

## 使用技術

- Next.js
- React
- TypeScript
- Tailwind CSS
- Railway
- GitHub

## 本機執行方式

安裝套件：

```bash
npm install
```

啟動開發伺服器：

```bash
npm run dev
```

開啟瀏覽器：

```txt
http://localhost:3000
```

建置正式版本：

```bash
npm run build
```

啟動正式版本：

```bash
npm run start
```

## GitHub 上傳流程

```bash
git init
git add .
git commit -m "Initial Next.js cloud project generator"
git branch -M main
git remote add origin https://github.com/你的帳號/ai-cloud-project-generator.git
git push -u origin main
```

## Railway 部署流程

1. 前往 [Railway](https://railway.app)
2. 使用 GitHub 帳號登入
3. 選擇 `New Project`
4. 選擇 `Deploy from GitHub repo`
5. 選取此專案的 GitHub Repository
6. Railway 會自動安裝套件並執行建置
7. 部署成功後，在 Networking 產生 Public Domain
8. 將公開網址填入作業繳交資料

## 期末展示建議

1. 開啟 Railway 公開網址
2. 介紹專案主題與作者資訊
3. 輸入一組專題資料
4. 按下「生成專題介紹」
5. 展示系統產生的四個內容區塊
6. 說明專案已上傳 GitHub 並部署到 Railway

## 公開網址

GitHub 原始碼網址：

```txt
https://github.com/kungmengchien0814/ai-cloud-project-generator
```

Railway 公開網站網址：

```txt
https://ai-cloud-project-generator-production.up.railway.app
```

個人資料網站：

```txt
https://kungmengchien.uk
```

AEM 電解槽最佳化互動展示平台：

```txt
https://aem-mobile-demo.pages.dev
```
