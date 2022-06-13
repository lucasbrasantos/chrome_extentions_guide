# chrome extentions guide
---
## um simples guia para como criar sua propria extenção no chrome, e por fim ter a capacidade de realizar coisas legais

<br/>


### 1:

primeiro de tudo crie um diretorio que sera o nome do projeto, abra esse diretorio e crie um arquivo chamado ```manifest.json```
nesse arquivo sera armazenado os dados da extenção, como nome, vercao, descricao, ações, scripts

<pre><code>
{
  "manifest_version":	3,

  "name": "extention name example",
  "description": "extention description example",
  "version": "1",

}
</code></pre>

### 2:

agora adicione o ```content_script``` nesse manifesto

<pre><code>
"content_scripts": [
    {
      "matches" : ["<all_urls>"],
      "css": ["style.css"],
      "js": ["script.js"]
    }
  ]
</pre></code>

ela ficara mais ou menos assim

<pre><code>

{

  "manifest_version":	3,

  "name": "extention name example",
  "description": "extention description example",
  "version": "1",

  //

  "content_scripts": [
    {
      "matches" : ["<all_urls>"], // url para o script ser executado em site especifico, para multiplos sites ["site1.com", "site2.com"]
      "css": ["style.css"], // caminho para o css
      "js": ["script.js"] // caminho para o javascript
    }
  ]

}
</pre></code>
### 3:

agora no css voce pode mudar o estilo para qualquer um, que ira mudar na pagina que voce escolheu em ```"matches"```
a mesma coisa com o javascript

### 4:

para fazer o upload de sua extenção
![image](https://user-images.githubusercontent.com/78361979/173456949-5610593f-903b-4e50-8c40-56bbef11a5cf.png)

entre em na pagina de extencoes no chrome "chrome://extensions/"
ative o modo de desenvolvedor
e clique em carregar sem compactação
entao selecione a pasta com seu projeto

### 5:

divirta-se e brinque com as multiplas possibilidades de criar algo legal


