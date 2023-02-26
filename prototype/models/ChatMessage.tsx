import uuid from "react-uuid";
import Realm from "realm";

export class ChatMessage extends Realm.Object {
	_id!: Realm.BSON.ObjectId;
	senderUuid!: string;
	body!: string;
	type!: string;

	static generate(type: string) {
		return {
			_id: new Realm.BSON.ObjectId(),
			senderUuid: uuid(),
			body: "Questo è un viaggio",
			type: type,
		};
	}

	static schema: Realm.ObjectSchema = {
		name: "ChatMessage",
		primaryKey: "_id",
		properties: {
			_id: { type: "objectId", default: new Realm.BSON.ObjectId() },
			uuid: { type: "string", default: uuid() },
			senderUuid: { type: "string", default: uuid() },
			body: { type: "string" },
			type: { type: "string" },
			createdAt: { type: "date", default: new Date() },
			updatedAt: { type: "date", default: new Date() },
		},
	};
}
