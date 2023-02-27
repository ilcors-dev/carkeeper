import uuid from "react-uuid";
import Realm from "realm";

export class ChatMessage extends Realm.Object {
	_id!: Realm.BSON.ObjectId;
	uuid!: string;
	senderUuid!: string;
	body!: string;
	type!: string;
	createdAt!: Date;

	static generate(type: string, body: string) {
		return {
			_id: new Realm.BSON.ObjectId(),
			uuid: uuid(),
			senderUuid: uuid(),
			body: body,
			type: type,
			createdAt: new Date(),
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
