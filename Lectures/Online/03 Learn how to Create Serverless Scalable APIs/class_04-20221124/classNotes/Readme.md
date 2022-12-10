# Class 04 - 2022/11/24

## Class Notes

### Presentation

- Database
  - Relational Databases (SQL)
  - Document Databases (No SQL)
  - Graph Databases (No SQL)
- SQL vs NO SQL
  - SQL databases are relational, NoSQL databases are non-relational.
  - SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
  - SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
  - SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
- Dynamodb
  - Low-level Document database
  - Serverless and Highly Scalable
  - High Availability and Durability
- Core Components of Dynamodb
  - Tables, Items & attributes
  - Primary Keys (Partition & Sort keys)
  - Secondary Indexes
  - Dynamodb Streams
- Dynamodb Queries
  - Data can be read using Dynamodb SDK/API provided by AWS
  - Data can also be fetched using partiQL - A query language inspired by SQL.
- Read/Write Capacity Modes in Dynamodb
  - On-Demand: With on-demand capacity mode, DynamoDB charges you for the data reads and writes your application performs on your tables. You do not need to specify how much read and write throughput you expect your application to perform because DynamoDB instantly accommodates your workloads as they ramp up or down.
  - Provisioned: With provisioned capacity mode, you specify the number of reads and writes per second that you expect your application to require. You can use auto scaling to automatically adjust your table’s capacity based on the specified utilization rate to ensure application performance while reducing costs.
