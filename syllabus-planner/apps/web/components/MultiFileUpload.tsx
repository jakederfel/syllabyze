// apps/web/components/MultiFileUpload.tsx
"use client";
import { useState } from "react";
import { UploadCloud } from "lucide-react";

export default function MultiFileUpload({ onComplete }: { onComplete: (jobIds: string[]) => void }) {
  const [files, setFiles] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);

  const upload = async () => {
    if (!files) return;
    setLoading(true);
    const ids: string[] = [];
    for (const file of Array.from(files)) {
      const body = new FormData();
      body.append("syllabus", file);
      const res = await fetch("/api/upload", { method: "POST", body });
      ids.push((await res.json()).jobId);
    }
    onComplete(ids);
    setLoading(false);
  };

  return (
    <div className="rounded-2xl border border-dashed p-6 flex flex-col items-center gap-4">
      <input type="file" multiple accept=".pdf,.doc,.docx,.txt" onChange={e => setFiles(e.target.files)} />
      <button onClick={upload} disabled={!files || loading} className="btn">
        {loading ? "Uploading…" : <><UploadCloud className="mr-2" /> Upload Syllabi</>}
      </button>
    </div>
  );
}
