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
  