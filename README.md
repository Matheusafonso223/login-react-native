PROJETO REACT-NATIVE
Membros do grupo:
-Thallita Evelyn:
-Maria Clara:
-Matheus Afonso:
-Matheus Assis: 01842261

Style Store
Aplicativo mobile de loja de roupas desenvolvido com React Native e Expo. O app permite que o usuário navegue por produtos, gerencie seu perfil e simule o fluxo de compra, sem depender de banco de dados externo.

Telas
-Login (Desenvolvida por Matheus Afonso)
Tela inicial com autenticação simples via email e senha fixos (admin@gmail.com / 123). Conta com imagem de fundo, sobreposição com gradiente e layout responsivo.
-Home (Desenvolvida por Thallita Evelyn)
Tela de boas-vindas após o login. Apresenta o nome do app e dois atalhos principais: ver produtos e acessar o perfil.
-Produtos (Desenvolvida por Matheus Assis)
Lista três produtos com imagem (carregada via URL do Unsplash), nome e preço. Cada item tem um botão "Adicionar ao carrinho". A tela também oferece acesso direto ao carrinho.
-Carrinho (Desenvolvida por Matheus Afonso)
Exibe os itens selecionados com nome, preço e quantidade. Mostra o total calculado e um botão para finalizar a compra, que exibe um alerta de confirmação.
-Perfil (Desenvolvida por Maria Clara)
Exibe informações do usuário (email e localização fixos). Permite editar o nome via modal, visualizar pedidos com status em outro modal, e conta com botão de sair da conta.

Tecnologias

-React Native
-Expo
-Expo Router para navegação por arquivos
-Expo Linear Gradient para gradiente na tela de loginuseState do React para gerenciamento de estado local

Como rodar o projeto
Pré-requisitos:

  Node.js instalado
  Expo CLI instalado (npm install -g expo-cli)
  Aplicativo Expo Go no celular ou emulador configurado
  
  # Clone o repositório
  git clone https://github.com/seu-usuario/login-react-native.git
  
  # Acesse a pasta do projeto
  cd login-react-native-main
  
  # Instale as dependências
  npm install
  
  # Inicie o projeto
  npx expo start

Observações

A autenticação é estática: o único acesso válido é admin@gmail.com com senha 123.
Não há banco de dados. Os produtos, pedidos e dados de perfil são todos mockados diretamente no código.
