import { Field, ObjectType } from 'type-graphql'
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Reply } from './Reply'

@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column({ type: 'text' })
  header!: string

  @Field()
  @Column({ type: 'text' })
  content!: string

  @Field()
  @Column({ type: 'text' })
  owner!: string

  @Field()
  @Column()
  postId!: number

  @Field()
  @Column({ type: 'text' })
  tag!: string

  @Field()
  @Column()
  replies?: Reply[]

  @Field(() => String)
  @CreateDateColumn()
  createdAt?: Date = new Date()

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt?: Date = new Date()
}
