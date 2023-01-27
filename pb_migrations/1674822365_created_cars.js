migrate((db) => {
  const collection = new Collection({
    "id": "5r4xovdmmnlwlif",
    "created": "2023-01-27 12:26:05.279Z",
    "updated": "2023-01-27 12:26:05.279Z",
    "name": "cars",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mjwicpg6",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5r4xovdmmnlwlif");

  return dao.deleteCollection(collection);
})
