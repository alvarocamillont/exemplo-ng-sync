import { PoSyncSchema } from "@po-ui/ng-sync";

export const conferenceSchema: PoSyncSchema = {
  getUrlApi:
    "https://po-sample-api.herokuapp.com/conference/conference-api/api/v1/conferences",
  diffUrlApi:
    "https://po-sample-api.herokuapp.com/conference/conference-api/api/v1/conferences/diff",
  deletedField: "deleted",
  fields: ["id", "title", "location", "description"],
  idField: "id",
  name: "Conference",
  pageSize: 1,
};
