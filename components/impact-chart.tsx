"use client"

import { useTheme } from "next-themes"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

interface ImpactChartProps {
  metric: "co2" | "water" | "energy"
}

export function ImpactChart({ metric }: ImpactChartProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const data = [
    { name: "Ene", value: 2.1 },
    { name: "Feb", value: 3.5 },
    { name: "Mar", value: 2.8 },
    { name: "Abr", value: 4.2 },
    { name: "May", value: 5.1 },
    { name: "Jun", value: 8.1 },
  ]

  const getMetricColor = () => {
    switch (metric) {
      case "co2":
        return "#10b981" // emerald-500
      case "water":
        return "#3b82f6" // blue-500
      case "energy":
        return "#f59e0b" // amber-500
      default:
        return "#10b981"
    }
  }

  const getMetricName = () => {
    switch (metric) {
      case "co2":
        return "CO₂ evitado (kg)"
      case "water":
        return "Agua ahorrada (L)"
      case "energy":
        return "Energía ahorrada (kWh)"
      default:
        return "Valor"
    }
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
        <XAxis dataKey="name" stroke={isDark ? "#888" : "#666"} />
        <YAxis stroke={isDark ? "#888" : "#666"} />
        <Tooltip
          contentStyle={{
            backgroundColor: isDark ? "#1f2937" : "#fff",
            borderColor: isDark ? "#374151" : "#e5e7eb",
            color: isDark ? "#e5e7eb" : "#374151",
          }}
          formatter={(value: number) => [
            `${value} ${metric === "co2" ? "kg" : metric === "water" ? "L" : "kWh"}`,
            getMetricName(),
          ]}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          name={getMetricName()}
          stroke={getMetricColor()}
          strokeWidth={2}
          dot={{ fill: getMetricColor(), r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

