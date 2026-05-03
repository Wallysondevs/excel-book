import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function SomaSe() {
    return (
      <PageContainer title="SOMASE & SOMASES" subtitle="Somas condicionais — uma ou várias condições." difficulty="intermediario" timeToRead="8 min">
        <h2>SOMASE — uma condição</h2>
      <CodeBlock language="text" code={`=SOMASE( intervalo_critério ; critério ; [intervalo_soma] )

  =SOMASE(B:B; "SP"; C:C)
          ↑       ↑     ↑
      onde olhar  o quê  o que somar`} />
      <h2>Critérios com operadores</h2>
      <CodeBlock language="text" code={`=SOMASE(B:B; ">100"; B:B)        → soma valores > 100
  =SOMASE(A:A; "<>"&""; B:B)       → soma quando A não vazio
  =SOMASE(A:A; "*caneta*"; B:B)    → A contém "caneta"
  =SOMASE(C:C; ">="&HOJE(); D:D)   → datas a partir de hoje
  =SOMASE(A:A; F2; B:B)            → critério em outra célula`} />
      <AlertBox type="warning" title="Operadores entre aspas!">
        <span dangerouslySetInnerHTML={{ __html: "Os símbolos <code>&gt;</code>, <code>&lt;</code>, <code>=</code>, <code>&lt;&gt;</code> precisam vir <strong>dentro de aspas</strong>: <code>\"&gt;100\"</code>. Para usar valor de célula: <code>\"&gt;\"&amp;A1</code>." }} />
      </AlertBox>
      <h2>SOMASES — múltiplas condições</h2>
      <CodeBlock language="text" code={`=SOMASES( intervalo_soma ;
            intervalo_crit1 ; crit1 ;
            intervalo_crit2 ; crit2 ; ... )

  =SOMASES(tblVend[Total];
           tblVend[Estado]; "SP";
           tblVend[Mês]; "Janeiro";
           tblVend[Total]; ">1000")`} />
      <p dangerouslySetInnerHTML={{ __html: "<strong>Atenção:</strong> em SOMASES o <strong>intervalo de soma é o primeiro</strong> argumento, ao contrário de SOMASE." }} />
      <h2>MÉDIASE / MÉDIASES e MÁXIMOSES / MÍNIMOSES</h2>
      <p dangerouslySetInnerHTML={{ __html: "Mesma sintaxe de SOMASES, mas calculam média/máximo/mínimo condicional. Disponíveis desde Excel 2016." }} />
      <CodeBlock language="text" code={`=MÉDIASES(tblV[Preço]; tblV[Categoria]; "Eletrônico")
  =MÁXIMOSES(tblV[Preço]; tblV[Estado]; "SP")
  =MÍNIMOSES(tblV[Data]; tblV[Cliente]; A2)`} />
      </PageContainer>
    );
  }
  