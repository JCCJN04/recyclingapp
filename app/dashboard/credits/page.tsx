"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CreditCard, Filter, Gift, History, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function CreditsPage() {
  const [selectedReward, setSelectedReward] = useState<string | null>(null)

  const rewards = [
    {
      id: "gas-discount",
      title: "Descuento en gasolina",
      description: "10% de descuento en estaciones asociadas",
      credits: 500,
      category: "transport",
      image: "/placeholder.svg?height=120&width=240",
      expiry: "30 días",
    },
    {
      id: "transport-ticket",
      title: "Viaje en transporte",
      description: "2 viajes gratis en metro y autobuses",
      credits: 300,
      category: "transport",
      image: "/placeholder.svg?height=120&width=240",
      expiry: "60 días",
    },
    {
      id: "electricity-discount",
      title: "Descuento en luz",
      description: "5% de descuento en tu próxima factura",
      credits: 800,
      category: "utilities",
      image: "/placeholder.svg?height=120&width=240",
      expiry: "45 días",
    },
    {
      id: "grocery-discount",
      title: "Descuento en supermercado",
      description: "8% de descuento en productos seleccionados",
      credits: 400,
      category: "shopping",
      image: "/placeholder.svg?height=120&width=240",
      expiry: "30 días",
    },
    {
      id: "movie-ticket",
      title: "Entrada al cine",
      description: "Una entrada gratis para cualquier película",
      credits: 600,
      category: "entertainment",
      image: "/placeholder.svg?height=120&width=240",
      expiry: "60 días",
    },
    {
      id: "coffee-discount",
      title: "Café gratis",
      description: "Un café gratis en cafeterías asociadas",
      credits: 200,
      category: "food",
      image: "/placeholder.svg?height=120&width=240",
      expiry: "30 días",
    },
  ]

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/dashboard">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Volver</span>
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Eco Créditos</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1 space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Tus Eco Créditos</CardTitle>
              <CardDescription>Acumulados por reciclar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold">1,250</div>
                <CreditCard className="h-8 w-8 text-green-600" />
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Nivel Intermedio</span>
                  <span className="text-sm font-medium">Nivel Experto</span>
                </div>
                <Progress value={75} className="h-2" />
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-muted-foreground">750/1000</span>
                  <span className="text-xs text-muted-foreground">75%</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/dashboard/history">
                  <History className="h-4 w-4 mr-2" />
                  Ver historial de créditos
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Insignias</CardTitle>
              <CardDescription>Logros por reciclar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-1">
                    <span className="font-bold text-blue-700 dark:text-blue-300">2</span>
                  </div>
                  <span className="text-xs text-center">Maestro HDPE</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-1">
                    <span className="font-bold text-green-700 dark:text-green-300">4</span>
                  </div>
                  <span className="text-xs text-center">Experto LDPE</span>
                </div>
                <div className="flex flex-col items-center opacity-40">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mb-1">
                    <span className="font-bold text-red-700 dark:text-red-300">5</span>
                  </div>
                  <span className="text-xs text-center">Novato PP</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-1">
                    <Star className="h-6 w-6 text-purple-700 dark:text-purple-300" />
                  </div>
                  <span className="text-xs text-center">Constante</span>
                </div>
                <div className="flex flex-col items-center opacity-40">
                  <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mb-1">
                    <Gift className="h-6 w-6 text-amber-700 dark:text-amber-300" />
                  </div>
                  <span className="text-xs text-center">Generoso</span>
                </div>
                <div className="flex flex-col items-center opacity-40">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-1">
                    <span className="text-2xl">+</span>
                  </div>
                  <span className="text-xs text-center">Más</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Desglose por tipo</CardTitle>
              <CardDescription>Créditos ganados por material</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2" />
                    <span className="text-sm font-medium">HDPE (#2)</span>
                  </div>
                  <span className="text-sm">625 créditos</span>
                </div>
                <Progress value={50} className="h-2 bg-blue-100 dark:bg-blue-900" indicatorClassName="bg-blue-500" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
                    <span className="text-sm font-medium">LDPE (#4)</span>
                  </div>
                  <span className="text-sm">410 créditos</span>
                </div>
                <Progress value={33} className="h-2 bg-green-100 dark:bg-green-900" indicatorClassName="bg-green-500" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
                    <span className="text-sm font-medium">PP (#5)</span>
                  </div>
                  <span className="text-sm">215 créditos</span>
                </div>
                <Progress value={17} className="h-2 bg-red-100 dark:bg-red-900" indicatorClassName="bg-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Canje de Eco Créditos</CardTitle>
              <CardDescription>Convierte tus créditos en beneficios reales</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Buscar recompensas..."
                    className="pl-9 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-[200px] md:w-[300px]"
                  />
                </div>
                <Button variant="outline" size="sm" className="gap-1">
                  <Filter className="h-4 w-4" />
                  Filtrar
                </Button>
              </div>

              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">Todos</TabsTrigger>
                  <TabsTrigger value="transport">Transporte</TabsTrigger>
                  <TabsTrigger value="utilities">Servicios</TabsTrigger>
                  <TabsTrigger value="shopping">Compras</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-0">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {rewards.map((reward) => (
                      <Dialog key={reward.id}>
                        <DialogTrigger asChild>
                          <Card className="cursor-pointer hover:border-green-200 dark:hover:border-green-800 transition-colors">
                            <CardHeader className="p-4 pb-2">
                              <CardTitle className="text-base">{reward.title}</CardTitle>
                              <CardDescription>{reward.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                              <Image
                                src={reward.image || "/placeholder.svg"}
                                width={240}
                                height={120}
                                alt={reward.title}
                                className="rounded-md object-cover mb-2 w-full"
                              />
                              <div className="flex items-center justify-between">
                                <Badge variant="outline" className="font-normal">
                                  Expira en {reward.expiry}
                                </Badge>
                                <span className="font-medium text-green-600">{reward.credits} créditos</span>
                              </div>
                            </CardContent>
                          </Card>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{reward.title}</DialogTitle>
                            <DialogDescription>{reward.description}</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <Image
                              src={reward.image || "/placeholder.svg"}
                              width={400}
                              height={200}
                              alt={reward.title}
                              className="rounded-md object-cover w-full"
                            />

                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Categoría:</span>
                                <span className="text-sm font-medium">
                                  {reward.category === "transport"
                                    ? "Transporte"
                                    : reward.category === "utilities"
                                      ? "Servicios"
                                      : reward.category === "shopping"
                                        ? "Compras"
                                        : reward.category === "entertainment"
                                          ? "Entretenimiento"
                                          : reward.category === "food"
                                            ? "Alimentación"
                                            : "Otro"}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Costo:</span>
                                <span className="text-sm font-medium text-green-600">{reward.credits} créditos</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Validez:</span>
                                <span className="text-sm font-medium">{reward.expiry} desde el canje</span>
                              </div>
                            </div>

                            <div className="bg-muted p-3 rounded-md text-sm">
                              <p className="font-medium mb-1">Términos y condiciones:</p>
                              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Válido solo en establecimientos participantes</li>
                                <li>No acumulable con otras promociones</li>
                                <li>No reembolsable ni transferible</li>
                                <li>Sujeto a disponibilidad</li>
                              </ul>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button variant="outline">Cancelar</Button>
                            <Button className="bg-green-600 hover:bg-green-700">
                              Canjear por {reward.credits} créditos
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="transport" className="mt-0">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {rewards
                      .filter((reward) => reward.category === "transport")
                      .map((reward) => (
                        <Card
                          key={reward.id}
                          className="cursor-pointer hover:border-green-200 dark:hover:border-green-800 transition-colors"
                        >
                          <CardHeader className="p-4 pb-2">
                            <CardTitle className="text-base">{reward.title}</CardTitle>
                            <CardDescription>{reward.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <Image
                              src={reward.image || "/placeholder.svg"}
                              width={240}
                              height={120}
                              alt={reward.title}
                              className="rounded-md object-cover mb-2 w-full"
                            />
                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className="font-normal">
                                Expira en {reward.expiry}
                              </Badge>
                              <span className="font-medium text-green-600">{reward.credits} créditos</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="utilities" className="mt-0">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {rewards
                      .filter((reward) => reward.category === "utilities")
                      .map((reward) => (
                        <Card
                          key={reward.id}
                          className="cursor-pointer hover:border-green-200 dark:hover:border-green-800 transition-colors"
                        >
                          <CardHeader className="p-4 pb-2">
                            <CardTitle className="text-base">{reward.title}</CardTitle>
                            <CardDescription>{reward.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <Image
                              src={reward.image || "/placeholder.svg"}
                              width={240}
                              height={120}
                              alt={reward.title}
                              className="rounded-md object-cover mb-2 w-full"
                            />
                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className="font-normal">
                                Expira en {reward.expiry}
                              </Badge>
                              <span className="font-medium text-green-600">{reward.credits} créditos</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="shopping" className="mt-0">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {rewards
                      .filter((reward) => reward.category === "shopping")
                      .map((reward) => (
                        <Card
                          key={reward.id}
                          className="cursor-pointer hover:border-green-200 dark:hover:border-green-800 transition-colors"
                        >
                          <CardHeader className="p-4 pb-2">
                            <CardTitle className="text-base">{reward.title}</CardTitle>
                            <CardDescription>{reward.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <Image
                              src={reward.image || "/placeholder.svg"}
                              width={240}
                              height={120}
                              alt={reward.title}
                              className="rounded-md object-cover mb-2 w-full"
                            />
                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className="font-normal">
                                Expira en {reward.expiry}
                              </Badge>
                              <span className="font-medium text-green-600">{reward.credits} créditos</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline">Cargar más recompensas</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

