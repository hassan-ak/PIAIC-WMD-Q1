# Create a simple API using AWS Console

- Login to AWS console
- Navigate to lambda
- Create new function

  - author from scratch
  - Function name
  - Runtime (NodeJs)
  - architecture
  - write code

    ```js
    exports.handler = async (event) => {
      console.log('Event => ', event);
      if (event.httpMethod === 'GET') {
        const response = {
          response: 200,
          bode: JSON.stringify('Hello from Get request'),
        };
        return response;
      }
      const response = {
        response: 200,
        bode: JSON.stringify('Hello from Lambda'),
      };
      return response;
    };
    ```

- Deploy
- Test to check response
- Moniter
  - View logs in cloudwatch to view logs
- Function overview
  - Add trigger
    - Select Api gateway as source
      - Create new API
      - Select API type
      - Select security
      - Add
  - Open given url in browser
- Our lambda function is an API now
