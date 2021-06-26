<h1 align="center">
  <br/>
  <img alt="GamePlay" height="80" src=".github/logo.png" />
  <br/>
  GamePlay
  <div>
    <img src="https://img.shields.io/badge/-React%20Native-%234287f5" />
    <img src="https://img.shields.io/badge/-TypeScript-%23294E80" />
    <img src="https://img.shields.io/badge/-Expo-lightgrey" />
    <img src="https://img.shields.io/badge/-Mobile-%23ff69b4" />
  </div>
  <div>
    <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033">
    <img src="https://img.shields.io/static/v1?label=NLW&message=06&color=E51C44&labelColor=0A1033" alt="NLW 06" />
  </div>
</h1>

> Aplicativo desenvolvido durante a Next Level Week Together da Rocketseat na trilha de React Native com o instrutor [Rodrigo Gonçalves](https://www.linkedin.com/in/rodrigo-gon%C3%A7alves-santana/)

![cover](.github/cover.png?style=flat)

## 💻 Projeto
Aplicativo para lhe ajudar a conectar-se e organizar o momento de diversão e jogar com os amigos. Crie grupos para jogar seus games favoritos com seus amigos com esse App que possui autenticação com Discord.

## :hammer_and_wrench: Features 

- Autenticação Social OAuth2 com servidor do Discord.
- Obtém perfil do usuário cadastrado no Discord;
- Lista os servidores do Discord que o usuário faz parte;
- Permite realizar o agendamento de partidas;
- Permite filtrar as partidas por categoria;
- Exibe se a partida foi agendada em um servidor próprio (anfitrião) ou em servidores de outros (convidado);
- Compartilha o convite para ingressar no servidor do usuário;
- Permite redirecionar o usuário para o seu próprio servidor;
- Disponibiliza a função de Logout.

## ✨ Tecnologias

- React Native
- Typescript
- Expo
- Context API
- Async Storage
- Vector Icons
- React Native Svg e Svg Transform
- Axios
- Gradient colors
- OAuth2 Discord 
- Expo Google Fonts
- React Navigation Stack
- React Native Gesture Handler
- Expo Authentication
- React Native Share
- Deep Link

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/0kv33XYjvOgvKGKHBaiR07/GamePlay-NLW-Together?node-id=58913%3A83). É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.

## Executando o projeto

Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.
Em seguida, inicie o projeto.

```cl
expo start
```

Lembre-se de criar o seu App no servidor do Discord para obter as credenciais de autenticação. Em seguida, defina no arquivo .env as configurações do seu App (remova o example do arquivo .env.example).
 
 ```cl
REDIRECT_URI=
SCOPE=
RESPONSE_TYPE=
CLIENT_ID=
CDN_IMAGE=
```

## 📄 License

:brazil: Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE.md) para obter detalhes.

:us: This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## 👋 Agradecimentos

Meus agradecimentos à [Rodrigo Gonçalves](https://www.linkedin.com/in/rodrigo-gon%C3%A7alves-santana/) e à [Rocketseat](https://rocketseat.com.br) pelos ensinamentos passados durante essa Next Level Week Together!
