import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PlasticTypeGuide() {
  return (
    <Tabs defaultValue="hdpe" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="hdpe">HDPE (#2)</TabsTrigger>
        <TabsTrigger value="ldpe">LDPE (#4)</TabsTrigger>
        <TabsTrigger value="pp">PP (#5)</TabsTrigger>
      </TabsList>
      <TabsContent value="hdpe">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2">
                <span className="font-bold text-blue-700 dark:text-blue-300">2</span>
              </div>
              HDPE - Polietileno de Alta Densidad
            </CardTitle>
            <CardDescription>
              Plástico rígido y resistente, comúnmente utilizado en envases de productos de limpieza y alimentos.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Ejemplos comunes:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Botellas de leche y yogurt</li>
                  <li>Envases de detergente y champú</li>
                  <li>Botellas de jugo</li>
                  <li>Bolsas de supermercado rígidas</li>
                  <li>Juguetes de plástico</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Cómo prepararlo:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Enjuagar para eliminar residuos</li>
                  <li>Quitar etiquetas cuando sea posible</li>
                  <li>Aplastar para reducir volumen</li>
                  <li>Mantener tapas y botellas separadas</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="aspect-square bg-blue-100 dark:bg-blue-900 rounded-md flex items-center justify-center">
                <span className="text-blue-700 dark:text-blue-300 font-medium text-center px-2">Botella de leche</span>
              </div>
              <div className="aspect-square bg-blue-100 dark:bg-blue-900 rounded-md flex items-center justify-center">
                <span className="text-blue-700 dark:text-blue-300 font-medium text-center px-2">
                  Envase de detergente
                </span>
              </div>
              <div className="aspect-square bg-blue-100 dark:bg-blue-900 rounded-md flex items-center justify-center">
                <span className="text-blue-700 dark:text-blue-300 font-medium text-center px-2">Botella de champú</span>
              </div>
              <div className="aspect-square bg-blue-100 dark:bg-blue-900 rounded-md flex items-center justify-center">
                <span className="text-blue-700 dark:text-blue-300 font-medium text-center px-2">
                  Juguete de plástico
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="ldpe">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-2">
                <span className="font-bold text-green-700 dark:text-green-300">4</span>
              </div>
              LDPE - Polietileno de Baja Densidad
            </CardTitle>
            <CardDescription>
              Plástico flexible y transparente, utilizado principalmente en bolsas y envolturas.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Ejemplos comunes:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Bolsas de plástico flexibles</li>
                  <li>Envolturas de alimentos</li>
                  <li>Bolsas para pan y congelados</li>
                  <li>Tapas flexibles</li>
                  <li>Botellas exprimibles</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Cómo prepararlo:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Limpiar de residuos de alimentos</li>
                  <li>Secar completamente</li>
                  <li>Agrupar varias bolsas juntas</li>
                  <li>Evitar mezclar con otros plásticos</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="aspect-square bg-green-100 dark:bg-green-900 rounded-md flex items-center justify-center">
                <span className="text-green-700 dark:text-green-300 font-medium text-center px-2">
                  Bolsas de plástico
                </span>
              </div>
              <div className="aspect-square bg-green-100 dark:bg-green-900 rounded-md flex items-center justify-center">
                <span className="text-green-700 dark:text-green-300 font-medium text-center px-2">
                  Envoltura de alimentos
                </span>
              </div>
              <div className="aspect-square bg-green-100 dark:bg-green-900 rounded-md flex items-center justify-center">
                <span className="text-green-700 dark:text-green-300 font-medium text-center px-2">Bolsa para pan</span>
              </div>
              <div className="aspect-square bg-green-100 dark:bg-green-900 rounded-md flex items-center justify-center">
                <span className="text-green-700 dark:text-green-300 font-medium text-center px-2">
                  Botella exprimible
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="pp">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mr-2">
                <span className="font-bold text-red-700 dark:text-red-300">5</span>
              </div>
              PP - Polipropileno
            </CardTitle>
            <CardDescription>
              Plástico resistente al calor, utilizado en envases para microondas y tapas de botellas.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Ejemplos comunes:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Contenedores de alimentos</li>
                  <li>Tapas de botellas</li>
                  <li>Pajitas/popotes</li>
                  <li>Envases de yogurt</li>
                  <li>Recipientes para microondas</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Cómo prepararlo:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Enjuagar para eliminar residuos</li>
                  <li>Separar tapas de los envases</li>
                  <li>Quitar etiquetas cuando sea posible</li>
                  <li>Aplastar para ahorrar espacio</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="aspect-square bg-red-100 dark:bg-red-900 rounded-md flex items-center justify-center">
                <span className="text-red-700 dark:text-red-300 font-medium text-center px-2">
                  Contenedor de alimentos
                </span>
              </div>
              <div className="aspect-square bg-red-100 dark:bg-red-900 rounded-md flex items-center justify-center">
                <span className="text-red-700 dark:text-red-300 font-medium text-center px-2">Tapas de botellas</span>
              </div>
              <div className="aspect-square bg-red-100 dark:bg-red-900 rounded-md flex items-center justify-center">
                <span className="text-red-700 dark:text-red-300 font-medium text-center px-2">Pajitas/popotes</span>
              </div>
              <div className="aspect-square bg-red-100 dark:bg-red-900 rounded-md flex items-center justify-center">
                <span className="text-red-700 dark:text-red-300 font-medium text-center px-2">Envase de yogurt</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

