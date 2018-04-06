// defining schema that describes what our mock data should look like

export const schema = {
  // Our data structure is an object
  "type": "object",
  // The object has a set of properties
  "properties": {
    // The first property is users, of type array
    "users": {
      "type": "array",
      // Want array to contain between 3 and 5 items
      "minItems": 3,
      "maxItems": 5,
      // define the structure of the objects that should sit inside the users array
      "items": {
        // Each item in the users array is an object
        "type": "object",
        // with the following properties
        "properties": {
          // a number property which is unique
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          // a string property for first name, use faker library to generate a fake first name
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          // a string property for last name, use fake library to generate a fake last name
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          // a string property for email, use fake library to generate a fake email
          "email": {
            "type": "string",
            "faker": "internet.email"
          }
        },
        // all 4 properties are required (i.e. they will always be populated)
        "required": ["id", "firstName", "lastName", "email"]
      }
    }
  },
  "required": ["users"]
};
