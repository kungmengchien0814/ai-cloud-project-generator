import type { ProjectFormData } from "@/types/project";

type ProjectFormProps = {
  formData: ProjectFormData;
  onChange: (field: keyof ProjectFormData, value: string) => void;
  onGenerate: () => void;
  onClear: () => void;
};

const fields: Array<{
  key: keyof ProjectFormData;
  label: string;
  placeholder: string;
  textarea?: boolean;
}> = [
  {
    key: "projectName",
    label: "專題名稱",
    placeholder: "例如：AI 雲端專題介紹生成器",
  },
  {
    key: "members",
    label: "組員姓名",
    placeholder: "例如：龔孟謙",
  },
  {
    key: "departmentClass",
    label: "系所班級",
    placeholder: "例如：智慧自動化工程系 四至三丙",
  },
  {
    key: "technologies",
    label: "使用技術",
    placeholder: "例如：Next.js, TypeScript, Tailwind CSS, Railway",
  },
  {
    key: "goal",
    label: "專題目標",
    placeholder: "請描述此專題想解決的問題或達成的目標",
    textarea: true,
  },
  {
    key: "result",
    label: "成果說明",
    placeholder: "請描述目前完成的功能、畫面或部署成果",
    textarea: true,
  },
];

export function ProjectForm({
  formData,
  onChange,
  onGenerate,
  onClear,
}: ProjectFormProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
      <div className="mb-6">
        <p className="text-sm font-semibold text-coral">輸入資料</p>
        <h2 className="mt-2 text-2xl font-bold text-ink">建立你的專題介紹</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          填入期末作業資訊後，按下按鈕即可產生可展示的介紹內容。
        </p>
      </div>

      <div className="space-y-4">
        {fields.map((field) => (
          <label key={field.key} className="block">
            <span className="text-sm font-semibold text-slate-700">
              {field.label}
            </span>
            {field.textarea ? (
              <textarea
                value={formData[field.key]}
                onChange={(event) => onChange(field.key, event.target.value)}
                placeholder={field.placeholder}
                rows={4}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-ink outline-none transition focus:border-mint focus:bg-white focus:ring-4 focus:ring-mint/15"
              />
            ) : (
              <input
                value={formData[field.key]}
                onChange={(event) => onChange(field.key, event.target.value)}
                placeholder={field.placeholder}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-ink outline-none transition focus:border-mint focus:bg-white focus:ring-4 focus:ring-mint/15"
              />
            )}
          </label>
        ))}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
        <button
          type="button"
          onClick={onGenerate}
          className="rounded-lg bg-ink px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-ink/20"
        >
          生成專題介紹
        </button>
        <button
          type="button"
          onClick={onClear}
          className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-coral hover:text-coral focus:outline-none focus:ring-4 focus:ring-coral/15"
        >
          清除內容
        </button>
      </div>
    </section>
  );
}
