import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function CorrelRegressao() {
  return (
    <PageContainer title="CORREL, PROJ.LIN, TENDÊNCIA, PREVISÃO" subtitle="Correlação e regressão linear sem sair do Excel." difficulty="avancado" timeToRead="7 min">
      <h2>Correlação</h2>
      <CodeBlock language="text" code={`=CORREL( x ; y )       coeficiente de Pearson (-1 a 1)
=COVARIAÇÃO.S(x;y)     covariância amostral

Interpretação:
> 0,8   forte positiva
0,5-0,8 moderada
< 0,3   fraca`} />
      <h2>Regressão linear simples</h2>
      <CodeBlock language="text" code={`Reta y = a + b·x

=INCLINAÇÃO( y ; x )      coeficiente angular b
=INTERCEPÇÃO( y ; x )     coeficiente linear a
=RQUAD( y ; x )           R² (qualidade do ajuste)

Previsão para novo x:
=PREVISÃO.LINEAR( novo_x ; y ; x )`} />
      <h2>PROJ.LIN — regressão múltipla</h2>
      <CodeBlock language="text" code={`=PROJ.LIN( y ; X ; VERDADEIRO ; VERDADEIRO )

Retorna matriz com:
   coef_n  coef_n-1  ...  coef_1  constante
   erro_n   erro_n-1 ...  erro_1  erro_const
   R²       erro_padrão_y         #N/D
   F        graus_liberdade       #N/D
   SQreg    SQres                 #N/D`} />
      <h2>Tendência sazonal</h2>
      <CodeBlock language="text" code={`=PREVISÃO.ETS( data_alvo ; valores ; datas ; [sazonalidade] )
   → suavização exponencial Holt-Winters
   → captura tendência + ciclo

Use Dados → Folha de Previsão para gerar gráfico+tabela em 1 clique.`} />
    </PageContainer>
  );
}
