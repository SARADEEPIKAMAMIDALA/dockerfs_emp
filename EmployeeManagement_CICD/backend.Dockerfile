# # ---------- BUILD STAGE ----------
# FROM maven:3.9.9-eclipse-temurin-21 AS build
# WORKDIR /app

# # Copy pom and download dependencies
# COPY pom.xml .
# RUN --mount=type=cache,target=/root/.m2 mvn -B -DskipTests dependency:go-offline

# # Copy source code
# COPY src ./src

# # Build the application
# RUN --mount=type=cache,target=/root/.m2 mvn -B -DskipTests clean package

# # ---------- RUNTIME STAGE ----------
# FROM eclipse-temurin:21-jre-alpine
# WORKDIR /app

# # Copy built jar
# COPY --from=build /app/target/*.jar app.jar

# # JVM options
# ENV JAVA_OPTS=""

# # Port for Spring Boot
# EXPOSE 7070

# # Run jar with support for JAVA_OPTS
# ENTRYPOINT ["sh", "-c", "java ${JAVA_OPTS} -jar app.jar"]

# FROM maven:3.9-eclipse-temurin-21 AS build
# WORKDIR /app

# # Copy pom.xml first (layer caching)
# COPY pom.xml .

# # Download dependencies and use maven cache
# RUN --mount=type=cache,target=/root/.m2 mvn -B -DskipTests dependency:go-offline

# # Copy source code
# COPY src ./src

# # Build the project
# RUN --mount=type=cache,target=/root/.m2 mvn -B -DskipTests clean install package

# # ---------------------------
# # Runtime Image
# # ---------------------------
# FROM eclipse-temurin:21-jre-alpine
# WORKDIR /app

# # Copy built JAR from previous stage
# COPY --from=build /app/target/*.jar app.jar

# ENV JAVA_OPTS=""

# EXPOSE 7070

# ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]

# Stage 1: Build the app
FROM eclipse-temurin:21-jdk AS builder

WORKDIR /app

COPY mvnw .          
COPY .mvn/ .mvn
COPY pom.xml ./
COPY src ./src

# Give execute permission for mvnw
RUN chmod +x mvnw

RUN ./mvnw clean package -DskipTests

# Stage 2: Run the app
FROM eclipse-temurin:21-jdk

WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar

EXPOSE 2000

ENTRYPOINT ["java", "-jar", "app.jar"]