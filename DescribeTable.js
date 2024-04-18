import { DynamoDBClient, DescribeTableCommand } from "@aws-sdk/client-dynamodb";

const ddbClient = new DynamoDBClient();

const params = { TableName: 'Employee' }; 
const run = async () => {
    try {
        const data = await ddbClient.send(new DescribeTableCommand(params));
        console.log('Success', data);
        console.log('Table Key Schema:', data.Table.KeySchema); // Changed the log message to describe the key schema
        return data;
    } catch (err) {
        console.log('Error', err);
    }
};

run(); 
