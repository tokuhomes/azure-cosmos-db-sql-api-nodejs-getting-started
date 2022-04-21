// @ts-check

const config = {
  endpoint: "https://iothubtest1cosmos1.documents.azure.com:443/",
  key: "dKWT2m1Vz5eTzGj4E2tpg9UdiLmWFaRVxaqnkVWThCQm5GL0xbrsUQAbwGfcOYTSpY3LmzLDR7MaZaXanxRaKA==",
  databaseId: "Tasks",
  containerId: "Items",
  partitionKey: { kind: "Hash", paths: ["/category"] }
};

module.exports = config;
