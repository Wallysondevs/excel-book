import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function CalculoManual() {
  return (
    <PageContainer title="Cálculo manual e iterativo" subtitle="Pause o recálculo automático e resolva referências circulares." difficulty="avancado" timeToRead="5 min">
      <h2>Cálculo Manual</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Fórmulas → Opções de Cálculo → Manual</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "<kbd>F9</kbd> recalcula tudo / <kbd>Shift</kbd>+<kbd>F9</kbd> só esta planilha" }} />
        <li dangerouslySetInnerHTML={{ __html: "Útil ao editar planilha pesada" }} />
      </ul>
      <h2>Cálculo iterativo</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Arquivo → Opções → Fórmulas → Habilitar Cálculo Iterativo</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Necessário para algumas referências circulares intencionais" }} />
        <li dangerouslySetInnerHTML={{ __html: "Defina máximo de iterações e tolerância" }} />
      </ul>
      <h2>Exemplo de circular intencional — IR sobre IR</h2>
      <CodeBlock language="text" code={`A1 = receita líquida desejada = 10000
B1 = imposto (sobre o BRUTO)
C1 = receita BRUTA = A1 + B1
B1 = C1 * 27,5%

→ B1 depende de C1, e C1 depende de B1. 
   Sem cálculo iterativo, dá erro #REF.`} />
    </PageContainer>
  );
}
