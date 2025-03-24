"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Download, Droplets, Leaf, Share2, ThumbsUp, Trees } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ImpactChart } from "@/components/impact-chart"
import { Badge } from "@/components/ui/badge"

export default function ImpactPage() {
  const [period, setPeriod] = useState("all")

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/dashboard">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Volver</span>
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Impacto ambiental</h1>
      </div>

      <div className="grid gap-6">
        <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 border-emerald-100 dark:border-emerald-900">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle>Tu contribución al planeta</CardTitle>
                <CardDescription>El impacto positivo de tu reciclaje</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Select defaultValue="all" onValueChange={setPeriod}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Seleccionar período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="month">Último mes</SelectItem>
                    <SelectItem value="quarter">Último trimestre</SelectItem>
                    <SelectItem value="year">Último año</SelectItem>
                    <SelectItem value="all">Todo el tiempo</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Compartir</span>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center justify-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-2">
                  <Trees className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-lg font-medium text-emerald-700 dark:text-emerald-300">CO₂ evitado</h3>
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 my-1">25.8 kg</div>
                <p className="text-sm text-emerald-600/80 dark:text-emerald-400/80 text-center">
                  Equivalente a plantar 2 árboles
                </p>
              </div>

              <div className="flex flex-col items-center justify-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-2">
                  <Droplets className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-blue-700 dark:text-blue-300">Agua ahorrada</h3>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 my-1">520 L</div>
                <p className="text-sm text-blue-600/80 dark:text-blue-400/80 text-center">
                  Suficiente para 8 personas por día
                </p>
              </div>

              <div className="flex flex-col items-center justify-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mb-2">
                  <Leaf className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-lg font-medium text-amber-700 dark:text-amber-300">Energía ahorrada</h3>
                <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 my-1">75 kWh</div>
                <p className="text-sm text-amber-600/80 dark:text-amber-400/80 text-center">
                  Equivalente a 25 días de luz en un hogar
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="outline" className="bg-white/50 dark:bg-black/20">
              <Download className="h-4 w-4 mr-2" />
              Descargar certificado de impacto
            </Button>
          </CardFooter>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Evolución de tu impacto</CardTitle>
              <CardDescription>Visualiza cómo ha crecido tu contribución</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="co2">
                <TabsList className="mb-4">
                  <TabsTrigger value="co2">CO₂ evitado</TabsTrigger>
                  <TabsTrigger value="water">Agua ahorrada</TabsTrigger>
                  <TabsTrigger value="energy">Energía ahorrada</TabsTrigger>
                </TabsList>

                <TabsContent value="co2" className="mt-0">
                  <div className="h-[300px]">
                    <ImpactChart metric="co2" />
                  </div>
                </TabsContent>

                <TabsContent value="water" className="mt-0">
                  <div className="h-[300px]">
                    <ImpactChart metric="water" />
                  </div>
                </TabsContent>

                <TabsContent value="energy" className="mt-0">
                  <div className="h-[300px]">
                    <ImpactChart metric="energy" />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Objetivos de impacto</CardTitle>
              <CardDescription>Tu progreso hacia metas ambientales</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Trees className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-medium">Reducir 50kg de CO₂</span>
                  </div>
                  <Badge variant="outline">52%</Badge>
                </div>
                <Progress value={52} className="h-2" />
                <p className="text-xs text-muted-foreground">25.8kg de 50kg</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span className="font-medium">Ahorrar 1000L de agua</span>
                  </div>
                  <Badge variant="outline">52%</Badge>
                </div>
                <Progress value={52} className="h-2" />
                <p className="text-xs text-muted-foreground">520L de 1000L</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    <span className="font-medium">Ahorrar 100kWh de energía</span>
                  </div>
                  <Badge variant="outline">75%</Badge>
                </div>
                <Progress value={75} className="h-2" />
                <p className="text-xs text-muted-foreground">75kWh de 100kWh</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Establecer nuevas metas
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Impacto por tipo de plástico</CardTitle>
            <CardDescription>Desglose del beneficio ambiental por material</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-blue-50 dark:bg-blue-950 border-blue-100 dark:border-blue-900">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-blue-700 dark:text-blue-300">HDPE (#2)</CardTitle>
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <span className="font-bold text-blue-700 dark:text-blue-300">2</span>
                    </div>
                  </div>
                  <CardDescription className="text-blue-600/80 dark:text-blue-400/80">
                    Polietileno de Alta Densidad
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-700 dark:text-blue-300">Petróleo ahorrado</span>
                      <span className="text-sm font-medium text-blue-700 dark:text-blue-300">25L</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm text-blue-700 dark:text-blue-300">Tiempo de descomposición evitado</span>
                      <span className="text-sm font-medium text-blue-700 dark:text-blue-300">450 años</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-600/80 dark:text-blue-400/80">
                      Al reciclar HDPE, has evitado que este plástico termine en vertederos o en el océano, donde
                      tardaría siglos en descomponerse.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 dark:bg-green-950 border-green-100 dark:border-green-900">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-green-700 dark:text-green-300">LDPE (#4)</CardTitle>
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <span className="font-bold text-green-700 dark:text-green-300">4</span>
                    </div>
                  </div>
                  <CardDescription className="text-green-600/80 dark:text-green-400/80">
                    Polietileno de Baja Densidad
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-green-700 dark:text-green-300">Contaminación marina evitada</span>
                      <span className="text-sm font-medium text-green-700 dark:text-green-300">3.0 m²</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm text-green-700 dark:text-green-300">Emisiones reducidas</span>
                      <span className="text-sm font-medium text-green-700 dark:text-green-300">12 kg CO₂</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-green-200 dark:border-green-800">
                    <p className="text-sm text-green-600/80 dark:text-green-400/80">
                      El LDPE reciclado reduce significativamente la contaminación de ecosistemas marinos y la emisión
                      de gases de efecto invernadero.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-50 dark:bg-red-950 border-red-100 dark:border-red-900">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-red-700 dark:text-red-300">PP (#5)</CardTitle>
                    <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                      <span className="font-bold text-red-700 dark:text-red-300">5</span>
                    </div>
                  </div>
                  <CardDescription className="text-red-600/80 dark:text-red-400/80">Polipropileno</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-red-700 dark:text-red-300">Petróleo ahorrado</span>
                      <span className="text-sm font-medium text-red-700 dark:text-red-300">8L</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm text-red-700 dark:text-red-300">Espacio en vertederos liberado</span>
                      <span className="text-sm font-medium text-red-700 dark:text-red-300">0.5 m³</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-red-200 dark:border-red-800">
                    <p className="text-sm text-red-600/80 dark:text-red-400/80">
                      El PP reciclado reduce la necesidad de extraer petróleo y libera espacio valioso en vertederos,
                      contribuyendo a un ambiente más limpio.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <ThumbsUp className="h-4 w-4 mr-2" />
              Compartir mi impacto
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Certificado de contribución ambiental</CardTitle>
            <CardDescription>Tu aporte al cuidado del planeta</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-6 border border-dashed rounded-lg flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-4">
                <Leaf className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certificado de Reciclador Activo</h3>
              <p className="text-muted-foreground mb-4">
                Este certificado reconoce a <span className="font-medium">Carlos Rodríguez</span> por su valiosa
                contribución al medio ambiente a través del reciclaje responsable de plásticos.
              </p>
              <div className="grid gap-2 md:grid-cols-3 w-full max-w-2xl mb-4">
                <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                  <span className="text-sm text-muted-foreground">CO₂ evitado</span>
                  <span className="font-bold">25.8 kg</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                  <span className="text-sm text-muted-foreground">Plástico reciclado</span>
                  <span className="font-bold">8.5 kg</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                  <span className="text-sm text-muted-foreground">Nivel alcanzado</span>
                  <span className="font-bold">Intermedio</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Certificado emitido el {new Date().toLocaleDateString()} • ID: ECO-2023-CR-12345
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Descargar PDF
            </Button>
            <Button variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              Compartir
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

