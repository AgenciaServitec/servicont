import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PersonalInfo() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-primary">
        Información de mi cuenta
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Información personal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
            <Input placeholder="Nombres" />
            <Input placeholder="Apellidos" />
            <div className="sm:col-start-2 flex justify-end">
              <Button
                variant="secondary"
                className="text-white w-full sm:w-auto"
              >
                Editar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Documento identidad</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
            <Select defaultValue="dni">
              <option value="dni">DNI</option>
              <option value="passport">Pasaporte</option>
              <option value="other">Otro</option>
            </Select>
            <Input placeholder="Numero documento" />
            <div className="sm:col-start-2 flex justify-end">
              <Button
                variant="secondary"
                className="text-white w-full sm:w-auto"
              >
                Editar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ubicación</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
            <Select defaultValue="peru">
              <option value="peru">Perú</option>
              <option value="colombia">Colombia</option>
              <option value="mexico">México</option>
            </Select>
            <Select defaultValue="lima">
              <option value="lima">Lima</option>
              <option value="arequipa">Arequipa</option>
              <option value="trujillo">Trujillo</option>
            </Select>
            <div className="sm:col-start-2 flex justify-end">
              <Button
                variant="secondary"
                className="text-white w-full sm:w-auto"
              >
                Editar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dirección de correo electrónico</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
            <Input placeholder="Email" />
            <div className="flex gap-2 justify-end">
              <Button
                variant="secondary"
                className="text-white flex-1 sm:flex-none"
              >
                Editar
              </Button>
              <Button variant="outline" className="flex-1 sm:flex-none">
                Verificar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Número de teléfono</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
            <div className="flex gap-2">
              <Select defaultValue="+51">
                <option value="+51">+51</option>
                <option value="+52">+52</option>
                <option value="+57">+57</option>
              </Select>
              <Input placeholder="Teléfono" className="w-2/3" />
            </div>
            <div className="flex gap-2 justify-end">
              <Button
                variant="secondary"
                className="text-white flex-1 sm:flex-none"
              >
                Editar
              </Button>
              <Button variant="outline" className="flex-1 sm:flex-none">
                Verificar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
