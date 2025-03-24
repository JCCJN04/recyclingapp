"use client"

import { useTheme } from "next-themes"

export function CalendarHeatmap() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // This is a simplified visualization component
  // In a real application, you would use a library like react-calendar-heatmap

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="grid grid-cols-7 gap-1 w-full max-w-3xl">
        {Array.from({ length: 35 }).map((_, i) => {
          // Generate random intensity for demo purposes
          const intensity = Math.floor(Math.random() * 5)

          return (
            <div
              key={i}
              className={`aspect-square rounded-sm ${
                intensity === 0
                  ? "bg-muted"
                  : intensity === 1
                    ? "bg-emerald-100 dark:bg-emerald-900/30"
                    : intensity === 2
                      ? "bg-emerald-200 dark:bg-emerald-900/50"
                      : intensity === 3
                        ? "bg-emerald-300 dark:bg-emerald-900/70"
                        : "bg-emerald-400 dark:bg-emerald-900"
              }`}
              title={`${intensity} kg de plástico reciclado`}
            />
          )
        })}
      </div>
      <div className="flex items-center gap-2 mt-4">
        <span className="text-xs text-muted-foreground">Menos</span>
        <div className="w-4 h-4 bg-muted rounded-sm"></div>
        <div className="w-4 h-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-sm"></div>
        <div className="w-4 h-4 bg-emerald-200 dark:bg-emerald-900/50 rounded-sm"></div>
        <div className="w-4 h-4 bg-emerald-300 dark:bg-emerald-900/70 rounded-sm"></div>
        <div className="w-4 h-4 bg-emerald-400 dark:bg-emerald-900 rounded-sm"></div>
        <span className="text-xs text-muted-foreground">Más</span>
      </div>
    </div>
  )
}

