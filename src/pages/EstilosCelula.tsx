import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function EstilosCelula() {
  return (
    <PageContainer title="Estilos de célula e temas" subtitle="Reaproveite formatação como CSS — mude tudo em 1 clique." difficulty="intermediario" timeToRead="5 min">
      <h2>Aplicar um estilo pronto</h2>
      <p dangerouslySetInnerHTML={{ __html: "<strong>Página Inicial → Estilos de Célula</strong> abre a galeria. Excel já vem com <em>Título 1, 2, 3, Total, Bom, Ruim, Neutro, Saída, Entrada, Cálculo</em> etc." }} />
      <h2>Criar um estilo seu</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Formate uma célula do jeito que quer (cor, fonte, bordas, número)." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Página Inicial → Estilos de Célula → Novo Estilo de Célula…</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Dê nome (ex: <em>'Moeda BR'</em>) e marque os atributos a salvar." }} />
        <li dangerouslySetInnerHTML={{ __html: "Pronto: aplique em qualquer célula com 1 clique." }} />
      </ul>
      <h2>Por que vale a pena</h2>
      <p dangerouslySetInnerHTML={{ __html: "Se o cliente pedir <em>'troca o azul para roxo em todos os títulos'</em>, você só edita o estilo. Todas as células que usam aquele estilo mudam automaticamente." }} />
      <h2>Temas</h2>
      <p dangerouslySetInnerHTML={{ __html: "<strong>Layout da Página → Temas</strong> muda a paleta de cores, fontes e efeitos da pasta inteira. Os estilos respeitam o tema (cores teóricas como <em>'Ênfase 1'</em> em vez de RGB fixo)." }} />
    </PageContainer>
  );
}
