# Portfólio — Isabella Bof

Site estático (HTML + CSS + JS puro, sem build), pronto para publicar
de graça no **GitHub Pages**, com botão de idioma **PT / EN**.

## Estrutura

```
index.html        → todo o conteúdo do site
css/style.css      → estilos
js/script.js       → botão de idioma PT/EN
assets/isabella.jpg → sua foto (moldura polaroid feita em CSS)
```

## Como publicar no GitHub Pages (passo a passo)

1. **Crie uma conta no GitHub** (se ainda não tiver): https://github.com/signup

2. **Crie um repositório novo**
   - Clique em "New repository".
   - Nome sugerido: `portfolio` (ou `isabella-bof.github.io` — veja a
     observação abaixo sobre o nome).
   - Deixe como **Public**.
   - Não marque "Add a README" (você já tem um).

3. **Suba os arquivos**
   - Na página do repositório recém-criado, clique em
     "uploading an existing file".
   - Arraste os arquivos `index.html`, `README.md` e as pastas `css/`,
     `js/` e `assets/` (o GitHub aceita arrastar pastas inteiras no
     navegador).
   - Clique em "Commit changes".

4. **Ative o GitHub Pages**
   - Vá em **Settings** (do repositório) → **Pages** (menu lateral
     esquerdo).
   - Em "Source", selecione a branch `main` e a pasta `/ (root)`.
   - Clique em **Save**.

5. **Acesse o site**
   - Depois de 1–2 minutos, o GitHub mostra o link do site em
     Settings → Pages, algo como:
     `https://SEU-USUARIO.github.io/portfolio/`
   - Se você nomear o repositório exatamente
     `SEU-USUARIO.github.io`, o site fica em
     `https://SEU-USUARIO.github.io/` (sem `/portfolio/` no final) —
     link mais curto para colocar no LinkedIn e no currículo.

## Como editar depois

- Qualquer texto: edite `index.html` (procure pelo texto em português
  ou inglês, cada trecho aparece duas vezes, uma em `data-lang="pt"`
  e outra em `data-lang="en"`).
- Cores, fontes e espaçamentos: `css/style.css` (as cores principais
  estão no topo, em `:root`).
- Trocar a foto: substitua o arquivo `assets/isabella.jpg` por outra
  imagem **com o mesmo nome**, ou troque o nome dentro do
  `<img src="assets/...">` no `index.html`.
- Depois de editar, é só subir o arquivo alterado de novo no GitHub
  (ou usar Git pelo terminal, se preferir) — o site atualiza sozinho
  em cerca de 1 minuto.

## Domínio próprio (opcional, futuro)

Se um dia quiser usar um domínio próprio (ex.: `isabellabof.com`) sem
pagar hospedagem — só o domínio — dá pra apontar ele para o mesmo
GitHub Pages em Settings → Pages → Custom domain. Não é necessário
agora; o link gratuito do GitHub já funciona perfeitamente.
