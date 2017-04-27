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
### Heroku Deployment
From [Heroku instructions](https://devcenter.heroku.com/articles/deploying-executable-jar-files) for deploying executable jars.
#### Using the Heroku Deploy CLI plugin
Install plugin and create app to Heroku.  
`heroku plugins:install heroku-cli-deploy`  
`heroku create sweet-tooth-boutique --no-remote`

Deploy jar file, see that it's running, and open website.  
`heroku deploy:jar app.jar`  
`heroku logs`  
`heroku open`

