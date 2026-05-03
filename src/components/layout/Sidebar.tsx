import { Link } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { cn } from "@/lib/utils";
import { BookOpen, Layout, Palette, Table2, Calculator, Sigma, Search, Type, Clock, Filter, BarChart3, LineChart, Target, Database, Code2, Keyboard } from "lucide-react";

const NAVIGATION = [
  {
    "title": "Boas-vindas",
    "items": [
      {
        "path": "/",
        "label": "Início",
        "iconName": "BookOpen"
      },
      {
        "path": "/sobre",
        "label": "Sobre este livro",
        "iconName": "BookOpen"
      },
      {
        "path": "/como-usar",
        "label": "Como usar este livro",
        "iconName": "BookOpen"
      },
      {
        "path": "/historia",
        "label": "História do Excel",
        "iconName": "BookOpen"
      },
      {
        "path": "/versoes",
        "label": "Versões e Edições",
        "iconName": "BookOpen"
      }
    ]
  },
  {
    "title": "Primeiros Passos",
    "items": [
      {
        "path": "/interface",
        "label": "Interface — Faixa de Opções",
        "iconName": "Layout"
      },
      {
        "path": "/pastas-planilhas",
        "label": "Pastas, Planilhas e Células",
        "iconName": "Layout"
      },
      {
        "path": "/criar-salvar",
        "label": "Criar e salvar arquivos",
        "iconName": "Layout"
      },
      {
        "path": "/abrir-arquivos",
        "label": "Abrir e converter arquivos",
        "iconName": "Layout"
      },
      {
        "path": "/formatos-arquivo",
        "label": "Formatos de arquivo",
        "iconName": "Layout"
      },
      {
        "path": "/entrada-dados",
        "label": "Inserir e Editar Dados",
        "iconName": "Layout"
      },
      {
        "path": "/tipos-dados",
        "label": "Tipos de Dados",
        "iconName": "Layout"
      },
      {
        "path": "/navegacao-celulas",
        "label": "Navegação eficiente",
        "iconName": "Layout"
      },
      {
        "path": "/selecoes",
        "label": "Seleções avançadas",
        "iconName": "Layout"
      },
      {
        "path": "/copiar-colar",
        "label": "Copiar, Colar e Colar Especial",
        "iconName": "Layout"
      },
      {
        "path": "/preenchimento-auto",
        "label": "Preenchimento automático",
        "iconName": "Layout"
      },
      {
        "path": "/preenchimento-relampago",
        "label": "Preenchimento Relâmpago",
        "iconName": "Layout"
      },
      {
        "path": "/congelar-paineis",
        "label": "Congelar e dividir painéis",
        "iconName": "Layout"
      }
    ]
  },
  {
    "title": "Formatação",
    "items": [
      {
        "path": "/formatacao",
        "label": "Formatação de Células",
        "iconName": "Palette"
      },
      {
        "path": "/formato-numero",
        "label": "Códigos de formato de número",
        "iconName": "Palette"
      },
      {
        "path": "/formato-data",
        "label": "Formatos de data e moeda BR",
        "iconName": "Palette"
      },
      {
        "path": "/formato-personalizado",
        "label": "Formatos personalizados",
        "iconName": "Palette"
      },
      {
        "path": "/estilos-celula",
        "label": "Estilos de célula e temas",
        "iconName": "Palette"
      },
      {
        "path": "/mesclar-centralizar",
        "label": "Mesclar e Centralizar",
        "iconName": "Palette"
      },
      {
        "path": "/bordas",
        "label": "Bordas, preenchimento e alinhamento",
        "iconName": "Palette"
      },
      {
        "path": "/formatacao-condicional",
        "label": "Formatação Condicional",
        "iconName": "Palette"
      },
      {
        "path": "/tabelas",
        "label": "Tabelas (Ctrl+T)",
        "iconName": "Table2"
      }
    ]
  },
  {
    "title": "Fórmulas",
    "items": [
      {
        "path": "/formulas",
        "label": "Operadores e Fórmulas",
        "iconName": "Calculator"
      },
      {
        "path": "/operadores-avancados",
        "label": "Operadores e precedência",
        "iconName": "Calculator"
      },
      {
        "path": "/referencias",
        "label": "Referências (Relativa, Absoluta)",
        "iconName": "Calculator"
      },
      {
        "path": "/nomes",
        "label": "Nomes de Intervalos",
        "iconName": "Calculator"
      },
      {
        "path": "/rastrear-precedentes",
        "label": "Auditoria de fórmulas",
        "iconName": "Calculator"
      },
      {
        "path": "/avaliar-formula",
        "label": "Avaliar Fórmula passo a passo",
        "iconName": "Calculator"
      },
      {
        "path": "/janela-inspecao",
        "label": "Janela de Inspeção",
        "iconName": "Calculator"
      },
      {
        "path": "/erros-formulas",
        "label": "Erros de fórmula",
        "iconName": "Calculator"
      },
      {
        "path": "/se-erro",
        "label": "SE.ERRO e SEERRO",
        "iconName": "Calculator"
      },
      {
        "path": "/e-erros",
        "label": "É.NÚM, ÉTEXTO, ÉERROS…",
        "iconName": "Calculator"
      }
    ]
  },
  {
    "title": "Funções Essenciais",
    "items": [
      {
        "path": "/soma-media",
        "label": "SOMA, MÉDIA, CONT.NÚM",
        "iconName": "Sigma"
      },
      {
        "path": "/se",
        "label": "Função SE",
        "iconName": "Sigma"
      },
      {
        "path": "/e-ou",
        "label": "E / OU / NÃO",
        "iconName": "Sigma"
      },
      {
        "path": "/se-multiplo",
        "label": "SE.MÚLTIPLO (IFS)",
        "iconName": "Sigma"
      },
      {
        "path": "/parametro-switch",
        "label": "PARÂMETRO (SWITCH)",
        "iconName": "Sigma"
      },
      {
        "path": "/soma-se",
        "label": "SOMASE & SOMASES",
        "iconName": "Sigma"
      },
      {
        "path": "/cont-se",
        "label": "CONT.SE & CONT.SES",
        "iconName": "Sigma"
      },
      {
        "path": "/maximoses-minimoses",
        "label": "MÁXIMOSES, MÍNIMOSES, MÉDIASES",
        "iconName": "Sigma"
      },
      {
        "path": "/somarproduto",
        "label": "SOMARPRODUTO",
        "iconName": "Sigma"
      },
      {
        "path": "/subtotal",
        "label": "SUBTOTAL e AGREGAR",
        "iconName": "Sigma"
      }
    ]
  },
  {
    "title": "Busca e Referência",
    "items": [
      {
        "path": "/procv",
        "label": "PROCV (VLOOKUP)",
        "iconName": "Search"
      },
      {
        "path": "/procx",
        "label": "PROCX (XLOOKUP)",
        "iconName": "Search"
      },
      {
        "path": "/indice-corresp",
        "label": "ÍNDICE + CORRESP",
        "iconName": "Search"
      },
      {
        "path": "/desloc",
        "label": "DESLOC (OFFSET)",
        "iconName": "Search"
      },
      {
        "path": "/indireto",
        "label": "INDIRETO",
        "iconName": "Search"
      },
      {
        "path": "/endereco",
        "label": "ENDEREÇO, LIN, COL",
        "iconName": "Search"
      },
      {
        "path": "/escolher",
        "label": "ESCOLHER, ESCOLHERLINS/COLS",
        "iconName": "Search"
      }
    ]
  },
  {
    "title": "Texto e Datas",
    "items": [
      {
        "path": "/texto",
        "label": "Funções de Texto",
        "iconName": "Type"
      },
      {
        "path": "/texto-antes-depois",
        "label": "TEXTOANTES e TEXTODEPOIS",
        "iconName": "Type"
      },
      {
        "path": "/dividir-texto",
        "label": "DIVIDIRTEXTO",
        "iconName": "Type"
      },
      {
        "path": "/unir-texto",
        "label": "UNIRTEXTO e CONCAT",
        "iconName": "Type"
      },
      {
        "path": "/micro-funcoes",
        "label": "ARRUMAR, MAIÚSCULA, EXATO…",
        "iconName": "Type"
      },
      {
        "path": "/data-hora",
        "label": "Funções de Data e Hora",
        "iconName": "Clock"
      },
      {
        "path": "/diatrabalho-total",
        "label": "DIATRABALHOTOTAL",
        "iconName": "Clock"
      },
      {
        "path": "/fim-mes",
        "label": "FIMMÊS, DATAM, DIA.DA.SEMANA",
        "iconName": "Clock"
      }
    ]
  },
  {
    "title": "Funções Modernas (M365)",
    "items": [
      {
        "path": "/arrays-dinamicos",
        "label": "Arrays dinâmicos e operador #",
        "iconName": "Sigma"
      },
      {
        "path": "/filtro",
        "label": "FILTRO",
        "iconName": "Sigma"
      },
      {
        "path": "/classificar",
        "label": "CLASSIFICAR / CLASSIFICARPOR",
        "iconName": "Sigma"
      },
      {
        "path": "/unico",
        "label": "ÚNICO",
        "iconName": "Sigma"
      },
      {
        "path": "/sequencia",
        "label": "SEQUÊNCIA",
        "iconName": "Sigma"
      },
      {
        "path": "/empilhar",
        "label": "EMPILHARV/H, PEGAR, EXPANDIR",
        "iconName": "Sigma"
      },
      {
        "path": "/let",
        "label": "LET — variáveis em fórmula",
        "iconName": "Sigma"
      },
      {
        "path": "/lambda",
        "label": "LAMBDA",
        "iconName": "Sigma"
      },
      {
        "path": "/map-reduce-scan",
        "label": "MAP, REDUCE, SCAN, BYROW…",
        "iconName": "Sigma"
      }
    ]
  },
  {
    "title": "Estatística e Finanças",
    "items": [
      {
        "path": "/estatisticas-descritivas",
        "label": "MED, MODO, DESVPAD…",
        "iconName": "Sigma"
      },
      {
        "path": "/quartis",
        "label": "QUARTIL, PERCENTIL, ORDEM",
        "iconName": "Sigma"
      },
      {
        "path": "/correl-regressao",
        "label": "CORREL, PROJ.LIN, PREVISÃO",
        "iconName": "Sigma"
      },
      {
        "path": "/pgto-financeiras",
        "label": "PGTO, NPER, TAXA, VP, VF",
        "iconName": "Sigma"
      },
      {
        "path": "/vpl-tir",
        "label": "VPL, TIR, MTIR, XVPL, XTIR",
        "iconName": "Sigma"
      },
      {
        "path": "/amortizacao",
        "label": "Amortização (Price/SAC)",
        "iconName": "Sigma"
      }
    ]
  },
  {
    "title": "Análise de Dados",
    "items": [
      {
        "path": "/classificar-filtrar",
        "label": "Classificar e Filtrar",
        "iconName": "Filter"
      },
      {
        "path": "/validacao",
        "label": "Validação de Dados",
        "iconName": "Filter"
      },
      {
        "path": "/remover-duplicados",
        "label": "Remover duplicados",
        "iconName": "Filter"
      },
      {
        "path": "/tabela-dados",
        "label": "Tabela de Dados (1 e 2 vars)",
        "iconName": "Filter"
      },
      {
        "path": "/analise-rapida",
        "label": "Análise Rápida e Ideias",
        "iconName": "Filter"
      }
    ]
  },
  {
    "title": "Tabela Dinâmica",
    "items": [
      {
        "path": "/tabela-dinamica",
        "label": "Criando Tabela Dinâmica",
        "iconName": "Table2"
      },
      {
        "path": "/campos-calculados",
        "label": "Campos Calculados",
        "iconName": "Table2"
      },
      {
        "path": "/segmentacao",
        "label": "Segmentação de Dados",
        "iconName": "Table2"
      },
      {
        "path": "/tabela-dinamica-agrupar",
        "label": "Agrupar datas e números",
        "iconName": "Table2"
      },
      {
        "path": "/tabela-dinamica-mostrar-valor",
        "label": "Mostrar valores como…",
        "iconName": "Table2"
      },
      {
        "path": "/modelo-dados",
        "label": "Adicionar ao Modelo de Dados",
        "iconName": "Table2"
      },
      {
        "path": "/relacionamentos-td",
        "label": "Relacionamentos entre tabelas",
        "iconName": "Table2"
      }
    ]
  },
  {
    "title": "Visualização",
    "items": [
      {
        "path": "/graficos",
        "label": "Gráficos",
        "iconName": "BarChart3"
      },
      {
        "path": "/sparklines",
        "label": "Sparklines",
        "iconName": "LineChart"
      },
      {
        "path": "/tipos-graficos",
        "label": "Catálogo de tipos de gráfico",
        "iconName": "BarChart3"
      },
      {
        "path": "/grafico-combinado",
        "label": "Combinados (eixo secundário)",
        "iconName": "BarChart3"
      },
      {
        "path": "/grafico-cascata",
        "label": "Cascata, Funil, Treemap, Pareto",
        "iconName": "BarChart3"
      },
      {
        "path": "/grafico-dinamico",
        "label": "Gráfico Dinâmico",
        "iconName": "BarChart3"
      },
      {
        "path": "/grafico-mapa",
        "label": "Mapa e Mapas 3D",
        "iconName": "BarChart3"
      },
      {
        "path": "/dashboard",
        "label": "Construindo um dashboard",
        "iconName": "BarChart3"
      }
    ]
  },
  {
    "title": "Ferramentas Avançadas",
    "items": [
      {
        "path": "/atingir-meta",
        "label": "Atingir Meta",
        "iconName": "Target"
      },
      {
        "path": "/solver",
        "label": "Solver",
        "iconName": "Target"
      },
      {
        "path": "/cenarios",
        "label": "Gerenciador de Cenários",
        "iconName": "Target"
      }
    ]
  },
  {
    "title": "Power Query",
    "items": [
      {
        "path": "/power-query",
        "label": "Power Query — Introdução",
        "iconName": "Database"
      },
      {
        "path": "/power-query-transform",
        "label": "Transformações",
        "iconName": "Database"
      },
      {
        "path": "/pq-mesclar",
        "label": "Mesclar consultas (JOIN)",
        "iconName": "Database"
      },
      {
        "path": "/pq-anexar",
        "label": "Anexar (UNION) e pasta",
        "iconName": "Database"
      },
      {
        "path": "/pq-despivotar",
        "label": "Pivotar e Despivotar",
        "iconName": "Database"
      },
      {
        "path": "/pq-coluna-condicional",
        "label": "Coluna Condicional/Personalizada",
        "iconName": "Database"
      },
      {
        "path": "/pq-linguagem-m",
        "label": "Linguagem M — fundamentos",
        "iconName": "Database"
      },
      {
        "path": "/pq-parametros",
        "label": "Parâmetros e funções em M",
        "iconName": "Database"
      }
    ]
  },
  {
    "title": "Power Pivot & DAX",
    "items": [
      {
        "path": "/power-pivot",
        "label": "Power Pivot",
        "iconName": "Database"
      },
      {
        "path": "/dax",
        "label": "DAX Básico",
        "iconName": "Database"
      },
      {
        "path": "/dax-calculate",
        "label": "CALCULATE e contexto de filtro",
        "iconName": "Database"
      },
      {
        "path": "/dax-related",
        "label": "RELATED e RELATEDTABLE",
        "iconName": "Database"
      },
      {
        "path": "/dax-iteradoras",
        "label": "SUMX, AVERAGEX, COUNTX",
        "iconName": "Database"
      },
      {
        "path": "/dax-time-intelligence",
        "label": "Time Intelligence",
        "iconName": "Database"
      },
      {
        "path": "/dax-ranking",
        "label": "RANKX e TOPN",
        "iconName": "Database"
      },
      {
        "path": "/dax-var",
        "label": "VAR e RETURN",
        "iconName": "Database"
      },
      {
        "path": "/kpis-modelagem",
        "label": "KPIs e modelo estrela",
        "iconName": "Database"
      }
    ]
  },
  {
    "title": "Macros & VBA",
    "items": [
      {
        "path": "/macros",
        "label": "Gravar Macros",
        "iconName": "Code2"
      },
      {
        "path": "/vba-intro",
        "label": "Introdução ao VBA",
        "iconName": "Code2"
      },
      {
        "path": "/vba-variaveis",
        "label": "Variáveis, tipos e escopo",
        "iconName": "Code2"
      },
      {
        "path": "/vba-funcoes",
        "label": "Sub vs Function",
        "iconName": "Code2"
      },
      {
        "path": "/vba-range",
        "label": "Range, Cells, Offset, Resize",
        "iconName": "Code2"
      },
      {
        "path": "/vba-loops",
        "label": "Loops e Condicionais",
        "iconName": "Code2"
      },
      {
        "path": "/vba-eventos",
        "label": "Eventos de planilha e pasta",
        "iconName": "Code2"
      },
      {
        "path": "/vba-erros",
        "label": "Tratamento de erros",
        "iconName": "Code2"
      },
      {
        "path": "/vba-dictionary",
        "label": "Dictionary e Collection",
        "iconName": "Code2"
      },
      {
        "path": "/vba-arquivos",
        "label": "Manipular arquivos e pastas",
        "iconName": "Code2"
      },
      {
        "path": "/vba-api",
        "label": "Chamadas a APIs Web",
        "iconName": "Code2"
      },
      {
        "path": "/vba-addin",
        "label": "Suplementos (.xlam)",
        "iconName": "Code2"
      },
      {
        "path": "/userforms",
        "label": "UserForms",
        "iconName": "Code2"
      }
    ]
  },
  {
    "title": "Office Scripts & Automate",
    "items": [
      {
        "path": "/office-scripts",
        "label": "Office Scripts (TypeScript)",
        "iconName": "Code2"
      },
      {
        "path": "/power-automate",
        "label": "Excel + Power Automate",
        "iconName": "Code2"
      }
    ]
  },
  {
    "title": "Compartilhamento",
    "items": [
      {
        "path": "/protecao",
        "label": "Proteção: pasta, planilha, células",
        "iconName": "Layout"
      },
      {
        "path": "/senha-arquivo",
        "label": "Senha em arquivos (AES-256)",
        "iconName": "Layout"
      },
      {
        "path": "/coautoria",
        "label": "Coautoria e versões",
        "iconName": "Layout"
      },
      {
        "path": "/comentarios",
        "label": "Comentários, notas e @menções",
        "iconName": "Layout"
      },
      {
        "path": "/hyperlinks",
        "label": "Hyperlinks",
        "iconName": "Layout"
      }
    ]
  },
  {
    "title": "Performance",
    "items": [
      {
        "path": "/performance",
        "label": "Otimização de pastas grandes",
        "iconName": "Target"
      },
      {
        "path": "/calculo-manual",
        "label": "Cálculo manual e iterativo",
        "iconName": "Target"
      },
      {
        "path": "/arquivos-grandes",
        "label": ".xlsx, .xlsm, .xlsb, .csv",
        "iconName": "Target"
      }
    ]
  },
  {
    "title": "Casos Práticos",
    "items": [
      {
        "path": "/dre",
        "label": "DRE em 5 minutos",
        "iconName": "BarChart3"
      },
      {
        "path": "/fluxo-caixa",
        "label": "Fluxo de Caixa",
        "iconName": "BarChart3"
      },
      {
        "path": "/controle-estoque",
        "label": "Controle de Estoque",
        "iconName": "BarChart3"
      },
      {
        "path": "/orcamento-pessoal",
        "label": "Orçamento Pessoal",
        "iconName": "BarChart3"
      },
      {
        "path": "/dashboard-vendas",
        "label": "Dashboard de Vendas",
        "iconName": "BarChart3"
      },
      {
        "path": "/clt-pj",
        "label": "Calculadora CLT vs PJ",
        "iconName": "BarChart3"
      },
      {
        "path": "/cronograma",
        "label": "Cronograma com Gantt",
        "iconName": "BarChart3"
      }
    ]
  },
  {
    "title": "Produtividade",
    "items": [
      {
        "path": "/atalhos",
        "label": "Atalhos de Teclado",
        "iconName": "Keyboard"
      },
      {
        "path": "/atalhos-windows",
        "label": "Atalhos Windows (completo)",
        "iconName": "Keyboard"
      },
      {
        "path": "/atalhos-mac",
        "label": "Atalhos no Mac",
        "iconName": "Keyboard"
      }
    ]
  },
  {
    "title": "Apêndice",
    "items": [
      {
        "path": "/glossario",
        "label": "Glossário pt-BR / en-US",
        "iconName": "BookOpen"
      },
      {
        "path": "/faq",
        "label": "Perguntas frequentes",
        "iconName": "BookOpen"
      },
      {
        "path": "/changelog-excel",
        "label": "O que mudou em cada versão",
        "iconName": "BookOpen"
      },
      {
        "path": "/recursos",
        "label": "Recursos para continuar",
        "iconName": "BookOpen"
      },
      {
        "path": "/referencias-livro",
        "label": "Referências e Bibliografia",
        "iconName": "BookOpen"
      }
    ]
  }
];

