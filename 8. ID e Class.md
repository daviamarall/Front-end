# ID e Class em HTML5

Os atributos `id` e `class` são usados em HTML para identificar e classificar elementos. Eles são úteis para aplicar estilos CSS e manipular elementos com JavaScript. Aqui está um guia básico sobre como usar `id` e `class` em HTML5.

## ID

O atributo `id` é usado para identificar um único elemento em uma página da web. O valor do `id` deve ser único dentro do documento. Aqui está um exemplo de como usar o `id`:

```html
<div id="meuDiv">Este é o meu div</div>
```

Em CSS, você pode usar o `id` para aplicar estilos a um elemento específico:

```css
#meuDiv {
  color: blue;
}
```

Em JavaScript, você pode usar o `id` para selecionar um elemento específico:

```javascript
var div = document.getElementById("meuDiv");
```

## Class

O atributo `class` é usado para classificar elementos em grupos. Diferente do `id`, o mesmo valor de `class` pode ser usado em vários elementos. Aqui está um exemplo de como usar o `class`:

```html
<div class="minhaClasse">Este é o meu div</div>
<p class="minhaClasse">Este é o meu parágrafo</p>
```

Em CSS, você pode usar a `class` para aplicar estilos a um grupo de elementos:

```css
.minhaClasse {
  color: red;
}
```

Em JavaScript, você pode usar a `class` para selecionar um grupo de elementos:

```javascript
var elementos = document.getElementsByClassName("minhaClasse");
```