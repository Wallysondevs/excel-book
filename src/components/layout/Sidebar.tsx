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
        "path": "/entrada-dados",
        "label": "Inserir e Editar Dados",
        "iconName": "Layout"
      },
      {
        "path": "/tipos-dados",
        "label": "Tipos de Dados",
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
        "path": "/referencias",
        "label": "Referências (Relativa, Absoluta)",
        "iconName": "Calculator"
      },
      {
        "path": "/nomes",
        "label": "Nomes de Intervalos",
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
        "path": "/soma-se",
        "label": "SOMASE & SOMASES",
        "iconName": "Sigma"
      },
      {
        "path": "/cont-se",
        "label": "CONT.SE & CONT.SES",
        "iconName": "Sigma"
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
        "path": "/data-hora",
        "label": "Funções de Data e Hora",
        "iconName": "Clock"
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
        "path": "/vba-loops",
        "label": "VBA — Loops e Condicionais",
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
    "title": "Produtividade",
    "items": [
      {
        "path": "/atalhos",
        "label": "Atalhos de Teclado",
        "iconName": "Keyboard"
      }
    ]
  },
  {
    "title": "Apêndice",
    "items": [
      {
        "path": "/referencias-livro",
        "label": "Referências e Recursos",
        "iconName": "BookOpen"
      }
    ]
  }
];

  const ICONS: Record<string, any> = { BookOpen: BookOpen, Layout: Layout, Palette: Palette, Table2: Table2, Calculator: Calculator, Sigma: Sigma, Search: Search, Type: Type, Clock: Clock, Filter: Filter, BarChart3: BarChart3, LineChart: LineChart, Target: Target, Database: Database, Code2: Code2, Keyboard: Keyboard };

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
  