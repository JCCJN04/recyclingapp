"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, HelpCircle, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PlasticTypeGuide } from "@/components/plastic-type-guide"

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqs = [
    {
      category: "general",
      questions: [
        {
          id: "faq-1",
          question: "¿Qué es Eco Créditos?",
          answer:
            "Eco Créditos es una plataforma que te permite ganar recompensas por reciclar plásticos HDPE, LDPE y PP. Por cada kilo de plástico reciclado, recibirás créditos que podrás canjear por beneficios como descuentos en gasolina, transporte público, facturas de luz y más.",
        },
        {
          id: "faq-2",
          question: "¿Cómo funciona el sistema de créditos?",
          answer:
            "Cada tipo de plástico tiene un valor en créditos diferente. El HDPE otorga 50 créditos por kilo, el LDPE 40 créditos por kilo y el PP 45 créditos por kilo. Estos valores pueden variar según promociones especiales o bonificaciones en ciertos centros de reciclaje.",
        },
        {
          id: "faq-3",
          question: "¿Cómo puedo registrarme en la plataforma?",
          answer:
            "Puedes registrarte fácilmente haciendo clic en el botón 'Registrarse' en la página de inicio. Necesitarás proporcionar tu nombre, correo electrónico y crear una contraseña. También puedes registrarte usando tu cuenta de Google.",
        },
        {
          id: "faq-4",
          question: "¿Cuáles son los niveles de reciclador?",
          answer:
            "Existen varios niveles: Novato (0-500 créditos), Intermedio (501-1000 créditos), Experto (1001-2000 créditos) y Maestro (más de 2000 créditos). Cada nivel desbloquea beneficios adicionales y recompensas exclusivas.",
        },
      ],
    },
    {
      category: "recycling",
      questions: [
        {
          id: "faq-5",
          question: "¿Cómo identifico los diferentes tipos de plástico?",
          answer:
            "Los plásticos tienen un símbolo de reciclaje con un número en el centro que indica el tipo. El HDPE es el #2, el LDPE es el #4 y el PP es el #5. Puedes encontrar estos símbolos generalmente en la base o en alguna parte del envase.",
        },
        {
          id: "faq-6",
          question: "¿Debo limpiar los plásticos antes de reciclarlos?",
          answer:
            "Sí, es importante enjuagar los envases para eliminar residuos de alimentos o productos. No es necesario que estén perfectamente limpios, pero sí lo suficiente para evitar contaminación y malos olores.",
        },
        {
          id: "faq-7",
          question: "¿Qué hago con las tapas y etiquetas?",
          answer:
            "Para el HDPE y PP, es recomendable separar las tapas de los envases, ya que a menudo están hechas de diferentes tipos de plástico. Las etiquetas de papel deberían retirarse cuando sea posible, pero las etiquetas de plástico adheridas pueden dejarse.",
        },
        {
          id: "faq-8",
          question: "¿Puedo reciclar bolsas de plástico en cualquier centro?",
          answer:
            "No todos los centros aceptan bolsas de plástico LDPE. Te recomendamos verificar en el mapa de centros de reciclaje cuáles aceptan específicamente este tipo de material.",
        },
      ],
    },
    {
      category: "rewards",
      questions: [
        {
          id: "faq-9",
          question: "¿Cómo canjeo mis Eco Créditos?",
          answer:
            "Puedes canjear tus créditos en la sección 'Eco Créditos' de tu cuenta. Selecciona la recompensa que deseas, confirma el canje y recibirás un código o cupón que podrás utilizar en los establecimientos participantes.",
        },
        {
          id: "faq-10",
          question: "¿Cuánto tiempo tardan en acreditarse los créditos?",
          answer:
            "Los créditos se acreditan inmediatamente después de registrar tu reciclaje en la plataforma, ya sea mediante escaneo de código QR en un centro de reciclaje o mediante la función de escaneo de la app.",
        },
        {
          id: "faq-11",
          question: "¿Los créditos tienen fecha de vencimiento?",
          answer:
            "Los Eco Créditos no vencen, pero algunas recompensas específicas pueden tener un período de validez una vez canjeadas. Este período se indica claramente en la descripción de cada recompensa.",
        },
        {
          id: "faq-12",
          question: "¿Puedo transferir mis créditos a otra persona?",
          answer:
            "Actualmente no es posible transferir créditos entre cuentas, pero estamos trabajando en implementar esta función en el futuro.",
        },
      ],
    },
    {
      category: "technical",
      questions: [
        {
          id: "faq-13",
          question: "¿Cómo funciona el escaneo de plásticos?",
          answer:
            "La función de escaneo utiliza la cámara de tu dispositivo para identificar el tipo de plástico mediante el símbolo de reciclaje. También puedes ingresar manualmente el tipo y peso si prefieres.",
        },
        {
          id: "faq-14",
          question: "¿Qué hago si la app no reconoce mi plástico?",
          answer:
            "Si la app no puede identificar automáticamente el plástico, puedes seleccionar manualmente el tipo basándote en el símbolo de reciclaje o en la guía de tipos de plástico disponible en la sección de ayuda.",
        },
        {
          id: "faq-15",
          question: "¿Funciona la app sin conexión a internet?",
          answer:
            "Algunas funciones básicas pueden funcionar sin conexión, pero para registrar reciclajes, canjear créditos y acceder al mapa de centros se requiere conexión a internet.",
        },
        {
          id: "faq-16",
          question: "¿Cómo actualizo mi información personal?",
          answer:
            "Puedes actualizar tu información personal en la sección 'Perfil' accesible desde el menú principal. Allí podrás modificar tu nombre, correo electrónico, contraseña y preferencias de notificación.",
        },
      ],
    },
  ]

  const filteredFaqs = searchQuery
    ? faqs
        .map((category) => ({
          ...category,
          questions: category.questions.filter(
            (q) =>
              q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((category) => category.questions.length > 0)
    : faqs

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/dashboard">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Volver</span>
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Centro de ayuda</h1>
      </div>

      <div className="grid gap-6">
        <Card className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950 dark:to-emerald-950 border-teal-100 dark:border-teal-900">
          <CardHeader>
            <CardTitle>¿Cómo podemos ayudarte?</CardTitle>
            <CardDescription>Encuentra respuestas a tus preguntas sobre reciclaje y Eco Créditos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar en el centro de ayuda..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="faq">
          <TabsList className="mb-4">
            <TabsTrigger value="faq">Preguntas frecuentes</TabsTrigger>
            <TabsTrigger value="guide">Guía de plásticos</TabsTrigger>
            <TabsTrigger value="tutorials">Tutoriales</TabsTrigger>
          </TabsList>

          <TabsContent value="faq" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Preguntas frecuentes</CardTitle>
                <CardDescription>Respuestas a las dudas más comunes</CardDescription>
              </CardHeader>
              <CardContent>
                {searchQuery && filteredFaqs.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <HelpCircle className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">No encontramos resultados</h3>
                    <p className="text-muted-foreground max-w-md">
                      No hemos encontrado respuestas que coincidan con "{searchQuery}". Intenta con otros términos o
                      contacta con soporte.
                    </p>
                  </div>
                ) : (
                  <Accordion type="single" collapsible className="w-full">
                    {filteredFaqs.map((category, index) => (
                      <div key={category.category}>
                        {category.questions.length > 0 && (
                          <>
                            <h3 className="text-lg font-medium mb-2 mt-4 first:mt-0">
                              {category.category === "general"
                                ? "General"
                                : category.category === "recycling"
                                  ? "Reciclaje"
                                  : category.category === "rewards"
                                    ? "Recompensas"
                                    : "Soporte técnico"}
                            </h3>
                            {category.questions.map((faq) => (
                              <AccordionItem key={faq.id} value={faq.id}>
                                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent>
                                  <p className="text-muted-foreground">{faq.answer}</p>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </>
                        )}
                      </div>
                    ))}
                  </Accordion>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guide" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Guía de identificación de plásticos</CardTitle>
                <CardDescription>Aprende a identificar los diferentes tipos de plásticos reciclables</CardDescription>
              </CardHeader>
              <CardContent>
                <PlasticTypeGuide />

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">¿Cómo leer los símbolos de reciclaje?</h3>
                    <p className="text-muted-foreground mb-4">
                      Los símbolos de reciclaje consisten en un triángulo formado por tres flechas con un número en el
                      centro. Este número identifica el tipo de resina plástica utilizada en el producto.
                    </p>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="p-4 bg-muted rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                            <span className="font-bold text-blue-700 dark:text-blue-300">2</span>
                          </div>
                          <span className="font-medium">HDPE</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Polietileno de Alta Densidad. Plástico rígido utilizado en botellas de leche, detergentes y
                          champús.
                        </p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                            <span className="font-bold text-green-700 dark:text-green-300">4</span>
                          </div>
                          <span className="font-medium">LDPE</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Polietileno de Baja Densidad. Plástico flexible usado en bolsas, envolturas y tapas flexibles.
                        </p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                            <span className="font-bold text-red-700 dark:text-red-300">5</span>
                          </div>
                          <span className="font-medium">PP</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Polipropileno. Plástico resistente al calor usado en contenedores para microondas y tapas.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Consejos para preparar plásticos para reciclaje</h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Enjuaga los envases para eliminar residuos de alimentos o productos</li>
                      <li>Quita las tapas y sepáralas (a menudo son de un tipo diferente de plástico)</li>
                      <li>Retira las etiquetas de papel cuando sea posible</li>
                      <li>Aplasta los envases para reducir su volumen</li>
                      <li>Agrupa las bolsas de plástico LDPE juntas</li>
                      <li>No mezcles diferentes tipos de plástico en la misma bolsa</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tutorials" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Tutoriales de uso</CardTitle>
                <CardDescription>Aprende a utilizar todas las funciones de la plataforma</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Cómo escanear plásticos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-emerald-100 dark:bg-emerald-900 rounded-md flex items-center justify-center mb-2">
                        <svg
                          className="h-12 w-12 text-emerald-600 dark:text-emerald-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Aprende a utilizar la función de escaneo para identificar y registrar tus plásticos reciclables.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        Ver tutorial
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Cómo canjear créditos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-blue-100 dark:bg-blue-900 rounded-md flex items-center justify-center mb-2">
                        <svg
                          className="h-12 w-12 text-blue-600 dark:text-blue-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Descubre cómo convertir tus Eco Créditos en recompensas y beneficios reales.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        Ver tutorial
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Encontrar centros de reciclaje</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-amber-100 dark:bg-amber-900 rounded-md flex items-center justify-center mb-2">
                        <svg
                          className="h-12 w-12 text-amber-600 dark:text-amber-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Aprende a utilizar el mapa para localizar los centros de reciclaje más cercanos a tu ubicación.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        Ver tutorial
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Entender tu impacto ambiental</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-green-100 dark:bg-green-900 rounded-md flex items-center justify-center mb-2">
                        <svg
                          className="h-12 w-12 text-green-600 dark:text-green-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Descubre cómo interpretar las métricas de impacto ambiental y qué significan para el planeta.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        Ver tutorial
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Subir de nivel</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-purple-100 dark:bg-purple-900 rounded-md flex items-center justify-center mb-2">
                        <svg
                          className="h-12 w-12 text-purple-600 dark:text-purple-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Aprende sobre los diferentes niveles de reciclador y cómo desbloquear beneficios adicionales.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        Ver tutorial
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Compartir tu progreso</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-red-100 dark:bg-red-900 rounded-md flex items-center justify-center mb-2">
                        <svg
                          className="h-12 w-12 text-red-600 dark:text-red-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Descubre cómo compartir tus logros de reciclaje en redes sociales e inspirar a otros.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        Ver tutorial
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline">Ver todos los tutoriales</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>¿No encuentras lo que buscas?</CardTitle>
            <CardDescription>Contacta con nuestro equipo de soporte</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 bg-muted rounded-lg text-center">
                <HelpCircle className="h-10 w-10 mx-auto mb-4 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-lg font-medium mb-2">Soporte por correo</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Envíanos un correo y te responderemos en un plazo máximo de 24 horas.
                </p>
                <Button variant="outline" className="w-full">
                  soporte@ecocreditos.com
                </Button>
              </div>

              <div className="p-6 bg-muted rounded-lg text-center">
                <svg
                  className="h-10 w-10 mx-auto mb-4 text-emerald-600 dark:text-emerald-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <h3 className="text-lg font-medium mb-2">Chat en vivo</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Habla con un agente de soporte en tiempo real durante horario laboral.
                </p>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Iniciar chat</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

