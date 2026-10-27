# AI 雲端專題介紹生成器

這是一個使用 Next.js、TypeScript 與 Tailwind CSS 製作的期末作業專案。使用者可以輸入專題名稱、組員姓名、系所班級、使用技術、專題目標與成果說明，系統會用前端邏輯模擬 AI，自動產生專題摘要、技術亮點、預期效益與雲端部署說明。

## 作者資訊

- 學校：國立勤益科技大學
- 系所：智慧自動化工程系
- 班級：四智三丙
- 姓名：龔孟謙
- 學號：

## 專案特色

- 使用 Next.js App Router 建立單頁式應用程式
- 使用 TypeScript 定義表單資料與生成結果型別
- 使用 Tailwind CSS 製作現代化響應式 UI
- 不需要資料庫
- 不需要 API Key
- 使用前端邏輯模擬 AI 內容生成
- 使用 Next.js 靜態匯出，可部署至 Cloudflare Pages 免費方案
- 首頁提供作業完成狀態檢查，包含 Next.js 專案、GitHub 與靜態匯出狀態
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
- Cloudflare Pages（目前公開網站）
- Railway（歷史部署，試用到期已離線）
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

建置會產生 `out/` 靜態檔案。Cloudflare Pages 的輸出目錄須設為 `out`。

本機預覽建置結果（先完成 build）：

```bash
npm run start
```

此指令僅供本機預覽，不是 Cloudflare 啟動指令；靜態版本不使用 `next start`。

## GitHub 上傳流程

```bash
git init
git add .
git commit -m "Initial Next.js cloud project generator"
git branch -M main
git remote add origin https://github.com/你的帳號/ai-cloud-project-generator.git
git push -u origin main
```

## Cloudflare Pages 部署流程

1. 登入 [Cloudflare](https://dash.cloudflare.com/)，進入 `Workers & Pages`。
2. 建立 **Pages** 專案，選擇匯入既有 Git repository 並連接 GitHub。
3. 選擇 `kungmengchien0814/ai-cloud-project-generator`，正式分支設為 `main`。
4. Framework preset 選 `Next.js (Static HTML Export)`；若無此選項，可選 `None` 手動填入。
5. Build command 設為 `npm run build`。
6. Build output directory 設為 `out`。
7. Root directory 保持空白（Repository 根目錄），不需要環境變數、資料庫、Workers 或 API Key。
8. 儲存並部署。部署成功後，複製 Cloudflare 實際提供的 `https://…pages.dev` 網址。
9. 將新網址更新至本文件；後續推送 `main` 可觸發自動部署。

設定依據：[Cloudflare 官方靜態 Next.js 部署指南](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)。免費方案仍有平台使用限制。

### 部署狀態與報告

2026-10-27 已完成 Cloudflare Pages 部署，公開網址為 https://ai-cloud-project-generator.pages.dev/ 。原 Railway 試用已到期，服務離線。
`deliverables/` 內 Word/PDF 已同步更新為 Cloudflare 版本，並保留原 Railway 部署歷程說明。
原作業指定 Railway，曾完成 Railway 部署；是否接受 Cloudflare 作為目前展示平台，需依老師規定。

## 期末展示建議

1. 開啟 Cloudflare Pages 部署完成後提供的公開網址
2. 介紹專案主題與作者資訊
3. 輸入一組專題資料
4. 按下「生成專題介紹」
5. 展示系統產生的四個內容區塊
6. 說明 GitHub 原始碼管理、Cloudflare 靜態部署，以及先前 Railway 部署紀錄

## 公開網址

GitHub 原始碼網址：

```txt
https://github.com/kungmengchien0814/ai-cloud-project-generator
```

Cloudflare Pages 公開網站網址：

[AI 雲端專題介紹生成器](https://ai-cloud-project-generator.pages.dev/)

Railway 歷史網址（已離線，請勿作為目前展示入口）：

```txt
https://ai-cloud-project-generator-production.up.railway.app
```

個人資料網站：

```txt
https://kungmengchien.uk
```

AEM電解槽最佳化專題互動網站：

```txt
https://aem-electrolyzer-optimization-site.pages.dev/
```
