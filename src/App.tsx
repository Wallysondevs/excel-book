import { useState, useEffect, lazy, Suspense } from "react";
  import { Switch, Route, Router as WouterRouter } from "wouter";
  import { useHashLocation } from "wouter/use-hash-location";

  import { Sidebar } from "@/components/layout/Sidebar";
  import { Header } from "@/components/layout/Header";

  import Home from "@/pages/Home";
  import NotFound from "@/pages/NotFound";

  const Historia = lazy(() => import("@/pages/Historia"));
const Versoes = lazy(() => import("@/pages/Versoes"));
const Interface = lazy(() => import("@/pages/Interface"));
const PastasPlanilhas = lazy(() => import("@/pages/PastasPlanilhas"));
const EntradaDados = lazy(() => import("@/pages/EntradaDados"));
const TiposDados = lazy(() => import("@/pages/TiposDados"));
const Formatacao = lazy(() => import("@/pages/Formatacao"));
const FormatacaoCondicional = lazy(() => import("@/pages/FormatacaoCondicional"));
const Tabelas = lazy(() => import("@/pages/Tabelas"));
const Formulas = lazy(() => import("@/pages/Formulas"));
const Referencias = lazy(() => import("@/pages/Referencias"));
const Nomes = lazy(() => import("@/pages/Nomes"));
const SomaMedia = lazy(() => import("@/pages/SomaMedia"));
const FuncaoSe = lazy(() => import("@/pages/FuncaoSe"));
const EOu = lazy(() => import("@/pages/EOu"));
const Procv = lazy(() => import("@/pages/Procv"));
const Procx = lazy(() => import("@/pages/Procx"));
const IndiceCorresp = lazy(() => import("@/pages/IndiceCorresp"));
const SomaSe = lazy(() => import("@/pages/SomaSe"));
const ContSe = lazy(() => import("@/pages/ContSe"));
const Texto = lazy(() => import("@/pages/Texto"));
const DataHora = lazy(() => import("@/pages/DataHora"));
const ClassificarFiltrar = lazy(() => import("@/pages/ClassificarFiltrar"));
const Validacao = lazy(() => import("@/pages/Validacao"));
const TabelaDinamica = lazy(() => import("@/pages/TabelaDinamica"));
const CamposCalculados = lazy(() => import("@/pages/CamposCalculados"));
const Segmentacao = lazy(() => import("@/pages/Segmentacao"));
const Graficos = lazy(() => import("@/pages/Graficos"));
const Sparklines = lazy(() => import("@/pages/Sparklines"));
const AtingirMeta = lazy(() => import("@/pages/AtingirMeta"));
const Solver = lazy(() => import("@/pages/Solver"));
const Cenarios = lazy(() => import("@/pages/Cenarios"));
const PowerQuery = lazy(() => import("@/pages/PowerQuery"));
const PowerQueryTransform = lazy(() => import("@/pages/PowerQueryTransform"));
const PowerPivot = lazy(() => import("@/pages/PowerPivot"));
const Dax = lazy(() => import("@/pages/Dax"));
const Macros = lazy(() => import("@/pages/Macros"));
const VbaIntro = lazy(() => import("@/pages/VbaIntro"));
const VbaLoops = lazy(() => import("@/pages/VbaLoops"));
const UserForms = lazy(() => import("@/pages/UserForms"));
const Atalhos = lazy(() => import("@/pages/Atalhos"));
const ReferenciasLivro = lazy(() => import("@/pages/ReferenciasLivro"));
const SobreLivro = lazy(() => import("@/pages/SobreLivro"));
const ComoUsar = lazy(() => import("@/pages/ComoUsar"));
const CriarSalvar = lazy(() => import("@/pages/CriarSalvar"));
const AbrirArquivos = lazy(() => import("@/pages/AbrirArquivos"));
const FormatosArquivo = lazy(() => import("@/pages/FormatosArquivo"));
const NavegacaoCelulas = lazy(() => import("@/pages/NavegacaoCelulas"));
const Selecoes = lazy(() => import("@/pages/Selecoes"));
const CopiarColar = lazy(() => import("@/pages/CopiarColar"));
const PreenchimentoAuto = lazy(() => import("@/pages/PreenchimentoAuto"));
const PreenchimentoRelampago = lazy(() => import("@/pages/PreenchimentoRelampago"));
const CongelarPaineis = lazy(() => import("@/pages/CongelarPaineis"));
const FormatoNumero = lazy(() => import("@/pages/FormatoNumero"));
const FormatoData = lazy(() => import("@/pages/FormatoData"));
const FormatoPersonalizado = lazy(() => import("@/pages/FormatoPersonalizado"));
const EstilosCelula = lazy(() => import("@/pages/EstilosCelula"));
const MesclarCentralizar = lazy(() => import("@/pages/MesclarCentralizar"));
const Bordas = lazy(() => import("@/pages/Bordas"));
const OperadoresAvancados = lazy(() => import("@/pages/OperadoresAvancados"));
const RastrearPrecedentes = lazy(() => import("@/pages/RastrearPrecedentes"));
const AvaliarFormula = lazy(() => import("@/pages/AvaliarFormula"));
const JanelaInspecao = lazy(() => import("@/pages/JanelaInspecao"));
const ErrosFormulas = lazy(() => import("@/pages/ErrosFormulas"));
const SeErro = lazy(() => import("@/pages/SeErro"));
const EErros = lazy(() => import("@/pages/EErros"));
const ArraysDinamicos = lazy(() => import("@/pages/ArraysDinamicos"));
const Filtro = lazy(() => import("@/pages/Filtro"));
const Classificar = lazy(() => import("@/pages/Classificar"));
const Unico = lazy(() => import("@/pages/Unico"));
const Sequencia = lazy(() => import("@/pages/Sequencia"));
const Empilhar = lazy(() => import("@/pages/Empilhar"));
const Let = lazy(() => import("@/pages/Let"));
const Lambda = lazy(() => import("@/pages/Lambda"));
const MapReduceScan = lazy(() => import("@/pages/MapReduceScan"));
const TextoAntesDepois = lazy(() => import("@/pages/TextoAntesDepois"));
const DividirTexto = lazy(() => import("@/pages/DividirTexto"));
const UnirTexto = lazy(() => import("@/pages/UnirTexto"));
const Desloc = lazy(() => import("@/pages/Desloc"));
const Indireto = lazy(() => import("@/pages/Indireto"));
const Endereco = lazy(() => import("@/pages/Endereco"));
const Escolher = lazy(() => import("@/pages/Escolher"));
const SeMultiplo = lazy(() => import("@/pages/SeMultiplo"));
const ParametroSwitch = lazy(() => import("@/pages/ParametroSwitch"));
const MaximosesMinimoses = lazy(() => import("@/pages/MaximosesMinimoses"));
const EstatisticasDescritivas = lazy(() => import("@/pages/EstatisticasDescritivas"));
const Quartis = lazy(() => import("@/pages/Quartis"));
const CorrelRegressao = lazy(() => import("@/pages/CorrelRegressao"));
const PgtoFinanceiras = lazy(() => import("@/pages/PgtoFinanceiras"));
const VplTir = lazy(() => import("@/pages/VplTir"));
const Amortizacao = lazy(() => import("@/pages/Amortizacao"));
const Somarproduto = lazy(() => import("@/pages/Somarproduto"));
const Subtotal = lazy(() => import("@/pages/Subtotal"));
const DiatrabalhoTotal = lazy(() => import("@/pages/DiatrabalhoTotal"));
const FimMes = lazy(() => import("@/pages/FimMes"));
const MicroFuncoes = lazy(() => import("@/pages/MicroFuncoes"));
const RemoverDuplicados = lazy(() => import("@/pages/RemoverDuplicados"));
const TabelaDados = lazy(() => import("@/pages/TabelaDados"));
const AnaliseRapida = lazy(() => import("@/pages/AnaliseRapida"));
const TabelaDinamicaAgrupar = lazy(() => import("@/pages/TabelaDinamicaAgrupar"));
const TabelaDinamicaMostrarValor = lazy(() => import("@/pages/TabelaDinamicaMostrarValor"));
const ModeloDados = lazy(() => import("@/pages/ModeloDados"));
const RelacionamentosTd = lazy(() => import("@/pages/RelacionamentosTd"));
const TiposGraficos = lazy(() => import("@/pages/TiposGraficos"));
const GraficoCombinado = lazy(() => import("@/pages/GraficoCombinado"));
const GraficoCascata = lazy(() => import("@/pages/GraficoCascata"));
const GraficoDinamico = lazy(() => import("@/pages/GraficoDinamico"));
const GraficoMapa = lazy(() => import("@/pages/GraficoMapa"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const PqMesclar = lazy(() => import("@/pages/PqMesclar"));
const PqAnexar = lazy(() => import("@/pages/PqAnexar"));
const PqDespivotar = lazy(() => import("@/pages/PqDespivotar"));
const PqColunaCondicional = lazy(() => import("@/pages/PqColunaCondicional"));
const PqLinguagemM = lazy(() => import("@/pages/PqLinguagemM"));
const PqParametros = lazy(() => import("@/pages/PqParametros"));
const DaxCalculate = lazy(() => import("@/pages/DaxCalculate"));
const DaxRelated = lazy(() => import("@/pages/DaxRelated"));
const DaxIteradoras = lazy(() => import("@/pages/DaxIteradoras"));
const DaxTimeIntelligence = lazy(() => import("@/pages/DaxTimeIntelligence"));
const DaxRanking = lazy(() => import("@/pages/DaxRanking"));
const DaxVar = lazy(() => import("@/pages/DaxVar"));
const KpisModelagem = lazy(() => import("@/pages/KpisModelagem"));
const VbaVariaveis = lazy(() => import("@/pages/VbaVariaveis"));
const VbaFuncoes = lazy(() => import("@/pages/VbaFuncoes"));
const VbaRange = lazy(() => import("@/pages/VbaRange"));
const VbaEventos = lazy(() => import("@/pages/VbaEventos"));
const VbaErros = lazy(() => import("@/pages/VbaErros"));
const VbaDictionary = lazy(() => import("@/pages/VbaDictionary"));
const VbaArquivos = lazy(() => import("@/pages/VbaArquivos"));
const VbaApi = lazy(() => import("@/pages/VbaApi"));
const VbaAddin = lazy(() => import("@/pages/VbaAddin"));
const OfficeScripts = lazy(() => import("@/pages/OfficeScripts"));
const PowerAutomate = lazy(() => import("@/pages/PowerAutomate"));
const Protecao = lazy(() => import("@/pages/Protecao"));
const SenhaArquivo = lazy(() => import("@/pages/SenhaArquivo"));
const Coautoria = lazy(() => import("@/pages/Coautoria"));
const Comentarios = lazy(() => import("@/pages/Comentarios"));
const Hyperlinks = lazy(() => import("@/pages/Hyperlinks"));
const Performance = lazy(() => import("@/pages/Performance"));
const CalculoManual = lazy(() => import("@/pages/CalculoManual"));
const ArquivosGrandes = lazy(() => import("@/pages/ArquivosGrandes"));
const Dre = lazy(() => import("@/pages/Dre"));
const FluxoCaixa = lazy(() => import("@/pages/FluxoCaixa"));
const ControleEstoque = lazy(() => import("@/pages/ControleEstoque"));
const OrcamentoPessoal = lazy(() => import("@/pages/OrcamentoPessoal"));
const DashboardVendas = lazy(() => import("@/pages/DashboardVendas"));
const CalculoCltPj = lazy(() => import("@/pages/CalculoCltPj"));
const Cronograma = lazy(() => import("@/pages/Cronograma"));
const Glossario = lazy(() => import("@/pages/Glossario"));
const AtalhosWindows = lazy(() => import("@/pages/AtalhosWindows"));
const AtalhosMac = lazy(() => import("@/pages/AtalhosMac"));
const Faq = lazy(() => import("@/pages/Faq"));
const ChangeLog = lazy(() => import("@/pages/ChangeLog"));
const Recursos = lazy(() => import("@/pages/Recursos"));

  function PageLoader() {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-muted-foreground font-mono text-sm">carregando capítulo…</div>
      </div>
    );
  }

  function Layout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [location] = useHashLocation();

    useEffect(() => {
      setIsSidebarOpen(false);
      window.scrollTo(0, 0);
    }, [location]);

    return (
      <div className="min-h-screen bg-background text-foreground flex">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div className="flex-1 lg:pl-72 flex flex-col min-w-0 transition-all duration-300">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    );
  }

  function Router() {
    return (
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/historia" component={Historia} />
          <Route path="/versoes" component={Versoes} />
          <Route path="/interface" component={Interface} />
          <Route path="/pastas-planilhas" component={PastasPlanilhas} />
          <Route path="/entrada-dados" component={EntradaDados} />
          <Route path="/tipos-dados" component={TiposDados} />
          <Route path="/formatacao" component={Formatacao} />
          <Route path="/formatacao-condicional" component={FormatacaoCondicional} />
          <Route path="/tabelas" component={Tabelas} />
          <Route path="/formulas" component={Formulas} />
          <Route path="/referencias" component={Referencias} />
          <Route path="/nomes" component={Nomes} />
          <Route path="/soma-media" component={SomaMedia} />
          <Route path="/se" component={FuncaoSe} />
          <Route path="/e-ou" component={EOu} />
          <Route path="/procv" component={Procv} />
          <Route path="/procx" component={Procx} />
          <Route path="/indice-corresp" component={IndiceCorresp} />
          <Route path="/soma-se" component={SomaSe} />
          <Route path="/cont-se" component={ContSe} />
          <Route path="/texto" component={Texto} />
          <Route path="/data-hora" component={DataHora} />
          <Route path="/classificar-filtrar" component={ClassificarFiltrar} />
          <Route path="/validacao" component={Validacao} />
          <Route path="/tabela-dinamica" component={TabelaDinamica} />
          <Route path="/campos-calculados" component={CamposCalculados} />
          <Route path="/segmentacao" component={Segmentacao} />
          <Route path="/graficos" component={Graficos} />
          <Route path="/sparklines" component={Sparklines} />
          <Route path="/atingir-meta" component={AtingirMeta} />
          <Route path="/solver" component={Solver} />
          <Route path="/cenarios" component={Cenarios} />
          <Route path="/power-query" component={PowerQuery} />
          <Route path="/power-query-transform" component={PowerQueryTransform} />
          <Route path="/power-pivot" component={PowerPivot} />
          <Route path="/dax" component={Dax} />
          <Route path="/macros" component={Macros} />
          <Route path="/vba-intro" component={VbaIntro} />
          <Route path="/vba-loops" component={VbaLoops} />
          <Route path="/userforms" component={UserForms} />
          <Route path="/atalhos" component={Atalhos} />
          <Route path="/referencias-livro" component={ReferenciasLivro} />
          <Route path="/sobre" component={SobreLivro} />
          <Route path="/como-usar" component={ComoUsar} />
          <Route path="/criar-salvar" component={CriarSalvar} />
          <Route path="/abrir-arquivos" component={AbrirArquivos} />
          <Route path="/formatos-arquivo" component={FormatosArquivo} />
          <Route path="/navegacao-celulas" component={NavegacaoCelulas} />
          <Route path="/selecoes" component={Selecoes} />
          <Route path="/copiar-colar" component={CopiarColar} />
          <Route path="/preenchimento-auto" component={PreenchimentoAuto} />
          <Route path="/preenchimento-relampago" component={PreenchimentoRelampago} />
          <Route path="/congelar-paineis" component={CongelarPaineis} />
          <Route path="/formato-numero" component={FormatoNumero} />
          <Route path="/formato-data" component={FormatoData} />
          <Route path="/formato-personalizado" component={FormatoPersonalizado} />
          <Route path="/estilos-celula" component={EstilosCelula} />
          <Route path="/mesclar-centralizar" component={MesclarCentralizar} />
          <Route path="/bordas" component={Bordas} />
          <Route path="/operadores-avancados" component={OperadoresAvancados} />
          <Route path="/rastrear-precedentes" component={RastrearPrecedentes} />
          <Route path="/avaliar-formula" component={AvaliarFormula} />
          <Route path="/janela-inspecao" component={JanelaInspecao} />
          <Route path="/erros-formulas" component={ErrosFormulas} />
          <Route path="/se-erro" component={SeErro} />
          <Route path="/e-erros" component={EErros} />
          <Route path="/arrays-dinamicos" component={ArraysDinamicos} />
          <Route path="/filtro" component={Filtro} />
          <Route path="/classificar" component={Classificar} />
          <Route path="/unico" component={Unico} />
          <Route path="/sequencia" component={Sequencia} />
          <Route path="/empilhar" component={Empilhar} />
          <Route path="/let" component={Let} />
          <Route path="/lambda" component={Lambda} />
          <Route path="/map-reduce-scan" component={MapReduceScan} />
          <Route path="/texto-antes-depois" component={TextoAntesDepois} />
          <Route path="/dividir-texto" component={DividirTexto} />
          <Route path="/unir-texto" component={UnirTexto} />
          <Route path="/desloc" component={Desloc} />
          <Route path="/indireto" component={Indireto} />
          <Route path="/endereco" component={Endereco} />
          <Route path="/escolher" component={Escolher} />
          <Route path="/se-multiplo" component={SeMultiplo} />
          <Route path="/parametro-switch" component={ParametroSwitch} />
          <Route path="/maximoses-minimoses" component={MaximosesMinimoses} />
          <Route path="/estatisticas-descritivas" component={EstatisticasDescritivas} />
          <Route path="/quartis" component={Quartis} />
          <Route path="/correl-regressao" component={CorrelRegressao} />
          <Route path="/pgto-financeiras" component={PgtoFinanceiras} />
          <Route path="/vpl-tir" component={VplTir} />
          <Route path="/amortizacao" component={Amortizacao} />
          <Route path="/somarproduto" component={Somarproduto} />
          <Route path="/subtotal" component={Subtotal} />
          <Route path="/diatrabalho-total" component={DiatrabalhoTotal} />
          <Route path="/fim-mes" component={FimMes} />
          <Route path="/micro-funcoes" component={MicroFuncoes} />
          <Route path="/remover-duplicados" component={RemoverDuplicados} />
          <Route path="/tabela-dados" component={TabelaDados} />
          <Route path="/analise-rapida" component={AnaliseRapida} />
          <Route path="/tabela-dinamica-agrupar" component={TabelaDinamicaAgrupar} />
          <Route path="/tabela-dinamica-mostrar-valor" component={TabelaDinamicaMostrarValor} />
          <Route path="/modelo-dados" component={ModeloDados} />
          <Route path="/relacionamentos-td" component={RelacionamentosTd} />
          <Route path="/tipos-graficos" component={TiposGraficos} />
          <Route path="/grafico-combinado" component={GraficoCombinado} />
          <Route path="/grafico-cascata" component={GraficoCascata} />
          <Route path="/grafico-dinamico" component={GraficoDinamico} />
          <Route path="/grafico-mapa" component={GraficoMapa} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/pq-mesclar" component={PqMesclar} />
          <Route path="/pq-anexar" component={PqAnexar} />
          <Route path="/pq-despivotar" component={PqDespivotar} />
          <Route path="/pq-coluna-condicional" component={PqColunaCondicional} />
          <Route path="/pq-linguagem-m" component={PqLinguagemM} />
          <Route path="/pq-parametros" component={PqParametros} />
          <Route path="/dax-calculate" component={DaxCalculate} />
          <Route path="/dax-related" component={DaxRelated} />
          <Route path="/dax-iteradoras" component={DaxIteradoras} />
          <Route path="/dax-time-intelligence" component={DaxTimeIntelligence} />
          <Route path="/dax-ranking" component={DaxRanking} />
          <Route path="/dax-var" component={DaxVar} />
          <Route path="/kpis-modelagem" component={KpisModelagem} />
          <Route path="/vba-variaveis" component={VbaVariaveis} />
          <Route path="/vba-funcoes" component={VbaFuncoes} />
          <Route path="/vba-range" component={VbaRange} />
          <Route path="/vba-eventos" component={VbaEventos} />
          <Route path="/vba-erros" component={VbaErros} />
          <Route path="/vba-dictionary" component={VbaDictionary} />
          <Route path="/vba-arquivos" component={VbaArquivos} />
          <Route path="/vba-api" component={VbaApi} />
          <Route path="/vba-addin" component={VbaAddin} />
          <Route path="/office-scripts" component={OfficeScripts} />
          <Route path="/power-automate" component={PowerAutomate} />
          <Route path="/protecao" component={Protecao} />
          <Route path="/senha-arquivo" component={SenhaArquivo} />
          <Route path="/coautoria" component={Coautoria} />
          <Route path="/comentarios" component={Comentarios} />
          <Route path="/hyperlinks" component={Hyperlinks} />
          <Route path="/performance" component={Performance} />
          <Route path="/calculo-manual" component={CalculoManual} />
          <Route path="/arquivos-grandes" component={ArquivosGrandes} />
          <Route path="/dre" component={Dre} />
          <Route path="/fluxo-caixa" component={FluxoCaixa} />
          <Route path="/controle-estoque" component={ControleEstoque} />
          <Route path="/orcamento-pessoal" component={OrcamentoPessoal} />
          <Route path="/dashboard-vendas" component={DashboardVendas} />
          <Route path="/clt-pj" component={CalculoCltPj} />
          <Route path="/cronograma" component={Cronograma} />
          <Route path="/glossario" component={Glossario} />
          <Route path="/atalhos-windows" component={AtalhosWindows} />
          <Route path="/atalhos-mac" component={AtalhosMac} />
          <Route path="/faq" component={Faq} />
          <Route path="/changelog-excel" component={ChangeLog} />
          <Route path="/recursos" component={Recursos} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    );
  }

  export default function App() {
    return (
      <WouterRouter hook={useHashLocation}>
        <Router />
      </WouterRouter>
    );
  }
  