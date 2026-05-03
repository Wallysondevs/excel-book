import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Validacao() {
    return (
      <PageContainer title="Validação de Dados" subtitle="Restrinja o que pode ser digitado, crie listas suspensas e mensagens." difficulty="intermediario" timeToRead="8 min">
        <h2>Para que serve?</h2>
      <p>Garante qualidade dos dados na entrada — evita digitação errada, número fora do esperado, datas inválidas. Indispensável em planilhas compartilhadas.</p>
      <h2>Onde fica?</h2>
      <p>Selecione células → <strong>Dados → Validação de Dados</strong>. A caixa tem 3 abas: Configurações, Mensagem de entrada, Alerta de erro.</p>
      <h2>Tipos de validação</h2>
      <ul>
        <li><strong>Número inteiro / decimal</strong> — entre, maior que etc.</li>
        <li><strong>Data / Hora</strong> — entre dois períodos.</li>
        <li><strong>Comprimento do texto</strong> — exatamente N caracteres (CPF, CEP).</li>
        <li><strong>Lista</strong> — dropdown com valores fixos ou de um intervalo.</li>
        <li><strong>Personalizado</strong> — qualquer fórmula que devolva VERDADEIRO.</li>
      </ul>
      <h2>Lista suspensa</h2>
      <CodeBlock language="text" code={`Critério: Lista
  Origem: SP;RJ;MG;BA;RS              (digitando direto)
  Origem: =\$F\$2:\$F\$10                 (intervalo)
  Origem: =tblEstados[UF]             (de uma tabela — auto-expande)`} />
      <AlertBox type="tip" title="Lista dependente (cascata)">
        Use <code>=INDIRETO(A2)</code> como origem na lista de B2. Crie nomes para cada UF (SP, RJ...) com cidades dentro. Quando A2=SP, B2 mostra cidades de SP.
      </AlertBox>
      <h2>Validação personalizada com fórmula</h2>
      <CodeBlock language="text" code={`Só números pares:
  =MOD(A1;2)=0

  Não permitir duplicatas:
  =CONT.SE(\$A\$1:\$A\$100; A1)=1

  Email com @:
  =ÉNÚM(LOCALIZAR("@"; A1))

  Apenas datas úteis:
  =DIA.DA.SEMANA(A1;2)<6`} />
      <h2>Mensagem e alerta</h2>
      <p>Aba <strong>Mensagem de Entrada</strong>: aparece quando a célula é selecionada. <strong>Alerta de Erro</strong>: surge quando o usuário tenta digitar valor inválido. Estilos: Parar (bloqueia), Aviso (avisa, permite continuar), Informação (só informa).</p>
      <h2>Identificar dados inválidos existentes</h2>
      <p>Após criar regra, <strong>Dados → Validação → Circular Dados Inválidos</strong> marca com círculo vermelho tudo que viola a regra.</p>
      </PageContainer>
    );
  }
  