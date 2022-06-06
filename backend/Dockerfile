#Build Stage
FROM maven:3.6.0-jdk-11-slim AS build
WORKDIR /backend/
COPY . /backend/
RUN mvn -f /backend/pom.xml clean package

#Package Stage
FROM openjdk:11
COPY --from=build /backend/target/backend-0.0.1-SNAPSHOT.jar /usr/local/lib/backend.jar
EXPOSE 8080
CMD java -jar /usr/local/lib/backend.jar