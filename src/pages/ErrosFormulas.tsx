import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ErrosFormulas() {
  return (
    <PageContainer title="Erros de fórmula — significado e cura" subtitle="#REF!, #DIV/0!, #N/D, #VALOR!, #NOME?, #NULO!, #NÚM!, #SPILL!" difficulty="intermediario" timeToRead="7 min">
      <h2>Tabela de erros</h2>
      <CodeBlock language="text" code={`#####     coluna estreita demais (alargue)
#REF!     referência inválida (linha/coluna apagada)
#DIV/0!   divisão por zero
#N/D      não disponível (PROCV não achou)
#VALOR!   tipo errado (texto onde precisava número)
#NOME?    nome de função/intervalo desconhecido (typo)
#NULO!    interseção vazia entre intervalos
#NÚM!     número fora do domínio (raiz de negativo, etc)
#SPILL!   array dinâmico sem espaço para "derramar"
#CALC!    cálculo de array com problema lógico
#GETTING_DATA  dado vindo de fonte externa (espere)`} />
      <h2>#N/D em PROCV — diagnóstico</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Valor procurado não existe (verifique espaços extras com <code>=ARRUMAR()</code>)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Tipo diferente: número vs texto (<code>=A1*1</code> ou <code>=A1&\"\"</code> para forçar)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Maiúsculas/minúsculas: PROCV ignora, mas atenção a acentos invisíveis" }} />
        <li dangerouslySetInnerHTML={{ __html: "Tabela mudou e a coluna_índice virou outra coisa" }} />
      </ul>
      <h2>#SPILL!</h2>
      <p dangerouslySetInnerHTML={{ __html: "Aparece em fórmulas de array dinâmico (PROCX, FILTRO, ÚNICO…). Causa: alguma célula no caminho do 'derramamento' não está vazia. Apague o conteúdo abaixo/direita e o array preenche sozinho." }} />
      <AlertBox type="tip" title="Ocultar #N/D em PROCV">
        <span dangerouslySetInnerHTML={{ __html: "Use <code>=PROCX(B2; tabela; retorno; \"\")</code> ou envolva com <code>=SEERRO(formula; \"\")</code>." }} />
      </AlertBox>
    </PageContainer>
  );
}
