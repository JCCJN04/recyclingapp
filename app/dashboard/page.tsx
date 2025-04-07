"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  CreditCard,
  History,
  Home,
  Info,
  LifeBuoy,
  LogOut,
  MapPin,
  Menu,
  Recycle,
  Settings,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 text-lg font-semibold text-green-600 dark:text-green-400"
                onClick={() => setSidebarOpen(false)}
              >
                <Recycle className="h-6 w-6" />
                <span className="sr-only">Eco Créditos</span>
                <span>Eco Créditos</span>
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                onClick={() => setSidebarOpen(false)}
              >
                <Home className="h-5 w-5" />
                Inicio
              </Link>
              <Link
                href="/dashboard/scan"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                onClick={() => setSidebarOpen(false)}
              >
                <Recycle className="h-5 w-5" />
                Escanear reciclaje
              </Link>
              <Link
                href="/dashboard/credits"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                onClick={() => setSidebarOpen(false)}
              >
                <CreditCard className="h-5 w-5" />
                Eco Créditos
              </Link>
              <Link
                href="/dashboard/map"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                onClick={() => setSidebarOpen(false)}
              >
                <MapPin className="h-5 w-5" />
                Centros de reciclaje
              </Link>
              <Link
                href="/dashboard/history"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                onClick={() => setSidebarOpen(false)}
              >
                <History className="h-5 w-5" />
                Historial
              </Link>
              <Link
                href="/dashboard/impact"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                onClick={() => setSidebarOpen(false)}
              >
                <BarChart3 className="h-5 w-5" />
                Impacto ambiental
              </Link>
              <Link
                href="/dashboard/help"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                onClick={() => setSidebarOpen(false)}
              >
                <LifeBuoy className="h-5 w-5" />
                Ayuda
              </Link>
            </nav>
            <div className="mt-auto">
              <Button variant="outline" className="w-full justify-start gap-2" asChild>
                <Link href="/">
                  <LogOut className="h-4 w-4" />
                  Cerrar sesión
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-lg font-semibold text-green-600 dark:text-green-400 md:hidden"
        >
          <Recycle className="h-6 w-6" />
          <span>Eco Créditos</span>
        </Link>
        <div className="flex items-center gap-2 md:ml-auto">
          <Button variant="outline" size="icon" className="rounded-full" asChild>
            <Link href="/dashboard/profile">
              <User className="h-4 w-4" />
              <span className="sr-only">Perfil</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full" asChild>
            <Link href="/dashboard/settings">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Configuración</span>
            </Link>
          </Button>
        </div>
      </header>
      <div className="grid flex-1 md:grid-cols-[220px_1fr]">
        <aside className="hidden border-r bg-muted/40 md:block">
          <nav className="grid gap-2 p-4 text-sm">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
            >
              <Home className="h-4 w-4" />
              Inicio
            </Link>
            <Link
              href="/dashboard/scan"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Recycle className="h-4 w-4" />
              Escanear reciclaje
            </Link>
            <Link
              href="/dashboard/credits"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <CreditCard className="h-4 w-4" />
              Eco Créditos
            </Link>
            <Link
              href="/dashboard/map"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <MapPin className="h-4 w-4" />
              Centros de reciclaje
            </Link>
            <Link
              href="/dashboard/history"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <History className="h-4 w-4" />
              Historial
            </Link>
            <Link
              href="/dashboard/impact"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <BarChart3 className="h-4 w-4" />
              Impacto ambiental
            </Link>
            <Link
              href="/dashboard/help"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <LifeBuoy className="h-4 w-4" />
              Ayuda
            </Link>
          </nav>
        </aside>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Bienvenido, Carlos</h1>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Eco Créditos</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,250</div>
                <p className="text-xs text-muted-foreground">+120 esta semana</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">HDPE Reciclado</CardTitle>
                <div className="w-4 h-4 rounded-full bg-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.5 kg</div>
                <p className="text-xs text-muted-foreground">+2.3 kg este mes</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">LDPE Reciclado</CardTitle>
                <div className="w-4 h-4 rounded-full bg-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8.2 kg</div>
                <p className="text-xs text-muted-foreground">+1.5 kg este mes</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">PP Reciclado</CardTitle>
                <div className="w-4 h-4 rounded-full bg-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5.8 kg</div>
                <p className="text-xs text-muted-foreground">+0.8 kg este mes</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Nivel de reciclador</CardTitle>
                <CardDescription>Estás a 250 Eco Créditos de subir a nivel Experto</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium">Intermedio</div>
                  <div className="text-sm font-medium">Experto</div>
                </div>
                <Progress value={75} className="h-2" />
                <div className="flex items-center justify-between mt-2">
                  <div className="text-xs text-muted-foreground">750/1000</div>
                  <div className="text-xs text-muted-foreground">75%</div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Ver beneficios de nivel
                </Button>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  Reciclar ahora
                </Button>
              </CardFooter>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Actividad reciente</CardTitle>
                <CardDescription>Has reciclado 3 veces esta semana</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Recycle className="h-4 w-4 text-blue-700" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Reciclaste 1.2 kg de HDPE</p>
                      <p className="text-xs text-muted-foreground">Hoy, 10:30 AM</p>
                    </div>
                    <div className="text-sm font-medium text-green-600">+60 créditos</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Recycle className="h-4 w-4 text-green-700" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Reciclaste 0.8 kg de LDPE</p>
                      <p className="text-xs text-muted-foreground">Ayer, 3:45 PM</p>
                    </div>
                    <div className="text-sm font-medium text-green-600">+40 créditos</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <Recycle className="h-4 w-4 text-red-700" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Reciclaste 0.5 kg de PP</p>
                      <p className="text-xs text-muted-foreground">Hace 2 días, 11:20 AM</p>
                    </div>
                    <div className="text-sm font-medium text-green-600">+25 créditos</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Ver todo el historial
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Tabs defaultValue="rewards" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="rewards">Recompensas disponibles</TabsTrigger>
              <TabsTrigger value="centers">Centros cercanos</TabsTrigger>
              <TabsTrigger value="impact">Tu impacto</TabsTrigger>
            </TabsList>
            <TabsContent value="rewards" className="border rounded-lg p-4 mt-2">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Descuento en gasolina</CardTitle>
                    <CardDescription>Válido en estaciones asociadas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div
                      className="aspect-video bg-[url('/gasolina.jpeg')] bg-cover bg-center rounded-md flex items-center justify-center mb-2"
                    >
                      <svg
                        className="h-12 w-12 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 22h12" />
                        <path d="M19 22h2" />
                        <path d="M19 22v-4" />
                        <path d="M8 22v-8.3a1 1 0 0 1 .4-.8l5.2-3.9a1 1 0 0 0 .4-.8V4" />
                        <path d="M18 2h-6" />
                        <path d="M18 5H7a2 2 0 0 0-2 2v3" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">10% de descuento</p>
                      <p className="text-sm font-medium text-green-600">500 créditos</p>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button size="sm" className="w-full">
                      Canjear
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Viaje en transporte</CardTitle>
                    <CardDescription>Válido en metro y autobuses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-[url('/transporte.jpeg')] bg-cover bg-center rounded-md flex items-center justify-center mb-2">
                      <svg
                        className="h-12 w-12 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <path d="M9 9h6v6H9z" />
                        <path d="M15 4v16" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">2 viajes gratis</p>
                      <p className="text-sm font-medium text-green-600">300 créditos</p>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button size="sm" className="w-full">
                      Canjear
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Descuento en luz</CardTitle>
                    <CardDescription>Válido en tu próxima factura</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-[url('/electricidad.jpeg')] bg-cover bg-center rounded-md flex items-center justify-center mb-2">
                      <svg
                        className="h-12 w-12 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M8 2v4" />
                        <path d="M16 2v4" />
                        <path d="M8.8 10a5 5 0 1 0 6.4 0" />
                        <path d="M12 12v6" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">5% de descuento</p>
                      <p className="text-sm font-medium text-green-600">800 créditos</p>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button size="sm" className="w-full">
                      Canjear
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex justify-center mt-4">
                <Button variant="outline">Ver todas las recompensas</Button>
              </div>
            </TabsContent>
            <TabsContent value="centers" className="border rounded-lg p-4 mt-2">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Centro de Reciclaje Norte</CardTitle>
                    <CardDescription>A 1.2 km de tu ubicación</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video relative mb-2">
                      <div className="absolute inset-0 w-full h-full bg-[url('/centro1.jpeg')] bg-cover bg-center rounded-md flex items-center justify-center">
                        <MapPin className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm">Av. Principal #123, Zona Norte</p>
                      <p className="text-sm">Horario: 9:00 AM - 6:00 PM</p>
                      <div className="flex items-center gap-1 text-sm">
                        <Info className="h-3 w-3" />
                        <span>Acepta: HDPE, LDPE, PP</span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Ver detalles
                    </Button>
                    <Button size="sm">Cómo llegar</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">EcoReciclaje Central</CardTitle>
                    <CardDescription>A 2.5 km de tu ubicación</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video relative mb-2">
                      <div className="absolute inset-0 w-full h-full bg-[url('/centro2.jpeg')] bg-cover bg-center rounded-md">
                        <div className="w-full h-full bg-black/30 flex items-center justify-center rounded-md">
                          <MapPin className="h-12 w-12 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm">Calle Secundaria #456, Centro</p>
                      <p className="text-sm">Horario: 8:00 AM - 8:00 PM</p>
                      <div className="flex items-center gap-1 text-sm">
                        <Info className="h-3 w-3" />
                        <span>Acepta: HDPE, PP</span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Ver detalles
                    </Button>
                    <Button size="sm">Cómo llegar</Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex justify-center mt-4">
                <Button variant="outline">Ver todos los centros</Button>
              </div>
            </TabsContent>
            <TabsContent value="impact" className="border rounded-lg p-4 mt-2">
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Recursos ahorrados</CardTitle>
                    <CardDescription>Gracias a tu reciclaje de HDPE</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center justify-center py-4">
                      <div className="text-4xl font-bold text-blue-600">25L</div>
                      <p className="text-sm text-muted-foreground text-center mt-2">
                        de petróleo ahorrado al reciclar HDPE
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Contaminación evitada</CardTitle>
                    <CardDescription>Gracias a tu reciclaje de LDPE</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center justify-center py-4">
                      <div className="text-4xl font-bold text-green-600">12kg</div>
                      <p className="text-sm text-muted-foreground text-center mt-2">
                        de CO₂ no liberados a la atmósfera
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Espacio liberado</CardTitle>
                    <CardDescription>Gracias a tu reciclaje de PP</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center justify-center py-4">
                      <div className="text-4xl font-bold text-red-600">0.5m³</div>
                      <p className="text-sm text-muted-foreground text-center mt-2">
                        de espacio en vertederos liberado
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-center mt-4">
                <Button variant="outline">Ver informe completo</Button>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

