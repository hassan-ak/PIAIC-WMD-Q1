"use strict";
/*
    Chapter 9. Type Modifiers
    Type Assertions
*/
const rawData = `["grace", "frankie"]`;
// Type: any
JSON.parse(rawData);
// Type: string[]
JSON.parse(rawData);
// Type: [string, string]
JSON.parse(rawData);
// Type: ["grace", "frankie"]
JSON.parse(rawData);
/*
const rawData = `["grace", "frankie"]`;
// Type: any
JSON.parse(rawData);
// Type: string[]
JSON.parse(rawData);
// Type: [string, string]
JSON.parse(rawData);
// Type: ["grace", "frankie"]
JSON.parse(rawData);
*/
