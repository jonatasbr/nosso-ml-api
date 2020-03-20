import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { User } from './user.entity';

@EventSubscriber()
export class UsersSubscriber implements EntitySubscriberInterface<User> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return User;
  }

  async beforeInsert(event: InsertEvent<User>) {
    event.entity.createdAt = new Date();
    event.entity.updatedAt = new Date();
    event.entity.passwordHash = await bcrypt.hash(event.entity.password, 8);
  }

  async beforeUpdate(event: UpdateEvent<User>) {
    event.entity.updatedAt = new Date();
    event.entity.passwordHash = await bcrypt.hash(event.entity.password, 8);
  }
}
