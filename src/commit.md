__CONTAINER__

##  Flex-direction: row;
<!-- Direção dos itens -->
<!-- column | row-reverse | column-reverse -->

## flex-wrap: nowrap;
<!-- Se vai haver quebra de linha -->
<!-- wrap | wrap-reverse -->

## flex-flow: row nowrap;
<!-- Apenas uma forma simples de escrever direction e wrap juntos -->

## justify-content: flex start;
<!-- flex-end | center | space-between | space-around -->

## align-items: stretch;
<!-- flex-start | flex-end | center | baseline -->

## align-content: stretch;
<!-- flex-start | flex-end | center | space-between | space-around -->


__ITENS__

## order: 1;
<!-- Para adicionar uma ordem aos itens dentro de um container -->

## align-self: center;
<!-- Alinhamento de um unico item-->

## flex-grow: 0;
<!-- Se colocar o valor 1, todos os itens com a classe vão ter a mesma largura, se colocar flex-grow: 3; em um unico item ele vai ocupas o espaço extra 3 vezes maiores que os itens com flex-grow: 1; -->

## flex-shrink: 1;
<!-- Vai colocar sobre o item um tamanho tres vezes menor que os demais -->

## flex-basis: 20px;
<!-- Vai determinar a largura inicial de um ou mais itens -->

## flex: 1 1 300px;
<!-- Maneira resumida de escrever o flex-grow + flex-shrink + flex-basis -->