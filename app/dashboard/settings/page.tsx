"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Bell, Globe, Key, Lock, LogOut, Moon, Save, Sun, Trash2, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useTheme } from "next-themes"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [language, setLanguage] = useState("es")

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/dashboard">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Volver</span>
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Configuración</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="md:col-span-1">
          <CardContent className="p-4">
            <nav className="flex flex-col space-y-1">
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="#account">
                  <User className="mr-2 h-4 w-4" />
                  Cuenta
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="#security">
                  <Lock className="mr-2 h-4 w-4" />
                  Seguridad
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="#notifications">
                  <Bell className="mr-2 h-4 w-4" />
                  Notificaciones
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="#appearance">
                  <Moon className="mr-2 h-4 w-4" />
                  Apariencia
                </Link>
              </Button>
              <Separator className="my-2" />
              <Button
                variant="ghost"
                className="justify-start text-red-500 dark:text-red-400 hover:text-red-600 hover:dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-950"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Cerrar sesión
              </Button>
            </nav>
          </CardContent>
        </Card>

        <div className="md:col-span-3 space-y-6">
          <Card id="account">
            <CardHeader>
              <CardTitle>Configuración de cuenta</CardTitle>
              <CardDescription>Gestiona la información de tu cuenta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input id="name" defaultValue="Carlos Rodríguez" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" type="email" defaultValue="carlos.rodriguez@ejemplo.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" type="tel" defaultValue="+52 55 1234 5678" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Idioma</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar idioma" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="pt">Português</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Zona horaria</Label>
                <Select defaultValue="america-mexico_city">
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar zona horaria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="america-mexico_city">Ciudad de México (GMT-6)</SelectItem>
                    <SelectItem value="america-bogota">Bogotá (GMT-5)</SelectItem>
                    <SelectItem value="america-buenos_aires">Buenos Aires (GMT-3)</SelectItem>
                    <SelectItem value="europe-madrid">Madrid (GMT+1)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto bg-emerald-600 hover:bg-emerald-700">
                <Save className="mr-2 h-4 w-4" />
                Guardar cambios
              </Button>
            </CardFooter>
          </Card>

          <Card id="security">
            <CardHeader>
              <CardTitle>Seguridad</CardTitle>
              <CardDescription>Gestiona tu contraseña y seguridad de la cuenta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Contraseña actual</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="new-password">Nueva contraseña</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmar contraseña</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="text-base font-medium">Verificación en dos pasos</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="2fa">Activar verificación en dos pasos</Label>
                    <p className="text-sm text-muted-foreground">Añade una capa adicional de seguridad a tu cuenta</p>
                  </div>
                  <Switch id="2fa" />
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="text-base font-medium">Sesiones activas</h3>
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Este dispositivo</p>
                      <p className="text-sm text-muted-foreground">Ciudad de México • Última actividad: Ahora mismo</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Key className="mr-2 h-3 w-3" />
                      Actual
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="text-red-500 dark:text-red-400 hover:text-red-600 hover:dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-950 hover:border-red-300 dark:hover:border-red-800"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Cerrar todas las sesiones
              </Button>
              <Button className="ml-auto bg-emerald-600 hover:bg-emerald-700">
                <Save className="mr-2 h-4 w-4" />
                Guardar cambios
              </Button>
            </CardFooter>
          </Card>

          <Card id="notifications">
            <CardHeader>
              <CardTitle>Notificaciones</CardTitle>
              <CardDescription>Configura cómo quieres recibir notificaciones</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-base font-medium">Notificaciones por correo</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-recycling">Actividad de reciclaje</Label>
                      <p className="text-sm text-muted-foreground">
                        Recibe notificaciones sobre tus actividades de reciclaje
                      </p>
                    </div>
                    <Switch id="email-recycling" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-credits">Eco Créditos</Label>
                      <p className="text-sm text-muted-foreground">Recibe notificaciones sobre tus Eco Créditos</p>
                    </div>
                    <Switch id="email-credits" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-rewards">Recompensas</Label>
                      <p className="text-sm text-muted-foreground">
                        Recibe notificaciones sobre nuevas recompensas disponibles
                      </p>
                    </div>
                    <Switch id="email-rewards" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-marketing">Marketing</Label>
                      <p className="text-sm text-muted-foreground">Recibe noticias y ofertas especiales</p>
                    </div>
                    <Switch id="email-marketing" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-base font-medium">Notificaciones push</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="push-recycling">Actividad de reciclaje</Label>
                      <p className="text-sm text-muted-foreground">
                        Recibe notificaciones sobre tus actividades de reciclaje
                      </p>
                    </div>
                    <Switch id="push-recycling" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="push-credits">Eco Créditos</Label>
                      <p className="text-sm text-muted-foreground">Recibe notificaciones sobre tus Eco Créditos</p>
                    </div>
                    <Switch id="push-credits" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="push-rewards">Recompensas</Label>
                      <p className="text-sm text-muted-foreground">
                        Recibe notificaciones sobre nuevas recompensas disponibles
                      </p>
                    </div>
                    <Switch id="push-rewards" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto bg-emerald-600 hover:bg-emerald-700">
                <Save className="mr-2 h-4 w-4" />
                Guardar cambios
              </Button>
            </CardFooter>
          </Card>

          <Card id="appearance">
            <CardHeader>
              <CardTitle>Apariencia</CardTitle>
              <CardDescription>Personaliza la apariencia de la aplicación</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-base font-medium">Tema</h3>
                <RadioGroup defaultValue={theme} onValueChange={setTheme} className="grid grid-cols-3 gap-4">
                  <div>
                    <RadioGroupItem value="light" id="theme-light" className="sr-only peer" />
                    <Label
                      htmlFor="theme-light"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <Sun className="mb-3 h-6 w-6" />
                      <span>Claro</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="dark" id="theme-dark" className="sr-only peer" />
                    <Label
                      htmlFor="theme-dark"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <Moon className="mb-3 h-6 w-6" />
                      <span>Oscuro</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="system" id="theme-system" className="sr-only peer" />
                    <Label
                      htmlFor="theme-system"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <Globe className="mb-3 h-6 w-6" />
                      <span>Sistema</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="text-base font-medium">Accesibilidad</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="reduce-motion">Reducir movimiento</Label>
                    <p className="text-sm text-muted-foreground">Minimiza las animaciones en la interfaz</p>
                  </div>
                  <Switch id="reduce-motion" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto bg-emerald-600 hover:bg-emerald-700">
                <Save className="mr-2 h-4 w-4" />
                Guardar cambios
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-red-200 dark:border-red-900">
            <CardHeader>
              <CardTitle className="text-red-600 dark:text-red-400">Eliminar cuenta</CardTitle>
              <CardDescription>Eliminar tu cuenta es una acción permanente y no se puede deshacer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Al eliminar tu cuenta, perderás todos tus datos, incluyendo tu historial de reciclaje, Eco Créditos
                acumulados y recompensas canjeadas. Esta acción no se puede deshacer.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Eliminar cuenta
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

