import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function GraficoMapa() {
  return (
    <PageContainer title="Gráfico de Mapa e Mapas 3D" subtitle="Geografia direto da coluna 'UF' ou 'País'." difficulty="intermediario" timeToRead="5 min">
      <h2>Mapa 2D</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Tenha uma coluna geográfica (Estado, Cidade, País)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Inserir → Mapas → Mapa Coroplético</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Cor representa um valor numérico (intensidade)" }} />
      </ul>
      <h2>Mapas 3D (Power Map)</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Inserir → Mapas 3D → Abrir Mapas 3D</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Globo interativo, com camadas, animação no tempo, tour gravado" }} />
        <li dangerouslySetInnerHTML={{ __html: "Exporta vídeo MP4 dos passeios" }} />
      </ul>
      <AlertBox type="warning" title="Versão e privacidade">
        <span dangerouslySetInnerHTML={{ __html: "Mapas exigem conexão com o Bing Maps; verifique políticas se sua empresa restringe envio de dados externos." }} />
      </AlertBox>
    </PageContainer>
  );
}
