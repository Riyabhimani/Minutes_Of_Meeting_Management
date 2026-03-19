
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model settings
 * 
 */
export type settings = $Result.DefaultSelection<Prisma.$settingsPayload>
/**
 * Model meetingmember
 * 
 */
export type meetingmember = $Result.DefaultSelection<Prisma.$meetingmemberPayload>
/**
 * Model meetings
 * 
 */
export type meetings = $Result.DefaultSelection<Prisma.$meetingsPayload>
/**
 * Model meetingtype
 * 
 */
export type meetingtype = $Result.DefaultSelection<Prisma.$meetingtypePayload>
/**
 * Model staff
 * 
 */
export type staff = $Result.DefaultSelection<Prisma.$staffPayload>
/**
 * Model tasks
 * 
 */
export type tasks = $Result.DefaultSelection<Prisma.$tasksPayload>
/**
 * Model users
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Settings
 * const settings = await prisma.settings.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Settings
   * const settings = await prisma.settings.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.settings`: Exposes CRUD operations for the **settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.settingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meetingmember`: Exposes CRUD operations for the **meetingmember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetingmembers
    * const meetingmembers = await prisma.meetingmember.findMany()
    * ```
    */
  get meetingmember(): Prisma.meetingmemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meetings`: Exposes CRUD operations for the **meetings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetings
    * const meetings = await prisma.meetings.findMany()
    * ```
    */
  get meetings(): Prisma.meetingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meetingtype`: Exposes CRUD operations for the **meetingtype** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetingtypes
    * const meetingtypes = await prisma.meetingtype.findMany()
    * ```
    */
  get meetingtype(): Prisma.meetingtypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.staffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tasks`: Exposes CRUD operations for the **tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.tasks.findMany()
    * ```
    */
  get tasks(): Prisma.tasksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    settings: 'settings',
    meetingmember: 'meetingmember',
    meetings: 'meetings',
    meetingtype: 'meetingtype',
    staff: 'staff',
    tasks: 'tasks',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "settings" | "meetingmember" | "meetings" | "meetingtype" | "staff" | "tasks" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      settings: {
        payload: Prisma.$settingsPayload<ExtArgs>
        fields: Prisma.settingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.settingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.settingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          findFirst: {
            args: Prisma.settingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.settingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          findMany: {
            args: Prisma.settingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>[]
          }
          create: {
            args: Prisma.settingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          createMany: {
            args: Prisma.settingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.settingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          update: {
            args: Prisma.settingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          deleteMany: {
            args: Prisma.settingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.settingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.settingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.settingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.settingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
      meetingmember: {
        payload: Prisma.$meetingmemberPayload<ExtArgs>
        fields: Prisma.meetingmemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.meetingmemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingmemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.meetingmemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingmemberPayload>
          }
          findFirst: {
            args: Prisma.meetingmemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingmemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.meetingmemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingmemberPayload>
          }
          findMany: {
            args: Prisma.meetingmemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingmemberPayload>[]
          }
          create: {
            args: Prisma.meetingmemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingmemberPayload>
          }
          createMany: {
            args: Prisma.meetingmemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.meetingmemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingmemberPayload>
          }
          update: {
            args: Prisma.meetingmemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingmemberPayload>
          }
          deleteMany: {
            args: Prisma.meetingmemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.meetingmemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.meetingmemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingmemberPayload>
          }
          aggregate: {
            args: Prisma.MeetingmemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeetingmember>
          }
          groupBy: {
            args: Prisma.meetingmemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingmemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.meetingmemberCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingmemberCountAggregateOutputType> | number
          }
        }
      }
      meetings: {
        payload: Prisma.$meetingsPayload<ExtArgs>
        fields: Prisma.meetingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.meetingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.meetingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingsPayload>
          }
          findFirst: {
            args: Prisma.meetingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.meetingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingsPayload>
          }
          findMany: {
            args: Prisma.meetingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingsPayload>[]
          }
          create: {
            args: Prisma.meetingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingsPayload>
          }
          createMany: {
            args: Prisma.meetingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.meetingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingsPayload>
          }
          update: {
            args: Prisma.meetingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingsPayload>
          }
          deleteMany: {
            args: Prisma.meetingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.meetingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.meetingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingsPayload>
          }
          aggregate: {
            args: Prisma.MeetingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeetings>
          }
          groupBy: {
            args: Prisma.meetingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.meetingsCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingsCountAggregateOutputType> | number
          }
        }
      }
      meetingtype: {
        payload: Prisma.$meetingtypePayload<ExtArgs>
        fields: Prisma.meetingtypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.meetingtypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingtypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.meetingtypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingtypePayload>
          }
          findFirst: {
            args: Prisma.meetingtypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingtypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.meetingtypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingtypePayload>
          }
          findMany: {
            args: Prisma.meetingtypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingtypePayload>[]
          }
          create: {
            args: Prisma.meetingtypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingtypePayload>
          }
          createMany: {
            args: Prisma.meetingtypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.meetingtypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingtypePayload>
          }
          update: {
            args: Prisma.meetingtypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingtypePayload>
          }
          deleteMany: {
            args: Prisma.meetingtypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.meetingtypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.meetingtypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingtypePayload>
          }
          aggregate: {
            args: Prisma.MeetingtypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeetingtype>
          }
          groupBy: {
            args: Prisma.meetingtypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingtypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.meetingtypeCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingtypeCountAggregateOutputType> | number
          }
        }
      }
      staff: {
        payload: Prisma.$staffPayload<ExtArgs>
        fields: Prisma.staffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.staffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.staffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          findFirst: {
            args: Prisma.staffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.staffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          findMany: {
            args: Prisma.staffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>[]
          }
          create: {
            args: Prisma.staffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          createMany: {
            args: Prisma.staffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.staffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          update: {
            args: Prisma.staffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          deleteMany: {
            args: Prisma.staffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.staffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.staffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.staffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.staffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      tasks: {
        payload: Prisma.$tasksPayload<ExtArgs>
        fields: Prisma.tasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findFirst: {
            args: Prisma.tasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findMany: {
            args: Prisma.tasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          create: {
            args: Prisma.tasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          createMany: {
            args: Prisma.tasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          update: {
            args: Prisma.tasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          deleteMany: {
            args: Prisma.tasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          aggregate: {
            args: Prisma.TasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTasks>
          }
          groupBy: {
            args: Prisma.tasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<TasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.tasksCountArgs<ExtArgs>
            result: $Utils.Optional<TasksCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    settings?: settingsOmit
    meetingmember?: meetingmemberOmit
    meetings?: meetingsOmit
    meetingtype?: meetingtypeOmit
    staff?: staffOmit
    tasks?: tasksOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MeetingsCountOutputType
   */

  export type MeetingsCountOutputType = {
    meetingmembers: number
    tasks: number
  }

  export type MeetingsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetingmembers?: boolean | MeetingsCountOutputTypeCountMeetingmembersArgs
    tasks?: boolean | MeetingsCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * MeetingsCountOutputType without action
   */
  export type MeetingsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingsCountOutputType
     */
    select?: MeetingsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeetingsCountOutputType without action
   */
  export type MeetingsCountOutputTypeCountMeetingmembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meetingmemberWhereInput
  }

  /**
   * MeetingsCountOutputType without action
   */
  export type MeetingsCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }


  /**
   * Count Type MeetingtypeCountOutputType
   */

  export type MeetingtypeCountOutputType = {
    meetings: number
  }

  export type MeetingtypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | MeetingtypeCountOutputTypeCountMeetingsArgs
  }

  // Custom InputTypes
  /**
   * MeetingtypeCountOutputType without action
   */
  export type MeetingtypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingtypeCountOutputType
     */
    select?: MeetingtypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeetingtypeCountOutputType without action
   */
  export type MeetingtypeCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meetingsWhereInput
  }


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    meetingmembers: number
    tasks: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetingmembers?: boolean | StaffCountOutputTypeCountMeetingmembersArgs
    tasks?: boolean | StaffCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountMeetingmembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meetingmemberWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }


  /**
   * Models
   */

  /**
   * Model settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    id: number | null
  }

  export type SettingsSumAggregateOutputType = {
    id: number | null
  }

  export type SettingsMinAggregateOutputType = {
    id: number | null
    settingKey: string | null
    settingValue: string | null
    description: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: number | null
    settingKey: string | null
    settingValue: string | null
    description: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    settingKey: number
    settingValue: number
    description: number
    Created: number
    Modified: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    id?: true
  }

  export type SettingsSumAggregateInputType = {
    id?: true
  }

  export type SettingsMinAggregateInputType = {
    id?: true
    settingKey?: true
    settingValue?: true
    description?: true
    Created?: true
    Modified?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    settingKey?: true
    settingValue?: true
    description?: true
    Created?: true
    Modified?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    settingKey?: true
    settingValue?: true
    description?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to aggregate.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type settingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: settingsWhereInput
    orderBy?: settingsOrderByWithAggregationInput | settingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: settingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: number
    settingKey: string
    settingValue: string
    description: string | null
    Created: Date | null
    Modified: Date | null
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends settingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type settingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    settingKey?: boolean
    settingValue?: boolean
    description?: boolean
    Created?: boolean
    Modified?: boolean
  }, ExtArgs["result"]["settings"]>



  export type settingsSelectScalar = {
    id?: boolean
    settingKey?: boolean
    settingValue?: boolean
    description?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type settingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "settingKey" | "settingValue" | "description" | "Created" | "Modified", ExtArgs["result"]["settings"]>

  export type $settingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      settingKey: string
      settingValue: string
      description: string | null
      Created: Date | null
      Modified: Date | null
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type settingsGetPayload<S extends boolean | null | undefined | settingsDefaultArgs> = $Result.GetResult<Prisma.$settingsPayload, S>

  type settingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<settingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface settingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['settings'], meta: { name: 'settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {settingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends settingsFindUniqueArgs>(args: SelectSubset<T, settingsFindUniqueArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {settingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends settingsFindUniqueOrThrowArgs>(args: SelectSubset<T, settingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends settingsFindFirstArgs>(args?: SelectSubset<T, settingsFindFirstArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends settingsFindFirstOrThrowArgs>(args?: SelectSubset<T, settingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends settingsFindManyArgs>(args?: SelectSubset<T, settingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {settingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends settingsCreateArgs>(args: SelectSubset<T, settingsCreateArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {settingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends settingsCreateManyArgs>(args?: SelectSubset<T, settingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Settings.
     * @param {settingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends settingsDeleteArgs>(args: SelectSubset<T, settingsDeleteArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {settingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends settingsUpdateArgs>(args: SelectSubset<T, settingsUpdateArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {settingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends settingsDeleteManyArgs>(args?: SelectSubset<T, settingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends settingsUpdateManyArgs>(args: SelectSubset<T, settingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Settings.
     * @param {settingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends settingsUpsertArgs>(args: SelectSubset<T, settingsUpsertArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends settingsCountArgs>(
      args?: Subset<T, settingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends settingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: settingsGroupByArgs['orderBy'] }
        : { orderBy?: settingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, settingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the settings model
   */
  readonly fields: settingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__settingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the settings model
   */
  interface settingsFieldRefs {
    readonly id: FieldRef<"settings", 'Int'>
    readonly settingKey: FieldRef<"settings", 'String'>
    readonly settingValue: FieldRef<"settings", 'String'>
    readonly description: FieldRef<"settings", 'String'>
    readonly Created: FieldRef<"settings", 'DateTime'>
    readonly Modified: FieldRef<"settings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * settings findUnique
   */
  export type settingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings findUniqueOrThrow
   */
  export type settingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings findFirst
   */
  export type settingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings findFirstOrThrow
   */
  export type settingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings findMany
   */
  export type settingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings create
   */
  export type settingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data needed to create a settings.
     */
    data: XOR<settingsCreateInput, settingsUncheckedCreateInput>
  }

  /**
   * settings createMany
   */
  export type settingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many settings.
     */
    data: settingsCreateManyInput | settingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * settings update
   */
  export type settingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data needed to update a settings.
     */
    data: XOR<settingsUpdateInput, settingsUncheckedUpdateInput>
    /**
     * Choose, which settings to update.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings updateMany
   */
  export type settingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update settings.
     */
    data: XOR<settingsUpdateManyMutationInput, settingsUncheckedUpdateManyInput>
    /**
     * Filter which settings to update
     */
    where?: settingsWhereInput
    /**
     * Limit how many settings to update.
     */
    limit?: number
  }

  /**
   * settings upsert
   */
  export type settingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The filter to search for the settings to update in case it exists.
     */
    where: settingsWhereUniqueInput
    /**
     * In case the settings found by the `where` argument doesn't exist, create a new settings with this data.
     */
    create: XOR<settingsCreateInput, settingsUncheckedCreateInput>
    /**
     * In case the settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<settingsUpdateInput, settingsUncheckedUpdateInput>
  }

  /**
   * settings delete
   */
  export type settingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter which settings to delete.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings deleteMany
   */
  export type settingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to delete
     */
    where?: settingsWhereInput
    /**
     * Limit how many settings to delete.
     */
    limit?: number
  }

  /**
   * settings without action
   */
  export type settingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
  }


  /**
   * Model meetingmember
   */

  export type AggregateMeetingmember = {
    _count: MeetingmemberCountAggregateOutputType | null
    _avg: MeetingmemberAvgAggregateOutputType | null
    _sum: MeetingmemberSumAggregateOutputType | null
    _min: MeetingmemberMinAggregateOutputType | null
    _max: MeetingmemberMaxAggregateOutputType | null
  }

  export type MeetingmemberAvgAggregateOutputType = {
    MeetingMemberID: number | null
    MeetingID: number | null
    StaffID: number | null
  }

  export type MeetingmemberSumAggregateOutputType = {
    MeetingMemberID: number | null
    MeetingID: number | null
    StaffID: number | null
  }

  export type MeetingmemberMinAggregateOutputType = {
    MeetingMemberID: number | null
    MeetingID: number | null
    StaffID: number | null
    IsPresent: boolean | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type MeetingmemberMaxAggregateOutputType = {
    MeetingMemberID: number | null
    MeetingID: number | null
    StaffID: number | null
    IsPresent: boolean | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type MeetingmemberCountAggregateOutputType = {
    MeetingMemberID: number
    MeetingID: number
    StaffID: number
    IsPresent: number
    Remarks: number
    Created: number
    Modified: number
    _all: number
  }


  export type MeetingmemberAvgAggregateInputType = {
    MeetingMemberID?: true
    MeetingID?: true
    StaffID?: true
  }

  export type MeetingmemberSumAggregateInputType = {
    MeetingMemberID?: true
    MeetingID?: true
    StaffID?: true
  }

  export type MeetingmemberMinAggregateInputType = {
    MeetingMemberID?: true
    MeetingID?: true
    StaffID?: true
    IsPresent?: true
    Remarks?: true
    Created?: true
    Modified?: true
  }

  export type MeetingmemberMaxAggregateInputType = {
    MeetingMemberID?: true
    MeetingID?: true
    StaffID?: true
    IsPresent?: true
    Remarks?: true
    Created?: true
    Modified?: true
  }

  export type MeetingmemberCountAggregateInputType = {
    MeetingMemberID?: true
    MeetingID?: true
    StaffID?: true
    IsPresent?: true
    Remarks?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type MeetingmemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meetingmember to aggregate.
     */
    where?: meetingmemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetingmembers to fetch.
     */
    orderBy?: meetingmemberOrderByWithRelationInput | meetingmemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: meetingmemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetingmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetingmembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned meetingmembers
    **/
    _count?: true | MeetingmemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeetingmemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeetingmemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingmemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingmemberMaxAggregateInputType
  }

  export type GetMeetingmemberAggregateType<T extends MeetingmemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMeetingmember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeetingmember[P]>
      : GetScalarType<T[P], AggregateMeetingmember[P]>
  }




  export type meetingmemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meetingmemberWhereInput
    orderBy?: meetingmemberOrderByWithAggregationInput | meetingmemberOrderByWithAggregationInput[]
    by: MeetingmemberScalarFieldEnum[] | MeetingmemberScalarFieldEnum
    having?: meetingmemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingmemberCountAggregateInputType | true
    _avg?: MeetingmemberAvgAggregateInputType
    _sum?: MeetingmemberSumAggregateInputType
    _min?: MeetingmemberMinAggregateInputType
    _max?: MeetingmemberMaxAggregateInputType
  }

  export type MeetingmemberGroupByOutputType = {
    MeetingMemberID: number
    MeetingID: number
    StaffID: number
    IsPresent: boolean | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
    _count: MeetingmemberCountAggregateOutputType | null
    _avg: MeetingmemberAvgAggregateOutputType | null
    _sum: MeetingmemberSumAggregateOutputType | null
    _min: MeetingmemberMinAggregateOutputType | null
    _max: MeetingmemberMaxAggregateOutputType | null
  }

  type GetMeetingmemberGroupByPayload<T extends meetingmemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingmemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingmemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingmemberGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingmemberGroupByOutputType[P]>
        }
      >
    >


  export type meetingmemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MeetingMemberID?: boolean
    MeetingID?: boolean
    StaffID?: boolean
    IsPresent?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
    meeting?: boolean | meetingsDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetingmember"]>



  export type meetingmemberSelectScalar = {
    MeetingMemberID?: boolean
    MeetingID?: boolean
    StaffID?: boolean
    IsPresent?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type meetingmemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MeetingMemberID" | "MeetingID" | "StaffID" | "IsPresent" | "Remarks" | "Created" | "Modified", ExtArgs["result"]["meetingmember"]>
  export type meetingmemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | meetingsDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }

  export type $meetingmemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "meetingmember"
    objects: {
      meeting: Prisma.$meetingsPayload<ExtArgs>
      staff: Prisma.$staffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      MeetingMemberID: number
      MeetingID: number
      StaffID: number
      IsPresent: boolean | null
      Remarks: string | null
      Created: Date | null
      Modified: Date | null
    }, ExtArgs["result"]["meetingmember"]>
    composites: {}
  }

  type meetingmemberGetPayload<S extends boolean | null | undefined | meetingmemberDefaultArgs> = $Result.GetResult<Prisma.$meetingmemberPayload, S>

  type meetingmemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<meetingmemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingmemberCountAggregateInputType | true
    }

  export interface meetingmemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['meetingmember'], meta: { name: 'meetingmember' } }
    /**
     * Find zero or one Meetingmember that matches the filter.
     * @param {meetingmemberFindUniqueArgs} args - Arguments to find a Meetingmember
     * @example
     * // Get one Meetingmember
     * const meetingmember = await prisma.meetingmember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends meetingmemberFindUniqueArgs>(args: SelectSubset<T, meetingmemberFindUniqueArgs<ExtArgs>>): Prisma__meetingmemberClient<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meetingmember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {meetingmemberFindUniqueOrThrowArgs} args - Arguments to find a Meetingmember
     * @example
     * // Get one Meetingmember
     * const meetingmember = await prisma.meetingmember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends meetingmemberFindUniqueOrThrowArgs>(args: SelectSubset<T, meetingmemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__meetingmemberClient<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meetingmember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingmemberFindFirstArgs} args - Arguments to find a Meetingmember
     * @example
     * // Get one Meetingmember
     * const meetingmember = await prisma.meetingmember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends meetingmemberFindFirstArgs>(args?: SelectSubset<T, meetingmemberFindFirstArgs<ExtArgs>>): Prisma__meetingmemberClient<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meetingmember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingmemberFindFirstOrThrowArgs} args - Arguments to find a Meetingmember
     * @example
     * // Get one Meetingmember
     * const meetingmember = await prisma.meetingmember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends meetingmemberFindFirstOrThrowArgs>(args?: SelectSubset<T, meetingmemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__meetingmemberClient<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meetingmembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingmemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetingmembers
     * const meetingmembers = await prisma.meetingmember.findMany()
     * 
     * // Get first 10 Meetingmembers
     * const meetingmembers = await prisma.meetingmember.findMany({ take: 10 })
     * 
     * // Only select the `MeetingMemberID`
     * const meetingmemberWithMeetingMemberIDOnly = await prisma.meetingmember.findMany({ select: { MeetingMemberID: true } })
     * 
     */
    findMany<T extends meetingmemberFindManyArgs>(args?: SelectSubset<T, meetingmemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meetingmember.
     * @param {meetingmemberCreateArgs} args - Arguments to create a Meetingmember.
     * @example
     * // Create one Meetingmember
     * const Meetingmember = await prisma.meetingmember.create({
     *   data: {
     *     // ... data to create a Meetingmember
     *   }
     * })
     * 
     */
    create<T extends meetingmemberCreateArgs>(args: SelectSubset<T, meetingmemberCreateArgs<ExtArgs>>): Prisma__meetingmemberClient<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meetingmembers.
     * @param {meetingmemberCreateManyArgs} args - Arguments to create many Meetingmembers.
     * @example
     * // Create many Meetingmembers
     * const meetingmember = await prisma.meetingmember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends meetingmemberCreateManyArgs>(args?: SelectSubset<T, meetingmemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Meetingmember.
     * @param {meetingmemberDeleteArgs} args - Arguments to delete one Meetingmember.
     * @example
     * // Delete one Meetingmember
     * const Meetingmember = await prisma.meetingmember.delete({
     *   where: {
     *     // ... filter to delete one Meetingmember
     *   }
     * })
     * 
     */
    delete<T extends meetingmemberDeleteArgs>(args: SelectSubset<T, meetingmemberDeleteArgs<ExtArgs>>): Prisma__meetingmemberClient<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meetingmember.
     * @param {meetingmemberUpdateArgs} args - Arguments to update one Meetingmember.
     * @example
     * // Update one Meetingmember
     * const meetingmember = await prisma.meetingmember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends meetingmemberUpdateArgs>(args: SelectSubset<T, meetingmemberUpdateArgs<ExtArgs>>): Prisma__meetingmemberClient<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meetingmembers.
     * @param {meetingmemberDeleteManyArgs} args - Arguments to filter Meetingmembers to delete.
     * @example
     * // Delete a few Meetingmembers
     * const { count } = await prisma.meetingmember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends meetingmemberDeleteManyArgs>(args?: SelectSubset<T, meetingmemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetingmembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingmemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetingmembers
     * const meetingmember = await prisma.meetingmember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends meetingmemberUpdateManyArgs>(args: SelectSubset<T, meetingmemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meetingmember.
     * @param {meetingmemberUpsertArgs} args - Arguments to update or create a Meetingmember.
     * @example
     * // Update or create a Meetingmember
     * const meetingmember = await prisma.meetingmember.upsert({
     *   create: {
     *     // ... data to create a Meetingmember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meetingmember we want to update
     *   }
     * })
     */
    upsert<T extends meetingmemberUpsertArgs>(args: SelectSubset<T, meetingmemberUpsertArgs<ExtArgs>>): Prisma__meetingmemberClient<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meetingmembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingmemberCountArgs} args - Arguments to filter Meetingmembers to count.
     * @example
     * // Count the number of Meetingmembers
     * const count = await prisma.meetingmember.count({
     *   where: {
     *     // ... the filter for the Meetingmembers we want to count
     *   }
     * })
    **/
    count<T extends meetingmemberCountArgs>(
      args?: Subset<T, meetingmemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingmemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meetingmember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingmemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingmemberAggregateArgs>(args: Subset<T, MeetingmemberAggregateArgs>): Prisma.PrismaPromise<GetMeetingmemberAggregateType<T>>

    /**
     * Group by Meetingmember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingmemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends meetingmemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: meetingmemberGroupByArgs['orderBy'] }
        : { orderBy?: meetingmemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, meetingmemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingmemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the meetingmember model
   */
  readonly fields: meetingmemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for meetingmember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__meetingmemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meeting<T extends meetingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, meetingsDefaultArgs<ExtArgs>>): Prisma__meetingsClient<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends staffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, staffDefaultArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the meetingmember model
   */
  interface meetingmemberFieldRefs {
    readonly MeetingMemberID: FieldRef<"meetingmember", 'Int'>
    readonly MeetingID: FieldRef<"meetingmember", 'Int'>
    readonly StaffID: FieldRef<"meetingmember", 'Int'>
    readonly IsPresent: FieldRef<"meetingmember", 'Boolean'>
    readonly Remarks: FieldRef<"meetingmember", 'String'>
    readonly Created: FieldRef<"meetingmember", 'DateTime'>
    readonly Modified: FieldRef<"meetingmember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * meetingmember findUnique
   */
  export type meetingmemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    /**
     * Filter, which meetingmember to fetch.
     */
    where: meetingmemberWhereUniqueInput
  }

  /**
   * meetingmember findUniqueOrThrow
   */
  export type meetingmemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    /**
     * Filter, which meetingmember to fetch.
     */
    where: meetingmemberWhereUniqueInput
  }

  /**
   * meetingmember findFirst
   */
  export type meetingmemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    /**
     * Filter, which meetingmember to fetch.
     */
    where?: meetingmemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetingmembers to fetch.
     */
    orderBy?: meetingmemberOrderByWithRelationInput | meetingmemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meetingmembers.
     */
    cursor?: meetingmemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetingmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetingmembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meetingmembers.
     */
    distinct?: MeetingmemberScalarFieldEnum | MeetingmemberScalarFieldEnum[]
  }

  /**
   * meetingmember findFirstOrThrow
   */
  export type meetingmemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    /**
     * Filter, which meetingmember to fetch.
     */
    where?: meetingmemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetingmembers to fetch.
     */
    orderBy?: meetingmemberOrderByWithRelationInput | meetingmemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meetingmembers.
     */
    cursor?: meetingmemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetingmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetingmembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meetingmembers.
     */
    distinct?: MeetingmemberScalarFieldEnum | MeetingmemberScalarFieldEnum[]
  }

  /**
   * meetingmember findMany
   */
  export type meetingmemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    /**
     * Filter, which meetingmembers to fetch.
     */
    where?: meetingmemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetingmembers to fetch.
     */
    orderBy?: meetingmemberOrderByWithRelationInput | meetingmemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing meetingmembers.
     */
    cursor?: meetingmemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetingmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetingmembers.
     */
    skip?: number
    distinct?: MeetingmemberScalarFieldEnum | MeetingmemberScalarFieldEnum[]
  }

  /**
   * meetingmember create
   */
  export type meetingmemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    /**
     * The data needed to create a meetingmember.
     */
    data: XOR<meetingmemberCreateInput, meetingmemberUncheckedCreateInput>
  }

  /**
   * meetingmember createMany
   */
  export type meetingmemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many meetingmembers.
     */
    data: meetingmemberCreateManyInput | meetingmemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meetingmember update
   */
  export type meetingmemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    /**
     * The data needed to update a meetingmember.
     */
    data: XOR<meetingmemberUpdateInput, meetingmemberUncheckedUpdateInput>
    /**
     * Choose, which meetingmember to update.
     */
    where: meetingmemberWhereUniqueInput
  }

  /**
   * meetingmember updateMany
   */
  export type meetingmemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update meetingmembers.
     */
    data: XOR<meetingmemberUpdateManyMutationInput, meetingmemberUncheckedUpdateManyInput>
    /**
     * Filter which meetingmembers to update
     */
    where?: meetingmemberWhereInput
    /**
     * Limit how many meetingmembers to update.
     */
    limit?: number
  }

  /**
   * meetingmember upsert
   */
  export type meetingmemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    /**
     * The filter to search for the meetingmember to update in case it exists.
     */
    where: meetingmemberWhereUniqueInput
    /**
     * In case the meetingmember found by the `where` argument doesn't exist, create a new meetingmember with this data.
     */
    create: XOR<meetingmemberCreateInput, meetingmemberUncheckedCreateInput>
    /**
     * In case the meetingmember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<meetingmemberUpdateInput, meetingmemberUncheckedUpdateInput>
  }

  /**
   * meetingmember delete
   */
  export type meetingmemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    /**
     * Filter which meetingmember to delete.
     */
    where: meetingmemberWhereUniqueInput
  }

  /**
   * meetingmember deleteMany
   */
  export type meetingmemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meetingmembers to delete
     */
    where?: meetingmemberWhereInput
    /**
     * Limit how many meetingmembers to delete.
     */
    limit?: number
  }

  /**
   * meetingmember without action
   */
  export type meetingmemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
  }


  /**
   * Model meetings
   */

  export type AggregateMeetings = {
    _count: MeetingsCountAggregateOutputType | null
    _avg: MeetingsAvgAggregateOutputType | null
    _sum: MeetingsSumAggregateOutputType | null
    _min: MeetingsMinAggregateOutputType | null
    _max: MeetingsMaxAggregateOutputType | null
  }

  export type MeetingsAvgAggregateOutputType = {
    MeetingID: number | null
    MeetingTypeID: number | null
  }

  export type MeetingsSumAggregateOutputType = {
    MeetingID: number | null
    MeetingTypeID: number | null
  }

  export type MeetingsMinAggregateOutputType = {
    MeetingID: number | null
    MeetingDate: Date | null
    MeetingTypeID: number | null
    MeetingDescription: string | null
    DocumentPath: string | null
    Created: Date | null
    Modified: Date | null
    IsCancelled: boolean | null
    CancellationDateTime: Date | null
    CancellationReason: string | null
  }

  export type MeetingsMaxAggregateOutputType = {
    MeetingID: number | null
    MeetingDate: Date | null
    MeetingTypeID: number | null
    MeetingDescription: string | null
    DocumentPath: string | null
    Created: Date | null
    Modified: Date | null
    IsCancelled: boolean | null
    CancellationDateTime: Date | null
    CancellationReason: string | null
  }

  export type MeetingsCountAggregateOutputType = {
    MeetingID: number
    MeetingDate: number
    MeetingTypeID: number
    MeetingDescription: number
    DocumentPath: number
    Created: number
    Modified: number
    IsCancelled: number
    CancellationDateTime: number
    CancellationReason: number
    _all: number
  }


  export type MeetingsAvgAggregateInputType = {
    MeetingID?: true
    MeetingTypeID?: true
  }

  export type MeetingsSumAggregateInputType = {
    MeetingID?: true
    MeetingTypeID?: true
  }

  export type MeetingsMinAggregateInputType = {
    MeetingID?: true
    MeetingDate?: true
    MeetingTypeID?: true
    MeetingDescription?: true
    DocumentPath?: true
    Created?: true
    Modified?: true
    IsCancelled?: true
    CancellationDateTime?: true
    CancellationReason?: true
  }

  export type MeetingsMaxAggregateInputType = {
    MeetingID?: true
    MeetingDate?: true
    MeetingTypeID?: true
    MeetingDescription?: true
    DocumentPath?: true
    Created?: true
    Modified?: true
    IsCancelled?: true
    CancellationDateTime?: true
    CancellationReason?: true
  }

  export type MeetingsCountAggregateInputType = {
    MeetingID?: true
    MeetingDate?: true
    MeetingTypeID?: true
    MeetingDescription?: true
    DocumentPath?: true
    Created?: true
    Modified?: true
    IsCancelled?: true
    CancellationDateTime?: true
    CancellationReason?: true
    _all?: true
  }

  export type MeetingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meetings to aggregate.
     */
    where?: meetingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetings to fetch.
     */
    orderBy?: meetingsOrderByWithRelationInput | meetingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: meetingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned meetings
    **/
    _count?: true | MeetingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeetingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeetingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingsMaxAggregateInputType
  }

  export type GetMeetingsAggregateType<T extends MeetingsAggregateArgs> = {
        [P in keyof T & keyof AggregateMeetings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeetings[P]>
      : GetScalarType<T[P], AggregateMeetings[P]>
  }




  export type meetingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meetingsWhereInput
    orderBy?: meetingsOrderByWithAggregationInput | meetingsOrderByWithAggregationInput[]
    by: MeetingsScalarFieldEnum[] | MeetingsScalarFieldEnum
    having?: meetingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingsCountAggregateInputType | true
    _avg?: MeetingsAvgAggregateInputType
    _sum?: MeetingsSumAggregateInputType
    _min?: MeetingsMinAggregateInputType
    _max?: MeetingsMaxAggregateInputType
  }

  export type MeetingsGroupByOutputType = {
    MeetingID: number
    MeetingDate: Date
    MeetingTypeID: number
    MeetingDescription: string | null
    DocumentPath: string | null
    Created: Date | null
    Modified: Date | null
    IsCancelled: boolean | null
    CancellationDateTime: Date | null
    CancellationReason: string | null
    _count: MeetingsCountAggregateOutputType | null
    _avg: MeetingsAvgAggregateOutputType | null
    _sum: MeetingsSumAggregateOutputType | null
    _min: MeetingsMinAggregateOutputType | null
    _max: MeetingsMaxAggregateOutputType | null
  }

  type GetMeetingsGroupByPayload<T extends meetingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingsGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingsGroupByOutputType[P]>
        }
      >
    >


  export type meetingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MeetingID?: boolean
    MeetingDate?: boolean
    MeetingTypeID?: boolean
    MeetingDescription?: boolean
    DocumentPath?: boolean
    Created?: boolean
    Modified?: boolean
    IsCancelled?: boolean
    CancellationDateTime?: boolean
    CancellationReason?: boolean
    meetingtype?: boolean | meetingtypeDefaultArgs<ExtArgs>
    meetingmembers?: boolean | meetings$meetingmembersArgs<ExtArgs>
    tasks?: boolean | meetings$tasksArgs<ExtArgs>
    _count?: boolean | MeetingsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetings"]>



  export type meetingsSelectScalar = {
    MeetingID?: boolean
    MeetingDate?: boolean
    MeetingTypeID?: boolean
    MeetingDescription?: boolean
    DocumentPath?: boolean
    Created?: boolean
    Modified?: boolean
    IsCancelled?: boolean
    CancellationDateTime?: boolean
    CancellationReason?: boolean
  }

  export type meetingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MeetingID" | "MeetingDate" | "MeetingTypeID" | "MeetingDescription" | "DocumentPath" | "Created" | "Modified" | "IsCancelled" | "CancellationDateTime" | "CancellationReason", ExtArgs["result"]["meetings"]>
  export type meetingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetingtype?: boolean | meetingtypeDefaultArgs<ExtArgs>
    meetingmembers?: boolean | meetings$meetingmembersArgs<ExtArgs>
    tasks?: boolean | meetings$tasksArgs<ExtArgs>
    _count?: boolean | MeetingsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $meetingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "meetings"
    objects: {
      meetingtype: Prisma.$meetingtypePayload<ExtArgs>
      meetingmembers: Prisma.$meetingmemberPayload<ExtArgs>[]
      tasks: Prisma.$tasksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MeetingID: number
      MeetingDate: Date
      MeetingTypeID: number
      MeetingDescription: string | null
      DocumentPath: string | null
      Created: Date | null
      Modified: Date | null
      IsCancelled: boolean | null
      CancellationDateTime: Date | null
      CancellationReason: string | null
    }, ExtArgs["result"]["meetings"]>
    composites: {}
  }

  type meetingsGetPayload<S extends boolean | null | undefined | meetingsDefaultArgs> = $Result.GetResult<Prisma.$meetingsPayload, S>

  type meetingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<meetingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingsCountAggregateInputType | true
    }

  export interface meetingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['meetings'], meta: { name: 'meetings' } }
    /**
     * Find zero or one Meetings that matches the filter.
     * @param {meetingsFindUniqueArgs} args - Arguments to find a Meetings
     * @example
     * // Get one Meetings
     * const meetings = await prisma.meetings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends meetingsFindUniqueArgs>(args: SelectSubset<T, meetingsFindUniqueArgs<ExtArgs>>): Prisma__meetingsClient<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meetings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {meetingsFindUniqueOrThrowArgs} args - Arguments to find a Meetings
     * @example
     * // Get one Meetings
     * const meetings = await prisma.meetings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends meetingsFindUniqueOrThrowArgs>(args: SelectSubset<T, meetingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__meetingsClient<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingsFindFirstArgs} args - Arguments to find a Meetings
     * @example
     * // Get one Meetings
     * const meetings = await prisma.meetings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends meetingsFindFirstArgs>(args?: SelectSubset<T, meetingsFindFirstArgs<ExtArgs>>): Prisma__meetingsClient<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meetings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingsFindFirstOrThrowArgs} args - Arguments to find a Meetings
     * @example
     * // Get one Meetings
     * const meetings = await prisma.meetings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends meetingsFindFirstOrThrowArgs>(args?: SelectSubset<T, meetingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__meetingsClient<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetings
     * const meetings = await prisma.meetings.findMany()
     * 
     * // Get first 10 Meetings
     * const meetings = await prisma.meetings.findMany({ take: 10 })
     * 
     * // Only select the `MeetingID`
     * const meetingsWithMeetingIDOnly = await prisma.meetings.findMany({ select: { MeetingID: true } })
     * 
     */
    findMany<T extends meetingsFindManyArgs>(args?: SelectSubset<T, meetingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meetings.
     * @param {meetingsCreateArgs} args - Arguments to create a Meetings.
     * @example
     * // Create one Meetings
     * const Meetings = await prisma.meetings.create({
     *   data: {
     *     // ... data to create a Meetings
     *   }
     * })
     * 
     */
    create<T extends meetingsCreateArgs>(args: SelectSubset<T, meetingsCreateArgs<ExtArgs>>): Prisma__meetingsClient<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meetings.
     * @param {meetingsCreateManyArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meetings = await prisma.meetings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends meetingsCreateManyArgs>(args?: SelectSubset<T, meetingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Meetings.
     * @param {meetingsDeleteArgs} args - Arguments to delete one Meetings.
     * @example
     * // Delete one Meetings
     * const Meetings = await prisma.meetings.delete({
     *   where: {
     *     // ... filter to delete one Meetings
     *   }
     * })
     * 
     */
    delete<T extends meetingsDeleteArgs>(args: SelectSubset<T, meetingsDeleteArgs<ExtArgs>>): Prisma__meetingsClient<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meetings.
     * @param {meetingsUpdateArgs} args - Arguments to update one Meetings.
     * @example
     * // Update one Meetings
     * const meetings = await prisma.meetings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends meetingsUpdateArgs>(args: SelectSubset<T, meetingsUpdateArgs<ExtArgs>>): Prisma__meetingsClient<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meetings.
     * @param {meetingsDeleteManyArgs} args - Arguments to filter Meetings to delete.
     * @example
     * // Delete a few Meetings
     * const { count } = await prisma.meetings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends meetingsDeleteManyArgs>(args?: SelectSubset<T, meetingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetings
     * const meetings = await prisma.meetings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends meetingsUpdateManyArgs>(args: SelectSubset<T, meetingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meetings.
     * @param {meetingsUpsertArgs} args - Arguments to update or create a Meetings.
     * @example
     * // Update or create a Meetings
     * const meetings = await prisma.meetings.upsert({
     *   create: {
     *     // ... data to create a Meetings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meetings we want to update
     *   }
     * })
     */
    upsert<T extends meetingsUpsertArgs>(args: SelectSubset<T, meetingsUpsertArgs<ExtArgs>>): Prisma__meetingsClient<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingsCountArgs} args - Arguments to filter Meetings to count.
     * @example
     * // Count the number of Meetings
     * const count = await prisma.meetings.count({
     *   where: {
     *     // ... the filter for the Meetings we want to count
     *   }
     * })
    **/
    count<T extends meetingsCountArgs>(
      args?: Subset<T, meetingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingsAggregateArgs>(args: Subset<T, MeetingsAggregateArgs>): Prisma.PrismaPromise<GetMeetingsAggregateType<T>>

    /**
     * Group by Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends meetingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: meetingsGroupByArgs['orderBy'] }
        : { orderBy?: meetingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, meetingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the meetings model
   */
  readonly fields: meetingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for meetings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__meetingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meetingtype<T extends meetingtypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, meetingtypeDefaultArgs<ExtArgs>>): Prisma__meetingtypeClient<$Result.GetResult<Prisma.$meetingtypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    meetingmembers<T extends meetings$meetingmembersArgs<ExtArgs> = {}>(args?: Subset<T, meetings$meetingmembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends meetings$tasksArgs<ExtArgs> = {}>(args?: Subset<T, meetings$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the meetings model
   */
  interface meetingsFieldRefs {
    readonly MeetingID: FieldRef<"meetings", 'Int'>
    readonly MeetingDate: FieldRef<"meetings", 'DateTime'>
    readonly MeetingTypeID: FieldRef<"meetings", 'Int'>
    readonly MeetingDescription: FieldRef<"meetings", 'String'>
    readonly DocumentPath: FieldRef<"meetings", 'String'>
    readonly Created: FieldRef<"meetings", 'DateTime'>
    readonly Modified: FieldRef<"meetings", 'DateTime'>
    readonly IsCancelled: FieldRef<"meetings", 'Boolean'>
    readonly CancellationDateTime: FieldRef<"meetings", 'DateTime'>
    readonly CancellationReason: FieldRef<"meetings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * meetings findUnique
   */
  export type meetingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    /**
     * Filter, which meetings to fetch.
     */
    where: meetingsWhereUniqueInput
  }

  /**
   * meetings findUniqueOrThrow
   */
  export type meetingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    /**
     * Filter, which meetings to fetch.
     */
    where: meetingsWhereUniqueInput
  }

  /**
   * meetings findFirst
   */
  export type meetingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    /**
     * Filter, which meetings to fetch.
     */
    where?: meetingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetings to fetch.
     */
    orderBy?: meetingsOrderByWithRelationInput | meetingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meetings.
     */
    cursor?: meetingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meetings.
     */
    distinct?: MeetingsScalarFieldEnum | MeetingsScalarFieldEnum[]
  }

  /**
   * meetings findFirstOrThrow
   */
  export type meetingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    /**
     * Filter, which meetings to fetch.
     */
    where?: meetingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetings to fetch.
     */
    orderBy?: meetingsOrderByWithRelationInput | meetingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meetings.
     */
    cursor?: meetingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meetings.
     */
    distinct?: MeetingsScalarFieldEnum | MeetingsScalarFieldEnum[]
  }

  /**
   * meetings findMany
   */
  export type meetingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    /**
     * Filter, which meetings to fetch.
     */
    where?: meetingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetings to fetch.
     */
    orderBy?: meetingsOrderByWithRelationInput | meetingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing meetings.
     */
    cursor?: meetingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetings.
     */
    skip?: number
    distinct?: MeetingsScalarFieldEnum | MeetingsScalarFieldEnum[]
  }

  /**
   * meetings create
   */
  export type meetingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    /**
     * The data needed to create a meetings.
     */
    data: XOR<meetingsCreateInput, meetingsUncheckedCreateInput>
  }

  /**
   * meetings createMany
   */
  export type meetingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many meetings.
     */
    data: meetingsCreateManyInput | meetingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meetings update
   */
  export type meetingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    /**
     * The data needed to update a meetings.
     */
    data: XOR<meetingsUpdateInput, meetingsUncheckedUpdateInput>
    /**
     * Choose, which meetings to update.
     */
    where: meetingsWhereUniqueInput
  }

  /**
   * meetings updateMany
   */
  export type meetingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update meetings.
     */
    data: XOR<meetingsUpdateManyMutationInput, meetingsUncheckedUpdateManyInput>
    /**
     * Filter which meetings to update
     */
    where?: meetingsWhereInput
    /**
     * Limit how many meetings to update.
     */
    limit?: number
  }

  /**
   * meetings upsert
   */
  export type meetingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    /**
     * The filter to search for the meetings to update in case it exists.
     */
    where: meetingsWhereUniqueInput
    /**
     * In case the meetings found by the `where` argument doesn't exist, create a new meetings with this data.
     */
    create: XOR<meetingsCreateInput, meetingsUncheckedCreateInput>
    /**
     * In case the meetings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<meetingsUpdateInput, meetingsUncheckedUpdateInput>
  }

  /**
   * meetings delete
   */
  export type meetingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    /**
     * Filter which meetings to delete.
     */
    where: meetingsWhereUniqueInput
  }

  /**
   * meetings deleteMany
   */
  export type meetingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meetings to delete
     */
    where?: meetingsWhereInput
    /**
     * Limit how many meetings to delete.
     */
    limit?: number
  }

  /**
   * meetings.meetingmembers
   */
  export type meetings$meetingmembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    where?: meetingmemberWhereInput
    orderBy?: meetingmemberOrderByWithRelationInput | meetingmemberOrderByWithRelationInput[]
    cursor?: meetingmemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingmemberScalarFieldEnum | MeetingmemberScalarFieldEnum[]
  }

  /**
   * meetings.tasks
   */
  export type meetings$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * meetings without action
   */
  export type meetingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
  }


  /**
   * Model meetingtype
   */

  export type AggregateMeetingtype = {
    _count: MeetingtypeCountAggregateOutputType | null
    _avg: MeetingtypeAvgAggregateOutputType | null
    _sum: MeetingtypeSumAggregateOutputType | null
    _min: MeetingtypeMinAggregateOutputType | null
    _max: MeetingtypeMaxAggregateOutputType | null
  }

  export type MeetingtypeAvgAggregateOutputType = {
    MeetingTypeID: number | null
  }

  export type MeetingtypeSumAggregateOutputType = {
    MeetingTypeID: number | null
  }

  export type MeetingtypeMinAggregateOutputType = {
    MeetingTypeID: number | null
    MeetingTypeName: string | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type MeetingtypeMaxAggregateOutputType = {
    MeetingTypeID: number | null
    MeetingTypeName: string | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type MeetingtypeCountAggregateOutputType = {
    MeetingTypeID: number
    MeetingTypeName: number
    Remarks: number
    Created: number
    Modified: number
    _all: number
  }


  export type MeetingtypeAvgAggregateInputType = {
    MeetingTypeID?: true
  }

  export type MeetingtypeSumAggregateInputType = {
    MeetingTypeID?: true
  }

  export type MeetingtypeMinAggregateInputType = {
    MeetingTypeID?: true
    MeetingTypeName?: true
    Remarks?: true
    Created?: true
    Modified?: true
  }

  export type MeetingtypeMaxAggregateInputType = {
    MeetingTypeID?: true
    MeetingTypeName?: true
    Remarks?: true
    Created?: true
    Modified?: true
  }

  export type MeetingtypeCountAggregateInputType = {
    MeetingTypeID?: true
    MeetingTypeName?: true
    Remarks?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type MeetingtypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meetingtype to aggregate.
     */
    where?: meetingtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetingtypes to fetch.
     */
    orderBy?: meetingtypeOrderByWithRelationInput | meetingtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: meetingtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetingtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetingtypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned meetingtypes
    **/
    _count?: true | MeetingtypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeetingtypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeetingtypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingtypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingtypeMaxAggregateInputType
  }

  export type GetMeetingtypeAggregateType<T extends MeetingtypeAggregateArgs> = {
        [P in keyof T & keyof AggregateMeetingtype]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeetingtype[P]>
      : GetScalarType<T[P], AggregateMeetingtype[P]>
  }




  export type meetingtypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meetingtypeWhereInput
    orderBy?: meetingtypeOrderByWithAggregationInput | meetingtypeOrderByWithAggregationInput[]
    by: MeetingtypeScalarFieldEnum[] | MeetingtypeScalarFieldEnum
    having?: meetingtypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingtypeCountAggregateInputType | true
    _avg?: MeetingtypeAvgAggregateInputType
    _sum?: MeetingtypeSumAggregateInputType
    _min?: MeetingtypeMinAggregateInputType
    _max?: MeetingtypeMaxAggregateInputType
  }

  export type MeetingtypeGroupByOutputType = {
    MeetingTypeID: number
    MeetingTypeName: string
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
    _count: MeetingtypeCountAggregateOutputType | null
    _avg: MeetingtypeAvgAggregateOutputType | null
    _sum: MeetingtypeSumAggregateOutputType | null
    _min: MeetingtypeMinAggregateOutputType | null
    _max: MeetingtypeMaxAggregateOutputType | null
  }

  type GetMeetingtypeGroupByPayload<T extends meetingtypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingtypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingtypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingtypeGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingtypeGroupByOutputType[P]>
        }
      >
    >


  export type meetingtypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MeetingTypeID?: boolean
    MeetingTypeName?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
    meetings?: boolean | meetingtype$meetingsArgs<ExtArgs>
    _count?: boolean | MeetingtypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetingtype"]>



  export type meetingtypeSelectScalar = {
    MeetingTypeID?: boolean
    MeetingTypeName?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type meetingtypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MeetingTypeID" | "MeetingTypeName" | "Remarks" | "Created" | "Modified", ExtArgs["result"]["meetingtype"]>
  export type meetingtypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | meetingtype$meetingsArgs<ExtArgs>
    _count?: boolean | MeetingtypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $meetingtypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "meetingtype"
    objects: {
      meetings: Prisma.$meetingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MeetingTypeID: number
      MeetingTypeName: string
      Remarks: string | null
      Created: Date | null
      Modified: Date | null
    }, ExtArgs["result"]["meetingtype"]>
    composites: {}
  }

  type meetingtypeGetPayload<S extends boolean | null | undefined | meetingtypeDefaultArgs> = $Result.GetResult<Prisma.$meetingtypePayload, S>

  type meetingtypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<meetingtypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingtypeCountAggregateInputType | true
    }

  export interface meetingtypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['meetingtype'], meta: { name: 'meetingtype' } }
    /**
     * Find zero or one Meetingtype that matches the filter.
     * @param {meetingtypeFindUniqueArgs} args - Arguments to find a Meetingtype
     * @example
     * // Get one Meetingtype
     * const meetingtype = await prisma.meetingtype.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends meetingtypeFindUniqueArgs>(args: SelectSubset<T, meetingtypeFindUniqueArgs<ExtArgs>>): Prisma__meetingtypeClient<$Result.GetResult<Prisma.$meetingtypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meetingtype that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {meetingtypeFindUniqueOrThrowArgs} args - Arguments to find a Meetingtype
     * @example
     * // Get one Meetingtype
     * const meetingtype = await prisma.meetingtype.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends meetingtypeFindUniqueOrThrowArgs>(args: SelectSubset<T, meetingtypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__meetingtypeClient<$Result.GetResult<Prisma.$meetingtypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meetingtype that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingtypeFindFirstArgs} args - Arguments to find a Meetingtype
     * @example
     * // Get one Meetingtype
     * const meetingtype = await prisma.meetingtype.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends meetingtypeFindFirstArgs>(args?: SelectSubset<T, meetingtypeFindFirstArgs<ExtArgs>>): Prisma__meetingtypeClient<$Result.GetResult<Prisma.$meetingtypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meetingtype that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingtypeFindFirstOrThrowArgs} args - Arguments to find a Meetingtype
     * @example
     * // Get one Meetingtype
     * const meetingtype = await prisma.meetingtype.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends meetingtypeFindFirstOrThrowArgs>(args?: SelectSubset<T, meetingtypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__meetingtypeClient<$Result.GetResult<Prisma.$meetingtypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meetingtypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingtypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetingtypes
     * const meetingtypes = await prisma.meetingtype.findMany()
     * 
     * // Get first 10 Meetingtypes
     * const meetingtypes = await prisma.meetingtype.findMany({ take: 10 })
     * 
     * // Only select the `MeetingTypeID`
     * const meetingtypeWithMeetingTypeIDOnly = await prisma.meetingtype.findMany({ select: { MeetingTypeID: true } })
     * 
     */
    findMany<T extends meetingtypeFindManyArgs>(args?: SelectSubset<T, meetingtypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meetingtypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meetingtype.
     * @param {meetingtypeCreateArgs} args - Arguments to create a Meetingtype.
     * @example
     * // Create one Meetingtype
     * const Meetingtype = await prisma.meetingtype.create({
     *   data: {
     *     // ... data to create a Meetingtype
     *   }
     * })
     * 
     */
    create<T extends meetingtypeCreateArgs>(args: SelectSubset<T, meetingtypeCreateArgs<ExtArgs>>): Prisma__meetingtypeClient<$Result.GetResult<Prisma.$meetingtypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meetingtypes.
     * @param {meetingtypeCreateManyArgs} args - Arguments to create many Meetingtypes.
     * @example
     * // Create many Meetingtypes
     * const meetingtype = await prisma.meetingtype.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends meetingtypeCreateManyArgs>(args?: SelectSubset<T, meetingtypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Meetingtype.
     * @param {meetingtypeDeleteArgs} args - Arguments to delete one Meetingtype.
     * @example
     * // Delete one Meetingtype
     * const Meetingtype = await prisma.meetingtype.delete({
     *   where: {
     *     // ... filter to delete one Meetingtype
     *   }
     * })
     * 
     */
    delete<T extends meetingtypeDeleteArgs>(args: SelectSubset<T, meetingtypeDeleteArgs<ExtArgs>>): Prisma__meetingtypeClient<$Result.GetResult<Prisma.$meetingtypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meetingtype.
     * @param {meetingtypeUpdateArgs} args - Arguments to update one Meetingtype.
     * @example
     * // Update one Meetingtype
     * const meetingtype = await prisma.meetingtype.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends meetingtypeUpdateArgs>(args: SelectSubset<T, meetingtypeUpdateArgs<ExtArgs>>): Prisma__meetingtypeClient<$Result.GetResult<Prisma.$meetingtypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meetingtypes.
     * @param {meetingtypeDeleteManyArgs} args - Arguments to filter Meetingtypes to delete.
     * @example
     * // Delete a few Meetingtypes
     * const { count } = await prisma.meetingtype.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends meetingtypeDeleteManyArgs>(args?: SelectSubset<T, meetingtypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetingtypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingtypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetingtypes
     * const meetingtype = await prisma.meetingtype.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends meetingtypeUpdateManyArgs>(args: SelectSubset<T, meetingtypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meetingtype.
     * @param {meetingtypeUpsertArgs} args - Arguments to update or create a Meetingtype.
     * @example
     * // Update or create a Meetingtype
     * const meetingtype = await prisma.meetingtype.upsert({
     *   create: {
     *     // ... data to create a Meetingtype
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meetingtype we want to update
     *   }
     * })
     */
    upsert<T extends meetingtypeUpsertArgs>(args: SelectSubset<T, meetingtypeUpsertArgs<ExtArgs>>): Prisma__meetingtypeClient<$Result.GetResult<Prisma.$meetingtypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meetingtypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingtypeCountArgs} args - Arguments to filter Meetingtypes to count.
     * @example
     * // Count the number of Meetingtypes
     * const count = await prisma.meetingtype.count({
     *   where: {
     *     // ... the filter for the Meetingtypes we want to count
     *   }
     * })
    **/
    count<T extends meetingtypeCountArgs>(
      args?: Subset<T, meetingtypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingtypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meetingtype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingtypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingtypeAggregateArgs>(args: Subset<T, MeetingtypeAggregateArgs>): Prisma.PrismaPromise<GetMeetingtypeAggregateType<T>>

    /**
     * Group by Meetingtype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingtypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends meetingtypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: meetingtypeGroupByArgs['orderBy'] }
        : { orderBy?: meetingtypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, meetingtypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingtypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the meetingtype model
   */
  readonly fields: meetingtypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for meetingtype.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__meetingtypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meetings<T extends meetingtype$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, meetingtype$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the meetingtype model
   */
  interface meetingtypeFieldRefs {
    readonly MeetingTypeID: FieldRef<"meetingtype", 'Int'>
    readonly MeetingTypeName: FieldRef<"meetingtype", 'String'>
    readonly Remarks: FieldRef<"meetingtype", 'String'>
    readonly Created: FieldRef<"meetingtype", 'DateTime'>
    readonly Modified: FieldRef<"meetingtype", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * meetingtype findUnique
   */
  export type meetingtypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingtype
     */
    select?: meetingtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingtype
     */
    omit?: meetingtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingtypeInclude<ExtArgs> | null
    /**
     * Filter, which meetingtype to fetch.
     */
    where: meetingtypeWhereUniqueInput
  }

  /**
   * meetingtype findUniqueOrThrow
   */
  export type meetingtypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingtype
     */
    select?: meetingtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingtype
     */
    omit?: meetingtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingtypeInclude<ExtArgs> | null
    /**
     * Filter, which meetingtype to fetch.
     */
    where: meetingtypeWhereUniqueInput
  }

  /**
   * meetingtype findFirst
   */
  export type meetingtypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingtype
     */
    select?: meetingtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingtype
     */
    omit?: meetingtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingtypeInclude<ExtArgs> | null
    /**
     * Filter, which meetingtype to fetch.
     */
    where?: meetingtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetingtypes to fetch.
     */
    orderBy?: meetingtypeOrderByWithRelationInput | meetingtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meetingtypes.
     */
    cursor?: meetingtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetingtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetingtypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meetingtypes.
     */
    distinct?: MeetingtypeScalarFieldEnum | MeetingtypeScalarFieldEnum[]
  }

  /**
   * meetingtype findFirstOrThrow
   */
  export type meetingtypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingtype
     */
    select?: meetingtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingtype
     */
    omit?: meetingtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingtypeInclude<ExtArgs> | null
    /**
     * Filter, which meetingtype to fetch.
     */
    where?: meetingtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetingtypes to fetch.
     */
    orderBy?: meetingtypeOrderByWithRelationInput | meetingtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meetingtypes.
     */
    cursor?: meetingtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetingtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetingtypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meetingtypes.
     */
    distinct?: MeetingtypeScalarFieldEnum | MeetingtypeScalarFieldEnum[]
  }

  /**
   * meetingtype findMany
   */
  export type meetingtypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingtype
     */
    select?: meetingtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingtype
     */
    omit?: meetingtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingtypeInclude<ExtArgs> | null
    /**
     * Filter, which meetingtypes to fetch.
     */
    where?: meetingtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetingtypes to fetch.
     */
    orderBy?: meetingtypeOrderByWithRelationInput | meetingtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing meetingtypes.
     */
    cursor?: meetingtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetingtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetingtypes.
     */
    skip?: number
    distinct?: MeetingtypeScalarFieldEnum | MeetingtypeScalarFieldEnum[]
  }

  /**
   * meetingtype create
   */
  export type meetingtypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingtype
     */
    select?: meetingtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingtype
     */
    omit?: meetingtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingtypeInclude<ExtArgs> | null
    /**
     * The data needed to create a meetingtype.
     */
    data: XOR<meetingtypeCreateInput, meetingtypeUncheckedCreateInput>
  }

  /**
   * meetingtype createMany
   */
  export type meetingtypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many meetingtypes.
     */
    data: meetingtypeCreateManyInput | meetingtypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meetingtype update
   */
  export type meetingtypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingtype
     */
    select?: meetingtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingtype
     */
    omit?: meetingtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingtypeInclude<ExtArgs> | null
    /**
     * The data needed to update a meetingtype.
     */
    data: XOR<meetingtypeUpdateInput, meetingtypeUncheckedUpdateInput>
    /**
     * Choose, which meetingtype to update.
     */
    where: meetingtypeWhereUniqueInput
  }

  /**
   * meetingtype updateMany
   */
  export type meetingtypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update meetingtypes.
     */
    data: XOR<meetingtypeUpdateManyMutationInput, meetingtypeUncheckedUpdateManyInput>
    /**
     * Filter which meetingtypes to update
     */
    where?: meetingtypeWhereInput
    /**
     * Limit how many meetingtypes to update.
     */
    limit?: number
  }

  /**
   * meetingtype upsert
   */
  export type meetingtypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingtype
     */
    select?: meetingtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingtype
     */
    omit?: meetingtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingtypeInclude<ExtArgs> | null
    /**
     * The filter to search for the meetingtype to update in case it exists.
     */
    where: meetingtypeWhereUniqueInput
    /**
     * In case the meetingtype found by the `where` argument doesn't exist, create a new meetingtype with this data.
     */
    create: XOR<meetingtypeCreateInput, meetingtypeUncheckedCreateInput>
    /**
     * In case the meetingtype was found with the provided `where` argument, update it with this data.
     */
    update: XOR<meetingtypeUpdateInput, meetingtypeUncheckedUpdateInput>
  }

  /**
   * meetingtype delete
   */
  export type meetingtypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingtype
     */
    select?: meetingtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingtype
     */
    omit?: meetingtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingtypeInclude<ExtArgs> | null
    /**
     * Filter which meetingtype to delete.
     */
    where: meetingtypeWhereUniqueInput
  }

  /**
   * meetingtype deleteMany
   */
  export type meetingtypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meetingtypes to delete
     */
    where?: meetingtypeWhereInput
    /**
     * Limit how many meetingtypes to delete.
     */
    limit?: number
  }

  /**
   * meetingtype.meetings
   */
  export type meetingtype$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    where?: meetingsWhereInput
    orderBy?: meetingsOrderByWithRelationInput | meetingsOrderByWithRelationInput[]
    cursor?: meetingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingsScalarFieldEnum | MeetingsScalarFieldEnum[]
  }

  /**
   * meetingtype without action
   */
  export type meetingtypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingtype
     */
    select?: meetingtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingtype
     */
    omit?: meetingtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingtypeInclude<ExtArgs> | null
  }


  /**
   * Model staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffAvgAggregateOutputType = {
    StaffID: number | null
  }

  export type StaffSumAggregateOutputType = {
    StaffID: number | null
  }

  export type StaffMinAggregateOutputType = {
    StaffID: number | null
    StaffName: string | null
    MobileNo: string | null
    EmailAddress: string | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
    Department: string | null
    Role: string | null
    Status: string | null
  }

  export type StaffMaxAggregateOutputType = {
    StaffID: number | null
    StaffName: string | null
    MobileNo: string | null
    EmailAddress: string | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
    Department: string | null
    Role: string | null
    Status: string | null
  }

  export type StaffCountAggregateOutputType = {
    StaffID: number
    StaffName: number
    MobileNo: number
    EmailAddress: number
    Remarks: number
    Created: number
    Modified: number
    Department: number
    Role: number
    Status: number
    _all: number
  }


  export type StaffAvgAggregateInputType = {
    StaffID?: true
  }

  export type StaffSumAggregateInputType = {
    StaffID?: true
  }

  export type StaffMinAggregateInputType = {
    StaffID?: true
    StaffName?: true
    MobileNo?: true
    EmailAddress?: true
    Remarks?: true
    Created?: true
    Modified?: true
    Department?: true
    Role?: true
    Status?: true
  }

  export type StaffMaxAggregateInputType = {
    StaffID?: true
    StaffName?: true
    MobileNo?: true
    EmailAddress?: true
    Remarks?: true
    Created?: true
    Modified?: true
    Department?: true
    Role?: true
    Status?: true
  }

  export type StaffCountAggregateInputType = {
    StaffID?: true
    StaffName?: true
    MobileNo?: true
    EmailAddress?: true
    Remarks?: true
    Created?: true
    Modified?: true
    Department?: true
    Role?: true
    Status?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff to aggregate.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type staffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staffWhereInput
    orderBy?: staffOrderByWithAggregationInput | staffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: staffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _avg?: StaffAvgAggregateInputType
    _sum?: StaffSumAggregateInputType
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    StaffID: number
    StaffName: string
    MobileNo: string | null
    EmailAddress: string | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
    Department: string | null
    Role: string | null
    Status: string | null
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends staffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type staffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    StaffID?: boolean
    StaffName?: boolean
    MobileNo?: boolean
    EmailAddress?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
    Department?: boolean
    Role?: boolean
    Status?: boolean
    meetingmembers?: boolean | staff$meetingmembersArgs<ExtArgs>
    tasks?: boolean | staff$tasksArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>



  export type staffSelectScalar = {
    StaffID?: boolean
    StaffName?: boolean
    MobileNo?: boolean
    EmailAddress?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
    Department?: boolean
    Role?: boolean
    Status?: boolean
  }

  export type staffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"StaffID" | "StaffName" | "MobileNo" | "EmailAddress" | "Remarks" | "Created" | "Modified" | "Department" | "Role" | "Status", ExtArgs["result"]["staff"]>
  export type staffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetingmembers?: boolean | staff$meetingmembersArgs<ExtArgs>
    tasks?: boolean | staff$tasksArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $staffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "staff"
    objects: {
      meetingmembers: Prisma.$meetingmemberPayload<ExtArgs>[]
      tasks: Prisma.$tasksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      StaffID: number
      StaffName: string
      MobileNo: string | null
      EmailAddress: string | null
      Remarks: string | null
      Created: Date | null
      Modified: Date | null
      Department: string | null
      Role: string | null
      Status: string | null
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type staffGetPayload<S extends boolean | null | undefined | staffDefaultArgs> = $Result.GetResult<Prisma.$staffPayload, S>

  type staffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<staffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface staffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['staff'], meta: { name: 'staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {staffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends staffFindUniqueArgs>(args: SelectSubset<T, staffFindUniqueArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {staffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends staffFindUniqueOrThrowArgs>(args: SelectSubset<T, staffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends staffFindFirstArgs>(args?: SelectSubset<T, staffFindFirstArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends staffFindFirstOrThrowArgs>(args?: SelectSubset<T, staffFindFirstOrThrowArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `StaffID`
     * const staffWithStaffIDOnly = await prisma.staff.findMany({ select: { StaffID: true } })
     * 
     */
    findMany<T extends staffFindManyArgs>(args?: SelectSubset<T, staffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {staffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends staffCreateArgs>(args: SelectSubset<T, staffCreateArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {staffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends staffCreateManyArgs>(args?: SelectSubset<T, staffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Staff.
     * @param {staffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends staffDeleteArgs>(args: SelectSubset<T, staffDeleteArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {staffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends staffUpdateArgs>(args: SelectSubset<T, staffUpdateArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {staffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends staffDeleteManyArgs>(args?: SelectSubset<T, staffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends staffUpdateManyArgs>(args: SelectSubset<T, staffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Staff.
     * @param {staffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends staffUpsertArgs>(args: SelectSubset<T, staffUpsertArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends staffCountArgs>(
      args?: Subset<T, staffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends staffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: staffGroupByArgs['orderBy'] }
        : { orderBy?: staffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, staffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the staff model
   */
  readonly fields: staffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__staffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meetingmembers<T extends staff$meetingmembersArgs<ExtArgs> = {}>(args?: Subset<T, staff$meetingmembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends staff$tasksArgs<ExtArgs> = {}>(args?: Subset<T, staff$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the staff model
   */
  interface staffFieldRefs {
    readonly StaffID: FieldRef<"staff", 'Int'>
    readonly StaffName: FieldRef<"staff", 'String'>
    readonly MobileNo: FieldRef<"staff", 'String'>
    readonly EmailAddress: FieldRef<"staff", 'String'>
    readonly Remarks: FieldRef<"staff", 'String'>
    readonly Created: FieldRef<"staff", 'DateTime'>
    readonly Modified: FieldRef<"staff", 'DateTime'>
    readonly Department: FieldRef<"staff", 'String'>
    readonly Role: FieldRef<"staff", 'String'>
    readonly Status: FieldRef<"staff", 'String'>
  }
    

  // Custom InputTypes
  /**
   * staff findUnique
   */
  export type staffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff findUniqueOrThrow
   */
  export type staffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff findFirst
   */
  export type staffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff findFirstOrThrow
   */
  export type staffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff findMany
   */
  export type staffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff create
   */
  export type staffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The data needed to create a staff.
     */
    data: XOR<staffCreateInput, staffUncheckedCreateInput>
  }

  /**
   * staff createMany
   */
  export type staffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many staff.
     */
    data: staffCreateManyInput | staffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * staff update
   */
  export type staffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The data needed to update a staff.
     */
    data: XOR<staffUpdateInput, staffUncheckedUpdateInput>
    /**
     * Choose, which staff to update.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff updateMany
   */
  export type staffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update staff.
     */
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyInput>
    /**
     * Filter which staff to update
     */
    where?: staffWhereInput
    /**
     * Limit how many staff to update.
     */
    limit?: number
  }

  /**
   * staff upsert
   */
  export type staffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The filter to search for the staff to update in case it exists.
     */
    where: staffWhereUniqueInput
    /**
     * In case the staff found by the `where` argument doesn't exist, create a new staff with this data.
     */
    create: XOR<staffCreateInput, staffUncheckedCreateInput>
    /**
     * In case the staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<staffUpdateInput, staffUncheckedUpdateInput>
  }

  /**
   * staff delete
   */
  export type staffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter which staff to delete.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff deleteMany
   */
  export type staffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff to delete
     */
    where?: staffWhereInput
    /**
     * Limit how many staff to delete.
     */
    limit?: number
  }

  /**
   * staff.meetingmembers
   */
  export type staff$meetingmembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    where?: meetingmemberWhereInput
    orderBy?: meetingmemberOrderByWithRelationInput | meetingmemberOrderByWithRelationInput[]
    cursor?: meetingmemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingmemberScalarFieldEnum | MeetingmemberScalarFieldEnum[]
  }

  /**
   * staff.tasks
   */
  export type staff$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * staff without action
   */
  export type staffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
  }


  /**
   * Model tasks
   */

  export type AggregateTasks = {
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  export type TasksAvgAggregateOutputType = {
    TaskID: number | null
    StaffID: number | null
    MeetingID: number | null
  }

  export type TasksSumAggregateOutputType = {
    TaskID: number | null
    StaffID: number | null
    MeetingID: number | null
  }

  export type TasksMinAggregateOutputType = {
    TaskID: number | null
    TaskDescription: string | null
    AssignedBy: string | null
    Deadline: Date | null
    Status: string | null
    StaffID: number | null
    MeetingID: number | null
    Created: Date | null
    Modified: Date | null
  }

  export type TasksMaxAggregateOutputType = {
    TaskID: number | null
    TaskDescription: string | null
    AssignedBy: string | null
    Deadline: Date | null
    Status: string | null
    StaffID: number | null
    MeetingID: number | null
    Created: Date | null
    Modified: Date | null
  }

  export type TasksCountAggregateOutputType = {
    TaskID: number
    TaskDescription: number
    AssignedBy: number
    Deadline: number
    Status: number
    StaffID: number
    MeetingID: number
    Created: number
    Modified: number
    _all: number
  }


  export type TasksAvgAggregateInputType = {
    TaskID?: true
    StaffID?: true
    MeetingID?: true
  }

  export type TasksSumAggregateInputType = {
    TaskID?: true
    StaffID?: true
    MeetingID?: true
  }

  export type TasksMinAggregateInputType = {
    TaskID?: true
    TaskDescription?: true
    AssignedBy?: true
    Deadline?: true
    Status?: true
    StaffID?: true
    MeetingID?: true
    Created?: true
    Modified?: true
  }

  export type TasksMaxAggregateInputType = {
    TaskID?: true
    TaskDescription?: true
    AssignedBy?: true
    Deadline?: true
    Status?: true
    StaffID?: true
    MeetingID?: true
    Created?: true
    Modified?: true
  }

  export type TasksCountAggregateInputType = {
    TaskID?: true
    TaskDescription?: true
    AssignedBy?: true
    Deadline?: true
    Status?: true
    StaffID?: true
    MeetingID?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type TasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to aggregate.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TasksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TasksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasksMaxAggregateInputType
  }

  export type GetTasksAggregateType<T extends TasksAggregateArgs> = {
        [P in keyof T & keyof AggregateTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasks[P]>
      : GetScalarType<T[P], AggregateTasks[P]>
  }




  export type tasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithAggregationInput | tasksOrderByWithAggregationInput[]
    by: TasksScalarFieldEnum[] | TasksScalarFieldEnum
    having?: tasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasksCountAggregateInputType | true
    _avg?: TasksAvgAggregateInputType
    _sum?: TasksSumAggregateInputType
    _min?: TasksMinAggregateInputType
    _max?: TasksMaxAggregateInputType
  }

  export type TasksGroupByOutputType = {
    TaskID: number
    TaskDescription: string
    AssignedBy: string | null
    Deadline: Date | null
    Status: string | null
    StaffID: number
    MeetingID: number | null
    Created: Date | null
    Modified: Date | null
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  type GetTasksGroupByPayload<T extends tasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasksGroupByOutputType[P]>
            : GetScalarType<T[P], TasksGroupByOutputType[P]>
        }
      >
    >


  export type tasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TaskID?: boolean
    TaskDescription?: boolean
    AssignedBy?: boolean
    Deadline?: boolean
    Status?: boolean
    StaffID?: boolean
    MeetingID?: boolean
    Created?: boolean
    Modified?: boolean
    meeting?: boolean | tasks$meetingArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>



  export type tasksSelectScalar = {
    TaskID?: boolean
    TaskDescription?: boolean
    AssignedBy?: boolean
    Deadline?: boolean
    Status?: boolean
    StaffID?: boolean
    MeetingID?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type tasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"TaskID" | "TaskDescription" | "AssignedBy" | "Deadline" | "Status" | "StaffID" | "MeetingID" | "Created" | "Modified", ExtArgs["result"]["tasks"]>
  export type tasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | tasks$meetingArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }

  export type $tasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tasks"
    objects: {
      meeting: Prisma.$meetingsPayload<ExtArgs> | null
      staff: Prisma.$staffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      TaskID: number
      TaskDescription: string
      AssignedBy: string | null
      Deadline: Date | null
      Status: string | null
      StaffID: number
      MeetingID: number | null
      Created: Date | null
      Modified: Date | null
    }, ExtArgs["result"]["tasks"]>
    composites: {}
  }

  type tasksGetPayload<S extends boolean | null | undefined | tasksDefaultArgs> = $Result.GetResult<Prisma.$tasksPayload, S>

  type tasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TasksCountAggregateInputType | true
    }

  export interface tasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tasks'], meta: { name: 'tasks' } }
    /**
     * Find zero or one Tasks that matches the filter.
     * @param {tasksFindUniqueArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tasksFindUniqueArgs>(args: SelectSubset<T, tasksFindUniqueArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tasksFindUniqueOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tasksFindUniqueOrThrowArgs>(args: SelectSubset<T, tasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tasksFindFirstArgs>(args?: SelectSubset<T, tasksFindFirstArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tasksFindFirstOrThrowArgs>(args?: SelectSubset<T, tasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.tasks.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.tasks.findMany({ take: 10 })
     * 
     * // Only select the `TaskID`
     * const tasksWithTaskIDOnly = await prisma.tasks.findMany({ select: { TaskID: true } })
     * 
     */
    findMany<T extends tasksFindManyArgs>(args?: SelectSubset<T, tasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tasks.
     * @param {tasksCreateArgs} args - Arguments to create a Tasks.
     * @example
     * // Create one Tasks
     * const Tasks = await prisma.tasks.create({
     *   data: {
     *     // ... data to create a Tasks
     *   }
     * })
     * 
     */
    create<T extends tasksCreateArgs>(args: SelectSubset<T, tasksCreateArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {tasksCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tasksCreateManyArgs>(args?: SelectSubset<T, tasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tasks.
     * @param {tasksDeleteArgs} args - Arguments to delete one Tasks.
     * @example
     * // Delete one Tasks
     * const Tasks = await prisma.tasks.delete({
     *   where: {
     *     // ... filter to delete one Tasks
     *   }
     * })
     * 
     */
    delete<T extends tasksDeleteArgs>(args: SelectSubset<T, tasksDeleteArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tasks.
     * @param {tasksUpdateArgs} args - Arguments to update one Tasks.
     * @example
     * // Update one Tasks
     * const tasks = await prisma.tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tasksUpdateArgs>(args: SelectSubset<T, tasksUpdateArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {tasksDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tasksDeleteManyArgs>(args?: SelectSubset<T, tasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tasksUpdateManyArgs>(args: SelectSubset<T, tasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tasks.
     * @param {tasksUpsertArgs} args - Arguments to update or create a Tasks.
     * @example
     * // Update or create a Tasks
     * const tasks = await prisma.tasks.upsert({
     *   create: {
     *     // ... data to create a Tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tasks we want to update
     *   }
     * })
     */
    upsert<T extends tasksUpsertArgs>(args: SelectSubset<T, tasksUpsertArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.tasks.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends tasksCountArgs>(
      args?: Subset<T, tasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TasksAggregateArgs>(args: Subset<T, TasksAggregateArgs>): Prisma.PrismaPromise<GetTasksAggregateType<T>>

    /**
     * Group by Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tasksGroupByArgs['orderBy'] }
        : { orderBy?: tasksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tasks model
   */
  readonly fields: tasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meeting<T extends tasks$meetingArgs<ExtArgs> = {}>(args?: Subset<T, tasks$meetingArgs<ExtArgs>>): Prisma__meetingsClient<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    staff<T extends staffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, staffDefaultArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tasks model
   */
  interface tasksFieldRefs {
    readonly TaskID: FieldRef<"tasks", 'Int'>
    readonly TaskDescription: FieldRef<"tasks", 'String'>
    readonly AssignedBy: FieldRef<"tasks", 'String'>
    readonly Deadline: FieldRef<"tasks", 'DateTime'>
    readonly Status: FieldRef<"tasks", 'String'>
    readonly StaffID: FieldRef<"tasks", 'Int'>
    readonly MeetingID: FieldRef<"tasks", 'Int'>
    readonly Created: FieldRef<"tasks", 'DateTime'>
    readonly Modified: FieldRef<"tasks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tasks findUnique
   */
  export type tasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks findUniqueOrThrow
   */
  export type tasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks findFirst
   */
  export type tasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks findFirstOrThrow
   */
  export type tasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks findMany
   */
  export type tasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks create
   */
  export type tasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to create a tasks.
     */
    data: XOR<tasksCreateInput, tasksUncheckedCreateInput>
  }

  /**
   * tasks createMany
   */
  export type tasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: tasksCreateManyInput | tasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tasks update
   */
  export type tasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to update a tasks.
     */
    data: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
    /**
     * Choose, which tasks to update.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks updateMany
   */
  export type tasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
  }

  /**
   * tasks upsert
   */
  export type tasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The filter to search for the tasks to update in case it exists.
     */
    where: tasksWhereUniqueInput
    /**
     * In case the tasks found by the `where` argument doesn't exist, create a new tasks with this data.
     */
    create: XOR<tasksCreateInput, tasksUncheckedCreateInput>
    /**
     * In case the tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
  }

  /**
   * tasks delete
   */
  export type tasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter which tasks to delete.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks deleteMany
   */
  export type tasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to delete.
     */
    limit?: number
  }

  /**
   * tasks.meeting
   */
  export type tasks$meetingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    where?: meetingsWhereInput
  }

  /**
   * tasks without action
   */
  export type tasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    name: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    name: string | null
    email: string | null
    password: string | null
    role: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    user_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "name" | "email" | "password" | "role", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      name: string | null
      email: string | null
      password: string | null
      role: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    settingKey: 'settingKey',
    settingValue: 'settingValue',
    description: 'description',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const MeetingmemberScalarFieldEnum: {
    MeetingMemberID: 'MeetingMemberID',
    MeetingID: 'MeetingID',
    StaffID: 'StaffID',
    IsPresent: 'IsPresent',
    Remarks: 'Remarks',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type MeetingmemberScalarFieldEnum = (typeof MeetingmemberScalarFieldEnum)[keyof typeof MeetingmemberScalarFieldEnum]


  export const MeetingsScalarFieldEnum: {
    MeetingID: 'MeetingID',
    MeetingDate: 'MeetingDate',
    MeetingTypeID: 'MeetingTypeID',
    MeetingDescription: 'MeetingDescription',
    DocumentPath: 'DocumentPath',
    Created: 'Created',
    Modified: 'Modified',
    IsCancelled: 'IsCancelled',
    CancellationDateTime: 'CancellationDateTime',
    CancellationReason: 'CancellationReason'
  };

  export type MeetingsScalarFieldEnum = (typeof MeetingsScalarFieldEnum)[keyof typeof MeetingsScalarFieldEnum]


  export const MeetingtypeScalarFieldEnum: {
    MeetingTypeID: 'MeetingTypeID',
    MeetingTypeName: 'MeetingTypeName',
    Remarks: 'Remarks',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type MeetingtypeScalarFieldEnum = (typeof MeetingtypeScalarFieldEnum)[keyof typeof MeetingtypeScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    StaffID: 'StaffID',
    StaffName: 'StaffName',
    MobileNo: 'MobileNo',
    EmailAddress: 'EmailAddress',
    Remarks: 'Remarks',
    Created: 'Created',
    Modified: 'Modified',
    Department: 'Department',
    Role: 'Role',
    Status: 'Status'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const TasksScalarFieldEnum: {
    TaskID: 'TaskID',
    TaskDescription: 'TaskDescription',
    AssignedBy: 'AssignedBy',
    Deadline: 'Deadline',
    Status: 'Status',
    StaffID: 'StaffID',
    MeetingID: 'MeetingID',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type TasksScalarFieldEnum = (typeof TasksScalarFieldEnum)[keyof typeof TasksScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const settingsOrderByRelevanceFieldEnum: {
    settingKey: 'settingKey',
    settingValue: 'settingValue',
    description: 'description'
  };

  export type settingsOrderByRelevanceFieldEnum = (typeof settingsOrderByRelevanceFieldEnum)[keyof typeof settingsOrderByRelevanceFieldEnum]


  export const meetingmemberOrderByRelevanceFieldEnum: {
    Remarks: 'Remarks'
  };

  export type meetingmemberOrderByRelevanceFieldEnum = (typeof meetingmemberOrderByRelevanceFieldEnum)[keyof typeof meetingmemberOrderByRelevanceFieldEnum]


  export const meetingsOrderByRelevanceFieldEnum: {
    MeetingDescription: 'MeetingDescription',
    DocumentPath: 'DocumentPath',
    CancellationReason: 'CancellationReason'
  };

  export type meetingsOrderByRelevanceFieldEnum = (typeof meetingsOrderByRelevanceFieldEnum)[keyof typeof meetingsOrderByRelevanceFieldEnum]


  export const meetingtypeOrderByRelevanceFieldEnum: {
    MeetingTypeName: 'MeetingTypeName',
    Remarks: 'Remarks'
  };

  export type meetingtypeOrderByRelevanceFieldEnum = (typeof meetingtypeOrderByRelevanceFieldEnum)[keyof typeof meetingtypeOrderByRelevanceFieldEnum]


  export const staffOrderByRelevanceFieldEnum: {
    StaffName: 'StaffName',
    MobileNo: 'MobileNo',
    EmailAddress: 'EmailAddress',
    Remarks: 'Remarks',
    Department: 'Department',
    Role: 'Role',
    Status: 'Status'
  };

  export type staffOrderByRelevanceFieldEnum = (typeof staffOrderByRelevanceFieldEnum)[keyof typeof staffOrderByRelevanceFieldEnum]


  export const tasksOrderByRelevanceFieldEnum: {
    TaskDescription: 'TaskDescription',
    AssignedBy: 'AssignedBy',
    Status: 'Status'
  };

  export type tasksOrderByRelevanceFieldEnum = (typeof tasksOrderByRelevanceFieldEnum)[keyof typeof tasksOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type settingsWhereInput = {
    AND?: settingsWhereInput | settingsWhereInput[]
    OR?: settingsWhereInput[]
    NOT?: settingsWhereInput | settingsWhereInput[]
    id?: IntFilter<"settings"> | number
    settingKey?: StringFilter<"settings"> | string
    settingValue?: StringFilter<"settings"> | string
    description?: StringNullableFilter<"settings"> | string | null
    Created?: DateTimeNullableFilter<"settings"> | Date | string | null
    Modified?: DateTimeNullableFilter<"settings"> | Date | string | null
  }

  export type settingsOrderByWithRelationInput = {
    id?: SortOrder
    settingKey?: SortOrder
    settingValue?: SortOrder
    description?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    _relevance?: settingsOrderByRelevanceInput
  }

  export type settingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    settingKey?: string
    AND?: settingsWhereInput | settingsWhereInput[]
    OR?: settingsWhereInput[]
    NOT?: settingsWhereInput | settingsWhereInput[]
    settingValue?: StringFilter<"settings"> | string
    description?: StringNullableFilter<"settings"> | string | null
    Created?: DateTimeNullableFilter<"settings"> | Date | string | null
    Modified?: DateTimeNullableFilter<"settings"> | Date | string | null
  }, "id" | "settingKey">

  export type settingsOrderByWithAggregationInput = {
    id?: SortOrder
    settingKey?: SortOrder
    settingValue?: SortOrder
    description?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    _count?: settingsCountOrderByAggregateInput
    _avg?: settingsAvgOrderByAggregateInput
    _max?: settingsMaxOrderByAggregateInput
    _min?: settingsMinOrderByAggregateInput
    _sum?: settingsSumOrderByAggregateInput
  }

  export type settingsScalarWhereWithAggregatesInput = {
    AND?: settingsScalarWhereWithAggregatesInput | settingsScalarWhereWithAggregatesInput[]
    OR?: settingsScalarWhereWithAggregatesInput[]
    NOT?: settingsScalarWhereWithAggregatesInput | settingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"settings"> | number
    settingKey?: StringWithAggregatesFilter<"settings"> | string
    settingValue?: StringWithAggregatesFilter<"settings"> | string
    description?: StringNullableWithAggregatesFilter<"settings"> | string | null
    Created?: DateTimeNullableWithAggregatesFilter<"settings"> | Date | string | null
    Modified?: DateTimeNullableWithAggregatesFilter<"settings"> | Date | string | null
  }

  export type meetingmemberWhereInput = {
    AND?: meetingmemberWhereInput | meetingmemberWhereInput[]
    OR?: meetingmemberWhereInput[]
    NOT?: meetingmemberWhereInput | meetingmemberWhereInput[]
    MeetingMemberID?: IntFilter<"meetingmember"> | number
    MeetingID?: IntFilter<"meetingmember"> | number
    StaffID?: IntFilter<"meetingmember"> | number
    IsPresent?: BoolNullableFilter<"meetingmember"> | boolean | null
    Remarks?: StringNullableFilter<"meetingmember"> | string | null
    Created?: DateTimeNullableFilter<"meetingmember"> | Date | string | null
    Modified?: DateTimeNullableFilter<"meetingmember"> | Date | string | null
    meeting?: XOR<MeetingsScalarRelationFilter, meetingsWhereInput>
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }

  export type meetingmemberOrderByWithRelationInput = {
    MeetingMemberID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
    IsPresent?: SortOrderInput | SortOrder
    Remarks?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    meeting?: meetingsOrderByWithRelationInput
    staff?: staffOrderByWithRelationInput
    _relevance?: meetingmemberOrderByRelevanceInput
  }

  export type meetingmemberWhereUniqueInput = Prisma.AtLeast<{
    MeetingMemberID?: number
    AND?: meetingmemberWhereInput | meetingmemberWhereInput[]
    OR?: meetingmemberWhereInput[]
    NOT?: meetingmemberWhereInput | meetingmemberWhereInput[]
    MeetingID?: IntFilter<"meetingmember"> | number
    StaffID?: IntFilter<"meetingmember"> | number
    IsPresent?: BoolNullableFilter<"meetingmember"> | boolean | null
    Remarks?: StringNullableFilter<"meetingmember"> | string | null
    Created?: DateTimeNullableFilter<"meetingmember"> | Date | string | null
    Modified?: DateTimeNullableFilter<"meetingmember"> | Date | string | null
    meeting?: XOR<MeetingsScalarRelationFilter, meetingsWhereInput>
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }, "MeetingMemberID">

  export type meetingmemberOrderByWithAggregationInput = {
    MeetingMemberID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
    IsPresent?: SortOrderInput | SortOrder
    Remarks?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    _count?: meetingmemberCountOrderByAggregateInput
    _avg?: meetingmemberAvgOrderByAggregateInput
    _max?: meetingmemberMaxOrderByAggregateInput
    _min?: meetingmemberMinOrderByAggregateInput
    _sum?: meetingmemberSumOrderByAggregateInput
  }

  export type meetingmemberScalarWhereWithAggregatesInput = {
    AND?: meetingmemberScalarWhereWithAggregatesInput | meetingmemberScalarWhereWithAggregatesInput[]
    OR?: meetingmemberScalarWhereWithAggregatesInput[]
    NOT?: meetingmemberScalarWhereWithAggregatesInput | meetingmemberScalarWhereWithAggregatesInput[]
    MeetingMemberID?: IntWithAggregatesFilter<"meetingmember"> | number
    MeetingID?: IntWithAggregatesFilter<"meetingmember"> | number
    StaffID?: IntWithAggregatesFilter<"meetingmember"> | number
    IsPresent?: BoolNullableWithAggregatesFilter<"meetingmember"> | boolean | null
    Remarks?: StringNullableWithAggregatesFilter<"meetingmember"> | string | null
    Created?: DateTimeNullableWithAggregatesFilter<"meetingmember"> | Date | string | null
    Modified?: DateTimeNullableWithAggregatesFilter<"meetingmember"> | Date | string | null
  }

  export type meetingsWhereInput = {
    AND?: meetingsWhereInput | meetingsWhereInput[]
    OR?: meetingsWhereInput[]
    NOT?: meetingsWhereInput | meetingsWhereInput[]
    MeetingID?: IntFilter<"meetings"> | number
    MeetingDate?: DateTimeFilter<"meetings"> | Date | string
    MeetingTypeID?: IntFilter<"meetings"> | number
    MeetingDescription?: StringNullableFilter<"meetings"> | string | null
    DocumentPath?: StringNullableFilter<"meetings"> | string | null
    Created?: DateTimeNullableFilter<"meetings"> | Date | string | null
    Modified?: DateTimeNullableFilter<"meetings"> | Date | string | null
    IsCancelled?: BoolNullableFilter<"meetings"> | boolean | null
    CancellationDateTime?: DateTimeNullableFilter<"meetings"> | Date | string | null
    CancellationReason?: StringNullableFilter<"meetings"> | string | null
    meetingtype?: XOR<MeetingtypeScalarRelationFilter, meetingtypeWhereInput>
    meetingmembers?: MeetingmemberListRelationFilter
    tasks?: TasksListRelationFilter
  }

  export type meetingsOrderByWithRelationInput = {
    MeetingID?: SortOrder
    MeetingDate?: SortOrder
    MeetingTypeID?: SortOrder
    MeetingDescription?: SortOrderInput | SortOrder
    DocumentPath?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    IsCancelled?: SortOrderInput | SortOrder
    CancellationDateTime?: SortOrderInput | SortOrder
    CancellationReason?: SortOrderInput | SortOrder
    meetingtype?: meetingtypeOrderByWithRelationInput
    meetingmembers?: meetingmemberOrderByRelationAggregateInput
    tasks?: tasksOrderByRelationAggregateInput
    _relevance?: meetingsOrderByRelevanceInput
  }

  export type meetingsWhereUniqueInput = Prisma.AtLeast<{
    MeetingID?: number
    AND?: meetingsWhereInput | meetingsWhereInput[]
    OR?: meetingsWhereInput[]
    NOT?: meetingsWhereInput | meetingsWhereInput[]
    MeetingDate?: DateTimeFilter<"meetings"> | Date | string
    MeetingTypeID?: IntFilter<"meetings"> | number
    MeetingDescription?: StringNullableFilter<"meetings"> | string | null
    DocumentPath?: StringNullableFilter<"meetings"> | string | null
    Created?: DateTimeNullableFilter<"meetings"> | Date | string | null
    Modified?: DateTimeNullableFilter<"meetings"> | Date | string | null
    IsCancelled?: BoolNullableFilter<"meetings"> | boolean | null
    CancellationDateTime?: DateTimeNullableFilter<"meetings"> | Date | string | null
    CancellationReason?: StringNullableFilter<"meetings"> | string | null
    meetingtype?: XOR<MeetingtypeScalarRelationFilter, meetingtypeWhereInput>
    meetingmembers?: MeetingmemberListRelationFilter
    tasks?: TasksListRelationFilter
  }, "MeetingID">

  export type meetingsOrderByWithAggregationInput = {
    MeetingID?: SortOrder
    MeetingDate?: SortOrder
    MeetingTypeID?: SortOrder
    MeetingDescription?: SortOrderInput | SortOrder
    DocumentPath?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    IsCancelled?: SortOrderInput | SortOrder
    CancellationDateTime?: SortOrderInput | SortOrder
    CancellationReason?: SortOrderInput | SortOrder
    _count?: meetingsCountOrderByAggregateInput
    _avg?: meetingsAvgOrderByAggregateInput
    _max?: meetingsMaxOrderByAggregateInput
    _min?: meetingsMinOrderByAggregateInput
    _sum?: meetingsSumOrderByAggregateInput
  }

  export type meetingsScalarWhereWithAggregatesInput = {
    AND?: meetingsScalarWhereWithAggregatesInput | meetingsScalarWhereWithAggregatesInput[]
    OR?: meetingsScalarWhereWithAggregatesInput[]
    NOT?: meetingsScalarWhereWithAggregatesInput | meetingsScalarWhereWithAggregatesInput[]
    MeetingID?: IntWithAggregatesFilter<"meetings"> | number
    MeetingDate?: DateTimeWithAggregatesFilter<"meetings"> | Date | string
    MeetingTypeID?: IntWithAggregatesFilter<"meetings"> | number
    MeetingDescription?: StringNullableWithAggregatesFilter<"meetings"> | string | null
    DocumentPath?: StringNullableWithAggregatesFilter<"meetings"> | string | null
    Created?: DateTimeNullableWithAggregatesFilter<"meetings"> | Date | string | null
    Modified?: DateTimeNullableWithAggregatesFilter<"meetings"> | Date | string | null
    IsCancelled?: BoolNullableWithAggregatesFilter<"meetings"> | boolean | null
    CancellationDateTime?: DateTimeNullableWithAggregatesFilter<"meetings"> | Date | string | null
    CancellationReason?: StringNullableWithAggregatesFilter<"meetings"> | string | null
  }

  export type meetingtypeWhereInput = {
    AND?: meetingtypeWhereInput | meetingtypeWhereInput[]
    OR?: meetingtypeWhereInput[]
    NOT?: meetingtypeWhereInput | meetingtypeWhereInput[]
    MeetingTypeID?: IntFilter<"meetingtype"> | number
    MeetingTypeName?: StringFilter<"meetingtype"> | string
    Remarks?: StringNullableFilter<"meetingtype"> | string | null
    Created?: DateTimeNullableFilter<"meetingtype"> | Date | string | null
    Modified?: DateTimeNullableFilter<"meetingtype"> | Date | string | null
    meetings?: MeetingsListRelationFilter
  }

  export type meetingtypeOrderByWithRelationInput = {
    MeetingTypeID?: SortOrder
    MeetingTypeName?: SortOrder
    Remarks?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    meetings?: meetingsOrderByRelationAggregateInput
    _relevance?: meetingtypeOrderByRelevanceInput
  }

  export type meetingtypeWhereUniqueInput = Prisma.AtLeast<{
    MeetingTypeID?: number
    AND?: meetingtypeWhereInput | meetingtypeWhereInput[]
    OR?: meetingtypeWhereInput[]
    NOT?: meetingtypeWhereInput | meetingtypeWhereInput[]
    MeetingTypeName?: StringFilter<"meetingtype"> | string
    Remarks?: StringNullableFilter<"meetingtype"> | string | null
    Created?: DateTimeNullableFilter<"meetingtype"> | Date | string | null
    Modified?: DateTimeNullableFilter<"meetingtype"> | Date | string | null
    meetings?: MeetingsListRelationFilter
  }, "MeetingTypeID">

  export type meetingtypeOrderByWithAggregationInput = {
    MeetingTypeID?: SortOrder
    MeetingTypeName?: SortOrder
    Remarks?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    _count?: meetingtypeCountOrderByAggregateInput
    _avg?: meetingtypeAvgOrderByAggregateInput
    _max?: meetingtypeMaxOrderByAggregateInput
    _min?: meetingtypeMinOrderByAggregateInput
    _sum?: meetingtypeSumOrderByAggregateInput
  }

  export type meetingtypeScalarWhereWithAggregatesInput = {
    AND?: meetingtypeScalarWhereWithAggregatesInput | meetingtypeScalarWhereWithAggregatesInput[]
    OR?: meetingtypeScalarWhereWithAggregatesInput[]
    NOT?: meetingtypeScalarWhereWithAggregatesInput | meetingtypeScalarWhereWithAggregatesInput[]
    MeetingTypeID?: IntWithAggregatesFilter<"meetingtype"> | number
    MeetingTypeName?: StringWithAggregatesFilter<"meetingtype"> | string
    Remarks?: StringNullableWithAggregatesFilter<"meetingtype"> | string | null
    Created?: DateTimeNullableWithAggregatesFilter<"meetingtype"> | Date | string | null
    Modified?: DateTimeNullableWithAggregatesFilter<"meetingtype"> | Date | string | null
  }

  export type staffWhereInput = {
    AND?: staffWhereInput | staffWhereInput[]
    OR?: staffWhereInput[]
    NOT?: staffWhereInput | staffWhereInput[]
    StaffID?: IntFilter<"staff"> | number
    StaffName?: StringFilter<"staff"> | string
    MobileNo?: StringNullableFilter<"staff"> | string | null
    EmailAddress?: StringNullableFilter<"staff"> | string | null
    Remarks?: StringNullableFilter<"staff"> | string | null
    Created?: DateTimeNullableFilter<"staff"> | Date | string | null
    Modified?: DateTimeNullableFilter<"staff"> | Date | string | null
    Department?: StringNullableFilter<"staff"> | string | null
    Role?: StringNullableFilter<"staff"> | string | null
    Status?: StringNullableFilter<"staff"> | string | null
    meetingmembers?: MeetingmemberListRelationFilter
    tasks?: TasksListRelationFilter
  }

  export type staffOrderByWithRelationInput = {
    StaffID?: SortOrder
    StaffName?: SortOrder
    MobileNo?: SortOrderInput | SortOrder
    EmailAddress?: SortOrderInput | SortOrder
    Remarks?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    Department?: SortOrderInput | SortOrder
    Role?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    meetingmembers?: meetingmemberOrderByRelationAggregateInput
    tasks?: tasksOrderByRelationAggregateInput
    _relevance?: staffOrderByRelevanceInput
  }

  export type staffWhereUniqueInput = Prisma.AtLeast<{
    StaffID?: number
    AND?: staffWhereInput | staffWhereInput[]
    OR?: staffWhereInput[]
    NOT?: staffWhereInput | staffWhereInput[]
    StaffName?: StringFilter<"staff"> | string
    MobileNo?: StringNullableFilter<"staff"> | string | null
    EmailAddress?: StringNullableFilter<"staff"> | string | null
    Remarks?: StringNullableFilter<"staff"> | string | null
    Created?: DateTimeNullableFilter<"staff"> | Date | string | null
    Modified?: DateTimeNullableFilter<"staff"> | Date | string | null
    Department?: StringNullableFilter<"staff"> | string | null
    Role?: StringNullableFilter<"staff"> | string | null
    Status?: StringNullableFilter<"staff"> | string | null
    meetingmembers?: MeetingmemberListRelationFilter
    tasks?: TasksListRelationFilter
  }, "StaffID">

  export type staffOrderByWithAggregationInput = {
    StaffID?: SortOrder
    StaffName?: SortOrder
    MobileNo?: SortOrderInput | SortOrder
    EmailAddress?: SortOrderInput | SortOrder
    Remarks?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    Department?: SortOrderInput | SortOrder
    Role?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    _count?: staffCountOrderByAggregateInput
    _avg?: staffAvgOrderByAggregateInput
    _max?: staffMaxOrderByAggregateInput
    _min?: staffMinOrderByAggregateInput
    _sum?: staffSumOrderByAggregateInput
  }

  export type staffScalarWhereWithAggregatesInput = {
    AND?: staffScalarWhereWithAggregatesInput | staffScalarWhereWithAggregatesInput[]
    OR?: staffScalarWhereWithAggregatesInput[]
    NOT?: staffScalarWhereWithAggregatesInput | staffScalarWhereWithAggregatesInput[]
    StaffID?: IntWithAggregatesFilter<"staff"> | number
    StaffName?: StringWithAggregatesFilter<"staff"> | string
    MobileNo?: StringNullableWithAggregatesFilter<"staff"> | string | null
    EmailAddress?: StringNullableWithAggregatesFilter<"staff"> | string | null
    Remarks?: StringNullableWithAggregatesFilter<"staff"> | string | null
    Created?: DateTimeNullableWithAggregatesFilter<"staff"> | Date | string | null
    Modified?: DateTimeNullableWithAggregatesFilter<"staff"> | Date | string | null
    Department?: StringNullableWithAggregatesFilter<"staff"> | string | null
    Role?: StringNullableWithAggregatesFilter<"staff"> | string | null
    Status?: StringNullableWithAggregatesFilter<"staff"> | string | null
  }

  export type tasksWhereInput = {
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    TaskID?: IntFilter<"tasks"> | number
    TaskDescription?: StringFilter<"tasks"> | string
    AssignedBy?: StringNullableFilter<"tasks"> | string | null
    Deadline?: DateTimeNullableFilter<"tasks"> | Date | string | null
    Status?: StringNullableFilter<"tasks"> | string | null
    StaffID?: IntFilter<"tasks"> | number
    MeetingID?: IntNullableFilter<"tasks"> | number | null
    Created?: DateTimeNullableFilter<"tasks"> | Date | string | null
    Modified?: DateTimeNullableFilter<"tasks"> | Date | string | null
    meeting?: XOR<MeetingsNullableScalarRelationFilter, meetingsWhereInput> | null
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }

  export type tasksOrderByWithRelationInput = {
    TaskID?: SortOrder
    TaskDescription?: SortOrder
    AssignedBy?: SortOrderInput | SortOrder
    Deadline?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    StaffID?: SortOrder
    MeetingID?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    meeting?: meetingsOrderByWithRelationInput
    staff?: staffOrderByWithRelationInput
    _relevance?: tasksOrderByRelevanceInput
  }

  export type tasksWhereUniqueInput = Prisma.AtLeast<{
    TaskID?: number
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    TaskDescription?: StringFilter<"tasks"> | string
    AssignedBy?: StringNullableFilter<"tasks"> | string | null
    Deadline?: DateTimeNullableFilter<"tasks"> | Date | string | null
    Status?: StringNullableFilter<"tasks"> | string | null
    StaffID?: IntFilter<"tasks"> | number
    MeetingID?: IntNullableFilter<"tasks"> | number | null
    Created?: DateTimeNullableFilter<"tasks"> | Date | string | null
    Modified?: DateTimeNullableFilter<"tasks"> | Date | string | null
    meeting?: XOR<MeetingsNullableScalarRelationFilter, meetingsWhereInput> | null
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }, "TaskID">

  export type tasksOrderByWithAggregationInput = {
    TaskID?: SortOrder
    TaskDescription?: SortOrder
    AssignedBy?: SortOrderInput | SortOrder
    Deadline?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    StaffID?: SortOrder
    MeetingID?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    _count?: tasksCountOrderByAggregateInput
    _avg?: tasksAvgOrderByAggregateInput
    _max?: tasksMaxOrderByAggregateInput
    _min?: tasksMinOrderByAggregateInput
    _sum?: tasksSumOrderByAggregateInput
  }

  export type tasksScalarWhereWithAggregatesInput = {
    AND?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    OR?: tasksScalarWhereWithAggregatesInput[]
    NOT?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    TaskID?: IntWithAggregatesFilter<"tasks"> | number
    TaskDescription?: StringWithAggregatesFilter<"tasks"> | string
    AssignedBy?: StringNullableWithAggregatesFilter<"tasks"> | string | null
    Deadline?: DateTimeNullableWithAggregatesFilter<"tasks"> | Date | string | null
    Status?: StringNullableWithAggregatesFilter<"tasks"> | string | null
    StaffID?: IntWithAggregatesFilter<"tasks"> | number
    MeetingID?: IntNullableWithAggregatesFilter<"tasks"> | number | null
    Created?: DateTimeNullableWithAggregatesFilter<"tasks"> | Date | string | null
    Modified?: DateTimeNullableWithAggregatesFilter<"tasks"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: IntFilter<"users"> | number
    name?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    role?: StringFilter<"users"> | string
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    role?: StringFilter<"users"> | string
  }, "user_id" | "email">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users"> | number
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: StringWithAggregatesFilter<"users"> | string
  }

  export type settingsCreateInput = {
    settingKey: string
    settingValue: string
    description?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type settingsUncheckedCreateInput = {
    id?: number
    settingKey: string
    settingValue: string
    description?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type settingsUpdateInput = {
    settingKey?: StringFieldUpdateOperationsInput | string
    settingValue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type settingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    settingKey?: StringFieldUpdateOperationsInput | string
    settingValue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type settingsCreateManyInput = {
    id?: number
    settingKey: string
    settingValue: string
    description?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type settingsUpdateManyMutationInput = {
    settingKey?: StringFieldUpdateOperationsInput | string
    settingValue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type settingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    settingKey?: StringFieldUpdateOperationsInput | string
    settingValue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingmemberCreateInput = {
    IsPresent?: boolean | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    meeting: meetingsCreateNestedOneWithoutMeetingmembersInput
    staff: staffCreateNestedOneWithoutMeetingmembersInput
  }

  export type meetingmemberUncheckedCreateInput = {
    MeetingMemberID?: number
    MeetingID: number
    StaffID: number
    IsPresent?: boolean | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type meetingmemberUpdateInput = {
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meeting?: meetingsUpdateOneRequiredWithoutMeetingmembersNestedInput
    staff?: staffUpdateOneRequiredWithoutMeetingmembersNestedInput
  }

  export type meetingmemberUncheckedUpdateInput = {
    MeetingMemberID?: IntFieldUpdateOperationsInput | number
    MeetingID?: IntFieldUpdateOperationsInput | number
    StaffID?: IntFieldUpdateOperationsInput | number
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingmemberCreateManyInput = {
    MeetingMemberID?: number
    MeetingID: number
    StaffID: number
    IsPresent?: boolean | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type meetingmemberUpdateManyMutationInput = {
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingmemberUncheckedUpdateManyInput = {
    MeetingMemberID?: IntFieldUpdateOperationsInput | number
    MeetingID?: IntFieldUpdateOperationsInput | number
    StaffID?: IntFieldUpdateOperationsInput | number
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingsCreateInput = {
    MeetingDate: Date | string
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    meetingtype: meetingtypeCreateNestedOneWithoutMeetingsInput
    meetingmembers?: meetingmemberCreateNestedManyWithoutMeetingInput
    tasks?: tasksCreateNestedManyWithoutMeetingInput
  }

  export type meetingsUncheckedCreateInput = {
    MeetingID?: number
    MeetingDate: Date | string
    MeetingTypeID: number
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    meetingmembers?: meetingmemberUncheckedCreateNestedManyWithoutMeetingInput
    tasks?: tasksUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type meetingsUpdateInput = {
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingtype?: meetingtypeUpdateOneRequiredWithoutMeetingsNestedInput
    meetingmembers?: meetingmemberUpdateManyWithoutMeetingNestedInput
    tasks?: tasksUpdateManyWithoutMeetingNestedInput
  }

  export type meetingsUncheckedUpdateInput = {
    MeetingID?: IntFieldUpdateOperationsInput | number
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingmembers?: meetingmemberUncheckedUpdateManyWithoutMeetingNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type meetingsCreateManyInput = {
    MeetingID?: number
    MeetingDate: Date | string
    MeetingTypeID: number
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
  }

  export type meetingsUpdateManyMutationInput = {
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type meetingsUncheckedUpdateManyInput = {
    MeetingID?: IntFieldUpdateOperationsInput | number
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type meetingtypeCreateInput = {
    MeetingTypeName: string
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    meetings?: meetingsCreateNestedManyWithoutMeetingtypeInput
  }

  export type meetingtypeUncheckedCreateInput = {
    MeetingTypeID?: number
    MeetingTypeName: string
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    meetings?: meetingsUncheckedCreateNestedManyWithoutMeetingtypeInput
  }

  export type meetingtypeUpdateInput = {
    MeetingTypeName?: StringFieldUpdateOperationsInput | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetings?: meetingsUpdateManyWithoutMeetingtypeNestedInput
  }

  export type meetingtypeUncheckedUpdateInput = {
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    MeetingTypeName?: StringFieldUpdateOperationsInput | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetings?: meetingsUncheckedUpdateManyWithoutMeetingtypeNestedInput
  }

  export type meetingtypeCreateManyInput = {
    MeetingTypeID?: number
    MeetingTypeName: string
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type meetingtypeUpdateManyMutationInput = {
    MeetingTypeName?: StringFieldUpdateOperationsInput | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingtypeUncheckedUpdateManyInput = {
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    MeetingTypeName?: StringFieldUpdateOperationsInput | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type staffCreateInput = {
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    Department?: string | null
    Role?: string | null
    Status?: string | null
    meetingmembers?: meetingmemberCreateNestedManyWithoutStaffInput
    tasks?: tasksCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateInput = {
    StaffID?: number
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    Department?: string | null
    Role?: string | null
    Status?: string | null
    meetingmembers?: meetingmemberUncheckedCreateNestedManyWithoutStaffInput
    tasks?: tasksUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffUpdateInput = {
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    meetingmembers?: meetingmemberUpdateManyWithoutStaffNestedInput
    tasks?: tasksUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    meetingmembers?: meetingmemberUncheckedUpdateManyWithoutStaffNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type staffCreateManyInput = {
    StaffID?: number
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    Department?: string | null
    Role?: string | null
    Status?: string | null
  }

  export type staffUpdateManyMutationInput = {
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type staffUncheckedUpdateManyInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tasksCreateInput = {
    TaskDescription: string
    AssignedBy?: string | null
    Deadline?: Date | string | null
    Status?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    meeting?: meetingsCreateNestedOneWithoutTasksInput
    staff: staffCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateInput = {
    TaskID?: number
    TaskDescription: string
    AssignedBy?: string | null
    Deadline?: Date | string | null
    Status?: string | null
    StaffID: number
    MeetingID?: number | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type tasksUpdateInput = {
    TaskDescription?: StringFieldUpdateOperationsInput | string
    AssignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meeting?: meetingsUpdateOneWithoutTasksNestedInput
    staff?: staffUpdateOneRequiredWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateInput = {
    TaskID?: IntFieldUpdateOperationsInput | number
    TaskDescription?: StringFieldUpdateOperationsInput | string
    AssignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    StaffID?: IntFieldUpdateOperationsInput | number
    MeetingID?: NullableIntFieldUpdateOperationsInput | number | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksCreateManyInput = {
    TaskID?: number
    TaskDescription: string
    AssignedBy?: string | null
    Deadline?: Date | string | null
    Status?: string | null
    StaffID: number
    MeetingID?: number | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type tasksUpdateManyMutationInput = {
    TaskDescription?: StringFieldUpdateOperationsInput | string
    AssignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksUncheckedUpdateManyInput = {
    TaskID?: IntFieldUpdateOperationsInput | number
    TaskDescription?: StringFieldUpdateOperationsInput | string
    AssignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    StaffID?: IntFieldUpdateOperationsInput | number
    MeetingID?: NullableIntFieldUpdateOperationsInput | number | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    name?: string | null
    email?: string | null
    password?: string | null
    role: string
  }

  export type usersUncheckedCreateInput = {
    user_id?: number
    name?: string | null
    email?: string | null
    password?: string | null
    role: string
  }

  export type usersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateManyInput = {
    user_id?: number
    name?: string | null
    email?: string | null
    password?: string | null
    role: string
  }

  export type usersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type settingsOrderByRelevanceInput = {
    fields: settingsOrderByRelevanceFieldEnum | settingsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type settingsCountOrderByAggregateInput = {
    id?: SortOrder
    settingKey?: SortOrder
    settingValue?: SortOrder
    description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type settingsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type settingsMaxOrderByAggregateInput = {
    id?: SortOrder
    settingKey?: SortOrder
    settingValue?: SortOrder
    description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type settingsMinOrderByAggregateInput = {
    id?: SortOrder
    settingKey?: SortOrder
    settingValue?: SortOrder
    description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type settingsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type MeetingsScalarRelationFilter = {
    is?: meetingsWhereInput
    isNot?: meetingsWhereInput
  }

  export type StaffScalarRelationFilter = {
    is?: staffWhereInput
    isNot?: staffWhereInput
  }

  export type meetingmemberOrderByRelevanceInput = {
    fields: meetingmemberOrderByRelevanceFieldEnum | meetingmemberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type meetingmemberCountOrderByAggregateInput = {
    MeetingMemberID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
    IsPresent?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type meetingmemberAvgOrderByAggregateInput = {
    MeetingMemberID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
  }

  export type meetingmemberMaxOrderByAggregateInput = {
    MeetingMemberID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
    IsPresent?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type meetingmemberMinOrderByAggregateInput = {
    MeetingMemberID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
    IsPresent?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type meetingmemberSumOrderByAggregateInput = {
    MeetingMemberID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MeetingtypeScalarRelationFilter = {
    is?: meetingtypeWhereInput
    isNot?: meetingtypeWhereInput
  }

  export type MeetingmemberListRelationFilter = {
    every?: meetingmemberWhereInput
    some?: meetingmemberWhereInput
    none?: meetingmemberWhereInput
  }

  export type TasksListRelationFilter = {
    every?: tasksWhereInput
    some?: tasksWhereInput
    none?: tasksWhereInput
  }

  export type meetingmemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type meetingsOrderByRelevanceInput = {
    fields: meetingsOrderByRelevanceFieldEnum | meetingsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type meetingsCountOrderByAggregateInput = {
    MeetingID?: SortOrder
    MeetingDate?: SortOrder
    MeetingTypeID?: SortOrder
    MeetingDescription?: SortOrder
    DocumentPath?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    IsCancelled?: SortOrder
    CancellationDateTime?: SortOrder
    CancellationReason?: SortOrder
  }

  export type meetingsAvgOrderByAggregateInput = {
    MeetingID?: SortOrder
    MeetingTypeID?: SortOrder
  }

  export type meetingsMaxOrderByAggregateInput = {
    MeetingID?: SortOrder
    MeetingDate?: SortOrder
    MeetingTypeID?: SortOrder
    MeetingDescription?: SortOrder
    DocumentPath?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    IsCancelled?: SortOrder
    CancellationDateTime?: SortOrder
    CancellationReason?: SortOrder
  }

  export type meetingsMinOrderByAggregateInput = {
    MeetingID?: SortOrder
    MeetingDate?: SortOrder
    MeetingTypeID?: SortOrder
    MeetingDescription?: SortOrder
    DocumentPath?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    IsCancelled?: SortOrder
    CancellationDateTime?: SortOrder
    CancellationReason?: SortOrder
  }

  export type meetingsSumOrderByAggregateInput = {
    MeetingID?: SortOrder
    MeetingTypeID?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MeetingsListRelationFilter = {
    every?: meetingsWhereInput
    some?: meetingsWhereInput
    none?: meetingsWhereInput
  }

  export type meetingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type meetingtypeOrderByRelevanceInput = {
    fields: meetingtypeOrderByRelevanceFieldEnum | meetingtypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type meetingtypeCountOrderByAggregateInput = {
    MeetingTypeID?: SortOrder
    MeetingTypeName?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type meetingtypeAvgOrderByAggregateInput = {
    MeetingTypeID?: SortOrder
  }

  export type meetingtypeMaxOrderByAggregateInput = {
    MeetingTypeID?: SortOrder
    MeetingTypeName?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type meetingtypeMinOrderByAggregateInput = {
    MeetingTypeID?: SortOrder
    MeetingTypeName?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type meetingtypeSumOrderByAggregateInput = {
    MeetingTypeID?: SortOrder
  }

  export type staffOrderByRelevanceInput = {
    fields: staffOrderByRelevanceFieldEnum | staffOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type staffCountOrderByAggregateInput = {
    StaffID?: SortOrder
    StaffName?: SortOrder
    MobileNo?: SortOrder
    EmailAddress?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Department?: SortOrder
    Role?: SortOrder
    Status?: SortOrder
  }

  export type staffAvgOrderByAggregateInput = {
    StaffID?: SortOrder
  }

  export type staffMaxOrderByAggregateInput = {
    StaffID?: SortOrder
    StaffName?: SortOrder
    MobileNo?: SortOrder
    EmailAddress?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Department?: SortOrder
    Role?: SortOrder
    Status?: SortOrder
  }

  export type staffMinOrderByAggregateInput = {
    StaffID?: SortOrder
    StaffName?: SortOrder
    MobileNo?: SortOrder
    EmailAddress?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Department?: SortOrder
    Role?: SortOrder
    Status?: SortOrder
  }

  export type staffSumOrderByAggregateInput = {
    StaffID?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MeetingsNullableScalarRelationFilter = {
    is?: meetingsWhereInput | null
    isNot?: meetingsWhereInput | null
  }

  export type tasksOrderByRelevanceInput = {
    fields: tasksOrderByRelevanceFieldEnum | tasksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tasksCountOrderByAggregateInput = {
    TaskID?: SortOrder
    TaskDescription?: SortOrder
    AssignedBy?: SortOrder
    Deadline?: SortOrder
    Status?: SortOrder
    StaffID?: SortOrder
    MeetingID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type tasksAvgOrderByAggregateInput = {
    TaskID?: SortOrder
    StaffID?: SortOrder
    MeetingID?: SortOrder
  }

  export type tasksMaxOrderByAggregateInput = {
    TaskID?: SortOrder
    TaskDescription?: SortOrder
    AssignedBy?: SortOrder
    Deadline?: SortOrder
    Status?: SortOrder
    StaffID?: SortOrder
    MeetingID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type tasksMinOrderByAggregateInput = {
    TaskID?: SortOrder
    TaskDescription?: SortOrder
    AssignedBy?: SortOrder
    Deadline?: SortOrder
    Status?: SortOrder
    StaffID?: SortOrder
    MeetingID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type tasksSumOrderByAggregateInput = {
    TaskID?: SortOrder
    StaffID?: SortOrder
    MeetingID?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type meetingsCreateNestedOneWithoutMeetingmembersInput = {
    create?: XOR<meetingsCreateWithoutMeetingmembersInput, meetingsUncheckedCreateWithoutMeetingmembersInput>
    connectOrCreate?: meetingsCreateOrConnectWithoutMeetingmembersInput
    connect?: meetingsWhereUniqueInput
  }

  export type staffCreateNestedOneWithoutMeetingmembersInput = {
    create?: XOR<staffCreateWithoutMeetingmembersInput, staffUncheckedCreateWithoutMeetingmembersInput>
    connectOrCreate?: staffCreateOrConnectWithoutMeetingmembersInput
    connect?: staffWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type meetingsUpdateOneRequiredWithoutMeetingmembersNestedInput = {
    create?: XOR<meetingsCreateWithoutMeetingmembersInput, meetingsUncheckedCreateWithoutMeetingmembersInput>
    connectOrCreate?: meetingsCreateOrConnectWithoutMeetingmembersInput
    upsert?: meetingsUpsertWithoutMeetingmembersInput
    connect?: meetingsWhereUniqueInput
    update?: XOR<XOR<meetingsUpdateToOneWithWhereWithoutMeetingmembersInput, meetingsUpdateWithoutMeetingmembersInput>, meetingsUncheckedUpdateWithoutMeetingmembersInput>
  }

  export type staffUpdateOneRequiredWithoutMeetingmembersNestedInput = {
    create?: XOR<staffCreateWithoutMeetingmembersInput, staffUncheckedCreateWithoutMeetingmembersInput>
    connectOrCreate?: staffCreateOrConnectWithoutMeetingmembersInput
    upsert?: staffUpsertWithoutMeetingmembersInput
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutMeetingmembersInput, staffUpdateWithoutMeetingmembersInput>, staffUncheckedUpdateWithoutMeetingmembersInput>
  }

  export type meetingtypeCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<meetingtypeCreateWithoutMeetingsInput, meetingtypeUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: meetingtypeCreateOrConnectWithoutMeetingsInput
    connect?: meetingtypeWhereUniqueInput
  }

  export type meetingmemberCreateNestedManyWithoutMeetingInput = {
    create?: XOR<meetingmemberCreateWithoutMeetingInput, meetingmemberUncheckedCreateWithoutMeetingInput> | meetingmemberCreateWithoutMeetingInput[] | meetingmemberUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: meetingmemberCreateOrConnectWithoutMeetingInput | meetingmemberCreateOrConnectWithoutMeetingInput[]
    createMany?: meetingmemberCreateManyMeetingInputEnvelope
    connect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
  }

  export type tasksCreateNestedManyWithoutMeetingInput = {
    create?: XOR<tasksCreateWithoutMeetingInput, tasksUncheckedCreateWithoutMeetingInput> | tasksCreateWithoutMeetingInput[] | tasksUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutMeetingInput | tasksCreateOrConnectWithoutMeetingInput[]
    createMany?: tasksCreateManyMeetingInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type meetingmemberUncheckedCreateNestedManyWithoutMeetingInput = {
    create?: XOR<meetingmemberCreateWithoutMeetingInput, meetingmemberUncheckedCreateWithoutMeetingInput> | meetingmemberCreateWithoutMeetingInput[] | meetingmemberUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: meetingmemberCreateOrConnectWithoutMeetingInput | meetingmemberCreateOrConnectWithoutMeetingInput[]
    createMany?: meetingmemberCreateManyMeetingInputEnvelope
    connect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutMeetingInput = {
    create?: XOR<tasksCreateWithoutMeetingInput, tasksUncheckedCreateWithoutMeetingInput> | tasksCreateWithoutMeetingInput[] | tasksUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutMeetingInput | tasksCreateOrConnectWithoutMeetingInput[]
    createMany?: tasksCreateManyMeetingInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type meetingtypeUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: XOR<meetingtypeCreateWithoutMeetingsInput, meetingtypeUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: meetingtypeCreateOrConnectWithoutMeetingsInput
    upsert?: meetingtypeUpsertWithoutMeetingsInput
    connect?: meetingtypeWhereUniqueInput
    update?: XOR<XOR<meetingtypeUpdateToOneWithWhereWithoutMeetingsInput, meetingtypeUpdateWithoutMeetingsInput>, meetingtypeUncheckedUpdateWithoutMeetingsInput>
  }

  export type meetingmemberUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<meetingmemberCreateWithoutMeetingInput, meetingmemberUncheckedCreateWithoutMeetingInput> | meetingmemberCreateWithoutMeetingInput[] | meetingmemberUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: meetingmemberCreateOrConnectWithoutMeetingInput | meetingmemberCreateOrConnectWithoutMeetingInput[]
    upsert?: meetingmemberUpsertWithWhereUniqueWithoutMeetingInput | meetingmemberUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: meetingmemberCreateManyMeetingInputEnvelope
    set?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    disconnect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    delete?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    connect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    update?: meetingmemberUpdateWithWhereUniqueWithoutMeetingInput | meetingmemberUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: meetingmemberUpdateManyWithWhereWithoutMeetingInput | meetingmemberUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: meetingmemberScalarWhereInput | meetingmemberScalarWhereInput[]
  }

  export type tasksUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<tasksCreateWithoutMeetingInput, tasksUncheckedCreateWithoutMeetingInput> | tasksCreateWithoutMeetingInput[] | tasksUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutMeetingInput | tasksCreateOrConnectWithoutMeetingInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutMeetingInput | tasksUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: tasksCreateManyMeetingInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutMeetingInput | tasksUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutMeetingInput | tasksUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type meetingmemberUncheckedUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<meetingmemberCreateWithoutMeetingInput, meetingmemberUncheckedCreateWithoutMeetingInput> | meetingmemberCreateWithoutMeetingInput[] | meetingmemberUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: meetingmemberCreateOrConnectWithoutMeetingInput | meetingmemberCreateOrConnectWithoutMeetingInput[]
    upsert?: meetingmemberUpsertWithWhereUniqueWithoutMeetingInput | meetingmemberUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: meetingmemberCreateManyMeetingInputEnvelope
    set?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    disconnect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    delete?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    connect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    update?: meetingmemberUpdateWithWhereUniqueWithoutMeetingInput | meetingmemberUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: meetingmemberUpdateManyWithWhereWithoutMeetingInput | meetingmemberUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: meetingmemberScalarWhereInput | meetingmemberScalarWhereInput[]
  }

  export type tasksUncheckedUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<tasksCreateWithoutMeetingInput, tasksUncheckedCreateWithoutMeetingInput> | tasksCreateWithoutMeetingInput[] | tasksUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutMeetingInput | tasksCreateOrConnectWithoutMeetingInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutMeetingInput | tasksUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: tasksCreateManyMeetingInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutMeetingInput | tasksUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutMeetingInput | tasksUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type meetingsCreateNestedManyWithoutMeetingtypeInput = {
    create?: XOR<meetingsCreateWithoutMeetingtypeInput, meetingsUncheckedCreateWithoutMeetingtypeInput> | meetingsCreateWithoutMeetingtypeInput[] | meetingsUncheckedCreateWithoutMeetingtypeInput[]
    connectOrCreate?: meetingsCreateOrConnectWithoutMeetingtypeInput | meetingsCreateOrConnectWithoutMeetingtypeInput[]
    createMany?: meetingsCreateManyMeetingtypeInputEnvelope
    connect?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
  }

  export type meetingsUncheckedCreateNestedManyWithoutMeetingtypeInput = {
    create?: XOR<meetingsCreateWithoutMeetingtypeInput, meetingsUncheckedCreateWithoutMeetingtypeInput> | meetingsCreateWithoutMeetingtypeInput[] | meetingsUncheckedCreateWithoutMeetingtypeInput[]
    connectOrCreate?: meetingsCreateOrConnectWithoutMeetingtypeInput | meetingsCreateOrConnectWithoutMeetingtypeInput[]
    createMany?: meetingsCreateManyMeetingtypeInputEnvelope
    connect?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
  }

  export type meetingsUpdateManyWithoutMeetingtypeNestedInput = {
    create?: XOR<meetingsCreateWithoutMeetingtypeInput, meetingsUncheckedCreateWithoutMeetingtypeInput> | meetingsCreateWithoutMeetingtypeInput[] | meetingsUncheckedCreateWithoutMeetingtypeInput[]
    connectOrCreate?: meetingsCreateOrConnectWithoutMeetingtypeInput | meetingsCreateOrConnectWithoutMeetingtypeInput[]
    upsert?: meetingsUpsertWithWhereUniqueWithoutMeetingtypeInput | meetingsUpsertWithWhereUniqueWithoutMeetingtypeInput[]
    createMany?: meetingsCreateManyMeetingtypeInputEnvelope
    set?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    disconnect?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    delete?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    connect?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    update?: meetingsUpdateWithWhereUniqueWithoutMeetingtypeInput | meetingsUpdateWithWhereUniqueWithoutMeetingtypeInput[]
    updateMany?: meetingsUpdateManyWithWhereWithoutMeetingtypeInput | meetingsUpdateManyWithWhereWithoutMeetingtypeInput[]
    deleteMany?: meetingsScalarWhereInput | meetingsScalarWhereInput[]
  }

  export type meetingsUncheckedUpdateManyWithoutMeetingtypeNestedInput = {
    create?: XOR<meetingsCreateWithoutMeetingtypeInput, meetingsUncheckedCreateWithoutMeetingtypeInput> | meetingsCreateWithoutMeetingtypeInput[] | meetingsUncheckedCreateWithoutMeetingtypeInput[]
    connectOrCreate?: meetingsCreateOrConnectWithoutMeetingtypeInput | meetingsCreateOrConnectWithoutMeetingtypeInput[]
    upsert?: meetingsUpsertWithWhereUniqueWithoutMeetingtypeInput | meetingsUpsertWithWhereUniqueWithoutMeetingtypeInput[]
    createMany?: meetingsCreateManyMeetingtypeInputEnvelope
    set?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    disconnect?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    delete?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    connect?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    update?: meetingsUpdateWithWhereUniqueWithoutMeetingtypeInput | meetingsUpdateWithWhereUniqueWithoutMeetingtypeInput[]
    updateMany?: meetingsUpdateManyWithWhereWithoutMeetingtypeInput | meetingsUpdateManyWithWhereWithoutMeetingtypeInput[]
    deleteMany?: meetingsScalarWhereInput | meetingsScalarWhereInput[]
  }

  export type meetingmemberCreateNestedManyWithoutStaffInput = {
    create?: XOR<meetingmemberCreateWithoutStaffInput, meetingmemberUncheckedCreateWithoutStaffInput> | meetingmemberCreateWithoutStaffInput[] | meetingmemberUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: meetingmemberCreateOrConnectWithoutStaffInput | meetingmemberCreateOrConnectWithoutStaffInput[]
    createMany?: meetingmemberCreateManyStaffInputEnvelope
    connect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
  }

  export type tasksCreateNestedManyWithoutStaffInput = {
    create?: XOR<tasksCreateWithoutStaffInput, tasksUncheckedCreateWithoutStaffInput> | tasksCreateWithoutStaffInput[] | tasksUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutStaffInput | tasksCreateOrConnectWithoutStaffInput[]
    createMany?: tasksCreateManyStaffInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type meetingmemberUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<meetingmemberCreateWithoutStaffInput, meetingmemberUncheckedCreateWithoutStaffInput> | meetingmemberCreateWithoutStaffInput[] | meetingmemberUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: meetingmemberCreateOrConnectWithoutStaffInput | meetingmemberCreateOrConnectWithoutStaffInput[]
    createMany?: meetingmemberCreateManyStaffInputEnvelope
    connect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<tasksCreateWithoutStaffInput, tasksUncheckedCreateWithoutStaffInput> | tasksCreateWithoutStaffInput[] | tasksUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutStaffInput | tasksCreateOrConnectWithoutStaffInput[]
    createMany?: tasksCreateManyStaffInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type meetingmemberUpdateManyWithoutStaffNestedInput = {
    create?: XOR<meetingmemberCreateWithoutStaffInput, meetingmemberUncheckedCreateWithoutStaffInput> | meetingmemberCreateWithoutStaffInput[] | meetingmemberUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: meetingmemberCreateOrConnectWithoutStaffInput | meetingmemberCreateOrConnectWithoutStaffInput[]
    upsert?: meetingmemberUpsertWithWhereUniqueWithoutStaffInput | meetingmemberUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: meetingmemberCreateManyStaffInputEnvelope
    set?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    disconnect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    delete?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    connect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    update?: meetingmemberUpdateWithWhereUniqueWithoutStaffInput | meetingmemberUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: meetingmemberUpdateManyWithWhereWithoutStaffInput | meetingmemberUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: meetingmemberScalarWhereInput | meetingmemberScalarWhereInput[]
  }

  export type tasksUpdateManyWithoutStaffNestedInput = {
    create?: XOR<tasksCreateWithoutStaffInput, tasksUncheckedCreateWithoutStaffInput> | tasksCreateWithoutStaffInput[] | tasksUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutStaffInput | tasksCreateOrConnectWithoutStaffInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutStaffInput | tasksUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: tasksCreateManyStaffInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutStaffInput | tasksUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutStaffInput | tasksUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type meetingmemberUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<meetingmemberCreateWithoutStaffInput, meetingmemberUncheckedCreateWithoutStaffInput> | meetingmemberCreateWithoutStaffInput[] | meetingmemberUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: meetingmemberCreateOrConnectWithoutStaffInput | meetingmemberCreateOrConnectWithoutStaffInput[]
    upsert?: meetingmemberUpsertWithWhereUniqueWithoutStaffInput | meetingmemberUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: meetingmemberCreateManyStaffInputEnvelope
    set?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    disconnect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    delete?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    connect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    update?: meetingmemberUpdateWithWhereUniqueWithoutStaffInput | meetingmemberUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: meetingmemberUpdateManyWithWhereWithoutStaffInput | meetingmemberUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: meetingmemberScalarWhereInput | meetingmemberScalarWhereInput[]
  }

  export type tasksUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<tasksCreateWithoutStaffInput, tasksUncheckedCreateWithoutStaffInput> | tasksCreateWithoutStaffInput[] | tasksUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutStaffInput | tasksCreateOrConnectWithoutStaffInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutStaffInput | tasksUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: tasksCreateManyStaffInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutStaffInput | tasksUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutStaffInput | tasksUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type meetingsCreateNestedOneWithoutTasksInput = {
    create?: XOR<meetingsCreateWithoutTasksInput, meetingsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: meetingsCreateOrConnectWithoutTasksInput
    connect?: meetingsWhereUniqueInput
  }

  export type staffCreateNestedOneWithoutTasksInput = {
    create?: XOR<staffCreateWithoutTasksInput, staffUncheckedCreateWithoutTasksInput>
    connectOrCreate?: staffCreateOrConnectWithoutTasksInput
    connect?: staffWhereUniqueInput
  }

  export type meetingsUpdateOneWithoutTasksNestedInput = {
    create?: XOR<meetingsCreateWithoutTasksInput, meetingsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: meetingsCreateOrConnectWithoutTasksInput
    upsert?: meetingsUpsertWithoutTasksInput
    disconnect?: meetingsWhereInput | boolean
    delete?: meetingsWhereInput | boolean
    connect?: meetingsWhereUniqueInput
    update?: XOR<XOR<meetingsUpdateToOneWithWhereWithoutTasksInput, meetingsUpdateWithoutTasksInput>, meetingsUncheckedUpdateWithoutTasksInput>
  }

  export type staffUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<staffCreateWithoutTasksInput, staffUncheckedCreateWithoutTasksInput>
    connectOrCreate?: staffCreateOrConnectWithoutTasksInput
    upsert?: staffUpsertWithoutTasksInput
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutTasksInput, staffUpdateWithoutTasksInput>, staffUncheckedUpdateWithoutTasksInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type meetingsCreateWithoutMeetingmembersInput = {
    MeetingDate: Date | string
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    meetingtype: meetingtypeCreateNestedOneWithoutMeetingsInput
    tasks?: tasksCreateNestedManyWithoutMeetingInput
  }

  export type meetingsUncheckedCreateWithoutMeetingmembersInput = {
    MeetingID?: number
    MeetingDate: Date | string
    MeetingTypeID: number
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    tasks?: tasksUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type meetingsCreateOrConnectWithoutMeetingmembersInput = {
    where: meetingsWhereUniqueInput
    create: XOR<meetingsCreateWithoutMeetingmembersInput, meetingsUncheckedCreateWithoutMeetingmembersInput>
  }

  export type staffCreateWithoutMeetingmembersInput = {
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    Department?: string | null
    Role?: string | null
    Status?: string | null
    tasks?: tasksCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutMeetingmembersInput = {
    StaffID?: number
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    Department?: string | null
    Role?: string | null
    Status?: string | null
    tasks?: tasksUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutMeetingmembersInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutMeetingmembersInput, staffUncheckedCreateWithoutMeetingmembersInput>
  }

  export type meetingsUpsertWithoutMeetingmembersInput = {
    update: XOR<meetingsUpdateWithoutMeetingmembersInput, meetingsUncheckedUpdateWithoutMeetingmembersInput>
    create: XOR<meetingsCreateWithoutMeetingmembersInput, meetingsUncheckedCreateWithoutMeetingmembersInput>
    where?: meetingsWhereInput
  }

  export type meetingsUpdateToOneWithWhereWithoutMeetingmembersInput = {
    where?: meetingsWhereInput
    data: XOR<meetingsUpdateWithoutMeetingmembersInput, meetingsUncheckedUpdateWithoutMeetingmembersInput>
  }

  export type meetingsUpdateWithoutMeetingmembersInput = {
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingtype?: meetingtypeUpdateOneRequiredWithoutMeetingsNestedInput
    tasks?: tasksUpdateManyWithoutMeetingNestedInput
  }

  export type meetingsUncheckedUpdateWithoutMeetingmembersInput = {
    MeetingID?: IntFieldUpdateOperationsInput | number
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: tasksUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type staffUpsertWithoutMeetingmembersInput = {
    update: XOR<staffUpdateWithoutMeetingmembersInput, staffUncheckedUpdateWithoutMeetingmembersInput>
    create: XOR<staffCreateWithoutMeetingmembersInput, staffUncheckedCreateWithoutMeetingmembersInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutMeetingmembersInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutMeetingmembersInput, staffUncheckedUpdateWithoutMeetingmembersInput>
  }

  export type staffUpdateWithoutMeetingmembersInput = {
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: tasksUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutMeetingmembersInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: tasksUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type meetingtypeCreateWithoutMeetingsInput = {
    MeetingTypeName: string
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type meetingtypeUncheckedCreateWithoutMeetingsInput = {
    MeetingTypeID?: number
    MeetingTypeName: string
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type meetingtypeCreateOrConnectWithoutMeetingsInput = {
    where: meetingtypeWhereUniqueInput
    create: XOR<meetingtypeCreateWithoutMeetingsInput, meetingtypeUncheckedCreateWithoutMeetingsInput>
  }

  export type meetingmemberCreateWithoutMeetingInput = {
    IsPresent?: boolean | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    staff: staffCreateNestedOneWithoutMeetingmembersInput
  }

  export type meetingmemberUncheckedCreateWithoutMeetingInput = {
    MeetingMemberID?: number
    StaffID: number
    IsPresent?: boolean | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type meetingmemberCreateOrConnectWithoutMeetingInput = {
    where: meetingmemberWhereUniqueInput
    create: XOR<meetingmemberCreateWithoutMeetingInput, meetingmemberUncheckedCreateWithoutMeetingInput>
  }

  export type meetingmemberCreateManyMeetingInputEnvelope = {
    data: meetingmemberCreateManyMeetingInput | meetingmemberCreateManyMeetingInput[]
    skipDuplicates?: boolean
  }

  export type tasksCreateWithoutMeetingInput = {
    TaskDescription: string
    AssignedBy?: string | null
    Deadline?: Date | string | null
    Status?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    staff: staffCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutMeetingInput = {
    TaskID?: number
    TaskDescription: string
    AssignedBy?: string | null
    Deadline?: Date | string | null
    Status?: string | null
    StaffID: number
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type tasksCreateOrConnectWithoutMeetingInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutMeetingInput, tasksUncheckedCreateWithoutMeetingInput>
  }

  export type tasksCreateManyMeetingInputEnvelope = {
    data: tasksCreateManyMeetingInput | tasksCreateManyMeetingInput[]
    skipDuplicates?: boolean
  }

  export type meetingtypeUpsertWithoutMeetingsInput = {
    update: XOR<meetingtypeUpdateWithoutMeetingsInput, meetingtypeUncheckedUpdateWithoutMeetingsInput>
    create: XOR<meetingtypeCreateWithoutMeetingsInput, meetingtypeUncheckedCreateWithoutMeetingsInput>
    where?: meetingtypeWhereInput
  }

  export type meetingtypeUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: meetingtypeWhereInput
    data: XOR<meetingtypeUpdateWithoutMeetingsInput, meetingtypeUncheckedUpdateWithoutMeetingsInput>
  }

  export type meetingtypeUpdateWithoutMeetingsInput = {
    MeetingTypeName?: StringFieldUpdateOperationsInput | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingtypeUncheckedUpdateWithoutMeetingsInput = {
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    MeetingTypeName?: StringFieldUpdateOperationsInput | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingmemberUpsertWithWhereUniqueWithoutMeetingInput = {
    where: meetingmemberWhereUniqueInput
    update: XOR<meetingmemberUpdateWithoutMeetingInput, meetingmemberUncheckedUpdateWithoutMeetingInput>
    create: XOR<meetingmemberCreateWithoutMeetingInput, meetingmemberUncheckedCreateWithoutMeetingInput>
  }

  export type meetingmemberUpdateWithWhereUniqueWithoutMeetingInput = {
    where: meetingmemberWhereUniqueInput
    data: XOR<meetingmemberUpdateWithoutMeetingInput, meetingmemberUncheckedUpdateWithoutMeetingInput>
  }

  export type meetingmemberUpdateManyWithWhereWithoutMeetingInput = {
    where: meetingmemberScalarWhereInput
    data: XOR<meetingmemberUpdateManyMutationInput, meetingmemberUncheckedUpdateManyWithoutMeetingInput>
  }

  export type meetingmemberScalarWhereInput = {
    AND?: meetingmemberScalarWhereInput | meetingmemberScalarWhereInput[]
    OR?: meetingmemberScalarWhereInput[]
    NOT?: meetingmemberScalarWhereInput | meetingmemberScalarWhereInput[]
    MeetingMemberID?: IntFilter<"meetingmember"> | number
    MeetingID?: IntFilter<"meetingmember"> | number
    StaffID?: IntFilter<"meetingmember"> | number
    IsPresent?: BoolNullableFilter<"meetingmember"> | boolean | null
    Remarks?: StringNullableFilter<"meetingmember"> | string | null
    Created?: DateTimeNullableFilter<"meetingmember"> | Date | string | null
    Modified?: DateTimeNullableFilter<"meetingmember"> | Date | string | null
  }

  export type tasksUpsertWithWhereUniqueWithoutMeetingInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutMeetingInput, tasksUncheckedUpdateWithoutMeetingInput>
    create: XOR<tasksCreateWithoutMeetingInput, tasksUncheckedCreateWithoutMeetingInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutMeetingInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutMeetingInput, tasksUncheckedUpdateWithoutMeetingInput>
  }

  export type tasksUpdateManyWithWhereWithoutMeetingInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutMeetingInput>
  }

  export type tasksScalarWhereInput = {
    AND?: tasksScalarWhereInput | tasksScalarWhereInput[]
    OR?: tasksScalarWhereInput[]
    NOT?: tasksScalarWhereInput | tasksScalarWhereInput[]
    TaskID?: IntFilter<"tasks"> | number
    TaskDescription?: StringFilter<"tasks"> | string
    AssignedBy?: StringNullableFilter<"tasks"> | string | null
    Deadline?: DateTimeNullableFilter<"tasks"> | Date | string | null
    Status?: StringNullableFilter<"tasks"> | string | null
    StaffID?: IntFilter<"tasks"> | number
    MeetingID?: IntNullableFilter<"tasks"> | number | null
    Created?: DateTimeNullableFilter<"tasks"> | Date | string | null
    Modified?: DateTimeNullableFilter<"tasks"> | Date | string | null
  }

  export type meetingsCreateWithoutMeetingtypeInput = {
    MeetingDate: Date | string
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    meetingmembers?: meetingmemberCreateNestedManyWithoutMeetingInput
    tasks?: tasksCreateNestedManyWithoutMeetingInput
  }

  export type meetingsUncheckedCreateWithoutMeetingtypeInput = {
    MeetingID?: number
    MeetingDate: Date | string
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    meetingmembers?: meetingmemberUncheckedCreateNestedManyWithoutMeetingInput
    tasks?: tasksUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type meetingsCreateOrConnectWithoutMeetingtypeInput = {
    where: meetingsWhereUniqueInput
    create: XOR<meetingsCreateWithoutMeetingtypeInput, meetingsUncheckedCreateWithoutMeetingtypeInput>
  }

  export type meetingsCreateManyMeetingtypeInputEnvelope = {
    data: meetingsCreateManyMeetingtypeInput | meetingsCreateManyMeetingtypeInput[]
    skipDuplicates?: boolean
  }

  export type meetingsUpsertWithWhereUniqueWithoutMeetingtypeInput = {
    where: meetingsWhereUniqueInput
    update: XOR<meetingsUpdateWithoutMeetingtypeInput, meetingsUncheckedUpdateWithoutMeetingtypeInput>
    create: XOR<meetingsCreateWithoutMeetingtypeInput, meetingsUncheckedCreateWithoutMeetingtypeInput>
  }

  export type meetingsUpdateWithWhereUniqueWithoutMeetingtypeInput = {
    where: meetingsWhereUniqueInput
    data: XOR<meetingsUpdateWithoutMeetingtypeInput, meetingsUncheckedUpdateWithoutMeetingtypeInput>
  }

  export type meetingsUpdateManyWithWhereWithoutMeetingtypeInput = {
    where: meetingsScalarWhereInput
    data: XOR<meetingsUpdateManyMutationInput, meetingsUncheckedUpdateManyWithoutMeetingtypeInput>
  }

  export type meetingsScalarWhereInput = {
    AND?: meetingsScalarWhereInput | meetingsScalarWhereInput[]
    OR?: meetingsScalarWhereInput[]
    NOT?: meetingsScalarWhereInput | meetingsScalarWhereInput[]
    MeetingID?: IntFilter<"meetings"> | number
    MeetingDate?: DateTimeFilter<"meetings"> | Date | string
    MeetingTypeID?: IntFilter<"meetings"> | number
    MeetingDescription?: StringNullableFilter<"meetings"> | string | null
    DocumentPath?: StringNullableFilter<"meetings"> | string | null
    Created?: DateTimeNullableFilter<"meetings"> | Date | string | null
    Modified?: DateTimeNullableFilter<"meetings"> | Date | string | null
    IsCancelled?: BoolNullableFilter<"meetings"> | boolean | null
    CancellationDateTime?: DateTimeNullableFilter<"meetings"> | Date | string | null
    CancellationReason?: StringNullableFilter<"meetings"> | string | null
  }

  export type meetingmemberCreateWithoutStaffInput = {
    IsPresent?: boolean | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    meeting: meetingsCreateNestedOneWithoutMeetingmembersInput
  }

  export type meetingmemberUncheckedCreateWithoutStaffInput = {
    MeetingMemberID?: number
    MeetingID: number
    IsPresent?: boolean | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type meetingmemberCreateOrConnectWithoutStaffInput = {
    where: meetingmemberWhereUniqueInput
    create: XOR<meetingmemberCreateWithoutStaffInput, meetingmemberUncheckedCreateWithoutStaffInput>
  }

  export type meetingmemberCreateManyStaffInputEnvelope = {
    data: meetingmemberCreateManyStaffInput | meetingmemberCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type tasksCreateWithoutStaffInput = {
    TaskDescription: string
    AssignedBy?: string | null
    Deadline?: Date | string | null
    Status?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    meeting?: meetingsCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutStaffInput = {
    TaskID?: number
    TaskDescription: string
    AssignedBy?: string | null
    Deadline?: Date | string | null
    Status?: string | null
    MeetingID?: number | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type tasksCreateOrConnectWithoutStaffInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutStaffInput, tasksUncheckedCreateWithoutStaffInput>
  }

  export type tasksCreateManyStaffInputEnvelope = {
    data: tasksCreateManyStaffInput | tasksCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type meetingmemberUpsertWithWhereUniqueWithoutStaffInput = {
    where: meetingmemberWhereUniqueInput
    update: XOR<meetingmemberUpdateWithoutStaffInput, meetingmemberUncheckedUpdateWithoutStaffInput>
    create: XOR<meetingmemberCreateWithoutStaffInput, meetingmemberUncheckedCreateWithoutStaffInput>
  }

  export type meetingmemberUpdateWithWhereUniqueWithoutStaffInput = {
    where: meetingmemberWhereUniqueInput
    data: XOR<meetingmemberUpdateWithoutStaffInput, meetingmemberUncheckedUpdateWithoutStaffInput>
  }

  export type meetingmemberUpdateManyWithWhereWithoutStaffInput = {
    where: meetingmemberScalarWhereInput
    data: XOR<meetingmemberUpdateManyMutationInput, meetingmemberUncheckedUpdateManyWithoutStaffInput>
  }

  export type tasksUpsertWithWhereUniqueWithoutStaffInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutStaffInput, tasksUncheckedUpdateWithoutStaffInput>
    create: XOR<tasksCreateWithoutStaffInput, tasksUncheckedCreateWithoutStaffInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutStaffInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutStaffInput, tasksUncheckedUpdateWithoutStaffInput>
  }

  export type tasksUpdateManyWithWhereWithoutStaffInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutStaffInput>
  }

  export type meetingsCreateWithoutTasksInput = {
    MeetingDate: Date | string
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    meetingtype: meetingtypeCreateNestedOneWithoutMeetingsInput
    meetingmembers?: meetingmemberCreateNestedManyWithoutMeetingInput
  }

  export type meetingsUncheckedCreateWithoutTasksInput = {
    MeetingID?: number
    MeetingDate: Date | string
    MeetingTypeID: number
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    meetingmembers?: meetingmemberUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type meetingsCreateOrConnectWithoutTasksInput = {
    where: meetingsWhereUniqueInput
    create: XOR<meetingsCreateWithoutTasksInput, meetingsUncheckedCreateWithoutTasksInput>
  }

  export type staffCreateWithoutTasksInput = {
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    Department?: string | null
    Role?: string | null
    Status?: string | null
    meetingmembers?: meetingmemberCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutTasksInput = {
    StaffID?: number
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    Department?: string | null
    Role?: string | null
    Status?: string | null
    meetingmembers?: meetingmemberUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutTasksInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutTasksInput, staffUncheckedCreateWithoutTasksInput>
  }

  export type meetingsUpsertWithoutTasksInput = {
    update: XOR<meetingsUpdateWithoutTasksInput, meetingsUncheckedUpdateWithoutTasksInput>
    create: XOR<meetingsCreateWithoutTasksInput, meetingsUncheckedCreateWithoutTasksInput>
    where?: meetingsWhereInput
  }

  export type meetingsUpdateToOneWithWhereWithoutTasksInput = {
    where?: meetingsWhereInput
    data: XOR<meetingsUpdateWithoutTasksInput, meetingsUncheckedUpdateWithoutTasksInput>
  }

  export type meetingsUpdateWithoutTasksInput = {
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingtype?: meetingtypeUpdateOneRequiredWithoutMeetingsNestedInput
    meetingmembers?: meetingmemberUpdateManyWithoutMeetingNestedInput
  }

  export type meetingsUncheckedUpdateWithoutTasksInput = {
    MeetingID?: IntFieldUpdateOperationsInput | number
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingmembers?: meetingmemberUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type staffUpsertWithoutTasksInput = {
    update: XOR<staffUpdateWithoutTasksInput, staffUncheckedUpdateWithoutTasksInput>
    create: XOR<staffCreateWithoutTasksInput, staffUncheckedCreateWithoutTasksInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutTasksInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutTasksInput, staffUncheckedUpdateWithoutTasksInput>
  }

  export type staffUpdateWithoutTasksInput = {
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    meetingmembers?: meetingmemberUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutTasksInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    meetingmembers?: meetingmemberUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type meetingmemberCreateManyMeetingInput = {
    MeetingMemberID?: number
    StaffID: number
    IsPresent?: boolean | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type tasksCreateManyMeetingInput = {
    TaskID?: number
    TaskDescription: string
    AssignedBy?: string | null
    Deadline?: Date | string | null
    Status?: string | null
    StaffID: number
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type meetingmemberUpdateWithoutMeetingInput = {
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff?: staffUpdateOneRequiredWithoutMeetingmembersNestedInput
  }

  export type meetingmemberUncheckedUpdateWithoutMeetingInput = {
    MeetingMemberID?: IntFieldUpdateOperationsInput | number
    StaffID?: IntFieldUpdateOperationsInput | number
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingmemberUncheckedUpdateManyWithoutMeetingInput = {
    MeetingMemberID?: IntFieldUpdateOperationsInput | number
    StaffID?: IntFieldUpdateOperationsInput | number
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksUpdateWithoutMeetingInput = {
    TaskDescription?: StringFieldUpdateOperationsInput | string
    AssignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff?: staffUpdateOneRequiredWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutMeetingInput = {
    TaskID?: IntFieldUpdateOperationsInput | number
    TaskDescription?: StringFieldUpdateOperationsInput | string
    AssignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    StaffID?: IntFieldUpdateOperationsInput | number
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksUncheckedUpdateManyWithoutMeetingInput = {
    TaskID?: IntFieldUpdateOperationsInput | number
    TaskDescription?: StringFieldUpdateOperationsInput | string
    AssignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    StaffID?: IntFieldUpdateOperationsInput | number
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingsCreateManyMeetingtypeInput = {
    MeetingID?: number
    MeetingDate: Date | string
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
  }

  export type meetingsUpdateWithoutMeetingtypeInput = {
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingmembers?: meetingmemberUpdateManyWithoutMeetingNestedInput
    tasks?: tasksUpdateManyWithoutMeetingNestedInput
  }

  export type meetingsUncheckedUpdateWithoutMeetingtypeInput = {
    MeetingID?: IntFieldUpdateOperationsInput | number
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingmembers?: meetingmemberUncheckedUpdateManyWithoutMeetingNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type meetingsUncheckedUpdateManyWithoutMeetingtypeInput = {
    MeetingID?: IntFieldUpdateOperationsInput | number
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type meetingmemberCreateManyStaffInput = {
    MeetingMemberID?: number
    MeetingID: number
    IsPresent?: boolean | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type tasksCreateManyStaffInput = {
    TaskID?: number
    TaskDescription: string
    AssignedBy?: string | null
    Deadline?: Date | string | null
    Status?: string | null
    MeetingID?: number | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type meetingmemberUpdateWithoutStaffInput = {
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meeting?: meetingsUpdateOneRequiredWithoutMeetingmembersNestedInput
  }

  export type meetingmemberUncheckedUpdateWithoutStaffInput = {
    MeetingMemberID?: IntFieldUpdateOperationsInput | number
    MeetingID?: IntFieldUpdateOperationsInput | number
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingmemberUncheckedUpdateManyWithoutStaffInput = {
    MeetingMemberID?: IntFieldUpdateOperationsInput | number
    MeetingID?: IntFieldUpdateOperationsInput | number
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksUpdateWithoutStaffInput = {
    TaskDescription?: StringFieldUpdateOperationsInput | string
    AssignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meeting?: meetingsUpdateOneWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutStaffInput = {
    TaskID?: IntFieldUpdateOperationsInput | number
    TaskDescription?: StringFieldUpdateOperationsInput | string
    AssignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingID?: NullableIntFieldUpdateOperationsInput | number | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksUncheckedUpdateManyWithoutStaffInput = {
    TaskID?: IntFieldUpdateOperationsInput | number
    TaskDescription?: StringFieldUpdateOperationsInput | string
    AssignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingID?: NullableIntFieldUpdateOperationsInput | number | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}