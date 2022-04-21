// @ts-check

const config = {
  endpoint: "https://iothubtest1cosmosdb2.documents.azure.com:443/",
  key: "BGoKkVXksyRlENbHHzf0LPHxBww5gDr2z5rA26s73rHLTGQcuKlUx68rbtt8fQ3P4NBu0tOm2ScgBKBaRCr1Fw==",
  databaseId: "Tasks",
  containerId: "Items",
  partitionKey: { kind: "Hash", paths: ["/category"] }
};

module.exports = config;
