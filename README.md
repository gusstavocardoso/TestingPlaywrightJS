# Testing Playwright JS
Projeto de automação de testes e2e com Playwright e Node.js.

## Rodando localmente

Clone o projeto

```bash
  https://github.com/gusstavocardoso/TestingPlaywrightJS.git
```

Entre no diretório do projeto

```bash
  cd TestingPlaywrightJS
```

Instale as dependências

```bash
  npm install
```

Execute os testes

```bash
  npm test
```

## Arquitetura do projeto
```
TestingPlaywrightJS
├── package.json
├── playwright.config.js
├── src
│   ├── elements
│   │   ├── CartPageElements.js
│   │   ├── ConfirmationPageElements.js
│   │   ├── LoginPageElements.js
│   │   ├── OrderPageElements.js
│   │   └── ProductPageElements.js
│   ├── fixtures
│   │   └── User.js
│   └── pages
│       ├── CartPage.js
│       ├── ConfirmationPage.js
│       ├── LoginPage.js
│       ├── OrderPage.js
│       └── ProductPage.js
└── tests
    └── playwright.spec.js

```
