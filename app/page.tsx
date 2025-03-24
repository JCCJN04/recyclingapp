import Link from "next/link"
import { ArrowRight, Recycle, CreditCard, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlasticTypeGuide } from "@/components/plastic-type-guide"
import { RecyclingCounter } from "@/components/recycling-counter"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container w-full max-w-full px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-medium mb-2">
                Eco Créditos por Reciclaje
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Recicla plásticos, gana recompensas
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Convierte tus plásticos HDPE, LDPE y PP en beneficios reales mientras ayudas al planeta.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/register">Comenzar ahora</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/login">Iniciar sesión</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="w-full h-[600px] rounded-lg bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-900 dark:to-emerald-800 flex items-center justify-center">
                  <Recycle className="w-32 h-32 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-background">
        <div className="container w-full max-w-full px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cómo funciona</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Un proceso simple para convertir tus residuos plásticos en beneficios
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="border-green-100 dark:border-green-900">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                  <Recycle className="w-6 h-6 text-green-700 dark:text-green-300" />
                </div>
                <CardTitle>1. Recicla plásticos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Separa tus plásticos HDPE, LDPE y PP. Llévalos a un centro de reciclaje asociado o escanéalos desde
                  casa.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-100 dark:border-green-900">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-green-700 dark:text-green-300" />
                </div>
                <CardTitle>2. Gana Eco Créditos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Por cada kilo de plástico reciclado, recibirás Eco Créditos en tu cuenta según el tipo de material.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-100 dark:border-green-900">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                  <ArrowRight className="w-6 h-6 text-green-700 dark:text-green-300" />
                </div>
                <CardTitle>3. Canjea beneficios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Utiliza tus Eco Créditos para obtener descuentos en gasolina, transporte, luz y más servicios.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Plastic Types Guide */}
      <section className="w-full py-12 md:py-24 bg-green-50 dark:bg-green-950">
        <div className="container w-full max-w-full px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Guía de tipos de plástico</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Aprende a identificar los plásticos reciclables en nuestra plataforma
              </p>
            </div>
          </div>
          <div className="mt-12">
            <PlasticTypeGuide />
          </div>
        </div>
      </section>

      {/* Impact Counter */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-background">
        <div className="container w-full max-w-full px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestro impacto</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Juntos estamos haciendo la diferencia
              </p>
            </div>
            <RecyclingCounter />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 bg-green-600 dark:bg-green-800">
        <div className="container w-full max-w-full px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¿Listo para comenzar?</h2>
              <p className="max-w-[700px] text-green-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Únete a nuestra comunidad de recicladores y comienza a ganar Eco Créditos hoy mismo.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" variant="secondary">
                <Link href="/register">Registrarse</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-white border-white bg-green-700/30 hover:bg-green-700 hover:text-white"
              >
                <Link href="/map">
                  <MapPin className="mr-2 h-4 w-4" /> Encontrar centros de reciclaje
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-background border-t">
        <div className="container w-full max-w-full px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h3 className="text-base font-medium">Plataforma</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="text-sm text-muted-foreground hover:text-foreground">
                    Socios
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-medium">Recursos</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/help" className="text-sm text-muted-foreground hover:text-foreground">
                    Centro de ayuda
                  </Link>
                </li>
                <li>
                  <Link href="/guide" className="text-sm text-muted-foreground hover:text-foreground">
                    Guía de reciclaje
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                    Preguntas frecuentes
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-medium">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                    Términos de uso
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
                    Política de cookies
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-medium">Síguenos</h3>
              <div className="flex space-x-2">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Eco Créditos. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

