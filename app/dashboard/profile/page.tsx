"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Camera, Edit, Mail, Phone, Save, User, Recycle, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/dashboard">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Volver</span>
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Perfil de usuario</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1 space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                    <User className="h-16 w-16 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <Button variant="secondary" size="icon" className="absolute bottom-0 right-0 rounded-full">
                    <Camera className="h-4 w-4" />
                    <span className="sr-only">Cambiar foto</span>
                  </Button>
                </div>
                <h2 className="text-xl font-bold">Carlos Rodríguez</h2>
                <p className="text-sm text-muted-foreground">carlos.rodriguez@ejemplo.com</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge
                    variant="outline"
                    className="bg-emerald-50 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
                  >
                    Nivel Intermedio
                  </Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Guardar cambios
                  </>
                ) : (
                  <>
                    <Edit className="mr-2 h-4 w-4" />
                    Editar perfil
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Progreso de reciclaje</CardTitle>
              <CardDescription>Tu nivel actual y progreso</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Nivel Intermedio</span>
                  <span className="text-sm font-medium">Nivel Experto</span>
                </div>
                <Progress value={75} className="h-2" />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">750/1000 créditos</span>
                  <span className="text-xs text-muted-foreground">75%</span>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-sm font-medium mb-2">Beneficios del siguiente nivel:</h3>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Bonificación del 10% en todos los créditos</li>
                  <li>• Acceso a recompensas exclusivas</li>
                  <li>• Prioridad en centros de reciclaje</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Insignias obtenidas</CardTitle>
              <CardDescription>Tus logros de reciclaje</CardDescription>
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
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="info">
            <TabsList className="mb-4">
              <TabsTrigger value="info">Información personal</TabsTrigger>
              <TabsTrigger value="stats">Estadísticas</TabsTrigger>
              <TabsTrigger value="activity">Actividad reciente</TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Información personal</CardTitle>
                  <CardDescription>Gestiona tus datos personales</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input id="name" defaultValue="Carlos Rodríguez" disabled={!isEditing} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="carlos.rodriguez@ejemplo.com"
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" type="tel" defaultValue="+52 55 1234 5678" disabled={!isEditing} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Ubicación</Label>
                      <Input id="location" defaultValue="Ciudad de México, México" disabled={!isEditing} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Biografía</Label>
                    <Textarea
                      id="bio"
                      placeholder="Cuéntanos sobre ti..."
                      defaultValue="Entusiasta del reciclaje y la sostenibilidad. Comprometido con reducir mi huella de carbono y contribuir a un planeta más limpio."
                      disabled={!isEditing}
                      className="min-h-[100px]"
                    />
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h3 className="text-base font-medium">Preferencias de contacto</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <Label htmlFor="email-notifications" className="text-sm">
                            Notificaciones por correo
                          </Label>
                        </div>
                        <Switch id="email-notifications" defaultChecked disabled={!isEditing} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <Label htmlFor="sms-notifications" className="text-sm">
                            Notificaciones SMS
                          </Label>
                        </div>
                        <Switch id="sms-notifications" disabled={!isEditing} />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className={isEditing ? "flex justify-end" : "hidden"}>
                  <Button variant="outline" className="mr-2" onClick={() => setIsEditing(false)}>
                    Cancelar
                  </Button>
                  <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => setIsEditing(false)}>
                    Guardar cambios
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="stats" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Estadísticas de reciclaje</CardTitle>
                  <CardDescription>Tu contribución al medio ambiente</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Total reciclado</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">26.5 kg</div>
                        <div className="text-sm text-muted-foreground mt-1">Desde que te uniste</div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>HDPE (#2)</span>
                            <span className="font-medium">12.5 kg</span>
                          </div>
                          <Progress
                            value={47}
                            className="h-1 bg-blue-100 dark:bg-blue-900"
                            indicatorClassName="bg-blue-500"
                          />

                          <div className="flex items-center justify-between text-sm">
                            <span>LDPE (#4)</span>
                            <span className="font-medium">8.2 kg</span>
                          </div>
                          <Progress
                            value={31}
                            className="h-1 bg-green-100 dark:bg-green-900"
                            indicatorClassName="bg-green-500"
                          />

                          <div className="flex items-center justify-between text-sm">
                            <span>PP (#5)</span>
                            <span className="font-medium">5.8 kg</span>
                          </div>
                          <Progress
                            value={22}
                            className="h-1 bg-red-100 dark:bg-red-900"
                            indicatorClassName="bg-red-500"
                          />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Eco Créditos ganados</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">1,250</div>
                        <div className="text-sm text-muted-foreground mt-1">Desde que te uniste</div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Por HDPE</span>
                            <span className="font-medium">625 créditos</span>
                          </div>
                          <Progress value={50} className="h-1" />

                          <div className="flex items-center justify-between text-sm">
                            <span>Por LDPE</span>
                            <span className="font-medium">410 créditos</span>
                          </div>
                          <Progress value={33} className="h-1" />

                          <div className="flex items-center justify-between text-sm">
                            <span>Por PP</span>
                            <span className="font-medium">215 créditos</span>
                          </div>
                          <Progress value={17} className="h-1" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Impacto ambiental</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm text-muted-foreground">CO₂ evitado</div>
                              <div className="text-xl font-bold">25.8 kg</div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                              <svg
                                className="h-5 w-5 text-emerald-600 dark:text-emerald-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M18 8a6 6 0 0 0-9-5 6 6 0 0 0-3 10l14 14v-9" />
                                <path d="M13 8a3 3 0 0 0-5 2v3" />
                              </svg>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm text-muted-foreground">Agua ahorrada</div>
                              <div className="text-xl font-bold">520 L</div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                              <svg
                                className="h-5 w-5 text-blue-600 dark:text-blue-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
                              </svg>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm text-muted-foreground">Energía ahorrada</div>
                              <div className="text-xl font-bold">75 kWh</div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
                              <svg
                                className="h-5 w-5 text-amber-600 dark:text-amber-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 2v8" />
                                <path d="m4.93 10.93 1.41 1.41" />
                                <path d="M2 18h2" />
                                <path d="M20 18h2" />
                                <path d="m19.07 10.93-1.41 1.41" />
                                <path d="M22 22H2" />
                                <path d="m8 6 4-4 4 4" />
                                <path d="M16 18a4 4 0 0 0-8 0" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Visitas a centros</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">12</div>
                        <div className="text-sm text-muted-foreground mt-1">Visitas totales</div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Centro de Reciclaje Norte</span>
                            <span className="font-medium">7 visitas</span>
                          </div>
                          <Progress value={58} className="h-1" />

                          <div className="flex items-center justify-between text-sm">
                            <span>EcoReciclaje Central</span>
                            <span className="font-medium">3 visitas</span>
                          </div>
                          <Progress value={25} className="h-1" />

                          <div className="flex items-center justify-between text-sm">
                            <span>Punto Verde Sur</span>
                            <span className="font-medium">2 visitas</span>
                          </div>
                          <Progress value={17} className="h-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/dashboard/impact">Ver informe completo de impacto</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Actividad reciente</CardTitle>
                  <CardDescription>Tus últimas acciones en la plataforma</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                          <Recycle className="h-5 w-5 text-blue-700 dark:text-blue-300" />
                        </div>
                        <div className="w-px h-full bg-border mt-2"></div>
                      </div>
                      <div>
                        <div className="font-medium">Reciclaste 1.2 kg de HDPE</div>
                        <div className="text-sm text-muted-foreground">Hoy, 10:30 AM</div>
                        <div className="mt-2 text-sm">
                          <span className="text-green-600 dark:text-green-400 font-medium">+60 créditos</span> • Centro
                          de Reciclaje Norte
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                          <CreditCard className="h-5 w-5 text-green-700 dark:text-green-300" />
                        </div>
                        <div className="w-px h-full bg-border mt-2"></div>
                      </div>
                      <div>
                        <div className="font-medium">Canjeaste créditos por un descuento</div>
                        <div className="text-sm text-muted-foreground">Ayer, 4:15 PM</div>
                        <div className="mt-2 text-sm">
                          <span className="text-red-600 dark:text-red-400 font-medium">-300 créditos</span> • Descuento
                          en transporte público
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                          <Recycle className="h-5 w-5 text-green-700 dark:text-green-300" />
                        </div>
                        <div className="w-px h-full bg-border mt-2"></div>
                      </div>
                      <div>
                        <div className="font-medium">Reciclaste 0.8 kg de LDPE</div>
                        <div className="text-sm text-muted-foreground">Ayer, 3:45 PM</div>
                        <div className="mt-2 text-sm">
                          <span className="text-green-600 dark:text-green-400 font-medium">+40 créditos</span> • Centro
                          de Reciclaje Norte
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                          <Recycle className="h-5 w-5 text-red-700 dark:text-red-300" />
                        </div>
                        <div className="w-px h-full bg-border mt-2"></div>
                      </div>
                      <div>
                        <div className="font-medium">Reciclaste 0.5 kg de PP</div>
                        <div className="text-sm text-muted-foreground">Hace 2 días, 11:20 AM</div>
                        <div className="mt-2 text-sm">
                          <span className="text-green-600 dark:text-green-400 font-medium">+25 créditos</span> •
                          EcoReciclaje Central
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                          <Badge className="h-5 w-5 text-purple-700 dark:text-purple-300" />
                        </div>
                      </div>
                      <div>
                        <div className="font-medium">Obtuviste la insignia "Experto LDPE"</div>
                        <div className="text-sm text-muted-foreground">Hace 3 días, 9:10 AM</div>
                        <div className="mt-2 text-sm">Por reciclar más de 5 kg de LDPE</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/dashboard/history">Ver historial completo</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

