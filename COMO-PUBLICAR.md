# Kit Paz – Anticrises: publicar no GitHub e instalar como aplicativo (PWA)

## Estrutura (tudo solto na raiz do repositório, sem pastas)

```
index.html
manifest.json
sw.js
icon-192.png
icon-512.png
icon-maskable-512.png
apple-touch-icon.png
favicon-48.png
LICENSE            (já está no seu repositório; não mexa)
```

| Arquivo | Para que serve |
|---|---|
| `index.html` | O aplicativo inteiro (já com o áudio do Tai Chi dentro). |
| `manifest.json` | Nome do app, cores e quais são os ícones. |
| `sw.js` | Guarda o app no celular para funcionar sem internet. |
| `icon-192.png`, `icon-512.png` | Ícones do app (192×192 e 512×512). **Sem eles o Chrome não instala o app.** |
| `icon-maskable-512.png` | Ícone para os formatos redondos/arredondados do Android. |
| `apple-touch-icon.png` | Ícone do iPhone (180×180). |
| `favicon-48.png` | Ícone pequeno da aba do navegador. |

## O que enviar agora (versão 10.5)

Como os ícones já estão na raiz do seu repositório, **substitua apenas 2 arquivos**: `index.html` e `sw.js` (o `manifest.json`, os ícones e o `LICENSE` continuam como estão).

1. No repositório, clique em **Add file → Upload files**.
2. Arraste os 2 arquivos (com esses mesmos nomes; o GitHub substitui os antigos).
3. Clique em **Commit changes**.
4. Espere de 2 a 10 minutos (o GitHub Pages demora um pouco para atualizar).

## Instalar no celular (Android / Chrome)

1. **Apague o atalho antigo** da tela inicial (segure o ícone e remova). Um atalho criado antes continua sendo só atalho.
2. Abra `https://top10mm.github.io/paz/` no Chrome **com a internet ligada** e deixe a página aberta uns 10 segundos.
3. Abra a aba **Sobre** e role até o fim. No quadro **📲 Aplicativo** deve aparecer "✅ Pronto para usar sem internet".
4. Toque no menu **⋮** do Chrome. Deve aparecer **Instalar app** (e não só "Adicionar à tela inicial"). Também pode aparecer o botão **📲 Instalar aplicativo** no próprio quadro da aba Sobre. Toque e confirme.
5. Abra o app pelo ícone novo. Ele abre em tela cheia, sem a barra de endereços. Na aba **Sobre** deve aparecer "✅ Aberto como aplicativo instalado".
6. Teste: feche o app, ligue o modo avião e abra de novo pelo ícone.

**iPhone (Safari):** Compartilhar → **Adicionar à Tela de Início**; depois abra pelo ícone novo, uma vez, com a internet ligada.

## Funcionar sem internet

- Na **primeira vez** o celular precisa de internet para guardar o app. Depois ele funciona sem internet: técnicas, sons, voz guia, notas, mapa e pontuações. Os dados ficam só no celular.
- Depende de internet: o **envio pelo WhatsApp** e a abertura do mapa.
- O **GPS** funciona sem internet, mas pode demorar mais e ser menos preciso dentro de casa.

## Localização (botão "Pedir ajuda agora")

Na primeira vez, o navegador pergunta se permite a localização: toque em **Permitir**. Se foi negada, a tela SOS avisa como liberar (cadeado ao lado do endereço → Permissões → Localização).

## Atualizar o app no futuro

1. Substitua o `index.html` no repositório pela versão nova.
2. **Importante:** abra o `sw.js` e aumente o número em `const VERSAO = 'paz-v10.5';` (por exemplo `'paz-v10.6'`). Sem isso os celulares continuam na versão antiga.
3. Quem já tem o app recebe a versão nova ao abrir com internet e vê o aviso "Nova versão instalada! Feche e abra o app para atualizar".

## Como o link aparece no WhatsApp

O cartão de pré-visualização mostra apenas o endereço do app. Isso é definido pelas linhas `og:title` e `og:url` no começo do `index.html`. O WhatsApp guarda a pré-visualização por um tempo: se ainda aparecer a antiga, espere alguns minutos depois de publicar, ou envie o link com um final diferente, por exemplo `https://top10mm.github.io/paz/?v=2`.

## Se algo não funcionar

- **Só aparece "Adicionar à tela inicial" (sem "Instalar app"):** confira se `manifest.json`, `icon-192.png` e `icon-512.png` estão na raiz do repositório com os nomes exatamente iguais (minúsculas) e espere alguns minutos.
- **Quadro Sobre mostra "⚠️ Ainda NÃO está pronto para usar sem internet":** abra o link com internet, espere uns segundos e volte à aba Sobre. Se persistir, apague os dados do site (Chrome → ⋮ → Configurações → Configurações do site → Todos os sites → top10mm.github.io → Limpar) e repita.
- Os dados ficam guardados **por endereço**: quem testou por outro endereço começa do zero no endereço do GitHub.
- O repositório é público: qualquer um vê o código, mas os dados de cada pessoa ficam só no celular dela.
