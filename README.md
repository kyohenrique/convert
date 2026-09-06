# Convert

Conversor de moedas estrangeiras para Real (BRL). Você digita um valor, escolhe
entre Dólar, Euro ou Libra, e a página mostra quanto isso dá em reais.

Projeto de estudo, feito para praticar JavaScript básico durante um curso.

## Como abrir

Não há build nem dependências para instalar. Basta abrir o `index.html` no
navegador.

Se preferir rodar com um servidor local:

```bash
npx serve .
```

## Tecnologias

- HTML5
- CSS3 (Flexbox, propriedades de `background`, `appearance` para estilizar o `<select>`)
- JavaScript (sem bibliotecas)
- Fonte [Valley Sans](https://fonts.google.com/specimen/Valley+Sans) via Google Fonts
- Ícone do select: [Lucide](https://lucide.dev) (licença ISC)
- Logotipo próprio em SVG, com a palavra vetorizada em Valley Sans (não depende da fonte carregar)

## Estrutura

```
convert/
├── images/
│   ├── background.png
│   ├── chevron-down.svg
│   └── logo.svg
├── index.html
├── style.css
├── script.js
├── legacy.js    (inativo — trechos da primeira versão, não é carregado)
└── README.md
```

## O que foi praticado

- **Manipulação do DOM** — `querySelector`, `getElementById`, `textContent`
- **Eventos** — `addEventListener('input')` e `onsubmit` com `preventDefault()`
- **Expressões regulares** — `/\D+/g` para filtrar tudo que não é dígito no campo de valor
- **`switch`** — para escolher a cotação de acordo com a moeda selecionada
- **Template literals** — para montar o texto da cotação (`` `${symbol} 1 = ${rate}` ``)
- **`toLocaleString`** — para formatar o total no padrão brasileiro de moeda
- **`classList`** — para revelar o resultado adicionando uma classe CSS

## Limitações conhecidas

Estas são limitações assumidas do exercício, não bugs a serem corrigidos por acidente:

- **As cotações são fixas.** Estão escritas direto no `script.js` (USD 5.25,
  EUR 5.50, GBP 6.20) e não vêm de nenhuma API. Ou seja, estão desatualizadas.
- **O campo de valor só aceita números inteiros.** O filtro `/\D+/g` remove
  vírgulas e pontos, então digitar `12,50` é interpretado como `1250`.
