"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Filter, Info, MapPin, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function MapPage() {
  const [selectedCenter, setSelectedCenter] = useState<string | null>(null)

  const recyclingCenters = [
    {
      id: "centro-norte",
      name: "Centro de Reciclaje Norte",
      address: "Av. Principal #123, Zona Norte",
      distance: "1.2 km",
      rating: 4.5,
      hours: "9:00 AM - 6:00 PM",
      accepts: ["HDPE", "LDPE", "PP"],
      bonus: "10% extra en Eco Créditos",
    },
    {
      id: "eco-central",
      name: "EcoReciclaje Central",
      address: "Calle Secundaria #456, Centro",
      distance: "2.5 km",
      rating: 4.2,
      hours: "8:00 AM - 8:00 PM",
      accepts: ["HDPE", "PP"],
      bonus: "5% extra en Eco Créditos",
    },
    {
      id: "punto-verde",
      name: "Punto Verde Sur",
      address: "Av. Sur #789, Zona Sur",
      distance: "3.8 km",
      rating: 4.7,
      hours: "10:00 AM - 7:00 PM",
      accepts: ["HDPE", "LDPE", "PP"],
      bonus: "15% extra en Eco Créditos los martes",
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
        <h1 className="text-2xl font-bold">Centros de reciclaje</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar centros..." className="pl-9" />
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full flex items-center justify-between">
                <span>Filtrar</span>
                <Filter className="h-4 w-4 ml-2" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filtros</SheetTitle>
                <SheetDescription>Ajusta los filtros para encontrar centros de reciclaje</SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Distancia máxima</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">
                      Menos de 2 km
                    </Button>
                    <Button variant="outline" size="sm">
                      Menos de 5 km
                    </Button>
                    <Button variant="outline" size="sm">
                      Menos de 10 km
                    </Button>
                    <Button variant="outline" size="sm">
                      Cualquier distancia
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Tipos de plástico aceptados</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="hdpe" defaultChecked />
                      <Label htmlFor="hdpe">HDPE (#2)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="ldpe" defaultChecked />
                      <Label htmlFor="ldpe">LDPE (#4)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pp" defaultChecked />
                      <Label htmlFor="pp">PP (#5)</Label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Horario</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="open-now" />
                      <Label htmlFor="open-now">Abierto ahora</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="open-weekend" />
                      <Label htmlFor="open-weekend">Abierto en fin de semana</Label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Beneficios</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="bonus" />
                      <Label htmlFor="bonus">Con bonificación de Eco Créditos</Label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline">Limpiar filtros</Button>
                  <Button>Aplicar filtros</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <div className="space-y-3">
            {recyclingCenters.map((center) => (
              <Card
                key={center.id}
                className={`cursor-pointer transition-all ${selectedCenter === center.id ? "border-green-500 dark:border-green-700" : ""}`}
                onClick={() => setSelectedCenter(center.id)}
              >
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-base">{center.name}</CardTitle>
                  <CardDescription>
                    {center.distance} • {center.rating}{" "}
                    <Star className="h-3 w-3 inline-block fill-yellow-400 stroke-yellow-400" />
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-sm">
                  <p className="text-muted-foreground">{center.address}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {center.accepts.map((type) => (
                      <span
                        key={type}
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          type === "HDPE"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                            : type === "LDPE"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <Card className="h-full">
            <CardContent className="p-0 h-full">
              <div className="relative w-full h-[500px] md:h-full">
                <Image
                  src="/map.jpeg?height=600&width=800"
                  alt="Mapa de centros de reciclaje"
                  fill
                  className="object-cover"
                />

                {selectedCenter && (
                  <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm p-4 border-t">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg">
                          {recyclingCenters.find((c) => c.id === selectedCenter)?.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {recyclingCenters.find((c) => c.id === selectedCenter)?.address}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-sm font-medium">
                            {recyclingCenters.find((c) => c.id === selectedCenter)?.rating}
                          </span>
                          <Star className="h-3 w-3 fill-yellow-400 stroke-yellow-400" />
                          <span className="text-sm text-muted-foreground">
                            • {recyclingCenters.find((c) => c.id === selectedCenter)?.hours}
                          </span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <MapPin className="h-4 w-4 mr-1" /> Cómo llegar
                      </Button>
                    </div>

                    <div className="mt-3 flex items-start gap-2">
                      <Info className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        {recyclingCenters.find((c) => c.id === selectedCenter)?.bonus}
                      </p>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <Button variant="outline" size="sm">
                        Ver detalles
                      </Button>
                      <Button variant="outline" size="sm">
                        Ver fotos
                      </Button>
                      <Button variant="outline" size="sm">
                        Contactar
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

