"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Download, Filter, Recycle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart } from "@/components/bar-chart"
import { CalendarHeatmap } from "@/components/calendar-heatmap"

export default function HistoryPage() {
  const [period, setPeriod] = useState("month")

  const recyclingHistory = [
    {
      id: "rec-001",
      date: "2023-06-15T10:30:00",
      type: "HDPE",
      weight: 1.2,
      credits: 60,
      center: "Centro de Reciclaje Norte",
    },
    {
      id: "rec-002",
      date: "2023-06-14T15:45:00",
      type: "LDPE",
      weight: 0.8,
      credits: 40,
      center: "Centro de Reciclaje Norte",
    },
    {
      id: "rec-003",
      date: "2023-06-12T11:20:00",
      type: "PP",
      weight: 0.5,
      credits: 25,
      center: "EcoReciclaje Central",
    },
    {
      id: "rec-004",
      date: "2023-06-08T09:15:00",
      type: "HDPE",
      weight: 2.0,
      credits: 100,
      center: "Punto Verde Sur",
    },
    {
      id: "rec-005",
      date: "2023-06-05T14:30:00",
      type: "LDPE",
      weight: 1.5,
      credits: 75,
      center: "Centro de Reciclaje Norte",
    },
    {
      id: "rec-006",
      date: "2023-06-01T16:45:00",
      type: "PP",
      weight: 1.0,
      credits: 50,
      center: "EcoReciclaje Central",
    },
    {
      id: "rec-007",
      date: "2023-05-28T10:20:00",
      type: "HDPE",
      weight: 1.8,
      credits: 90,
      center: "Centro de Reciclaje Norte",
    },
    {
      id: "rec-008",
      date: "2023-05-25T13:10:00",
      type: "LDPE",
      weight: 0.7,
      credits: 35,
      center: "Punto Verde Sur",
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/dashboard">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Volver</span>
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Historial de reciclaje</h1>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle>Resumen de actividad</CardTitle>
                <CardDescription>Visualiza tu progreso de reciclaje</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Select defaultValue="month" onValueChange={setPeriod}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Seleccionar período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">Última semana</SelectItem>
                    <SelectItem value="month">Último mes</SelectItem>
                    <SelectItem value="quarter">Último trimestre</SelectItem>
                    <SelectItem value="year">Último año</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Descargar reporte</span>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="chart">
              <TabsList className="mb-4">
                <TabsTrigger value="chart">Gráfico</TabsTrigger>
                <TabsTrigger value="calendar">Calendario</TabsTrigger>
              </TabsList>

              <TabsContent value="chart" className="mt-0">
                <div className="h-[300px]">
                  <BarChart />
                </div>
              </TabsContent>

              <TabsContent value="calendar" className="mt-0">
                <div className="h-[300px]">
                  <CalendarHeatmap />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle>Actividades de reciclaje</CardTitle>
                <CardDescription>Registro detallado de tus reciclajes</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Filter className="h-4 w-4" />
                  Filtrar
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Calendar className="h-4 w-4" />
                  Fechas
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Material</TableHead>
                    <TableHead className="text-right">Peso (kg)</TableHead>
                    <TableHead className="text-right">Créditos</TableHead>
                    <TableHead className="hidden md:table-cell">Centro</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recyclingHistory.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{formatDate(item.date)}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            item.type === "HDPE"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-blue-900 dark:hover:text-blue-300"
                              : item.type === "LDPE"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 hover:bg-green-100 hover:text-green-800 dark:hover:bg-green-900 dark:hover:text-green-300"
                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 hover:bg-red-100 hover:text-red-800 dark:hover:bg-red-900 dark:hover:text-red-300"
                          }
                        >
                          {item.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">{item.weight.toFixed(1)}</TableCell>
                      <TableCell className="text-right font-medium text-green-600 dark:text-green-400">
                        +{item.credits}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{item.center}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-sm text-muted-foreground">Mostrando 8 de 24 registros</div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Anterior
              </Button>
              <Button variant="outline" size="sm">
                Siguiente
              </Button>
            </div>
          </CardFooter>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Total reciclado</CardTitle>
              <CardDescription>Último mes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">8.5 kg</div>
              <p className="text-xs text-muted-foreground mt-1">+15% respecto al mes anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Créditos ganados</CardTitle>
              <CardDescription>Último mes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">475</div>
              <p className="text-xs text-muted-foreground mt-1">+20% respecto al mes anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Visitas a centros</CardTitle>
              <CardDescription>Último mes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">6</div>
              <p className="text-xs text-muted-foreground mt-1">+2 respecto al mes anterior</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Comparativa por tipo de plástico</CardTitle>
            <CardDescription>Distribución de tu reciclaje por material</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center justify-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-2">
                  <Recycle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-blue-700 dark:text-blue-300">HDPE (#2)</h3>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 my-1">5.0 kg</div>
                <p className="text-sm text-blue-600/80 dark:text-blue-400/80 text-center">59% del total reciclado</p>
              </div>

              <div className="flex flex-col items-center justify-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-2">
                  <Recycle className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-medium text-green-700 dark:text-green-300">LDPE (#4)</h3>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 my-1">3.0 kg</div>
                <p className="text-sm text-green-600/80 dark:text-green-400/80 text-center">35% del total reciclado</p>
              </div>

              <div className="flex flex-col items-center justify-center p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mb-2">
                  <Recycle className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-lg font-medium text-red-700 dark:text-red-300">PP (#5)</h3>
                <div className="text-2xl font-bold text-red-600 dark:text-red-400 my-1">0.5 kg</div>
                <p className="text-sm text-red-600/80 dark:text-red-400/80 text-center">6% del total reciclado</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Ver análisis detallado
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

