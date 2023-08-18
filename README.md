# AngularTabs

Tabs Roteadas com Angular Material

# Recursos

* Criação de tabs via componente tags
* Criação de tabs via rotas

# Uso

## Via component tags

~~~html
<tab>
  <tab-item *ngFor="let tab of tabsContent">
    <tab-header title="{{ tab.title }}"></tab-header>
    <tab-content>{{ tab.content }}</tab-content>
  </tab-item>
</tab>
~~~

### Atributos - @Input()

Nome              | Valor Padrão  | Tipo     | Descrição
------------------|---------------|----------|----------
animationDuration | 0             | number   |tempo de transição entre tabs

## Via rotas

~~~html
<tab [routes]="tabRoutes" (tabIndexChange)="tabChange($event)">
</tab>
~~~

### Atributos - @Input()

Nome   | Valor Padrão    | Tipo     | Descrição
-------|-----------------|----------|----------
routes |new TabRoutes([])| TabRoutes|lista de rotas a serem exibidas nas tabs

### Eventos - @Output()

Nome           | Valor Padrão     | Tipo               | Descrição
---------------|------------------|--------------------|----------
tabIndexChange |new EventEmitter()|EventEmitter<number>|emite índice de tabs para navegação entre elas

# Exibição de Dados

## Via component tags

A exibição de dados é de competência do componente `<tab-item></tab-item>`
Presente dentro do componente `<tab></tab>`, que possui os seguintes atributos:

Nome           | Valor Padrão         | Tipo                           | Descrição
---------------|----------------------|--------------------------------|----------
disabled       | false                | boolean                        |define se a tab está ativa ou não
tabHeader      |new TabHeaderComponent|TabHeaderComponent              |referencia o component `<tab-header>`
contentTemplate| undefined            |TemplateRef<TabContentComponent>|referencia o componente `<tab-content>`

Os components `<tab-header></tab-header>` e `<tab-content></tab-content>` apenas vão exibir os dados passados a eles,
através de suas respectivas referências presentes no componente `<tab-item></tab-item>`.
Dentro de cada um desses componentes, a tag `<ng-content></ng-content>` irá interpolar o conteúdo por eles recebido. 

## Via rotas

A exibição de dados é de competência do próprio componente `<tab></tab>`
através do atributo `routes`, o qual itera os dados em um nav bar do Angular Material.

