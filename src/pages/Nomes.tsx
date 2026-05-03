import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Nomes() {
    return (
      <PageContainer title="Nomes de Intervalos" subtitle="Substitua A1:A1000 por nomes legíveis. Gerenciador de Nomes e escopo." difficulty="intermediario" timeToRead="7 min">
        <h2>Por que nomear?</h2>
      <p>Compare as duas fórmulas:</p>
      <CodeBlock language="text" code={`=SOMA(B2:B1000)*Plan2!\$D\$1
  =SOMA(Vendas)*Imposto`} />
      <p>A segunda é instantaneamente legível. Nomes funcionam como variáveis.</p>
      <h2>Como criar um nome</h2>
      <ul>
        <li><strong>Caixa de Nome:</strong> selecione o intervalo, digite o nome na caixa de nome (canto superior esquerdo) e Enter.</li>
        <li><strong>Definir Nome:</strong> Fórmulas → Definir Nome.</li>
        <li><strong>Criar a partir da Seleção:</strong> Fórmulas → Criar a partir da Seleção (usa cabeçalhos como nomes).</li>
      </ul>
      <h2>Regras para o nome</h2>
      <ul>
        <li>Não pode começar com número ou ter espaços.</li>
        <li>Não pode ser igual a referência válida (não pode chamar de <code>A1</code>).</li>
        <li>Maiúsculas/minúsculas são ignoradas.</li>
        <li>Use camelCase ou _ : <code>imposto</code>, <code>taxaJuros</code>, <code>preco_venda</code>.</li>
      </ul>
      <h2>Gerenciador de Nomes</h2>
      <p><strong>Fórmulas → Gerenciador de Nomes</strong> (<code>Ctrl + F3</code>). Lista todos, permite editar, excluir e ver o escopo (Pasta inteira ou Planilha específica).</p>
      <h2>Constantes nomeadas</h2>
      <p>Um nome não precisa apontar para uma célula — pode ser uma constante ou fórmula:</p>
      <CodeBlock language="text" code={`Nome: PI
  Refere-se a: =3,14159265

  Nome: HOJE_TIMESTAMP
  Refere-se a: =AGORA()

  Nome: ImpostoFederal
  Refere-se a: =0,15`} />
      <AlertBox type="tip" title="F3 colando nomes">
        Dentro de uma fórmula, pressione <code>F3</code> para abrir lista de nomes disponíveis e colar.
      </AlertBox>
      </PageContainer>
    );
  }
  