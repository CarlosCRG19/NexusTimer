"use client";

import { usePreloadSettings } from "@/hooks/usePreloadSettings";
import { Navbar } from "./navbar";
import { useSettingsModalStore } from "@/store/SettingsModalStore";

export default function PreloadSettings({
  children,
}: {
  children: React.ReactNode;
}) {
  usePreloadSettings();
  const { settings } = useSettingsModalStore();
  const theme = settings ? settings.theme.background.color : "light";
  return (
    <>
      <div className={`${theme}`}>
        <div className="flex flex-col justify-between max-h-screen min-h-screen gap-2 select-none light:bg-neutral-50 light:text-zinc-950 dark:bg-zinc-950 dark:text-slate-50">
          {children}{" "}
          <>
            <Navbar />
          </>
        </div>
      </div>
    </>
  );
}
