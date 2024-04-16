# Formulários em HTML5

Os formulários em HTML são usados para coletar dados do usuário. Eles podem incluir vários tipos de campos de entrada, como campos de texto, botões de opção, caixas de seleção, botões, etc. Aqui está um guia básico sobre como usar formulários em HTML5.

## Criando um Formulário

Para criar um formulário em HTML, usamos a tag `<form>`. Aqui está um exemplo de um formulário simples:

```html
<form>
  <label for="nome">Nome:</label><br>
  <input type="text" id="nome" name="nome"><br>
  <input type="submit" value="Enviar">
</form>
```

## Campos de Entrada

O elemento `<input>` é usado para criar campos de entrada. O atributo `type` define o tipo de campo de entrada a ser exibido. Alguns dos tipos comuns incluem `text` (campo de texto), `radio` (botão de opção), `checkbox` (caixa de seleção), `submit` (botão de envio), etc.

## Label

O elemento `<label>` é usado para adicionar uma legenda a um campo de entrada. O atributo `for` do `<label>` deve ser igual ao atributo `id` do campo de entrada correspondente.

## Textarea

O elemento `<textarea>` é usado para criar uma área de texto multilinha.

```html
<textarea id="mensagem" name="mensagem"></textarea>
```

## Select

O elemento `<select>` é usado para criar uma lista suspensa. O elemento `<option>` é usado para definir as opções na lista.

```html
<select id="pais" name="pais">
  <option value="brasil">Brasil</option>
  <option value="argentina">Argentina</option>
  <!-- outras opções -->
</select>
```

## Button

O elemento `<button>` é usado para criar um botão clicável.

```html
<button type="button">Clique aqui</button>
```

Espero que este guia básico ajude você a entender como usar formulários em HTML5.