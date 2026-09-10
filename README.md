# Portfólio — Isabella Bof

Site estático (HTML/CSS/JS puro, sem build, sem dependências) pronto para publicar
gratuitamente no GitHub Pages.

## Arquivos

```
index.html    → conteúdo do site
style.css     → estilo visual
script.js     → menu mobile
assets/       → CV em PDF para download
```

## Como publicar no GitHub Pages (gratuito, sem domínio)

1. Crie uma conta no [GitHub](https://github.com) (se ainda não tiver).
2. Crie um repositório novo. Para ficar com a URL mais curta e "principal"
   (`https://seu-usuario.github.io`), nomeie o repositório exatamente como:
   ```
   seu-usuario.github.io
   ```
   Troque `seu-usuario` pelo seu nome de usuário do GitHub. Se preferir manter
   como um projeto separado (ex: `portfolio`), a URL final fica
   `https://seu-usuario.github.io/portfolio`.
3. Envie os arquivos desta pasta para o repositório. Duas formas:
   - **Pelo navegador**: abra o repositório → "Add file" → "Upload files" →
     arraste `index.html`, `style.css`, `script.js` e a pasta `assets`.
   - **Pelo terminal** (se já usa Git):
     ```bash
     cd isabella-portfolio
     git init
     git add .
     git commit -m "Primeira versão do portfólio"
     git branch -M main
     git remote add origin https://github.com/seu-usuario/seu-usuario.github.io.git
     git push -u origin main
     ```
4. No repositório, vá em **Settings → Pages**.
5. Em "Build and deployment", selecione **Deploy from a branch**, escolha a
   branch `main` e a pasta `/ (root)`. Clique em **Save**.
6. Aguarde 1–2 minutos. O GitHub mostrará o link do site publicado (algo como
   `https://seu-usuario.github.io`).

## Como atualizar depois

Sempre que quiser mudar um texto ou dado (ex: novo cargo, novo prêmio),
edite `index.html` diretamente pelo GitHub (ícone de lápis no arquivo) ou
localmente e dê `git push` de novo — o site atualiza sozinho em ~1 minuto.

## Personalizações rápidas

- **Trocar o CV**: substitua `assets/Isabella_Bof_CV.pdf` por uma versão
  atualizada, mantendo o mesmo nome de arquivo.
- **Cores**: no topo de `style.css`, o bloco `:root` concentra as cores
  (`--ink`, `--amber`, `--cream`, `--teal`) — mudar ali reflete no site inteiro.
- **Domínio próprio no futuro**: se um dia quiser um domínio (ex:
  `isabellabof.com`) sem trocar de hospedagem, basta comprar o domínio e
  configurar um registro CNAME apontando para `seu-usuario.github.io` — o
  GitHub Pages continua gratuito, você paga só o domínio.
