# Casa Globo — versão HTML, CSS e JavaScript

Esta pasta contém uma versão independente do site, sem React, TypeScript, Vite ou dependências de npm.

## Arquivos principais

- `index.html`: estrutura semântica da página.
- `styles.css`: estilos, layout responsivo, cores e identidade visual.
- `script.js`: busca, filtros, seleção de filial, rolagem suave, WhatsApp e cópia de endereço.
- `assets/`: logo, imagem aérea do hero e imagens individuais dos produtos.

## Como abrir

A forma mais simples é abrir o arquivo `index.html` no navegador. Para evitar restrições do navegador com arquivos locais, também é possível abrir um terminal dentro desta pasta e executar:

```bash
python -m http.server 4173
```

Em seguida, acesse `http://localhost:4173`.

A versão original em React/Vite continua preservada na raiz do projeto. Esta pasta oferece uma alternativa estática para hospedagens tradicionais, servidores Apache, cPanel ou serviços que aceitam apenas HTML, CSS e JavaScript.