const ICONS: Record<string, any> = { BookOpen, Layout, Palette, Table2, Calculator, Sigma, Search, Type, Clock, Filter, BarChart3, LineChart, Target, Database, Code2, Keyboard };

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const [location] = useHashLocation();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed top-0 bottom-0 left-0 z-50 w-72 bg-card border-r border-border transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-y-auto",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="px-5 py-6 border-b border-border flex items-center gap-3">
          <div className="text-3xl">📊</div>
          <div>
            <div className="font-display font-bold text-foreground text-lg leading-tight">Excel</div>
            <div className="text-xs text-muted-foreground font-mono">manual completo · pt-br</div>
          </div>
        </div>

        <nav className="p-4">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              location === "/"
                ? "bg-primary/15 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <BookOpen className="w-4 h-4" />
            Início
          </Link>

          {NAVIGATION.map((section, idx) => (
            <div key={idx} className="mt-6">
              <h3 className="px-3 text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                {section.title}
              </h3>
              <ul className="space-y-0.5">
                {section.items.filter(i => i.path !== "/").map((item) => {
                  const Icon = ICONS[item.iconName] || BookOpen;
                  const active = location === item.path;
                  return (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        className={cn(
                          "flex items-center gap-3 px-3 py-1.5 rounded-md text-sm transition-colors",
                          active
                            ? "bg-primary/15 text-primary font-medium"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        <Icon className="w-4 h-4 shrink-0 opacity-70" />
                        <span className="truncate">{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
