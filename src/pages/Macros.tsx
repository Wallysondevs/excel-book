import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Macros() {
    return (
      <PageContainer title="Gravar Macros" subtitle="Automatize tarefas repetitivas sem programar." difficulty="intermediario" timeToRead="7 min">
        <h2>O que é uma macro?</h2>
      <p dangerouslySetInnerHTML={{ __html: "Uma <strong>macro</strong> é uma sequência de ações gravada e que pode ser reproduzida com um clique ou atalho. Por baixo, tudo vira código <strong>VBA</strong> — você não precisa entender, mas pode aprender depois." }} />
      <h2>Habilitar Desenvolvedor</h2>
      <p dangerouslySetInnerHTML={{ __html: "<strong>Arquivo → Opções → Personalizar Faixa de Opções</strong> → marque <strong>Desenvolvedor</strong>." }} />
      <h2>Gravar</h2>
      <p dangerouslySetInnerHTML={{ __html: "Guia <strong>Desenvolvedor → Gravar Macro</strong>." }} />
      <CodeBlock language="text" code={`Nome:                LimparBase
  Tecla de atalho:     Ctrl + Shift + L
  Armazenar em:        Esta Pasta de Trabalho
  Descrição:           remove duplicatas e formata`} />
      <p dangerouslySetInnerHTML={{ __html: "Daí em diante, <strong>tudo o que você fizer</strong> é gravado. Quando terminar: <strong>Parar Gravação</strong>." }} />
      <AlertBox type="warning" title="Referências relativas vs absolutas">
        <span dangerouslySetInnerHTML={{ __html: "Antes de gravar, decida em <strong>Desenvolvedor → Usar Referências Relativas</strong>. Sem isso, a macro sempre vai mexer nas mesmas células absolutas (A1, A2...) — não no que está selecionado." }} />
      </AlertBox>
      <h2>Salvar com macros</h2>
      <p dangerouslySetInnerHTML={{ __html: "Salve como <code>.xlsm</code> (com macros) ou <code>.xlsb</code>. Arquivos <code>.xlsx</code> <strong>perdem as macros</strong> sem aviso." }} />
      <h2>Atribuir a um botão</h2>
      <p dangerouslySetInnerHTML={{ __html: "<strong>Inserir → Formas → Retângulo</strong>, depois botão direito → <strong>Atribuir Macro</strong>. O retângulo vira um botão clicável." }} />
      <h2>Editar a macro</h2>
      <p dangerouslySetInnerHTML={{ __html: "<strong>Desenvolvedor → Macros → Editar</strong> abre o <strong>Editor VBA</strong> (<code>Alt + F11</code>). Ali você vê o código gerado e pode aprimorá-lo." }} />
      </PageContainer>
    );
  }
  