import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function AtalhosMac() {
  return (
    <PageContainer title="Tabela de atalhos no Mac" subtitle="Equivalentes principais — ⌘ no lugar de Ctrl, normalmente." difficulty="iniciante" timeToRead="4 min">
      <h2>Mapa rápido</h2>
      <CodeBlock language="text" code={`Windows           Mac
Ctrl + algo       ⌘ + algo  (na maioria)
Alt               ⌥ (Option)
F2                Control + U
Ctrl + ;          Control + ;
Alt + Enter       Option + Enter (quebra linha na célula)
Ctrl + Shift + L  ⌘ + Shift + F (filtro)
F4 (alternar \$)   ⌘ + T
Ctrl + Page Dn    Option + → (próxima planilha)`} />
      <h2>Diferenças importantes</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Tecla <strong>F</strong> exige <kbd>fn</kbd> em alguns teclados" }} />
        <li dangerouslySetInnerHTML={{ __html: "<kbd>Ctrl</kbd> do Mac é <strong>diferente</strong> de <kbd>⌘</kbd> — alguns atalhos usam Ctrl literal" }} />
        <li dangerouslySetInnerHTML={{ __html: "Em alguns Macs, <strong>delete</strong> é Backspace; <strong>fn+delete</strong> apaga à frente" }} />
      </ul>
    </PageContainer>
  );
}
