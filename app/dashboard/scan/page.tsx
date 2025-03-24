"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Camera, Check, Info, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"

export default function ScanPage() {
  const [selectedPlastic, setSelectedPlastic] = useState("hdpe")
  const [weight, setWeight] = useState(1)
  const [scanMethod, setScanMethod] = useState("photo")
  const [scanComplete, setScanComplete] = useState(false)

  const handleScan = () => {
    // Simulate scanning process
    setTimeout(() => {
      setScanComplete(true)
    }, 1500)
  }

  const getCreditsValue = () => {
    const creditsPerKg = {
      hdpe: 50,
      ldpe: 40,
      pp: 45,
    }
    return Math.round(weight * creditsPerKg[selectedPlastic as keyof typeof creditsPerKg])
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/dashboard">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Volver</span>
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Escanear reciclaje</h1>
      </div>

      {!scanComplete ? (
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Selecciona el tipo de plástico</CardTitle>
              <CardDescription>Elige el tipo de plástico que vas a reciclar</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="hdpe" value={selectedPlastic} onValueChange={setSelectedPlastic} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="hdpe" className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    HDPE (#2)
                  </TabsTrigger>
                  <TabsTrigger value="ldpe" className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    LDPE (#4)
                  </TabsTrigger>
                  <TabsTrigger value="pp" className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    PP (#5)
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="hdpe" className="mt-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Ejemplos comunes:</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Botellas de leche y yogurt</li>
                        <li>Envases de detergente y champú</li>
                        <li>Botellas de jugo</li>
                        <li>Bolsas de supermercado rígidas</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Preparación:</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Enjuagar para eliminar residuos</li>
                        <li>Quitar etiquetas cuando sea posible</li>
                        <li>Aplastar para reducir volumen</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="ldpe" className="mt-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Ejemplos comunes:</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Bolsas de plástico flexibles</li>
                        <li>Envolturas de alimentos</li>
                        <li>Bolsas para pan y congelados</li>
                        <li>Tapas flexibles</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Preparación:</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Limpiar de residuos de alimentos</li>
                        <li>Secar completamente</li>
                        <li>Agrupar varias bolsas juntas</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="pp" className="mt-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Ejemplos comunes:</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Contenedores de alimentos</li>
                        <li>Tapas de botellas</li>
                        <li>Pajitas/popotes</li>
                        <li>Envases de yogurt</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Preparación:</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Enjuagar para eliminar residuos</li>
                        <li>Separar tapas de los envases</li>
                        <li>Quitar etiquetas cuando sea posible</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Método de registro</CardTitle>
              <CardDescription>Elige cómo quieres registrar tu reciclaje</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                defaultValue="photo"
                value={scanMethod}
                onValueChange={setScanMethod}
                className="grid gap-4 md:grid-cols-3"
              >
                <div>
                  <RadioGroupItem value="photo" id="photo" className="peer sr-only" />
                  <Label
                    htmlFor="photo"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Camera className="mb-3 h-6 w-6" />
                    <div className="text-center">
                      <p className="font-medium">Foto del plástico</p>
                      <p className="text-sm text-muted-foreground">Toma una foto del plástico para identificarlo</p>
                    </div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="qr" id="qr" className="peer sr-only" />
                  <Label
                    htmlFor="qr"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <svg className="mb-3 h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="14" height="14" x="5" y="5" rx="1" />
                      <path d="M8 8h.01M16 8h.01M8 16h.01M16 16h.01M12 12h.01" />
                    </svg>
                    <div className="text-center">
                      <p className="font-medium">Escaneo QR</p>
                      <p className="text-sm text-muted-foreground">Escanea el código QR del centro de reciclaje</p>
                    </div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="manual" id="manual" className="peer sr-only" />
                  <Label
                    htmlFor="manual"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Upload className="mb-3 h-6 w-6" />
                    <div className="text-center">
                      <p className="font-medium">Entrada manual</p>
                      <p className="text-sm text-muted-foreground">Ingresa manualmente los detalles del reciclaje</p>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Detalles del reciclaje</CardTitle>
              <CardDescription>Completa la información sobre tu reciclaje</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {scanMethod === "photo" && (
                <div className="grid gap-4">
                  <div className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-muted/50">
                    <Camera className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm font-medium">Haz clic para tomar una foto</p>
                    <p className="text-xs text-muted-foreground">o arrastra y suelta una imagen aquí</p>
                  </div>
                </div>
              )}

              {scanMethod === "qr" && (
                <div className="grid gap-4">
                  <div className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-muted/50">
                    <svg
                      className="h-8 w-8 mx-auto mb-2 text-muted-foreground"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect width="14" height="14" x="5" y="5" rx="1" />
                      <path d="M8 8h.01M16 8h.01M8 16h.01M16 16h.01M12 12h.01" />
                    </svg>
                    <p className="text-sm font-medium">Haz clic para escanear código QR</p>
                    <p className="text-xs text-muted-foreground">o ingresa el código manualmente</p>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="location">Centro de reciclaje</Label>
                <Select defaultValue="centro-norte">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un centro" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="centro-norte">Centro de Reciclaje Norte</SelectItem>
                    <SelectItem value="eco-central">EcoReciclaje Central</SelectItem>
                    <SelectItem value="punto-verde">Punto Verde Sur</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="weight">Peso aproximado (kg)</Label>
                  <span className="text-sm text-muted-foreground">{weight} kg</span>
                </div>
                <Slider
                  id="weight"
                  min={0.1}
                  max={10}
                  step={0.1}
                  defaultValue={[1]}
                  value={[weight]}
                  onValueChange={(value) => setWeight(value[0])}
                />
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Eco Créditos a recibir:</p>
                    <p className="text-sm text-muted-foreground">Basado en el tipo y peso del plástico</p>
                  </div>
                  <div className="text-2xl font-bold text-green-600">+{getCreditsValue()}</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleScan} className="w-full bg-green-600 hover:bg-green-700">
                Registrar reciclaje
              </Button>
            </CardFooter>
          </Card>
        </div>
      ) : (
        <Card className="border-green-200 dark:border-green-800">
          <CardHeader className="bg-green-50 dark:bg-green-900/50 rounded-t-lg">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-green-700 dark:text-green-300" />
              </div>
            </div>
            <CardTitle className="text-center text-xl">¡Reciclaje registrado con éxito!</CardTitle>
            <CardDescription className="text-center">Has contribuido a un planeta más limpio</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Tipo de plástico</p>
                <p className="font-medium">
                  {selectedPlastic === "hdpe" ? "HDPE (#2)" : selectedPlastic === "ldpe" ? "LDPE (#4)" : "PP (#5)"}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Peso</p>
                <p className="font-medium">{weight} kg</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Centro de reciclaje</p>
                <p className="font-medium">Centro de Reciclaje Norte</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Fecha y hora</p>
                <p className="font-medium">{new Date().toLocaleString()}</p>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Eco Créditos recibidos:</p>
                  <p className="text-sm text-muted-foreground">Añadidos a tu cuenta</p>
                </div>
                <div className="text-2xl font-bold text-green-600">+{getCreditsValue()}</div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-700 dark:text-blue-300">Tu impacto ambiental</p>
                  <p className="text-sm text-blue-600/80 dark:text-blue-400/80">
                    {selectedPlastic === "hdpe"
                      ? `Has ahorrado aproximadamente ${(weight * 2).toFixed(1)} litros de petróleo al reciclar HDPE.`
                      : selectedPlastic === "ldpe"
                        ? `Has evitado que aproximadamente ${(weight * 1.5).toFixed(1)} kg de CO₂ se liberen a la atmósfera.`
                        : `Has liberado aproximadamente ${(weight * 0.1).toFixed(2)} m³ de espacio en vertederos.`}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" asChild className="sm:flex-1">
              <Link href="/dashboard/history">Ver historial</Link>
            </Button>
            <Button asChild className="sm:flex-1 bg-green-600 hover:bg-green-700">
              <Link href="/dashboard">Volver al inicio</Link>
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

