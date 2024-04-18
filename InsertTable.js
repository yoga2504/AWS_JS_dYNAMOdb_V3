import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const ddbClient = new DynamoDBClient();

const params = {
    TableName: 'Employee',
    Item: {
        id: { N: "2" },
        emp_name: { S: 'Bob' }
    }
}; 

const run = async () => {
    try {
        const data = await ddbClient.send(new PutItemCommand(params));
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
};

run(); 
