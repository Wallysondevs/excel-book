import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Indireto() {
  return (
    <PageContainer title="INDIRETO — referência por texto" subtitle="Construa o endereço como string e o Excel resolve." difficulty="avancado" timeToRead="6 min">
      <h2>Para que serve</h2>
      <p dangerouslySetInnerHTML={{ __html: "Faz uma string virar referência de verdade. Usado para: alternar entre planilhas, validações em cascata e nomes dinâmicos." }} />
      <h2>Exemplos</h2>
      <CodeBlock language="text" code={`=INDIRETO("A1")                → conteúdo de A1
=INDIRETO("A" & B1)            → A + número que estiver em B1
=INDIRETO("'" & B1 & "'!A1")   → A1 da planilha cujo nome está em B1
=SOMA( INDIRETO("Vendas!B2:B" & B1) )    → soma B2 até B(B1)`} />
      <h2>Validação em cascata</h2>
      <CodeBlock language="text" code={`Crie nomes:    Brasil = lista de UFs    SP = lista de cidades de SP
                                       RJ = lista de cidades do RJ ...

Validação UF:        Lista, Origem: =Brasil
Validação Cidade:    Lista, Origem: =INDIRETO(A2)   (A2 contém UF escolhida)`} />
      <AlertBox type="warning" title="Volátil + frágil">
        <span dangerouslySetInnerHTML={{ __html: "INDIRETO recalcula sempre e quebra ao renomear planilhas. Use só quando arrays dinâmicos não resolvem." }} />
      </AlertBox>
    </PageContainer>
  );
}
