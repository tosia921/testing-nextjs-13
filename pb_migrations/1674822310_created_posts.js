migrate((db) => {
  const collection = new Collection({
    "id": "kg70w6pq2p6vh53",
    "created": "2023-01-27 12:25:10.087Z",
    "updated": "2023-01-27 12:25:10.087Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "inxlxuu6",
        "name": "title",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kg70w6pq2p6vh53");

  return dao.deleteCollection(collection);
})
