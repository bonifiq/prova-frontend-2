## Prova frontend BonifiQ
Nessa prova você deve criar um widget que irá aparecer em sites de terceiros. 

### O que é um widget?
Um widget, em contexto web, geralmente se trata de alguma funcionalidade que é inserida em um contexto já existente. Alguns exemplos de widgets populares:

- Site da Samsung que utiliza um widget de Chat no canto inferior esquerdo
![](/imgs/01.png)
- Site da Kabum utiliza um widget de Feedback na lateral esquerda
![](/imgs/02.png)

Ao clicar em um widget, espera-se alguma funcionalidade ocorra. No caso da Samsung, é aberta uma janela de chat que permite ao consumidor tirar dúvida.
No caso da Kabum, é aberta uma pequena janela de feedback, que permite ao cliente dar uma nota ao site.

## Explore o conteúdo da prova
Nessa prova temos 3 sites, que estão na pasta [sites-exemplo](sites-exemplo), em cada um deles foi instalado o script em que você deverá criar de fato o widget.

Os passos do desenvolvimento deverão ser:
- Abra o arquivo [widget.js](widget.js) em um editor de códigos. Note que ele já possui uma chamada ao console.
- No navegador, abra o arquivo index.html que se encontra em [sites-exemplo/Site01/index.html](sites-exemplo/Site01/index.html). Note que o arquivo widget.js já se encontra instalado. Note também que a mensagem "widget instalado" aparece no Console do navegador.
- Você não precisa se preocupar com o conteúdo do site. Seu trabalho é apenas no widget. 

## Resultado final
1 - O widget deverá aparecer no canto inferior direito do site, como na foto a abaixo (note o texto "Clique para abrir")
![](/imgs/03.png) 

 2 - Ao clicar no widget, o mesmo deverá ser expandido, como se crescesse para cima. O resultado final, após o click, deverá ser como na imagem abaixo. 
![](/imgs/04.png) 

3 - Além de exibir o widget maior, seu script também deverá fazer uma consulta a um endpoint que retorna uma lista de pessoas. Dentro do conteúdo do widget expandido deverá exibir a lista com o nome das pessoas. O resultado final, portanto, é o seguinte:
![](/imgs/05.png) 

O vídeo abaixo ilustra o resultado final completo, incluindo a interação do usuário para abertura do widget:
![](/imgs/06.gif) 