Aplicação composta por 3 serviços: <i>backend (Java)</i>, <i>frontend (Angular)</i> e <i>database (MySQL)</i>.

# Executando via Docker Compose
Passos para executar a aplicação:

1. Clonar o projeto do repositório.
    - No diretório <i>'docker-sample-project'</i> (diretório raiz) execute o comando: <code>git clone https://github.com/ManassesAlmeida/docker-sample-project.git</code>
2. Iniciar os 3 serviços via Docker Compose.
    - No diretório <i>'docker-sample-project'</i> (diretório raiz) execute o comando: <code>docker-compose up -d</code>

Link para visualizar o frontend em Angular: http://localhost:80/ <br>
Link para visualizar a api em Java: http://localhost:8080/api/products <br>

Para finalizar a execução dos containers execute o comando: <code>docker-compose down</code>

# Executando via Dockerfile
Passos para executar a aplicação:

1. Clonar o projeto do repositório.
    - No diretório <i>'docker-sample-project'</i> (diretório raiz) execute o comando: <code>git clone https://github.com/ManassesAlmeida/docker-sample-project.git</code>
2. Criar a rede que será utilizada pelos 3 serviços.
    - No diretório <i>'docker-sample-project'</i> (diretório raiz) execute o comando: <code>docker network create --driver bridge docker-sample-project-network</code>
3. Iniciar o serviço database.
    - No subdiretório <i>'database'</i> execute o comando a seguir para criar a imagem: <code>docker build -t docker-sample-project-database .</code>
    - Em seguida execute o container a partir da imagem criada, utilizando o comando: <code>docker container run -d --name=database --net=docker-sample-project-network --volume=$pwd/volumes/:/var/lib/mysql -p 3306:3306 docker-sample-project-database</code>
4. Iniciar o serviço backend.
    - No subdiretório <i>'backend'</i> execute o comando a seguir para criar a imagem: <code>docker build -t docker-sample-project-backend .</code>
    - Em seguida execute o container a partir da imagem criada, utilizando o comando: <code>docker container run --name=backend --net=docker-sample-project-network -p 8080:8080 docker-sample-project-backend</code>
5. Iniciar o serviço frontend.
    - No subdiretório <i>'frontend'</i> execute o comando a seguir para criar a imagem: <code>docker build -t docker-sample-project-frontend .</code>
    - Em seguida execute o container a partir da imagem criada, utilizando o comando: <code>docker container run --name=frontend --net=docker-sample-project-network -p 80:80 docker-sample-project-frontend</code>

Link para visualizar o frontend em Angular: http://localhost:80/ <br>
Link para visualizar a api em Java: http://localhost:8080/api/products <br>

Para finalizar a execução dos containers execute os comandos: 
- <code>docker container stop frontend</code>
- <code>docker container stop backend</code>
- <code>docker container stop database</code>
