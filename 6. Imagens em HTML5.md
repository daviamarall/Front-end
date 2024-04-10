# Uso de Imagens em HTML5

HTML5 introduziu várias melhorias e novos recursos para tornar a web mais interativa e dinâmica. Um desses recursos é a capacidade de incorporar imagens em páginas da web. Aqui está um guia básico sobre como usar imagens em HTML5.

## Inserindo uma imagem

Para inserir uma imagem em uma página HTML, usamos a tag `<img>`. A tag `<img>` é uma tag vazia, o que significa que não tem uma tag de fechamento. Aqui está um exemplo de como usar a tag `<img>`:

```html
<img src="caminho/para/a/imagem.jpg" alt="Descrição da imagem">
```

O atributo `src` especifica o caminho para a imagem que você deseja inserir. Pode ser um caminho relativo ou um URL absoluto.

O atributo `alt` fornece uma descrição textual da imagem. Isso é útil para melhorar a acessibilidade do site, pois os leitores de tela podem ler esta descrição para usuários com deficiência visual.

## Atributo `width` e `height`

Você pode controlar o tamanho da imagem usando os atributos `width` (largura) e `height` (altura). Estes são especificados em pixels.

```html
<img src="caminho/para/a/imagem.jpg" alt="Descrição da imagem" width="500" height="600">
```

## Atributo `align`

O atributo `align` permite alinhar a imagem à esquerda, à direita ou ao centro.

```html
<img src="caminho/para/a/imagem.jpg" alt="Descrição da imagem" align="right">
```

## Tag `<figure>` e `<figcaption>`

HTML5 introduziu a tag `<figure>` para marcar uma imagem com uma legenda. A tag `<figcaption>` é usada para adicionar uma legenda à imagem.

```html
<figure>
  <img src="caminho/para/a/imagem.jpg" alt="Descrição da imagem">
  <figcaption>Esta é a legenda da imagem</figcaption>
</figure>
```
