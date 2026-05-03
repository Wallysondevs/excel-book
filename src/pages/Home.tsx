import { Link } from "wouter";
import {
  Calculator, Table2, BarChart3, Database, Code2, Sparkles,
  ArrowRight, BookOpen, Search, Filter, Target, Keyboard,
} from "lucide-react";

const STATS = [
  { v: "42", l: "Capítulos completos" },
  { v: "300+", l: "Exemplos práticos" },
  { v: "100%", l: "Português BR" },
  { v: "365", l: "Excel atual" },
];

const TRACKS = [
  { icon: Table2, title: "Primeiros Passos", desc: "Interface, faixa de opções, células, pastas e planilhas.", to: "/interface" },
  { icon: Calculator, title: "Fórmulas", desc: "Operadores, referências (A1, $A$1) e nomes de intervalos.", to: "/formulas" },
  { icon: Sparkles, title: "Funções Essenciais", desc: "SOMA, SE, PROCV, PROCX, ÍNDICE+CORRESP e mais.", to: "/soma-media" },
  { icon: Filter, title: "Análise de Dados", desc: "Classificar, filtrar, validar e resumir grandes bases.", to: "/classificar-filtrar" },
  { icon: Table2, title: "Tabela Dinâmica", desc: "Resuma milhares de linhas em segundos com pivots.", to: "/tabela-dinamica" },
  { icon: BarChart3, title: "Gráficos", desc: "Colunas, barras, pizza, dispersão, mapas e sparklines.", to: "/graficos" },
  { icon: Target, title: "Ferramentas Avançadas", desc: "Atingir Meta, Solver e Cenários para simulações.", to: "/atingir-meta" },
  { icon: Database, title: "Power Query & Pivot", desc: "ETL e modelos de dados direto no Excel, sem programar.", to: "/power-query" },
  { icon: Code2, title: "Macros & VBA", desc: "Automatize tarefas repetitivas com macros e VBA.", to: "/macros" },
];

export default function Home() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-10 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs font-mono text-primary mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          GUIA COMPLETO 2025 · PORTUGUÊS BR · OPEN SOURCE
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
          Domine o <span className="text-primary">Excel</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
          Da primeira <code className="bg-muted px-2 py-0.5 rounded text-primary font-mono text-base">=SOMA(A1:A10)</code> até dashboards com Power Query, Power Pivot e VBA.
          Cada conceito explicado com exemplos reais — sem decorebas, sem mágica.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/interface"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-all shadow-lg shadow-primary/30 hover:scale-105"
          >
            <Table2 className="w-5 h-5" />
            Começar pelo básico
          </Link>
          <Link
            href="/procv"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card hover:bg-muted text-foreground font-medium rounded-lg border border-border hover:border-primary/50 transition-all"
          >
            <Search className="w-5 h-5" />
            Pular para PROCV
          </Link>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="rounded-xl overflow-hidden border border-border bg-[#0A0A0A] shadow-2xl text-left">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#151515] border-b border-white/5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 text-xs font-mono text-gray-400">vendas.xlsx · B2</span>
            </div>
            <pre className="p-5 text-sm font-mono text-[#D3D7CF] overflow-x-auto leading-relaxed">
{` =PROCX(A2; tblProdutos[Codigo]; tblProdutos[Preco]; "não encontrado")

 =SE(B2*C2 > 1000; "🔥 acima da meta"; "abaixo")

 =LET(
     subtotal; SOMASE(Vendas[Vendedor]; F2; Vendas[Total]);
     comissao; subtotal * 0,05;
     subtotal + comissao
 )`}
            </pre>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {STATS.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-4xl sm:text-5xl font-display font-bold">{s.v}</div>
            <div className="text-xs font-mono text-muted-foreground mt-2 uppercase tracking-wider">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="mb-12 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/40 text-secondary text-xs font-mono uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" /> Trilha estruturada
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold mt-4">
          Da <span className="text-primary">primeira célula</span> até dashboards
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {TRACKS.map((t, i) => {
          const Icon = t.icon;
          return (
            <Link key={i} href={t.to} className="block group">
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-muted/40 transition-all h-full">
                <Icon className="w-7 h-7 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-display font-bold text-lg mb-1.5">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{t.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-mono text-primary/80 group-hover:text-primary">
                  abrir <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-20 text-center text-xs font-mono text-muted-foreground opacity-70">
        <Keyboard className="inline w-3 h-3 mr-1" /> Ctrl + S &nbsp;·&nbsp; Excel 365 / 2024 / 2021 &nbsp;·&nbsp; livro 100% open source
      </div>
    </div>
  );
}
