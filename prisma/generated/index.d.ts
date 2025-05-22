/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Specialist
 *
 */
export type Specialist = $Result.DefaultSelection<Prisma.$SpecialistPayload>;
/**
 * Model Client
 *
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>;
/**
 * Model Appointment
 *
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>;
/**
 * Model AuditLog
 *
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
    client: "client";
    specialist: "specialist";
    scheduler: "scheduler";
    admin: "admin";
  };

  export type Role = (typeof Role)[keyof typeof Role];

  export const AppointmentStatus: {
    pending: "pending";
    confirmed: "confirmed";
    cancelled: "cancelled";
    completed: "completed";
    rescheduled: "rescheduled";
    expired: "expired";
  };

  export type AppointmentStatus =
    (typeof AppointmentStatus)[keyof typeof AppointmentStatus];

  export const ActionType: {
    create: "create";
    reschedule: "reschedule";
    cancel: "cancel";
    validation_error: "validation_error";
  };

  export type ActionType = (typeof ActionType)[keyof typeof ActionType];
}

export type Role = $Enums.Role;

export const Role: typeof $Enums.Role;

export type AppointmentStatus = $Enums.AppointmentStatus;

export const AppointmentStatus: typeof $Enums.AppointmentStatus;

export type ActionType = $Enums.ActionType;

export const ActionType: typeof $Enums.ActionType;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specialist`: Exposes CRUD operations for the **Specialist** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Specialists
   * const specialists = await prisma.specialist.findMany()
   * ```
   */
  get specialist(): Prisma.SpecialistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
   * ```
   */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Appointments
   * const appointments = await prisma.appointment.findMany()
   * ```
   */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more AuditLogs
   * const auditLogs = await prisma.auditLog.findMany()
   * ```
   */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: "User";
    Specialist: "Specialist";
    Client: "Client";
    Appointment: "Appointment";
    AuditLog: "AuditLog";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: "user" | "specialist" | "client" | "appointment" | "auditLog";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Specialist: {
        payload: Prisma.$SpecialistPayload<ExtArgs>;
        fields: Prisma.SpecialistFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SpecialistFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SpecialistFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>;
          };
          findFirst: {
            args: Prisma.SpecialistFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SpecialistFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>;
          };
          findMany: {
            args: Prisma.SpecialistFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>[];
          };
          create: {
            args: Prisma.SpecialistCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>;
          };
          createMany: {
            args: Prisma.SpecialistCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.SpecialistDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>;
          };
          update: {
            args: Prisma.SpecialistUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>;
          };
          deleteMany: {
            args: Prisma.SpecialistDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SpecialistUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.SpecialistUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>;
          };
          aggregate: {
            args: Prisma.SpecialistAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSpecialist>;
          };
          groupBy: {
            args: Prisma.SpecialistGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SpecialistGroupByOutputType>[];
          };
          count: {
            args: Prisma.SpecialistCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<SpecialistCountAggregateOutputType>
              | number;
          };
        };
      };
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>;
        fields: Prisma.ClientFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>;
          };
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>;
          };
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[];
          };
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>;
          };
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>;
          };
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>;
          };
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>;
          };
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateClient>;
          };
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ClientGroupByOutputType>[];
          };
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>;
            result: $Utils.Optional<ClientCountAggregateOutputType> | number;
          };
        };
      };
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>;
        fields: Prisma.AppointmentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>;
          };
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>;
          };
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[];
          };
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>;
          };
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>;
          };
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>;
          };
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>;
          };
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAppointment>;
          };
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AppointmentGroupByOutputType>[];
          };
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<AppointmentCountAggregateOutputType>
              | number;
          };
        };
      };
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>;
        fields: Prisma.AuditLogFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
          };
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAuditLog>;
          };
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AuditLogGroupByOutputType>[];
          };
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>;
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
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
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    specialist?: SpecialistOmit;
    client?: ClientOmit;
    appointment?: AppointmentOmit;
    auditLog?: AuditLogOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    scheduler: number;
    auditLogs: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    scheduler?: boolean | UserCountOutputTypeCountSchedulerArgs;
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSchedulerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AppointmentWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AuditLogWhereInput;
  };

  /**
   * Count Type SpecialistCountOutputType
   */

  export type SpecialistCountOutputType = {
    appointments: number;
  };

  export type SpecialistCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    appointments?: boolean | SpecialistCountOutputTypeCountAppointmentsArgs;
  };

  // Custom InputTypes
  /**
   * SpecialistCountOutputType without action
   */
  export type SpecialistCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SpecialistCountOutputType
     */
    select?: SpecialistCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * SpecialistCountOutputType without action
   */
  export type SpecialistCountOutputTypeCountAppointmentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AppointmentWhereInput;
  };

  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    appointments: number;
  };

  export type ClientCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    appointments?: boolean | ClientCountOutputTypeCountAppointmentsArgs;
  };

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountAppointmentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AppointmentWhereInput;
  };

  /**
   * Count Type AppointmentCountOutputType
   */

  export type AppointmentCountOutputType = {
    rescheduled_to: number;
  };

  export type AppointmentCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    rescheduled_to?:
      | boolean
      | AppointmentCountOutputTypeCountRescheduled_toArgs;
  };

  // Custom InputTypes
  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppointmentCountOutputType
     */
    select?: AppointmentCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountRescheduled_toArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AppointmentWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    role: $Enums.Role | null;
    priority: boolean | null;
    active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    role: $Enums.Role | null;
    priority: boolean | null;
    active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    password: number;
    role: number;
    priority: number;
    active: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    role?: true;
    priority?: true;
    active?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    role?: true;
    priority?: true;
    active?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    role?: true;
    priority?: true;
    active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    priority: boolean;
    active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      role?: boolean;
      priority?: boolean;
      active?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      specialist?: boolean | User$specialistArgs<ExtArgs>;
      client?: boolean | User$clientArgs<ExtArgs>;
      scheduler?: boolean | User$schedulerArgs<ExtArgs>;
      auditLogs?: boolean | User$auditLogsArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    priority?: boolean;
    active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "name"
    | "email"
    | "password"
    | "role"
    | "priority"
    | "active"
    | "created_at"
    | "updated_at",
    ExtArgs["result"]["user"]
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    specialist?: boolean | User$specialistArgs<ExtArgs>;
    client?: boolean | User$clientArgs<ExtArgs>;
    scheduler?: boolean | User$schedulerArgs<ExtArgs>;
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User";
    objects: {
      specialist: Prisma.$SpecialistPayload<ExtArgs> | null;
      client: Prisma.$ClientPayload<ExtArgs> | null;
      scheduler: Prisma.$AppointmentPayload<ExtArgs>[];
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        email: string;
        password: string;
        role: $Enums.Role;
        priority: boolean;
        active: boolean;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    specialist<T extends User$specialistArgs<ExtArgs> = {}>(
      args?: Subset<T, User$specialistArgs<ExtArgs>>,
    ): Prisma__SpecialistClient<
      $Result.GetResult<
        Prisma.$SpecialistPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    client<T extends User$clientArgs<ExtArgs> = {}>(
      args?: Subset<T, User$clientArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    scheduler<T extends User$schedulerArgs<ExtArgs> = {}>(
      args?: Subset<T, User$schedulerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AppointmentPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$auditLogsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AuditLogPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "String">;
    readonly name: FieldRef<"User", "String">;
    readonly email: FieldRef<"User", "String">;
    readonly password: FieldRef<"User", "String">;
    readonly role: FieldRef<"User", "Role">;
    readonly priority: FieldRef<"User", "Boolean">;
    readonly active: FieldRef<"User", "Boolean">;
    readonly created_at: FieldRef<"User", "DateTime">;
    readonly updated_at: FieldRef<"User", "DateTime">;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.specialist
   */
  export type User$specialistArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null;
    where?: SpecialistWhereInput;
  };

  /**
   * User.client
   */
  export type User$clientArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    where?: ClientWhereInput;
  };

  /**
   * User.scheduler
   */
  export type User$schedulerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null;
    where?: AppointmentWhereInput;
    orderBy?:
      | AppointmentOrderByWithRelationInput
      | AppointmentOrderByWithRelationInput[];
    cursor?: AppointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    where?: AuditLogWhereInput;
    orderBy?:
      | AuditLogOrderByWithRelationInput
      | AuditLogOrderByWithRelationInput[];
    cursor?: AuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Specialist
   */

  export type AggregateSpecialist = {
    _count: SpecialistCountAggregateOutputType | null;
    _avg: SpecialistAvgAggregateOutputType | null;
    _sum: SpecialistSumAggregateOutputType | null;
    _min: SpecialistMinAggregateOutputType | null;
    _max: SpecialistMaxAggregateOutputType | null;
  };

  export type SpecialistAvgAggregateOutputType = {
    daily_limit: number | null;
    min_interval_minutes: number | null;
  };

  export type SpecialistSumAggregateOutputType = {
    daily_limit: number | null;
    min_interval_minutes: number | null;
  };

  export type SpecialistMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    specialty: string | null;
    daily_limit: number | null;
    min_interval_minutes: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SpecialistMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    specialty: string | null;
    daily_limit: number | null;
    min_interval_minutes: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SpecialistCountAggregateOutputType = {
    id: number;
    user_id: number;
    specialty: number;
    daily_limit: number;
    min_interval_minutes: number;
    availability: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type SpecialistAvgAggregateInputType = {
    daily_limit?: true;
    min_interval_minutes?: true;
  };

  export type SpecialistSumAggregateInputType = {
    daily_limit?: true;
    min_interval_minutes?: true;
  };

  export type SpecialistMinAggregateInputType = {
    id?: true;
    user_id?: true;
    specialty?: true;
    daily_limit?: true;
    min_interval_minutes?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SpecialistMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    specialty?: true;
    daily_limit?: true;
    min_interval_minutes?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SpecialistCountAggregateInputType = {
    id?: true;
    user_id?: true;
    specialty?: true;
    daily_limit?: true;
    min_interval_minutes?: true;
    availability?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type SpecialistAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Specialist to aggregate.
     */
    where?: SpecialistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Specialists to fetch.
     */
    orderBy?:
      | SpecialistOrderByWithRelationInput
      | SpecialistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SpecialistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Specialists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Specialists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Specialists
     **/
    _count?: true | SpecialistCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SpecialistAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SpecialistSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SpecialistMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SpecialistMaxAggregateInputType;
  };

  export type GetSpecialistAggregateType<T extends SpecialistAggregateArgs> = {
    [P in keyof T & keyof AggregateSpecialist]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialist[P]>
      : GetScalarType<T[P], AggregateSpecialist[P]>;
  };

  export type SpecialistGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SpecialistWhereInput;
    orderBy?:
      | SpecialistOrderByWithAggregationInput
      | SpecialistOrderByWithAggregationInput[];
    by: SpecialistScalarFieldEnum[] | SpecialistScalarFieldEnum;
    having?: SpecialistScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SpecialistCountAggregateInputType | true;
    _avg?: SpecialistAvgAggregateInputType;
    _sum?: SpecialistSumAggregateInputType;
    _min?: SpecialistMinAggregateInputType;
    _max?: SpecialistMaxAggregateInputType;
  };

  export type SpecialistGroupByOutputType = {
    id: string;
    user_id: string;
    specialty: string;
    daily_limit: number;
    min_interval_minutes: number;
    availability: JsonValue;
    created_at: Date;
    updated_at: Date;
    _count: SpecialistCountAggregateOutputType | null;
    _avg: SpecialistAvgAggregateOutputType | null;
    _sum: SpecialistSumAggregateOutputType | null;
    _min: SpecialistMinAggregateOutputType | null;
    _max: SpecialistMaxAggregateOutputType | null;
  };

  type GetSpecialistGroupByPayload<T extends SpecialistGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SpecialistGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof SpecialistGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialistGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialistGroupByOutputType[P]>;
        }
      >
    >;

  export type SpecialistSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      specialty?: boolean;
      daily_limit?: boolean;
      min_interval_minutes?: boolean;
      availability?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      appointments?: boolean | Specialist$appointmentsArgs<ExtArgs>;
      _count?: boolean | SpecialistCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["specialist"]
  >;

  export type SpecialistSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    specialty?: boolean;
    daily_limit?: boolean;
    min_interval_minutes?: boolean;
    availability?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type SpecialistOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "user_id"
    | "specialty"
    | "daily_limit"
    | "min_interval_minutes"
    | "availability"
    | "created_at"
    | "updated_at",
    ExtArgs["result"]["specialist"]
  >;
  export type SpecialistInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    appointments?: boolean | Specialist$appointmentsArgs<ExtArgs>;
    _count?: boolean | SpecialistCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $SpecialistPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Specialist";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      appointments: Prisma.$AppointmentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        specialty: string;
        daily_limit: number;
        min_interval_minutes: number;
        availability: Prisma.JsonValue;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs["result"]["specialist"]
    >;
    composites: {};
  };

  type SpecialistGetPayload<
    S extends boolean | null | undefined | SpecialistDefaultArgs,
  > = $Result.GetResult<Prisma.$SpecialistPayload, S>;

  type SpecialistCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    SpecialistFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: SpecialistCountAggregateInputType | true;
  };

  export interface SpecialistDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Specialist"];
      meta: { name: "Specialist" };
    };
    /**
     * Find zero or one Specialist that matches the filter.
     * @param {SpecialistFindUniqueArgs} args - Arguments to find a Specialist
     * @example
     * // Get one Specialist
     * const specialist = await prisma.specialist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialistFindUniqueArgs>(
      args: SelectSubset<T, SpecialistFindUniqueArgs<ExtArgs>>,
    ): Prisma__SpecialistClient<
      $Result.GetResult<
        Prisma.$SpecialistPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Specialist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecialistFindUniqueOrThrowArgs} args - Arguments to find a Specialist
     * @example
     * // Get one Specialist
     * const specialist = await prisma.specialist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialistFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SpecialistFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__SpecialistClient<
      $Result.GetResult<
        Prisma.$SpecialistPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Specialist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistFindFirstArgs} args - Arguments to find a Specialist
     * @example
     * // Get one Specialist
     * const specialist = await prisma.specialist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialistFindFirstArgs>(
      args?: SelectSubset<T, SpecialistFindFirstArgs<ExtArgs>>,
    ): Prisma__SpecialistClient<
      $Result.GetResult<
        Prisma.$SpecialistPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Specialist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistFindFirstOrThrowArgs} args - Arguments to find a Specialist
     * @example
     * // Get one Specialist
     * const specialist = await prisma.specialist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialistFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SpecialistFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__SpecialistClient<
      $Result.GetResult<
        Prisma.$SpecialistPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Specialists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specialists
     * const specialists = await prisma.specialist.findMany()
     *
     * // Get first 10 Specialists
     * const specialists = await prisma.specialist.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const specialistWithIdOnly = await prisma.specialist.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SpecialistFindManyArgs>(
      args?: SelectSubset<T, SpecialistFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SpecialistPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Specialist.
     * @param {SpecialistCreateArgs} args - Arguments to create a Specialist.
     * @example
     * // Create one Specialist
     * const Specialist = await prisma.specialist.create({
     *   data: {
     *     // ... data to create a Specialist
     *   }
     * })
     *
     */
    create<T extends SpecialistCreateArgs>(
      args: SelectSubset<T, SpecialistCreateArgs<ExtArgs>>,
    ): Prisma__SpecialistClient<
      $Result.GetResult<
        Prisma.$SpecialistPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Specialists.
     * @param {SpecialistCreateManyArgs} args - Arguments to create many Specialists.
     * @example
     * // Create many Specialists
     * const specialist = await prisma.specialist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SpecialistCreateManyArgs>(
      args?: SelectSubset<T, SpecialistCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Specialist.
     * @param {SpecialistDeleteArgs} args - Arguments to delete one Specialist.
     * @example
     * // Delete one Specialist
     * const Specialist = await prisma.specialist.delete({
     *   where: {
     *     // ... filter to delete one Specialist
     *   }
     * })
     *
     */
    delete<T extends SpecialistDeleteArgs>(
      args: SelectSubset<T, SpecialistDeleteArgs<ExtArgs>>,
    ): Prisma__SpecialistClient<
      $Result.GetResult<
        Prisma.$SpecialistPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Specialist.
     * @param {SpecialistUpdateArgs} args - Arguments to update one Specialist.
     * @example
     * // Update one Specialist
     * const specialist = await prisma.specialist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SpecialistUpdateArgs>(
      args: SelectSubset<T, SpecialistUpdateArgs<ExtArgs>>,
    ): Prisma__SpecialistClient<
      $Result.GetResult<
        Prisma.$SpecialistPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Specialists.
     * @param {SpecialistDeleteManyArgs} args - Arguments to filter Specialists to delete.
     * @example
     * // Delete a few Specialists
     * const { count } = await prisma.specialist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SpecialistDeleteManyArgs>(
      args?: SelectSubset<T, SpecialistDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Specialists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specialists
     * const specialist = await prisma.specialist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SpecialistUpdateManyArgs>(
      args: SelectSubset<T, SpecialistUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Specialist.
     * @param {SpecialistUpsertArgs} args - Arguments to update or create a Specialist.
     * @example
     * // Update or create a Specialist
     * const specialist = await prisma.specialist.upsert({
     *   create: {
     *     // ... data to create a Specialist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specialist we want to update
     *   }
     * })
     */
    upsert<T extends SpecialistUpsertArgs>(
      args: SelectSubset<T, SpecialistUpsertArgs<ExtArgs>>,
    ): Prisma__SpecialistClient<
      $Result.GetResult<
        Prisma.$SpecialistPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Specialists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistCountArgs} args - Arguments to filter Specialists to count.
     * @example
     * // Count the number of Specialists
     * const count = await prisma.specialist.count({
     *   where: {
     *     // ... the filter for the Specialists we want to count
     *   }
     * })
     **/
    count<T extends SpecialistCountArgs>(
      args?: Subset<T, SpecialistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], SpecialistCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Specialist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpecialistAggregateArgs>(
      args: Subset<T, SpecialistAggregateArgs>,
    ): Prisma.PrismaPromise<GetSpecialistAggregateType<T>>;

    /**
     * Group by Specialist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistGroupByArgs} args - Group by arguments.
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
      T extends SpecialistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialistGroupByArgs["orderBy"] }
        : { orderBy?: SpecialistGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SpecialistGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetSpecialistGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Specialist model
     */
    readonly fields: SpecialistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Specialist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialistClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    appointments<T extends Specialist$appointmentsArgs<ExtArgs> = {}>(
      args?: Subset<T, Specialist$appointmentsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AppointmentPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Specialist model
   */
  interface SpecialistFieldRefs {
    readonly id: FieldRef<"Specialist", "String">;
    readonly user_id: FieldRef<"Specialist", "String">;
    readonly specialty: FieldRef<"Specialist", "String">;
    readonly daily_limit: FieldRef<"Specialist", "Int">;
    readonly min_interval_minutes: FieldRef<"Specialist", "Int">;
    readonly availability: FieldRef<"Specialist", "Json">;
    readonly created_at: FieldRef<"Specialist", "DateTime">;
    readonly updated_at: FieldRef<"Specialist", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Specialist findUnique
   */
  export type SpecialistFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null;
    /**
     * Filter, which Specialist to fetch.
     */
    where: SpecialistWhereUniqueInput;
  };

  /**
   * Specialist findUniqueOrThrow
   */
  export type SpecialistFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null;
    /**
     * Filter, which Specialist to fetch.
     */
    where: SpecialistWhereUniqueInput;
  };

  /**
   * Specialist findFirst
   */
  export type SpecialistFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null;
    /**
     * Filter, which Specialist to fetch.
     */
    where?: SpecialistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Specialists to fetch.
     */
    orderBy?:
      | SpecialistOrderByWithRelationInput
      | SpecialistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Specialists.
     */
    cursor?: SpecialistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Specialists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Specialists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Specialists.
     */
    distinct?: SpecialistScalarFieldEnum | SpecialistScalarFieldEnum[];
  };

  /**
   * Specialist findFirstOrThrow
   */
  export type SpecialistFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null;
    /**
     * Filter, which Specialist to fetch.
     */
    where?: SpecialistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Specialists to fetch.
     */
    orderBy?:
      | SpecialistOrderByWithRelationInput
      | SpecialistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Specialists.
     */
    cursor?: SpecialistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Specialists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Specialists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Specialists.
     */
    distinct?: SpecialistScalarFieldEnum | SpecialistScalarFieldEnum[];
  };

  /**
   * Specialist findMany
   */
  export type SpecialistFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null;
    /**
     * Filter, which Specialists to fetch.
     */
    where?: SpecialistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Specialists to fetch.
     */
    orderBy?:
      | SpecialistOrderByWithRelationInput
      | SpecialistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Specialists.
     */
    cursor?: SpecialistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Specialists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Specialists.
     */
    skip?: number;
    distinct?: SpecialistScalarFieldEnum | SpecialistScalarFieldEnum[];
  };

  /**
   * Specialist create
   */
  export type SpecialistCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null;
    /**
     * The data needed to create a Specialist.
     */
    data: XOR<SpecialistCreateInput, SpecialistUncheckedCreateInput>;
  };

  /**
   * Specialist createMany
   */
  export type SpecialistCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Specialists.
     */
    data: SpecialistCreateManyInput | SpecialistCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Specialist update
   */
  export type SpecialistUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null;
    /**
     * The data needed to update a Specialist.
     */
    data: XOR<SpecialistUpdateInput, SpecialistUncheckedUpdateInput>;
    /**
     * Choose, which Specialist to update.
     */
    where: SpecialistWhereUniqueInput;
  };

  /**
   * Specialist updateMany
   */
  export type SpecialistUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Specialists.
     */
    data: XOR<
      SpecialistUpdateManyMutationInput,
      SpecialistUncheckedUpdateManyInput
    >;
    /**
     * Filter which Specialists to update
     */
    where?: SpecialistWhereInput;
    /**
     * Limit how many Specialists to update.
     */
    limit?: number;
  };

  /**
   * Specialist upsert
   */
  export type SpecialistUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null;
    /**
     * The filter to search for the Specialist to update in case it exists.
     */
    where: SpecialistWhereUniqueInput;
    /**
     * In case the Specialist found by the `where` argument doesn't exist, create a new Specialist with this data.
     */
    create: XOR<SpecialistCreateInput, SpecialistUncheckedCreateInput>;
    /**
     * In case the Specialist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialistUpdateInput, SpecialistUncheckedUpdateInput>;
  };

  /**
   * Specialist delete
   */
  export type SpecialistDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null;
    /**
     * Filter which Specialist to delete.
     */
    where: SpecialistWhereUniqueInput;
  };

  /**
   * Specialist deleteMany
   */
  export type SpecialistDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Specialists to delete
     */
    where?: SpecialistWhereInput;
    /**
     * Limit how many Specialists to delete.
     */
    limit?: number;
  };

  /**
   * Specialist.appointments
   */
  export type Specialist$appointmentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null;
    where?: AppointmentWhereInput;
    orderBy?:
      | AppointmentOrderByWithRelationInput
      | AppointmentOrderByWithRelationInput[];
    cursor?: AppointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * Specialist without action
   */
  export type SpecialistDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null;
  };

  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null;
    _min: ClientMinAggregateOutputType | null;
    _max: ClientMaxAggregateOutputType | null;
  };

  export type ClientMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    phone: string | null;
    cpf: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ClientMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    phone: string | null;
    cpf: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ClientCountAggregateOutputType = {
    id: number;
    user_id: number;
    phone: number;
    cpf: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ClientMinAggregateInputType = {
    id?: true;
    user_id?: true;
    phone?: true;
    cpf?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ClientMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    phone?: true;
    cpf?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ClientCountAggregateInputType = {
    id?: true;
    user_id?: true;
    phone?: true;
    cpf?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ClientAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Clients
     **/
    _count?: true | ClientCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ClientMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ClientMaxAggregateInputType;
  };

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
    [P in keyof T & keyof AggregateClient]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>;
  };

  export type ClientGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ClientWhereInput;
    orderBy?:
      | ClientOrderByWithAggregationInput
      | ClientOrderByWithAggregationInput[];
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum;
    having?: ClientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClientCountAggregateInputType | true;
    _min?: ClientMinAggregateInputType;
    _max?: ClientMaxAggregateInputType;
  };

  export type ClientGroupByOutputType = {
    id: string;
    user_id: string;
    phone: string;
    cpf: string | null;
    created_at: Date;
    updated_at: Date;
    _count: ClientCountAggregateOutputType | null;
    _min: ClientMinAggregateOutputType | null;
    _max: ClientMaxAggregateOutputType | null;
  };

  type GetClientGroupByPayload<T extends ClientGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ClientGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ClientGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>;
        }
      >
    >;

  export type ClientSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      phone?: boolean;
      cpf?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      appointments?: boolean | Client$appointmentsArgs<ExtArgs>;
      _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["client"]
  >;

  export type ClientSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    phone?: boolean;
    cpf?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type ClientOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "user_id" | "phone" | "cpf" | "created_at" | "updated_at",
    ExtArgs["result"]["client"]
  >;
  export type ClientInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    appointments?: boolean | Client$appointmentsArgs<ExtArgs>;
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $ClientPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Client";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      appointments: Prisma.$AppointmentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        phone: string;
        cpf: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs["result"]["client"]
    >;
    composites: {};
  };

  type ClientGetPayload<
    S extends boolean | null | undefined | ClientDefaultArgs,
  > = $Result.GetResult<Prisma.$ClientPayload, S>;

  type ClientCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ClientFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: ClientCountAggregateInputType | true;
  };

  export interface ClientDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Client"];
      meta: { name: "Client" };
    };
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(
      args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(
      args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     *
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ClientFindManyArgs>(
      args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     *
     */
    create<T extends ClientCreateArgs>(
      args: SelectSubset<T, ClientCreateArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ClientCreateManyArgs>(
      args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     *
     */
    delete<T extends ClientDeleteArgs>(
      args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ClientUpdateArgs>(
      args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ClientDeleteManyArgs>(
      args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ClientUpdateManyArgs>(
      args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(
      args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
     **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ClientCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(
      args: Subset<T, ClientAggregateArgs>,
    ): Prisma.PrismaPromise<GetClientAggregateType<T>>;

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs["orderBy"] }
        : { orderBy?: ClientGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetClientGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Client model
     */
    readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    appointments<T extends Client$appointmentsArgs<ExtArgs> = {}>(
      args?: Subset<T, Client$appointmentsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AppointmentPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", "String">;
    readonly user_id: FieldRef<"Client", "String">;
    readonly phone: FieldRef<"Client", "String">;
    readonly cpf: FieldRef<"Client", "String">;
    readonly created_at: FieldRef<"Client", "DateTime">;
    readonly updated_at: FieldRef<"Client", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput;
  };

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput;
  };

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[];
  };

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[];
  };

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number;
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[];
  };

  /**
   * Client create
   */
  export type ClientCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>;
  };

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Client update
   */
  export type ClientUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>;
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput;
  };

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>;
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput;
    /**
     * Limit how many Clients to update.
     */
    limit?: number;
  };

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput;
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>;
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>;
  };

  /**
   * Client delete
   */
  export type ClientDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput;
  };

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput;
    /**
     * Limit how many Clients to delete.
     */
    limit?: number;
  };

  /**
   * Client.appointments
   */
  export type Client$appointmentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null;
    where?: AppointmentWhereInput;
    orderBy?:
      | AppointmentOrderByWithRelationInput
      | AppointmentOrderByWithRelationInput[];
    cursor?: AppointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * Client without action
   */
  export type ClientDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
  };

  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
  };

  export type AppointmentMinAggregateOutputType = {
    id: string | null;
    client_id: string | null;
    specialist_id: string | null;
    scheduled_by_id: string | null;
    date: Date | null;
    time: string | null;
    status: $Enums.AppointmentStatus | null;
    rescheduled_from_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AppointmentMaxAggregateOutputType = {
    id: string | null;
    client_id: string | null;
    specialist_id: string | null;
    scheduled_by_id: string | null;
    date: Date | null;
    time: string | null;
    status: $Enums.AppointmentStatus | null;
    rescheduled_from_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AppointmentCountAggregateOutputType = {
    id: number;
    client_id: number;
    specialist_id: number;
    scheduled_by_id: number;
    date: number;
    time: number;
    status: number;
    rescheduled_from_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AppointmentMinAggregateInputType = {
    id?: true;
    client_id?: true;
    specialist_id?: true;
    scheduled_by_id?: true;
    date?: true;
    time?: true;
    status?: true;
    rescheduled_from_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AppointmentMaxAggregateInputType = {
    id?: true;
    client_id?: true;
    specialist_id?: true;
    scheduled_by_id?: true;
    date?: true;
    time?: true;
    status?: true;
    rescheduled_from_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AppointmentCountAggregateInputType = {
    id?: true;
    client_id?: true;
    specialist_id?: true;
    scheduled_by_id?: true;
    date?: true;
    time?: true;
    status?: true;
    rescheduled_from_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AppointmentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Appointments to fetch.
     */
    orderBy?:
      | AppointmentOrderByWithRelationInput
      | AppointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Appointments
     **/
    _count?: true | AppointmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AppointmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AppointmentMaxAggregateInputType;
  };

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> =
    {
      [P in keyof T & keyof AggregateAppointment]: P extends "_count" | "count"
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateAppointment[P]>
        : GetScalarType<T[P], AggregateAppointment[P]>;
    };

  export type AppointmentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AppointmentWhereInput;
    orderBy?:
      | AppointmentOrderByWithAggregationInput
      | AppointmentOrderByWithAggregationInput[];
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum;
    having?: AppointmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AppointmentCountAggregateInputType | true;
    _min?: AppointmentMinAggregateInputType;
    _max?: AppointmentMaxAggregateInputType;
  };

  export type AppointmentGroupByOutputType = {
    id: string;
    client_id: string;
    specialist_id: string;
    scheduled_by_id: string;
    date: Date;
    time: string;
    status: $Enums.AppointmentStatus;
    rescheduled_from_id: string | null;
    created_at: Date;
    updated_at: Date;
    _count: AppointmentCountAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
  };

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AppointmentGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof AppointmentGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>;
        }
      >
    >;

  export type AppointmentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      client_id?: boolean;
      specialist_id?: boolean;
      scheduled_by_id?: boolean;
      date?: boolean;
      time?: boolean;
      status?: boolean;
      rescheduled_from_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      client?: boolean | ClientDefaultArgs<ExtArgs>;
      specialist?: boolean | SpecialistDefaultArgs<ExtArgs>;
      scheduled_by?: boolean | UserDefaultArgs<ExtArgs>;
      rescheduled_from?: boolean | Appointment$rescheduled_fromArgs<ExtArgs>;
      rescheduled_to?: boolean | Appointment$rescheduled_toArgs<ExtArgs>;
      _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["appointment"]
  >;

  export type AppointmentSelectScalar = {
    id?: boolean;
    client_id?: boolean;
    specialist_id?: boolean;
    scheduled_by_id?: boolean;
    date?: boolean;
    time?: boolean;
    status?: boolean;
    rescheduled_from_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type AppointmentOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "client_id"
    | "specialist_id"
    | "scheduled_by_id"
    | "date"
    | "time"
    | "status"
    | "rescheduled_from_id"
    | "created_at"
    | "updated_at",
    ExtArgs["result"]["appointment"]
  >;
  export type AppointmentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    client?: boolean | ClientDefaultArgs<ExtArgs>;
    specialist?: boolean | SpecialistDefaultArgs<ExtArgs>;
    scheduled_by?: boolean | UserDefaultArgs<ExtArgs>;
    rescheduled_from?: boolean | Appointment$rescheduled_fromArgs<ExtArgs>;
    rescheduled_to?: boolean | Appointment$rescheduled_toArgs<ExtArgs>;
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $AppointmentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Appointment";
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>;
      specialist: Prisma.$SpecialistPayload<ExtArgs>;
      scheduled_by: Prisma.$UserPayload<ExtArgs>;
      rescheduled_from: Prisma.$AppointmentPayload<ExtArgs> | null;
      rescheduled_to: Prisma.$AppointmentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        client_id: string;
        specialist_id: string;
        scheduled_by_id: string;
        date: Date;
        time: string;
        status: $Enums.AppointmentStatus;
        rescheduled_from_id: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs["result"]["appointment"]
    >;
    composites: {};
  };

  type AppointmentGetPayload<
    S extends boolean | null | undefined | AppointmentDefaultArgs,
  > = $Result.GetResult<Prisma.$AppointmentPayload, S>;

  type AppointmentCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    AppointmentFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: AppointmentCountAggregateInputType | true;
  };

  export interface AppointmentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Appointment"];
      meta: { name: "Appointment" };
    };
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(
      args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>,
    ): Prisma__AppointmentClient<
      $Result.GetResult<
        Prisma.$AppointmentPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AppointmentClient<
      $Result.GetResult<
        Prisma.$AppointmentPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(
      args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>,
    ): Prisma__AppointmentClient<
      $Result.GetResult<
        Prisma.$AppointmentPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AppointmentClient<
      $Result.GetResult<
        Prisma.$AppointmentPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     *
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AppointmentFindManyArgs>(
      args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AppointmentPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     *
     */
    create<T extends AppointmentCreateArgs>(
      args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>,
    ): Prisma__AppointmentClient<
      $Result.GetResult<
        Prisma.$AppointmentPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AppointmentCreateManyArgs>(
      args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     *
     */
    delete<T extends AppointmentDeleteArgs>(
      args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>,
    ): Prisma__AppointmentClient<
      $Result.GetResult<
        Prisma.$AppointmentPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AppointmentUpdateArgs>(
      args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>,
    ): Prisma__AppointmentClient<
      $Result.GetResult<
        Prisma.$AppointmentPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(
      args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AppointmentUpdateManyArgs>(
      args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(
      args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>,
    ): Prisma__AppointmentClient<
      $Result.GetResult<
        Prisma.$AppointmentPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
     **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AppointmentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(
      args: Subset<T, AppointmentAggregateArgs>,
    ): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>;

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs["orderBy"] }
        : { orderBy?: AppointmentGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetAppointmentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Appointment model
     */
    readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ClientDefaultArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      | $Result.GetResult<
          Prisma.$ClientPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    specialist<T extends SpecialistDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, SpecialistDefaultArgs<ExtArgs>>,
    ): Prisma__SpecialistClient<
      | $Result.GetResult<
          Prisma.$SpecialistPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    scheduled_by<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    rescheduled_from<T extends Appointment$rescheduled_fromArgs<ExtArgs> = {}>(
      args?: Subset<T, Appointment$rescheduled_fromArgs<ExtArgs>>,
    ): Prisma__AppointmentClient<
      $Result.GetResult<
        Prisma.$AppointmentPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    rescheduled_to<T extends Appointment$rescheduled_toArgs<ExtArgs> = {}>(
      args?: Subset<T, Appointment$rescheduled_toArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AppointmentPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", "String">;
    readonly client_id: FieldRef<"Appointment", "String">;
    readonly specialist_id: FieldRef<"Appointment", "String">;
    readonly scheduled_by_id: FieldRef<"Appointment", "String">;
    readonly date: FieldRef<"Appointment", "DateTime">;
    readonly time: FieldRef<"Appointment", "String">;
    readonly status: FieldRef<"Appointment", "AppointmentStatus">;
    readonly rescheduled_from_id: FieldRef<"Appointment", "String">;
    readonly created_at: FieldRef<"Appointment", "DateTime">;
    readonly updated_at: FieldRef<"Appointment", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null;
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput;
  };

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null;
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput;
  };

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null;
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Appointments to fetch.
     */
    orderBy?:
      | AppointmentOrderByWithRelationInput
      | AppointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null;
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Appointments to fetch.
     */
    orderBy?:
      | AppointmentOrderByWithRelationInput
      | AppointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null;
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Appointments to fetch.
     */
    orderBy?:
      | AppointmentOrderByWithRelationInput
      | AppointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Appointments.
     */
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>;
  };

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>;
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput;
  };

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<
      AppointmentUpdateManyMutationInput,
      AppointmentUncheckedUpdateManyInput
    >;
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput;
    /**
     * Limit how many Appointments to update.
     */
    limit?: number;
  };

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput;
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>;
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>;
  };

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null;
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput;
  };

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput;
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number;
  };

  /**
   * Appointment.rescheduled_from
   */
  export type Appointment$rescheduled_fromArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null;
    where?: AppointmentWhereInput;
  };

  /**
   * Appointment.rescheduled_to
   */
  export type Appointment$rescheduled_toArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null;
    where?: AppointmentWhereInput;
    orderBy?:
      | AppointmentOrderByWithRelationInput
      | AppointmentOrderByWithRelationInput[];
    cursor?: AppointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null;
  };

  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null;
    _min: AuditLogMinAggregateOutputType | null;
    _max: AuditLogMaxAggregateOutputType | null;
  };

  export type AuditLogMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    action_type: $Enums.ActionType | null;
    entity: string | null;
    entity_id: string | null;
    message: string | null;
    created_at: Date | null;
  };

  export type AuditLogMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    action_type: $Enums.ActionType | null;
    entity: string | null;
    entity_id: string | null;
    message: string | null;
    created_at: Date | null;
  };

  export type AuditLogCountAggregateOutputType = {
    id: number;
    user_id: number;
    action_type: number;
    entity: number;
    entity_id: number;
    message: number;
    created_at: number;
    _all: number;
  };

  export type AuditLogMinAggregateInputType = {
    id?: true;
    user_id?: true;
    action_type?: true;
    entity?: true;
    entity_id?: true;
    message?: true;
    created_at?: true;
  };

  export type AuditLogMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    action_type?: true;
    entity?: true;
    entity_id?: true;
    message?: true;
    created_at?: true;
  };

  export type AuditLogCountAggregateInputType = {
    id?: true;
    user_id?: true;
    action_type?: true;
    entity?: true;
    entity_id?: true;
    message?: true;
    created_at?: true;
    _all?: true;
  };

  export type AuditLogAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?:
      | AuditLogOrderByWithRelationInput
      | AuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AuditLogs
     **/
    _count?: true | AuditLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AuditLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AuditLogMaxAggregateInputType;
  };

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
    [P in keyof T & keyof AggregateAuditLog]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>;
  };

  export type AuditLogGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AuditLogWhereInput;
    orderBy?:
      | AuditLogOrderByWithAggregationInput
      | AuditLogOrderByWithAggregationInput[];
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum;
    having?: AuditLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuditLogCountAggregateInputType | true;
    _min?: AuditLogMinAggregateInputType;
    _max?: AuditLogMaxAggregateInputType;
  };

  export type AuditLogGroupByOutputType = {
    id: string;
    user_id: string;
    action_type: $Enums.ActionType;
    entity: string;
    entity_id: string;
    message: string | null;
    created_at: Date;
    _count: AuditLogCountAggregateOutputType | null;
    _min: AuditLogMinAggregateOutputType | null;
    _max: AuditLogMaxAggregateOutputType | null;
  };

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AuditLogGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof AuditLogGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>;
        }
      >
    >;

  export type AuditLogSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      action_type?: boolean;
      entity?: boolean;
      entity_id?: boolean;
      message?: boolean;
      created_at?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["auditLog"]
  >;

  export type AuditLogSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    action_type?: boolean;
    entity?: boolean;
    entity_id?: boolean;
    message?: boolean;
    created_at?: boolean;
  };

  export type AuditLogOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "user_id"
    | "action_type"
    | "entity"
    | "entity_id"
    | "message"
    | "created_at",
    ExtArgs["result"]["auditLog"]
  >;
  export type AuditLogInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $AuditLogPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "AuditLog";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        action_type: $Enums.ActionType;
        entity: string;
        entity_id: string;
        message: string | null;
        created_at: Date;
      },
      ExtArgs["result"]["auditLog"]
    >;
    composites: {};
  };

  type AuditLogGetPayload<
    S extends boolean | null | undefined | AuditLogDefaultArgs,
  > = $Result.GetResult<Prisma.$AuditLogPayload, S>;

  type AuditLogCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AuditLogFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: AuditLogCountAggregateInputType | true;
  };

  export interface AuditLogDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["AuditLog"];
      meta: { name: "AuditLog" };
    };
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(
      args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(
      args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     *
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AuditLogFindManyArgs>(
      args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     *
     */
    create<T extends AuditLogCreateArgs>(
      args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AuditLogCreateManyArgs>(
      args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     *
     */
    delete<T extends AuditLogDeleteArgs>(
      args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AuditLogUpdateArgs>(
      args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(
      args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AuditLogUpdateManyArgs>(
      args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(
      args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
     **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AuditLogCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(
      args: Subset<T, AuditLogAggregateArgs>,
    ): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>;

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs["orderBy"] }
        : { orderBy?: AuditLogGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetAuditLogGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AuditLog model
     */
    readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", "String">;
    readonly user_id: FieldRef<"AuditLog", "String">;
    readonly action_type: FieldRef<"AuditLog", "ActionType">;
    readonly entity: FieldRef<"AuditLog", "String">;
    readonly entity_id: FieldRef<"AuditLog", "String">;
    readonly message: FieldRef<"AuditLog", "String">;
    readonly created_at: FieldRef<"AuditLog", "DateTime">;
  }

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput;
  };

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput;
  };

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?:
      | AuditLogOrderByWithRelationInput
      | AuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[];
  };

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?:
      | AuditLogOrderByWithRelationInput
      | AuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[];
  };

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?:
      | AuditLogOrderByWithRelationInput
      | AuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuditLogs.
     */
    skip?: number;
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[];
  };

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>;
  };

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>;
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput;
  };

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<
      AuditLogUpdateManyMutationInput,
      AuditLogUncheckedUpdateManyInput
    >;
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput;
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number;
  };

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput;
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>;
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>;
  };

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput;
  };

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput;
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number;
  };

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: "id";
    name: "name";
    email: "email";
    password: "password";
    role: "role";
    priority: "priority";
    active: "active";
    created_at: "created_at";
    updated_at: "updated_at";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SpecialistScalarFieldEnum: {
    id: "id";
    user_id: "user_id";
    specialty: "specialty";
    daily_limit: "daily_limit";
    min_interval_minutes: "min_interval_minutes";
    availability: "availability";
    created_at: "created_at";
    updated_at: "updated_at";
  };

  export type SpecialistScalarFieldEnum =
    (typeof SpecialistScalarFieldEnum)[keyof typeof SpecialistScalarFieldEnum];

  export const ClientScalarFieldEnum: {
    id: "id";
    user_id: "user_id";
    phone: "phone";
    cpf: "cpf";
    created_at: "created_at";
    updated_at: "updated_at";
  };

  export type ClientScalarFieldEnum =
    (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum];

  export const AppointmentScalarFieldEnum: {
    id: "id";
    client_id: "client_id";
    specialist_id: "specialist_id";
    scheduled_by_id: "scheduled_by_id";
    date: "date";
    time: "time";
    status: "status";
    rescheduled_from_id: "rescheduled_from_id";
    created_at: "created_at";
    updated_at: "updated_at";
  };

  export type AppointmentScalarFieldEnum =
    (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum];

  export const AuditLogScalarFieldEnum: {
    id: "id";
    user_id: "user_id";
    action_type: "action_type";
    entity: "entity";
    entity_id: "entity_id";
    message: "message";
    created_at: "created_at";
  };

  export type AuditLogScalarFieldEnum =
    (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull;
  };

  export type JsonNullValueInput =
    (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];

  export const UserOrderByRelevanceFieldEnum: {
    id: "id";
    name: "name";
    email: "email";
    password: "password";
  };

  export type UserOrderByRelevanceFieldEnum =
    (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const SpecialistOrderByRelevanceFieldEnum: {
    id: "id";
    user_id: "user_id";
    specialty: "specialty";
  };

  export type SpecialistOrderByRelevanceFieldEnum =
    (typeof SpecialistOrderByRelevanceFieldEnum)[keyof typeof SpecialistOrderByRelevanceFieldEnum];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const ClientOrderByRelevanceFieldEnum: {
    id: "id";
    user_id: "user_id";
    phone: "phone";
    cpf: "cpf";
  };

  export type ClientOrderByRelevanceFieldEnum =
    (typeof ClientOrderByRelevanceFieldEnum)[keyof typeof ClientOrderByRelevanceFieldEnum];

  export const AppointmentOrderByRelevanceFieldEnum: {
    id: "id";
    client_id: "client_id";
    specialist_id: "specialist_id";
    scheduled_by_id: "scheduled_by_id";
    time: "time";
    rescheduled_from_id: "rescheduled_from_id";
  };

  export type AppointmentOrderByRelevanceFieldEnum =
    (typeof AppointmentOrderByRelevanceFieldEnum)[keyof typeof AppointmentOrderByRelevanceFieldEnum];

  export const AuditLogOrderByRelevanceFieldEnum: {
    id: "id";
    user_id: "user_id";
    entity: "entity";
    entity_id: "entity_id";
    message: "message";
  };

  export type AuditLogOrderByRelevanceFieldEnum =
    (typeof AuditLogOrderByRelevanceFieldEnum)[keyof typeof AuditLogOrderByRelevanceFieldEnum];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Role"
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Boolean"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Json"
  >;

  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "QueryMode"
  >;

  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "AppointmentStatus">;

  /**
   * Reference to a field of type 'ActionType'
   */
  export type EnumActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "ActionType"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<"User"> | string;
    name?: StringFilter<"User"> | string;
    email?: StringFilter<"User"> | string;
    password?: StringFilter<"User"> | string;
    role?: EnumRoleFilter<"User"> | $Enums.Role;
    priority?: BoolFilter<"User"> | boolean;
    active?: BoolFilter<"User"> | boolean;
    created_at?: DateTimeFilter<"User"> | Date | string;
    updated_at?: DateTimeFilter<"User"> | Date | string;
    specialist?: XOR<
      SpecialistNullableScalarRelationFilter,
      SpecialistWhereInput
    > | null;
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null;
    scheduler?: AppointmentListRelationFilter;
    auditLogs?: AuditLogListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    priority?: SortOrder;
    active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    specialist?: SpecialistOrderByWithRelationInput;
    client?: ClientOrderByWithRelationInput;
    scheduler?: AppointmentOrderByRelationAggregateInput;
    auditLogs?: AuditLogOrderByRelationAggregateInput;
    _relevance?: UserOrderByRelevanceInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringFilter<"User"> | string;
      password?: StringFilter<"User"> | string;
      role?: EnumRoleFilter<"User"> | $Enums.Role;
      priority?: BoolFilter<"User"> | boolean;
      active?: BoolFilter<"User"> | boolean;
      created_at?: DateTimeFilter<"User"> | Date | string;
      updated_at?: DateTimeFilter<"User"> | Date | string;
      specialist?: XOR<
        SpecialistNullableScalarRelationFilter,
        SpecialistWhereInput
      > | null;
      client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null;
      scheduler?: AppointmentListRelationFilter;
      auditLogs?: AuditLogListRelationFilter;
    },
    "id" | "email"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    priority?: SortOrder;
    active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"User"> | string;
    name?: StringWithAggregatesFilter<"User"> | string;
    email?: StringWithAggregatesFilter<"User"> | string;
    password?: StringWithAggregatesFilter<"User"> | string;
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    priority?: BoolWithAggregatesFilter<"User"> | boolean;
    active?: BoolWithAggregatesFilter<"User"> | boolean;
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string;
  };

  export type SpecialistWhereInput = {
    AND?: SpecialistWhereInput | SpecialistWhereInput[];
    OR?: SpecialistWhereInput[];
    NOT?: SpecialistWhereInput | SpecialistWhereInput[];
    id?: StringFilter<"Specialist"> | string;
    user_id?: StringFilter<"Specialist"> | string;
    specialty?: StringFilter<"Specialist"> | string;
    daily_limit?: IntFilter<"Specialist"> | number;
    min_interval_minutes?: IntFilter<"Specialist"> | number;
    availability?: JsonFilter<"Specialist">;
    created_at?: DateTimeFilter<"Specialist"> | Date | string;
    updated_at?: DateTimeFilter<"Specialist"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    appointments?: AppointmentListRelationFilter;
  };

  export type SpecialistOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    specialty?: SortOrder;
    daily_limit?: SortOrder;
    min_interval_minutes?: SortOrder;
    availability?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: UserOrderByWithRelationInput;
    appointments?: AppointmentOrderByRelationAggregateInput;
    _relevance?: SpecialistOrderByRelevanceInput;
  };

  export type SpecialistWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      user_id?: string;
      AND?: SpecialistWhereInput | SpecialistWhereInput[];
      OR?: SpecialistWhereInput[];
      NOT?: SpecialistWhereInput | SpecialistWhereInput[];
      specialty?: StringFilter<"Specialist"> | string;
      daily_limit?: IntFilter<"Specialist"> | number;
      min_interval_minutes?: IntFilter<"Specialist"> | number;
      availability?: JsonFilter<"Specialist">;
      created_at?: DateTimeFilter<"Specialist"> | Date | string;
      updated_at?: DateTimeFilter<"Specialist"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      appointments?: AppointmentListRelationFilter;
    },
    "id" | "user_id"
  >;

  export type SpecialistOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    specialty?: SortOrder;
    daily_limit?: SortOrder;
    min_interval_minutes?: SortOrder;
    availability?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: SpecialistCountOrderByAggregateInput;
    _avg?: SpecialistAvgOrderByAggregateInput;
    _max?: SpecialistMaxOrderByAggregateInput;
    _min?: SpecialistMinOrderByAggregateInput;
    _sum?: SpecialistSumOrderByAggregateInput;
  };

  export type SpecialistScalarWhereWithAggregatesInput = {
    AND?:
      | SpecialistScalarWhereWithAggregatesInput
      | SpecialistScalarWhereWithAggregatesInput[];
    OR?: SpecialistScalarWhereWithAggregatesInput[];
    NOT?:
      | SpecialistScalarWhereWithAggregatesInput
      | SpecialistScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Specialist"> | string;
    user_id?: StringWithAggregatesFilter<"Specialist"> | string;
    specialty?: StringWithAggregatesFilter<"Specialist"> | string;
    daily_limit?: IntWithAggregatesFilter<"Specialist"> | number;
    min_interval_minutes?: IntWithAggregatesFilter<"Specialist"> | number;
    availability?: JsonWithAggregatesFilter<"Specialist">;
    created_at?: DateTimeWithAggregatesFilter<"Specialist"> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<"Specialist"> | Date | string;
  };

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[];
    OR?: ClientWhereInput[];
    NOT?: ClientWhereInput | ClientWhereInput[];
    id?: StringFilter<"Client"> | string;
    user_id?: StringFilter<"Client"> | string;
    phone?: StringFilter<"Client"> | string;
    cpf?: StringNullableFilter<"Client"> | string | null;
    created_at?: DateTimeFilter<"Client"> | Date | string;
    updated_at?: DateTimeFilter<"Client"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    appointments?: AppointmentListRelationFilter;
  };

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    phone?: SortOrder;
    cpf?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: UserOrderByWithRelationInput;
    appointments?: AppointmentOrderByRelationAggregateInput;
    _relevance?: ClientOrderByRelevanceInput;
  };

  export type ClientWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      user_id?: string;
      AND?: ClientWhereInput | ClientWhereInput[];
      OR?: ClientWhereInput[];
      NOT?: ClientWhereInput | ClientWhereInput[];
      phone?: StringFilter<"Client"> | string;
      cpf?: StringNullableFilter<"Client"> | string | null;
      created_at?: DateTimeFilter<"Client"> | Date | string;
      updated_at?: DateTimeFilter<"Client"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      appointments?: AppointmentListRelationFilter;
    },
    "id" | "user_id"
  >;

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    phone?: SortOrder;
    cpf?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: ClientCountOrderByAggregateInput;
    _max?: ClientMaxOrderByAggregateInput;
    _min?: ClientMinOrderByAggregateInput;
  };

  export type ClientScalarWhereWithAggregatesInput = {
    AND?:
      | ClientScalarWhereWithAggregatesInput
      | ClientScalarWhereWithAggregatesInput[];
    OR?: ClientScalarWhereWithAggregatesInput[];
    NOT?:
      | ClientScalarWhereWithAggregatesInput
      | ClientScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Client"> | string;
    user_id?: StringWithAggregatesFilter<"Client"> | string;
    phone?: StringWithAggregatesFilter<"Client"> | string;
    cpf?: StringNullableWithAggregatesFilter<"Client"> | string | null;
    created_at?: DateTimeWithAggregatesFilter<"Client"> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<"Client"> | Date | string;
  };

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[];
    OR?: AppointmentWhereInput[];
    NOT?: AppointmentWhereInput | AppointmentWhereInput[];
    id?: StringFilter<"Appointment"> | string;
    client_id?: StringFilter<"Appointment"> | string;
    specialist_id?: StringFilter<"Appointment"> | string;
    scheduled_by_id?: StringFilter<"Appointment"> | string;
    date?: DateTimeFilter<"Appointment"> | Date | string;
    time?: StringFilter<"Appointment"> | string;
    status?:
      | EnumAppointmentStatusFilter<"Appointment">
      | $Enums.AppointmentStatus;
    rescheduled_from_id?: StringNullableFilter<"Appointment"> | string | null;
    created_at?: DateTimeFilter<"Appointment"> | Date | string;
    updated_at?: DateTimeFilter<"Appointment"> | Date | string;
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>;
    specialist?: XOR<SpecialistScalarRelationFilter, SpecialistWhereInput>;
    scheduled_by?: XOR<UserScalarRelationFilter, UserWhereInput>;
    rescheduled_from?: XOR<
      AppointmentNullableScalarRelationFilter,
      AppointmentWhereInput
    > | null;
    rescheduled_to?: AppointmentListRelationFilter;
  };

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder;
    client_id?: SortOrder;
    specialist_id?: SortOrder;
    scheduled_by_id?: SortOrder;
    date?: SortOrder;
    time?: SortOrder;
    status?: SortOrder;
    rescheduled_from_id?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    client?: ClientOrderByWithRelationInput;
    specialist?: SpecialistOrderByWithRelationInput;
    scheduled_by?: UserOrderByWithRelationInput;
    rescheduled_from?: AppointmentOrderByWithRelationInput;
    rescheduled_to?: AppointmentOrderByRelationAggregateInput;
    _relevance?: AppointmentOrderByRelevanceInput;
  };

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AppointmentWhereInput | AppointmentWhereInput[];
      OR?: AppointmentWhereInput[];
      NOT?: AppointmentWhereInput | AppointmentWhereInput[];
      client_id?: StringFilter<"Appointment"> | string;
      specialist_id?: StringFilter<"Appointment"> | string;
      scheduled_by_id?: StringFilter<"Appointment"> | string;
      date?: DateTimeFilter<"Appointment"> | Date | string;
      time?: StringFilter<"Appointment"> | string;
      status?:
        | EnumAppointmentStatusFilter<"Appointment">
        | $Enums.AppointmentStatus;
      rescheduled_from_id?: StringNullableFilter<"Appointment"> | string | null;
      created_at?: DateTimeFilter<"Appointment"> | Date | string;
      updated_at?: DateTimeFilter<"Appointment"> | Date | string;
      client?: XOR<ClientScalarRelationFilter, ClientWhereInput>;
      specialist?: XOR<SpecialistScalarRelationFilter, SpecialistWhereInput>;
      scheduled_by?: XOR<UserScalarRelationFilter, UserWhereInput>;
      rescheduled_from?: XOR<
        AppointmentNullableScalarRelationFilter,
        AppointmentWhereInput
      > | null;
      rescheduled_to?: AppointmentListRelationFilter;
    },
    "id"
  >;

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder;
    client_id?: SortOrder;
    specialist_id?: SortOrder;
    scheduled_by_id?: SortOrder;
    date?: SortOrder;
    time?: SortOrder;
    status?: SortOrder;
    rescheduled_from_id?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: AppointmentCountOrderByAggregateInput;
    _max?: AppointmentMaxOrderByAggregateInput;
    _min?: AppointmentMinOrderByAggregateInput;
  };

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?:
      | AppointmentScalarWhereWithAggregatesInput
      | AppointmentScalarWhereWithAggregatesInput[];
    OR?: AppointmentScalarWhereWithAggregatesInput[];
    NOT?:
      | AppointmentScalarWhereWithAggregatesInput
      | AppointmentScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Appointment"> | string;
    client_id?: StringWithAggregatesFilter<"Appointment"> | string;
    specialist_id?: StringWithAggregatesFilter<"Appointment"> | string;
    scheduled_by_id?: StringWithAggregatesFilter<"Appointment"> | string;
    date?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string;
    time?: StringWithAggregatesFilter<"Appointment"> | string;
    status?:
      | EnumAppointmentStatusWithAggregatesFilter<"Appointment">
      | $Enums.AppointmentStatus;
    rescheduled_from_id?:
      | StringNullableWithAggregatesFilter<"Appointment">
      | string
      | null;
    created_at?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string;
  };

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[];
    OR?: AuditLogWhereInput[];
    NOT?: AuditLogWhereInput | AuditLogWhereInput[];
    id?: StringFilter<"AuditLog"> | string;
    user_id?: StringFilter<"AuditLog"> | string;
    action_type?: EnumActionTypeFilter<"AuditLog"> | $Enums.ActionType;
    entity?: StringFilter<"AuditLog"> | string;
    entity_id?: StringFilter<"AuditLog"> | string;
    message?: StringNullableFilter<"AuditLog"> | string | null;
    created_at?: DateTimeFilter<"AuditLog"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    action_type?: SortOrder;
    entity?: SortOrder;
    entity_id?: SortOrder;
    message?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    user?: UserOrderByWithRelationInput;
    _relevance?: AuditLogOrderByRelevanceInput;
  };

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AuditLogWhereInput | AuditLogWhereInput[];
      OR?: AuditLogWhereInput[];
      NOT?: AuditLogWhereInput | AuditLogWhereInput[];
      user_id?: StringFilter<"AuditLog"> | string;
      action_type?: EnumActionTypeFilter<"AuditLog"> | $Enums.ActionType;
      entity?: StringFilter<"AuditLog"> | string;
      entity_id?: StringFilter<"AuditLog"> | string;
      message?: StringNullableFilter<"AuditLog"> | string | null;
      created_at?: DateTimeFilter<"AuditLog"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id"
  >;

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    action_type?: SortOrder;
    entity?: SortOrder;
    entity_id?: SortOrder;
    message?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    _count?: AuditLogCountOrderByAggregateInput;
    _max?: AuditLogMaxOrderByAggregateInput;
    _min?: AuditLogMinOrderByAggregateInput;
  };

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?:
      | AuditLogScalarWhereWithAggregatesInput
      | AuditLogScalarWhereWithAggregatesInput[];
    OR?: AuditLogScalarWhereWithAggregatesInput[];
    NOT?:
      | AuditLogScalarWhereWithAggregatesInput
      | AuditLogScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"AuditLog"> | string;
    user_id?: StringWithAggregatesFilter<"AuditLog"> | string;
    action_type?:
      | EnumActionTypeWithAggregatesFilter<"AuditLog">
      | $Enums.ActionType;
    entity?: StringWithAggregatesFilter<"AuditLog"> | string;
    entity_id?: StringWithAggregatesFilter<"AuditLog"> | string;
    message?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null;
    created_at?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    priority?: boolean;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    specialist?: SpecialistCreateNestedOneWithoutUserInput;
    client?: ClientCreateNestedOneWithoutUserInput;
    scheduler?: AppointmentCreateNestedManyWithoutScheduled_byInput;
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    priority?: boolean;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    specialist?: SpecialistUncheckedCreateNestedOneWithoutUserInput;
    client?: ClientUncheckedCreateNestedOneWithoutUserInput;
    scheduler?: AppointmentUncheckedCreateNestedManyWithoutScheduled_byInput;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    priority?: BoolFieldUpdateOperationsInput | boolean;
    active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    specialist?: SpecialistUpdateOneWithoutUserNestedInput;
    client?: ClientUpdateOneWithoutUserNestedInput;
    scheduler?: AppointmentUpdateManyWithoutScheduled_byNestedInput;
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    priority?: BoolFieldUpdateOperationsInput | boolean;
    active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    specialist?: SpecialistUncheckedUpdateOneWithoutUserNestedInput;
    client?: ClientUncheckedUpdateOneWithoutUserNestedInput;
    scheduler?: AppointmentUncheckedUpdateManyWithoutScheduled_byNestedInput;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    priority?: boolean;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    priority?: BoolFieldUpdateOperationsInput | boolean;
    active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    priority?: BoolFieldUpdateOperationsInput | boolean;
    active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SpecialistCreateInput = {
    id?: string;
    specialty: string;
    daily_limit: number;
    min_interval_minutes: number;
    availability: JsonNullValueInput | InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: UserCreateNestedOneWithoutSpecialistInput;
    appointments?: AppointmentCreateNestedManyWithoutSpecialistInput;
  };

  export type SpecialistUncheckedCreateInput = {
    id?: string;
    user_id: string;
    specialty: string;
    daily_limit: number;
    min_interval_minutes: number;
    availability: JsonNullValueInput | InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointments?: AppointmentUncheckedCreateNestedManyWithoutSpecialistInput;
  };

  export type SpecialistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialty?: StringFieldUpdateOperationsInput | string;
    daily_limit?: IntFieldUpdateOperationsInput | number;
    min_interval_minutes?: IntFieldUpdateOperationsInput | number;
    availability?: JsonNullValueInput | InputJsonValue;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutSpecialistNestedInput;
    appointments?: AppointmentUpdateManyWithoutSpecialistNestedInput;
  };

  export type SpecialistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    specialty?: StringFieldUpdateOperationsInput | string;
    daily_limit?: IntFieldUpdateOperationsInput | number;
    min_interval_minutes?: IntFieldUpdateOperationsInput | number;
    availability?: JsonNullValueInput | InputJsonValue;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointments?: AppointmentUncheckedUpdateManyWithoutSpecialistNestedInput;
  };

  export type SpecialistCreateManyInput = {
    id?: string;
    user_id: string;
    specialty: string;
    daily_limit: number;
    min_interval_minutes: number;
    availability: JsonNullValueInput | InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type SpecialistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialty?: StringFieldUpdateOperationsInput | string;
    daily_limit?: IntFieldUpdateOperationsInput | number;
    min_interval_minutes?: IntFieldUpdateOperationsInput | number;
    availability?: JsonNullValueInput | InputJsonValue;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SpecialistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    specialty?: StringFieldUpdateOperationsInput | string;
    daily_limit?: IntFieldUpdateOperationsInput | number;
    min_interval_minutes?: IntFieldUpdateOperationsInput | number;
    availability?: JsonNullValueInput | InputJsonValue;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ClientCreateInput = {
    id?: string;
    phone: string;
    cpf?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: UserCreateNestedOneWithoutClientInput;
    appointments?: AppointmentCreateNestedManyWithoutClientInput;
  };

  export type ClientUncheckedCreateInput = {
    id?: string;
    user_id: string;
    phone: string;
    cpf?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointments?: AppointmentUncheckedCreateNestedManyWithoutClientInput;
  };

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    cpf?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutClientNestedInput;
    appointments?: AppointmentUpdateManyWithoutClientNestedInput;
  };

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    cpf?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointments?: AppointmentUncheckedUpdateManyWithoutClientNestedInput;
  };

  export type ClientCreateManyInput = {
    id?: string;
    user_id: string;
    phone: string;
    cpf?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    cpf?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    cpf?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AppointmentCreateInput = {
    id?: string;
    date: Date | string;
    time: string;
    status?: $Enums.AppointmentStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    client: ClientCreateNestedOneWithoutAppointmentsInput;
    specialist: SpecialistCreateNestedOneWithoutAppointmentsInput;
    scheduled_by: UserCreateNestedOneWithoutSchedulerInput;
    rescheduled_from?: AppointmentCreateNestedOneWithoutRescheduled_toInput;
    rescheduled_to?: AppointmentCreateNestedManyWithoutRescheduled_fromInput;
  };

  export type AppointmentUncheckedCreateInput = {
    id?: string;
    client_id: string;
    specialist_id: string;
    scheduled_by_id: string;
    date: Date | string;
    time: string;
    status?: $Enums.AppointmentStatus;
    rescheduled_from_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    rescheduled_to?: AppointmentUncheckedCreateNestedManyWithoutRescheduled_fromInput;
  };

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumAppointmentStatusFieldUpdateOperationsInput
      | $Enums.AppointmentStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client?: ClientUpdateOneRequiredWithoutAppointmentsNestedInput;
    specialist?: SpecialistUpdateOneRequiredWithoutAppointmentsNestedInput;
    scheduled_by?: UserUpdateOneRequiredWithoutSchedulerNestedInput;
    rescheduled_from?: AppointmentUpdateOneWithoutRescheduled_toNestedInput;
    rescheduled_to?: AppointmentUpdateManyWithoutRescheduled_fromNestedInput;
  };

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    client_id?: StringFieldUpdateOperationsInput | string;
    specialist_id?: StringFieldUpdateOperationsInput | string;
    scheduled_by_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumAppointmentStatusFieldUpdateOperationsInput
      | $Enums.AppointmentStatus;
    rescheduled_from_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rescheduled_to?: AppointmentUncheckedUpdateManyWithoutRescheduled_fromNestedInput;
  };

  export type AppointmentCreateManyInput = {
    id?: string;
    client_id: string;
    specialist_id: string;
    scheduled_by_id: string;
    date: Date | string;
    time: string;
    status?: $Enums.AppointmentStatus;
    rescheduled_from_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumAppointmentStatusFieldUpdateOperationsInput
      | $Enums.AppointmentStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    client_id?: StringFieldUpdateOperationsInput | string;
    specialist_id?: StringFieldUpdateOperationsInput | string;
    scheduled_by_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumAppointmentStatusFieldUpdateOperationsInput
      | $Enums.AppointmentStatus;
    rescheduled_from_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogCreateInput = {
    id?: string;
    action_type: $Enums.ActionType;
    entity: string;
    entity_id: string;
    message?: string | null;
    created_at?: Date | string;
    user: UserCreateNestedOneWithoutAuditLogsInput;
  };

  export type AuditLogUncheckedCreateInput = {
    id?: string;
    user_id: string;
    action_type: $Enums.ActionType;
    entity: string;
    entity_id: string;
    message?: string | null;
    created_at?: Date | string;
  };

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    action_type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType;
    entity?: StringFieldUpdateOperationsInput | string;
    entity_id?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput;
  };

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    action_type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType;
    entity?: StringFieldUpdateOperationsInput | string;
    entity_id?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogCreateManyInput = {
    id?: string;
    user_id: string;
    action_type: $Enums.ActionType;
    entity: string;
    entity_id: string;
    message?: string | null;
    created_at?: Date | string;
  };

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    action_type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType;
    entity?: StringFieldUpdateOperationsInput | string;
    entity_id?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    action_type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType;
    entity?: StringFieldUpdateOperationsInput | string;
    entity_id?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[];
    notIn?: $Enums.Role[];
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type SpecialistNullableScalarRelationFilter = {
    is?: SpecialistWhereInput | null;
    isNot?: SpecialistWhereInput | null;
  };

  export type ClientNullableScalarRelationFilter = {
    is?: ClientWhereInput | null;
    isNot?: ClientWhereInput | null;
  };

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput;
    some?: AppointmentWhereInput;
    none?: AppointmentWhereInput;
  };

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput;
    some?: AuditLogWhereInput;
    none?: AuditLogWhereInput;
  };

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    priority?: SortOrder;
    active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    priority?: SortOrder;
    active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    priority?: SortOrder;
    active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[];
    notIn?: $Enums.Role[];
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, "path">
        >,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, "path">>;

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string;
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue;
    lte?: InputJsonValue;
    gt?: InputJsonValue;
    gte?: InputJsonValue;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type SpecialistOrderByRelevanceInput = {
    fields:
      | SpecialistOrderByRelevanceFieldEnum
      | SpecialistOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type SpecialistCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    specialty?: SortOrder;
    daily_limit?: SortOrder;
    min_interval_minutes?: SortOrder;
    availability?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type SpecialistAvgOrderByAggregateInput = {
    daily_limit?: SortOrder;
    min_interval_minutes?: SortOrder;
  };

  export type SpecialistMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    specialty?: SortOrder;
    daily_limit?: SortOrder;
    min_interval_minutes?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type SpecialistMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    specialty?: SortOrder;
    daily_limit?: SortOrder;
    min_interval_minutes?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type SpecialistSumOrderByAggregateInput = {
    daily_limit?: SortOrder;
    min_interval_minutes?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
            "path"
          >
        >,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, "path">
      >;

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string;
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue;
    lte?: InputJsonValue;
    gt?: InputJsonValue;
    gte?: InputJsonValue;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedJsonFilter<$PrismaModel>;
    _max?: NestedJsonFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type ClientOrderByRelevanceInput = {
    fields: ClientOrderByRelevanceFieldEnum | ClientOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    phone?: SortOrder;
    cpf?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    phone?: SortOrder;
    cpf?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    phone?: SortOrder;
    cpf?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.AppointmentStatus
      | EnumAppointmentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AppointmentStatus[];
    notIn?: $Enums.AppointmentStatus[];
    not?:
      | NestedEnumAppointmentStatusFilter<$PrismaModel>
      | $Enums.AppointmentStatus;
  };

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput;
    isNot?: ClientWhereInput;
  };

  export type SpecialistScalarRelationFilter = {
    is?: SpecialistWhereInput;
    isNot?: SpecialistWhereInput;
  };

  export type AppointmentNullableScalarRelationFilter = {
    is?: AppointmentWhereInput | null;
    isNot?: AppointmentWhereInput | null;
  };

  export type AppointmentOrderByRelevanceInput = {
    fields:
      | AppointmentOrderByRelevanceFieldEnum
      | AppointmentOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder;
    client_id?: SortOrder;
    specialist_id?: SortOrder;
    scheduled_by_id?: SortOrder;
    date?: SortOrder;
    time?: SortOrder;
    status?: SortOrder;
    rescheduled_from_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder;
    client_id?: SortOrder;
    specialist_id?: SortOrder;
    scheduled_by_id?: SortOrder;
    date?: SortOrder;
    time?: SortOrder;
    status?: SortOrder;
    rescheduled_from_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder;
    client_id?: SortOrder;
    specialist_id?: SortOrder;
    scheduled_by_id?: SortOrder;
    date?: SortOrder;
    time?: SortOrder;
    status?: SortOrder;
    rescheduled_from_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.AppointmentStatus
        | EnumAppointmentStatusFieldRefInput<$PrismaModel>;
      in?: $Enums.AppointmentStatus[];
      notIn?: $Enums.AppointmentStatus[];
      not?:
        | NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel>
        | $Enums.AppointmentStatus;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>;
      _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>;
    };

  export type EnumActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ActionType[];
    notIn?: $Enums.ActionType[];
    not?: NestedEnumActionTypeFilter<$PrismaModel> | $Enums.ActionType;
  };

  export type AuditLogOrderByRelevanceInput = {
    fields:
      | AuditLogOrderByRelevanceFieldEnum
      | AuditLogOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    action_type?: SortOrder;
    entity?: SortOrder;
    entity_id?: SortOrder;
    message?: SortOrder;
    created_at?: SortOrder;
  };

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    action_type?: SortOrder;
    entity?: SortOrder;
    entity_id?: SortOrder;
    message?: SortOrder;
    created_at?: SortOrder;
  };

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    action_type?: SortOrder;
    entity?: SortOrder;
    entity_id?: SortOrder;
    message?: SortOrder;
    created_at?: SortOrder;
  };

  export type EnumActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ActionType[];
    notIn?: $Enums.ActionType[];
    not?:
      | NestedEnumActionTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.ActionType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumActionTypeFilter<$PrismaModel>;
    _max?: NestedEnumActionTypeFilter<$PrismaModel>;
  };

  export type SpecialistCreateNestedOneWithoutUserInput = {
    create?: XOR<
      SpecialistCreateWithoutUserInput,
      SpecialistUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: SpecialistCreateOrConnectWithoutUserInput;
    connect?: SpecialistWhereUniqueInput;
  };

  export type ClientCreateNestedOneWithoutUserInput = {
    create?: XOR<
      ClientCreateWithoutUserInput,
      ClientUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput;
    connect?: ClientWhereUniqueInput;
  };

  export type AppointmentCreateNestedManyWithoutScheduled_byInput = {
    create?:
      | XOR<
          AppointmentCreateWithoutScheduled_byInput,
          AppointmentUncheckedCreateWithoutScheduled_byInput
        >
      | AppointmentCreateWithoutScheduled_byInput[]
      | AppointmentUncheckedCreateWithoutScheduled_byInput[];
    connectOrCreate?:
      | AppointmentCreateOrConnectWithoutScheduled_byInput
      | AppointmentCreateOrConnectWithoutScheduled_byInput[];
    createMany?: AppointmentCreateManyScheduled_byInputEnvelope;
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
  };

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          AuditLogCreateWithoutUserInput,
          AuditLogUncheckedCreateWithoutUserInput
        >
      | AuditLogCreateWithoutUserInput[]
      | AuditLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AuditLogCreateOrConnectWithoutUserInput
      | AuditLogCreateOrConnectWithoutUserInput[];
    createMany?: AuditLogCreateManyUserInputEnvelope;
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
  };

  export type SpecialistUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      SpecialistCreateWithoutUserInput,
      SpecialistUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: SpecialistCreateOrConnectWithoutUserInput;
    connect?: SpecialistWhereUniqueInput;
  };

  export type ClientUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      ClientCreateWithoutUserInput,
      ClientUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput;
    connect?: ClientWhereUniqueInput;
  };

  export type AppointmentUncheckedCreateNestedManyWithoutScheduled_byInput = {
    create?:
      | XOR<
          AppointmentCreateWithoutScheduled_byInput,
          AppointmentUncheckedCreateWithoutScheduled_byInput
        >
      | AppointmentCreateWithoutScheduled_byInput[]
      | AppointmentUncheckedCreateWithoutScheduled_byInput[];
    connectOrCreate?:
      | AppointmentCreateOrConnectWithoutScheduled_byInput
      | AppointmentCreateOrConnectWithoutScheduled_byInput[];
    createMany?: AppointmentCreateManyScheduled_byInputEnvelope;
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
  };

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          AuditLogCreateWithoutUserInput,
          AuditLogUncheckedCreateWithoutUserInput
        >
      | AuditLogCreateWithoutUserInput[]
      | AuditLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AuditLogCreateOrConnectWithoutUserInput
      | AuditLogCreateOrConnectWithoutUserInput[];
    createMany?: AuditLogCreateManyUserInputEnvelope;
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type SpecialistUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      SpecialistCreateWithoutUserInput,
      SpecialistUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: SpecialistCreateOrConnectWithoutUserInput;
    upsert?: SpecialistUpsertWithoutUserInput;
    disconnect?: SpecialistWhereInput | boolean;
    delete?: SpecialistWhereInput | boolean;
    connect?: SpecialistWhereUniqueInput;
    update?: XOR<
      XOR<
        SpecialistUpdateToOneWithWhereWithoutUserInput,
        SpecialistUpdateWithoutUserInput
      >,
      SpecialistUncheckedUpdateWithoutUserInput
    >;
  };

  export type ClientUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      ClientCreateWithoutUserInput,
      ClientUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput;
    upsert?: ClientUpsertWithoutUserInput;
    disconnect?: ClientWhereInput | boolean;
    delete?: ClientWhereInput | boolean;
    connect?: ClientWhereUniqueInput;
    update?: XOR<
      XOR<
        ClientUpdateToOneWithWhereWithoutUserInput,
        ClientUpdateWithoutUserInput
      >,
      ClientUncheckedUpdateWithoutUserInput
    >;
  };

  export type AppointmentUpdateManyWithoutScheduled_byNestedInput = {
    create?:
      | XOR<
          AppointmentCreateWithoutScheduled_byInput,
          AppointmentUncheckedCreateWithoutScheduled_byInput
        >
      | AppointmentCreateWithoutScheduled_byInput[]
      | AppointmentUncheckedCreateWithoutScheduled_byInput[];
    connectOrCreate?:
      | AppointmentCreateOrConnectWithoutScheduled_byInput
      | AppointmentCreateOrConnectWithoutScheduled_byInput[];
    upsert?:
      | AppointmentUpsertWithWhereUniqueWithoutScheduled_byInput
      | AppointmentUpsertWithWhereUniqueWithoutScheduled_byInput[];
    createMany?: AppointmentCreateManyScheduled_byInputEnvelope;
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    update?:
      | AppointmentUpdateWithWhereUniqueWithoutScheduled_byInput
      | AppointmentUpdateWithWhereUniqueWithoutScheduled_byInput[];
    updateMany?:
      | AppointmentUpdateManyWithWhereWithoutScheduled_byInput
      | AppointmentUpdateManyWithWhereWithoutScheduled_byInput[];
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[];
  };

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          AuditLogCreateWithoutUserInput,
          AuditLogUncheckedCreateWithoutUserInput
        >
      | AuditLogCreateWithoutUserInput[]
      | AuditLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AuditLogCreateOrConnectWithoutUserInput
      | AuditLogCreateOrConnectWithoutUserInput[];
    upsert?:
      | AuditLogUpsertWithWhereUniqueWithoutUserInput
      | AuditLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AuditLogCreateManyUserInputEnvelope;
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    update?:
      | AuditLogUpdateWithWhereUniqueWithoutUserInput
      | AuditLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | AuditLogUpdateManyWithWhereWithoutUserInput
      | AuditLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[];
  };

  export type SpecialistUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      SpecialistCreateWithoutUserInput,
      SpecialistUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: SpecialistCreateOrConnectWithoutUserInput;
    upsert?: SpecialistUpsertWithoutUserInput;
    disconnect?: SpecialistWhereInput | boolean;
    delete?: SpecialistWhereInput | boolean;
    connect?: SpecialistWhereUniqueInput;
    update?: XOR<
      XOR<
        SpecialistUpdateToOneWithWhereWithoutUserInput,
        SpecialistUpdateWithoutUserInput
      >,
      SpecialistUncheckedUpdateWithoutUserInput
    >;
  };

  export type ClientUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      ClientCreateWithoutUserInput,
      ClientUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput;
    upsert?: ClientUpsertWithoutUserInput;
    disconnect?: ClientWhereInput | boolean;
    delete?: ClientWhereInput | boolean;
    connect?: ClientWhereUniqueInput;
    update?: XOR<
      XOR<
        ClientUpdateToOneWithWhereWithoutUserInput,
        ClientUpdateWithoutUserInput
      >,
      ClientUncheckedUpdateWithoutUserInput
    >;
  };

  export type AppointmentUncheckedUpdateManyWithoutScheduled_byNestedInput = {
    create?:
      | XOR<
          AppointmentCreateWithoutScheduled_byInput,
          AppointmentUncheckedCreateWithoutScheduled_byInput
        >
      | AppointmentCreateWithoutScheduled_byInput[]
      | AppointmentUncheckedCreateWithoutScheduled_byInput[];
    connectOrCreate?:
      | AppointmentCreateOrConnectWithoutScheduled_byInput
      | AppointmentCreateOrConnectWithoutScheduled_byInput[];
    upsert?:
      | AppointmentUpsertWithWhereUniqueWithoutScheduled_byInput
      | AppointmentUpsertWithWhereUniqueWithoutScheduled_byInput[];
    createMany?: AppointmentCreateManyScheduled_byInputEnvelope;
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    update?:
      | AppointmentUpdateWithWhereUniqueWithoutScheduled_byInput
      | AppointmentUpdateWithWhereUniqueWithoutScheduled_byInput[];
    updateMany?:
      | AppointmentUpdateManyWithWhereWithoutScheduled_byInput
      | AppointmentUpdateManyWithWhereWithoutScheduled_byInput[];
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[];
  };

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          AuditLogCreateWithoutUserInput,
          AuditLogUncheckedCreateWithoutUserInput
        >
      | AuditLogCreateWithoutUserInput[]
      | AuditLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AuditLogCreateOrConnectWithoutUserInput
      | AuditLogCreateOrConnectWithoutUserInput[];
    upsert?:
      | AuditLogUpsertWithWhereUniqueWithoutUserInput
      | AuditLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AuditLogCreateManyUserInputEnvelope;
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    update?:
      | AuditLogUpdateWithWhereUniqueWithoutUserInput
      | AuditLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | AuditLogUpdateManyWithWhereWithoutUserInput
      | AuditLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutSpecialistInput = {
    create?: XOR<
      UserCreateWithoutSpecialistInput,
      UserUncheckedCreateWithoutSpecialistInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSpecialistInput;
    connect?: UserWhereUniqueInput;
  };

  export type AppointmentCreateNestedManyWithoutSpecialistInput = {
    create?:
      | XOR<
          AppointmentCreateWithoutSpecialistInput,
          AppointmentUncheckedCreateWithoutSpecialistInput
        >
      | AppointmentCreateWithoutSpecialistInput[]
      | AppointmentUncheckedCreateWithoutSpecialistInput[];
    connectOrCreate?:
      | AppointmentCreateOrConnectWithoutSpecialistInput
      | AppointmentCreateOrConnectWithoutSpecialistInput[];
    createMany?: AppointmentCreateManySpecialistInputEnvelope;
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
  };

  export type AppointmentUncheckedCreateNestedManyWithoutSpecialistInput = {
    create?:
      | XOR<
          AppointmentCreateWithoutSpecialistInput,
          AppointmentUncheckedCreateWithoutSpecialistInput
        >
      | AppointmentCreateWithoutSpecialistInput[]
      | AppointmentUncheckedCreateWithoutSpecialistInput[];
    connectOrCreate?:
      | AppointmentCreateOrConnectWithoutSpecialistInput
      | AppointmentCreateOrConnectWithoutSpecialistInput[];
    createMany?: AppointmentCreateManySpecialistInputEnvelope;
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type UserUpdateOneRequiredWithoutSpecialistNestedInput = {
    create?: XOR<
      UserCreateWithoutSpecialistInput,
      UserUncheckedCreateWithoutSpecialistInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSpecialistInput;
    upsert?: UserUpsertWithoutSpecialistInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutSpecialistInput,
        UserUpdateWithoutSpecialistInput
      >,
      UserUncheckedUpdateWithoutSpecialistInput
    >;
  };

  export type AppointmentUpdateManyWithoutSpecialistNestedInput = {
    create?:
      | XOR<
          AppointmentCreateWithoutSpecialistInput,
          AppointmentUncheckedCreateWithoutSpecialistInput
        >
      | AppointmentCreateWithoutSpecialistInput[]
      | AppointmentUncheckedCreateWithoutSpecialistInput[];
    connectOrCreate?:
      | AppointmentCreateOrConnectWithoutSpecialistInput
      | AppointmentCreateOrConnectWithoutSpecialistInput[];
    upsert?:
      | AppointmentUpsertWithWhereUniqueWithoutSpecialistInput
      | AppointmentUpsertWithWhereUniqueWithoutSpecialistInput[];
    createMany?: AppointmentCreateManySpecialistInputEnvelope;
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    update?:
      | AppointmentUpdateWithWhereUniqueWithoutSpecialistInput
      | AppointmentUpdateWithWhereUniqueWithoutSpecialistInput[];
    updateMany?:
      | AppointmentUpdateManyWithWhereWithoutSpecialistInput
      | AppointmentUpdateManyWithWhereWithoutSpecialistInput[];
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[];
  };

  export type AppointmentUncheckedUpdateManyWithoutSpecialistNestedInput = {
    create?:
      | XOR<
          AppointmentCreateWithoutSpecialistInput,
          AppointmentUncheckedCreateWithoutSpecialistInput
        >
      | AppointmentCreateWithoutSpecialistInput[]
      | AppointmentUncheckedCreateWithoutSpecialistInput[];
    connectOrCreate?:
      | AppointmentCreateOrConnectWithoutSpecialistInput
      | AppointmentCreateOrConnectWithoutSpecialistInput[];
    upsert?:
      | AppointmentUpsertWithWhereUniqueWithoutSpecialistInput
      | AppointmentUpsertWithWhereUniqueWithoutSpecialistInput[];
    createMany?: AppointmentCreateManySpecialistInputEnvelope;
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    update?:
      | AppointmentUpdateWithWhereUniqueWithoutSpecialistInput
      | AppointmentUpdateWithWhereUniqueWithoutSpecialistInput[];
    updateMany?:
      | AppointmentUpdateManyWithWhereWithoutSpecialistInput
      | AppointmentUpdateManyWithWhereWithoutSpecialistInput[];
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutClientInput = {
    create?: XOR<
      UserCreateWithoutClientInput,
      UserUncheckedCreateWithoutClientInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutClientInput;
    connect?: UserWhereUniqueInput;
  };

  export type AppointmentCreateNestedManyWithoutClientInput = {
    create?:
      | XOR<
          AppointmentCreateWithoutClientInput,
          AppointmentUncheckedCreateWithoutClientInput
        >
      | AppointmentCreateWithoutClientInput[]
      | AppointmentUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | AppointmentCreateOrConnectWithoutClientInput
      | AppointmentCreateOrConnectWithoutClientInput[];
    createMany?: AppointmentCreateManyClientInputEnvelope;
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
  };

  export type AppointmentUncheckedCreateNestedManyWithoutClientInput = {
    create?:
      | XOR<
          AppointmentCreateWithoutClientInput,
          AppointmentUncheckedCreateWithoutClientInput
        >
      | AppointmentCreateWithoutClientInput[]
      | AppointmentUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | AppointmentCreateOrConnectWithoutClientInput
      | AppointmentCreateOrConnectWithoutClientInput[];
    createMany?: AppointmentCreateManyClientInputEnvelope;
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type UserUpdateOneRequiredWithoutClientNestedInput = {
    create?: XOR<
      UserCreateWithoutClientInput,
      UserUncheckedCreateWithoutClientInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutClientInput;
    upsert?: UserUpsertWithoutClientInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutClientInput,
        UserUpdateWithoutClientInput
      >,
      UserUncheckedUpdateWithoutClientInput
    >;
  };

  export type AppointmentUpdateManyWithoutClientNestedInput = {
    create?:
      | XOR<
          AppointmentCreateWithoutClientInput,
          AppointmentUncheckedCreateWithoutClientInput
        >
      | AppointmentCreateWithoutClientInput[]
      | AppointmentUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | AppointmentCreateOrConnectWithoutClientInput
      | AppointmentCreateOrConnectWithoutClientInput[];
    upsert?:
      | AppointmentUpsertWithWhereUniqueWithoutClientInput
      | AppointmentUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: AppointmentCreateManyClientInputEnvelope;
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    update?:
      | AppointmentUpdateWithWhereUniqueWithoutClientInput
      | AppointmentUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?:
      | AppointmentUpdateManyWithWhereWithoutClientInput
      | AppointmentUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[];
  };

  export type AppointmentUncheckedUpdateManyWithoutClientNestedInput = {
    create?:
      | XOR<
          AppointmentCreateWithoutClientInput,
          AppointmentUncheckedCreateWithoutClientInput
        >
      | AppointmentCreateWithoutClientInput[]
      | AppointmentUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | AppointmentCreateOrConnectWithoutClientInput
      | AppointmentCreateOrConnectWithoutClientInput[];
    upsert?:
      | AppointmentUpsertWithWhereUniqueWithoutClientInput
      | AppointmentUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: AppointmentCreateManyClientInputEnvelope;
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    update?:
      | AppointmentUpdateWithWhereUniqueWithoutClientInput
      | AppointmentUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?:
      | AppointmentUpdateManyWithWhereWithoutClientInput
      | AppointmentUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[];
  };

  export type ClientCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<
      ClientCreateWithoutAppointmentsInput,
      ClientUncheckedCreateWithoutAppointmentsInput
    >;
    connectOrCreate?: ClientCreateOrConnectWithoutAppointmentsInput;
    connect?: ClientWhereUniqueInput;
  };

  export type SpecialistCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<
      SpecialistCreateWithoutAppointmentsInput,
      SpecialistUncheckedCreateWithoutAppointmentsInput
    >;
    connectOrCreate?: SpecialistCreateOrConnectWithoutAppointmentsInput;
    connect?: SpecialistWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutSchedulerInput = {
    create?: XOR<
      UserCreateWithoutSchedulerInput,
      UserUncheckedCreateWithoutSchedulerInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSchedulerInput;
    connect?: UserWhereUniqueInput;
  };

  export type AppointmentCreateNestedOneWithoutRescheduled_toInput = {
    create?: XOR<
      AppointmentCreateWithoutRescheduled_toInput,
      AppointmentUncheckedCreateWithoutRescheduled_toInput
    >;
    connectOrCreate?: AppointmentCreateOrConnectWithoutRescheduled_toInput;
    connect?: AppointmentWhereUniqueInput;
  };

  export type AppointmentCreateNestedManyWithoutRescheduled_fromInput = {
    create?:
      | XOR<
          AppointmentCreateWithoutRescheduled_fromInput,
          AppointmentUncheckedCreateWithoutRescheduled_fromInput
        >
      | AppointmentCreateWithoutRescheduled_fromInput[]
      | AppointmentUncheckedCreateWithoutRescheduled_fromInput[];
    connectOrCreate?:
      | AppointmentCreateOrConnectWithoutRescheduled_fromInput
      | AppointmentCreateOrConnectWithoutRescheduled_fromInput[];
    createMany?: AppointmentCreateManyRescheduled_fromInputEnvelope;
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
  };

  export type AppointmentUncheckedCreateNestedManyWithoutRescheduled_fromInput =
    {
      create?:
        | XOR<
            AppointmentCreateWithoutRescheduled_fromInput,
            AppointmentUncheckedCreateWithoutRescheduled_fromInput
          >
        | AppointmentCreateWithoutRescheduled_fromInput[]
        | AppointmentUncheckedCreateWithoutRescheduled_fromInput[];
      connectOrCreate?:
        | AppointmentCreateOrConnectWithoutRescheduled_fromInput
        | AppointmentCreateOrConnectWithoutRescheduled_fromInput[];
      createMany?: AppointmentCreateManyRescheduled_fromInputEnvelope;
      connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    };

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus;
  };

  export type ClientUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<
      ClientCreateWithoutAppointmentsInput,
      ClientUncheckedCreateWithoutAppointmentsInput
    >;
    connectOrCreate?: ClientCreateOrConnectWithoutAppointmentsInput;
    upsert?: ClientUpsertWithoutAppointmentsInput;
    connect?: ClientWhereUniqueInput;
    update?: XOR<
      XOR<
        ClientUpdateToOneWithWhereWithoutAppointmentsInput,
        ClientUpdateWithoutAppointmentsInput
      >,
      ClientUncheckedUpdateWithoutAppointmentsInput
    >;
  };

  export type SpecialistUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<
      SpecialistCreateWithoutAppointmentsInput,
      SpecialistUncheckedCreateWithoutAppointmentsInput
    >;
    connectOrCreate?: SpecialistCreateOrConnectWithoutAppointmentsInput;
    upsert?: SpecialistUpsertWithoutAppointmentsInput;
    connect?: SpecialistWhereUniqueInput;
    update?: XOR<
      XOR<
        SpecialistUpdateToOneWithWhereWithoutAppointmentsInput,
        SpecialistUpdateWithoutAppointmentsInput
      >,
      SpecialistUncheckedUpdateWithoutAppointmentsInput
    >;
  };

  export type UserUpdateOneRequiredWithoutSchedulerNestedInput = {
    create?: XOR<
      UserCreateWithoutSchedulerInput,
      UserUncheckedCreateWithoutSchedulerInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSchedulerInput;
    upsert?: UserUpsertWithoutSchedulerInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutSchedulerInput,
        UserUpdateWithoutSchedulerInput
      >,
      UserUncheckedUpdateWithoutSchedulerInput
    >;
  };

  export type AppointmentUpdateOneWithoutRescheduled_toNestedInput = {
    create?: XOR<
      AppointmentCreateWithoutRescheduled_toInput,
      AppointmentUncheckedCreateWithoutRescheduled_toInput
    >;
    connectOrCreate?: AppointmentCreateOrConnectWithoutRescheduled_toInput;
    upsert?: AppointmentUpsertWithoutRescheduled_toInput;
    disconnect?: AppointmentWhereInput | boolean;
    delete?: AppointmentWhereInput | boolean;
    connect?: AppointmentWhereUniqueInput;
    update?: XOR<
      XOR<
        AppointmentUpdateToOneWithWhereWithoutRescheduled_toInput,
        AppointmentUpdateWithoutRescheduled_toInput
      >,
      AppointmentUncheckedUpdateWithoutRescheduled_toInput
    >;
  };

  export type AppointmentUpdateManyWithoutRescheduled_fromNestedInput = {
    create?:
      | XOR<
          AppointmentCreateWithoutRescheduled_fromInput,
          AppointmentUncheckedCreateWithoutRescheduled_fromInput
        >
      | AppointmentCreateWithoutRescheduled_fromInput[]
      | AppointmentUncheckedCreateWithoutRescheduled_fromInput[];
    connectOrCreate?:
      | AppointmentCreateOrConnectWithoutRescheduled_fromInput
      | AppointmentCreateOrConnectWithoutRescheduled_fromInput[];
    upsert?:
      | AppointmentUpsertWithWhereUniqueWithoutRescheduled_fromInput
      | AppointmentUpsertWithWhereUniqueWithoutRescheduled_fromInput[];
    createMany?: AppointmentCreateManyRescheduled_fromInputEnvelope;
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
    update?:
      | AppointmentUpdateWithWhereUniqueWithoutRescheduled_fromInput
      | AppointmentUpdateWithWhereUniqueWithoutRescheduled_fromInput[];
    updateMany?:
      | AppointmentUpdateManyWithWhereWithoutRescheduled_fromInput
      | AppointmentUpdateManyWithWhereWithoutRescheduled_fromInput[];
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[];
  };

  export type AppointmentUncheckedUpdateManyWithoutRescheduled_fromNestedInput =
    {
      create?:
        | XOR<
            AppointmentCreateWithoutRescheduled_fromInput,
            AppointmentUncheckedCreateWithoutRescheduled_fromInput
          >
        | AppointmentCreateWithoutRescheduled_fromInput[]
        | AppointmentUncheckedCreateWithoutRescheduled_fromInput[];
      connectOrCreate?:
        | AppointmentCreateOrConnectWithoutRescheduled_fromInput
        | AppointmentCreateOrConnectWithoutRescheduled_fromInput[];
      upsert?:
        | AppointmentUpsertWithWhereUniqueWithoutRescheduled_fromInput
        | AppointmentUpsertWithWhereUniqueWithoutRescheduled_fromInput[];
      createMany?: AppointmentCreateManyRescheduled_fromInputEnvelope;
      set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
      disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
      delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
      connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[];
      update?:
        | AppointmentUpdateWithWhereUniqueWithoutRescheduled_fromInput
        | AppointmentUpdateWithWhereUniqueWithoutRescheduled_fromInput[];
      updateMany?:
        | AppointmentUpdateManyWithWhereWithoutRescheduled_fromInput
        | AppointmentUpdateManyWithWhereWithoutRescheduled_fromInput[];
      deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[];
    };

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<
      UserCreateWithoutAuditLogsInput,
      UserUncheckedCreateWithoutAuditLogsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput;
    connect?: UserWhereUniqueInput;
  };

  export type EnumActionTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActionType;
  };

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<
      UserCreateWithoutAuditLogsInput,
      UserUncheckedCreateWithoutAuditLogsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput;
    upsert?: UserUpsertWithoutAuditLogsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutAuditLogsInput,
        UserUpdateWithoutAuditLogsInput
      >,
      UserUncheckedUpdateWithoutAuditLogsInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[];
    notIn?: $Enums.Role[];
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[];
    notIn?: $Enums.Role[];
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, "path">
        >,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, "path">>;

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string;
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue;
    lte?: InputJsonValue;
    gt?: InputJsonValue;
    gte?: InputJsonValue;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.AppointmentStatus
      | EnumAppointmentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AppointmentStatus[];
    notIn?: $Enums.AppointmentStatus[];
    not?:
      | NestedEnumAppointmentStatusFilter<$PrismaModel>
      | $Enums.AppointmentStatus;
  };

  export type NestedEnumAppointmentStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.AppointmentStatus
      | EnumAppointmentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AppointmentStatus[];
    notIn?: $Enums.AppointmentStatus[];
    not?:
      | NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.AppointmentStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>;
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>;
  };

  export type NestedEnumActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ActionType[];
    notIn?: $Enums.ActionType[];
    not?: NestedEnumActionTypeFilter<$PrismaModel> | $Enums.ActionType;
  };

  export type NestedEnumActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ActionType[];
    notIn?: $Enums.ActionType[];
    not?:
      | NestedEnumActionTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.ActionType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumActionTypeFilter<$PrismaModel>;
    _max?: NestedEnumActionTypeFilter<$PrismaModel>;
  };

  export type SpecialistCreateWithoutUserInput = {
    id?: string;
    specialty: string;
    daily_limit: number;
    min_interval_minutes: number;
    availability: JsonNullValueInput | InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointments?: AppointmentCreateNestedManyWithoutSpecialistInput;
  };

  export type SpecialistUncheckedCreateWithoutUserInput = {
    id?: string;
    specialty: string;
    daily_limit: number;
    min_interval_minutes: number;
    availability: JsonNullValueInput | InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointments?: AppointmentUncheckedCreateNestedManyWithoutSpecialistInput;
  };

  export type SpecialistCreateOrConnectWithoutUserInput = {
    where: SpecialistWhereUniqueInput;
    create: XOR<
      SpecialistCreateWithoutUserInput,
      SpecialistUncheckedCreateWithoutUserInput
    >;
  };

  export type ClientCreateWithoutUserInput = {
    id?: string;
    phone: string;
    cpf?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointments?: AppointmentCreateNestedManyWithoutClientInput;
  };

  export type ClientUncheckedCreateWithoutUserInput = {
    id?: string;
    phone: string;
    cpf?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointments?: AppointmentUncheckedCreateNestedManyWithoutClientInput;
  };

  export type ClientCreateOrConnectWithoutUserInput = {
    where: ClientWhereUniqueInput;
    create: XOR<
      ClientCreateWithoutUserInput,
      ClientUncheckedCreateWithoutUserInput
    >;
  };

  export type AppointmentCreateWithoutScheduled_byInput = {
    id?: string;
    date: Date | string;
    time: string;
    status?: $Enums.AppointmentStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    client: ClientCreateNestedOneWithoutAppointmentsInput;
    specialist: SpecialistCreateNestedOneWithoutAppointmentsInput;
    rescheduled_from?: AppointmentCreateNestedOneWithoutRescheduled_toInput;
    rescheduled_to?: AppointmentCreateNestedManyWithoutRescheduled_fromInput;
  };

  export type AppointmentUncheckedCreateWithoutScheduled_byInput = {
    id?: string;
    client_id: string;
    specialist_id: string;
    date: Date | string;
    time: string;
    status?: $Enums.AppointmentStatus;
    rescheduled_from_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    rescheduled_to?: AppointmentUncheckedCreateNestedManyWithoutRescheduled_fromInput;
  };

  export type AppointmentCreateOrConnectWithoutScheduled_byInput = {
    where: AppointmentWhereUniqueInput;
    create: XOR<
      AppointmentCreateWithoutScheduled_byInput,
      AppointmentUncheckedCreateWithoutScheduled_byInput
    >;
  };

  export type AppointmentCreateManyScheduled_byInputEnvelope = {
    data:
      | AppointmentCreateManyScheduled_byInput
      | AppointmentCreateManyScheduled_byInput[];
    skipDuplicates?: boolean;
  };

  export type AuditLogCreateWithoutUserInput = {
    id?: string;
    action_type: $Enums.ActionType;
    entity: string;
    entity_id: string;
    message?: string | null;
    created_at?: Date | string;
  };

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string;
    action_type: $Enums.ActionType;
    entity: string;
    entity_id: string;
    message?: string | null;
    created_at?: Date | string;
  };

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput;
    create: XOR<
      AuditLogCreateWithoutUserInput,
      AuditLogUncheckedCreateWithoutUserInput
    >;
  };

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type SpecialistUpsertWithoutUserInput = {
    update: XOR<
      SpecialistUpdateWithoutUserInput,
      SpecialistUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      SpecialistCreateWithoutUserInput,
      SpecialistUncheckedCreateWithoutUserInput
    >;
    where?: SpecialistWhereInput;
  };

  export type SpecialistUpdateToOneWithWhereWithoutUserInput = {
    where?: SpecialistWhereInput;
    data: XOR<
      SpecialistUpdateWithoutUserInput,
      SpecialistUncheckedUpdateWithoutUserInput
    >;
  };

  export type SpecialistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialty?: StringFieldUpdateOperationsInput | string;
    daily_limit?: IntFieldUpdateOperationsInput | number;
    min_interval_minutes?: IntFieldUpdateOperationsInput | number;
    availability?: JsonNullValueInput | InputJsonValue;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointments?: AppointmentUpdateManyWithoutSpecialistNestedInput;
  };

  export type SpecialistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialty?: StringFieldUpdateOperationsInput | string;
    daily_limit?: IntFieldUpdateOperationsInput | number;
    min_interval_minutes?: IntFieldUpdateOperationsInput | number;
    availability?: JsonNullValueInput | InputJsonValue;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointments?: AppointmentUncheckedUpdateManyWithoutSpecialistNestedInput;
  };

  export type ClientUpsertWithoutUserInput = {
    update: XOR<
      ClientUpdateWithoutUserInput,
      ClientUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ClientCreateWithoutUserInput,
      ClientUncheckedCreateWithoutUserInput
    >;
    where?: ClientWhereInput;
  };

  export type ClientUpdateToOneWithWhereWithoutUserInput = {
    where?: ClientWhereInput;
    data: XOR<
      ClientUpdateWithoutUserInput,
      ClientUncheckedUpdateWithoutUserInput
    >;
  };

  export type ClientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    cpf?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointments?: AppointmentUpdateManyWithoutClientNestedInput;
  };

  export type ClientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    cpf?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointments?: AppointmentUncheckedUpdateManyWithoutClientNestedInput;
  };

  export type AppointmentUpsertWithWhereUniqueWithoutScheduled_byInput = {
    where: AppointmentWhereUniqueInput;
    update: XOR<
      AppointmentUpdateWithoutScheduled_byInput,
      AppointmentUncheckedUpdateWithoutScheduled_byInput
    >;
    create: XOR<
      AppointmentCreateWithoutScheduled_byInput,
      AppointmentUncheckedCreateWithoutScheduled_byInput
    >;
  };

  export type AppointmentUpdateWithWhereUniqueWithoutScheduled_byInput = {
    where: AppointmentWhereUniqueInput;
    data: XOR<
      AppointmentUpdateWithoutScheduled_byInput,
      AppointmentUncheckedUpdateWithoutScheduled_byInput
    >;
  };

  export type AppointmentUpdateManyWithWhereWithoutScheduled_byInput = {
    where: AppointmentScalarWhereInput;
    data: XOR<
      AppointmentUpdateManyMutationInput,
      AppointmentUncheckedUpdateManyWithoutScheduled_byInput
    >;
  };

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[];
    OR?: AppointmentScalarWhereInput[];
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[];
    id?: StringFilter<"Appointment"> | string;
    client_id?: StringFilter<"Appointment"> | string;
    specialist_id?: StringFilter<"Appointment"> | string;
    scheduled_by_id?: StringFilter<"Appointment"> | string;
    date?: DateTimeFilter<"Appointment"> | Date | string;
    time?: StringFilter<"Appointment"> | string;
    status?:
      | EnumAppointmentStatusFilter<"Appointment">
      | $Enums.AppointmentStatus;
    rescheduled_from_id?: StringNullableFilter<"Appointment"> | string | null;
    created_at?: DateTimeFilter<"Appointment"> | Date | string;
    updated_at?: DateTimeFilter<"Appointment"> | Date | string;
  };

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput;
    update: XOR<
      AuditLogUpdateWithoutUserInput,
      AuditLogUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      AuditLogCreateWithoutUserInput,
      AuditLogUncheckedCreateWithoutUserInput
    >;
  };

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput;
    data: XOR<
      AuditLogUpdateWithoutUserInput,
      AuditLogUncheckedUpdateWithoutUserInput
    >;
  };

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput;
    data: XOR<
      AuditLogUpdateManyMutationInput,
      AuditLogUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[];
    OR?: AuditLogScalarWhereInput[];
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[];
    id?: StringFilter<"AuditLog"> | string;
    user_id?: StringFilter<"AuditLog"> | string;
    action_type?: EnumActionTypeFilter<"AuditLog"> | $Enums.ActionType;
    entity?: StringFilter<"AuditLog"> | string;
    entity_id?: StringFilter<"AuditLog"> | string;
    message?: StringNullableFilter<"AuditLog"> | string | null;
    created_at?: DateTimeFilter<"AuditLog"> | Date | string;
  };

  export type UserCreateWithoutSpecialistInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    priority?: boolean;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    client?: ClientCreateNestedOneWithoutUserInput;
    scheduler?: AppointmentCreateNestedManyWithoutScheduled_byInput;
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutSpecialistInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    priority?: boolean;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    client?: ClientUncheckedCreateNestedOneWithoutUserInput;
    scheduler?: AppointmentUncheckedCreateNestedManyWithoutScheduled_byInput;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutSpecialistInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutSpecialistInput,
      UserUncheckedCreateWithoutSpecialistInput
    >;
  };

  export type AppointmentCreateWithoutSpecialistInput = {
    id?: string;
    date: Date | string;
    time: string;
    status?: $Enums.AppointmentStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    client: ClientCreateNestedOneWithoutAppointmentsInput;
    scheduled_by: UserCreateNestedOneWithoutSchedulerInput;
    rescheduled_from?: AppointmentCreateNestedOneWithoutRescheduled_toInput;
    rescheduled_to?: AppointmentCreateNestedManyWithoutRescheduled_fromInput;
  };

  export type AppointmentUncheckedCreateWithoutSpecialistInput = {
    id?: string;
    client_id: string;
    scheduled_by_id: string;
    date: Date | string;
    time: string;
    status?: $Enums.AppointmentStatus;
    rescheduled_from_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    rescheduled_to?: AppointmentUncheckedCreateNestedManyWithoutRescheduled_fromInput;
  };

  export type AppointmentCreateOrConnectWithoutSpecialistInput = {
    where: AppointmentWhereUniqueInput;
    create: XOR<
      AppointmentCreateWithoutSpecialistInput,
      AppointmentUncheckedCreateWithoutSpecialistInput
    >;
  };

  export type AppointmentCreateManySpecialistInputEnvelope = {
    data:
      | AppointmentCreateManySpecialistInput
      | AppointmentCreateManySpecialistInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutSpecialistInput = {
    update: XOR<
      UserUpdateWithoutSpecialistInput,
      UserUncheckedUpdateWithoutSpecialistInput
    >;
    create: XOR<
      UserCreateWithoutSpecialistInput,
      UserUncheckedCreateWithoutSpecialistInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutSpecialistInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutSpecialistInput,
      UserUncheckedUpdateWithoutSpecialistInput
    >;
  };

  export type UserUpdateWithoutSpecialistInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    priority?: BoolFieldUpdateOperationsInput | boolean;
    active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client?: ClientUpdateOneWithoutUserNestedInput;
    scheduler?: AppointmentUpdateManyWithoutScheduled_byNestedInput;
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutSpecialistInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    priority?: BoolFieldUpdateOperationsInput | boolean;
    active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client?: ClientUncheckedUpdateOneWithoutUserNestedInput;
    scheduler?: AppointmentUncheckedUpdateManyWithoutScheduled_byNestedInput;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type AppointmentUpsertWithWhereUniqueWithoutSpecialistInput = {
    where: AppointmentWhereUniqueInput;
    update: XOR<
      AppointmentUpdateWithoutSpecialistInput,
      AppointmentUncheckedUpdateWithoutSpecialistInput
    >;
    create: XOR<
      AppointmentCreateWithoutSpecialistInput,
      AppointmentUncheckedCreateWithoutSpecialistInput
    >;
  };

  export type AppointmentUpdateWithWhereUniqueWithoutSpecialistInput = {
    where: AppointmentWhereUniqueInput;
    data: XOR<
      AppointmentUpdateWithoutSpecialistInput,
      AppointmentUncheckedUpdateWithoutSpecialistInput
    >;
  };

  export type AppointmentUpdateManyWithWhereWithoutSpecialistInput = {
    where: AppointmentScalarWhereInput;
    data: XOR<
      AppointmentUpdateManyMutationInput,
      AppointmentUncheckedUpdateManyWithoutSpecialistInput
    >;
  };

  export type UserCreateWithoutClientInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    priority?: boolean;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    specialist?: SpecialistCreateNestedOneWithoutUserInput;
    scheduler?: AppointmentCreateNestedManyWithoutScheduled_byInput;
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutClientInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    priority?: boolean;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    specialist?: SpecialistUncheckedCreateNestedOneWithoutUserInput;
    scheduler?: AppointmentUncheckedCreateNestedManyWithoutScheduled_byInput;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutClientInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutClientInput,
      UserUncheckedCreateWithoutClientInput
    >;
  };

  export type AppointmentCreateWithoutClientInput = {
    id?: string;
    date: Date | string;
    time: string;
    status?: $Enums.AppointmentStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    specialist: SpecialistCreateNestedOneWithoutAppointmentsInput;
    scheduled_by: UserCreateNestedOneWithoutSchedulerInput;
    rescheduled_from?: AppointmentCreateNestedOneWithoutRescheduled_toInput;
    rescheduled_to?: AppointmentCreateNestedManyWithoutRescheduled_fromInput;
  };

  export type AppointmentUncheckedCreateWithoutClientInput = {
    id?: string;
    specialist_id: string;
    scheduled_by_id: string;
    date: Date | string;
    time: string;
    status?: $Enums.AppointmentStatus;
    rescheduled_from_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    rescheduled_to?: AppointmentUncheckedCreateNestedManyWithoutRescheduled_fromInput;
  };

  export type AppointmentCreateOrConnectWithoutClientInput = {
    where: AppointmentWhereUniqueInput;
    create: XOR<
      AppointmentCreateWithoutClientInput,
      AppointmentUncheckedCreateWithoutClientInput
    >;
  };

  export type AppointmentCreateManyClientInputEnvelope = {
    data: AppointmentCreateManyClientInput | AppointmentCreateManyClientInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutClientInput = {
    update: XOR<
      UserUpdateWithoutClientInput,
      UserUncheckedUpdateWithoutClientInput
    >;
    create: XOR<
      UserCreateWithoutClientInput,
      UserUncheckedCreateWithoutClientInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutClientInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutClientInput,
      UserUncheckedUpdateWithoutClientInput
    >;
  };

  export type UserUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    priority?: BoolFieldUpdateOperationsInput | boolean;
    active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    specialist?: SpecialistUpdateOneWithoutUserNestedInput;
    scheduler?: AppointmentUpdateManyWithoutScheduled_byNestedInput;
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    priority?: BoolFieldUpdateOperationsInput | boolean;
    active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    specialist?: SpecialistUncheckedUpdateOneWithoutUserNestedInput;
    scheduler?: AppointmentUncheckedUpdateManyWithoutScheduled_byNestedInput;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type AppointmentUpsertWithWhereUniqueWithoutClientInput = {
    where: AppointmentWhereUniqueInput;
    update: XOR<
      AppointmentUpdateWithoutClientInput,
      AppointmentUncheckedUpdateWithoutClientInput
    >;
    create: XOR<
      AppointmentCreateWithoutClientInput,
      AppointmentUncheckedCreateWithoutClientInput
    >;
  };

  export type AppointmentUpdateWithWhereUniqueWithoutClientInput = {
    where: AppointmentWhereUniqueInput;
    data: XOR<
      AppointmentUpdateWithoutClientInput,
      AppointmentUncheckedUpdateWithoutClientInput
    >;
  };

  export type AppointmentUpdateManyWithWhereWithoutClientInput = {
    where: AppointmentScalarWhereInput;
    data: XOR<
      AppointmentUpdateManyMutationInput,
      AppointmentUncheckedUpdateManyWithoutClientInput
    >;
  };

  export type ClientCreateWithoutAppointmentsInput = {
    id?: string;
    phone: string;
    cpf?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: UserCreateNestedOneWithoutClientInput;
  };

  export type ClientUncheckedCreateWithoutAppointmentsInput = {
    id?: string;
    user_id: string;
    phone: string;
    cpf?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ClientCreateOrConnectWithoutAppointmentsInput = {
    where: ClientWhereUniqueInput;
    create: XOR<
      ClientCreateWithoutAppointmentsInput,
      ClientUncheckedCreateWithoutAppointmentsInput
    >;
  };

  export type SpecialistCreateWithoutAppointmentsInput = {
    id?: string;
    specialty: string;
    daily_limit: number;
    min_interval_minutes: number;
    availability: JsonNullValueInput | InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: UserCreateNestedOneWithoutSpecialistInput;
  };

  export type SpecialistUncheckedCreateWithoutAppointmentsInput = {
    id?: string;
    user_id: string;
    specialty: string;
    daily_limit: number;
    min_interval_minutes: number;
    availability: JsonNullValueInput | InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type SpecialistCreateOrConnectWithoutAppointmentsInput = {
    where: SpecialistWhereUniqueInput;
    create: XOR<
      SpecialistCreateWithoutAppointmentsInput,
      SpecialistUncheckedCreateWithoutAppointmentsInput
    >;
  };

  export type UserCreateWithoutSchedulerInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    priority?: boolean;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    specialist?: SpecialistCreateNestedOneWithoutUserInput;
    client?: ClientCreateNestedOneWithoutUserInput;
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutSchedulerInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    priority?: boolean;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    specialist?: SpecialistUncheckedCreateNestedOneWithoutUserInput;
    client?: ClientUncheckedCreateNestedOneWithoutUserInput;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutSchedulerInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutSchedulerInput,
      UserUncheckedCreateWithoutSchedulerInput
    >;
  };

  export type AppointmentCreateWithoutRescheduled_toInput = {
    id?: string;
    date: Date | string;
    time: string;
    status?: $Enums.AppointmentStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    client: ClientCreateNestedOneWithoutAppointmentsInput;
    specialist: SpecialistCreateNestedOneWithoutAppointmentsInput;
    scheduled_by: UserCreateNestedOneWithoutSchedulerInput;
    rescheduled_from?: AppointmentCreateNestedOneWithoutRescheduled_toInput;
  };

  export type AppointmentUncheckedCreateWithoutRescheduled_toInput = {
    id?: string;
    client_id: string;
    specialist_id: string;
    scheduled_by_id: string;
    date: Date | string;
    time: string;
    status?: $Enums.AppointmentStatus;
    rescheduled_from_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type AppointmentCreateOrConnectWithoutRescheduled_toInput = {
    where: AppointmentWhereUniqueInput;
    create: XOR<
      AppointmentCreateWithoutRescheduled_toInput,
      AppointmentUncheckedCreateWithoutRescheduled_toInput
    >;
  };

  export type AppointmentCreateWithoutRescheduled_fromInput = {
    id?: string;
    date: Date | string;
    time: string;
    status?: $Enums.AppointmentStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    client: ClientCreateNestedOneWithoutAppointmentsInput;
    specialist: SpecialistCreateNestedOneWithoutAppointmentsInput;
    scheduled_by: UserCreateNestedOneWithoutSchedulerInput;
    rescheduled_to?: AppointmentCreateNestedManyWithoutRescheduled_fromInput;
  };

  export type AppointmentUncheckedCreateWithoutRescheduled_fromInput = {
    id?: string;
    client_id: string;
    specialist_id: string;
    scheduled_by_id: string;
    date: Date | string;
    time: string;
    status?: $Enums.AppointmentStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    rescheduled_to?: AppointmentUncheckedCreateNestedManyWithoutRescheduled_fromInput;
  };

  export type AppointmentCreateOrConnectWithoutRescheduled_fromInput = {
    where: AppointmentWhereUniqueInput;
    create: XOR<
      AppointmentCreateWithoutRescheduled_fromInput,
      AppointmentUncheckedCreateWithoutRescheduled_fromInput
    >;
  };

  export type AppointmentCreateManyRescheduled_fromInputEnvelope = {
    data:
      | AppointmentCreateManyRescheduled_fromInput
      | AppointmentCreateManyRescheduled_fromInput[];
    skipDuplicates?: boolean;
  };

  export type ClientUpsertWithoutAppointmentsInput = {
    update: XOR<
      ClientUpdateWithoutAppointmentsInput,
      ClientUncheckedUpdateWithoutAppointmentsInput
    >;
    create: XOR<
      ClientCreateWithoutAppointmentsInput,
      ClientUncheckedCreateWithoutAppointmentsInput
    >;
    where?: ClientWhereInput;
  };

  export type ClientUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: ClientWhereInput;
    data: XOR<
      ClientUpdateWithoutAppointmentsInput,
      ClientUncheckedUpdateWithoutAppointmentsInput
    >;
  };

  export type ClientUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    cpf?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutClientNestedInput;
  };

  export type ClientUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    cpf?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SpecialistUpsertWithoutAppointmentsInput = {
    update: XOR<
      SpecialistUpdateWithoutAppointmentsInput,
      SpecialistUncheckedUpdateWithoutAppointmentsInput
    >;
    create: XOR<
      SpecialistCreateWithoutAppointmentsInput,
      SpecialistUncheckedCreateWithoutAppointmentsInput
    >;
    where?: SpecialistWhereInput;
  };

  export type SpecialistUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: SpecialistWhereInput;
    data: XOR<
      SpecialistUpdateWithoutAppointmentsInput,
      SpecialistUncheckedUpdateWithoutAppointmentsInput
    >;
  };

  export type SpecialistUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialty?: StringFieldUpdateOperationsInput | string;
    daily_limit?: IntFieldUpdateOperationsInput | number;
    min_interval_minutes?: IntFieldUpdateOperationsInput | number;
    availability?: JsonNullValueInput | InputJsonValue;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutSpecialistNestedInput;
  };

  export type SpecialistUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    specialty?: StringFieldUpdateOperationsInput | string;
    daily_limit?: IntFieldUpdateOperationsInput | number;
    min_interval_minutes?: IntFieldUpdateOperationsInput | number;
    availability?: JsonNullValueInput | InputJsonValue;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUpsertWithoutSchedulerInput = {
    update: XOR<
      UserUpdateWithoutSchedulerInput,
      UserUncheckedUpdateWithoutSchedulerInput
    >;
    create: XOR<
      UserCreateWithoutSchedulerInput,
      UserUncheckedCreateWithoutSchedulerInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutSchedulerInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutSchedulerInput,
      UserUncheckedUpdateWithoutSchedulerInput
    >;
  };

  export type UserUpdateWithoutSchedulerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    priority?: BoolFieldUpdateOperationsInput | boolean;
    active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    specialist?: SpecialistUpdateOneWithoutUserNestedInput;
    client?: ClientUpdateOneWithoutUserNestedInput;
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutSchedulerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    priority?: BoolFieldUpdateOperationsInput | boolean;
    active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    specialist?: SpecialistUncheckedUpdateOneWithoutUserNestedInput;
    client?: ClientUncheckedUpdateOneWithoutUserNestedInput;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type AppointmentUpsertWithoutRescheduled_toInput = {
    update: XOR<
      AppointmentUpdateWithoutRescheduled_toInput,
      AppointmentUncheckedUpdateWithoutRescheduled_toInput
    >;
    create: XOR<
      AppointmentCreateWithoutRescheduled_toInput,
      AppointmentUncheckedCreateWithoutRescheduled_toInput
    >;
    where?: AppointmentWhereInput;
  };

  export type AppointmentUpdateToOneWithWhereWithoutRescheduled_toInput = {
    where?: AppointmentWhereInput;
    data: XOR<
      AppointmentUpdateWithoutRescheduled_toInput,
      AppointmentUncheckedUpdateWithoutRescheduled_toInput
    >;
  };

  export type AppointmentUpdateWithoutRescheduled_toInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumAppointmentStatusFieldUpdateOperationsInput
      | $Enums.AppointmentStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client?: ClientUpdateOneRequiredWithoutAppointmentsNestedInput;
    specialist?: SpecialistUpdateOneRequiredWithoutAppointmentsNestedInput;
    scheduled_by?: UserUpdateOneRequiredWithoutSchedulerNestedInput;
    rescheduled_from?: AppointmentUpdateOneWithoutRescheduled_toNestedInput;
  };

  export type AppointmentUncheckedUpdateWithoutRescheduled_toInput = {
    id?: StringFieldUpdateOperationsInput | string;
    client_id?: StringFieldUpdateOperationsInput | string;
    specialist_id?: StringFieldUpdateOperationsInput | string;
    scheduled_by_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumAppointmentStatusFieldUpdateOperationsInput
      | $Enums.AppointmentStatus;
    rescheduled_from_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AppointmentUpsertWithWhereUniqueWithoutRescheduled_fromInput = {
    where: AppointmentWhereUniqueInput;
    update: XOR<
      AppointmentUpdateWithoutRescheduled_fromInput,
      AppointmentUncheckedUpdateWithoutRescheduled_fromInput
    >;
    create: XOR<
      AppointmentCreateWithoutRescheduled_fromInput,
      AppointmentUncheckedCreateWithoutRescheduled_fromInput
    >;
  };

  export type AppointmentUpdateWithWhereUniqueWithoutRescheduled_fromInput = {
    where: AppointmentWhereUniqueInput;
    data: XOR<
      AppointmentUpdateWithoutRescheduled_fromInput,
      AppointmentUncheckedUpdateWithoutRescheduled_fromInput
    >;
  };

  export type AppointmentUpdateManyWithWhereWithoutRescheduled_fromInput = {
    where: AppointmentScalarWhereInput;
    data: XOR<
      AppointmentUpdateManyMutationInput,
      AppointmentUncheckedUpdateManyWithoutRescheduled_fromInput
    >;
  };

  export type UserCreateWithoutAuditLogsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    priority?: boolean;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    specialist?: SpecialistCreateNestedOneWithoutUserInput;
    client?: ClientCreateNestedOneWithoutUserInput;
    scheduler?: AppointmentCreateNestedManyWithoutScheduled_byInput;
  };

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    priority?: boolean;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    specialist?: SpecialistUncheckedCreateNestedOneWithoutUserInput;
    client?: ClientUncheckedCreateNestedOneWithoutUserInput;
    scheduler?: AppointmentUncheckedCreateNestedManyWithoutScheduled_byInput;
  };

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutAuditLogsInput,
      UserUncheckedCreateWithoutAuditLogsInput
    >;
  };

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<
      UserUpdateWithoutAuditLogsInput,
      UserUncheckedUpdateWithoutAuditLogsInput
    >;
    create: XOR<
      UserCreateWithoutAuditLogsInput,
      UserUncheckedCreateWithoutAuditLogsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutAuditLogsInput,
      UserUncheckedUpdateWithoutAuditLogsInput
    >;
  };

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    priority?: BoolFieldUpdateOperationsInput | boolean;
    active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    specialist?: SpecialistUpdateOneWithoutUserNestedInput;
    client?: ClientUpdateOneWithoutUserNestedInput;
    scheduler?: AppointmentUpdateManyWithoutScheduled_byNestedInput;
  };

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    priority?: BoolFieldUpdateOperationsInput | boolean;
    active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    specialist?: SpecialistUncheckedUpdateOneWithoutUserNestedInput;
    client?: ClientUncheckedUpdateOneWithoutUserNestedInput;
    scheduler?: AppointmentUncheckedUpdateManyWithoutScheduled_byNestedInput;
  };

  export type AppointmentCreateManyScheduled_byInput = {
    id?: string;
    client_id: string;
    specialist_id: string;
    date: Date | string;
    time: string;
    status?: $Enums.AppointmentStatus;
    rescheduled_from_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type AuditLogCreateManyUserInput = {
    id?: string;
    action_type: $Enums.ActionType;
    entity: string;
    entity_id: string;
    message?: string | null;
    created_at?: Date | string;
  };

  export type AppointmentUpdateWithoutScheduled_byInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumAppointmentStatusFieldUpdateOperationsInput
      | $Enums.AppointmentStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client?: ClientUpdateOneRequiredWithoutAppointmentsNestedInput;
    specialist?: SpecialistUpdateOneRequiredWithoutAppointmentsNestedInput;
    rescheduled_from?: AppointmentUpdateOneWithoutRescheduled_toNestedInput;
    rescheduled_to?: AppointmentUpdateManyWithoutRescheduled_fromNestedInput;
  };

  export type AppointmentUncheckedUpdateWithoutScheduled_byInput = {
    id?: StringFieldUpdateOperationsInput | string;
    client_id?: StringFieldUpdateOperationsInput | string;
    specialist_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumAppointmentStatusFieldUpdateOperationsInput
      | $Enums.AppointmentStatus;
    rescheduled_from_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rescheduled_to?: AppointmentUncheckedUpdateManyWithoutRescheduled_fromNestedInput;
  };

  export type AppointmentUncheckedUpdateManyWithoutScheduled_byInput = {
    id?: StringFieldUpdateOperationsInput | string;
    client_id?: StringFieldUpdateOperationsInput | string;
    specialist_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumAppointmentStatusFieldUpdateOperationsInput
      | $Enums.AppointmentStatus;
    rescheduled_from_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    action_type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType;
    entity?: StringFieldUpdateOperationsInput | string;
    entity_id?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    action_type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType;
    entity?: StringFieldUpdateOperationsInput | string;
    entity_id?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    action_type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType;
    entity?: StringFieldUpdateOperationsInput | string;
    entity_id?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AppointmentCreateManySpecialistInput = {
    id?: string;
    client_id: string;
    scheduled_by_id: string;
    date: Date | string;
    time: string;
    status?: $Enums.AppointmentStatus;
    rescheduled_from_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type AppointmentUpdateWithoutSpecialistInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumAppointmentStatusFieldUpdateOperationsInput
      | $Enums.AppointmentStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client?: ClientUpdateOneRequiredWithoutAppointmentsNestedInput;
    scheduled_by?: UserUpdateOneRequiredWithoutSchedulerNestedInput;
    rescheduled_from?: AppointmentUpdateOneWithoutRescheduled_toNestedInput;
    rescheduled_to?: AppointmentUpdateManyWithoutRescheduled_fromNestedInput;
  };

  export type AppointmentUncheckedUpdateWithoutSpecialistInput = {
    id?: StringFieldUpdateOperationsInput | string;
    client_id?: StringFieldUpdateOperationsInput | string;
    scheduled_by_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumAppointmentStatusFieldUpdateOperationsInput
      | $Enums.AppointmentStatus;
    rescheduled_from_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rescheduled_to?: AppointmentUncheckedUpdateManyWithoutRescheduled_fromNestedInput;
  };

  export type AppointmentUncheckedUpdateManyWithoutSpecialistInput = {
    id?: StringFieldUpdateOperationsInput | string;
    client_id?: StringFieldUpdateOperationsInput | string;
    scheduled_by_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumAppointmentStatusFieldUpdateOperationsInput
      | $Enums.AppointmentStatus;
    rescheduled_from_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AppointmentCreateManyClientInput = {
    id?: string;
    specialist_id: string;
    scheduled_by_id: string;
    date: Date | string;
    time: string;
    status?: $Enums.AppointmentStatus;
    rescheduled_from_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type AppointmentUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumAppointmentStatusFieldUpdateOperationsInput
      | $Enums.AppointmentStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    specialist?: SpecialistUpdateOneRequiredWithoutAppointmentsNestedInput;
    scheduled_by?: UserUpdateOneRequiredWithoutSchedulerNestedInput;
    rescheduled_from?: AppointmentUpdateOneWithoutRescheduled_toNestedInput;
    rescheduled_to?: AppointmentUpdateManyWithoutRescheduled_fromNestedInput;
  };

  export type AppointmentUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialist_id?: StringFieldUpdateOperationsInput | string;
    scheduled_by_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumAppointmentStatusFieldUpdateOperationsInput
      | $Enums.AppointmentStatus;
    rescheduled_from_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rescheduled_to?: AppointmentUncheckedUpdateManyWithoutRescheduled_fromNestedInput;
  };

  export type AppointmentUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialist_id?: StringFieldUpdateOperationsInput | string;
    scheduled_by_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumAppointmentStatusFieldUpdateOperationsInput
      | $Enums.AppointmentStatus;
    rescheduled_from_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AppointmentCreateManyRescheduled_fromInput = {
    id?: string;
    client_id: string;
    specialist_id: string;
    scheduled_by_id: string;
    date: Date | string;
    time: string;
    status?: $Enums.AppointmentStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type AppointmentUpdateWithoutRescheduled_fromInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumAppointmentStatusFieldUpdateOperationsInput
      | $Enums.AppointmentStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client?: ClientUpdateOneRequiredWithoutAppointmentsNestedInput;
    specialist?: SpecialistUpdateOneRequiredWithoutAppointmentsNestedInput;
    scheduled_by?: UserUpdateOneRequiredWithoutSchedulerNestedInput;
    rescheduled_to?: AppointmentUpdateManyWithoutRescheduled_fromNestedInput;
  };

  export type AppointmentUncheckedUpdateWithoutRescheduled_fromInput = {
    id?: StringFieldUpdateOperationsInput | string;
    client_id?: StringFieldUpdateOperationsInput | string;
    specialist_id?: StringFieldUpdateOperationsInput | string;
    scheduled_by_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumAppointmentStatusFieldUpdateOperationsInput
      | $Enums.AppointmentStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rescheduled_to?: AppointmentUncheckedUpdateManyWithoutRescheduled_fromNestedInput;
  };

  export type AppointmentUncheckedUpdateManyWithoutRescheduled_fromInput = {
    id?: StringFieldUpdateOperationsInput | string;
    client_id?: StringFieldUpdateOperationsInput | string;
    specialist_id?: StringFieldUpdateOperationsInput | string;
    scheduled_by_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumAppointmentStatusFieldUpdateOperationsInput
      | $Enums.AppointmentStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
