"use client";

import { useMemo, useState } from "react";
import { GeneratedResult } from "@/components/GeneratedResult";
import { ProjectForm } from "@/components/ProjectForm";
import { generateProjectIntro } from "@/lib/generateProjectIntro";
import type { GeneratedIntro, ProjectFormData } from "@/types/project";

const initialFormData: ProjectFormData = {
  projectName: "AI 雲端專題介紹生成器",
  members: "龔孟謙",
  departmentClass: "國立勤益科技大學 智慧自動化工程系 四智三丙",
  technologies: "Next.js, TypeScript, Tailwind CSS, Railway, GitHub",
  goal: "建立一個不需要資料庫與 API Key 的雲端應用，讓使用者能快速產生期末專題介紹內容。",
  result:
    "完成可輸入資料、模擬 AI 生成介紹、響應式畫面設計，並可上傳 GitHub 與部署 Railway 的 Next.js App。",
};

const author = [
  ["學校", "國立勤益科技大學"],
  ["系所", "智慧自動化工程系"],
  ["班級", "四智三丙"],
  ["姓名", "龔孟謙"],
  ["學號", "3B261084"],
];

const projectLinks = [
  {
    label: "GitHub 原始碼",
    href: "https://github.com/kungmengchien0814/ai-cloud-project-generator",
    description: "查看本專案的 Next.js 原始碼、README 與版本紀錄。",
  },
  {
    label: "Railway 公開網站",
    href: "https://ai-cloud-project-generator-production.up.railway.app",
    description: "開啟已部署到雲端平台的公開展示網站。",
  },
  {
    label: "個人資料網站",
    href: "https://kungmengchien.uk",
    description: "查看個人介紹、作品整理與相關學習成果。",
  },
  {
    label: "AEM 電解槽專題網站",
    href: "https://aem-mobile-demo.pages.dev",
    description: "查看 AEM 電解槽最佳化互動展示平台的雲端展示成果。",
  },
];

const completionStatus = [
  "GitHub 已上傳",
  "Railway 已部署",
  "公開網址可瀏覽",
  "Next.js 專案",
  "不需要 API Key",
  "Build 已通過",
];

export default function Home() {
  const [formData, setFormData] = useState<ProjectFormData>(initialFormData);
  const [generated, setGenerated] = useState<GeneratedIntro | null>(null);

  const filledCount = useMemo(
    () => Object.values(formData).filter((value) => value.trim()).length,
    [formData],
  );

  function handleChange(field: keyof ProjectFormData, value: string) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  function handleGenerate() {
    setGenerated(generateProjectIntro(formData));
  }

  function handleClear() {
    setFormData({
      projectName: "",
      members: "",
      departmentClass: "",
      technologies: "",
      goal: "",
      result: "",
    });
    setGenerated(null);
  }

  return (
    <main className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="grid gap-6 py-8 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
          <div>
            <p className="text-sm font-bold text-coral">
              Next.js Cloud Final Project
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl">
              AI 雲端專題介紹生成器
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
              輸入專題資料，快速產生適合期末展示的摘要、技術亮點、預期效益與雲端部署說明。
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-600">
              國立勤益科技大學｜智慧自動化工程系｜四智三丙｜龔孟謙
            </p>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-white/85 p-5 shadow-sm">
            <p className="text-sm font-bold text-mint">作業資訊</p>
            <dl className="mt-4 grid grid-cols-1 gap-3 text-sm">
              {author.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4">
                  <dt className="text-slate-500">{label}</dt>
                  <dd className="font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </header>

        <section className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white/80 p-4">
            <p className="text-2xl font-black text-ink">{filledCount}/6</p>
            <p className="mt-1 text-sm text-slate-600">已填寫欄位</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white/80 p-4">
            <p className="text-2xl font-black text-ink">0</p>
            <p className="mt-1 text-sm text-slate-600">API Key 需求</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white/80 p-4">
            <p className="text-2xl font-black text-ink">Railway</p>
            <p className="mt-1 text-sm text-slate-600">雲端部署平台</p>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <ProjectForm
            formData={formData}
            onChange={handleChange}
            onGenerate={handleGenerate}
            onClear={handleClear}
          />
          <GeneratedResult result={generated} />
        </div>

        <section className="mt-10 rounded-lg border border-slate-200 bg-white/85 p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold text-coral">Project Links</p>
              <h2 className="mt-2 text-2xl font-bold text-ink">專案連結</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-600">
              本專案已上傳至 GitHub，並透過 Railway 完成雲端部署，也整理了個人網站與其他專題展示成果。
            </p>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {projectLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-mint hover:bg-white hover:shadow-sm"
              >
                <p className="text-sm font-bold text-ink">{link.label}</p>
                <p className="mt-2 break-all text-sm font-semibold text-mint">
                  {link.href}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-lg border border-slate-200 bg-white/85 p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold text-mint">Final Checklist</p>
              <h2 className="mt-2 text-2xl font-bold text-ink">
                作業完成狀態
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              以下項目對應期末作業要求，方便展示時快速說明完成內容。
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {completionStatus.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint text-sm font-black text-white">
                  ✓
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-10 rounded-lg border border-slate-200 bg-white/80 p-5 text-sm leading-7 text-slate-700">
          <p className="font-bold text-ink">作者資訊</p>
          <p className="mt-2">
            國立勤益科技大學｜智慧自動化工程系｜四智三丙｜龔孟謙｜學號
            3B261084
          </p>
          <p className="mt-2">
            本專案使用 Next.js、TypeScript 與 Tailwind CSS 製作，已上傳至
            GitHub，並部署至 Railway 產生公開網址。
          </p>
        </footer>
      </div>
    </main>
  );
}
