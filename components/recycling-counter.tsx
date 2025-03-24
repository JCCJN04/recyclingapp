"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function RecyclingCounter() {
  const [count, setCount] = useState({
    total: 0,
    hdpe: 0,
    ldpe: 0,
    pp: 0,
  })

  useEffect(() => {
    // Simulate counter starting from base values
    const baseValues = {
      total: 12500,
      hdpe: 5200,
      ldpe: 3800,
      pp: 3500,
    }

    setCount(baseValues)

    // Increment counters periodically to simulate real-time recycling
    const interval = setInterval(() => {
      setCount((prev) => ({
        total: prev.total + Math.floor(Math.random() * 3),
        hdpe: prev.hdpe + (Math.random() > 0.7 ? 1 : 0),
        ldpe: prev.ldpe + (Math.random() > 0.7 ? 1 : 0),
        pp: prev.pp + (Math.random() > 0.7 ? 1 : 0),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-800 border-emerald-200 dark:border-emerald-700">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-medium text-emerald-800 dark:text-emerald-300 mb-2">Total reciclado</h3>
            <p className="text-4xl font-bold text-emerald-700 dark:text-emerald-200">
              {count.total.toLocaleString()} kg
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 border-blue-200 dark:border-blue-700">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">HDPE (#2)</h3>
            <p className="text-4xl font-bold text-blue-700 dark:text-blue-200">{count.hdpe.toLocaleString()} kg</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 border-green-200 dark:border-green-700">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-medium text-green-800 dark:text-green-300 mb-2">LDPE (#4)</h3>
            <p className="text-4xl font-bold text-green-700 dark:text-green-200">{count.ldpe.toLocaleString()} kg</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900 dark:to-red-800 border-red-200 dark:border-red-700">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-medium text-red-800 dark:text-red-300 mb-2">PP (#5)</h3>
            <p className="text-4xl font-bold text-red-700 dark:text-red-200">{count.pp.toLocaleString()} kg</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

