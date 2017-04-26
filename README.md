# Team Sugar Rush
## Sweet Tooth Boutique
Sweet Tooth Boutique is an online store that sells a selected assortment of confectionery.
### Creating UBER-JAR
#### 1. frontend
 * Run `ng build --prod`
#### 2. backend/src/main/resources/application.properties
 * Comment away the rows marked for removal for UBER-JAR
#### 3. backend/pom.xml
 * Remove mysql dependency (add block comment)
 * Add com.h2database dependency (remove block comment)
 * Update project dependencies
#### 4. backend
 * Run `mvn package` and UBER-JAR is created to backend/target
