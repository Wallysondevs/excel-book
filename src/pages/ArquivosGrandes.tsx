import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ArquivosGrandes() {
  return (
    <PageContainer title=".xlsx, .xlsm, .xlsb, .csv — qual usar quando" subtitle="Comparativo prático em pastas reais." difficulty="intermediario" timeToRead="5 min">
      <h2>Cenários</h2>
      <CodeBlock language="text" code={`Pasta de 5 MB com fórmulas simples:    .xlsx (padrão)
Pasta com macros para colegas:          .xlsm
Pasta de 80 MB com Power Query/Pivot:   .xlsb (até 10× menor)
Troca com sistema/banco:                .csv (UTF-8)
Modelo reutilizável:                    .xltx (vira modelo, abre cópia)`} />
      <h2>Quando .xlsb te trai</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Excel Online tem suporte limitado" }} />
        <li dangerouslySetInnerHTML={{ __html: "Algumas ferramentas de BI não leem (verifique Power BI Desktop atual)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Não dá para inspecionar XML internamente (binário)" }} />
      </ul>
    </PageContainer>
  );
}
