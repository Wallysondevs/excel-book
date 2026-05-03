import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function ReferenciasLivro() {
    return (
      <PageContainer title="Referências e Recursos" subtitle="Onde aprender mais e onde tirar dúvidas." difficulty="iniciante" timeToRead="3 min">
        <h2>Documentação oficial</h2>
      <ul>
        <li><a href="https://support.microsoft.com/excel">Suporte do Microsoft Excel</a> — guias e tutoriais.</li>
        <li><a href="https://learn.microsoft.com/pt-br/office/vba/api/overview/excel">Referência VBA do Excel</a> — modelo de objetos completo.</li>
        <li><a href="https://learn.microsoft.com/pt-br/dax/">Referência DAX</a> — todas as funções com exemplos.</li>
        <li><a href="https://learn.microsoft.com/pt-br/powerquery-m/">Linguagem M (Power Query)</a>.</li>
      </ul>
      <h2>Comunidades em português</h2>
      <ul>
        <li><a href="https://gurudoexcel.com">Guru do Excel</a></li>
        <li><a href="https://www.hashtagtreinamentos.com">Hashtag Treinamentos</a></li>
        <li><a href="https://www.tomasvasquez.com.br">Tomás Vásquez VBA</a></li>
        <li><a href="https://pt.stackoverflow.com/questions/tagged/excel">Stack Overflow PT — tag excel</a></li>
      </ul>
      <h2>Comunidades em inglês</h2>
      <ul>
        <li><a href="https://www.reddit.com/r/excel/">r/excel</a></li>
        <li><a href="https://www.mrexcel.com/board/">MrExcel Forum</a></li>
        <li><a href="https://exceljet.net">Exceljet</a> — referência rápida de fórmulas.</li>
        <li><a href="https://chandoo.org">Chandoo.org</a></li>
      </ul>
      <h2>Livros recomendados</h2>
      <ul>
        <li><strong>Excel 2019 Power Programming with VBA</strong> — Michael Alexander, Dick Kusleika.</li>
        <li><strong>The Definitive Guide to DAX</strong> — Marco Russo, Alberto Ferrari.</li>
        <li><strong>M is for (Data) Monkey</strong> — Ken Puls, Miguel Escobar (Power Query).</li>
        <li><strong>Storytelling com Dados</strong> — Cole Nussbaumer Knaflic.</li>
      </ul>
      <h2>Próximos passos</h2>
      <p>Quando dominar Excel, o caminho natural é <strong>Power BI</strong> (mesmo motor: Power Query + Power Pivot + DAX) ou <strong>Python no Excel</strong> (já disponível em 365). Ambos elevam análise para outro patamar.</p>
      <AlertBox type="success" title="Obrigado por chegar até aqui!">
        Este livro é open source. Encontrou erro ou quer contribuir? Abra um Pull Request no <a href="https://github.com/Wallysondevs/excel-book">repositório no GitHub</a>.
      </AlertBox>
      </PageContainer>
    );
  }
  