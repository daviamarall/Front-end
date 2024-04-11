# Tabelas

As tabelas em HTML são usadas para apresentar dados em formato tabular, semelhante a uma planilha do Excel. Aqui está um guia básico sobre como usar tabelas em HTML5.

## Criando uma Tabela

Para criar uma tabela em HTML, usamos a tag `<table>`. Dentro da tag `<table>`, usamos a tag `<tr>` para criar uma linha e a tag `<td>` para criar uma célula. Aqui está um exemplo de uma tabela simples:

```html
<table>
  <tr>
    <td>Célula 1</td>
    <td>Célula 2</td>
  </tr>
  <tr>
    <td>Célula 3</td>
    <td>Célula 4</td>
  </tr>
</table>
```

## Cabeçalhos de Tabela

Para criar um cabeçalho de tabela, usamos a tag `<th>`. Normalmente, colocamos as tags `<th>` em uma linha separada no início da tabela.

```html
<table>
  <tr>
    <th>Cabeçalho 1</th>
    <th>Cabeçalho 2</th>
  </tr>
  <tr>
    <td>Célula 1</td>
    <td>Célula 2</td>
  </tr>
</table>
```

## Atributos de Tabela

Existem vários atributos que podemos usar para controlar a aparência da tabela. Por exemplo, o atributo `border` permite controlar a espessura da borda da tabela.

```html
<table border="1">
  <!-- conteúdo da tabela -->
</table>
```

## Tag `<caption>`

A tag `<caption>` é usada para adicionar um título à tabela.

```html
<table>
  <caption>Título da Tabela</caption>
  <!-- conteúdo da tabela -->
</table>
```

## Tag `<thead>`, `<tbody>` e `<tfoot>`

Essas tags são usadas para agrupar o conteúdo da tabela. `<thead>` é usado para o cabeçalho da tabela, `<tbody>` para o corpo da tabela e `<tfoot>` para o rodapé da tabela.

```html
<table>
  <thead>
    <!-- cabeçalho da tabela -->
  </thead>
  <tbody>
    <!-- corpo da tabela -->
  </tbody>
  <tfoot>
    <!-- rodapé da tabela -->
  </tfoot>
</table>
```

Espero que este guia básico ajude você a entender como usar tabelas em HTML5.