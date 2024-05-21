# Cloudforge test task 
Requirements for the task -- https://cloudforge.notion.site/Take-Home-Screen-52af58a7b82e46fa92fe8975101fa539

# Setup 

## BE (cloudforge-services)

Steps: 
1. Clone the BE project -- https://github.com/Dunridge/cloudforge-services
2. Set up the environment variables: 

```
DB_CONN_STRING=mongodb+srv://...
DB_NAME=emails_db

EMAILS_COLLECTION_NAME=emails
RFQS_COLLECTION_NAME=rfqs
INVENTORY_COLLECTION_NAME=inventory
SENT_RFQS_COLLECTION_NAME=sent_rfqs

OPENAI_API_KEY=sk-proj-...

```
3. Create the collections in your MongoDB account and test the connection 
4. Run the application with `npm start` 

## FE (cloudforge-app)

Steps: 
1. Clonse the FE project -- https://github.com/Dunridge/cloudforge-app 
2. Run the project with `npm start` 

# Design

## FE 
Implemented the FE for the platform with routing to switch between different views of the application  

## BE 
Added a Node.js backend with a MongoDB database. Defined the endpoints for the application logic and separated files between controllers (for accessing the database), database (for coonnecting to the MongoDB collections), models (for the application models), routes (for defining the paths to the routes), services (for handling the data)

## ML
Added a ChatGPT gpt-3.5-turbo model on the BE to handle the incoming letters and turn them into RFQs