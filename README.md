# Air Quality Monitoring System

Este repositório contém dois projetos interconectados para monitoramento da qualidade do ar em tempo real, gerenciados usando **Turborepo**. O sistema é composto por uma API que coleta e processa os dados ambientais capturados por um dispositivo embarcado (como o ESP32 com sensores DHT11 e MQ-135), e um painel de controle (Dashboard) para exibir as informações de qualidade do ar.

## Estrutura do Repositório

Este repositório é um monorepositório gerido pelo **Turborepo**, que organiza o código em pacotes separados para a API e o Dashboard:

- **apps/backend**: API que recebe os dados dos dispositivos embarcados, processa e armazena no banco de dados. Também fornece endpoints para o Dashboard.
- **apps/frontend**: Dashboard visual para exibir os dados ambientais coletados pela API, com gráficos e tabelas para visualização em tempo real.

## Funcionalidades

### API (Backend)

- Recebe dados ambientais de sensores DHT11 e MQ-135 via HTTP.
- Armazena dados no banco de dados para consultas futuras.
- Fornece endpoints HTTP para o Dashboard consumir os dados em tempo real.
- Implementação de autenticação e controle de acesso.

### Dashboard (Frontend)

- Interface visual para exibir os dados de qualidade do ar.
- Gráficos e tabelas com dados de temperatura, umidade e concentração de gases.
- Conexão com a API para exibição de dados ao vivo.
- Atualização automática das informações.

## Como Usar

### Configuração do Ambiente

1. Clone o repositório:
    ```bash
    git clone https://github.com/thayanemenezes/air-quality-monitoring-monorepo.git
    cd air-quality-monitoring-monorepo
    ```

2. Instale as dependências do Turborepo:
    ```bash
    npm install
    ```

    O **Turborepo** irá instalar as dependências de todos os pacotes (backend e frontend) de forma otimizada.

3. Configuração das variáveis de ambiente:
   - No backend, configure as variáveis de ambiente, como a URL do banco de dados e outras configurações específicas da API.
   - No frontend, configure a URL da API para que o Dashboard consiga consumir os dados corretamente.

### Rodando a Aplicação

1. **Rodando o Backend (API)**:
   - Para iniciar o servidor da API, utilize o comando do **Turborepo** para rodar a aplicação do backend:
     ```bash
     npm run dev --filter backend
     ```

2. **Rodando o Frontend (Dashboard)**:
   - Para iniciar o servidor do Dashboard, use o comando do **Turborepo** para rodar a aplicação frontend:
     ```bash
     npm run dev --filter frontend
     ```

   - Acesse o painel do Dashboard no navegador:
     ```text
     http://localhost:3000
     ```

### Enviando Dados do Dispositivo Embarcado

- O sistema embarcado (ESP32 com sensores DHT11 e MQ-135) deve ser configurado para enviar os dados ambientais para a API a cada 30 minutos, conforme descrito no projeto do dispositivo.
- Certifique-se de que o dispositivo embarcado está conectado à mesma rede Wi-Fi e que a URL da API está corretamente configurada.

---

## Considerações Finais

- **Segurança**: O projeto inicial utiliza HTTP para comunicação com a API. Para maior segurança e desempenho, considere migrar para HTTPS ou MQTT em versões futuras.
- **Escalabilidade**: O sistema pode ser expandido para suportar múltiplos dispositivos embarcados e maior volume de dados.
- **Integração de Sensores**: Embora este sistema seja configurado para os sensores **DHT11** e **MQ-135**, ele pode ser facilmente adaptado para outros sensores de qualidade do ar.

