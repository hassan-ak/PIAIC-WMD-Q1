## Class 01 - 2022/11/03

### Class Notes

- APIs
  - API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the whether on your phone, you’re using an API.
- Serverless
  - Serverless is a cloud-native development model that allows developers to build and run applications without having to manage servers. There are still servers in serverless, but they are abstracted away from app development.
- Highly Scalable
  - API scalability refers to the ability to support concurrent requests without impact on performance. Apis built on cloud are nearly infinitely scalable
- Evolution of APIs
  - The advent of cloud computing revolutionized the concept of APIs.
    - No servers required
    - No management required
    - Autonomous monitoring
    - Easily replicable
    - Very cost effective - Pay as you go.
    - Fast & easy access to latest technologies
- Common use cases of APIs
  - Internal APIs:
    - Almost every dynamic application has internal APIs that enable the communication between front-end and back-end
  - External Third Party APIs:
    - Some applications may use third-party apis like Stripe. Companies like Stripe that offer their services as APIs are called API FIRST COMPANIES
  - WEB3 APIs:
    - These allow you to send and fetch data from blockchain in decentralized application.
  - IOT:
    - Communication between interconnected devices.
  - Websockets & Subscriptions:
    - For real-time communication
- API Economy & Panacloud API Portal
  - A marketplace for APIs that connects with API Developers with App developers.
  - Levels the playing ground for small companies to compete with giants.
  - Browse, compare and rate APIs.
  - Decentralized payments for subscribers (pay as you go model)
  - Ownership Economy
  - Each API acts as a DAO that allows the API developers to raise investment and manage APIs in a decentralized fashion.
  - Panacloud Portal allows investors to invest in API DAOs.
  - Panacloud Portal will act as a catalyst for the API Economy, giving rise to new API FIRST COMPANIES
- [GraphQL vs Rest APIs](https://hygraph.com/blog/graphql-vs-rest-apis)

  | GrphQL APi                                                                                            | Rest ApI                                                                            |
  | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
  | A query language for solving common problems when integrating APIs.                                   | An architectural style largely viewed as a conventional standard for designing APIs |
  | Deployed over HTTP using a single endpoint that provides the full capabilities of the exposed service | Deployed over a set of URLs where each of them exposes a single resource            |
  | Uses a client-driven architecture                                                                     | Uses a server-driven architecture                                                   |
  | Response output in JSON                                                                               | Response output usually in XML, JSON, and YAML                                      |
  | Offers [type](https://docs.aws.amazon.com/appsync/latest/devguide/scalars.html)-safety                | Doesn't offer type-safety                                                           |
  | Supported Methods: POST                                                                               | Supported Methods: GET, POST, PUT, DELETE and PATCH                                 |

- [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/home.html)

  - Allows you to define your infrastructure as code.

  ![App Stack](./AppStacks.png)

- L1 , L2 & L3 Constructs
  - L1 constructs are the low level constructs. Coding in L1 constructs can be a bit difficult & lengthy but it gives you the maximum room for customization. These are provided by AWS.
  - L2 constructs are built on top on L1 constructs. Coding in L2 constructs is much easier and you have to write less amount of code. These are also provided by AWS.
  - L3 constructs are custom constructs that can be made using L1, L2 or other L3 constructs . These are used to create complex reusable cloud components and to maintain and manage the code properly. You can create your own custom L3 constructs and you can also use L3 constructs provided by AWS.
