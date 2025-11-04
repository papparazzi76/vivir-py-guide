import { useState, useMemo } from 'react';
import { AnimatedDiv } from '../AnimatedDiv';
import { Icon } from '../Icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CURRENCIES } from '../../constants';
import { Currency } from '../../types';

// --- Definición de tipos para la calculadora ---
type Deduction = {
  id: number;
  concept: string;
  amount: string;
};

type CalculationResult = {
  grossPYG: number;
  deductionsPYG: number;
  netPYG: number;
  taxPYG: number;
};
// --- Fin de tipos ---

export const TaxationSection = () => {
  // --- Lógica de la Calculadora ---
  const [currencyCode, setCurrencyCode] = useState<Currency['code']>('USD');
  const [grossIncome, setGrossIncome] = useState('');
  const [deductions, setDeductions] = useState<Deduction[]>([
    { id: 1, concept: '', amount: '' },
  ]);
  const [calculationResult, setCalculationResult] =
    useState<CalculationResult | null>(null);

  [cite_start]// Tramos de IRP-RSP según el PDF [cite: 117]
  const BRACKET_1_LIMIT = 50000000;
  const BRACKET_2_LIMIT = 150000000;
  const BRACKET_1_RATE = 0.08;
  const BRACKET_2_RATE = 0.09;
  const BRACKET_3_RATE = 0.10;

  [cite_start]// Impuestos pre-calculados por tramo [cite: 117]
  const BRACKET_1_TAX = BRACKET_1_LIMIT * BRACKET_1_RATE; // 4,000,000
  const BRACKET_2_TAX =
    (BRACKET_2_LIMIT - BRACKET_1_LIMIT) * BRACKET_2_RATE; // 100,000,000 * 0.09 = 9,000,000

  /**
   * Limpia un string de formato numérico (puntos, comas) y lo convierte en número.
   */
  const parseNumericInput = (input: string): number => {
    return parseFloat(input.replace(/[\.,]/g, '')) || 0;
  };

  /**
   * Formatea un monto numérico a la moneda seleccionada.
   */
  const formatCurrency = (amount: number, currency: Currency['code']) => {
    const selected = CURRENCIES.find((c) => c.code === currency);
    if (!selected) return 'N/A';

    // No convertir si es PYG, dividir si es moneda extranjera
    const value = currency === 'PYG' ? amount : amount / selected.rate;

    return `${selected.symbol} ${value.toLocaleString('es-PY', {
      maximumFractionDigits: currency === 'PYG' ? 0 : 2,
      minimumFractionDigits: currency === 'PYG' ? 0 : 2,
    })}`;
  };

  /**
   * Calcula el total de deducciones en la moneda seleccionada.
   */
  const totalDeductionsInCurrency = useMemo(() => {
    return deductions.reduce((acc, curr) => acc + parseNumericInput(curr.amount), 0);
  }, [deductions]);

  /**
   * Maneja el cambio en cualquier campo de una fila de deducción.
   */
  const handleDeductionChange = (
    id: number,
    field: 'concept' | 'amount',
    value: string,
  ) => {
    setDeductions((prev) =>
      prev.map((d) => (d.id === id ? { ...d, [field]: value } : d)),
    );
  };

  /**
   * Agrega una nueva fila vacía de deducción.
   */
  const addDeductionRow = () => {
    setDeductions((prev) => [
      ...prev,
      { id: Date.now(), concept: '', amount: '' },
    ]);
  };

  /**
   * Elimina una fila de deducción por su ID.
   */
  const removeDeductionRow = (id: number) => {
    setDeductions((prev) => prev.filter((d) => d.id !== id));
  };

  /**
   * Ejecuta el cálculo principal del impuesto.
   */
  const handleCalculate = () => {
    const selectedCurrency = CURRENCIES.find((c) => c.code === currencyCode);
    if (!selectedCurrency) return;

    // 1. Convertir todo a PYG
    const grossPYG = parseNumericInput(grossIncome) * selectedCurrency.rate;
    const deductionsPYG = totalDeductionsInCurrency * selectedCurrency.rate;

    // 2. Calcular Renta Neta
    const netPYG = grossPYG - deductionsPYG;

    let taxInPYG = 0;

    [cite_start]// 3. Aplicar lógica de tramos progresivos [cite: 117]
    if (netPYG > BRACKET_2_LIMIT) {
      taxInPYG =
        BRACKET_1_TAX +
        BRACKET_2_TAX +
        (netPYG - BRACKET_2_LIMIT) * BRACKET_3_RATE;
    } else if (netPYG > BRACKET_1_LIMIT) {
      taxInPYG = BRACKET_1_TAX + (netPYG - BRACKET_1_LIMIT) * BRACKET_2_RATE;
    } else if (netPYG > 0) {
      taxInPYG = netPYG * BRACKET_1_RATE;
    }

    // 4. Guardar resultados
    setCalculationResult({
      grossPYG,
      deductionsPYG,
      netPYG: netPYG > 0 ? netPYG : 0,
      taxPYG: taxInPYG,
    });
  };
  // --- Fin de la Lógica de la Calculadora ---

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedDiv className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Fiscalidad en Paraguay
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Un régimen favorable basado en el Principio de Territorialidad.
          </p>
        </AnimatedDiv>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Columna de Información (Existente) */}
          <div className="lg:col-span-2">
            <AnimatedDiv delay={100}>
              <Card className="mb-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Icon name="shield" size={24} className="text-primary" />
                    [cite_start]Pilar Central: Principio de Territorialidad [cite: 6]
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground">
                    [cite_start]Paraguay se rige por el <strong>Principio de la Fuente</strong>[cite: 37].
                    Esto significa que, en general, solo se gravan las rentas
                    generadas <strong>dentro</strong> de las fronteras del país
                    [cite_start][cite: 6].
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start space-x-3">
                      <Icon
                        name="check"
                        className="text-green-600 mt-1 flex-shrink-0"
                      />
                      <p>
                        <strong>Impuesto 0% sobre rentas extranjeras:</strong>{' '}
                        [cite_start]Salarios por trabajo remoto para empleadores extranjeros[cite: 47],
                        [cite_start]dividendos de empresas foráneas [cite: 49] o intereses bancarios en
                        [cite_start]el exterior [cite: 50] no están sujetos a impuestos en Paraguay.
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedDiv>

            <AnimatedDiv delay={200}>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="item-1"
                  className="bg-white rounded-xl shadow-lg px-6"
                >
                  <AccordionTrigger className="text-xl font-bold hover:no-underline">
                    [cite_start]Impuesto a la Renta Personal (IRP) [cite: 107]
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-2">
                    <p>
                      [cite_start]Es el impuesto principal para individuos residentes[cite: 107].
                      Se divide en dos categorías que se liquidan por separado
                      [cite_start][cite: 109]:
                    </p>
                    <div>
                      <h4 className="font-semibold text-base text-primary">
                        1. [cite_start]Rentas de Servicios Personales (IRP-RSP) [cite: 110]
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Grava ingresos por trabajo local (salarios, honorarios)
                        [cite_start][cite: 113].
                      </p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>
                          <strong>Tasas Progresivas:</strong> 8%, 9% y 10% sobre
                          [cite_start]la renta neta[cite: 117].
                        </li>
                        <li>
                          <strong>Deducciones:</strong> Se pueden deducir gastos
                          [cite_start]personales y familiares realizados en el país[cite: 120].
                        </li>
                        <li>
                          <strong>Deducciones Clave para Expat:</strong> Se
                          [cite_start]permite deducir gastos en <strong>salud</strong> [cite: 125] y{' '}
                          [cite_start]<strong>educación</strong> [cite: 126] realizados en el{' '}
                          <strong>exterior</strong>.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-base text-primary">
                        2. [cite_start]Rentas y Ganancias del Capital (IRP-RGC) [cite: 111]
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Grava rentas pasivas de{' '}
                        <strong>fuente paraguaya</strong> (alquileres, intereses
                        [cite_start]locales)[cite: 130].
                      </p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>
                          [cite_start]<strong>Tasa Única:</strong> 8% sobre la Renta Neta[cite: 132].
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="bg-white rounded-xl shadow-lg px-6 mt-4"
                >
                  <AccordionTrigger className="text-xl font-bold hover:no-underline">
                    [cite_start]Impuesto al Valor Agregado (IVA) [cite: 138]
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-2">
                    [cite_start]<p>Es el principal impuesto al consumo [cite: 27-28].</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      [cite_start]<li><strong>Tasa General:</strong> 10%[cite: 145].</li>
                      <li>
                        <strong>Tasa Reducida:</strong> 5% para alquileres de
                        [cite_start]vivienda y ciertos bienes[cite: 145].
                      </li>
                      <li>
                        <strong>¡Clave para Nómadas Digitales!:</strong> La{' '}
                        <strong>exportación de servicios</strong> (como
                        consultoría, desarrollo de software, etc.) a clientes del
                        [cite_start]exterior está <strong>exenta de IVA</strong>[cite: 151, 153].
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="bg-white rounded-xl shadow-lg px-6 mt-4"
                >
                  <AccordionTrigger className="text-xl font-bold hover:no-underline">
                    [cite_start]Impuesto a los Dividendos (IDU) [cite: 164]
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-2">
                    <p>
                      Grava la <strong>distribución</strong> de ganancias de{' '}
                      [cite_start]<strong>empresas paraguayas</strong> a sus accionistas [cite: 165-166].
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      [cite_start]<li><strong>Tasa para Residentes:</strong> 8%[cite: 168].</li>
                      [cite_start]<li><strong>Tasa para No Residentes:</strong> 15%[cite: 169].</li>
                      <li>
                        <strong>Importante:</strong> Este impuesto no aplica a
                        [cite_start]dividendos recibidos de empresas extranjeras[cite: 175].
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AnimatedDiv>
          </div>

          {/* Columna de Calculadora (Mejorada) */}
          <div className="lg:col-span-1">
            <AnimatedDiv delay={300}>
              <Card className="shadow-lg hover-lift sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Icon name="calculator" size={24} className="text-primary" />
                    Calculadora IRP (RSP)
                  </CardTitle>
                  <CardDescription>
                    Estima tu IRP por Servicios Personales. Solo para
                    fines ilustrativos.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currency">Moneda</Label>
                    <Select
                      value={currencyCode}
                      onValueChange={(val) =>
                        setCurrencyCode(val as Currency['code'])
                      }
                    >
                      <SelectTrigger id="currency">
                        <SelectValue placeholder="Seleccionar moneda" />
                      </SelectTrigger>
                      <SelectContent>
                        {CURRENCIES.map((curr) => (
                          <SelectItem key={curr.code} value={curr.code}>
                            {curr.code} ({curr.symbol})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="grossIncome">Renta Bruta Anual</Label>
                    <Input
                      id="grossIncome"
                      type="text"
                      placeholder="Ej: 80000"
                      value={grossIncome}
                      onChange={(e) => setGrossIncome(e.target.value)}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Gastos Deducibles</Label>
                    {deductions.map((item, index) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-2"
                      >
                        <Input
                          type="text"
                          placeholder="Concepto (Ej: Alquiler)"
                          value={item.concept}
                          onChange={(e) =>
                            handleDeductionChange(
                              item.id,
                              'concept',
                              e.target.value,
                            )
                          }
                          className="flex-[3]"
                        />
                        <Input
                          type="text"
                          placeholder="Cantidad"
                          value={item.amount}
                          onChange={(e) =>
                            handleDeductionChange(
                              item.id,
                              'amount',
                              e.target.value,
                            )
                          }
                          className="flex-[2]"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeDeductionRow(item.id)}
                          disabled={deductions.length <= 1}
                          className="text-destructive hover:text-destructive"
                        >
                          <Icon name="minus" size={16} />
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addDeductionRow}
                      className="w-full"
                    >
                      <Icon name="plus" size={16} className="mr-2" />
                      Agregar Gasto
                    </Button>
                  </div>

                  <Button onClick={handleCalculate} className="w-full">
                    <Icon name="check" size={16} className="mr-2" />
                    Calcular Impuesto
                  </Button>
                </CardContent>

                {calculationResult !== null && (
                  <CardFooter className="flex flex-col items-start space-y-3 bg-muted/50 pt-6">
                    <h4 className="font-semibold text-lg w-full pb-2 border-b">
                      Resultado Estimado:
                    </h4>

                    <div className="w-full flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">
                        Ingresos Brutos ({currencyCode}):
                      </span>
                      <span className="font-medium">
                        {formatCurrency(calculationResult.grossPYG, currencyCode)}
                      </span>
                    </div>

                    <div className="w-full flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">
                        Total Deducible ({currencyCode}):
                      </span>
                      <span className="font-medium text-red-600">
                        - {formatCurrency(calculationResult.deductionsPYG, currencyCode)}
                      </span>
                    </div>
                    
                    <div className="w-full flex justify-between items-center text-sm font-semibold pt-2 border-t">
                      <span className="text-foreground">
                        Renta Neta ({currencyCode}):
                      </span>
                      <span className="text-foreground">
                        {formatCurrency(calculationResult.netPYG, currencyCode)}
                      </span>
                    </div>
                    
                    <div className="w-full flex justify-between items-center text-base font-bold text-primary pt-2 border-t">
                      <span className="">
                        Impuesto a Pagar (PYG):
                      </span>
                      <span className="">
                        {formatCurrency(calculationResult.taxPYG, 'PYG')}
                      </span>
                    </div>
                    
                    {currencyCode !== 'PYG' && (
                       <div className="w-full flex justify-between items-center text-base font-bold text-primary">
                        <span className="">
                          Impuesto a Pagar ({currencyCode}):
                        </span>
                        <span className="">
                          {formatCurrency(calculationResult.taxPYG, currencyCode)}
                        </span>
                      </div>
                    )}

                    <p className="text-xs text-muted-foreground pt-2">
                      *Cálculo basado en las tasas progresivas del IRP-RSP
                      [cite_start][cite: 117]. No constituye asesoría fiscal.
                    </p>
                  </CardFooter>
                )}
              </Card>
            </AnimatedDiv>
          </div>
        </div>
      </div>
    </section>
  );
};
