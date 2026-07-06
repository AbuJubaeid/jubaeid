import { mono } from "@/lib/fonts";

export default function SectionLabel({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div
      className={`${mono.className} mb-10 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground`}
    >
      <span className="text-primary">{index}</span>
      <span className="h-px w-10 bg-border" />
      <span>{label}</span>
    </div>
  );
}
