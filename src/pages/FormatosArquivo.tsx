import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function FormatosArquivo() {
  return (
    <PageContainer title="Formatos de arquivo (xlsx, xlsm, xlsb, csv)" subtitle="Qual escolher e quando — comparação detalhada." difficulty="intermediario" timeToRead="6 min">
      <h2>Comparação</h2>
      <CodeBlock language="text" code={`Formato | Tamanho | Velocidade | Macros | Uso típico
.xlsx   | grande  | normal     | não    | padrão moderno
.xlsm   | grande  | normal     | sim    | pasta com VBA
.xlsb   | pequeno | rápido     | sim    | pasta GIGANTE (>20MB)
.csv    | mínimo  | -          | não    | troca com sistemas/banco
.xls    | médio   | lento      | sim    | legado Excel 97-2003
.xltx   | -       | -          | não    | modelo (template)`} />
      <h2>Quando usar .xlsb</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Pastas com mais de <strong>50 MB</strong> ou centenas de milhares de linhas." }} />
        <li dangerouslySetInnerHTML={{ __html: "Pastas que demoram muito para abrir/salvar." }} />
        <li dangerouslySetInnerHTML={{ __html: "Pastas com muitas Tabelas Dinâmicas e fórmulas pesadas." }} />
      </ul>
      <h2>Quando NÃO usar .xlsb</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Quando outros precisam revisar via web ou Excel Online (suporte limitado)." }} />
        <li dangerouslySetInnerHTML={{ __html: "Quando você precisa abrir em Mac de versão antiga (compatibilidade)." }} />
        <li dangerouslySetInnerHTML={{ __html: "Quando vai integrar com Power BI Service (prefira .xlsx)." }} />
      </ul>
      <h2>CSV — armadilhas no BR</h2>
      <CodeBlock language="text" code={`Padrão BR:    separador ; (ponto-e-vírgula), decimal vírgula
Padrão US:    separador , (vírgula), decimal ponto

UTF-8 vs ANSI: caracteres com acento "vão embora" se a codificação
                não bater. Sempre prefira UTF-8 com BOM.`} />
      <AlertBox type="tip" title="Conversão em massa">
        <span dangerouslySetInnerHTML={{ __html: "Use Power Query para abrir CSV: você define separador, codificação, tipos de cada coluna e aplica em qualquer arquivo similar com 1 clique." }} />
      </AlertBox>
    </PageContainer>
  );
}
