"use client";

import { useMemo, useState } from "react";
import { SectionCard } from "@/components/SectionCard";
import type { GeneratedIntro } from "@/types/project";

type GeneratedResultProps = {
  result: GeneratedIntro | null;
};

function formatGeneratedText(result: GeneratedIntro) {
  return [
    "專題摘要",
    result.summary,
    "",
    "技術亮點",
    ...result.highlights.map((item, index) => `${index + 1}. ${item}`),
    "",
    "預期效益",
    ...result.benefits.map((item, index) => `${index + 1}. ${item}`),
    "",
    "雲端部署說明",
    result.deployment,
  ].join("\n");
}

export function GeneratedResult({ result }: GeneratedResultProps) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">(
    "idle",
  );

  const generatedText = useMemo(
    () => (result ? formatGeneratedText(result) : ""),
    [result],
  );

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(generatedText);
      setCopyStatus("copied");
      window.setTimeout(() => setCopyStatus("idle"), 2000);
    } catch {
      setCopyStatus("failed");
      window.setTimeout(() => setCopyStatus("idle"), 2000);
    }
  }

  if (!result) {
    return (
      <aside className="flex min-h-[28rem] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white/70 p-8 text-center shadow-sm">
        <div>
          <p className="text-sm font-semibold text-mint">等待生成</p>
          <h2 className="mt-3 text-2xl font-bold text-ink">
            輸入專題資料後，這裡會產生展示內容
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            系統會用前端邏輯模擬 AI，整理出專題摘要、技術亮點、預期效益與雲端部署說明。
          </p>
        </div>
      </aside>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 rounded-lg border border-mint/30 bg-mint/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-mint">已生成專題介紹</p>
          <p className="mt-1 text-sm text-slate-700">
            以下內容可作為期末展示、README 或簡報摘要的基礎。
          </p>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-lg bg-ink px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-ink/20"
        >
          {copyStatus === "copied"
            ? "已複製"
            : copyStatus === "failed"
              ? "複製失敗"
              : "複製內容"}
        </button>
      </div>

      <SectionCard eyebrow="Summary" title="專題摘要">
        <p>{result.summary}</p>
      </SectionCard>

      <SectionCard eyebrow="Technology" title="技術亮點">
        <ul className="list-disc space-y-2 pl-5">
          {result.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard eyebrow="Value" title="預期效益">
        <ul className="list-disc space-y-2 pl-5">
          {result.benefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard eyebrow="Cloud" title="雲端部署說明">
        <p>{result.deployment}</p>
      </SectionCard>
    </div>
  );
}
