import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function EntradaDados() {
    return (
      <PageContainer title="Inserir e Editar Dados" subtitle="Digitar, AutoPreenchimento, Listas Personalizadas, Preenchimento Relâmpago." difficulty="iniciante" timeToRead="8 min">
        <h2>Digitando na célula</h2>
      <p dangerouslySetInnerHTML={{ __html: "Clique na célula e digite. Pressione <code>Enter</code> para confirmar e descer, <code>Tab</code> para confirmar e ir à direita, <code>Esc</code> para cancelar. Para editar uma célula com conteúdo: duplo clique ou tecla <code>F2</code>." }} />
      <h2>AutoPreenchimento (alça de preenchimento)</h2>
      <p dangerouslySetInnerHTML={{ __html: "Selecione a célula e arraste o pequeno quadrado verde do canto inferior direito. O Excel detecta padrões:" }} />
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Digite <code>1</code>, arraste → 1, 1, 1, 1..." }} />
        <li dangerouslySetInnerHTML={{ __html: "Digite <code>1</code> e <code>2</code>, selecione ambos e arraste → 1, 2, 3, 4..." }} />
        <li dangerouslySetInnerHTML={{ __html: "Digite <code>Janeiro</code> → Fevereiro, Março, Abril..." }} />
        <li dangerouslySetInnerHTML={{ __html: "Digite <code>Segunda</code> → Terça, Quarta..." }} />
        <li dangerouslySetInnerHTML={{ __html: "Digite uma data e arraste → série de datas." }} />
      </ul>
      <h2>Preenchimento Relâmpago (Flash Fill)</h2>
      <p dangerouslySetInnerHTML={{ __html: "Recurso mágico desde Excel 2013. Demonstre o padrão uma vez e o Excel completa o resto. Atalho: <code>Ctrl + E</code>." }} />
      <CodeBlock language="text" code={`A                    | B (digite o padrão)
  ---------------------+---------------------
  João da Silva        | João
  Maria de Souza       | Maria          ← Ctrl+E aqui
  Pedro Henrique Costa | Pedro
  Ana Paula Lima       | Ana            ← preenchidas automaticamente`} />
      <AlertBox type="tip" title="Casos úteis para Flash Fill">
        <span dangerouslySetInnerHTML={{ __html: "Extrair primeiro nome, formatar telefone <code>(11) 9 9999-9999</code>, juntar nome+sobrenome, colocar CPF com máscara, extrair domínio do email." }} />
      </AlertBox>
      <h2>Colar Especial</h2>
      <p dangerouslySetInnerHTML={{ __html: "Após copiar, use <code>Ctrl + Alt + V</code> para abrir Colar Especial. Permite colar apenas valores, apenas formatação, transpor (linha vira coluna), somar etc." }} />
      <h2>Listas Personalizadas</h2>
      <p dangerouslySetInnerHTML={{ __html: "Em <strong>Arquivo → Opções → Avançado → Editar Listas Personalizadas</strong> você pode criar suas próprias séries (ex: nomes de filiais, vendedores) que o AutoPreenchimento reconhecerá." }} />
      </PageContainer>
    );
  }
  