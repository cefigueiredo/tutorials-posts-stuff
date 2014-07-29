Angular.js se tornou um framework MVC javascript muito popular. E existem muitos artigos sobre suas facilidades, advindas de seus controllers, suas diretivas, services e factories. Porém pouco se fala em relação a testes unitários para aplicações Angular.js, e isso que pretendo mudar com este artigo. Este artigo vai tratar basicamente de como testar unitariamente seu app feito em Angular.js.

Para começar, é preciso primeiro montar seu ambiente de testes.

Existem várias formas de se montar o ambiente de teste, uma das mais simples, é fazer o clone do projeto [angular-seed](https://github.com/angular/angular-seed), que já vem com um ambiente pré-configurado, porém ainda possível customizar de acordo com sua necessidade.


Na prática, deste projeto, nós precisamos somente dos seguintes arquivos:

    app
      js  //onde ficarão o app javascript
    test
      unit  //onde ficarão nossos testes
      karma.conf.js
    package.json
    bower.json
    .bowerrc

Para preparar o ambiente com este projeto só é preciso ter o [node.js](http://nodejs.org) instalado. Todos os requisitos restantes serão instalados quando após executar o comando `npm install`

Agora que estamos com o ambiente pronto, podemos começar nossos testes.

Neste ambiente, a sintaxe de testes é a do nosso amado [Jasmine](http://jasmine.org) então não difere muito do que já estamos habituados a fazer, e caso não esteja, vale a pena consultar a documentação do jasmine para aprender como testar o javascript.

Para testar uma aplicação Angular.js precisamos instanciar a aplicação que iremos testar passando module("myApp") para o beforeEach do describe.


```javascript
describe("MyAngularTutorial", function() {
  beforeEach(module("myApp"));

  describe("ContactsCtrl", function() {

    ...

  })

})
```