import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Tabelas() {
    return (
      <PageContainer title="Tabelas (Ctrl+T)" subtitle="Transforme listas em Tabelas Estruturadas e ganhe superpoderes." difficulty="intermediario" timeToRead="9 min">
        <h2>O que é uma Tabela do Excel?</h2>
      <p>Selecione qualquer área com cabeçalho e pressione <code>Ctrl + T</code> (ou Inserir → Tabela). O Excel cria uma <strong>Tabela Estruturada</strong> com nome, autoexpansão, filtros, totais e referências por nome de coluna.</p>
      <h2>Vantagens</h2>
      <ul>
        <li><strong>Auto-expansão:</strong> nova linha digitada embaixo entra na tabela automaticamente.</li>
        <li><strong>Filtros nativos:</strong> dropdown em cada coluna.</li>
        <li><strong>Linha de Total:</strong> SOMA, MÉDIA, MÁX etc com um clique.</li>
        <li><strong>Estilos automáticos:</strong> bandas listradas, cores ao passar mouse.</li>
        <li><strong>Fórmulas estruturadas:</strong> <code>=tblVendas[Total]</code> em vez de <code>=B2:B1000</code>.</li>
        <li><strong>Tabela Dinâmica/Power Query</strong> reconhece automaticamente o intervalo.</li>
      </ul>
      <h2>Referências estruturadas</h2>
      <CodeBlock language="text" code={`=SOMA(tblVendas[Total])             → soma a coluna Total inteira
  =MÉDIA(tblVendas[Quantidade])       → média da coluna Quantidade
  =tblVendas[@Preço] * tblVendas[@Qtd] → preço × qtd na linha atual (@)
  =PROCX(F2; tblProdutos[Cod]; tblProdutos[Nome])`} />
      <AlertBox type="tip" title="Renomeie a tabela!">
        Por padrão a tabela é criada como Tabela1, Tabela2... Renomeie em <strong>Design da Tabela → Nome da Tabela</strong>. Use prefixos como <code>tbl</code> ou <code>db</code>: tblVendas, tblProdutos.
      </AlertBox>
      <h2>Linha de Total</h2>
      <p>Marque <strong>Design da Tabela → Linha de Totais</strong>. Aparece uma linha extra. Em cada célula, o dropdown oferece SOMA, MÉDIA, CONT.NÚM, MÁX, MÍN. A função usada é <code>SUBTOTAL</code> (ignora linhas filtradas).</p>
      <h2>Converter de volta em intervalo</h2>
      <p>Design da Tabela → <strong>Converter em Intervalo</strong>. Mantém formatação mas perde estrutura. Raramente recomendado.</p>
      <AlertBox type="warning" title="Cuidado com células mescladas">
        Tabelas não aceitam células mescladas. Se sua lista tem mescladas, o Ctrl+T vai recusar — desfaça a mesclagem antes.
      </AlertBox>
      </PageContainer>
    );
  }
  