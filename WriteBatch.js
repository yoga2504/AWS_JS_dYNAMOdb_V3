import { DynamoDBClient, BatchWriteItemCommand } from "@aws-sdk/client-dynamodb";

const ddbClient = new DynamoDBClient();

const params = {
    RequestItems: {
        Employee: [
            {
                PutRequest: {
                    Item: {
                        id: { N: "2" },
                        emp_name: { S: "tommy" }
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        id: { N: "4" },
                        emp_name: { S: "guess" }
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        id: { N: "5" },
                        emp_name: { S: "gucci" }
                    }
                }
            }
        ]
    }
};

const run = async () => {
    try {
        const data = await ddbClient.send(new BatchWriteItemCommand(params));
        console.log("Data is added", data);
        return data;
    } catch (err) {
        console.log(err);
    }
};

run(); 
