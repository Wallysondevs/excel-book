import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function TabelaDinamicaMostrarValor() {
  return (
    <PageContainer title="TD — Mostrar valores como (% do total, etc)" subtitle="Mude a leitura do mesmo dado em 1 clique." difficulty="intermediario" timeToRead="6 min">
      <h2>Como acessar</h2>
      <p dangerouslySetInnerHTML={{ __html: "Botão direito no campo de valor → <strong>Mostrar Valores como</strong>." }} />
      <h2>Opções principais</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>% do Total Geral</strong> — fatia sobre tudo" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>% do Total da Linha</strong> — fatia sobre o subtotal da linha" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>% do Total da Coluna</strong> — fatia sobre o subtotal da coluna" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>% Da</strong> — comparado a um item base (ex: vs janeiro)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Diferença De</strong> — variação absoluta vs base" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>% Diferença De</strong> — variação % vs base" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Total em Execução em</strong> — soma acumulada" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Classificar do Maior para o Menor</strong> — rank" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Índice</strong> — peso relativo da combinação" }} />
      </ul>
      <h2>Caso prático: % vs mês anterior</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Arraste Valor para Valores DUAS vezes" }} />
        <li dangerouslySetInnerHTML={{ __html: "No 2º, escolha % Diferença De → Mês → (anterior)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Resultado: ao lado do valor, % de variação MoM" }} />
      </ul>
    </PageContainer>
  );
}
