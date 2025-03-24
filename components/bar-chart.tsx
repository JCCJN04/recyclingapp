"use client"
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { useTheme } from "next-themes"

export function BarChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const data = [
    { name: "Ene", HDPE: 0.8, LDPE: 0.5, PP: 0.3 },
    { name: "Feb", HDPE: 1.2, LDPE: 0.7, PP: 0.4 },
    { name: "Mar", HDPE: 0.9, LDPE: 0.6, PP: 0.2 },
    { name: "Abr", HDPE: 1.5, LDPE: 0.9, PP: 0.5 },
    { name: "May", HDPE: 1.0, LDPE: 0.8, PP: 0.3 },
    { name: "Jun", HDPE: 1.2, LDPE: 0.8, PP: 0.5 },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
        <XAxis dataKey="name" stroke={isDark ? "#888" : "#666"} />
        <YAxis stroke={isDark ? "#888" : "#666"} />
        <Tooltip
          contentStyle={{
            backgroundColor: isDark ? "#1f2937" : "#fff",
            borderColor: isDark ? "#374151" : "#e5e7eb",
            color: isDark ? "#e5e7eb" : "#374151",
          }}
        />
        <Legend />
        <Bar dataKey="HDPE" name="HDPE (#2)" fill="#3b82f6" />
        <Bar dataKey="LDPE" name="LDPE (#4)" fill="#22c55e" />
        <Bar dataKey="PP" name="PP (#5)" fill="#ef4444" />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}

