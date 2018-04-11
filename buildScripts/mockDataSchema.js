// defining schema that describes what our mock data should look like
export const schema = {
  // Our data structure is an object
  "type": "object",
  // The object has a set of properties
  "properties": {
    "user": {
      "type": "object",
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
        // a string property for email, use fake library to generate a fake telephone
        "telephone": {
          "type": "string",
          "faker": "phone.phoneNumber"
        },
        // a string property for email, use fake library to generate a fake mobile
        "mobile": {
          "type": "string",
          "faker": "phone.phoneNumber"
        },
        // a string property for email, use fake library to generate a fake jobTitle
        "job": {
          "type": "string",
          "faker": "name.jobTitle"
        },
        // Randomely choose an office
        "office": {
          "type": "number",
          "minimum": 1,
          "maximum": 3
        }
      },
      // all 4 properties are required (i.e. they will always be populated)
      "required": ["id", "firstName", "lastName", "telephone", "job", "office"]
    }
  },
  "required": ["user"]
};

