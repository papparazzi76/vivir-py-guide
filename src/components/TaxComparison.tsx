import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { TrendingDown, Calculator } from 'lucide-react';

interface CountryTax {
  name: string;
  flag: string;
  maxRate: number;
  territorial: boolean;
  socialSecurity: number;
  description: string;
}

const countries: CountryTax[] = [
  {
    name: 'Paraguay',
    flag: '🇵🇾',
    maxRate: 10,
    territorial: true,
    socialSecurity: 9,
    description: 'Solo ingresos locales, tasa máx. 10%'
  },
  {
    name: 'España',
    flag: '🇪🇸',
    maxRate: 47,
    territorial: false,
    socialSecurity: 6.35,
    description: 'Renta mundial, tasa máx. 47%'
  },
  {
    name: 'Argentina',
    flag: '🇦🇷',
    maxRate: 35,
    territorial: false,
    socialSecurity: 17,
    description: 'Renta mundial, tasa máx. 35%'
  },
  {
    name: 'Chile',
    flag: '🇨🇱',
    maxRate: 40,
    territorial: false,
    socialSecurity: 7,
    description: 'Renta mundial, tasa máx. 40%'
  }
];

export const TaxComparison = () => {
  const [income, setIncome] = useState('100000');
  const [foreignIncome, setForeignIncome] = useState('50');
  const [selectedCountries, setSelectedCountries] = useState<string[]>(['Paraguay', 'España']);

  const calculateTax = (country: CountryTax, totalIncome: number, foreignPercent: number) => {
    const foreign = (totalIncome * foreignPercent) / 100;
    const local = totalIncome - foreign;

    if (country.territorial) {
      // Paraguay: solo grava ingresos locales
      const localTax = local * (country.maxRate / 100);
      const socialSec = local * (country.socialSecurity / 100);
      return localTax + socialSec;
    } else {
      // Otros: gravan todo
      const totalTax = totalIncome * (country.maxRate / 100);
      const socialSec = totalIncome * (country.socialSecurity / 100);
      return totalTax + socialSec;
    }
  };

  const numIncome = parseFloat(income) || 0;
  const numForeignPercent = parseFloat(foreignIncome) || 0;

  const results = countries
    .filter(c => selectedCountries.includes(c.name))
    .map(country => ({
      country,
      tax: calculateTax(country, numIncome, numForeignPercent),
      netIncome: numIncome - calculateTax(country, numIncome, numForeignPercent)
    }))
    .sort((a, b) => a.tax - b.tax);

  const maxTax = Math.max(...results.map(r => r.tax));

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-6 h-6 text-primary" />
          Calculadora de Ahorro Fiscal
        </CardTitle>
        <CardDescription>
          Compara cuánto pagarías de impuestos en diferentes países según tu perfil de ingresos
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Inputs */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="income">Ingreso Anual (USD)</Label>
            <Input
              id="income"
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="100000"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="foreign">% Ingresos Extranjeros</Label>
            <Input
              id="foreign"
              type="number"
              min="0"
              max="100"
              value={foreignIncome}
              onChange={(e) => setForeignIncome(e.target.value)}
              placeholder="50"
            />
            <p className="text-xs text-muted-foreground">
              Trabajo remoto, dividendos extranjeros, etc.
            </p>
          </div>
        </div>

        {/* Country Selection */}
        <div className="space-y-2">
          <Label>Países a Comparar</Label>
          <div className="flex flex-wrap gap-2">
            {countries.map(country => (
              <button
                key={country.name}
                onClick={() => {
                  if (selectedCountries.includes(country.name)) {
                    if (selectedCountries.length > 1) {
                      setSelectedCountries(selectedCountries.filter(n => n !== country.name));
                    }
                  } else {
                    setSelectedCountries([...selectedCountries, country.name]);
                  }
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCountries.includes(country.name)
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {country.flag} {country.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="space-y-3 pt-4 border-t">
          <h3 className="font-bold text-lg">Comparativa de Impuestos + Seg. Social</h3>
          {results.map((result, idx) => {
            const savings = maxTax - result.tax;
            const savingsPercent = ((savings / numIncome) * 100).toFixed(1);
            
            return (
              <div key={result.country.name} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{result.country.flag}</span>
                    <div>
                      <p className="font-semibold">{result.country.name}</p>
                      <p className="text-xs text-muted-foreground">{result.country.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">
                      ${result.tax.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Neto: ${result.netIncome.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      idx === 0 ? 'bg-green-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${(result.tax / maxTax) * 100}%` }}
                  />
                </div>
                
                {idx === 0 && result.country.name === 'Paraguay' && savings > 0 && (
                  <div className="mt-2 flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-semibold">
                    <TrendingDown className="w-4 h-4" />
                    Ahorras ${savings.toLocaleString('en-US', { maximumFractionDigits: 0 })} anuales ({savingsPercent}% de tu ingreso)
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Chart Visualization */}
        <div className="pt-4 border-t">
          <h3 className="font-bold text-lg mb-4">Comparativa Visual</h3>
          <div className="space-y-3">
            {results.map((result) => (
              <div key={result.country.name} className="flex items-center gap-3">
                <span className="text-xl w-8">{result.country.flag}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{result.country.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {((result.tax / numIncome) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="relative w-full bg-muted rounded-full h-8 overflow-hidden">
                    {/* Net income (green) */}
                    <div
                      className="absolute left-0 top-0 h-full bg-green-500/20 flex items-center justify-end pr-2"
                      style={{ width: `${(result.netIncome / numIncome) * 100}%` }}
                    >
                      <span className="text-xs font-semibold text-green-700 dark:text-green-300">
                        ${result.netIncome.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                      </span>
                    </div>
                    {/* Tax (red) */}
                    <div
                      className="absolute right-0 top-0 h-full bg-red-500 flex items-center justify-start pl-2"
                      style={{ width: `${(result.tax / numIncome) * 100}%` }}
                    >
                      <span className="text-xs font-semibold text-white">
                        ${result.tax.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg text-sm">
          <p className="font-semibold mb-1">💡 Nota Importante:</p>
          <p className="text-muted-foreground">
            Esta calculadora es solo para fines ilustrativos. Los cálculos reales pueden variar según deducciones, 
            tratados de doble imposición, y situación personal. Consulta con un asesor fiscal internacional.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
