import type { GeneratedIntro, ProjectFormData } from "@/types/project";

const fallback = {
  projectName: "本雲端專題",
  members: "本組成員",
  departmentClass: "課程小組",
  technologies: "Next.js、TypeScript、Tailwind CSS 與 Railway",
  goal: "建立一個可展示、可部署且操作清楚的雲端應用程式",
  result: "完成一個具備互動介面與自動生成內容的網站",
};

function valueOrFallback(value: string, defaultValue: string) {
  return value.trim() || defaultValue;
}

function splitTechnologies(input: string) {
  return input
    .split(/[,，、\n]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function generateProjectIntro(data: ProjectFormData): GeneratedIntro {
  const projectName = valueOrFallback(data.projectName, fallback.projectName);
  const members = valueOrFallback(data.members, fallback.members);
  const departmentClass = valueOrFallback(
    data.departmentClass,
    fallback.departmentClass,
  );
  const technologies = valueOrFallback(data.technologies, fallback.technologies);
  const goal = valueOrFallback(data.goal, fallback.goal);
  const result = valueOrFallback(data.result, fallback.result);
  const techItems = splitTechnologies(technologies);

  const summary = `${projectName} 是由 ${departmentClass} 的 ${members} 製作的雲端應用專題。此專題以「${goal}」為核心目標，透過清楚的使用者介面與前端生成邏輯，將專題資訊轉換為適合期末展示的介紹內容。最終成果為：${result}。`;

  const highlights =
    techItems.length > 0
      ? techItems.map(
          (tech) =>
            `運用 ${tech} 建立專題功能，讓系統在操作體驗、畫面呈現與雲端部署上更完整。`,
        )
      : [
          "使用 Next.js App Router 建立穩定的前端頁面架構。",
          "使用 TypeScript 強化資料型別與程式維護性。",
          "使用 Tailwind CSS 完成響應式與現代化視覺設計。",
        ];

  const benefits = [
    "協助使用者快速整理專題內容，減少撰寫摘要與展示文字的時間。",
    "讓專題成果能以清楚的區塊呈現，提升期末報告時的說明效率。",
    "不依賴資料庫與 API Key，降低部署複雜度，也更適合課堂作業展示。",
  ];

  const deployment = `${projectName} 可先上傳至 GitHub，再透過 Railway 連接 Repository 進行自動部署。Railway 會安裝專案套件、執行 npm run build，並產生可公開瀏覽的網址，讓老師與同學能直接在線上操作此 Next.js App。`;

  return {
    summary,
    highlights,
    benefits,
    deployment,
  };
}
