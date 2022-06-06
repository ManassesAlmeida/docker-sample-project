# docker-sample-project
Docker sample project with Java, Angular and MySQL.

Aplicação composta por 3 serviços: <i>backend</i>, <i>frontend</i> e <i>database</i>.

Passos para executar a aplicação:

1. Clonar o projeto do repositório.
    - No diretório <i>'docker-sample-project'</i> (diretório raiz) execute o comando: <code>git clone https://github.com/ManassesAlmeida/docker-sample-project.git</code>
2. Gerar o pacote do projeto backend.
    - No diretório <i>'docker-sample-project\backend'</i> execute o comando: <code>mvn clean package</code>
3. Efetuar build do projeto frontend.
    - No diretório <i>'docker-sample-project\frontend'</i> execute o comando: <code>npm install</code>
    - No mesmo diretório execute o comando: <code>npm run build</code>
4. Iniciar os 3 serviços via Docker Compose.
    - No diretório <i>'docker-sample-project'</i> (diretório raiz) execute o comando: <code>docker-compose up -d</code>

Link para visualizar o frontend em Angular: http://localhost:80/ <br>
Link para visualizar a api em Java: http://localhost:8080/products <br>

Para finalizar a execução dos containers execute o comando: <code>docker-compose down</code>
