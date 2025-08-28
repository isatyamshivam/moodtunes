@echo off
echo "Installing Maven and running Spring Boot application..."

REM Download Maven
echo "Downloading Maven..."
powershell -Command "Invoke-WebRequest -OutFile maven.zip https://dlcdn.apache.org/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.zip"

REM Extract Maven
echo "Extracting Maven..."
powershell -Command "Expand-Archive -Path maven.zip -DestinationPath ."

REM Set Maven environment variables
echo "Setting Maven environment variables..."
set "M2_HOME=%CD%\apache-maven-3.9.6"
set "PATH=%PATH%;%M2_HOME%\bin"

REM Run Spring Boot app
echo "Building and running Spring Boot application..."
cd backend
call %M2_HOME%\bin\mvn spring-boot:run

pause
