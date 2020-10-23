<div align="center">

<img width="250px" align="center" src="https://raw.githubusercontent.com/pmqueiroz/dsdm-trab/master/.github/logo.svg"></img>

<p align="center">
    Trabalho da matéria de Desenvolvimento de Sistemas para Dispositivos Móveis, aplicativo para <i>Android</i> contendo mini games 
</p>

![Status][status-badge]
![Apk Download][proffy-apk-badge]
[![License][license-badge]][license-url]

</div>

## Conteúdo
* [Começando](#Começando-)
* [Features](#Features-)
    * [Tic Tac Toe](#TicTacToe)
    * [Hangman Game](#Hangman-Game)
* [Issues](#Issues-)
* [Contribuindo](#Contribuindo-)
* [License](#License-)
## Começando 🚀
**Requisitos**

Para rodar essa aplicação em sua máquina como desenvolvedor você precisa ter instalado:
* [Node.js][node-url]
* [Yarn][yarn-url] or [npm][npm-url]
* [Expo][expo-url]

**Download**

Baixe o .zip deste repositório ou clone usando CLI do git

#### Download do Repositório
[![Download Repo][download-button]][download-url]

#### Usando git CLI
```shell
$ git clone https://github.com/pmqueiroz/dsdm-trab.git xo-games
```
**Rodando em sua máquina**

```shell
$ cd {path to your clone}

# Instalando as dependencias
# Usando Yarn (nao seja boi de usar npm)
$ yarn
# Usando npm
$ npm i

# Rodando a aplicação
$ expo start
```
se você tem dúvidas sobre como rodar o projeto usando expo consulte sua [documentação](https://docs.expo.io)

## Features 🎮
### TicTacToe
### Hangman Game
## Issues 🐛
Caso encontre algum problema em nossa aplicação considere nos alertar na [Sessão de Erros][issues-url].
## Contribuindo 🤝
Existem muitas formas de contribuir com este projeto

Se você quiser ajudar a melhorar o nosso código siga os passos abaixo

```ps
# Faça o fork desse repositório usando a CLI do Github
# Se você não tem a CLI do Github instalada faça manualmente no site.
$ gh repo fork pmqueiroz/dsdm-trab

# Clone seu fork
$ git clone {your-fork-url}
$ cd dsdm-trab

# Crie uma branch com sua feature
$ git checkout -b {branch-name}

# Faca um commit com suas alterações
$ git commit -m 'feat: {feature-name}'

# Envie o código para o seu fork
$ git push origin {branch-name}

# Faça um pull request do seu repositório
```

### License 📝
This project is under the MIT license. See the [LICENSE][license-url] for more information.

[status-badge]: https://img.shields.io/badge/status-building-important?logo=tool
[proffy-apk-badge]: https://img.shields.io/badge/Apk-download-important?logo=android&color=%233575F8
[license-badge]: https://img.shields.io/github/license/pmqueiroz/dsdm-trab?color=%233575F8
[license-url]: https://github.com/pmqueiroz/dsdm-trab/blob/master/LICENSE
[issues-url]: https://github.com/pmqueiroz/dsdm-trab/issues
[download-button]: https://github-readme-perks.vercel.app/api/button?content=Baixar%20Repo&link=https://github.com/pmqueiroz/dsdm-trab/archive/master.zip&logo=github&bgColor=%233575F8
[download-url]: https://github.com/pmqueiroz/dsdm-trab/archive/master.zip
[node-url]: https://nodejs.org/en
[yarn-url]: https://classic.yarnpkg.com/
[npm-url]:  https://www.npmjs.com/
[expo-url]: https://expo.io/
