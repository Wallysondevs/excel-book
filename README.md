# 📊 Excel — Guia Completo em Português

  Guia completo de Microsoft Excel com 42 capítulos, exemplos práticos e conteúdo 100% em português.

  🔗 **[Ver o guia online →](https://wallysondevs.github.io/excel-book/)**

  ## 📚 Conteúdo

  | # | Capítulo |
  |---|---|
  | 01 | História do Excel |
  | 02 | Versões e Edições |
  | 03 | Interface — Faixa de Opções |
  | 04 | Pastas, Planilhas e Células |
  | 05 | Inserir e Editar Dados |
  | 06 | Tipos de Dados |
  | 07 | Formatação de Células |
  | 08 | Formatação Condicional |
  | 09 | Tabelas (Ctrl+T) |
  | 10 | Operadores e Fórmulas |
  | 11 | Referências (Relativa, Absoluta, Mista) |
  | 12 | Nomes de Intervalos |
  | 13 | SOMA, MÉDIA e Contagem |
  | 14 | Função SE |
  | 15 | E / OU / NÃO |
  | 16 | PROCV (VLOOKUP) |
  | 17 | PROCX (XLOOKUP) |
  | 18 | ÍNDICE + CORRESP |
  | 19 | SOMASE & SOMASES |
  | 20 | CONT.SE & CONT.SES |
  | 21 | Funções de Texto |
  | 22 | Funções de Data e Hora |
  | 23 | Classificar e Filtrar |
  | 24 | Validação de Dados |
  | 25 | Tabela Dinâmica |
  | 26 | Campos Calculados |
  | 27 | Segmentação de Dados |
  | 28 | Gráficos |
  | 29 | Sparklines |
  | 30 | Atingir Meta |
  | 31 | Solver |
  | 32 | Cenários |
  | 33 | Power Query — Introdução |
  | 34 | Power Query — Transformações |
  | 35 | Power Pivot |
  | 36 | DAX Básico |
  | 37 | Gravar Macros |
  | 38 | Introdução ao VBA |
  | 39 | VBA — Loops e Condicionais |
  | 40 | UserForms |
  | 41 | Atalhos de Teclado |
  | 42 | Referências e Recursos |

  ## 🛠 Tecnologia

  React 19 • Vite 7 • Tailwind CSS v4 • Wouter • Framer Motion • React Syntax Highlighter • GitHub Pages

  ## 🚀 Deploy

  ### Opção 1 — local (com gh-pages)

  ```bash
  npm install
  npm run deploy
  ```

  Isso publica a pasta `dist/` no branch `gh-pages`. Em **Settings → Pages**, escolha **Branch: gh-pages /(root)**.

  ### Opção 2 — GitHub Actions

  Crie o arquivo `.github/workflows/deploy.yml` (não foi possível publicar automaticamente porque o token não possui o escopo `workflow`):

  ```yaml
  name: Deploy to GitHub Pages
  on:
    push: { branches: [main] }
  permissions: { contents: read, pages: write, id-token: write }
  jobs:
    build-deploy:
      runs-on: ubuntu-latest
      environment: { name: github-pages, url: ${{ steps.dep.outputs.page_url }} }
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with: { node-version: 20 }
        - run: npm install
        - run: npm run build
        - uses: actions/configure-pages@v5
        - uses: actions/upload-pages-artifact@v3
          with: { path: ./dist }
        - id: dep
          uses: actions/deploy-pages@v4
  ```

  Em **Settings → Pages**, deixe **Source: GitHub Actions**.

  ## 🛠 Tecnologia

  React 19 • Vite 7 • Tailwind CSS v4 • Wouter (hash routing) • Framer Motion • React Syntax Highlighter • lucide-react
  