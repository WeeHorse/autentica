# Autentica

Kodexempel om autentisering i SpringBoot med JWT (Json Web Token) och MongoDB som databas, och är baserat på [Bezkoder: Spring Boot, MongoDB: JWT Authentication with Spring Security](https://www.bezkoder.com/spring-boot-jwt-auth-mongodb/)

### Backend
Är Spring Boot-applikationen. Startas med AutenticaApp och servas på http://localhost:8080.

Du kan se vad som finns i API:et genom att öppna Postman Colletion (länkas under resurser).

OBS! Du behöver använda Java 8 (Versionnummer 1.8 som JDK). Det går att migrera upp hela vägen till Java 17, genom att lägga till en del dependencies, m m. Men det arbetet är inte gjort i detta kodexempel.

### Frontend
Ligger i src/main/java/resources/public.
Öppnas med fördel i VS Code och kan köras med t ex Live server där. Backend behöver samtidigt köras i Java. Då backend och frontend hamnar på olika portar behöver man använda en proxy eller lyfta CORS-restrictions. I detta kodexemplet är CORS-restrictions lyfta.

### Resurser
* [Postman collection](https://www.postman.com/lunar-module-administrator-13410755/workspace/sysjm5/collection/18455651-2b6a49fa-3b4e-4eca-bbf5-a0cc639a0523?action=share&creator=18455651)
* [Postman environment (variabler)](https://www.postman.com/lunar-module-administrator-13410755/workspace/sysjm5/environment/18455651-76eb43f4-59c5-46c1-8152-1ae98cbe182a)

