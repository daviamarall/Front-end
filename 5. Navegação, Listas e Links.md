
# Navegação, Listas e Links

HTML5 oferece uma variedade de elementos para criar uma navegação intuitiva, listas organizadas e links para conectar diferentes partes de uma página da web. Abaixo estão alguns dos elementos principais:

## Navegação

### `<nav>`
O elemento `<nav>` é usado para definir uma seção de navegação em um documento HTML.

Exemplo:
```html
<nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Contato</a></li>
    </ul>
</nav>
```

## Listas

### `<ul>` (Lista não ordenada)
O elemento `<ul>` é usado para criar uma lista não ordenada.

Exemplo:
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

### `<ol>` (Lista ordenada)
O elemento `<ol>` é usado para criar uma lista ordenada.

Exemplo:
```html
<ol>
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Terceiro item</li>
</ol>
```

### `<li>` (Item de lista)
O elemento `<li>` é usado para definir um item em uma lista (`<ul>` ou `<ol>`).

## Links

### `<a>` (Âncora)
O elemento `<a>` é usado para criar links em HTML.

Exemplo:
```html
<a href="https://www.exemplo.com">Visite Exemplo.com</a>
```

### `<a>` com âncoras internas
Você também pode usar âncoras internas para criar links dentro da mesma página.

Exemplo:
```html
<a href="#secao1">Ir para Seção 1</a>

...

<h2 id="secao1">Seção 1</h2>
```

Estes são apenas alguns dos elementos básicos em HTML5 para navegação, listas e links. Com esses elementos, é possível criar estruturas de página web bem organizadas e navegáveis.