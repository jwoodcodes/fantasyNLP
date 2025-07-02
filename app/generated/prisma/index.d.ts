
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model tradeAnalyzerData
 * 
 */
export type tradeAnalyzerData = $Result.DefaultSelection<Prisma.$tradeAnalyzerDataPayload>
/**
 * Model PlayerStat
 * 
 */
export type PlayerStat = $Result.DefaultSelection<Prisma.$PlayerStatPayload>
/**
 * Model ReceivingStat
 * 
 */
export type ReceivingStat = $Result.DefaultSelection<Prisma.$ReceivingStatPayload>
/**
 * Model PlayerSeason
 * 
 */
export type PlayerSeason = $Result.DefaultSelection<Prisma.$PlayerSeasonPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TradeAnalyzerData
 * const tradeAnalyzerData = await prisma.tradeAnalyzerData.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TradeAnalyzerData
   * const tradeAnalyzerData = await prisma.tradeAnalyzerData.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tradeAnalyzerData`: Exposes CRUD operations for the **tradeAnalyzerData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TradeAnalyzerData
    * const tradeAnalyzerData = await prisma.tradeAnalyzerData.findMany()
    * ```
    */
  get tradeAnalyzerData(): Prisma.tradeAnalyzerDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerStat`: Exposes CRUD operations for the **PlayerStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerStats
    * const playerStats = await prisma.playerStat.findMany()
    * ```
    */
  get playerStat(): Prisma.PlayerStatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receivingStat`: Exposes CRUD operations for the **ReceivingStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReceivingStats
    * const receivingStats = await prisma.receivingStat.findMany()
    * ```
    */
  get receivingStat(): Prisma.ReceivingStatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerSeason`: Exposes CRUD operations for the **PlayerSeason** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerSeasons
    * const playerSeasons = await prisma.playerSeason.findMany()
    * ```
    */
  get playerSeason(): Prisma.PlayerSeasonDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    tradeAnalyzerData: 'tradeAnalyzerData',
    PlayerStat: 'PlayerStat',
    ReceivingStat: 'ReceivingStat',
    PlayerSeason: 'PlayerSeason'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tradeAnalyzerData" | "playerStat" | "receivingStat" | "playerSeason"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tradeAnalyzerData: {
        payload: Prisma.$tradeAnalyzerDataPayload<ExtArgs>
        fields: Prisma.tradeAnalyzerDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tradeAnalyzerDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tradeAnalyzerDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload>
          }
          findFirst: {
            args: Prisma.tradeAnalyzerDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tradeAnalyzerDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload>
          }
          findMany: {
            args: Prisma.tradeAnalyzerDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload>[]
          }
          create: {
            args: Prisma.tradeAnalyzerDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload>
          }
          createMany: {
            args: Prisma.tradeAnalyzerDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tradeAnalyzerDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload>[]
          }
          delete: {
            args: Prisma.tradeAnalyzerDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload>
          }
          update: {
            args: Prisma.tradeAnalyzerDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload>
          }
          deleteMany: {
            args: Prisma.tradeAnalyzerDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tradeAnalyzerDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tradeAnalyzerDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload>[]
          }
          upsert: {
            args: Prisma.tradeAnalyzerDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload>
          }
          aggregate: {
            args: Prisma.TradeAnalyzerDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTradeAnalyzerData>
          }
          groupBy: {
            args: Prisma.tradeAnalyzerDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradeAnalyzerDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.tradeAnalyzerDataCountArgs<ExtArgs>
            result: $Utils.Optional<TradeAnalyzerDataCountAggregateOutputType> | number
          }
        }
      }
      PlayerStat: {
        payload: Prisma.$PlayerStatPayload<ExtArgs>
        fields: Prisma.PlayerStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatPayload>
          }
          findFirst: {
            args: Prisma.PlayerStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatPayload>
          }
          findMany: {
            args: Prisma.PlayerStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatPayload>[]
          }
          create: {
            args: Prisma.PlayerStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatPayload>
          }
          createMany: {
            args: Prisma.PlayerStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerStatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatPayload>[]
          }
          delete: {
            args: Prisma.PlayerStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatPayload>
          }
          update: {
            args: Prisma.PlayerStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatPayload>
          }
          deleteMany: {
            args: Prisma.PlayerStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerStatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatPayload>[]
          }
          upsert: {
            args: Prisma.PlayerStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatPayload>
          }
          aggregate: {
            args: Prisma.PlayerStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerStat>
          }
          groupBy: {
            args: Prisma.PlayerStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerStatGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerStatCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerStatCountAggregateOutputType> | number
          }
        }
      }
      ReceivingStat: {
        payload: Prisma.$ReceivingStatPayload<ExtArgs>
        fields: Prisma.ReceivingStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceivingStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceivingStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingStatPayload>
          }
          findFirst: {
            args: Prisma.ReceivingStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceivingStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingStatPayload>
          }
          findMany: {
            args: Prisma.ReceivingStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingStatPayload>[]
          }
          create: {
            args: Prisma.ReceivingStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingStatPayload>
          }
          createMany: {
            args: Prisma.ReceivingStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReceivingStatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingStatPayload>[]
          }
          delete: {
            args: Prisma.ReceivingStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingStatPayload>
          }
          update: {
            args: Prisma.ReceivingStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingStatPayload>
          }
          deleteMany: {
            args: Prisma.ReceivingStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceivingStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReceivingStatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingStatPayload>[]
          }
          upsert: {
            args: Prisma.ReceivingStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingStatPayload>
          }
          aggregate: {
            args: Prisma.ReceivingStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceivingStat>
          }
          groupBy: {
            args: Prisma.ReceivingStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceivingStatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceivingStatCountArgs<ExtArgs>
            result: $Utils.Optional<ReceivingStatCountAggregateOutputType> | number
          }
        }
      }
      PlayerSeason: {
        payload: Prisma.$PlayerSeasonPayload<ExtArgs>
        fields: Prisma.PlayerSeasonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerSeasonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSeasonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerSeasonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSeasonPayload>
          }
          findFirst: {
            args: Prisma.PlayerSeasonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSeasonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerSeasonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSeasonPayload>
          }
          findMany: {
            args: Prisma.PlayerSeasonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSeasonPayload>[]
          }
          create: {
            args: Prisma.PlayerSeasonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSeasonPayload>
          }
          createMany: {
            args: Prisma.PlayerSeasonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerSeasonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSeasonPayload>[]
          }
          delete: {
            args: Prisma.PlayerSeasonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSeasonPayload>
          }
          update: {
            args: Prisma.PlayerSeasonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSeasonPayload>
          }
          deleteMany: {
            args: Prisma.PlayerSeasonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerSeasonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerSeasonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSeasonPayload>[]
          }
          upsert: {
            args: Prisma.PlayerSeasonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSeasonPayload>
          }
          aggregate: {
            args: Prisma.PlayerSeasonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerSeason>
          }
          groupBy: {
            args: Prisma.PlayerSeasonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerSeasonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerSeasonCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerSeasonCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
  }
  export type GlobalOmitConfig = {
    tradeAnalyzerData?: tradeAnalyzerDataOmit
    playerStat?: PlayerStatOmit
    receivingStat?: ReceivingStatOmit
    playerSeason?: PlayerSeasonOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model tradeAnalyzerData
   */

  export type AggregateTradeAnalyzerData = {
    _count: TradeAnalyzerDataCountAggregateOutputType | null
    _avg: TradeAnalyzerDataAvgAggregateOutputType | null
    _sum: TradeAnalyzerDataSumAggregateOutputType | null
    _min: TradeAnalyzerDataMinAggregateOutputType | null
    _max: TradeAnalyzerDataMaxAggregateOutputType | null
  }

  export type TradeAnalyzerDataAvgAggregateOutputType = {
    marketValue: number | null
    myValue: number | null
    valueDiffBetweenMyValueAndMarketValue: number | null
    PRPScore: number | null
    valueDifferenceBetweenCurrentMarketValueAndPNODV: number | null
    PNODVScore: number | null
    RVSScore: number | null
    jaxValue: number | null
    travValue: number | null
    joeValue: number | null
    consensusValue: number | null
  }

  export type TradeAnalyzerDataSumAggregateOutputType = {
    marketValue: number | null
    myValue: number | null
    valueDiffBetweenMyValueAndMarketValue: number | null
    PRPScore: number | null
    valueDifferenceBetweenCurrentMarketValueAndPNODV: number | null
    PNODVScore: number | null
    RVSScore: number | null
    jaxValue: number | null
    travValue: number | null
    joeValue: number | null
    consensusValue: number | null
  }

  export type TradeAnalyzerDataMinAggregateOutputType = {
    id: string | null
    name: string | null
    position: string | null
    team: string | null
    marketValue: number | null
    myValue: number | null
    valueDiffBetweenMyValueAndMarketValue: number | null
    PRPScore: number | null
    valueDifferenceBetweenCurrentMarketValueAndPNODV: number | null
    PNODVScore: number | null
    RVSScore: number | null
    jaxValue: number | null
    travValue: number | null
    joeValue: number | null
    consensusValue: number | null
  }

  export type TradeAnalyzerDataMaxAggregateOutputType = {
    id: string | null
    name: string | null
    position: string | null
    team: string | null
    marketValue: number | null
    myValue: number | null
    valueDiffBetweenMyValueAndMarketValue: number | null
    PRPScore: number | null
    valueDifferenceBetweenCurrentMarketValueAndPNODV: number | null
    PNODVScore: number | null
    RVSScore: number | null
    jaxValue: number | null
    travValue: number | null
    joeValue: number | null
    consensusValue: number | null
  }

  export type TradeAnalyzerDataCountAggregateOutputType = {
    id: number
    name: number
    position: number
    team: number
    marketValue: number
    myValue: number
    valueDiffBetweenMyValueAndMarketValue: number
    PRPScore: number
    projectedNextOffseasonDynastyValue: number
    valueDifferenceBetweenCurrentMarketValueAndPNODV: number
    PNODVScore: number
    RVSScore: number
    jaxValue: number
    travValue: number
    joeValue: number
    consensusValue: number
    _all: number
  }


  export type TradeAnalyzerDataAvgAggregateInputType = {
    marketValue?: true
    myValue?: true
    valueDiffBetweenMyValueAndMarketValue?: true
    PRPScore?: true
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: true
    PNODVScore?: true
    RVSScore?: true
    jaxValue?: true
    travValue?: true
    joeValue?: true
    consensusValue?: true
  }

  export type TradeAnalyzerDataSumAggregateInputType = {
    marketValue?: true
    myValue?: true
    valueDiffBetweenMyValueAndMarketValue?: true
    PRPScore?: true
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: true
    PNODVScore?: true
    RVSScore?: true
    jaxValue?: true
    travValue?: true
    joeValue?: true
    consensusValue?: true
  }

  export type TradeAnalyzerDataMinAggregateInputType = {
    id?: true
    name?: true
    position?: true
    team?: true
    marketValue?: true
    myValue?: true
    valueDiffBetweenMyValueAndMarketValue?: true
    PRPScore?: true
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: true
    PNODVScore?: true
    RVSScore?: true
    jaxValue?: true
    travValue?: true
    joeValue?: true
    consensusValue?: true
  }

  export type TradeAnalyzerDataMaxAggregateInputType = {
    id?: true
    name?: true
    position?: true
    team?: true
    marketValue?: true
    myValue?: true
    valueDiffBetweenMyValueAndMarketValue?: true
    PRPScore?: true
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: true
    PNODVScore?: true
    RVSScore?: true
    jaxValue?: true
    travValue?: true
    joeValue?: true
    consensusValue?: true
  }

  export type TradeAnalyzerDataCountAggregateInputType = {
    id?: true
    name?: true
    position?: true
    team?: true
    marketValue?: true
    myValue?: true
    valueDiffBetweenMyValueAndMarketValue?: true
    PRPScore?: true
    projectedNextOffseasonDynastyValue?: true
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: true
    PNODVScore?: true
    RVSScore?: true
    jaxValue?: true
    travValue?: true
    joeValue?: true
    consensusValue?: true
    _all?: true
  }

  export type TradeAnalyzerDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tradeAnalyzerData to aggregate.
     */
    where?: tradeAnalyzerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tradeAnalyzerData to fetch.
     */
    orderBy?: tradeAnalyzerDataOrderByWithRelationInput | tradeAnalyzerDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tradeAnalyzerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tradeAnalyzerData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tradeAnalyzerData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tradeAnalyzerData
    **/
    _count?: true | TradeAnalyzerDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TradeAnalyzerDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TradeAnalyzerDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradeAnalyzerDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradeAnalyzerDataMaxAggregateInputType
  }

  export type GetTradeAnalyzerDataAggregateType<T extends TradeAnalyzerDataAggregateArgs> = {
        [P in keyof T & keyof AggregateTradeAnalyzerData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTradeAnalyzerData[P]>
      : GetScalarType<T[P], AggregateTradeAnalyzerData[P]>
  }




  export type tradeAnalyzerDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tradeAnalyzerDataWhereInput
    orderBy?: tradeAnalyzerDataOrderByWithAggregationInput | tradeAnalyzerDataOrderByWithAggregationInput[]
    by: TradeAnalyzerDataScalarFieldEnum[] | TradeAnalyzerDataScalarFieldEnum
    having?: tradeAnalyzerDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradeAnalyzerDataCountAggregateInputType | true
    _avg?: TradeAnalyzerDataAvgAggregateInputType
    _sum?: TradeAnalyzerDataSumAggregateInputType
    _min?: TradeAnalyzerDataMinAggregateInputType
    _max?: TradeAnalyzerDataMaxAggregateInputType
  }

  export type TradeAnalyzerDataGroupByOutputType = {
    id: string
    name: string | null
    position: string | null
    team: string | null
    marketValue: number | null
    myValue: number | null
    valueDiffBetweenMyValueAndMarketValue: number | null
    PRPScore: number | null
    projectedNextOffseasonDynastyValue: JsonValue | null
    valueDifferenceBetweenCurrentMarketValueAndPNODV: number | null
    PNODVScore: number | null
    RVSScore: number | null
    jaxValue: number | null
    travValue: number | null
    joeValue: number | null
    consensusValue: number | null
    _count: TradeAnalyzerDataCountAggregateOutputType | null
    _avg: TradeAnalyzerDataAvgAggregateOutputType | null
    _sum: TradeAnalyzerDataSumAggregateOutputType | null
    _min: TradeAnalyzerDataMinAggregateOutputType | null
    _max: TradeAnalyzerDataMaxAggregateOutputType | null
  }

  type GetTradeAnalyzerDataGroupByPayload<T extends tradeAnalyzerDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradeAnalyzerDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradeAnalyzerDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradeAnalyzerDataGroupByOutputType[P]>
            : GetScalarType<T[P], TradeAnalyzerDataGroupByOutputType[P]>
        }
      >
    >


  export type tradeAnalyzerDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    team?: boolean
    marketValue?: boolean
    myValue?: boolean
    valueDiffBetweenMyValueAndMarketValue?: boolean
    PRPScore?: boolean
    projectedNextOffseasonDynastyValue?: boolean
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: boolean
    PNODVScore?: boolean
    RVSScore?: boolean
    jaxValue?: boolean
    travValue?: boolean
    joeValue?: boolean
    consensusValue?: boolean
  }, ExtArgs["result"]["tradeAnalyzerData"]>

  export type tradeAnalyzerDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    team?: boolean
    marketValue?: boolean
    myValue?: boolean
    valueDiffBetweenMyValueAndMarketValue?: boolean
    PRPScore?: boolean
    projectedNextOffseasonDynastyValue?: boolean
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: boolean
    PNODVScore?: boolean
    RVSScore?: boolean
    jaxValue?: boolean
    travValue?: boolean
    joeValue?: boolean
    consensusValue?: boolean
  }, ExtArgs["result"]["tradeAnalyzerData"]>

  export type tradeAnalyzerDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    team?: boolean
    marketValue?: boolean
    myValue?: boolean
    valueDiffBetweenMyValueAndMarketValue?: boolean
    PRPScore?: boolean
    projectedNextOffseasonDynastyValue?: boolean
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: boolean
    PNODVScore?: boolean
    RVSScore?: boolean
    jaxValue?: boolean
    travValue?: boolean
    joeValue?: boolean
    consensusValue?: boolean
  }, ExtArgs["result"]["tradeAnalyzerData"]>

  export type tradeAnalyzerDataSelectScalar = {
    id?: boolean
    name?: boolean
    position?: boolean
    team?: boolean
    marketValue?: boolean
    myValue?: boolean
    valueDiffBetweenMyValueAndMarketValue?: boolean
    PRPScore?: boolean
    projectedNextOffseasonDynastyValue?: boolean
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: boolean
    PNODVScore?: boolean
    RVSScore?: boolean
    jaxValue?: boolean
    travValue?: boolean
    joeValue?: boolean
    consensusValue?: boolean
  }

  export type tradeAnalyzerDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "position" | "team" | "marketValue" | "myValue" | "valueDiffBetweenMyValueAndMarketValue" | "PRPScore" | "projectedNextOffseasonDynastyValue" | "valueDifferenceBetweenCurrentMarketValueAndPNODV" | "PNODVScore" | "RVSScore" | "jaxValue" | "travValue" | "joeValue" | "consensusValue", ExtArgs["result"]["tradeAnalyzerData"]>

  export type $tradeAnalyzerDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tradeAnalyzerData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      position: string | null
      team: string | null
      marketValue: number | null
      myValue: number | null
      valueDiffBetweenMyValueAndMarketValue: number | null
      PRPScore: number | null
      projectedNextOffseasonDynastyValue: Prisma.JsonValue | null
      valueDifferenceBetweenCurrentMarketValueAndPNODV: number | null
      PNODVScore: number | null
      RVSScore: number | null
      jaxValue: number | null
      travValue: number | null
      joeValue: number | null
      consensusValue: number | null
    }, ExtArgs["result"]["tradeAnalyzerData"]>
    composites: {}
  }

  type tradeAnalyzerDataGetPayload<S extends boolean | null | undefined | tradeAnalyzerDataDefaultArgs> = $Result.GetResult<Prisma.$tradeAnalyzerDataPayload, S>

  type tradeAnalyzerDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tradeAnalyzerDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradeAnalyzerDataCountAggregateInputType | true
    }

  export interface tradeAnalyzerDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tradeAnalyzerData'], meta: { name: 'tradeAnalyzerData' } }
    /**
     * Find zero or one TradeAnalyzerData that matches the filter.
     * @param {tradeAnalyzerDataFindUniqueArgs} args - Arguments to find a TradeAnalyzerData
     * @example
     * // Get one TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tradeAnalyzerDataFindUniqueArgs>(args: SelectSubset<T, tradeAnalyzerDataFindUniqueArgs<ExtArgs>>): Prisma__tradeAnalyzerDataClient<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TradeAnalyzerData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tradeAnalyzerDataFindUniqueOrThrowArgs} args - Arguments to find a TradeAnalyzerData
     * @example
     * // Get one TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tradeAnalyzerDataFindUniqueOrThrowArgs>(args: SelectSubset<T, tradeAnalyzerDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tradeAnalyzerDataClient<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradeAnalyzerData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeAnalyzerDataFindFirstArgs} args - Arguments to find a TradeAnalyzerData
     * @example
     * // Get one TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tradeAnalyzerDataFindFirstArgs>(args?: SelectSubset<T, tradeAnalyzerDataFindFirstArgs<ExtArgs>>): Prisma__tradeAnalyzerDataClient<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradeAnalyzerData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeAnalyzerDataFindFirstOrThrowArgs} args - Arguments to find a TradeAnalyzerData
     * @example
     * // Get one TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tradeAnalyzerDataFindFirstOrThrowArgs>(args?: SelectSubset<T, tradeAnalyzerDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__tradeAnalyzerDataClient<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TradeAnalyzerData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeAnalyzerDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.findMany()
     * 
     * // Get first 10 TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradeAnalyzerDataWithIdOnly = await prisma.tradeAnalyzerData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tradeAnalyzerDataFindManyArgs>(args?: SelectSubset<T, tradeAnalyzerDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TradeAnalyzerData.
     * @param {tradeAnalyzerDataCreateArgs} args - Arguments to create a TradeAnalyzerData.
     * @example
     * // Create one TradeAnalyzerData
     * const TradeAnalyzerData = await prisma.tradeAnalyzerData.create({
     *   data: {
     *     // ... data to create a TradeAnalyzerData
     *   }
     * })
     * 
     */
    create<T extends tradeAnalyzerDataCreateArgs>(args: SelectSubset<T, tradeAnalyzerDataCreateArgs<ExtArgs>>): Prisma__tradeAnalyzerDataClient<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TradeAnalyzerData.
     * @param {tradeAnalyzerDataCreateManyArgs} args - Arguments to create many TradeAnalyzerData.
     * @example
     * // Create many TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tradeAnalyzerDataCreateManyArgs>(args?: SelectSubset<T, tradeAnalyzerDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TradeAnalyzerData and returns the data saved in the database.
     * @param {tradeAnalyzerDataCreateManyAndReturnArgs} args - Arguments to create many TradeAnalyzerData.
     * @example
     * // Create many TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TradeAnalyzerData and only return the `id`
     * const tradeAnalyzerDataWithIdOnly = await prisma.tradeAnalyzerData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tradeAnalyzerDataCreateManyAndReturnArgs>(args?: SelectSubset<T, tradeAnalyzerDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TradeAnalyzerData.
     * @param {tradeAnalyzerDataDeleteArgs} args - Arguments to delete one TradeAnalyzerData.
     * @example
     * // Delete one TradeAnalyzerData
     * const TradeAnalyzerData = await prisma.tradeAnalyzerData.delete({
     *   where: {
     *     // ... filter to delete one TradeAnalyzerData
     *   }
     * })
     * 
     */
    delete<T extends tradeAnalyzerDataDeleteArgs>(args: SelectSubset<T, tradeAnalyzerDataDeleteArgs<ExtArgs>>): Prisma__tradeAnalyzerDataClient<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TradeAnalyzerData.
     * @param {tradeAnalyzerDataUpdateArgs} args - Arguments to update one TradeAnalyzerData.
     * @example
     * // Update one TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tradeAnalyzerDataUpdateArgs>(args: SelectSubset<T, tradeAnalyzerDataUpdateArgs<ExtArgs>>): Prisma__tradeAnalyzerDataClient<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TradeAnalyzerData.
     * @param {tradeAnalyzerDataDeleteManyArgs} args - Arguments to filter TradeAnalyzerData to delete.
     * @example
     * // Delete a few TradeAnalyzerData
     * const { count } = await prisma.tradeAnalyzerData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tradeAnalyzerDataDeleteManyArgs>(args?: SelectSubset<T, tradeAnalyzerDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradeAnalyzerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeAnalyzerDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tradeAnalyzerDataUpdateManyArgs>(args: SelectSubset<T, tradeAnalyzerDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradeAnalyzerData and returns the data updated in the database.
     * @param {tradeAnalyzerDataUpdateManyAndReturnArgs} args - Arguments to update many TradeAnalyzerData.
     * @example
     * // Update many TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TradeAnalyzerData and only return the `id`
     * const tradeAnalyzerDataWithIdOnly = await prisma.tradeAnalyzerData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tradeAnalyzerDataUpdateManyAndReturnArgs>(args: SelectSubset<T, tradeAnalyzerDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TradeAnalyzerData.
     * @param {tradeAnalyzerDataUpsertArgs} args - Arguments to update or create a TradeAnalyzerData.
     * @example
     * // Update or create a TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.upsert({
     *   create: {
     *     // ... data to create a TradeAnalyzerData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TradeAnalyzerData we want to update
     *   }
     * })
     */
    upsert<T extends tradeAnalyzerDataUpsertArgs>(args: SelectSubset<T, tradeAnalyzerDataUpsertArgs<ExtArgs>>): Prisma__tradeAnalyzerDataClient<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TradeAnalyzerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeAnalyzerDataCountArgs} args - Arguments to filter TradeAnalyzerData to count.
     * @example
     * // Count the number of TradeAnalyzerData
     * const count = await prisma.tradeAnalyzerData.count({
     *   where: {
     *     // ... the filter for the TradeAnalyzerData we want to count
     *   }
     * })
    **/
    count<T extends tradeAnalyzerDataCountArgs>(
      args?: Subset<T, tradeAnalyzerDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradeAnalyzerDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TradeAnalyzerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeAnalyzerDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TradeAnalyzerDataAggregateArgs>(args: Subset<T, TradeAnalyzerDataAggregateArgs>): Prisma.PrismaPromise<GetTradeAnalyzerDataAggregateType<T>>

    /**
     * Group by TradeAnalyzerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeAnalyzerDataGroupByArgs} args - Group by arguments.
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
      T extends tradeAnalyzerDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tradeAnalyzerDataGroupByArgs['orderBy'] }
        : { orderBy?: tradeAnalyzerDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tradeAnalyzerDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradeAnalyzerDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tradeAnalyzerData model
   */
  readonly fields: tradeAnalyzerDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tradeAnalyzerData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tradeAnalyzerDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tradeAnalyzerData model
   */
  interface tradeAnalyzerDataFieldRefs {
    readonly id: FieldRef<"tradeAnalyzerData", 'String'>
    readonly name: FieldRef<"tradeAnalyzerData", 'String'>
    readonly position: FieldRef<"tradeAnalyzerData", 'String'>
    readonly team: FieldRef<"tradeAnalyzerData", 'String'>
    readonly marketValue: FieldRef<"tradeAnalyzerData", 'Float'>
    readonly myValue: FieldRef<"tradeAnalyzerData", 'Float'>
    readonly valueDiffBetweenMyValueAndMarketValue: FieldRef<"tradeAnalyzerData", 'Float'>
    readonly PRPScore: FieldRef<"tradeAnalyzerData", 'Float'>
    readonly projectedNextOffseasonDynastyValue: FieldRef<"tradeAnalyzerData", 'Json'>
    readonly valueDifferenceBetweenCurrentMarketValueAndPNODV: FieldRef<"tradeAnalyzerData", 'Float'>
    readonly PNODVScore: FieldRef<"tradeAnalyzerData", 'Float'>
    readonly RVSScore: FieldRef<"tradeAnalyzerData", 'Float'>
    readonly jaxValue: FieldRef<"tradeAnalyzerData", 'Float'>
    readonly travValue: FieldRef<"tradeAnalyzerData", 'Float'>
    readonly joeValue: FieldRef<"tradeAnalyzerData", 'Float'>
    readonly consensusValue: FieldRef<"tradeAnalyzerData", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * tradeAnalyzerData findUnique
   */
  export type tradeAnalyzerDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * Filter, which tradeAnalyzerData to fetch.
     */
    where: tradeAnalyzerDataWhereUniqueInput
  }

  /**
   * tradeAnalyzerData findUniqueOrThrow
   */
  export type tradeAnalyzerDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * Filter, which tradeAnalyzerData to fetch.
     */
    where: tradeAnalyzerDataWhereUniqueInput
  }

  /**
   * tradeAnalyzerData findFirst
   */
  export type tradeAnalyzerDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * Filter, which tradeAnalyzerData to fetch.
     */
    where?: tradeAnalyzerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tradeAnalyzerData to fetch.
     */
    orderBy?: tradeAnalyzerDataOrderByWithRelationInput | tradeAnalyzerDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tradeAnalyzerData.
     */
    cursor?: tradeAnalyzerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tradeAnalyzerData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tradeAnalyzerData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tradeAnalyzerData.
     */
    distinct?: TradeAnalyzerDataScalarFieldEnum | TradeAnalyzerDataScalarFieldEnum[]
  }

  /**
   * tradeAnalyzerData findFirstOrThrow
   */
  export type tradeAnalyzerDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * Filter, which tradeAnalyzerData to fetch.
     */
    where?: tradeAnalyzerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tradeAnalyzerData to fetch.
     */
    orderBy?: tradeAnalyzerDataOrderByWithRelationInput | tradeAnalyzerDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tradeAnalyzerData.
     */
    cursor?: tradeAnalyzerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tradeAnalyzerData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tradeAnalyzerData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tradeAnalyzerData.
     */
    distinct?: TradeAnalyzerDataScalarFieldEnum | TradeAnalyzerDataScalarFieldEnum[]
  }

  /**
   * tradeAnalyzerData findMany
   */
  export type tradeAnalyzerDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * Filter, which tradeAnalyzerData to fetch.
     */
    where?: tradeAnalyzerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tradeAnalyzerData to fetch.
     */
    orderBy?: tradeAnalyzerDataOrderByWithRelationInput | tradeAnalyzerDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tradeAnalyzerData.
     */
    cursor?: tradeAnalyzerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tradeAnalyzerData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tradeAnalyzerData.
     */
    skip?: number
    distinct?: TradeAnalyzerDataScalarFieldEnum | TradeAnalyzerDataScalarFieldEnum[]
  }

  /**
   * tradeAnalyzerData create
   */
  export type tradeAnalyzerDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * The data needed to create a tradeAnalyzerData.
     */
    data?: XOR<tradeAnalyzerDataCreateInput, tradeAnalyzerDataUncheckedCreateInput>
  }

  /**
   * tradeAnalyzerData createMany
   */
  export type tradeAnalyzerDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tradeAnalyzerData.
     */
    data: tradeAnalyzerDataCreateManyInput | tradeAnalyzerDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tradeAnalyzerData createManyAndReturn
   */
  export type tradeAnalyzerDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * The data used to create many tradeAnalyzerData.
     */
    data: tradeAnalyzerDataCreateManyInput | tradeAnalyzerDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tradeAnalyzerData update
   */
  export type tradeAnalyzerDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * The data needed to update a tradeAnalyzerData.
     */
    data: XOR<tradeAnalyzerDataUpdateInput, tradeAnalyzerDataUncheckedUpdateInput>
    /**
     * Choose, which tradeAnalyzerData to update.
     */
    where: tradeAnalyzerDataWhereUniqueInput
  }

  /**
   * tradeAnalyzerData updateMany
   */
  export type tradeAnalyzerDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tradeAnalyzerData.
     */
    data: XOR<tradeAnalyzerDataUpdateManyMutationInput, tradeAnalyzerDataUncheckedUpdateManyInput>
    /**
     * Filter which tradeAnalyzerData to update
     */
    where?: tradeAnalyzerDataWhereInput
    /**
     * Limit how many tradeAnalyzerData to update.
     */
    limit?: number
  }

  /**
   * tradeAnalyzerData updateManyAndReturn
   */
  export type tradeAnalyzerDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * The data used to update tradeAnalyzerData.
     */
    data: XOR<tradeAnalyzerDataUpdateManyMutationInput, tradeAnalyzerDataUncheckedUpdateManyInput>
    /**
     * Filter which tradeAnalyzerData to update
     */
    where?: tradeAnalyzerDataWhereInput
    /**
     * Limit how many tradeAnalyzerData to update.
     */
    limit?: number
  }

  /**
   * tradeAnalyzerData upsert
   */
  export type tradeAnalyzerDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * The filter to search for the tradeAnalyzerData to update in case it exists.
     */
    where: tradeAnalyzerDataWhereUniqueInput
    /**
     * In case the tradeAnalyzerData found by the `where` argument doesn't exist, create a new tradeAnalyzerData with this data.
     */
    create: XOR<tradeAnalyzerDataCreateInput, tradeAnalyzerDataUncheckedCreateInput>
    /**
     * In case the tradeAnalyzerData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tradeAnalyzerDataUpdateInput, tradeAnalyzerDataUncheckedUpdateInput>
  }

  /**
   * tradeAnalyzerData delete
   */
  export type tradeAnalyzerDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * Filter which tradeAnalyzerData to delete.
     */
    where: tradeAnalyzerDataWhereUniqueInput
  }

  /**
   * tradeAnalyzerData deleteMany
   */
  export type tradeAnalyzerDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tradeAnalyzerData to delete
     */
    where?: tradeAnalyzerDataWhereInput
    /**
     * Limit how many tradeAnalyzerData to delete.
     */
    limit?: number
  }

  /**
   * tradeAnalyzerData without action
   */
  export type tradeAnalyzerDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
  }


  /**
   * Model PlayerStat
   */

  export type AggregatePlayerStat = {
    _count: PlayerStatCountAggregateOutputType | null
    _avg: PlayerStatAvgAggregateOutputType | null
    _sum: PlayerStatSumAggregateOutputType | null
    _min: PlayerStatMinAggregateOutputType | null
    _max: PlayerStatMaxAggregateOutputType | null
  }

  export type PlayerStatAvgAggregateOutputType = {
    season: number | null
    week: number | null
    completions: number | null
    attempts: number | null
    passingYards: number | null
    passingTds: number | null
    interceptions: number | null
    sacks: number | null
    sackYards: number | null
    sackFumbles: number | null
    sackFumblesLost: number | null
    passingAirYards: number | null
    passingYardsAfterCatch: number | null
    passingFirstDowns: number | null
    passingEpa: number | null
    passing2ptConversions: number | null
    pacr: number | null
    dakota: number | null
    carries: number | null
    rushingYards: number | null
    rushingTds: number | null
    rushingFumbles: number | null
    rushingFumblesLost: number | null
    rushingFirstDowns: number | null
    rushingEpa: number | null
    rushing2ptConversions: number | null
    receptions: number | null
    targets: number | null
    receivingYards: number | null
    receivingTds: number | null
    receivingFumbles: number | null
    receivingFumblesLost: number | null
    receivingAirYards: number | null
    receivingYardsAfterCatch: number | null
    receivingFirstDowns: number | null
    receivingEpa: number | null
    receiving2ptConversions: number | null
    racr: number | null
    targetShare: number | null
    airYardsShare: number | null
    wopr: number | null
    specialTeamsTds: number | null
    fantasyPoints: number | null
    fantasyPointsPpr: number | null
  }

  export type PlayerStatSumAggregateOutputType = {
    season: number | null
    week: number | null
    completions: number | null
    attempts: number | null
    passingYards: number | null
    passingTds: number | null
    interceptions: number | null
    sacks: number | null
    sackYards: number | null
    sackFumbles: number | null
    sackFumblesLost: number | null
    passingAirYards: number | null
    passingYardsAfterCatch: number | null
    passingFirstDowns: number | null
    passingEpa: number | null
    passing2ptConversions: number | null
    pacr: number | null
    dakota: number | null
    carries: number | null
    rushingYards: number | null
    rushingTds: number | null
    rushingFumbles: number | null
    rushingFumblesLost: number | null
    rushingFirstDowns: number | null
    rushingEpa: number | null
    rushing2ptConversions: number | null
    receptions: number | null
    targets: number | null
    receivingYards: number | null
    receivingTds: number | null
    receivingFumbles: number | null
    receivingFumblesLost: number | null
    receivingAirYards: number | null
    receivingYardsAfterCatch: number | null
    receivingFirstDowns: number | null
    receivingEpa: number | null
    receiving2ptConversions: number | null
    racr: number | null
    targetShare: number | null
    airYardsShare: number | null
    wopr: number | null
    specialTeamsTds: number | null
    fantasyPoints: number | null
    fantasyPointsPpr: number | null
  }

  export type PlayerStatMinAggregateOutputType = {
    id: string | null
    playerId: string | null
    playerName: string | null
    playerDisplayName: string | null
    position: string | null
    positionGroup: string | null
    headshotUrl: string | null
    recentTeam: string | null
    season: number | null
    week: number | null
    seasonType: string | null
    opponentTeam: string | null
    completions: number | null
    attempts: number | null
    passingYards: number | null
    passingTds: number | null
    interceptions: number | null
    sacks: number | null
    sackYards: number | null
    sackFumbles: number | null
    sackFumblesLost: number | null
    passingAirYards: number | null
    passingYardsAfterCatch: number | null
    passingFirstDowns: number | null
    passingEpa: number | null
    passing2ptConversions: number | null
    pacr: number | null
    dakota: number | null
    carries: number | null
    rushingYards: number | null
    rushingTds: number | null
    rushingFumbles: number | null
    rushingFumblesLost: number | null
    rushingFirstDowns: number | null
    rushingEpa: number | null
    rushing2ptConversions: number | null
    receptions: number | null
    targets: number | null
    receivingYards: number | null
    receivingTds: number | null
    receivingFumbles: number | null
    receivingFumblesLost: number | null
    receivingAirYards: number | null
    receivingYardsAfterCatch: number | null
    receivingFirstDowns: number | null
    receivingEpa: number | null
    receiving2ptConversions: number | null
    racr: number | null
    targetShare: number | null
    airYardsShare: number | null
    wopr: number | null
    specialTeamsTds: number | null
    fantasyPoints: number | null
    fantasyPointsPpr: number | null
  }

  export type PlayerStatMaxAggregateOutputType = {
    id: string | null
    playerId: string | null
    playerName: string | null
    playerDisplayName: string | null
    position: string | null
    positionGroup: string | null
    headshotUrl: string | null
    recentTeam: string | null
    season: number | null
    week: number | null
    seasonType: string | null
    opponentTeam: string | null
    completions: number | null
    attempts: number | null
    passingYards: number | null
    passingTds: number | null
    interceptions: number | null
    sacks: number | null
    sackYards: number | null
    sackFumbles: number | null
    sackFumblesLost: number | null
    passingAirYards: number | null
    passingYardsAfterCatch: number | null
    passingFirstDowns: number | null
    passingEpa: number | null
    passing2ptConversions: number | null
    pacr: number | null
    dakota: number | null
    carries: number | null
    rushingYards: number | null
    rushingTds: number | null
    rushingFumbles: number | null
    rushingFumblesLost: number | null
    rushingFirstDowns: number | null
    rushingEpa: number | null
    rushing2ptConversions: number | null
    receptions: number | null
    targets: number | null
    receivingYards: number | null
    receivingTds: number | null
    receivingFumbles: number | null
    receivingFumblesLost: number | null
    receivingAirYards: number | null
    receivingYardsAfterCatch: number | null
    receivingFirstDowns: number | null
    receivingEpa: number | null
    receiving2ptConversions: number | null
    racr: number | null
    targetShare: number | null
    airYardsShare: number | null
    wopr: number | null
    specialTeamsTds: number | null
    fantasyPoints: number | null
    fantasyPointsPpr: number | null
  }

  export type PlayerStatCountAggregateOutputType = {
    id: number
    playerId: number
    playerName: number
    playerDisplayName: number
    position: number
    positionGroup: number
    headshotUrl: number
    recentTeam: number
    season: number
    week: number
    seasonType: number
    opponentTeam: number
    completions: number
    attempts: number
    passingYards: number
    passingTds: number
    interceptions: number
    sacks: number
    sackYards: number
    sackFumbles: number
    sackFumblesLost: number
    passingAirYards: number
    passingYardsAfterCatch: number
    passingFirstDowns: number
    passingEpa: number
    passing2ptConversions: number
    pacr: number
    dakota: number
    carries: number
    rushingYards: number
    rushingTds: number
    rushingFumbles: number
    rushingFumblesLost: number
    rushingFirstDowns: number
    rushingEpa: number
    rushing2ptConversions: number
    receptions: number
    targets: number
    receivingYards: number
    receivingTds: number
    receivingFumbles: number
    receivingFumblesLost: number
    receivingAirYards: number
    receivingYardsAfterCatch: number
    receivingFirstDowns: number
    receivingEpa: number
    receiving2ptConversions: number
    racr: number
    targetShare: number
    airYardsShare: number
    wopr: number
    specialTeamsTds: number
    fantasyPoints: number
    fantasyPointsPpr: number
    _all: number
  }


  export type PlayerStatAvgAggregateInputType = {
    season?: true
    week?: true
    completions?: true
    attempts?: true
    passingYards?: true
    passingTds?: true
    interceptions?: true
    sacks?: true
    sackYards?: true
    sackFumbles?: true
    sackFumblesLost?: true
    passingAirYards?: true
    passingYardsAfterCatch?: true
    passingFirstDowns?: true
    passingEpa?: true
    passing2ptConversions?: true
    pacr?: true
    dakota?: true
    carries?: true
    rushingYards?: true
    rushingTds?: true
    rushingFumbles?: true
    rushingFumblesLost?: true
    rushingFirstDowns?: true
    rushingEpa?: true
    rushing2ptConversions?: true
    receptions?: true
    targets?: true
    receivingYards?: true
    receivingTds?: true
    receivingFumbles?: true
    receivingFumblesLost?: true
    receivingAirYards?: true
    receivingYardsAfterCatch?: true
    receivingFirstDowns?: true
    receivingEpa?: true
    receiving2ptConversions?: true
    racr?: true
    targetShare?: true
    airYardsShare?: true
    wopr?: true
    specialTeamsTds?: true
    fantasyPoints?: true
    fantasyPointsPpr?: true
  }

  export type PlayerStatSumAggregateInputType = {
    season?: true
    week?: true
    completions?: true
    attempts?: true
    passingYards?: true
    passingTds?: true
    interceptions?: true
    sacks?: true
    sackYards?: true
    sackFumbles?: true
    sackFumblesLost?: true
    passingAirYards?: true
    passingYardsAfterCatch?: true
    passingFirstDowns?: true
    passingEpa?: true
    passing2ptConversions?: true
    pacr?: true
    dakota?: true
    carries?: true
    rushingYards?: true
    rushingTds?: true
    rushingFumbles?: true
    rushingFumblesLost?: true
    rushingFirstDowns?: true
    rushingEpa?: true
    rushing2ptConversions?: true
    receptions?: true
    targets?: true
    receivingYards?: true
    receivingTds?: true
    receivingFumbles?: true
    receivingFumblesLost?: true
    receivingAirYards?: true
    receivingYardsAfterCatch?: true
    receivingFirstDowns?: true
    receivingEpa?: true
    receiving2ptConversions?: true
    racr?: true
    targetShare?: true
    airYardsShare?: true
    wopr?: true
    specialTeamsTds?: true
    fantasyPoints?: true
    fantasyPointsPpr?: true
  }

  export type PlayerStatMinAggregateInputType = {
    id?: true
    playerId?: true
    playerName?: true
    playerDisplayName?: true
    position?: true
    positionGroup?: true
    headshotUrl?: true
    recentTeam?: true
    season?: true
    week?: true
    seasonType?: true
    opponentTeam?: true
    completions?: true
    attempts?: true
    passingYards?: true
    passingTds?: true
    interceptions?: true
    sacks?: true
    sackYards?: true
    sackFumbles?: true
    sackFumblesLost?: true
    passingAirYards?: true
    passingYardsAfterCatch?: true
    passingFirstDowns?: true
    passingEpa?: true
    passing2ptConversions?: true
    pacr?: true
    dakota?: true
    carries?: true
    rushingYards?: true
    rushingTds?: true
    rushingFumbles?: true
    rushingFumblesLost?: true
    rushingFirstDowns?: true
    rushingEpa?: true
    rushing2ptConversions?: true
    receptions?: true
    targets?: true
    receivingYards?: true
    receivingTds?: true
    receivingFumbles?: true
    receivingFumblesLost?: true
    receivingAirYards?: true
    receivingYardsAfterCatch?: true
    receivingFirstDowns?: true
    receivingEpa?: true
    receiving2ptConversions?: true
    racr?: true
    targetShare?: true
    airYardsShare?: true
    wopr?: true
    specialTeamsTds?: true
    fantasyPoints?: true
    fantasyPointsPpr?: true
  }

  export type PlayerStatMaxAggregateInputType = {
    id?: true
    playerId?: true
    playerName?: true
    playerDisplayName?: true
    position?: true
    positionGroup?: true
    headshotUrl?: true
    recentTeam?: true
    season?: true
    week?: true
    seasonType?: true
    opponentTeam?: true
    completions?: true
    attempts?: true
    passingYards?: true
    passingTds?: true
    interceptions?: true
    sacks?: true
    sackYards?: true
    sackFumbles?: true
    sackFumblesLost?: true
    passingAirYards?: true
    passingYardsAfterCatch?: true
    passingFirstDowns?: true
    passingEpa?: true
    passing2ptConversions?: true
    pacr?: true
    dakota?: true
    carries?: true
    rushingYards?: true
    rushingTds?: true
    rushingFumbles?: true
    rushingFumblesLost?: true
    rushingFirstDowns?: true
    rushingEpa?: true
    rushing2ptConversions?: true
    receptions?: true
    targets?: true
    receivingYards?: true
    receivingTds?: true
    receivingFumbles?: true
    receivingFumblesLost?: true
    receivingAirYards?: true
    receivingYardsAfterCatch?: true
    receivingFirstDowns?: true
    receivingEpa?: true
    receiving2ptConversions?: true
    racr?: true
    targetShare?: true
    airYardsShare?: true
    wopr?: true
    specialTeamsTds?: true
    fantasyPoints?: true
    fantasyPointsPpr?: true
  }

  export type PlayerStatCountAggregateInputType = {
    id?: true
    playerId?: true
    playerName?: true
    playerDisplayName?: true
    position?: true
    positionGroup?: true
    headshotUrl?: true
    recentTeam?: true
    season?: true
    week?: true
    seasonType?: true
    opponentTeam?: true
    completions?: true
    attempts?: true
    passingYards?: true
    passingTds?: true
    interceptions?: true
    sacks?: true
    sackYards?: true
    sackFumbles?: true
    sackFumblesLost?: true
    passingAirYards?: true
    passingYardsAfterCatch?: true
    passingFirstDowns?: true
    passingEpa?: true
    passing2ptConversions?: true
    pacr?: true
    dakota?: true
    carries?: true
    rushingYards?: true
    rushingTds?: true
    rushingFumbles?: true
    rushingFumblesLost?: true
    rushingFirstDowns?: true
    rushingEpa?: true
    rushing2ptConversions?: true
    receptions?: true
    targets?: true
    receivingYards?: true
    receivingTds?: true
    receivingFumbles?: true
    receivingFumblesLost?: true
    receivingAirYards?: true
    receivingYardsAfterCatch?: true
    receivingFirstDowns?: true
    receivingEpa?: true
    receiving2ptConversions?: true
    racr?: true
    targetShare?: true
    airYardsShare?: true
    wopr?: true
    specialTeamsTds?: true
    fantasyPoints?: true
    fantasyPointsPpr?: true
    _all?: true
  }

  export type PlayerStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerStat to aggregate.
     */
    where?: PlayerStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerStats to fetch.
     */
    orderBy?: PlayerStatOrderByWithRelationInput | PlayerStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerStats
    **/
    _count?: true | PlayerStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerStatMaxAggregateInputType
  }

  export type GetPlayerStatAggregateType<T extends PlayerStatAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerStat[P]>
      : GetScalarType<T[P], AggregatePlayerStat[P]>
  }




  export type PlayerStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerStatWhereInput
    orderBy?: PlayerStatOrderByWithAggregationInput | PlayerStatOrderByWithAggregationInput[]
    by: PlayerStatScalarFieldEnum[] | PlayerStatScalarFieldEnum
    having?: PlayerStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerStatCountAggregateInputType | true
    _avg?: PlayerStatAvgAggregateInputType
    _sum?: PlayerStatSumAggregateInputType
    _min?: PlayerStatMinAggregateInputType
    _max?: PlayerStatMaxAggregateInputType
  }

  export type PlayerStatGroupByOutputType = {
    id: string
    playerId: string | null
    playerName: string | null
    playerDisplayName: string | null
    position: string | null
    positionGroup: string | null
    headshotUrl: string | null
    recentTeam: string | null
    season: number | null
    week: number | null
    seasonType: string | null
    opponentTeam: string | null
    completions: number | null
    attempts: number | null
    passingYards: number | null
    passingTds: number | null
    interceptions: number | null
    sacks: number | null
    sackYards: number | null
    sackFumbles: number | null
    sackFumblesLost: number | null
    passingAirYards: number | null
    passingYardsAfterCatch: number | null
    passingFirstDowns: number | null
    passingEpa: number | null
    passing2ptConversions: number | null
    pacr: number | null
    dakota: number | null
    carries: number | null
    rushingYards: number | null
    rushingTds: number | null
    rushingFumbles: number | null
    rushingFumblesLost: number | null
    rushingFirstDowns: number | null
    rushingEpa: number | null
    rushing2ptConversions: number | null
    receptions: number | null
    targets: number | null
    receivingYards: number | null
    receivingTds: number | null
    receivingFumbles: number | null
    receivingFumblesLost: number | null
    receivingAirYards: number | null
    receivingYardsAfterCatch: number | null
    receivingFirstDowns: number | null
    receivingEpa: number | null
    receiving2ptConversions: number | null
    racr: number | null
    targetShare: number | null
    airYardsShare: number | null
    wopr: number | null
    specialTeamsTds: number | null
    fantasyPoints: number | null
    fantasyPointsPpr: number | null
    _count: PlayerStatCountAggregateOutputType | null
    _avg: PlayerStatAvgAggregateOutputType | null
    _sum: PlayerStatSumAggregateOutputType | null
    _min: PlayerStatMinAggregateOutputType | null
    _max: PlayerStatMaxAggregateOutputType | null
  }

  type GetPlayerStatGroupByPayload<T extends PlayerStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerStatGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerStatGroupByOutputType[P]>
        }
      >
    >


  export type PlayerStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    playerName?: boolean
    playerDisplayName?: boolean
    position?: boolean
    positionGroup?: boolean
    headshotUrl?: boolean
    recentTeam?: boolean
    season?: boolean
    week?: boolean
    seasonType?: boolean
    opponentTeam?: boolean
    completions?: boolean
    attempts?: boolean
    passingYards?: boolean
    passingTds?: boolean
    interceptions?: boolean
    sacks?: boolean
    sackYards?: boolean
    sackFumbles?: boolean
    sackFumblesLost?: boolean
    passingAirYards?: boolean
    passingYardsAfterCatch?: boolean
    passingFirstDowns?: boolean
    passingEpa?: boolean
    passing2ptConversions?: boolean
    pacr?: boolean
    dakota?: boolean
    carries?: boolean
    rushingYards?: boolean
    rushingTds?: boolean
    rushingFumbles?: boolean
    rushingFumblesLost?: boolean
    rushingFirstDowns?: boolean
    rushingEpa?: boolean
    rushing2ptConversions?: boolean
    receptions?: boolean
    targets?: boolean
    receivingYards?: boolean
    receivingTds?: boolean
    receivingFumbles?: boolean
    receivingFumblesLost?: boolean
    receivingAirYards?: boolean
    receivingYardsAfterCatch?: boolean
    receivingFirstDowns?: boolean
    receivingEpa?: boolean
    receiving2ptConversions?: boolean
    racr?: boolean
    targetShare?: boolean
    airYardsShare?: boolean
    wopr?: boolean
    specialTeamsTds?: boolean
    fantasyPoints?: boolean
    fantasyPointsPpr?: boolean
  }, ExtArgs["result"]["playerStat"]>

  export type PlayerStatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    playerName?: boolean
    playerDisplayName?: boolean
    position?: boolean
    positionGroup?: boolean
    headshotUrl?: boolean
    recentTeam?: boolean
    season?: boolean
    week?: boolean
    seasonType?: boolean
    opponentTeam?: boolean
    completions?: boolean
    attempts?: boolean
    passingYards?: boolean
    passingTds?: boolean
    interceptions?: boolean
    sacks?: boolean
    sackYards?: boolean
    sackFumbles?: boolean
    sackFumblesLost?: boolean
    passingAirYards?: boolean
    passingYardsAfterCatch?: boolean
    passingFirstDowns?: boolean
    passingEpa?: boolean
    passing2ptConversions?: boolean
    pacr?: boolean
    dakota?: boolean
    carries?: boolean
    rushingYards?: boolean
    rushingTds?: boolean
    rushingFumbles?: boolean
    rushingFumblesLost?: boolean
    rushingFirstDowns?: boolean
    rushingEpa?: boolean
    rushing2ptConversions?: boolean
    receptions?: boolean
    targets?: boolean
    receivingYards?: boolean
    receivingTds?: boolean
    receivingFumbles?: boolean
    receivingFumblesLost?: boolean
    receivingAirYards?: boolean
    receivingYardsAfterCatch?: boolean
    receivingFirstDowns?: boolean
    receivingEpa?: boolean
    receiving2ptConversions?: boolean
    racr?: boolean
    targetShare?: boolean
    airYardsShare?: boolean
    wopr?: boolean
    specialTeamsTds?: boolean
    fantasyPoints?: boolean
    fantasyPointsPpr?: boolean
  }, ExtArgs["result"]["playerStat"]>

  export type PlayerStatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    playerName?: boolean
    playerDisplayName?: boolean
    position?: boolean
    positionGroup?: boolean
    headshotUrl?: boolean
    recentTeam?: boolean
    season?: boolean
    week?: boolean
    seasonType?: boolean
    opponentTeam?: boolean
    completions?: boolean
    attempts?: boolean
    passingYards?: boolean
    passingTds?: boolean
    interceptions?: boolean
    sacks?: boolean
    sackYards?: boolean
    sackFumbles?: boolean
    sackFumblesLost?: boolean
    passingAirYards?: boolean
    passingYardsAfterCatch?: boolean
    passingFirstDowns?: boolean
    passingEpa?: boolean
    passing2ptConversions?: boolean
    pacr?: boolean
    dakota?: boolean
    carries?: boolean
    rushingYards?: boolean
    rushingTds?: boolean
    rushingFumbles?: boolean
    rushingFumblesLost?: boolean
    rushingFirstDowns?: boolean
    rushingEpa?: boolean
    rushing2ptConversions?: boolean
    receptions?: boolean
    targets?: boolean
    receivingYards?: boolean
    receivingTds?: boolean
    receivingFumbles?: boolean
    receivingFumblesLost?: boolean
    receivingAirYards?: boolean
    receivingYardsAfterCatch?: boolean
    receivingFirstDowns?: boolean
    receivingEpa?: boolean
    receiving2ptConversions?: boolean
    racr?: boolean
    targetShare?: boolean
    airYardsShare?: boolean
    wopr?: boolean
    specialTeamsTds?: boolean
    fantasyPoints?: boolean
    fantasyPointsPpr?: boolean
  }, ExtArgs["result"]["playerStat"]>

  export type PlayerStatSelectScalar = {
    id?: boolean
    playerId?: boolean
    playerName?: boolean
    playerDisplayName?: boolean
    position?: boolean
    positionGroup?: boolean
    headshotUrl?: boolean
    recentTeam?: boolean
    season?: boolean
    week?: boolean
    seasonType?: boolean
    opponentTeam?: boolean
    completions?: boolean
    attempts?: boolean
    passingYards?: boolean
    passingTds?: boolean
    interceptions?: boolean
    sacks?: boolean
    sackYards?: boolean
    sackFumbles?: boolean
    sackFumblesLost?: boolean
    passingAirYards?: boolean
    passingYardsAfterCatch?: boolean
    passingFirstDowns?: boolean
    passingEpa?: boolean
    passing2ptConversions?: boolean
    pacr?: boolean
    dakota?: boolean
    carries?: boolean
    rushingYards?: boolean
    rushingTds?: boolean
    rushingFumbles?: boolean
    rushingFumblesLost?: boolean
    rushingFirstDowns?: boolean
    rushingEpa?: boolean
    rushing2ptConversions?: boolean
    receptions?: boolean
    targets?: boolean
    receivingYards?: boolean
    receivingTds?: boolean
    receivingFumbles?: boolean
    receivingFumblesLost?: boolean
    receivingAirYards?: boolean
    receivingYardsAfterCatch?: boolean
    receivingFirstDowns?: boolean
    receivingEpa?: boolean
    receiving2ptConversions?: boolean
    racr?: boolean
    targetShare?: boolean
    airYardsShare?: boolean
    wopr?: boolean
    specialTeamsTds?: boolean
    fantasyPoints?: boolean
    fantasyPointsPpr?: boolean
  }

  export type PlayerStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "playerName" | "playerDisplayName" | "position" | "positionGroup" | "headshotUrl" | "recentTeam" | "season" | "week" | "seasonType" | "opponentTeam" | "completions" | "attempts" | "passingYards" | "passingTds" | "interceptions" | "sacks" | "sackYards" | "sackFumbles" | "sackFumblesLost" | "passingAirYards" | "passingYardsAfterCatch" | "passingFirstDowns" | "passingEpa" | "passing2ptConversions" | "pacr" | "dakota" | "carries" | "rushingYards" | "rushingTds" | "rushingFumbles" | "rushingFumblesLost" | "rushingFirstDowns" | "rushingEpa" | "rushing2ptConversions" | "receptions" | "targets" | "receivingYards" | "receivingTds" | "receivingFumbles" | "receivingFumblesLost" | "receivingAirYards" | "receivingYardsAfterCatch" | "receivingFirstDowns" | "receivingEpa" | "receiving2ptConversions" | "racr" | "targetShare" | "airYardsShare" | "wopr" | "specialTeamsTds" | "fantasyPoints" | "fantasyPointsPpr", ExtArgs["result"]["playerStat"]>

  export type $PlayerStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerStat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playerId: string | null
      playerName: string | null
      playerDisplayName: string | null
      position: string | null
      positionGroup: string | null
      headshotUrl: string | null
      recentTeam: string | null
      season: number | null
      week: number | null
      seasonType: string | null
      opponentTeam: string | null
      completions: number | null
      attempts: number | null
      passingYards: number | null
      passingTds: number | null
      interceptions: number | null
      sacks: number | null
      sackYards: number | null
      sackFumbles: number | null
      sackFumblesLost: number | null
      passingAirYards: number | null
      passingYardsAfterCatch: number | null
      passingFirstDowns: number | null
      passingEpa: number | null
      passing2ptConversions: number | null
      pacr: number | null
      dakota: number | null
      carries: number | null
      rushingYards: number | null
      rushingTds: number | null
      rushingFumbles: number | null
      rushingFumblesLost: number | null
      rushingFirstDowns: number | null
      rushingEpa: number | null
      rushing2ptConversions: number | null
      receptions: number | null
      targets: number | null
      receivingYards: number | null
      receivingTds: number | null
      receivingFumbles: number | null
      receivingFumblesLost: number | null
      receivingAirYards: number | null
      receivingYardsAfterCatch: number | null
      receivingFirstDowns: number | null
      receivingEpa: number | null
      receiving2ptConversions: number | null
      racr: number | null
      targetShare: number | null
      airYardsShare: number | null
      wopr: number | null
      specialTeamsTds: number | null
      fantasyPoints: number | null
      fantasyPointsPpr: number | null
    }, ExtArgs["result"]["playerStat"]>
    composites: {}
  }

  type PlayerStatGetPayload<S extends boolean | null | undefined | PlayerStatDefaultArgs> = $Result.GetResult<Prisma.$PlayerStatPayload, S>

  type PlayerStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerStatCountAggregateInputType | true
    }

  export interface PlayerStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerStat'], meta: { name: 'PlayerStat' } }
    /**
     * Find zero or one PlayerStat that matches the filter.
     * @param {PlayerStatFindUniqueArgs} args - Arguments to find a PlayerStat
     * @example
     * // Get one PlayerStat
     * const playerStat = await prisma.playerStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerStatFindUniqueArgs>(args: SelectSubset<T, PlayerStatFindUniqueArgs<ExtArgs>>): Prisma__PlayerStatClient<$Result.GetResult<Prisma.$PlayerStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerStatFindUniqueOrThrowArgs} args - Arguments to find a PlayerStat
     * @example
     * // Get one PlayerStat
     * const playerStat = await prisma.playerStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerStatFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerStatClient<$Result.GetResult<Prisma.$PlayerStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatFindFirstArgs} args - Arguments to find a PlayerStat
     * @example
     * // Get one PlayerStat
     * const playerStat = await prisma.playerStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerStatFindFirstArgs>(args?: SelectSubset<T, PlayerStatFindFirstArgs<ExtArgs>>): Prisma__PlayerStatClient<$Result.GetResult<Prisma.$PlayerStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatFindFirstOrThrowArgs} args - Arguments to find a PlayerStat
     * @example
     * // Get one PlayerStat
     * const playerStat = await prisma.playerStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerStatFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerStatClient<$Result.GetResult<Prisma.$PlayerStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerStats
     * const playerStats = await prisma.playerStat.findMany()
     * 
     * // Get first 10 PlayerStats
     * const playerStats = await prisma.playerStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerStatWithIdOnly = await prisma.playerStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerStatFindManyArgs>(args?: SelectSubset<T, PlayerStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerStat.
     * @param {PlayerStatCreateArgs} args - Arguments to create a PlayerStat.
     * @example
     * // Create one PlayerStat
     * const PlayerStat = await prisma.playerStat.create({
     *   data: {
     *     // ... data to create a PlayerStat
     *   }
     * })
     * 
     */
    create<T extends PlayerStatCreateArgs>(args: SelectSubset<T, PlayerStatCreateArgs<ExtArgs>>): Prisma__PlayerStatClient<$Result.GetResult<Prisma.$PlayerStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerStats.
     * @param {PlayerStatCreateManyArgs} args - Arguments to create many PlayerStats.
     * @example
     * // Create many PlayerStats
     * const playerStat = await prisma.playerStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerStatCreateManyArgs>(args?: SelectSubset<T, PlayerStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerStats and returns the data saved in the database.
     * @param {PlayerStatCreateManyAndReturnArgs} args - Arguments to create many PlayerStats.
     * @example
     * // Create many PlayerStats
     * const playerStat = await prisma.playerStat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerStats and only return the `id`
     * const playerStatWithIdOnly = await prisma.playerStat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerStatCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerStatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerStatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerStat.
     * @param {PlayerStatDeleteArgs} args - Arguments to delete one PlayerStat.
     * @example
     * // Delete one PlayerStat
     * const PlayerStat = await prisma.playerStat.delete({
     *   where: {
     *     // ... filter to delete one PlayerStat
     *   }
     * })
     * 
     */
    delete<T extends PlayerStatDeleteArgs>(args: SelectSubset<T, PlayerStatDeleteArgs<ExtArgs>>): Prisma__PlayerStatClient<$Result.GetResult<Prisma.$PlayerStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerStat.
     * @param {PlayerStatUpdateArgs} args - Arguments to update one PlayerStat.
     * @example
     * // Update one PlayerStat
     * const playerStat = await prisma.playerStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerStatUpdateArgs>(args: SelectSubset<T, PlayerStatUpdateArgs<ExtArgs>>): Prisma__PlayerStatClient<$Result.GetResult<Prisma.$PlayerStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerStats.
     * @param {PlayerStatDeleteManyArgs} args - Arguments to filter PlayerStats to delete.
     * @example
     * // Delete a few PlayerStats
     * const { count } = await prisma.playerStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerStatDeleteManyArgs>(args?: SelectSubset<T, PlayerStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerStats
     * const playerStat = await prisma.playerStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerStatUpdateManyArgs>(args: SelectSubset<T, PlayerStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerStats and returns the data updated in the database.
     * @param {PlayerStatUpdateManyAndReturnArgs} args - Arguments to update many PlayerStats.
     * @example
     * // Update many PlayerStats
     * const playerStat = await prisma.playerStat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerStats and only return the `id`
     * const playerStatWithIdOnly = await prisma.playerStat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerStatUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerStatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerStatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerStat.
     * @param {PlayerStatUpsertArgs} args - Arguments to update or create a PlayerStat.
     * @example
     * // Update or create a PlayerStat
     * const playerStat = await prisma.playerStat.upsert({
     *   create: {
     *     // ... data to create a PlayerStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerStat we want to update
     *   }
     * })
     */
    upsert<T extends PlayerStatUpsertArgs>(args: SelectSubset<T, PlayerStatUpsertArgs<ExtArgs>>): Prisma__PlayerStatClient<$Result.GetResult<Prisma.$PlayerStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatCountArgs} args - Arguments to filter PlayerStats to count.
     * @example
     * // Count the number of PlayerStats
     * const count = await prisma.playerStat.count({
     *   where: {
     *     // ... the filter for the PlayerStats we want to count
     *   }
     * })
    **/
    count<T extends PlayerStatCountArgs>(
      args?: Subset<T, PlayerStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerStatAggregateArgs>(args: Subset<T, PlayerStatAggregateArgs>): Prisma.PrismaPromise<GetPlayerStatAggregateType<T>>

    /**
     * Group by PlayerStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatGroupByArgs} args - Group by arguments.
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
      T extends PlayerStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerStatGroupByArgs['orderBy'] }
        : { orderBy?: PlayerStatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayerStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerStat model
   */
  readonly fields: PlayerStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PlayerStat model
   */
  interface PlayerStatFieldRefs {
    readonly id: FieldRef<"PlayerStat", 'String'>
    readonly playerId: FieldRef<"PlayerStat", 'String'>
    readonly playerName: FieldRef<"PlayerStat", 'String'>
    readonly playerDisplayName: FieldRef<"PlayerStat", 'String'>
    readonly position: FieldRef<"PlayerStat", 'String'>
    readonly positionGroup: FieldRef<"PlayerStat", 'String'>
    readonly headshotUrl: FieldRef<"PlayerStat", 'String'>
    readonly recentTeam: FieldRef<"PlayerStat", 'String'>
    readonly season: FieldRef<"PlayerStat", 'Int'>
    readonly week: FieldRef<"PlayerStat", 'Int'>
    readonly seasonType: FieldRef<"PlayerStat", 'String'>
    readonly opponentTeam: FieldRef<"PlayerStat", 'String'>
    readonly completions: FieldRef<"PlayerStat", 'Int'>
    readonly attempts: FieldRef<"PlayerStat", 'Int'>
    readonly passingYards: FieldRef<"PlayerStat", 'Float'>
    readonly passingTds: FieldRef<"PlayerStat", 'Int'>
    readonly interceptions: FieldRef<"PlayerStat", 'Int'>
    readonly sacks: FieldRef<"PlayerStat", 'Int'>
    readonly sackYards: FieldRef<"PlayerStat", 'Float'>
    readonly sackFumbles: FieldRef<"PlayerStat", 'Int'>
    readonly sackFumblesLost: FieldRef<"PlayerStat", 'Int'>
    readonly passingAirYards: FieldRef<"PlayerStat", 'Float'>
    readonly passingYardsAfterCatch: FieldRef<"PlayerStat", 'Float'>
    readonly passingFirstDowns: FieldRef<"PlayerStat", 'Int'>
    readonly passingEpa: FieldRef<"PlayerStat", 'Float'>
    readonly passing2ptConversions: FieldRef<"PlayerStat", 'Int'>
    readonly pacr: FieldRef<"PlayerStat", 'Float'>
    readonly dakota: FieldRef<"PlayerStat", 'Float'>
    readonly carries: FieldRef<"PlayerStat", 'Int'>
    readonly rushingYards: FieldRef<"PlayerStat", 'Float'>
    readonly rushingTds: FieldRef<"PlayerStat", 'Int'>
    readonly rushingFumbles: FieldRef<"PlayerStat", 'Int'>
    readonly rushingFumblesLost: FieldRef<"PlayerStat", 'Int'>
    readonly rushingFirstDowns: FieldRef<"PlayerStat", 'Int'>
    readonly rushingEpa: FieldRef<"PlayerStat", 'Float'>
    readonly rushing2ptConversions: FieldRef<"PlayerStat", 'Int'>
    readonly receptions: FieldRef<"PlayerStat", 'Int'>
    readonly targets: FieldRef<"PlayerStat", 'Int'>
    readonly receivingYards: FieldRef<"PlayerStat", 'Float'>
    readonly receivingTds: FieldRef<"PlayerStat", 'Int'>
    readonly receivingFumbles: FieldRef<"PlayerStat", 'Int'>
    readonly receivingFumblesLost: FieldRef<"PlayerStat", 'Int'>
    readonly receivingAirYards: FieldRef<"PlayerStat", 'Float'>
    readonly receivingYardsAfterCatch: FieldRef<"PlayerStat", 'Float'>
    readonly receivingFirstDowns: FieldRef<"PlayerStat", 'Int'>
    readonly receivingEpa: FieldRef<"PlayerStat", 'Float'>
    readonly receiving2ptConversions: FieldRef<"PlayerStat", 'Int'>
    readonly racr: FieldRef<"PlayerStat", 'Float'>
    readonly targetShare: FieldRef<"PlayerStat", 'Float'>
    readonly airYardsShare: FieldRef<"PlayerStat", 'Float'>
    readonly wopr: FieldRef<"PlayerStat", 'Float'>
    readonly specialTeamsTds: FieldRef<"PlayerStat", 'Int'>
    readonly fantasyPoints: FieldRef<"PlayerStat", 'Float'>
    readonly fantasyPointsPpr: FieldRef<"PlayerStat", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * PlayerStat findUnique
   */
  export type PlayerStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStat
     */
    select?: PlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStat
     */
    omit?: PlayerStatOmit<ExtArgs> | null
    /**
     * Filter, which PlayerStat to fetch.
     */
    where: PlayerStatWhereUniqueInput
  }

  /**
   * PlayerStat findUniqueOrThrow
   */
  export type PlayerStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStat
     */
    select?: PlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStat
     */
    omit?: PlayerStatOmit<ExtArgs> | null
    /**
     * Filter, which PlayerStat to fetch.
     */
    where: PlayerStatWhereUniqueInput
  }

  /**
   * PlayerStat findFirst
   */
  export type PlayerStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStat
     */
    select?: PlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStat
     */
    omit?: PlayerStatOmit<ExtArgs> | null
    /**
     * Filter, which PlayerStat to fetch.
     */
    where?: PlayerStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerStats to fetch.
     */
    orderBy?: PlayerStatOrderByWithRelationInput | PlayerStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerStats.
     */
    cursor?: PlayerStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerStats.
     */
    distinct?: PlayerStatScalarFieldEnum | PlayerStatScalarFieldEnum[]
  }

  /**
   * PlayerStat findFirstOrThrow
   */
  export type PlayerStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStat
     */
    select?: PlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStat
     */
    omit?: PlayerStatOmit<ExtArgs> | null
    /**
     * Filter, which PlayerStat to fetch.
     */
    where?: PlayerStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerStats to fetch.
     */
    orderBy?: PlayerStatOrderByWithRelationInput | PlayerStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerStats.
     */
    cursor?: PlayerStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerStats.
     */
    distinct?: PlayerStatScalarFieldEnum | PlayerStatScalarFieldEnum[]
  }

  /**
   * PlayerStat findMany
   */
  export type PlayerStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStat
     */
    select?: PlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStat
     */
    omit?: PlayerStatOmit<ExtArgs> | null
    /**
     * Filter, which PlayerStats to fetch.
     */
    where?: PlayerStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerStats to fetch.
     */
    orderBy?: PlayerStatOrderByWithRelationInput | PlayerStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerStats.
     */
    cursor?: PlayerStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerStats.
     */
    skip?: number
    distinct?: PlayerStatScalarFieldEnum | PlayerStatScalarFieldEnum[]
  }

  /**
   * PlayerStat create
   */
  export type PlayerStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStat
     */
    select?: PlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStat
     */
    omit?: PlayerStatOmit<ExtArgs> | null
    /**
     * The data needed to create a PlayerStat.
     */
    data?: XOR<PlayerStatCreateInput, PlayerStatUncheckedCreateInput>
  }

  /**
   * PlayerStat createMany
   */
  export type PlayerStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerStats.
     */
    data: PlayerStatCreateManyInput | PlayerStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerStat createManyAndReturn
   */
  export type PlayerStatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStat
     */
    select?: PlayerStatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStat
     */
    omit?: PlayerStatOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerStats.
     */
    data: PlayerStatCreateManyInput | PlayerStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerStat update
   */
  export type PlayerStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStat
     */
    select?: PlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStat
     */
    omit?: PlayerStatOmit<ExtArgs> | null
    /**
     * The data needed to update a PlayerStat.
     */
    data: XOR<PlayerStatUpdateInput, PlayerStatUncheckedUpdateInput>
    /**
     * Choose, which PlayerStat to update.
     */
    where: PlayerStatWhereUniqueInput
  }

  /**
   * PlayerStat updateMany
   */
  export type PlayerStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerStats.
     */
    data: XOR<PlayerStatUpdateManyMutationInput, PlayerStatUncheckedUpdateManyInput>
    /**
     * Filter which PlayerStats to update
     */
    where?: PlayerStatWhereInput
    /**
     * Limit how many PlayerStats to update.
     */
    limit?: number
  }

  /**
   * PlayerStat updateManyAndReturn
   */
  export type PlayerStatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStat
     */
    select?: PlayerStatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStat
     */
    omit?: PlayerStatOmit<ExtArgs> | null
    /**
     * The data used to update PlayerStats.
     */
    data: XOR<PlayerStatUpdateManyMutationInput, PlayerStatUncheckedUpdateManyInput>
    /**
     * Filter which PlayerStats to update
     */
    where?: PlayerStatWhereInput
    /**
     * Limit how many PlayerStats to update.
     */
    limit?: number
  }

  /**
   * PlayerStat upsert
   */
  export type PlayerStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStat
     */
    select?: PlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStat
     */
    omit?: PlayerStatOmit<ExtArgs> | null
    /**
     * The filter to search for the PlayerStat to update in case it exists.
     */
    where: PlayerStatWhereUniqueInput
    /**
     * In case the PlayerStat found by the `where` argument doesn't exist, create a new PlayerStat with this data.
     */
    create: XOR<PlayerStatCreateInput, PlayerStatUncheckedCreateInput>
    /**
     * In case the PlayerStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerStatUpdateInput, PlayerStatUncheckedUpdateInput>
  }

  /**
   * PlayerStat delete
   */
  export type PlayerStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStat
     */
    select?: PlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStat
     */
    omit?: PlayerStatOmit<ExtArgs> | null
    /**
     * Filter which PlayerStat to delete.
     */
    where: PlayerStatWhereUniqueInput
  }

  /**
   * PlayerStat deleteMany
   */
  export type PlayerStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerStats to delete
     */
    where?: PlayerStatWhereInput
    /**
     * Limit how many PlayerStats to delete.
     */
    limit?: number
  }

  /**
   * PlayerStat without action
   */
  export type PlayerStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStat
     */
    select?: PlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStat
     */
    omit?: PlayerStatOmit<ExtArgs> | null
  }


  /**
   * Model ReceivingStat
   */

  export type AggregateReceivingStat = {
    _count: ReceivingStatCountAggregateOutputType | null
    _avg: ReceivingStatAvgAggregateOutputType | null
    _sum: ReceivingStatSumAggregateOutputType | null
    _min: ReceivingStatMinAggregateOutputType | null
    _max: ReceivingStatMaxAggregateOutputType | null
  }

  export type ReceivingStatAvgAggregateOutputType = {
    playerGameCount: number | null
    avgDepthOfTarget: number | null
    avoidedTackles: number | null
    caughtPercent: number | null
    contestedCatchRate: number | null
    contestedReceptions: number | null
    contestedTargets: number | null
    declinedPenalties: number | null
    dropRate: number | null
    drops: number | null
    firstDowns: number | null
    franchiseId: number | null
    fumbles: number | null
    gradesHandsDrop: number | null
    gradesHandsFumble: number | null
    gradesOffense: number | null
    gradesPassBlock: number | null
    gradesPassRoute: number | null
    inlineRate: number | null
    inlineSnaps: number | null
    interceptions: number | null
    longest: number | null
    passBlockRate: number | null
    passBlocks: number | null
    passPlays: number | null
    penalties: number | null
    receptions: number | null
    routeRate: number | null
    routes: number | null
    slotRate: number | null
    slotSnaps: number | null
    targetedQbRating: number | null
    targets: number | null
    touchdowns: number | null
    wideRate: number | null
    wideSnaps: number | null
    yards: number | null
    yardsAfterCatch: number | null
    yardsAfterCatchPerReception: number | null
    yardsPerReception: number | null
    yprr: number | null
  }

  export type ReceivingStatSumAggregateOutputType = {
    playerGameCount: number | null
    avgDepthOfTarget: number | null
    avoidedTackles: number | null
    caughtPercent: number | null
    contestedCatchRate: number | null
    contestedReceptions: number | null
    contestedTargets: number | null
    declinedPenalties: number | null
    dropRate: number | null
    drops: number | null
    firstDowns: number | null
    franchiseId: number | null
    fumbles: number | null
    gradesHandsDrop: number | null
    gradesHandsFumble: number | null
    gradesOffense: number | null
    gradesPassBlock: number | null
    gradesPassRoute: number | null
    inlineRate: number | null
    inlineSnaps: number | null
    interceptions: number | null
    longest: number | null
    passBlockRate: number | null
    passBlocks: number | null
    passPlays: number | null
    penalties: number | null
    receptions: number | null
    routeRate: number | null
    routes: number | null
    slotRate: number | null
    slotSnaps: number | null
    targetedQbRating: number | null
    targets: number | null
    touchdowns: number | null
    wideRate: number | null
    wideSnaps: number | null
    yards: number | null
    yardsAfterCatch: number | null
    yardsAfterCatchPerReception: number | null
    yardsPerReception: number | null
    yprr: number | null
  }

  export type ReceivingStatMinAggregateOutputType = {
    id: string | null
    player: string | null
    playerId: string | null
    position: string | null
    teamName: string | null
    playerGameCount: number | null
    avgDepthOfTarget: number | null
    avoidedTackles: number | null
    caughtPercent: number | null
    contestedCatchRate: number | null
    contestedReceptions: number | null
    contestedTargets: number | null
    declinedPenalties: number | null
    dropRate: number | null
    drops: number | null
    firstDowns: number | null
    franchiseId: number | null
    fumbles: number | null
    gradesHandsDrop: number | null
    gradesHandsFumble: number | null
    gradesOffense: number | null
    gradesPassBlock: number | null
    gradesPassRoute: number | null
    inlineRate: number | null
    inlineSnaps: number | null
    interceptions: number | null
    longest: number | null
    passBlockRate: number | null
    passBlocks: number | null
    passPlays: number | null
    penalties: number | null
    receptions: number | null
    routeRate: number | null
    routes: number | null
    slotRate: number | null
    slotSnaps: number | null
    targetedQbRating: number | null
    targets: number | null
    touchdowns: number | null
    wideRate: number | null
    wideSnaps: number | null
    yards: number | null
    yardsAfterCatch: number | null
    yardsAfterCatchPerReception: number | null
    yardsPerReception: number | null
    yprr: number | null
  }

  export type ReceivingStatMaxAggregateOutputType = {
    id: string | null
    player: string | null
    playerId: string | null
    position: string | null
    teamName: string | null
    playerGameCount: number | null
    avgDepthOfTarget: number | null
    avoidedTackles: number | null
    caughtPercent: number | null
    contestedCatchRate: number | null
    contestedReceptions: number | null
    contestedTargets: number | null
    declinedPenalties: number | null
    dropRate: number | null
    drops: number | null
    firstDowns: number | null
    franchiseId: number | null
    fumbles: number | null
    gradesHandsDrop: number | null
    gradesHandsFumble: number | null
    gradesOffense: number | null
    gradesPassBlock: number | null
    gradesPassRoute: number | null
    inlineRate: number | null
    inlineSnaps: number | null
    interceptions: number | null
    longest: number | null
    passBlockRate: number | null
    passBlocks: number | null
    passPlays: number | null
    penalties: number | null
    receptions: number | null
    routeRate: number | null
    routes: number | null
    slotRate: number | null
    slotSnaps: number | null
    targetedQbRating: number | null
    targets: number | null
    touchdowns: number | null
    wideRate: number | null
    wideSnaps: number | null
    yards: number | null
    yardsAfterCatch: number | null
    yardsAfterCatchPerReception: number | null
    yardsPerReception: number | null
    yprr: number | null
  }

  export type ReceivingStatCountAggregateOutputType = {
    id: number
    player: number
    playerId: number
    position: number
    teamName: number
    playerGameCount: number
    avgDepthOfTarget: number
    avoidedTackles: number
    caughtPercent: number
    contestedCatchRate: number
    contestedReceptions: number
    contestedTargets: number
    declinedPenalties: number
    dropRate: number
    drops: number
    firstDowns: number
    franchiseId: number
    fumbles: number
    gradesHandsDrop: number
    gradesHandsFumble: number
    gradesOffense: number
    gradesPassBlock: number
    gradesPassRoute: number
    inlineRate: number
    inlineSnaps: number
    interceptions: number
    longest: number
    passBlockRate: number
    passBlocks: number
    passPlays: number
    penalties: number
    receptions: number
    routeRate: number
    routes: number
    slotRate: number
    slotSnaps: number
    targetedQbRating: number
    targets: number
    touchdowns: number
    wideRate: number
    wideSnaps: number
    yards: number
    yardsAfterCatch: number
    yardsAfterCatchPerReception: number
    yardsPerReception: number
    yprr: number
    _all: number
  }


  export type ReceivingStatAvgAggregateInputType = {
    playerGameCount?: true
    avgDepthOfTarget?: true
    avoidedTackles?: true
    caughtPercent?: true
    contestedCatchRate?: true
    contestedReceptions?: true
    contestedTargets?: true
    declinedPenalties?: true
    dropRate?: true
    drops?: true
    firstDowns?: true
    franchiseId?: true
    fumbles?: true
    gradesHandsDrop?: true
    gradesHandsFumble?: true
    gradesOffense?: true
    gradesPassBlock?: true
    gradesPassRoute?: true
    inlineRate?: true
    inlineSnaps?: true
    interceptions?: true
    longest?: true
    passBlockRate?: true
    passBlocks?: true
    passPlays?: true
    penalties?: true
    receptions?: true
    routeRate?: true
    routes?: true
    slotRate?: true
    slotSnaps?: true
    targetedQbRating?: true
    targets?: true
    touchdowns?: true
    wideRate?: true
    wideSnaps?: true
    yards?: true
    yardsAfterCatch?: true
    yardsAfterCatchPerReception?: true
    yardsPerReception?: true
    yprr?: true
  }

  export type ReceivingStatSumAggregateInputType = {
    playerGameCount?: true
    avgDepthOfTarget?: true
    avoidedTackles?: true
    caughtPercent?: true
    contestedCatchRate?: true
    contestedReceptions?: true
    contestedTargets?: true
    declinedPenalties?: true
    dropRate?: true
    drops?: true
    firstDowns?: true
    franchiseId?: true
    fumbles?: true
    gradesHandsDrop?: true
    gradesHandsFumble?: true
    gradesOffense?: true
    gradesPassBlock?: true
    gradesPassRoute?: true
    inlineRate?: true
    inlineSnaps?: true
    interceptions?: true
    longest?: true
    passBlockRate?: true
    passBlocks?: true
    passPlays?: true
    penalties?: true
    receptions?: true
    routeRate?: true
    routes?: true
    slotRate?: true
    slotSnaps?: true
    targetedQbRating?: true
    targets?: true
    touchdowns?: true
    wideRate?: true
    wideSnaps?: true
    yards?: true
    yardsAfterCatch?: true
    yardsAfterCatchPerReception?: true
    yardsPerReception?: true
    yprr?: true
  }

  export type ReceivingStatMinAggregateInputType = {
    id?: true
    player?: true
    playerId?: true
    position?: true
    teamName?: true
    playerGameCount?: true
    avgDepthOfTarget?: true
    avoidedTackles?: true
    caughtPercent?: true
    contestedCatchRate?: true
    contestedReceptions?: true
    contestedTargets?: true
    declinedPenalties?: true
    dropRate?: true
    drops?: true
    firstDowns?: true
    franchiseId?: true
    fumbles?: true
    gradesHandsDrop?: true
    gradesHandsFumble?: true
    gradesOffense?: true
    gradesPassBlock?: true
    gradesPassRoute?: true
    inlineRate?: true
    inlineSnaps?: true
    interceptions?: true
    longest?: true
    passBlockRate?: true
    passBlocks?: true
    passPlays?: true
    penalties?: true
    receptions?: true
    routeRate?: true
    routes?: true
    slotRate?: true
    slotSnaps?: true
    targetedQbRating?: true
    targets?: true
    touchdowns?: true
    wideRate?: true
    wideSnaps?: true
    yards?: true
    yardsAfterCatch?: true
    yardsAfterCatchPerReception?: true
    yardsPerReception?: true
    yprr?: true
  }

  export type ReceivingStatMaxAggregateInputType = {
    id?: true
    player?: true
    playerId?: true
    position?: true
    teamName?: true
    playerGameCount?: true
    avgDepthOfTarget?: true
    avoidedTackles?: true
    caughtPercent?: true
    contestedCatchRate?: true
    contestedReceptions?: true
    contestedTargets?: true
    declinedPenalties?: true
    dropRate?: true
    drops?: true
    firstDowns?: true
    franchiseId?: true
    fumbles?: true
    gradesHandsDrop?: true
    gradesHandsFumble?: true
    gradesOffense?: true
    gradesPassBlock?: true
    gradesPassRoute?: true
    inlineRate?: true
    inlineSnaps?: true
    interceptions?: true
    longest?: true
    passBlockRate?: true
    passBlocks?: true
    passPlays?: true
    penalties?: true
    receptions?: true
    routeRate?: true
    routes?: true
    slotRate?: true
    slotSnaps?: true
    targetedQbRating?: true
    targets?: true
    touchdowns?: true
    wideRate?: true
    wideSnaps?: true
    yards?: true
    yardsAfterCatch?: true
    yardsAfterCatchPerReception?: true
    yardsPerReception?: true
    yprr?: true
  }

  export type ReceivingStatCountAggregateInputType = {
    id?: true
    player?: true
    playerId?: true
    position?: true
    teamName?: true
    playerGameCount?: true
    avgDepthOfTarget?: true
    avoidedTackles?: true
    caughtPercent?: true
    contestedCatchRate?: true
    contestedReceptions?: true
    contestedTargets?: true
    declinedPenalties?: true
    dropRate?: true
    drops?: true
    firstDowns?: true
    franchiseId?: true
    fumbles?: true
    gradesHandsDrop?: true
    gradesHandsFumble?: true
    gradesOffense?: true
    gradesPassBlock?: true
    gradesPassRoute?: true
    inlineRate?: true
    inlineSnaps?: true
    interceptions?: true
    longest?: true
    passBlockRate?: true
    passBlocks?: true
    passPlays?: true
    penalties?: true
    receptions?: true
    routeRate?: true
    routes?: true
    slotRate?: true
    slotSnaps?: true
    targetedQbRating?: true
    targets?: true
    touchdowns?: true
    wideRate?: true
    wideSnaps?: true
    yards?: true
    yardsAfterCatch?: true
    yardsAfterCatchPerReception?: true
    yardsPerReception?: true
    yprr?: true
    _all?: true
  }

  export type ReceivingStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceivingStat to aggregate.
     */
    where?: ReceivingStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceivingStats to fetch.
     */
    orderBy?: ReceivingStatOrderByWithRelationInput | ReceivingStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceivingStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceivingStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceivingStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReceivingStats
    **/
    _count?: true | ReceivingStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceivingStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceivingStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceivingStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceivingStatMaxAggregateInputType
  }

  export type GetReceivingStatAggregateType<T extends ReceivingStatAggregateArgs> = {
        [P in keyof T & keyof AggregateReceivingStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceivingStat[P]>
      : GetScalarType<T[P], AggregateReceivingStat[P]>
  }




  export type ReceivingStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceivingStatWhereInput
    orderBy?: ReceivingStatOrderByWithAggregationInput | ReceivingStatOrderByWithAggregationInput[]
    by: ReceivingStatScalarFieldEnum[] | ReceivingStatScalarFieldEnum
    having?: ReceivingStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceivingStatCountAggregateInputType | true
    _avg?: ReceivingStatAvgAggregateInputType
    _sum?: ReceivingStatSumAggregateInputType
    _min?: ReceivingStatMinAggregateInputType
    _max?: ReceivingStatMaxAggregateInputType
  }

  export type ReceivingStatGroupByOutputType = {
    id: string
    player: string | null
    playerId: string | null
    position: string | null
    teamName: string | null
    playerGameCount: number | null
    avgDepthOfTarget: number | null
    avoidedTackles: number | null
    caughtPercent: number | null
    contestedCatchRate: number | null
    contestedReceptions: number | null
    contestedTargets: number | null
    declinedPenalties: number | null
    dropRate: number | null
    drops: number | null
    firstDowns: number | null
    franchiseId: number | null
    fumbles: number | null
    gradesHandsDrop: number | null
    gradesHandsFumble: number | null
    gradesOffense: number | null
    gradesPassBlock: number | null
    gradesPassRoute: number | null
    inlineRate: number | null
    inlineSnaps: number | null
    interceptions: number | null
    longest: number | null
    passBlockRate: number | null
    passBlocks: number | null
    passPlays: number | null
    penalties: number | null
    receptions: number | null
    routeRate: number | null
    routes: number | null
    slotRate: number | null
    slotSnaps: number | null
    targetedQbRating: number | null
    targets: number | null
    touchdowns: number | null
    wideRate: number | null
    wideSnaps: number | null
    yards: number | null
    yardsAfterCatch: number | null
    yardsAfterCatchPerReception: number | null
    yardsPerReception: number | null
    yprr: number | null
    _count: ReceivingStatCountAggregateOutputType | null
    _avg: ReceivingStatAvgAggregateOutputType | null
    _sum: ReceivingStatSumAggregateOutputType | null
    _min: ReceivingStatMinAggregateOutputType | null
    _max: ReceivingStatMaxAggregateOutputType | null
  }

  type GetReceivingStatGroupByPayload<T extends ReceivingStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceivingStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceivingStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceivingStatGroupByOutputType[P]>
            : GetScalarType<T[P], ReceivingStatGroupByOutputType[P]>
        }
      >
    >


  export type ReceivingStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player?: boolean
    playerId?: boolean
    position?: boolean
    teamName?: boolean
    playerGameCount?: boolean
    avgDepthOfTarget?: boolean
    avoidedTackles?: boolean
    caughtPercent?: boolean
    contestedCatchRate?: boolean
    contestedReceptions?: boolean
    contestedTargets?: boolean
    declinedPenalties?: boolean
    dropRate?: boolean
    drops?: boolean
    firstDowns?: boolean
    franchiseId?: boolean
    fumbles?: boolean
    gradesHandsDrop?: boolean
    gradesHandsFumble?: boolean
    gradesOffense?: boolean
    gradesPassBlock?: boolean
    gradesPassRoute?: boolean
    inlineRate?: boolean
    inlineSnaps?: boolean
    interceptions?: boolean
    longest?: boolean
    passBlockRate?: boolean
    passBlocks?: boolean
    passPlays?: boolean
    penalties?: boolean
    receptions?: boolean
    routeRate?: boolean
    routes?: boolean
    slotRate?: boolean
    slotSnaps?: boolean
    targetedQbRating?: boolean
    targets?: boolean
    touchdowns?: boolean
    wideRate?: boolean
    wideSnaps?: boolean
    yards?: boolean
    yardsAfterCatch?: boolean
    yardsAfterCatchPerReception?: boolean
    yardsPerReception?: boolean
    yprr?: boolean
  }, ExtArgs["result"]["receivingStat"]>

  export type ReceivingStatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player?: boolean
    playerId?: boolean
    position?: boolean
    teamName?: boolean
    playerGameCount?: boolean
    avgDepthOfTarget?: boolean
    avoidedTackles?: boolean
    caughtPercent?: boolean
    contestedCatchRate?: boolean
    contestedReceptions?: boolean
    contestedTargets?: boolean
    declinedPenalties?: boolean
    dropRate?: boolean
    drops?: boolean
    firstDowns?: boolean
    franchiseId?: boolean
    fumbles?: boolean
    gradesHandsDrop?: boolean
    gradesHandsFumble?: boolean
    gradesOffense?: boolean
    gradesPassBlock?: boolean
    gradesPassRoute?: boolean
    inlineRate?: boolean
    inlineSnaps?: boolean
    interceptions?: boolean
    longest?: boolean
    passBlockRate?: boolean
    passBlocks?: boolean
    passPlays?: boolean
    penalties?: boolean
    receptions?: boolean
    routeRate?: boolean
    routes?: boolean
    slotRate?: boolean
    slotSnaps?: boolean
    targetedQbRating?: boolean
    targets?: boolean
    touchdowns?: boolean
    wideRate?: boolean
    wideSnaps?: boolean
    yards?: boolean
    yardsAfterCatch?: boolean
    yardsAfterCatchPerReception?: boolean
    yardsPerReception?: boolean
    yprr?: boolean
  }, ExtArgs["result"]["receivingStat"]>

  export type ReceivingStatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player?: boolean
    playerId?: boolean
    position?: boolean
    teamName?: boolean
    playerGameCount?: boolean
    avgDepthOfTarget?: boolean
    avoidedTackles?: boolean
    caughtPercent?: boolean
    contestedCatchRate?: boolean
    contestedReceptions?: boolean
    contestedTargets?: boolean
    declinedPenalties?: boolean
    dropRate?: boolean
    drops?: boolean
    firstDowns?: boolean
    franchiseId?: boolean
    fumbles?: boolean
    gradesHandsDrop?: boolean
    gradesHandsFumble?: boolean
    gradesOffense?: boolean
    gradesPassBlock?: boolean
    gradesPassRoute?: boolean
    inlineRate?: boolean
    inlineSnaps?: boolean
    interceptions?: boolean
    longest?: boolean
    passBlockRate?: boolean
    passBlocks?: boolean
    passPlays?: boolean
    penalties?: boolean
    receptions?: boolean
    routeRate?: boolean
    routes?: boolean
    slotRate?: boolean
    slotSnaps?: boolean
    targetedQbRating?: boolean
    targets?: boolean
    touchdowns?: boolean
    wideRate?: boolean
    wideSnaps?: boolean
    yards?: boolean
    yardsAfterCatch?: boolean
    yardsAfterCatchPerReception?: boolean
    yardsPerReception?: boolean
    yprr?: boolean
  }, ExtArgs["result"]["receivingStat"]>

  export type ReceivingStatSelectScalar = {
    id?: boolean
    player?: boolean
    playerId?: boolean
    position?: boolean
    teamName?: boolean
    playerGameCount?: boolean
    avgDepthOfTarget?: boolean
    avoidedTackles?: boolean
    caughtPercent?: boolean
    contestedCatchRate?: boolean
    contestedReceptions?: boolean
    contestedTargets?: boolean
    declinedPenalties?: boolean
    dropRate?: boolean
    drops?: boolean
    firstDowns?: boolean
    franchiseId?: boolean
    fumbles?: boolean
    gradesHandsDrop?: boolean
    gradesHandsFumble?: boolean
    gradesOffense?: boolean
    gradesPassBlock?: boolean
    gradesPassRoute?: boolean
    inlineRate?: boolean
    inlineSnaps?: boolean
    interceptions?: boolean
    longest?: boolean
    passBlockRate?: boolean
    passBlocks?: boolean
    passPlays?: boolean
    penalties?: boolean
    receptions?: boolean
    routeRate?: boolean
    routes?: boolean
    slotRate?: boolean
    slotSnaps?: boolean
    targetedQbRating?: boolean
    targets?: boolean
    touchdowns?: boolean
    wideRate?: boolean
    wideSnaps?: boolean
    yards?: boolean
    yardsAfterCatch?: boolean
    yardsAfterCatchPerReception?: boolean
    yardsPerReception?: boolean
    yprr?: boolean
  }

  export type ReceivingStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "player" | "playerId" | "position" | "teamName" | "playerGameCount" | "avgDepthOfTarget" | "avoidedTackles" | "caughtPercent" | "contestedCatchRate" | "contestedReceptions" | "contestedTargets" | "declinedPenalties" | "dropRate" | "drops" | "firstDowns" | "franchiseId" | "fumbles" | "gradesHandsDrop" | "gradesHandsFumble" | "gradesOffense" | "gradesPassBlock" | "gradesPassRoute" | "inlineRate" | "inlineSnaps" | "interceptions" | "longest" | "passBlockRate" | "passBlocks" | "passPlays" | "penalties" | "receptions" | "routeRate" | "routes" | "slotRate" | "slotSnaps" | "targetedQbRating" | "targets" | "touchdowns" | "wideRate" | "wideSnaps" | "yards" | "yardsAfterCatch" | "yardsAfterCatchPerReception" | "yardsPerReception" | "yprr", ExtArgs["result"]["receivingStat"]>

  export type $ReceivingStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReceivingStat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      player: string | null
      playerId: string | null
      position: string | null
      teamName: string | null
      playerGameCount: number | null
      avgDepthOfTarget: number | null
      avoidedTackles: number | null
      caughtPercent: number | null
      contestedCatchRate: number | null
      contestedReceptions: number | null
      contestedTargets: number | null
      declinedPenalties: number | null
      dropRate: number | null
      drops: number | null
      firstDowns: number | null
      franchiseId: number | null
      fumbles: number | null
      gradesHandsDrop: number | null
      gradesHandsFumble: number | null
      gradesOffense: number | null
      gradesPassBlock: number | null
      gradesPassRoute: number | null
      inlineRate: number | null
      inlineSnaps: number | null
      interceptions: number | null
      longest: number | null
      passBlockRate: number | null
      passBlocks: number | null
      passPlays: number | null
      penalties: number | null
      receptions: number | null
      routeRate: number | null
      routes: number | null
      slotRate: number | null
      slotSnaps: number | null
      targetedQbRating: number | null
      targets: number | null
      touchdowns: number | null
      wideRate: number | null
      wideSnaps: number | null
      yards: number | null
      yardsAfterCatch: number | null
      yardsAfterCatchPerReception: number | null
      yardsPerReception: number | null
      yprr: number | null
    }, ExtArgs["result"]["receivingStat"]>
    composites: {}
  }

  type ReceivingStatGetPayload<S extends boolean | null | undefined | ReceivingStatDefaultArgs> = $Result.GetResult<Prisma.$ReceivingStatPayload, S>

  type ReceivingStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceivingStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceivingStatCountAggregateInputType | true
    }

  export interface ReceivingStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReceivingStat'], meta: { name: 'ReceivingStat' } }
    /**
     * Find zero or one ReceivingStat that matches the filter.
     * @param {ReceivingStatFindUniqueArgs} args - Arguments to find a ReceivingStat
     * @example
     * // Get one ReceivingStat
     * const receivingStat = await prisma.receivingStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceivingStatFindUniqueArgs>(args: SelectSubset<T, ReceivingStatFindUniqueArgs<ExtArgs>>): Prisma__ReceivingStatClient<$Result.GetResult<Prisma.$ReceivingStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReceivingStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceivingStatFindUniqueOrThrowArgs} args - Arguments to find a ReceivingStat
     * @example
     * // Get one ReceivingStat
     * const receivingStat = await prisma.receivingStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceivingStatFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceivingStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceivingStatClient<$Result.GetResult<Prisma.$ReceivingStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceivingStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingStatFindFirstArgs} args - Arguments to find a ReceivingStat
     * @example
     * // Get one ReceivingStat
     * const receivingStat = await prisma.receivingStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceivingStatFindFirstArgs>(args?: SelectSubset<T, ReceivingStatFindFirstArgs<ExtArgs>>): Prisma__ReceivingStatClient<$Result.GetResult<Prisma.$ReceivingStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceivingStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingStatFindFirstOrThrowArgs} args - Arguments to find a ReceivingStat
     * @example
     * // Get one ReceivingStat
     * const receivingStat = await prisma.receivingStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceivingStatFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceivingStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceivingStatClient<$Result.GetResult<Prisma.$ReceivingStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReceivingStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReceivingStats
     * const receivingStats = await prisma.receivingStat.findMany()
     * 
     * // Get first 10 ReceivingStats
     * const receivingStats = await prisma.receivingStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receivingStatWithIdOnly = await prisma.receivingStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReceivingStatFindManyArgs>(args?: SelectSubset<T, ReceivingStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceivingStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReceivingStat.
     * @param {ReceivingStatCreateArgs} args - Arguments to create a ReceivingStat.
     * @example
     * // Create one ReceivingStat
     * const ReceivingStat = await prisma.receivingStat.create({
     *   data: {
     *     // ... data to create a ReceivingStat
     *   }
     * })
     * 
     */
    create<T extends ReceivingStatCreateArgs>(args: SelectSubset<T, ReceivingStatCreateArgs<ExtArgs>>): Prisma__ReceivingStatClient<$Result.GetResult<Prisma.$ReceivingStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReceivingStats.
     * @param {ReceivingStatCreateManyArgs} args - Arguments to create many ReceivingStats.
     * @example
     * // Create many ReceivingStats
     * const receivingStat = await prisma.receivingStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceivingStatCreateManyArgs>(args?: SelectSubset<T, ReceivingStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReceivingStats and returns the data saved in the database.
     * @param {ReceivingStatCreateManyAndReturnArgs} args - Arguments to create many ReceivingStats.
     * @example
     * // Create many ReceivingStats
     * const receivingStat = await prisma.receivingStat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReceivingStats and only return the `id`
     * const receivingStatWithIdOnly = await prisma.receivingStat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReceivingStatCreateManyAndReturnArgs>(args?: SelectSubset<T, ReceivingStatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceivingStatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReceivingStat.
     * @param {ReceivingStatDeleteArgs} args - Arguments to delete one ReceivingStat.
     * @example
     * // Delete one ReceivingStat
     * const ReceivingStat = await prisma.receivingStat.delete({
     *   where: {
     *     // ... filter to delete one ReceivingStat
     *   }
     * })
     * 
     */
    delete<T extends ReceivingStatDeleteArgs>(args: SelectSubset<T, ReceivingStatDeleteArgs<ExtArgs>>): Prisma__ReceivingStatClient<$Result.GetResult<Prisma.$ReceivingStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReceivingStat.
     * @param {ReceivingStatUpdateArgs} args - Arguments to update one ReceivingStat.
     * @example
     * // Update one ReceivingStat
     * const receivingStat = await prisma.receivingStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceivingStatUpdateArgs>(args: SelectSubset<T, ReceivingStatUpdateArgs<ExtArgs>>): Prisma__ReceivingStatClient<$Result.GetResult<Prisma.$ReceivingStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReceivingStats.
     * @param {ReceivingStatDeleteManyArgs} args - Arguments to filter ReceivingStats to delete.
     * @example
     * // Delete a few ReceivingStats
     * const { count } = await prisma.receivingStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceivingStatDeleteManyArgs>(args?: SelectSubset<T, ReceivingStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceivingStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReceivingStats
     * const receivingStat = await prisma.receivingStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceivingStatUpdateManyArgs>(args: SelectSubset<T, ReceivingStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceivingStats and returns the data updated in the database.
     * @param {ReceivingStatUpdateManyAndReturnArgs} args - Arguments to update many ReceivingStats.
     * @example
     * // Update many ReceivingStats
     * const receivingStat = await prisma.receivingStat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReceivingStats and only return the `id`
     * const receivingStatWithIdOnly = await prisma.receivingStat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReceivingStatUpdateManyAndReturnArgs>(args: SelectSubset<T, ReceivingStatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceivingStatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReceivingStat.
     * @param {ReceivingStatUpsertArgs} args - Arguments to update or create a ReceivingStat.
     * @example
     * // Update or create a ReceivingStat
     * const receivingStat = await prisma.receivingStat.upsert({
     *   create: {
     *     // ... data to create a ReceivingStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReceivingStat we want to update
     *   }
     * })
     */
    upsert<T extends ReceivingStatUpsertArgs>(args: SelectSubset<T, ReceivingStatUpsertArgs<ExtArgs>>): Prisma__ReceivingStatClient<$Result.GetResult<Prisma.$ReceivingStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReceivingStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingStatCountArgs} args - Arguments to filter ReceivingStats to count.
     * @example
     * // Count the number of ReceivingStats
     * const count = await prisma.receivingStat.count({
     *   where: {
     *     // ... the filter for the ReceivingStats we want to count
     *   }
     * })
    **/
    count<T extends ReceivingStatCountArgs>(
      args?: Subset<T, ReceivingStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceivingStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReceivingStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReceivingStatAggregateArgs>(args: Subset<T, ReceivingStatAggregateArgs>): Prisma.PrismaPromise<GetReceivingStatAggregateType<T>>

    /**
     * Group by ReceivingStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingStatGroupByArgs} args - Group by arguments.
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
      T extends ReceivingStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceivingStatGroupByArgs['orderBy'] }
        : { orderBy?: ReceivingStatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReceivingStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceivingStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReceivingStat model
   */
  readonly fields: ReceivingStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReceivingStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceivingStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ReceivingStat model
   */
  interface ReceivingStatFieldRefs {
    readonly id: FieldRef<"ReceivingStat", 'String'>
    readonly player: FieldRef<"ReceivingStat", 'String'>
    readonly playerId: FieldRef<"ReceivingStat", 'String'>
    readonly position: FieldRef<"ReceivingStat", 'String'>
    readonly teamName: FieldRef<"ReceivingStat", 'String'>
    readonly playerGameCount: FieldRef<"ReceivingStat", 'Int'>
    readonly avgDepthOfTarget: FieldRef<"ReceivingStat", 'Float'>
    readonly avoidedTackles: FieldRef<"ReceivingStat", 'Int'>
    readonly caughtPercent: FieldRef<"ReceivingStat", 'Float'>
    readonly contestedCatchRate: FieldRef<"ReceivingStat", 'Float'>
    readonly contestedReceptions: FieldRef<"ReceivingStat", 'Int'>
    readonly contestedTargets: FieldRef<"ReceivingStat", 'Int'>
    readonly declinedPenalties: FieldRef<"ReceivingStat", 'Int'>
    readonly dropRate: FieldRef<"ReceivingStat", 'Float'>
    readonly drops: FieldRef<"ReceivingStat", 'Int'>
    readonly firstDowns: FieldRef<"ReceivingStat", 'Int'>
    readonly franchiseId: FieldRef<"ReceivingStat", 'Int'>
    readonly fumbles: FieldRef<"ReceivingStat", 'Int'>
    readonly gradesHandsDrop: FieldRef<"ReceivingStat", 'Float'>
    readonly gradesHandsFumble: FieldRef<"ReceivingStat", 'Float'>
    readonly gradesOffense: FieldRef<"ReceivingStat", 'Float'>
    readonly gradesPassBlock: FieldRef<"ReceivingStat", 'Float'>
    readonly gradesPassRoute: FieldRef<"ReceivingStat", 'Float'>
    readonly inlineRate: FieldRef<"ReceivingStat", 'Float'>
    readonly inlineSnaps: FieldRef<"ReceivingStat", 'Int'>
    readonly interceptions: FieldRef<"ReceivingStat", 'Int'>
    readonly longest: FieldRef<"ReceivingStat", 'Int'>
    readonly passBlockRate: FieldRef<"ReceivingStat", 'Float'>
    readonly passBlocks: FieldRef<"ReceivingStat", 'Int'>
    readonly passPlays: FieldRef<"ReceivingStat", 'Int'>
    readonly penalties: FieldRef<"ReceivingStat", 'Int'>
    readonly receptions: FieldRef<"ReceivingStat", 'Int'>
    readonly routeRate: FieldRef<"ReceivingStat", 'Float'>
    readonly routes: FieldRef<"ReceivingStat", 'Int'>
    readonly slotRate: FieldRef<"ReceivingStat", 'Float'>
    readonly slotSnaps: FieldRef<"ReceivingStat", 'Int'>
    readonly targetedQbRating: FieldRef<"ReceivingStat", 'Float'>
    readonly targets: FieldRef<"ReceivingStat", 'Int'>
    readonly touchdowns: FieldRef<"ReceivingStat", 'Int'>
    readonly wideRate: FieldRef<"ReceivingStat", 'Float'>
    readonly wideSnaps: FieldRef<"ReceivingStat", 'Int'>
    readonly yards: FieldRef<"ReceivingStat", 'Int'>
    readonly yardsAfterCatch: FieldRef<"ReceivingStat", 'Int'>
    readonly yardsAfterCatchPerReception: FieldRef<"ReceivingStat", 'Float'>
    readonly yardsPerReception: FieldRef<"ReceivingStat", 'Float'>
    readonly yprr: FieldRef<"ReceivingStat", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ReceivingStat findUnique
   */
  export type ReceivingStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingStat
     */
    select?: ReceivingStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingStat
     */
    omit?: ReceivingStatOmit<ExtArgs> | null
    /**
     * Filter, which ReceivingStat to fetch.
     */
    where: ReceivingStatWhereUniqueInput
  }

  /**
   * ReceivingStat findUniqueOrThrow
   */
  export type ReceivingStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingStat
     */
    select?: ReceivingStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingStat
     */
    omit?: ReceivingStatOmit<ExtArgs> | null
    /**
     * Filter, which ReceivingStat to fetch.
     */
    where: ReceivingStatWhereUniqueInput
  }

  /**
   * ReceivingStat findFirst
   */
  export type ReceivingStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingStat
     */
    select?: ReceivingStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingStat
     */
    omit?: ReceivingStatOmit<ExtArgs> | null
    /**
     * Filter, which ReceivingStat to fetch.
     */
    where?: ReceivingStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceivingStats to fetch.
     */
    orderBy?: ReceivingStatOrderByWithRelationInput | ReceivingStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceivingStats.
     */
    cursor?: ReceivingStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceivingStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceivingStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceivingStats.
     */
    distinct?: ReceivingStatScalarFieldEnum | ReceivingStatScalarFieldEnum[]
  }

  /**
   * ReceivingStat findFirstOrThrow
   */
  export type ReceivingStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingStat
     */
    select?: ReceivingStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingStat
     */
    omit?: ReceivingStatOmit<ExtArgs> | null
    /**
     * Filter, which ReceivingStat to fetch.
     */
    where?: ReceivingStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceivingStats to fetch.
     */
    orderBy?: ReceivingStatOrderByWithRelationInput | ReceivingStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceivingStats.
     */
    cursor?: ReceivingStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceivingStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceivingStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceivingStats.
     */
    distinct?: ReceivingStatScalarFieldEnum | ReceivingStatScalarFieldEnum[]
  }

  /**
   * ReceivingStat findMany
   */
  export type ReceivingStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingStat
     */
    select?: ReceivingStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingStat
     */
    omit?: ReceivingStatOmit<ExtArgs> | null
    /**
     * Filter, which ReceivingStats to fetch.
     */
    where?: ReceivingStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceivingStats to fetch.
     */
    orderBy?: ReceivingStatOrderByWithRelationInput | ReceivingStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReceivingStats.
     */
    cursor?: ReceivingStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceivingStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceivingStats.
     */
    skip?: number
    distinct?: ReceivingStatScalarFieldEnum | ReceivingStatScalarFieldEnum[]
  }

  /**
   * ReceivingStat create
   */
  export type ReceivingStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingStat
     */
    select?: ReceivingStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingStat
     */
    omit?: ReceivingStatOmit<ExtArgs> | null
    /**
     * The data needed to create a ReceivingStat.
     */
    data?: XOR<ReceivingStatCreateInput, ReceivingStatUncheckedCreateInput>
  }

  /**
   * ReceivingStat createMany
   */
  export type ReceivingStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReceivingStats.
     */
    data: ReceivingStatCreateManyInput | ReceivingStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReceivingStat createManyAndReturn
   */
  export type ReceivingStatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingStat
     */
    select?: ReceivingStatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingStat
     */
    omit?: ReceivingStatOmit<ExtArgs> | null
    /**
     * The data used to create many ReceivingStats.
     */
    data: ReceivingStatCreateManyInput | ReceivingStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReceivingStat update
   */
  export type ReceivingStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingStat
     */
    select?: ReceivingStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingStat
     */
    omit?: ReceivingStatOmit<ExtArgs> | null
    /**
     * The data needed to update a ReceivingStat.
     */
    data: XOR<ReceivingStatUpdateInput, ReceivingStatUncheckedUpdateInput>
    /**
     * Choose, which ReceivingStat to update.
     */
    where: ReceivingStatWhereUniqueInput
  }

  /**
   * ReceivingStat updateMany
   */
  export type ReceivingStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReceivingStats.
     */
    data: XOR<ReceivingStatUpdateManyMutationInput, ReceivingStatUncheckedUpdateManyInput>
    /**
     * Filter which ReceivingStats to update
     */
    where?: ReceivingStatWhereInput
    /**
     * Limit how many ReceivingStats to update.
     */
    limit?: number
  }

  /**
   * ReceivingStat updateManyAndReturn
   */
  export type ReceivingStatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingStat
     */
    select?: ReceivingStatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingStat
     */
    omit?: ReceivingStatOmit<ExtArgs> | null
    /**
     * The data used to update ReceivingStats.
     */
    data: XOR<ReceivingStatUpdateManyMutationInput, ReceivingStatUncheckedUpdateManyInput>
    /**
     * Filter which ReceivingStats to update
     */
    where?: ReceivingStatWhereInput
    /**
     * Limit how many ReceivingStats to update.
     */
    limit?: number
  }

  /**
   * ReceivingStat upsert
   */
  export type ReceivingStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingStat
     */
    select?: ReceivingStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingStat
     */
    omit?: ReceivingStatOmit<ExtArgs> | null
    /**
     * The filter to search for the ReceivingStat to update in case it exists.
     */
    where: ReceivingStatWhereUniqueInput
    /**
     * In case the ReceivingStat found by the `where` argument doesn't exist, create a new ReceivingStat with this data.
     */
    create: XOR<ReceivingStatCreateInput, ReceivingStatUncheckedCreateInput>
    /**
     * In case the ReceivingStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceivingStatUpdateInput, ReceivingStatUncheckedUpdateInput>
  }

  /**
   * ReceivingStat delete
   */
  export type ReceivingStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingStat
     */
    select?: ReceivingStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingStat
     */
    omit?: ReceivingStatOmit<ExtArgs> | null
    /**
     * Filter which ReceivingStat to delete.
     */
    where: ReceivingStatWhereUniqueInput
  }

  /**
   * ReceivingStat deleteMany
   */
  export type ReceivingStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceivingStats to delete
     */
    where?: ReceivingStatWhereInput
    /**
     * Limit how many ReceivingStats to delete.
     */
    limit?: number
  }

  /**
   * ReceivingStat without action
   */
  export type ReceivingStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingStat
     */
    select?: ReceivingStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingStat
     */
    omit?: ReceivingStatOmit<ExtArgs> | null
  }


  /**
   * Model PlayerSeason
   */

  export type AggregatePlayerSeason = {
    _count: PlayerSeasonCountAggregateOutputType | null
    _avg: PlayerSeasonAvgAggregateOutputType | null
    _sum: PlayerSeasonSumAggregateOutputType | null
    _min: PlayerSeasonMinAggregateOutputType | null
    _max: PlayerSeasonMaxAggregateOutputType | null
  }

  export type PlayerSeasonAvgAggregateOutputType = {
    season: number | null
    games_played: number | null
    completions_total: number | null
    attempts_total: number | null
    passing_yards_total: number | null
    passing_tds_total: number | null
    interceptions_total: number | null
    passing_first_downs_total: number | null
    carries_total: number | null
    rushing_yards_total: number | null
    rushing_tds_total: number | null
    rushing_fumbles_total: number | null
    rushing_fumbles_lost_total: number | null
    rushing_first_downs_total: number | null
    targets_total: number | null
    receiving_yards_total: number | null
    receiving_tds_total: number | null
    receiving_air_yards_total: number | null
    receiving_yards_after_catch_total: number | null
    receiving_first_downs_total: number | null
    fantasy_points_total: number | null
    completions_avg: number | null
    attempts_avg: number | null
    passing_yards_avg: number | null
    passing_tds_avg: number | null
    interceptions_avg: number | null
    passing_air_yards_avg: number | null
    passing_yards_after_catch_avg: number | null
    passing_first_downs_avg: number | null
    carries_avg: number | null
    rushing_yards_avg: number | null
    rushing_tds_avg: number | null
    rushing_fumbles_avg: number | null
    rushing_fumbles_lost_avg: number | null
    rushing_first_downs_avg: number | null
    rushing_epa_avg: number | null
    receptions_avg: number | null
    targets_avg: number | null
    receiving_yards_avg: number | null
    receiving_tds_avg: number | null
    receiving_air_yards_avg: number | null
    receiving_yards_after_catch_avg: number | null
    receiving_first_downs_avg: number | null
    receiving_epa_avg: number | null
    racr_avg: number | null
    target_share_avg: number | null
    air_yards_share_avg: number | null
    wopr_avg: number | null
    fantasy_points_avg: number | null
    fantasy_points_ppr_avg: number | null
    YPRR: number | null
    routes: number | null
    routes_per_game: number | null
    TPRR: number | null
    firstDPRR: number | null
  }

  export type PlayerSeasonSumAggregateOutputType = {
    season: number | null
    games_played: number | null
    completions_total: number | null
    attempts_total: number | null
    passing_yards_total: number | null
    passing_tds_total: number | null
    interceptions_total: number | null
    passing_first_downs_total: number | null
    carries_total: number | null
    rushing_yards_total: number | null
    rushing_tds_total: number | null
    rushing_fumbles_total: number | null
    rushing_fumbles_lost_total: number | null
    rushing_first_downs_total: number | null
    targets_total: number | null
    receiving_yards_total: number | null
    receiving_tds_total: number | null
    receiving_air_yards_total: number | null
    receiving_yards_after_catch_total: number | null
    receiving_first_downs_total: number | null
    fantasy_points_total: number | null
    completions_avg: number | null
    attempts_avg: number | null
    passing_yards_avg: number | null
    passing_tds_avg: number | null
    interceptions_avg: number | null
    passing_air_yards_avg: number | null
    passing_yards_after_catch_avg: number | null
    passing_first_downs_avg: number | null
    carries_avg: number | null
    rushing_yards_avg: number | null
    rushing_tds_avg: number | null
    rushing_fumbles_avg: number | null
    rushing_fumbles_lost_avg: number | null
    rushing_first_downs_avg: number | null
    rushing_epa_avg: number | null
    receptions_avg: number | null
    targets_avg: number | null
    receiving_yards_avg: number | null
    receiving_tds_avg: number | null
    receiving_air_yards_avg: number | null
    receiving_yards_after_catch_avg: number | null
    receiving_first_downs_avg: number | null
    receiving_epa_avg: number | null
    racr_avg: number | null
    target_share_avg: number | null
    air_yards_share_avg: number | null
    wopr_avg: number | null
    fantasy_points_avg: number | null
    fantasy_points_ppr_avg: number | null
    YPRR: number | null
    routes: number | null
    routes_per_game: number | null
    TPRR: number | null
    firstDPRR: number | null
  }

  export type PlayerSeasonMinAggregateOutputType = {
    player_id: string | null
    player_name: string | null
    season: number | null
    games_played: number | null
    position: string | null
    completions_total: number | null
    attempts_total: number | null
    passing_yards_total: number | null
    passing_tds_total: number | null
    interceptions_total: number | null
    passing_first_downs_total: number | null
    carries_total: number | null
    rushing_yards_total: number | null
    rushing_tds_total: number | null
    rushing_fumbles_total: number | null
    rushing_fumbles_lost_total: number | null
    rushing_first_downs_total: number | null
    targets_total: number | null
    receiving_yards_total: number | null
    receiving_tds_total: number | null
    receiving_air_yards_total: number | null
    receiving_yards_after_catch_total: number | null
    receiving_first_downs_total: number | null
    fantasy_points_total: number | null
    completions_avg: number | null
    attempts_avg: number | null
    passing_yards_avg: number | null
    passing_tds_avg: number | null
    interceptions_avg: number | null
    passing_air_yards_avg: number | null
    passing_yards_after_catch_avg: number | null
    passing_first_downs_avg: number | null
    carries_avg: number | null
    rushing_yards_avg: number | null
    rushing_tds_avg: number | null
    rushing_fumbles_avg: number | null
    rushing_fumbles_lost_avg: number | null
    rushing_first_downs_avg: number | null
    rushing_epa_avg: number | null
    receptions_avg: number | null
    targets_avg: number | null
    receiving_yards_avg: number | null
    receiving_tds_avg: number | null
    receiving_air_yards_avg: number | null
    receiving_yards_after_catch_avg: number | null
    receiving_first_downs_avg: number | null
    receiving_epa_avg: number | null
    racr_avg: number | null
    target_share_avg: number | null
    air_yards_share_avg: number | null
    wopr_avg: number | null
    fantasy_points_avg: number | null
    fantasy_points_ppr_avg: number | null
    YPRR: number | null
    routes: number | null
    routes_per_game: number | null
    TPRR: number | null
    firstDPRR: number | null
  }

  export type PlayerSeasonMaxAggregateOutputType = {
    player_id: string | null
    player_name: string | null
    season: number | null
    games_played: number | null
    position: string | null
    completions_total: number | null
    attempts_total: number | null
    passing_yards_total: number | null
    passing_tds_total: number | null
    interceptions_total: number | null
    passing_first_downs_total: number | null
    carries_total: number | null
    rushing_yards_total: number | null
    rushing_tds_total: number | null
    rushing_fumbles_total: number | null
    rushing_fumbles_lost_total: number | null
    rushing_first_downs_total: number | null
    targets_total: number | null
    receiving_yards_total: number | null
    receiving_tds_total: number | null
    receiving_air_yards_total: number | null
    receiving_yards_after_catch_total: number | null
    receiving_first_downs_total: number | null
    fantasy_points_total: number | null
    completions_avg: number | null
    attempts_avg: number | null
    passing_yards_avg: number | null
    passing_tds_avg: number | null
    interceptions_avg: number | null
    passing_air_yards_avg: number | null
    passing_yards_after_catch_avg: number | null
    passing_first_downs_avg: number | null
    carries_avg: number | null
    rushing_yards_avg: number | null
    rushing_tds_avg: number | null
    rushing_fumbles_avg: number | null
    rushing_fumbles_lost_avg: number | null
    rushing_first_downs_avg: number | null
    rushing_epa_avg: number | null
    receptions_avg: number | null
    targets_avg: number | null
    receiving_yards_avg: number | null
    receiving_tds_avg: number | null
    receiving_air_yards_avg: number | null
    receiving_yards_after_catch_avg: number | null
    receiving_first_downs_avg: number | null
    receiving_epa_avg: number | null
    racr_avg: number | null
    target_share_avg: number | null
    air_yards_share_avg: number | null
    wopr_avg: number | null
    fantasy_points_avg: number | null
    fantasy_points_ppr_avg: number | null
    YPRR: number | null
    routes: number | null
    routes_per_game: number | null
    TPRR: number | null
    firstDPRR: number | null
  }

  export type PlayerSeasonCountAggregateOutputType = {
    player_id: number
    player_name: number
    season: number
    games_played: number
    position: number
    completions_total: number
    attempts_total: number
    passing_yards_total: number
    passing_tds_total: number
    interceptions_total: number
    passing_first_downs_total: number
    carries_total: number
    rushing_yards_total: number
    rushing_tds_total: number
    rushing_fumbles_total: number
    rushing_fumbles_lost_total: number
    rushing_first_downs_total: number
    targets_total: number
    receiving_yards_total: number
    receiving_tds_total: number
    receiving_air_yards_total: number
    receiving_yards_after_catch_total: number
    receiving_first_downs_total: number
    fantasy_points_total: number
    completions_avg: number
    attempts_avg: number
    passing_yards_avg: number
    passing_tds_avg: number
    interceptions_avg: number
    passing_air_yards_avg: number
    passing_yards_after_catch_avg: number
    passing_first_downs_avg: number
    carries_avg: number
    rushing_yards_avg: number
    rushing_tds_avg: number
    rushing_fumbles_avg: number
    rushing_fumbles_lost_avg: number
    rushing_first_downs_avg: number
    rushing_epa_avg: number
    receptions_avg: number
    targets_avg: number
    receiving_yards_avg: number
    receiving_tds_avg: number
    receiving_air_yards_avg: number
    receiving_yards_after_catch_avg: number
    receiving_first_downs_avg: number
    receiving_epa_avg: number
    racr_avg: number
    target_share_avg: number
    air_yards_share_avg: number
    wopr_avg: number
    fantasy_points_avg: number
    fantasy_points_ppr_avg: number
    YPRR: number
    routes: number
    routes_per_game: number
    TPRR: number
    firstDPRR: number
    _all: number
  }


  export type PlayerSeasonAvgAggregateInputType = {
    season?: true
    games_played?: true
    completions_total?: true
    attempts_total?: true
    passing_yards_total?: true
    passing_tds_total?: true
    interceptions_total?: true
    passing_first_downs_total?: true
    carries_total?: true
    rushing_yards_total?: true
    rushing_tds_total?: true
    rushing_fumbles_total?: true
    rushing_fumbles_lost_total?: true
    rushing_first_downs_total?: true
    targets_total?: true
    receiving_yards_total?: true
    receiving_tds_total?: true
    receiving_air_yards_total?: true
    receiving_yards_after_catch_total?: true
    receiving_first_downs_total?: true
    fantasy_points_total?: true
    completions_avg?: true
    attempts_avg?: true
    passing_yards_avg?: true
    passing_tds_avg?: true
    interceptions_avg?: true
    passing_air_yards_avg?: true
    passing_yards_after_catch_avg?: true
    passing_first_downs_avg?: true
    carries_avg?: true
    rushing_yards_avg?: true
    rushing_tds_avg?: true
    rushing_fumbles_avg?: true
    rushing_fumbles_lost_avg?: true
    rushing_first_downs_avg?: true
    rushing_epa_avg?: true
    receptions_avg?: true
    targets_avg?: true
    receiving_yards_avg?: true
    receiving_tds_avg?: true
    receiving_air_yards_avg?: true
    receiving_yards_after_catch_avg?: true
    receiving_first_downs_avg?: true
    receiving_epa_avg?: true
    racr_avg?: true
    target_share_avg?: true
    air_yards_share_avg?: true
    wopr_avg?: true
    fantasy_points_avg?: true
    fantasy_points_ppr_avg?: true
    YPRR?: true
    routes?: true
    routes_per_game?: true
    TPRR?: true
    firstDPRR?: true
  }

  export type PlayerSeasonSumAggregateInputType = {
    season?: true
    games_played?: true
    completions_total?: true
    attempts_total?: true
    passing_yards_total?: true
    passing_tds_total?: true
    interceptions_total?: true
    passing_first_downs_total?: true
    carries_total?: true
    rushing_yards_total?: true
    rushing_tds_total?: true
    rushing_fumbles_total?: true
    rushing_fumbles_lost_total?: true
    rushing_first_downs_total?: true
    targets_total?: true
    receiving_yards_total?: true
    receiving_tds_total?: true
    receiving_air_yards_total?: true
    receiving_yards_after_catch_total?: true
    receiving_first_downs_total?: true
    fantasy_points_total?: true
    completions_avg?: true
    attempts_avg?: true
    passing_yards_avg?: true
    passing_tds_avg?: true
    interceptions_avg?: true
    passing_air_yards_avg?: true
    passing_yards_after_catch_avg?: true
    passing_first_downs_avg?: true
    carries_avg?: true
    rushing_yards_avg?: true
    rushing_tds_avg?: true
    rushing_fumbles_avg?: true
    rushing_fumbles_lost_avg?: true
    rushing_first_downs_avg?: true
    rushing_epa_avg?: true
    receptions_avg?: true
    targets_avg?: true
    receiving_yards_avg?: true
    receiving_tds_avg?: true
    receiving_air_yards_avg?: true
    receiving_yards_after_catch_avg?: true
    receiving_first_downs_avg?: true
    receiving_epa_avg?: true
    racr_avg?: true
    target_share_avg?: true
    air_yards_share_avg?: true
    wopr_avg?: true
    fantasy_points_avg?: true
    fantasy_points_ppr_avg?: true
    YPRR?: true
    routes?: true
    routes_per_game?: true
    TPRR?: true
    firstDPRR?: true
  }

  export type PlayerSeasonMinAggregateInputType = {
    player_id?: true
    player_name?: true
    season?: true
    games_played?: true
    position?: true
    completions_total?: true
    attempts_total?: true
    passing_yards_total?: true
    passing_tds_total?: true
    interceptions_total?: true
    passing_first_downs_total?: true
    carries_total?: true
    rushing_yards_total?: true
    rushing_tds_total?: true
    rushing_fumbles_total?: true
    rushing_fumbles_lost_total?: true
    rushing_first_downs_total?: true
    targets_total?: true
    receiving_yards_total?: true
    receiving_tds_total?: true
    receiving_air_yards_total?: true
    receiving_yards_after_catch_total?: true
    receiving_first_downs_total?: true
    fantasy_points_total?: true
    completions_avg?: true
    attempts_avg?: true
    passing_yards_avg?: true
    passing_tds_avg?: true
    interceptions_avg?: true
    passing_air_yards_avg?: true
    passing_yards_after_catch_avg?: true
    passing_first_downs_avg?: true
    carries_avg?: true
    rushing_yards_avg?: true
    rushing_tds_avg?: true
    rushing_fumbles_avg?: true
    rushing_fumbles_lost_avg?: true
    rushing_first_downs_avg?: true
    rushing_epa_avg?: true
    receptions_avg?: true
    targets_avg?: true
    receiving_yards_avg?: true
    receiving_tds_avg?: true
    receiving_air_yards_avg?: true
    receiving_yards_after_catch_avg?: true
    receiving_first_downs_avg?: true
    receiving_epa_avg?: true
    racr_avg?: true
    target_share_avg?: true
    air_yards_share_avg?: true
    wopr_avg?: true
    fantasy_points_avg?: true
    fantasy_points_ppr_avg?: true
    YPRR?: true
    routes?: true
    routes_per_game?: true
    TPRR?: true
    firstDPRR?: true
  }

  export type PlayerSeasonMaxAggregateInputType = {
    player_id?: true
    player_name?: true
    season?: true
    games_played?: true
    position?: true
    completions_total?: true
    attempts_total?: true
    passing_yards_total?: true
    passing_tds_total?: true
    interceptions_total?: true
    passing_first_downs_total?: true
    carries_total?: true
    rushing_yards_total?: true
    rushing_tds_total?: true
    rushing_fumbles_total?: true
    rushing_fumbles_lost_total?: true
    rushing_first_downs_total?: true
    targets_total?: true
    receiving_yards_total?: true
    receiving_tds_total?: true
    receiving_air_yards_total?: true
    receiving_yards_after_catch_total?: true
    receiving_first_downs_total?: true
    fantasy_points_total?: true
    completions_avg?: true
    attempts_avg?: true
    passing_yards_avg?: true
    passing_tds_avg?: true
    interceptions_avg?: true
    passing_air_yards_avg?: true
    passing_yards_after_catch_avg?: true
    passing_first_downs_avg?: true
    carries_avg?: true
    rushing_yards_avg?: true
    rushing_tds_avg?: true
    rushing_fumbles_avg?: true
    rushing_fumbles_lost_avg?: true
    rushing_first_downs_avg?: true
    rushing_epa_avg?: true
    receptions_avg?: true
    targets_avg?: true
    receiving_yards_avg?: true
    receiving_tds_avg?: true
    receiving_air_yards_avg?: true
    receiving_yards_after_catch_avg?: true
    receiving_first_downs_avg?: true
    receiving_epa_avg?: true
    racr_avg?: true
    target_share_avg?: true
    air_yards_share_avg?: true
    wopr_avg?: true
    fantasy_points_avg?: true
    fantasy_points_ppr_avg?: true
    YPRR?: true
    routes?: true
    routes_per_game?: true
    TPRR?: true
    firstDPRR?: true
  }

  export type PlayerSeasonCountAggregateInputType = {
    player_id?: true
    player_name?: true
    season?: true
    games_played?: true
    position?: true
    completions_total?: true
    attempts_total?: true
    passing_yards_total?: true
    passing_tds_total?: true
    interceptions_total?: true
    passing_first_downs_total?: true
    carries_total?: true
    rushing_yards_total?: true
    rushing_tds_total?: true
    rushing_fumbles_total?: true
    rushing_fumbles_lost_total?: true
    rushing_first_downs_total?: true
    targets_total?: true
    receiving_yards_total?: true
    receiving_tds_total?: true
    receiving_air_yards_total?: true
    receiving_yards_after_catch_total?: true
    receiving_first_downs_total?: true
    fantasy_points_total?: true
    completions_avg?: true
    attempts_avg?: true
    passing_yards_avg?: true
    passing_tds_avg?: true
    interceptions_avg?: true
    passing_air_yards_avg?: true
    passing_yards_after_catch_avg?: true
    passing_first_downs_avg?: true
    carries_avg?: true
    rushing_yards_avg?: true
    rushing_tds_avg?: true
    rushing_fumbles_avg?: true
    rushing_fumbles_lost_avg?: true
    rushing_first_downs_avg?: true
    rushing_epa_avg?: true
    receptions_avg?: true
    targets_avg?: true
    receiving_yards_avg?: true
    receiving_tds_avg?: true
    receiving_air_yards_avg?: true
    receiving_yards_after_catch_avg?: true
    receiving_first_downs_avg?: true
    receiving_epa_avg?: true
    racr_avg?: true
    target_share_avg?: true
    air_yards_share_avg?: true
    wopr_avg?: true
    fantasy_points_avg?: true
    fantasy_points_ppr_avg?: true
    YPRR?: true
    routes?: true
    routes_per_game?: true
    TPRR?: true
    firstDPRR?: true
    _all?: true
  }

  export type PlayerSeasonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerSeason to aggregate.
     */
    where?: PlayerSeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSeasons to fetch.
     */
    orderBy?: PlayerSeasonOrderByWithRelationInput | PlayerSeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerSeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSeasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSeasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerSeasons
    **/
    _count?: true | PlayerSeasonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerSeasonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSeasonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerSeasonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerSeasonMaxAggregateInputType
  }

  export type GetPlayerSeasonAggregateType<T extends PlayerSeasonAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerSeason]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerSeason[P]>
      : GetScalarType<T[P], AggregatePlayerSeason[P]>
  }




  export type PlayerSeasonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerSeasonWhereInput
    orderBy?: PlayerSeasonOrderByWithAggregationInput | PlayerSeasonOrderByWithAggregationInput[]
    by: PlayerSeasonScalarFieldEnum[] | PlayerSeasonScalarFieldEnum
    having?: PlayerSeasonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerSeasonCountAggregateInputType | true
    _avg?: PlayerSeasonAvgAggregateInputType
    _sum?: PlayerSeasonSumAggregateInputType
    _min?: PlayerSeasonMinAggregateInputType
    _max?: PlayerSeasonMaxAggregateInputType
  }

  export type PlayerSeasonGroupByOutputType = {
    player_id: string
    player_name: string
    season: number
    games_played: number
    position: string | null
    completions_total: number | null
    attempts_total: number | null
    passing_yards_total: number | null
    passing_tds_total: number | null
    interceptions_total: number | null
    passing_first_downs_total: number | null
    carries_total: number | null
    rushing_yards_total: number | null
    rushing_tds_total: number | null
    rushing_fumbles_total: number | null
    rushing_fumbles_lost_total: number | null
    rushing_first_downs_total: number | null
    targets_total: number | null
    receiving_yards_total: number | null
    receiving_tds_total: number | null
    receiving_air_yards_total: number | null
    receiving_yards_after_catch_total: number | null
    receiving_first_downs_total: number | null
    fantasy_points_total: number | null
    completions_avg: number | null
    attempts_avg: number | null
    passing_yards_avg: number | null
    passing_tds_avg: number | null
    interceptions_avg: number | null
    passing_air_yards_avg: number | null
    passing_yards_after_catch_avg: number | null
    passing_first_downs_avg: number | null
    carries_avg: number | null
    rushing_yards_avg: number | null
    rushing_tds_avg: number | null
    rushing_fumbles_avg: number | null
    rushing_fumbles_lost_avg: number | null
    rushing_first_downs_avg: number | null
    rushing_epa_avg: number | null
    receptions_avg: number | null
    targets_avg: number | null
    receiving_yards_avg: number | null
    receiving_tds_avg: number | null
    receiving_air_yards_avg: number | null
    receiving_yards_after_catch_avg: number | null
    receiving_first_downs_avg: number | null
    receiving_epa_avg: number | null
    racr_avg: number | null
    target_share_avg: number | null
    air_yards_share_avg: number | null
    wopr_avg: number | null
    fantasy_points_avg: number | null
    fantasy_points_ppr_avg: number | null
    YPRR: number | null
    routes: number | null
    routes_per_game: number | null
    TPRR: number | null
    firstDPRR: number | null
    _count: PlayerSeasonCountAggregateOutputType | null
    _avg: PlayerSeasonAvgAggregateOutputType | null
    _sum: PlayerSeasonSumAggregateOutputType | null
    _min: PlayerSeasonMinAggregateOutputType | null
    _max: PlayerSeasonMaxAggregateOutputType | null
  }

  type GetPlayerSeasonGroupByPayload<T extends PlayerSeasonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerSeasonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerSeasonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerSeasonGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerSeasonGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSeasonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    player_name?: boolean
    season?: boolean
    games_played?: boolean
    position?: boolean
    completions_total?: boolean
    attempts_total?: boolean
    passing_yards_total?: boolean
    passing_tds_total?: boolean
    interceptions_total?: boolean
    passing_first_downs_total?: boolean
    carries_total?: boolean
    rushing_yards_total?: boolean
    rushing_tds_total?: boolean
    rushing_fumbles_total?: boolean
    rushing_fumbles_lost_total?: boolean
    rushing_first_downs_total?: boolean
    targets_total?: boolean
    receiving_yards_total?: boolean
    receiving_tds_total?: boolean
    receiving_air_yards_total?: boolean
    receiving_yards_after_catch_total?: boolean
    receiving_first_downs_total?: boolean
    fantasy_points_total?: boolean
    completions_avg?: boolean
    attempts_avg?: boolean
    passing_yards_avg?: boolean
    passing_tds_avg?: boolean
    interceptions_avg?: boolean
    passing_air_yards_avg?: boolean
    passing_yards_after_catch_avg?: boolean
    passing_first_downs_avg?: boolean
    carries_avg?: boolean
    rushing_yards_avg?: boolean
    rushing_tds_avg?: boolean
    rushing_fumbles_avg?: boolean
    rushing_fumbles_lost_avg?: boolean
    rushing_first_downs_avg?: boolean
    rushing_epa_avg?: boolean
    receptions_avg?: boolean
    targets_avg?: boolean
    receiving_yards_avg?: boolean
    receiving_tds_avg?: boolean
    receiving_air_yards_avg?: boolean
    receiving_yards_after_catch_avg?: boolean
    receiving_first_downs_avg?: boolean
    receiving_epa_avg?: boolean
    racr_avg?: boolean
    target_share_avg?: boolean
    air_yards_share_avg?: boolean
    wopr_avg?: boolean
    fantasy_points_avg?: boolean
    fantasy_points_ppr_avg?: boolean
    YPRR?: boolean
    routes?: boolean
    routes_per_game?: boolean
    TPRR?: boolean
    firstDPRR?: boolean
  }, ExtArgs["result"]["playerSeason"]>

  export type PlayerSeasonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    player_name?: boolean
    season?: boolean
    games_played?: boolean
    position?: boolean
    completions_total?: boolean
    attempts_total?: boolean
    passing_yards_total?: boolean
    passing_tds_total?: boolean
    interceptions_total?: boolean
    passing_first_downs_total?: boolean
    carries_total?: boolean
    rushing_yards_total?: boolean
    rushing_tds_total?: boolean
    rushing_fumbles_total?: boolean
    rushing_fumbles_lost_total?: boolean
    rushing_first_downs_total?: boolean
    targets_total?: boolean
    receiving_yards_total?: boolean
    receiving_tds_total?: boolean
    receiving_air_yards_total?: boolean
    receiving_yards_after_catch_total?: boolean
    receiving_first_downs_total?: boolean
    fantasy_points_total?: boolean
    completions_avg?: boolean
    attempts_avg?: boolean
    passing_yards_avg?: boolean
    passing_tds_avg?: boolean
    interceptions_avg?: boolean
    passing_air_yards_avg?: boolean
    passing_yards_after_catch_avg?: boolean
    passing_first_downs_avg?: boolean
    carries_avg?: boolean
    rushing_yards_avg?: boolean
    rushing_tds_avg?: boolean
    rushing_fumbles_avg?: boolean
    rushing_fumbles_lost_avg?: boolean
    rushing_first_downs_avg?: boolean
    rushing_epa_avg?: boolean
    receptions_avg?: boolean
    targets_avg?: boolean
    receiving_yards_avg?: boolean
    receiving_tds_avg?: boolean
    receiving_air_yards_avg?: boolean
    receiving_yards_after_catch_avg?: boolean
    receiving_first_downs_avg?: boolean
    receiving_epa_avg?: boolean
    racr_avg?: boolean
    target_share_avg?: boolean
    air_yards_share_avg?: boolean
    wopr_avg?: boolean
    fantasy_points_avg?: boolean
    fantasy_points_ppr_avg?: boolean
    YPRR?: boolean
    routes?: boolean
    routes_per_game?: boolean
    TPRR?: boolean
    firstDPRR?: boolean
  }, ExtArgs["result"]["playerSeason"]>

  export type PlayerSeasonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    player_name?: boolean
    season?: boolean
    games_played?: boolean
    position?: boolean
    completions_total?: boolean
    attempts_total?: boolean
    passing_yards_total?: boolean
    passing_tds_total?: boolean
    interceptions_total?: boolean
    passing_first_downs_total?: boolean
    carries_total?: boolean
    rushing_yards_total?: boolean
    rushing_tds_total?: boolean
    rushing_fumbles_total?: boolean
    rushing_fumbles_lost_total?: boolean
    rushing_first_downs_total?: boolean
    targets_total?: boolean
    receiving_yards_total?: boolean
    receiving_tds_total?: boolean
    receiving_air_yards_total?: boolean
    receiving_yards_after_catch_total?: boolean
    receiving_first_downs_total?: boolean
    fantasy_points_total?: boolean
    completions_avg?: boolean
    attempts_avg?: boolean
    passing_yards_avg?: boolean
    passing_tds_avg?: boolean
    interceptions_avg?: boolean
    passing_air_yards_avg?: boolean
    passing_yards_after_catch_avg?: boolean
    passing_first_downs_avg?: boolean
    carries_avg?: boolean
    rushing_yards_avg?: boolean
    rushing_tds_avg?: boolean
    rushing_fumbles_avg?: boolean
    rushing_fumbles_lost_avg?: boolean
    rushing_first_downs_avg?: boolean
    rushing_epa_avg?: boolean
    receptions_avg?: boolean
    targets_avg?: boolean
    receiving_yards_avg?: boolean
    receiving_tds_avg?: boolean
    receiving_air_yards_avg?: boolean
    receiving_yards_after_catch_avg?: boolean
    receiving_first_downs_avg?: boolean
    receiving_epa_avg?: boolean
    racr_avg?: boolean
    target_share_avg?: boolean
    air_yards_share_avg?: boolean
    wopr_avg?: boolean
    fantasy_points_avg?: boolean
    fantasy_points_ppr_avg?: boolean
    YPRR?: boolean
    routes?: boolean
    routes_per_game?: boolean
    TPRR?: boolean
    firstDPRR?: boolean
  }, ExtArgs["result"]["playerSeason"]>

  export type PlayerSeasonSelectScalar = {
    player_id?: boolean
    player_name?: boolean
    season?: boolean
    games_played?: boolean
    position?: boolean
    completions_total?: boolean
    attempts_total?: boolean
    passing_yards_total?: boolean
    passing_tds_total?: boolean
    interceptions_total?: boolean
    passing_first_downs_total?: boolean
    carries_total?: boolean
    rushing_yards_total?: boolean
    rushing_tds_total?: boolean
    rushing_fumbles_total?: boolean
    rushing_fumbles_lost_total?: boolean
    rushing_first_downs_total?: boolean
    targets_total?: boolean
    receiving_yards_total?: boolean
    receiving_tds_total?: boolean
    receiving_air_yards_total?: boolean
    receiving_yards_after_catch_total?: boolean
    receiving_first_downs_total?: boolean
    fantasy_points_total?: boolean
    completions_avg?: boolean
    attempts_avg?: boolean
    passing_yards_avg?: boolean
    passing_tds_avg?: boolean
    interceptions_avg?: boolean
    passing_air_yards_avg?: boolean
    passing_yards_after_catch_avg?: boolean
    passing_first_downs_avg?: boolean
    carries_avg?: boolean
    rushing_yards_avg?: boolean
    rushing_tds_avg?: boolean
    rushing_fumbles_avg?: boolean
    rushing_fumbles_lost_avg?: boolean
    rushing_first_downs_avg?: boolean
    rushing_epa_avg?: boolean
    receptions_avg?: boolean
    targets_avg?: boolean
    receiving_yards_avg?: boolean
    receiving_tds_avg?: boolean
    receiving_air_yards_avg?: boolean
    receiving_yards_after_catch_avg?: boolean
    receiving_first_downs_avg?: boolean
    receiving_epa_avg?: boolean
    racr_avg?: boolean
    target_share_avg?: boolean
    air_yards_share_avg?: boolean
    wopr_avg?: boolean
    fantasy_points_avg?: boolean
    fantasy_points_ppr_avg?: boolean
    YPRR?: boolean
    routes?: boolean
    routes_per_game?: boolean
    TPRR?: boolean
    firstDPRR?: boolean
  }

  export type PlayerSeasonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"player_id" | "player_name" | "season" | "games_played" | "position" | "completions_total" | "attempts_total" | "passing_yards_total" | "passing_tds_total" | "interceptions_total" | "passing_first_downs_total" | "carries_total" | "rushing_yards_total" | "rushing_tds_total" | "rushing_fumbles_total" | "rushing_fumbles_lost_total" | "rushing_first_downs_total" | "targets_total" | "receiving_yards_total" | "receiving_tds_total" | "receiving_air_yards_total" | "receiving_yards_after_catch_total" | "receiving_first_downs_total" | "fantasy_points_total" | "completions_avg" | "attempts_avg" | "passing_yards_avg" | "passing_tds_avg" | "interceptions_avg" | "passing_air_yards_avg" | "passing_yards_after_catch_avg" | "passing_first_downs_avg" | "carries_avg" | "rushing_yards_avg" | "rushing_tds_avg" | "rushing_fumbles_avg" | "rushing_fumbles_lost_avg" | "rushing_first_downs_avg" | "rushing_epa_avg" | "receptions_avg" | "targets_avg" | "receiving_yards_avg" | "receiving_tds_avg" | "receiving_air_yards_avg" | "receiving_yards_after_catch_avg" | "receiving_first_downs_avg" | "receiving_epa_avg" | "racr_avg" | "target_share_avg" | "air_yards_share_avg" | "wopr_avg" | "fantasy_points_avg" | "fantasy_points_ppr_avg" | "YPRR" | "routes" | "routes_per_game" | "TPRR" | "firstDPRR", ExtArgs["result"]["playerSeason"]>

  export type $PlayerSeasonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerSeason"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      player_id: string
      player_name: string
      season: number
      games_played: number
      position: string | null
      completions_total: number | null
      attempts_total: number | null
      passing_yards_total: number | null
      passing_tds_total: number | null
      interceptions_total: number | null
      passing_first_downs_total: number | null
      carries_total: number | null
      rushing_yards_total: number | null
      rushing_tds_total: number | null
      rushing_fumbles_total: number | null
      rushing_fumbles_lost_total: number | null
      rushing_first_downs_total: number | null
      targets_total: number | null
      receiving_yards_total: number | null
      receiving_tds_total: number | null
      receiving_air_yards_total: number | null
      receiving_yards_after_catch_total: number | null
      receiving_first_downs_total: number | null
      fantasy_points_total: number | null
      completions_avg: number | null
      attempts_avg: number | null
      passing_yards_avg: number | null
      passing_tds_avg: number | null
      interceptions_avg: number | null
      passing_air_yards_avg: number | null
      passing_yards_after_catch_avg: number | null
      passing_first_downs_avg: number | null
      carries_avg: number | null
      rushing_yards_avg: number | null
      rushing_tds_avg: number | null
      rushing_fumbles_avg: number | null
      rushing_fumbles_lost_avg: number | null
      rushing_first_downs_avg: number | null
      rushing_epa_avg: number | null
      receptions_avg: number | null
      targets_avg: number | null
      receiving_yards_avg: number | null
      receiving_tds_avg: number | null
      receiving_air_yards_avg: number | null
      receiving_yards_after_catch_avg: number | null
      receiving_first_downs_avg: number | null
      receiving_epa_avg: number | null
      racr_avg: number | null
      target_share_avg: number | null
      air_yards_share_avg: number | null
      wopr_avg: number | null
      fantasy_points_avg: number | null
      fantasy_points_ppr_avg: number | null
      YPRR: number | null
      routes: number | null
      routes_per_game: number | null
      TPRR: number | null
      firstDPRR: number | null
    }, ExtArgs["result"]["playerSeason"]>
    composites: {}
  }

  type PlayerSeasonGetPayload<S extends boolean | null | undefined | PlayerSeasonDefaultArgs> = $Result.GetResult<Prisma.$PlayerSeasonPayload, S>

  type PlayerSeasonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerSeasonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerSeasonCountAggregateInputType | true
    }

  export interface PlayerSeasonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerSeason'], meta: { name: 'PlayerSeason' } }
    /**
     * Find zero or one PlayerSeason that matches the filter.
     * @param {PlayerSeasonFindUniqueArgs} args - Arguments to find a PlayerSeason
     * @example
     * // Get one PlayerSeason
     * const playerSeason = await prisma.playerSeason.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerSeasonFindUniqueArgs>(args: SelectSubset<T, PlayerSeasonFindUniqueArgs<ExtArgs>>): Prisma__PlayerSeasonClient<$Result.GetResult<Prisma.$PlayerSeasonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerSeason that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerSeasonFindUniqueOrThrowArgs} args - Arguments to find a PlayerSeason
     * @example
     * // Get one PlayerSeason
     * const playerSeason = await prisma.playerSeason.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerSeasonFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerSeasonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerSeasonClient<$Result.GetResult<Prisma.$PlayerSeasonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerSeason that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSeasonFindFirstArgs} args - Arguments to find a PlayerSeason
     * @example
     * // Get one PlayerSeason
     * const playerSeason = await prisma.playerSeason.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerSeasonFindFirstArgs>(args?: SelectSubset<T, PlayerSeasonFindFirstArgs<ExtArgs>>): Prisma__PlayerSeasonClient<$Result.GetResult<Prisma.$PlayerSeasonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerSeason that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSeasonFindFirstOrThrowArgs} args - Arguments to find a PlayerSeason
     * @example
     * // Get one PlayerSeason
     * const playerSeason = await prisma.playerSeason.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerSeasonFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerSeasonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerSeasonClient<$Result.GetResult<Prisma.$PlayerSeasonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerSeasons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSeasonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerSeasons
     * const playerSeasons = await prisma.playerSeason.findMany()
     * 
     * // Get first 10 PlayerSeasons
     * const playerSeasons = await prisma.playerSeason.findMany({ take: 10 })
     * 
     * // Only select the `player_id`
     * const playerSeasonWithPlayer_idOnly = await prisma.playerSeason.findMany({ select: { player_id: true } })
     * 
     */
    findMany<T extends PlayerSeasonFindManyArgs>(args?: SelectSubset<T, PlayerSeasonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerSeasonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerSeason.
     * @param {PlayerSeasonCreateArgs} args - Arguments to create a PlayerSeason.
     * @example
     * // Create one PlayerSeason
     * const PlayerSeason = await prisma.playerSeason.create({
     *   data: {
     *     // ... data to create a PlayerSeason
     *   }
     * })
     * 
     */
    create<T extends PlayerSeasonCreateArgs>(args: SelectSubset<T, PlayerSeasonCreateArgs<ExtArgs>>): Prisma__PlayerSeasonClient<$Result.GetResult<Prisma.$PlayerSeasonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerSeasons.
     * @param {PlayerSeasonCreateManyArgs} args - Arguments to create many PlayerSeasons.
     * @example
     * // Create many PlayerSeasons
     * const playerSeason = await prisma.playerSeason.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerSeasonCreateManyArgs>(args?: SelectSubset<T, PlayerSeasonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerSeasons and returns the data saved in the database.
     * @param {PlayerSeasonCreateManyAndReturnArgs} args - Arguments to create many PlayerSeasons.
     * @example
     * // Create many PlayerSeasons
     * const playerSeason = await prisma.playerSeason.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerSeasons and only return the `player_id`
     * const playerSeasonWithPlayer_idOnly = await prisma.playerSeason.createManyAndReturn({
     *   select: { player_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerSeasonCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerSeasonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerSeasonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerSeason.
     * @param {PlayerSeasonDeleteArgs} args - Arguments to delete one PlayerSeason.
     * @example
     * // Delete one PlayerSeason
     * const PlayerSeason = await prisma.playerSeason.delete({
     *   where: {
     *     // ... filter to delete one PlayerSeason
     *   }
     * })
     * 
     */
    delete<T extends PlayerSeasonDeleteArgs>(args: SelectSubset<T, PlayerSeasonDeleteArgs<ExtArgs>>): Prisma__PlayerSeasonClient<$Result.GetResult<Prisma.$PlayerSeasonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerSeason.
     * @param {PlayerSeasonUpdateArgs} args - Arguments to update one PlayerSeason.
     * @example
     * // Update one PlayerSeason
     * const playerSeason = await prisma.playerSeason.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerSeasonUpdateArgs>(args: SelectSubset<T, PlayerSeasonUpdateArgs<ExtArgs>>): Prisma__PlayerSeasonClient<$Result.GetResult<Prisma.$PlayerSeasonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerSeasons.
     * @param {PlayerSeasonDeleteManyArgs} args - Arguments to filter PlayerSeasons to delete.
     * @example
     * // Delete a few PlayerSeasons
     * const { count } = await prisma.playerSeason.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerSeasonDeleteManyArgs>(args?: SelectSubset<T, PlayerSeasonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerSeasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSeasonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerSeasons
     * const playerSeason = await prisma.playerSeason.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerSeasonUpdateManyArgs>(args: SelectSubset<T, PlayerSeasonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerSeasons and returns the data updated in the database.
     * @param {PlayerSeasonUpdateManyAndReturnArgs} args - Arguments to update many PlayerSeasons.
     * @example
     * // Update many PlayerSeasons
     * const playerSeason = await prisma.playerSeason.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerSeasons and only return the `player_id`
     * const playerSeasonWithPlayer_idOnly = await prisma.playerSeason.updateManyAndReturn({
     *   select: { player_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerSeasonUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerSeasonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerSeasonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerSeason.
     * @param {PlayerSeasonUpsertArgs} args - Arguments to update or create a PlayerSeason.
     * @example
     * // Update or create a PlayerSeason
     * const playerSeason = await prisma.playerSeason.upsert({
     *   create: {
     *     // ... data to create a PlayerSeason
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerSeason we want to update
     *   }
     * })
     */
    upsert<T extends PlayerSeasonUpsertArgs>(args: SelectSubset<T, PlayerSeasonUpsertArgs<ExtArgs>>): Prisma__PlayerSeasonClient<$Result.GetResult<Prisma.$PlayerSeasonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerSeasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSeasonCountArgs} args - Arguments to filter PlayerSeasons to count.
     * @example
     * // Count the number of PlayerSeasons
     * const count = await prisma.playerSeason.count({
     *   where: {
     *     // ... the filter for the PlayerSeasons we want to count
     *   }
     * })
    **/
    count<T extends PlayerSeasonCountArgs>(
      args?: Subset<T, PlayerSeasonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerSeasonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerSeason.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSeasonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerSeasonAggregateArgs>(args: Subset<T, PlayerSeasonAggregateArgs>): Prisma.PrismaPromise<GetPlayerSeasonAggregateType<T>>

    /**
     * Group by PlayerSeason.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSeasonGroupByArgs} args - Group by arguments.
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
      T extends PlayerSeasonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerSeasonGroupByArgs['orderBy'] }
        : { orderBy?: PlayerSeasonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayerSeasonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerSeasonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerSeason model
   */
  readonly fields: PlayerSeasonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerSeason.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerSeasonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PlayerSeason model
   */
  interface PlayerSeasonFieldRefs {
    readonly player_id: FieldRef<"PlayerSeason", 'String'>
    readonly player_name: FieldRef<"PlayerSeason", 'String'>
    readonly season: FieldRef<"PlayerSeason", 'Int'>
    readonly games_played: FieldRef<"PlayerSeason", 'Int'>
    readonly position: FieldRef<"PlayerSeason", 'String'>
    readonly completions_total: FieldRef<"PlayerSeason", 'Float'>
    readonly attempts_total: FieldRef<"PlayerSeason", 'Float'>
    readonly passing_yards_total: FieldRef<"PlayerSeason", 'Float'>
    readonly passing_tds_total: FieldRef<"PlayerSeason", 'Float'>
    readonly interceptions_total: FieldRef<"PlayerSeason", 'Float'>
    readonly passing_first_downs_total: FieldRef<"PlayerSeason", 'Float'>
    readonly carries_total: FieldRef<"PlayerSeason", 'Float'>
    readonly rushing_yards_total: FieldRef<"PlayerSeason", 'Float'>
    readonly rushing_tds_total: FieldRef<"PlayerSeason", 'Float'>
    readonly rushing_fumbles_total: FieldRef<"PlayerSeason", 'Float'>
    readonly rushing_fumbles_lost_total: FieldRef<"PlayerSeason", 'Float'>
    readonly rushing_first_downs_total: FieldRef<"PlayerSeason", 'Float'>
    readonly targets_total: FieldRef<"PlayerSeason", 'Float'>
    readonly receiving_yards_total: FieldRef<"PlayerSeason", 'Float'>
    readonly receiving_tds_total: FieldRef<"PlayerSeason", 'Float'>
    readonly receiving_air_yards_total: FieldRef<"PlayerSeason", 'Float'>
    readonly receiving_yards_after_catch_total: FieldRef<"PlayerSeason", 'Float'>
    readonly receiving_first_downs_total: FieldRef<"PlayerSeason", 'Float'>
    readonly fantasy_points_total: FieldRef<"PlayerSeason", 'Float'>
    readonly completions_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly attempts_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly passing_yards_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly passing_tds_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly interceptions_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly passing_air_yards_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly passing_yards_after_catch_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly passing_first_downs_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly carries_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly rushing_yards_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly rushing_tds_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly rushing_fumbles_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly rushing_fumbles_lost_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly rushing_first_downs_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly rushing_epa_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly receptions_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly targets_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly receiving_yards_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly receiving_tds_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly receiving_air_yards_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly receiving_yards_after_catch_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly receiving_first_downs_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly receiving_epa_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly racr_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly target_share_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly air_yards_share_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly wopr_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly fantasy_points_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly fantasy_points_ppr_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly YPRR: FieldRef<"PlayerSeason", 'Float'>
    readonly routes: FieldRef<"PlayerSeason", 'Float'>
    readonly routes_per_game: FieldRef<"PlayerSeason", 'Float'>
    readonly TPRR: FieldRef<"PlayerSeason", 'Float'>
    readonly firstDPRR: FieldRef<"PlayerSeason", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * PlayerSeason findUnique
   */
  export type PlayerSeasonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSeason
     */
    select?: PlayerSeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSeason
     */
    omit?: PlayerSeasonOmit<ExtArgs> | null
    /**
     * Filter, which PlayerSeason to fetch.
     */
    where: PlayerSeasonWhereUniqueInput
  }

  /**
   * PlayerSeason findUniqueOrThrow
   */
  export type PlayerSeasonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSeason
     */
    select?: PlayerSeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSeason
     */
    omit?: PlayerSeasonOmit<ExtArgs> | null
    /**
     * Filter, which PlayerSeason to fetch.
     */
    where: PlayerSeasonWhereUniqueInput
  }

  /**
   * PlayerSeason findFirst
   */
  export type PlayerSeasonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSeason
     */
    select?: PlayerSeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSeason
     */
    omit?: PlayerSeasonOmit<ExtArgs> | null
    /**
     * Filter, which PlayerSeason to fetch.
     */
    where?: PlayerSeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSeasons to fetch.
     */
    orderBy?: PlayerSeasonOrderByWithRelationInput | PlayerSeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerSeasons.
     */
    cursor?: PlayerSeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSeasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSeasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerSeasons.
     */
    distinct?: PlayerSeasonScalarFieldEnum | PlayerSeasonScalarFieldEnum[]
  }

  /**
   * PlayerSeason findFirstOrThrow
   */
  export type PlayerSeasonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSeason
     */
    select?: PlayerSeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSeason
     */
    omit?: PlayerSeasonOmit<ExtArgs> | null
    /**
     * Filter, which PlayerSeason to fetch.
     */
    where?: PlayerSeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSeasons to fetch.
     */
    orderBy?: PlayerSeasonOrderByWithRelationInput | PlayerSeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerSeasons.
     */
    cursor?: PlayerSeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSeasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSeasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerSeasons.
     */
    distinct?: PlayerSeasonScalarFieldEnum | PlayerSeasonScalarFieldEnum[]
  }

  /**
   * PlayerSeason findMany
   */
  export type PlayerSeasonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSeason
     */
    select?: PlayerSeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSeason
     */
    omit?: PlayerSeasonOmit<ExtArgs> | null
    /**
     * Filter, which PlayerSeasons to fetch.
     */
    where?: PlayerSeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSeasons to fetch.
     */
    orderBy?: PlayerSeasonOrderByWithRelationInput | PlayerSeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerSeasons.
     */
    cursor?: PlayerSeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSeasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSeasons.
     */
    skip?: number
    distinct?: PlayerSeasonScalarFieldEnum | PlayerSeasonScalarFieldEnum[]
  }

  /**
   * PlayerSeason create
   */
  export type PlayerSeasonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSeason
     */
    select?: PlayerSeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSeason
     */
    omit?: PlayerSeasonOmit<ExtArgs> | null
    /**
     * The data needed to create a PlayerSeason.
     */
    data: XOR<PlayerSeasonCreateInput, PlayerSeasonUncheckedCreateInput>
  }

  /**
   * PlayerSeason createMany
   */
  export type PlayerSeasonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerSeasons.
     */
    data: PlayerSeasonCreateManyInput | PlayerSeasonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerSeason createManyAndReturn
   */
  export type PlayerSeasonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSeason
     */
    select?: PlayerSeasonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSeason
     */
    omit?: PlayerSeasonOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerSeasons.
     */
    data: PlayerSeasonCreateManyInput | PlayerSeasonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerSeason update
   */
  export type PlayerSeasonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSeason
     */
    select?: PlayerSeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSeason
     */
    omit?: PlayerSeasonOmit<ExtArgs> | null
    /**
     * The data needed to update a PlayerSeason.
     */
    data: XOR<PlayerSeasonUpdateInput, PlayerSeasonUncheckedUpdateInput>
    /**
     * Choose, which PlayerSeason to update.
     */
    where: PlayerSeasonWhereUniqueInput
  }

  /**
   * PlayerSeason updateMany
   */
  export type PlayerSeasonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerSeasons.
     */
    data: XOR<PlayerSeasonUpdateManyMutationInput, PlayerSeasonUncheckedUpdateManyInput>
    /**
     * Filter which PlayerSeasons to update
     */
    where?: PlayerSeasonWhereInput
    /**
     * Limit how many PlayerSeasons to update.
     */
    limit?: number
  }

  /**
   * PlayerSeason updateManyAndReturn
   */
  export type PlayerSeasonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSeason
     */
    select?: PlayerSeasonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSeason
     */
    omit?: PlayerSeasonOmit<ExtArgs> | null
    /**
     * The data used to update PlayerSeasons.
     */
    data: XOR<PlayerSeasonUpdateManyMutationInput, PlayerSeasonUncheckedUpdateManyInput>
    /**
     * Filter which PlayerSeasons to update
     */
    where?: PlayerSeasonWhereInput
    /**
     * Limit how many PlayerSeasons to update.
     */
    limit?: number
  }

  /**
   * PlayerSeason upsert
   */
  export type PlayerSeasonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSeason
     */
    select?: PlayerSeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSeason
     */
    omit?: PlayerSeasonOmit<ExtArgs> | null
    /**
     * The filter to search for the PlayerSeason to update in case it exists.
     */
    where: PlayerSeasonWhereUniqueInput
    /**
     * In case the PlayerSeason found by the `where` argument doesn't exist, create a new PlayerSeason with this data.
     */
    create: XOR<PlayerSeasonCreateInput, PlayerSeasonUncheckedCreateInput>
    /**
     * In case the PlayerSeason was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerSeasonUpdateInput, PlayerSeasonUncheckedUpdateInput>
  }

  /**
   * PlayerSeason delete
   */
  export type PlayerSeasonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSeason
     */
    select?: PlayerSeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSeason
     */
    omit?: PlayerSeasonOmit<ExtArgs> | null
    /**
     * Filter which PlayerSeason to delete.
     */
    where: PlayerSeasonWhereUniqueInput
  }

  /**
   * PlayerSeason deleteMany
   */
  export type PlayerSeasonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerSeasons to delete
     */
    where?: PlayerSeasonWhereInput
    /**
     * Limit how many PlayerSeasons to delete.
     */
    limit?: number
  }

  /**
   * PlayerSeason without action
   */
  export type PlayerSeasonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSeason
     */
    select?: PlayerSeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSeason
     */
    omit?: PlayerSeasonOmit<ExtArgs> | null
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


  export const TradeAnalyzerDataScalarFieldEnum: {
    id: 'id',
    name: 'name',
    position: 'position',
    team: 'team',
    marketValue: 'marketValue',
    myValue: 'myValue',
    valueDiffBetweenMyValueAndMarketValue: 'valueDiffBetweenMyValueAndMarketValue',
    PRPScore: 'PRPScore',
    projectedNextOffseasonDynastyValue: 'projectedNextOffseasonDynastyValue',
    valueDifferenceBetweenCurrentMarketValueAndPNODV: 'valueDifferenceBetweenCurrentMarketValueAndPNODV',
    PNODVScore: 'PNODVScore',
    RVSScore: 'RVSScore',
    jaxValue: 'jaxValue',
    travValue: 'travValue',
    joeValue: 'joeValue',
    consensusValue: 'consensusValue'
  };

  export type TradeAnalyzerDataScalarFieldEnum = (typeof TradeAnalyzerDataScalarFieldEnum)[keyof typeof TradeAnalyzerDataScalarFieldEnum]


  export const PlayerStatScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    playerName: 'playerName',
    playerDisplayName: 'playerDisplayName',
    position: 'position',
    positionGroup: 'positionGroup',
    headshotUrl: 'headshotUrl',
    recentTeam: 'recentTeam',
    season: 'season',
    week: 'week',
    seasonType: 'seasonType',
    opponentTeam: 'opponentTeam',
    completions: 'completions',
    attempts: 'attempts',
    passingYards: 'passingYards',
    passingTds: 'passingTds',
    interceptions: 'interceptions',
    sacks: 'sacks',
    sackYards: 'sackYards',
    sackFumbles: 'sackFumbles',
    sackFumblesLost: 'sackFumblesLost',
    passingAirYards: 'passingAirYards',
    passingYardsAfterCatch: 'passingYardsAfterCatch',
    passingFirstDowns: 'passingFirstDowns',
    passingEpa: 'passingEpa',
    passing2ptConversions: 'passing2ptConversions',
    pacr: 'pacr',
    dakota: 'dakota',
    carries: 'carries',
    rushingYards: 'rushingYards',
    rushingTds: 'rushingTds',
    rushingFumbles: 'rushingFumbles',
    rushingFumblesLost: 'rushingFumblesLost',
    rushingFirstDowns: 'rushingFirstDowns',
    rushingEpa: 'rushingEpa',
    rushing2ptConversions: 'rushing2ptConversions',
    receptions: 'receptions',
    targets: 'targets',
    receivingYards: 'receivingYards',
    receivingTds: 'receivingTds',
    receivingFumbles: 'receivingFumbles',
    receivingFumblesLost: 'receivingFumblesLost',
    receivingAirYards: 'receivingAirYards',
    receivingYardsAfterCatch: 'receivingYardsAfterCatch',
    receivingFirstDowns: 'receivingFirstDowns',
    receivingEpa: 'receivingEpa',
    receiving2ptConversions: 'receiving2ptConversions',
    racr: 'racr',
    targetShare: 'targetShare',
    airYardsShare: 'airYardsShare',
    wopr: 'wopr',
    specialTeamsTds: 'specialTeamsTds',
    fantasyPoints: 'fantasyPoints',
    fantasyPointsPpr: 'fantasyPointsPpr'
  };

  export type PlayerStatScalarFieldEnum = (typeof PlayerStatScalarFieldEnum)[keyof typeof PlayerStatScalarFieldEnum]


  export const ReceivingStatScalarFieldEnum: {
    id: 'id',
    player: 'player',
    playerId: 'playerId',
    position: 'position',
    teamName: 'teamName',
    playerGameCount: 'playerGameCount',
    avgDepthOfTarget: 'avgDepthOfTarget',
    avoidedTackles: 'avoidedTackles',
    caughtPercent: 'caughtPercent',
    contestedCatchRate: 'contestedCatchRate',
    contestedReceptions: 'contestedReceptions',
    contestedTargets: 'contestedTargets',
    declinedPenalties: 'declinedPenalties',
    dropRate: 'dropRate',
    drops: 'drops',
    firstDowns: 'firstDowns',
    franchiseId: 'franchiseId',
    fumbles: 'fumbles',
    gradesHandsDrop: 'gradesHandsDrop',
    gradesHandsFumble: 'gradesHandsFumble',
    gradesOffense: 'gradesOffense',
    gradesPassBlock: 'gradesPassBlock',
    gradesPassRoute: 'gradesPassRoute',
    inlineRate: 'inlineRate',
    inlineSnaps: 'inlineSnaps',
    interceptions: 'interceptions',
    longest: 'longest',
    passBlockRate: 'passBlockRate',
    passBlocks: 'passBlocks',
    passPlays: 'passPlays',
    penalties: 'penalties',
    receptions: 'receptions',
    routeRate: 'routeRate',
    routes: 'routes',
    slotRate: 'slotRate',
    slotSnaps: 'slotSnaps',
    targetedQbRating: 'targetedQbRating',
    targets: 'targets',
    touchdowns: 'touchdowns',
    wideRate: 'wideRate',
    wideSnaps: 'wideSnaps',
    yards: 'yards',
    yardsAfterCatch: 'yardsAfterCatch',
    yardsAfterCatchPerReception: 'yardsAfterCatchPerReception',
    yardsPerReception: 'yardsPerReception',
    yprr: 'yprr'
  };

  export type ReceivingStatScalarFieldEnum = (typeof ReceivingStatScalarFieldEnum)[keyof typeof ReceivingStatScalarFieldEnum]


  export const PlayerSeasonScalarFieldEnum: {
    player_id: 'player_id',
    player_name: 'player_name',
    season: 'season',
    games_played: 'games_played',
    position: 'position',
    completions_total: 'completions_total',
    attempts_total: 'attempts_total',
    passing_yards_total: 'passing_yards_total',
    passing_tds_total: 'passing_tds_total',
    interceptions_total: 'interceptions_total',
    passing_first_downs_total: 'passing_first_downs_total',
    carries_total: 'carries_total',
    rushing_yards_total: 'rushing_yards_total',
    rushing_tds_total: 'rushing_tds_total',
    rushing_fumbles_total: 'rushing_fumbles_total',
    rushing_fumbles_lost_total: 'rushing_fumbles_lost_total',
    rushing_first_downs_total: 'rushing_first_downs_total',
    targets_total: 'targets_total',
    receiving_yards_total: 'receiving_yards_total',
    receiving_tds_total: 'receiving_tds_total',
    receiving_air_yards_total: 'receiving_air_yards_total',
    receiving_yards_after_catch_total: 'receiving_yards_after_catch_total',
    receiving_first_downs_total: 'receiving_first_downs_total',
    fantasy_points_total: 'fantasy_points_total',
    completions_avg: 'completions_avg',
    attempts_avg: 'attempts_avg',
    passing_yards_avg: 'passing_yards_avg',
    passing_tds_avg: 'passing_tds_avg',
    interceptions_avg: 'interceptions_avg',
    passing_air_yards_avg: 'passing_air_yards_avg',
    passing_yards_after_catch_avg: 'passing_yards_after_catch_avg',
    passing_first_downs_avg: 'passing_first_downs_avg',
    carries_avg: 'carries_avg',
    rushing_yards_avg: 'rushing_yards_avg',
    rushing_tds_avg: 'rushing_tds_avg',
    rushing_fumbles_avg: 'rushing_fumbles_avg',
    rushing_fumbles_lost_avg: 'rushing_fumbles_lost_avg',
    rushing_first_downs_avg: 'rushing_first_downs_avg',
    rushing_epa_avg: 'rushing_epa_avg',
    receptions_avg: 'receptions_avg',
    targets_avg: 'targets_avg',
    receiving_yards_avg: 'receiving_yards_avg',
    receiving_tds_avg: 'receiving_tds_avg',
    receiving_air_yards_avg: 'receiving_air_yards_avg',
    receiving_yards_after_catch_avg: 'receiving_yards_after_catch_avg',
    receiving_first_downs_avg: 'receiving_first_downs_avg',
    receiving_epa_avg: 'receiving_epa_avg',
    racr_avg: 'racr_avg',
    target_share_avg: 'target_share_avg',
    air_yards_share_avg: 'air_yards_share_avg',
    wopr_avg: 'wopr_avg',
    fantasy_points_avg: 'fantasy_points_avg',
    fantasy_points_ppr_avg: 'fantasy_points_ppr_avg',
    YPRR: 'YPRR',
    routes: 'routes',
    routes_per_game: 'routes_per_game',
    TPRR: 'TPRR',
    firstDPRR: 'firstDPRR'
  };

  export type PlayerSeasonScalarFieldEnum = (typeof PlayerSeasonScalarFieldEnum)[keyof typeof PlayerSeasonScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type tradeAnalyzerDataWhereInput = {
    AND?: tradeAnalyzerDataWhereInput | tradeAnalyzerDataWhereInput[]
    OR?: tradeAnalyzerDataWhereInput[]
    NOT?: tradeAnalyzerDataWhereInput | tradeAnalyzerDataWhereInput[]
    id?: StringFilter<"tradeAnalyzerData"> | string
    name?: StringNullableFilter<"tradeAnalyzerData"> | string | null
    position?: StringNullableFilter<"tradeAnalyzerData"> | string | null
    team?: StringNullableFilter<"tradeAnalyzerData"> | string | null
    marketValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    myValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    valueDiffBetweenMyValueAndMarketValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    PRPScore?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    projectedNextOffseasonDynastyValue?: JsonNullableFilter<"tradeAnalyzerData">
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    PNODVScore?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    RVSScore?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    jaxValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    travValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    joeValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    consensusValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
  }

  export type tradeAnalyzerDataOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    team?: SortOrderInput | SortOrder
    marketValue?: SortOrderInput | SortOrder
    myValue?: SortOrderInput | SortOrder
    valueDiffBetweenMyValueAndMarketValue?: SortOrderInput | SortOrder
    PRPScore?: SortOrderInput | SortOrder
    projectedNextOffseasonDynastyValue?: SortOrderInput | SortOrder
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: SortOrderInput | SortOrder
    PNODVScore?: SortOrderInput | SortOrder
    RVSScore?: SortOrderInput | SortOrder
    jaxValue?: SortOrderInput | SortOrder
    travValue?: SortOrderInput | SortOrder
    joeValue?: SortOrderInput | SortOrder
    consensusValue?: SortOrderInput | SortOrder
  }

  export type tradeAnalyzerDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tradeAnalyzerDataWhereInput | tradeAnalyzerDataWhereInput[]
    OR?: tradeAnalyzerDataWhereInput[]
    NOT?: tradeAnalyzerDataWhereInput | tradeAnalyzerDataWhereInput[]
    name?: StringNullableFilter<"tradeAnalyzerData"> | string | null
    position?: StringNullableFilter<"tradeAnalyzerData"> | string | null
    team?: StringNullableFilter<"tradeAnalyzerData"> | string | null
    marketValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    myValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    valueDiffBetweenMyValueAndMarketValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    PRPScore?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    projectedNextOffseasonDynastyValue?: JsonNullableFilter<"tradeAnalyzerData">
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    PNODVScore?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    RVSScore?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    jaxValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    travValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    joeValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    consensusValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
  }, "id">

  export type tradeAnalyzerDataOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    team?: SortOrderInput | SortOrder
    marketValue?: SortOrderInput | SortOrder
    myValue?: SortOrderInput | SortOrder
    valueDiffBetweenMyValueAndMarketValue?: SortOrderInput | SortOrder
    PRPScore?: SortOrderInput | SortOrder
    projectedNextOffseasonDynastyValue?: SortOrderInput | SortOrder
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: SortOrderInput | SortOrder
    PNODVScore?: SortOrderInput | SortOrder
    RVSScore?: SortOrderInput | SortOrder
    jaxValue?: SortOrderInput | SortOrder
    travValue?: SortOrderInput | SortOrder
    joeValue?: SortOrderInput | SortOrder
    consensusValue?: SortOrderInput | SortOrder
    _count?: tradeAnalyzerDataCountOrderByAggregateInput
    _avg?: tradeAnalyzerDataAvgOrderByAggregateInput
    _max?: tradeAnalyzerDataMaxOrderByAggregateInput
    _min?: tradeAnalyzerDataMinOrderByAggregateInput
    _sum?: tradeAnalyzerDataSumOrderByAggregateInput
  }

  export type tradeAnalyzerDataScalarWhereWithAggregatesInput = {
    AND?: tradeAnalyzerDataScalarWhereWithAggregatesInput | tradeAnalyzerDataScalarWhereWithAggregatesInput[]
    OR?: tradeAnalyzerDataScalarWhereWithAggregatesInput[]
    NOT?: tradeAnalyzerDataScalarWhereWithAggregatesInput | tradeAnalyzerDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tradeAnalyzerData"> | string
    name?: StringNullableWithAggregatesFilter<"tradeAnalyzerData"> | string | null
    position?: StringNullableWithAggregatesFilter<"tradeAnalyzerData"> | string | null
    team?: StringNullableWithAggregatesFilter<"tradeAnalyzerData"> | string | null
    marketValue?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
    myValue?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
    valueDiffBetweenMyValueAndMarketValue?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
    PRPScore?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
    projectedNextOffseasonDynastyValue?: JsonNullableWithAggregatesFilter<"tradeAnalyzerData">
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
    PNODVScore?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
    RVSScore?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
    jaxValue?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
    travValue?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
    joeValue?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
    consensusValue?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
  }

  export type PlayerStatWhereInput = {
    AND?: PlayerStatWhereInput | PlayerStatWhereInput[]
    OR?: PlayerStatWhereInput[]
    NOT?: PlayerStatWhereInput | PlayerStatWhereInput[]
    id?: StringFilter<"PlayerStat"> | string
    playerId?: StringNullableFilter<"PlayerStat"> | string | null
    playerName?: StringNullableFilter<"PlayerStat"> | string | null
    playerDisplayName?: StringNullableFilter<"PlayerStat"> | string | null
    position?: StringNullableFilter<"PlayerStat"> | string | null
    positionGroup?: StringNullableFilter<"PlayerStat"> | string | null
    headshotUrl?: StringNullableFilter<"PlayerStat"> | string | null
    recentTeam?: StringNullableFilter<"PlayerStat"> | string | null
    season?: IntNullableFilter<"PlayerStat"> | number | null
    week?: IntNullableFilter<"PlayerStat"> | number | null
    seasonType?: StringNullableFilter<"PlayerStat"> | string | null
    opponentTeam?: StringNullableFilter<"PlayerStat"> | string | null
    completions?: IntNullableFilter<"PlayerStat"> | number | null
    attempts?: IntNullableFilter<"PlayerStat"> | number | null
    passingYards?: FloatNullableFilter<"PlayerStat"> | number | null
    passingTds?: IntNullableFilter<"PlayerStat"> | number | null
    interceptions?: IntNullableFilter<"PlayerStat"> | number | null
    sacks?: IntNullableFilter<"PlayerStat"> | number | null
    sackYards?: FloatNullableFilter<"PlayerStat"> | number | null
    sackFumbles?: IntNullableFilter<"PlayerStat"> | number | null
    sackFumblesLost?: IntNullableFilter<"PlayerStat"> | number | null
    passingAirYards?: FloatNullableFilter<"PlayerStat"> | number | null
    passingYardsAfterCatch?: FloatNullableFilter<"PlayerStat"> | number | null
    passingFirstDowns?: IntNullableFilter<"PlayerStat"> | number | null
    passingEpa?: FloatNullableFilter<"PlayerStat"> | number | null
    passing2ptConversions?: IntNullableFilter<"PlayerStat"> | number | null
    pacr?: FloatNullableFilter<"PlayerStat"> | number | null
    dakota?: FloatNullableFilter<"PlayerStat"> | number | null
    carries?: IntNullableFilter<"PlayerStat"> | number | null
    rushingYards?: FloatNullableFilter<"PlayerStat"> | number | null
    rushingTds?: IntNullableFilter<"PlayerStat"> | number | null
    rushingFumbles?: IntNullableFilter<"PlayerStat"> | number | null
    rushingFumblesLost?: IntNullableFilter<"PlayerStat"> | number | null
    rushingFirstDowns?: IntNullableFilter<"PlayerStat"> | number | null
    rushingEpa?: FloatNullableFilter<"PlayerStat"> | number | null
    rushing2ptConversions?: IntNullableFilter<"PlayerStat"> | number | null
    receptions?: IntNullableFilter<"PlayerStat"> | number | null
    targets?: IntNullableFilter<"PlayerStat"> | number | null
    receivingYards?: FloatNullableFilter<"PlayerStat"> | number | null
    receivingTds?: IntNullableFilter<"PlayerStat"> | number | null
    receivingFumbles?: IntNullableFilter<"PlayerStat"> | number | null
    receivingFumblesLost?: IntNullableFilter<"PlayerStat"> | number | null
    receivingAirYards?: FloatNullableFilter<"PlayerStat"> | number | null
    receivingYardsAfterCatch?: FloatNullableFilter<"PlayerStat"> | number | null
    receivingFirstDowns?: IntNullableFilter<"PlayerStat"> | number | null
    receivingEpa?: FloatNullableFilter<"PlayerStat"> | number | null
    receiving2ptConversions?: IntNullableFilter<"PlayerStat"> | number | null
    racr?: FloatNullableFilter<"PlayerStat"> | number | null
    targetShare?: FloatNullableFilter<"PlayerStat"> | number | null
    airYardsShare?: FloatNullableFilter<"PlayerStat"> | number | null
    wopr?: FloatNullableFilter<"PlayerStat"> | number | null
    specialTeamsTds?: IntNullableFilter<"PlayerStat"> | number | null
    fantasyPoints?: FloatNullableFilter<"PlayerStat"> | number | null
    fantasyPointsPpr?: FloatNullableFilter<"PlayerStat"> | number | null
  }

  export type PlayerStatOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrderInput | SortOrder
    playerName?: SortOrderInput | SortOrder
    playerDisplayName?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    positionGroup?: SortOrderInput | SortOrder
    headshotUrl?: SortOrderInput | SortOrder
    recentTeam?: SortOrderInput | SortOrder
    season?: SortOrderInput | SortOrder
    week?: SortOrderInput | SortOrder
    seasonType?: SortOrderInput | SortOrder
    opponentTeam?: SortOrderInput | SortOrder
    completions?: SortOrderInput | SortOrder
    attempts?: SortOrderInput | SortOrder
    passingYards?: SortOrderInput | SortOrder
    passingTds?: SortOrderInput | SortOrder
    interceptions?: SortOrderInput | SortOrder
    sacks?: SortOrderInput | SortOrder
    sackYards?: SortOrderInput | SortOrder
    sackFumbles?: SortOrderInput | SortOrder
    sackFumblesLost?: SortOrderInput | SortOrder
    passingAirYards?: SortOrderInput | SortOrder
    passingYardsAfterCatch?: SortOrderInput | SortOrder
    passingFirstDowns?: SortOrderInput | SortOrder
    passingEpa?: SortOrderInput | SortOrder
    passing2ptConversions?: SortOrderInput | SortOrder
    pacr?: SortOrderInput | SortOrder
    dakota?: SortOrderInput | SortOrder
    carries?: SortOrderInput | SortOrder
    rushingYards?: SortOrderInput | SortOrder
    rushingTds?: SortOrderInput | SortOrder
    rushingFumbles?: SortOrderInput | SortOrder
    rushingFumblesLost?: SortOrderInput | SortOrder
    rushingFirstDowns?: SortOrderInput | SortOrder
    rushingEpa?: SortOrderInput | SortOrder
    rushing2ptConversions?: SortOrderInput | SortOrder
    receptions?: SortOrderInput | SortOrder
    targets?: SortOrderInput | SortOrder
    receivingYards?: SortOrderInput | SortOrder
    receivingTds?: SortOrderInput | SortOrder
    receivingFumbles?: SortOrderInput | SortOrder
    receivingFumblesLost?: SortOrderInput | SortOrder
    receivingAirYards?: SortOrderInput | SortOrder
    receivingYardsAfterCatch?: SortOrderInput | SortOrder
    receivingFirstDowns?: SortOrderInput | SortOrder
    receivingEpa?: SortOrderInput | SortOrder
    receiving2ptConversions?: SortOrderInput | SortOrder
    racr?: SortOrderInput | SortOrder
    targetShare?: SortOrderInput | SortOrder
    airYardsShare?: SortOrderInput | SortOrder
    wopr?: SortOrderInput | SortOrder
    specialTeamsTds?: SortOrderInput | SortOrder
    fantasyPoints?: SortOrderInput | SortOrder
    fantasyPointsPpr?: SortOrderInput | SortOrder
  }

  export type PlayerStatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayerStatWhereInput | PlayerStatWhereInput[]
    OR?: PlayerStatWhereInput[]
    NOT?: PlayerStatWhereInput | PlayerStatWhereInput[]
    playerId?: StringNullableFilter<"PlayerStat"> | string | null
    playerName?: StringNullableFilter<"PlayerStat"> | string | null
    playerDisplayName?: StringNullableFilter<"PlayerStat"> | string | null
    position?: StringNullableFilter<"PlayerStat"> | string | null
    positionGroup?: StringNullableFilter<"PlayerStat"> | string | null
    headshotUrl?: StringNullableFilter<"PlayerStat"> | string | null
    recentTeam?: StringNullableFilter<"PlayerStat"> | string | null
    season?: IntNullableFilter<"PlayerStat"> | number | null
    week?: IntNullableFilter<"PlayerStat"> | number | null
    seasonType?: StringNullableFilter<"PlayerStat"> | string | null
    opponentTeam?: StringNullableFilter<"PlayerStat"> | string | null
    completions?: IntNullableFilter<"PlayerStat"> | number | null
    attempts?: IntNullableFilter<"PlayerStat"> | number | null
    passingYards?: FloatNullableFilter<"PlayerStat"> | number | null
    passingTds?: IntNullableFilter<"PlayerStat"> | number | null
    interceptions?: IntNullableFilter<"PlayerStat"> | number | null
    sacks?: IntNullableFilter<"PlayerStat"> | number | null
    sackYards?: FloatNullableFilter<"PlayerStat"> | number | null
    sackFumbles?: IntNullableFilter<"PlayerStat"> | number | null
    sackFumblesLost?: IntNullableFilter<"PlayerStat"> | number | null
    passingAirYards?: FloatNullableFilter<"PlayerStat"> | number | null
    passingYardsAfterCatch?: FloatNullableFilter<"PlayerStat"> | number | null
    passingFirstDowns?: IntNullableFilter<"PlayerStat"> | number | null
    passingEpa?: FloatNullableFilter<"PlayerStat"> | number | null
    passing2ptConversions?: IntNullableFilter<"PlayerStat"> | number | null
    pacr?: FloatNullableFilter<"PlayerStat"> | number | null
    dakota?: FloatNullableFilter<"PlayerStat"> | number | null
    carries?: IntNullableFilter<"PlayerStat"> | number | null
    rushingYards?: FloatNullableFilter<"PlayerStat"> | number | null
    rushingTds?: IntNullableFilter<"PlayerStat"> | number | null
    rushingFumbles?: IntNullableFilter<"PlayerStat"> | number | null
    rushingFumblesLost?: IntNullableFilter<"PlayerStat"> | number | null
    rushingFirstDowns?: IntNullableFilter<"PlayerStat"> | number | null
    rushingEpa?: FloatNullableFilter<"PlayerStat"> | number | null
    rushing2ptConversions?: IntNullableFilter<"PlayerStat"> | number | null
    receptions?: IntNullableFilter<"PlayerStat"> | number | null
    targets?: IntNullableFilter<"PlayerStat"> | number | null
    receivingYards?: FloatNullableFilter<"PlayerStat"> | number | null
    receivingTds?: IntNullableFilter<"PlayerStat"> | number | null
    receivingFumbles?: IntNullableFilter<"PlayerStat"> | number | null
    receivingFumblesLost?: IntNullableFilter<"PlayerStat"> | number | null
    receivingAirYards?: FloatNullableFilter<"PlayerStat"> | number | null
    receivingYardsAfterCatch?: FloatNullableFilter<"PlayerStat"> | number | null
    receivingFirstDowns?: IntNullableFilter<"PlayerStat"> | number | null
    receivingEpa?: FloatNullableFilter<"PlayerStat"> | number | null
    receiving2ptConversions?: IntNullableFilter<"PlayerStat"> | number | null
    racr?: FloatNullableFilter<"PlayerStat"> | number | null
    targetShare?: FloatNullableFilter<"PlayerStat"> | number | null
    airYardsShare?: FloatNullableFilter<"PlayerStat"> | number | null
    wopr?: FloatNullableFilter<"PlayerStat"> | number | null
    specialTeamsTds?: IntNullableFilter<"PlayerStat"> | number | null
    fantasyPoints?: FloatNullableFilter<"PlayerStat"> | number | null
    fantasyPointsPpr?: FloatNullableFilter<"PlayerStat"> | number | null
  }, "id">

  export type PlayerStatOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrderInput | SortOrder
    playerName?: SortOrderInput | SortOrder
    playerDisplayName?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    positionGroup?: SortOrderInput | SortOrder
    headshotUrl?: SortOrderInput | SortOrder
    recentTeam?: SortOrderInput | SortOrder
    season?: SortOrderInput | SortOrder
    week?: SortOrderInput | SortOrder
    seasonType?: SortOrderInput | SortOrder
    opponentTeam?: SortOrderInput | SortOrder
    completions?: SortOrderInput | SortOrder
    attempts?: SortOrderInput | SortOrder
    passingYards?: SortOrderInput | SortOrder
    passingTds?: SortOrderInput | SortOrder
    interceptions?: SortOrderInput | SortOrder
    sacks?: SortOrderInput | SortOrder
    sackYards?: SortOrderInput | SortOrder
    sackFumbles?: SortOrderInput | SortOrder
    sackFumblesLost?: SortOrderInput | SortOrder
    passingAirYards?: SortOrderInput | SortOrder
    passingYardsAfterCatch?: SortOrderInput | SortOrder
    passingFirstDowns?: SortOrderInput | SortOrder
    passingEpa?: SortOrderInput | SortOrder
    passing2ptConversions?: SortOrderInput | SortOrder
    pacr?: SortOrderInput | SortOrder
    dakota?: SortOrderInput | SortOrder
    carries?: SortOrderInput | SortOrder
    rushingYards?: SortOrderInput | SortOrder
    rushingTds?: SortOrderInput | SortOrder
    rushingFumbles?: SortOrderInput | SortOrder
    rushingFumblesLost?: SortOrderInput | SortOrder
    rushingFirstDowns?: SortOrderInput | SortOrder
    rushingEpa?: SortOrderInput | SortOrder
    rushing2ptConversions?: SortOrderInput | SortOrder
    receptions?: SortOrderInput | SortOrder
    targets?: SortOrderInput | SortOrder
    receivingYards?: SortOrderInput | SortOrder
    receivingTds?: SortOrderInput | SortOrder
    receivingFumbles?: SortOrderInput | SortOrder
    receivingFumblesLost?: SortOrderInput | SortOrder
    receivingAirYards?: SortOrderInput | SortOrder
    receivingYardsAfterCatch?: SortOrderInput | SortOrder
    receivingFirstDowns?: SortOrderInput | SortOrder
    receivingEpa?: SortOrderInput | SortOrder
    receiving2ptConversions?: SortOrderInput | SortOrder
    racr?: SortOrderInput | SortOrder
    targetShare?: SortOrderInput | SortOrder
    airYardsShare?: SortOrderInput | SortOrder
    wopr?: SortOrderInput | SortOrder
    specialTeamsTds?: SortOrderInput | SortOrder
    fantasyPoints?: SortOrderInput | SortOrder
    fantasyPointsPpr?: SortOrderInput | SortOrder
    _count?: PlayerStatCountOrderByAggregateInput
    _avg?: PlayerStatAvgOrderByAggregateInput
    _max?: PlayerStatMaxOrderByAggregateInput
    _min?: PlayerStatMinOrderByAggregateInput
    _sum?: PlayerStatSumOrderByAggregateInput
  }

  export type PlayerStatScalarWhereWithAggregatesInput = {
    AND?: PlayerStatScalarWhereWithAggregatesInput | PlayerStatScalarWhereWithAggregatesInput[]
    OR?: PlayerStatScalarWhereWithAggregatesInput[]
    NOT?: PlayerStatScalarWhereWithAggregatesInput | PlayerStatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerStat"> | string
    playerId?: StringNullableWithAggregatesFilter<"PlayerStat"> | string | null
    playerName?: StringNullableWithAggregatesFilter<"PlayerStat"> | string | null
    playerDisplayName?: StringNullableWithAggregatesFilter<"PlayerStat"> | string | null
    position?: StringNullableWithAggregatesFilter<"PlayerStat"> | string | null
    positionGroup?: StringNullableWithAggregatesFilter<"PlayerStat"> | string | null
    headshotUrl?: StringNullableWithAggregatesFilter<"PlayerStat"> | string | null
    recentTeam?: StringNullableWithAggregatesFilter<"PlayerStat"> | string | null
    season?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    week?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    seasonType?: StringNullableWithAggregatesFilter<"PlayerStat"> | string | null
    opponentTeam?: StringNullableWithAggregatesFilter<"PlayerStat"> | string | null
    completions?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    attempts?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    passingYards?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    passingTds?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    interceptions?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    sacks?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    sackYards?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    sackFumbles?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    sackFumblesLost?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    passingAirYards?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    passingYardsAfterCatch?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    passingFirstDowns?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    passingEpa?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    passing2ptConversions?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    pacr?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    dakota?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    carries?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    rushingYards?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    rushingTds?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    rushingFumbles?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    rushingFumblesLost?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    rushingFirstDowns?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    rushingEpa?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    rushing2ptConversions?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    receptions?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    targets?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    receivingYards?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    receivingTds?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    receivingFumbles?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    receivingFumblesLost?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    receivingAirYards?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    receivingYardsAfterCatch?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    receivingFirstDowns?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    receivingEpa?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    receiving2ptConversions?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    racr?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    targetShare?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    airYardsShare?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    wopr?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    specialTeamsTds?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    fantasyPoints?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    fantasyPointsPpr?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
  }

  export type ReceivingStatWhereInput = {
    AND?: ReceivingStatWhereInput | ReceivingStatWhereInput[]
    OR?: ReceivingStatWhereInput[]
    NOT?: ReceivingStatWhereInput | ReceivingStatWhereInput[]
    id?: StringFilter<"ReceivingStat"> | string
    player?: StringNullableFilter<"ReceivingStat"> | string | null
    playerId?: StringNullableFilter<"ReceivingStat"> | string | null
    position?: StringNullableFilter<"ReceivingStat"> | string | null
    teamName?: StringNullableFilter<"ReceivingStat"> | string | null
    playerGameCount?: IntNullableFilter<"ReceivingStat"> | number | null
    avgDepthOfTarget?: FloatNullableFilter<"ReceivingStat"> | number | null
    avoidedTackles?: IntNullableFilter<"ReceivingStat"> | number | null
    caughtPercent?: FloatNullableFilter<"ReceivingStat"> | number | null
    contestedCatchRate?: FloatNullableFilter<"ReceivingStat"> | number | null
    contestedReceptions?: IntNullableFilter<"ReceivingStat"> | number | null
    contestedTargets?: IntNullableFilter<"ReceivingStat"> | number | null
    declinedPenalties?: IntNullableFilter<"ReceivingStat"> | number | null
    dropRate?: FloatNullableFilter<"ReceivingStat"> | number | null
    drops?: IntNullableFilter<"ReceivingStat"> | number | null
    firstDowns?: IntNullableFilter<"ReceivingStat"> | number | null
    franchiseId?: IntNullableFilter<"ReceivingStat"> | number | null
    fumbles?: IntNullableFilter<"ReceivingStat"> | number | null
    gradesHandsDrop?: FloatNullableFilter<"ReceivingStat"> | number | null
    gradesHandsFumble?: FloatNullableFilter<"ReceivingStat"> | number | null
    gradesOffense?: FloatNullableFilter<"ReceivingStat"> | number | null
    gradesPassBlock?: FloatNullableFilter<"ReceivingStat"> | number | null
    gradesPassRoute?: FloatNullableFilter<"ReceivingStat"> | number | null
    inlineRate?: FloatNullableFilter<"ReceivingStat"> | number | null
    inlineSnaps?: IntNullableFilter<"ReceivingStat"> | number | null
    interceptions?: IntNullableFilter<"ReceivingStat"> | number | null
    longest?: IntNullableFilter<"ReceivingStat"> | number | null
    passBlockRate?: FloatNullableFilter<"ReceivingStat"> | number | null
    passBlocks?: IntNullableFilter<"ReceivingStat"> | number | null
    passPlays?: IntNullableFilter<"ReceivingStat"> | number | null
    penalties?: IntNullableFilter<"ReceivingStat"> | number | null
    receptions?: IntNullableFilter<"ReceivingStat"> | number | null
    routeRate?: FloatNullableFilter<"ReceivingStat"> | number | null
    routes?: IntNullableFilter<"ReceivingStat"> | number | null
    slotRate?: FloatNullableFilter<"ReceivingStat"> | number | null
    slotSnaps?: IntNullableFilter<"ReceivingStat"> | number | null
    targetedQbRating?: FloatNullableFilter<"ReceivingStat"> | number | null
    targets?: IntNullableFilter<"ReceivingStat"> | number | null
    touchdowns?: IntNullableFilter<"ReceivingStat"> | number | null
    wideRate?: FloatNullableFilter<"ReceivingStat"> | number | null
    wideSnaps?: IntNullableFilter<"ReceivingStat"> | number | null
    yards?: IntNullableFilter<"ReceivingStat"> | number | null
    yardsAfterCatch?: IntNullableFilter<"ReceivingStat"> | number | null
    yardsAfterCatchPerReception?: FloatNullableFilter<"ReceivingStat"> | number | null
    yardsPerReception?: FloatNullableFilter<"ReceivingStat"> | number | null
    yprr?: FloatNullableFilter<"ReceivingStat"> | number | null
  }

  export type ReceivingStatOrderByWithRelationInput = {
    id?: SortOrder
    player?: SortOrderInput | SortOrder
    playerId?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    teamName?: SortOrderInput | SortOrder
    playerGameCount?: SortOrderInput | SortOrder
    avgDepthOfTarget?: SortOrderInput | SortOrder
    avoidedTackles?: SortOrderInput | SortOrder
    caughtPercent?: SortOrderInput | SortOrder
    contestedCatchRate?: SortOrderInput | SortOrder
    contestedReceptions?: SortOrderInput | SortOrder
    contestedTargets?: SortOrderInput | SortOrder
    declinedPenalties?: SortOrderInput | SortOrder
    dropRate?: SortOrderInput | SortOrder
    drops?: SortOrderInput | SortOrder
    firstDowns?: SortOrderInput | SortOrder
    franchiseId?: SortOrderInput | SortOrder
    fumbles?: SortOrderInput | SortOrder
    gradesHandsDrop?: SortOrderInput | SortOrder
    gradesHandsFumble?: SortOrderInput | SortOrder
    gradesOffense?: SortOrderInput | SortOrder
    gradesPassBlock?: SortOrderInput | SortOrder
    gradesPassRoute?: SortOrderInput | SortOrder
    inlineRate?: SortOrderInput | SortOrder
    inlineSnaps?: SortOrderInput | SortOrder
    interceptions?: SortOrderInput | SortOrder
    longest?: SortOrderInput | SortOrder
    passBlockRate?: SortOrderInput | SortOrder
    passBlocks?: SortOrderInput | SortOrder
    passPlays?: SortOrderInput | SortOrder
    penalties?: SortOrderInput | SortOrder
    receptions?: SortOrderInput | SortOrder
    routeRate?: SortOrderInput | SortOrder
    routes?: SortOrderInput | SortOrder
    slotRate?: SortOrderInput | SortOrder
    slotSnaps?: SortOrderInput | SortOrder
    targetedQbRating?: SortOrderInput | SortOrder
    targets?: SortOrderInput | SortOrder
    touchdowns?: SortOrderInput | SortOrder
    wideRate?: SortOrderInput | SortOrder
    wideSnaps?: SortOrderInput | SortOrder
    yards?: SortOrderInput | SortOrder
    yardsAfterCatch?: SortOrderInput | SortOrder
    yardsAfterCatchPerReception?: SortOrderInput | SortOrder
    yardsPerReception?: SortOrderInput | SortOrder
    yprr?: SortOrderInput | SortOrder
  }

  export type ReceivingStatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReceivingStatWhereInput | ReceivingStatWhereInput[]
    OR?: ReceivingStatWhereInput[]
    NOT?: ReceivingStatWhereInput | ReceivingStatWhereInput[]
    player?: StringNullableFilter<"ReceivingStat"> | string | null
    playerId?: StringNullableFilter<"ReceivingStat"> | string | null
    position?: StringNullableFilter<"ReceivingStat"> | string | null
    teamName?: StringNullableFilter<"ReceivingStat"> | string | null
    playerGameCount?: IntNullableFilter<"ReceivingStat"> | number | null
    avgDepthOfTarget?: FloatNullableFilter<"ReceivingStat"> | number | null
    avoidedTackles?: IntNullableFilter<"ReceivingStat"> | number | null
    caughtPercent?: FloatNullableFilter<"ReceivingStat"> | number | null
    contestedCatchRate?: FloatNullableFilter<"ReceivingStat"> | number | null
    contestedReceptions?: IntNullableFilter<"ReceivingStat"> | number | null
    contestedTargets?: IntNullableFilter<"ReceivingStat"> | number | null
    declinedPenalties?: IntNullableFilter<"ReceivingStat"> | number | null
    dropRate?: FloatNullableFilter<"ReceivingStat"> | number | null
    drops?: IntNullableFilter<"ReceivingStat"> | number | null
    firstDowns?: IntNullableFilter<"ReceivingStat"> | number | null
    franchiseId?: IntNullableFilter<"ReceivingStat"> | number | null
    fumbles?: IntNullableFilter<"ReceivingStat"> | number | null
    gradesHandsDrop?: FloatNullableFilter<"ReceivingStat"> | number | null
    gradesHandsFumble?: FloatNullableFilter<"ReceivingStat"> | number | null
    gradesOffense?: FloatNullableFilter<"ReceivingStat"> | number | null
    gradesPassBlock?: FloatNullableFilter<"ReceivingStat"> | number | null
    gradesPassRoute?: FloatNullableFilter<"ReceivingStat"> | number | null
    inlineRate?: FloatNullableFilter<"ReceivingStat"> | number | null
    inlineSnaps?: IntNullableFilter<"ReceivingStat"> | number | null
    interceptions?: IntNullableFilter<"ReceivingStat"> | number | null
    longest?: IntNullableFilter<"ReceivingStat"> | number | null
    passBlockRate?: FloatNullableFilter<"ReceivingStat"> | number | null
    passBlocks?: IntNullableFilter<"ReceivingStat"> | number | null
    passPlays?: IntNullableFilter<"ReceivingStat"> | number | null
    penalties?: IntNullableFilter<"ReceivingStat"> | number | null
    receptions?: IntNullableFilter<"ReceivingStat"> | number | null
    routeRate?: FloatNullableFilter<"ReceivingStat"> | number | null
    routes?: IntNullableFilter<"ReceivingStat"> | number | null
    slotRate?: FloatNullableFilter<"ReceivingStat"> | number | null
    slotSnaps?: IntNullableFilter<"ReceivingStat"> | number | null
    targetedQbRating?: FloatNullableFilter<"ReceivingStat"> | number | null
    targets?: IntNullableFilter<"ReceivingStat"> | number | null
    touchdowns?: IntNullableFilter<"ReceivingStat"> | number | null
    wideRate?: FloatNullableFilter<"ReceivingStat"> | number | null
    wideSnaps?: IntNullableFilter<"ReceivingStat"> | number | null
    yards?: IntNullableFilter<"ReceivingStat"> | number | null
    yardsAfterCatch?: IntNullableFilter<"ReceivingStat"> | number | null
    yardsAfterCatchPerReception?: FloatNullableFilter<"ReceivingStat"> | number | null
    yardsPerReception?: FloatNullableFilter<"ReceivingStat"> | number | null
    yprr?: FloatNullableFilter<"ReceivingStat"> | number | null
  }, "id">

  export type ReceivingStatOrderByWithAggregationInput = {
    id?: SortOrder
    player?: SortOrderInput | SortOrder
    playerId?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    teamName?: SortOrderInput | SortOrder
    playerGameCount?: SortOrderInput | SortOrder
    avgDepthOfTarget?: SortOrderInput | SortOrder
    avoidedTackles?: SortOrderInput | SortOrder
    caughtPercent?: SortOrderInput | SortOrder
    contestedCatchRate?: SortOrderInput | SortOrder
    contestedReceptions?: SortOrderInput | SortOrder
    contestedTargets?: SortOrderInput | SortOrder
    declinedPenalties?: SortOrderInput | SortOrder
    dropRate?: SortOrderInput | SortOrder
    drops?: SortOrderInput | SortOrder
    firstDowns?: SortOrderInput | SortOrder
    franchiseId?: SortOrderInput | SortOrder
    fumbles?: SortOrderInput | SortOrder
    gradesHandsDrop?: SortOrderInput | SortOrder
    gradesHandsFumble?: SortOrderInput | SortOrder
    gradesOffense?: SortOrderInput | SortOrder
    gradesPassBlock?: SortOrderInput | SortOrder
    gradesPassRoute?: SortOrderInput | SortOrder
    inlineRate?: SortOrderInput | SortOrder
    inlineSnaps?: SortOrderInput | SortOrder
    interceptions?: SortOrderInput | SortOrder
    longest?: SortOrderInput | SortOrder
    passBlockRate?: SortOrderInput | SortOrder
    passBlocks?: SortOrderInput | SortOrder
    passPlays?: SortOrderInput | SortOrder
    penalties?: SortOrderInput | SortOrder
    receptions?: SortOrderInput | SortOrder
    routeRate?: SortOrderInput | SortOrder
    routes?: SortOrderInput | SortOrder
    slotRate?: SortOrderInput | SortOrder
    slotSnaps?: SortOrderInput | SortOrder
    targetedQbRating?: SortOrderInput | SortOrder
    targets?: SortOrderInput | SortOrder
    touchdowns?: SortOrderInput | SortOrder
    wideRate?: SortOrderInput | SortOrder
    wideSnaps?: SortOrderInput | SortOrder
    yards?: SortOrderInput | SortOrder
    yardsAfterCatch?: SortOrderInput | SortOrder
    yardsAfterCatchPerReception?: SortOrderInput | SortOrder
    yardsPerReception?: SortOrderInput | SortOrder
    yprr?: SortOrderInput | SortOrder
    _count?: ReceivingStatCountOrderByAggregateInput
    _avg?: ReceivingStatAvgOrderByAggregateInput
    _max?: ReceivingStatMaxOrderByAggregateInput
    _min?: ReceivingStatMinOrderByAggregateInput
    _sum?: ReceivingStatSumOrderByAggregateInput
  }

  export type ReceivingStatScalarWhereWithAggregatesInput = {
    AND?: ReceivingStatScalarWhereWithAggregatesInput | ReceivingStatScalarWhereWithAggregatesInput[]
    OR?: ReceivingStatScalarWhereWithAggregatesInput[]
    NOT?: ReceivingStatScalarWhereWithAggregatesInput | ReceivingStatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReceivingStat"> | string
    player?: StringNullableWithAggregatesFilter<"ReceivingStat"> | string | null
    playerId?: StringNullableWithAggregatesFilter<"ReceivingStat"> | string | null
    position?: StringNullableWithAggregatesFilter<"ReceivingStat"> | string | null
    teamName?: StringNullableWithAggregatesFilter<"ReceivingStat"> | string | null
    playerGameCount?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    avgDepthOfTarget?: FloatNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    avoidedTackles?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    caughtPercent?: FloatNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    contestedCatchRate?: FloatNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    contestedReceptions?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    contestedTargets?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    declinedPenalties?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    dropRate?: FloatNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    drops?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    firstDowns?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    franchiseId?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    fumbles?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    gradesHandsDrop?: FloatNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    gradesHandsFumble?: FloatNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    gradesOffense?: FloatNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    gradesPassBlock?: FloatNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    gradesPassRoute?: FloatNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    inlineRate?: FloatNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    inlineSnaps?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    interceptions?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    longest?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    passBlockRate?: FloatNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    passBlocks?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    passPlays?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    penalties?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    receptions?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    routeRate?: FloatNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    routes?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    slotRate?: FloatNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    slotSnaps?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    targetedQbRating?: FloatNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    targets?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    touchdowns?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    wideRate?: FloatNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    wideSnaps?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    yards?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    yardsAfterCatch?: IntNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    yardsAfterCatchPerReception?: FloatNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    yardsPerReception?: FloatNullableWithAggregatesFilter<"ReceivingStat"> | number | null
    yprr?: FloatNullableWithAggregatesFilter<"ReceivingStat"> | number | null
  }

  export type PlayerSeasonWhereInput = {
    AND?: PlayerSeasonWhereInput | PlayerSeasonWhereInput[]
    OR?: PlayerSeasonWhereInput[]
    NOT?: PlayerSeasonWhereInput | PlayerSeasonWhereInput[]
    player_id?: StringFilter<"PlayerSeason"> | string
    player_name?: StringFilter<"PlayerSeason"> | string
    season?: IntFilter<"PlayerSeason"> | number
    games_played?: IntFilter<"PlayerSeason"> | number
    position?: StringNullableFilter<"PlayerSeason"> | string | null
    completions_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    attempts_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_yards_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_tds_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    interceptions_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_first_downs_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    carries_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_yards_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_tds_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_fumbles_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_fumbles_lost_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_first_downs_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    targets_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_yards_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_tds_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_air_yards_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_yards_after_catch_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_first_downs_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    fantasy_points_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    completions_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    attempts_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_yards_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_tds_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    interceptions_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_air_yards_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_yards_after_catch_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_first_downs_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    carries_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_yards_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_tds_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_fumbles_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_fumbles_lost_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_first_downs_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_epa_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receptions_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    targets_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_yards_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_tds_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_air_yards_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_yards_after_catch_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_first_downs_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_epa_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    racr_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    target_share_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    air_yards_share_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    wopr_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    fantasy_points_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    fantasy_points_ppr_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    YPRR?: FloatNullableFilter<"PlayerSeason"> | number | null
    routes?: FloatNullableFilter<"PlayerSeason"> | number | null
    routes_per_game?: FloatNullableFilter<"PlayerSeason"> | number | null
    TPRR?: FloatNullableFilter<"PlayerSeason"> | number | null
    firstDPRR?: FloatNullableFilter<"PlayerSeason"> | number | null
  }

  export type PlayerSeasonOrderByWithRelationInput = {
    player_id?: SortOrder
    player_name?: SortOrder
    season?: SortOrder
    games_played?: SortOrder
    position?: SortOrderInput | SortOrder
    completions_total?: SortOrderInput | SortOrder
    attempts_total?: SortOrderInput | SortOrder
    passing_yards_total?: SortOrderInput | SortOrder
    passing_tds_total?: SortOrderInput | SortOrder
    interceptions_total?: SortOrderInput | SortOrder
    passing_first_downs_total?: SortOrderInput | SortOrder
    carries_total?: SortOrderInput | SortOrder
    rushing_yards_total?: SortOrderInput | SortOrder
    rushing_tds_total?: SortOrderInput | SortOrder
    rushing_fumbles_total?: SortOrderInput | SortOrder
    rushing_fumbles_lost_total?: SortOrderInput | SortOrder
    rushing_first_downs_total?: SortOrderInput | SortOrder
    targets_total?: SortOrderInput | SortOrder
    receiving_yards_total?: SortOrderInput | SortOrder
    receiving_tds_total?: SortOrderInput | SortOrder
    receiving_air_yards_total?: SortOrderInput | SortOrder
    receiving_yards_after_catch_total?: SortOrderInput | SortOrder
    receiving_first_downs_total?: SortOrderInput | SortOrder
    fantasy_points_total?: SortOrderInput | SortOrder
    completions_avg?: SortOrderInput | SortOrder
    attempts_avg?: SortOrderInput | SortOrder
    passing_yards_avg?: SortOrderInput | SortOrder
    passing_tds_avg?: SortOrderInput | SortOrder
    interceptions_avg?: SortOrderInput | SortOrder
    passing_air_yards_avg?: SortOrderInput | SortOrder
    passing_yards_after_catch_avg?: SortOrderInput | SortOrder
    passing_first_downs_avg?: SortOrderInput | SortOrder
    carries_avg?: SortOrderInput | SortOrder
    rushing_yards_avg?: SortOrderInput | SortOrder
    rushing_tds_avg?: SortOrderInput | SortOrder
    rushing_fumbles_avg?: SortOrderInput | SortOrder
    rushing_fumbles_lost_avg?: SortOrderInput | SortOrder
    rushing_first_downs_avg?: SortOrderInput | SortOrder
    rushing_epa_avg?: SortOrderInput | SortOrder
    receptions_avg?: SortOrderInput | SortOrder
    targets_avg?: SortOrderInput | SortOrder
    receiving_yards_avg?: SortOrderInput | SortOrder
    receiving_tds_avg?: SortOrderInput | SortOrder
    receiving_air_yards_avg?: SortOrderInput | SortOrder
    receiving_yards_after_catch_avg?: SortOrderInput | SortOrder
    receiving_first_downs_avg?: SortOrderInput | SortOrder
    receiving_epa_avg?: SortOrderInput | SortOrder
    racr_avg?: SortOrderInput | SortOrder
    target_share_avg?: SortOrderInput | SortOrder
    air_yards_share_avg?: SortOrderInput | SortOrder
    wopr_avg?: SortOrderInput | SortOrder
    fantasy_points_avg?: SortOrderInput | SortOrder
    fantasy_points_ppr_avg?: SortOrderInput | SortOrder
    YPRR?: SortOrderInput | SortOrder
    routes?: SortOrderInput | SortOrder
    routes_per_game?: SortOrderInput | SortOrder
    TPRR?: SortOrderInput | SortOrder
    firstDPRR?: SortOrderInput | SortOrder
  }

  export type PlayerSeasonWhereUniqueInput = Prisma.AtLeast<{
    player_id_season?: PlayerSeasonPlayer_idSeasonCompoundUniqueInput
    AND?: PlayerSeasonWhereInput | PlayerSeasonWhereInput[]
    OR?: PlayerSeasonWhereInput[]
    NOT?: PlayerSeasonWhereInput | PlayerSeasonWhereInput[]
    player_id?: StringFilter<"PlayerSeason"> | string
    player_name?: StringFilter<"PlayerSeason"> | string
    season?: IntFilter<"PlayerSeason"> | number
    games_played?: IntFilter<"PlayerSeason"> | number
    position?: StringNullableFilter<"PlayerSeason"> | string | null
    completions_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    attempts_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_yards_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_tds_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    interceptions_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_first_downs_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    carries_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_yards_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_tds_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_fumbles_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_fumbles_lost_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_first_downs_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    targets_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_yards_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_tds_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_air_yards_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_yards_after_catch_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_first_downs_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    fantasy_points_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    completions_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    attempts_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_yards_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_tds_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    interceptions_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_air_yards_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_yards_after_catch_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_first_downs_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    carries_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_yards_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_tds_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_fumbles_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_fumbles_lost_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_first_downs_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_epa_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receptions_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    targets_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_yards_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_tds_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_air_yards_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_yards_after_catch_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_first_downs_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_epa_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    racr_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    target_share_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    air_yards_share_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    wopr_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    fantasy_points_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    fantasy_points_ppr_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    YPRR?: FloatNullableFilter<"PlayerSeason"> | number | null
    routes?: FloatNullableFilter<"PlayerSeason"> | number | null
    routes_per_game?: FloatNullableFilter<"PlayerSeason"> | number | null
    TPRR?: FloatNullableFilter<"PlayerSeason"> | number | null
    firstDPRR?: FloatNullableFilter<"PlayerSeason"> | number | null
  }, "player_id_season">

  export type PlayerSeasonOrderByWithAggregationInput = {
    player_id?: SortOrder
    player_name?: SortOrder
    season?: SortOrder
    games_played?: SortOrder
    position?: SortOrderInput | SortOrder
    completions_total?: SortOrderInput | SortOrder
    attempts_total?: SortOrderInput | SortOrder
    passing_yards_total?: SortOrderInput | SortOrder
    passing_tds_total?: SortOrderInput | SortOrder
    interceptions_total?: SortOrderInput | SortOrder
    passing_first_downs_total?: SortOrderInput | SortOrder
    carries_total?: SortOrderInput | SortOrder
    rushing_yards_total?: SortOrderInput | SortOrder
    rushing_tds_total?: SortOrderInput | SortOrder
    rushing_fumbles_total?: SortOrderInput | SortOrder
    rushing_fumbles_lost_total?: SortOrderInput | SortOrder
    rushing_first_downs_total?: SortOrderInput | SortOrder
    targets_total?: SortOrderInput | SortOrder
    receiving_yards_total?: SortOrderInput | SortOrder
    receiving_tds_total?: SortOrderInput | SortOrder
    receiving_air_yards_total?: SortOrderInput | SortOrder
    receiving_yards_after_catch_total?: SortOrderInput | SortOrder
    receiving_first_downs_total?: SortOrderInput | SortOrder
    fantasy_points_total?: SortOrderInput | SortOrder
    completions_avg?: SortOrderInput | SortOrder
    attempts_avg?: SortOrderInput | SortOrder
    passing_yards_avg?: SortOrderInput | SortOrder
    passing_tds_avg?: SortOrderInput | SortOrder
    interceptions_avg?: SortOrderInput | SortOrder
    passing_air_yards_avg?: SortOrderInput | SortOrder
    passing_yards_after_catch_avg?: SortOrderInput | SortOrder
    passing_first_downs_avg?: SortOrderInput | SortOrder
    carries_avg?: SortOrderInput | SortOrder
    rushing_yards_avg?: SortOrderInput | SortOrder
    rushing_tds_avg?: SortOrderInput | SortOrder
    rushing_fumbles_avg?: SortOrderInput | SortOrder
    rushing_fumbles_lost_avg?: SortOrderInput | SortOrder
    rushing_first_downs_avg?: SortOrderInput | SortOrder
    rushing_epa_avg?: SortOrderInput | SortOrder
    receptions_avg?: SortOrderInput | SortOrder
    targets_avg?: SortOrderInput | SortOrder
    receiving_yards_avg?: SortOrderInput | SortOrder
    receiving_tds_avg?: SortOrderInput | SortOrder
    receiving_air_yards_avg?: SortOrderInput | SortOrder
    receiving_yards_after_catch_avg?: SortOrderInput | SortOrder
    receiving_first_downs_avg?: SortOrderInput | SortOrder
    receiving_epa_avg?: SortOrderInput | SortOrder
    racr_avg?: SortOrderInput | SortOrder
    target_share_avg?: SortOrderInput | SortOrder
    air_yards_share_avg?: SortOrderInput | SortOrder
    wopr_avg?: SortOrderInput | SortOrder
    fantasy_points_avg?: SortOrderInput | SortOrder
    fantasy_points_ppr_avg?: SortOrderInput | SortOrder
    YPRR?: SortOrderInput | SortOrder
    routes?: SortOrderInput | SortOrder
    routes_per_game?: SortOrderInput | SortOrder
    TPRR?: SortOrderInput | SortOrder
    firstDPRR?: SortOrderInput | SortOrder
    _count?: PlayerSeasonCountOrderByAggregateInput
    _avg?: PlayerSeasonAvgOrderByAggregateInput
    _max?: PlayerSeasonMaxOrderByAggregateInput
    _min?: PlayerSeasonMinOrderByAggregateInput
    _sum?: PlayerSeasonSumOrderByAggregateInput
  }

  export type PlayerSeasonScalarWhereWithAggregatesInput = {
    AND?: PlayerSeasonScalarWhereWithAggregatesInput | PlayerSeasonScalarWhereWithAggregatesInput[]
    OR?: PlayerSeasonScalarWhereWithAggregatesInput[]
    NOT?: PlayerSeasonScalarWhereWithAggregatesInput | PlayerSeasonScalarWhereWithAggregatesInput[]
    player_id?: StringWithAggregatesFilter<"PlayerSeason"> | string
    player_name?: StringWithAggregatesFilter<"PlayerSeason"> | string
    season?: IntWithAggregatesFilter<"PlayerSeason"> | number
    games_played?: IntWithAggregatesFilter<"PlayerSeason"> | number
    position?: StringNullableWithAggregatesFilter<"PlayerSeason"> | string | null
    completions_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    attempts_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    passing_yards_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    passing_tds_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    interceptions_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    passing_first_downs_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    carries_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rushing_yards_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rushing_tds_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rushing_fumbles_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rushing_fumbles_lost_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rushing_first_downs_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    targets_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    receiving_yards_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    receiving_tds_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    receiving_air_yards_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    receiving_yards_after_catch_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    receiving_first_downs_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    fantasy_points_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    completions_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    attempts_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    passing_yards_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    passing_tds_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    interceptions_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    passing_air_yards_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    passing_yards_after_catch_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    passing_first_downs_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    carries_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rushing_yards_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rushing_tds_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rushing_fumbles_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rushing_fumbles_lost_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rushing_first_downs_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rushing_epa_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    receptions_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    targets_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    receiving_yards_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    receiving_tds_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    receiving_air_yards_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    receiving_yards_after_catch_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    receiving_first_downs_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    receiving_epa_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    racr_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    target_share_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    air_yards_share_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    wopr_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    fantasy_points_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    fantasy_points_ppr_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    YPRR?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    routes?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    routes_per_game?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    TPRR?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    firstDPRR?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
  }

  export type tradeAnalyzerDataCreateInput = {
    id?: string
    name?: string | null
    position?: string | null
    team?: string | null
    marketValue?: number | null
    myValue?: number | null
    valueDiffBetweenMyValueAndMarketValue?: number | null
    PRPScore?: number | null
    projectedNextOffseasonDynastyValue?: NullableJsonNullValueInput | InputJsonValue
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: number | null
    PNODVScore?: number | null
    RVSScore?: number | null
    jaxValue?: number | null
    travValue?: number | null
    joeValue?: number | null
    consensusValue?: number | null
  }

  export type tradeAnalyzerDataUncheckedCreateInput = {
    id?: string
    name?: string | null
    position?: string | null
    team?: string | null
    marketValue?: number | null
    myValue?: number | null
    valueDiffBetweenMyValueAndMarketValue?: number | null
    PRPScore?: number | null
    projectedNextOffseasonDynastyValue?: NullableJsonNullValueInput | InputJsonValue
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: number | null
    PNODVScore?: number | null
    RVSScore?: number | null
    jaxValue?: number | null
    travValue?: number | null
    joeValue?: number | null
    consensusValue?: number | null
  }

  export type tradeAnalyzerDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    marketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    myValue?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDiffBetweenMyValueAndMarketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    PRPScore?: NullableFloatFieldUpdateOperationsInput | number | null
    projectedNextOffseasonDynastyValue?: NullableJsonNullValueInput | InputJsonValue
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: NullableFloatFieldUpdateOperationsInput | number | null
    PNODVScore?: NullableFloatFieldUpdateOperationsInput | number | null
    RVSScore?: NullableFloatFieldUpdateOperationsInput | number | null
    jaxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    travValue?: NullableFloatFieldUpdateOperationsInput | number | null
    joeValue?: NullableFloatFieldUpdateOperationsInput | number | null
    consensusValue?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type tradeAnalyzerDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    marketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    myValue?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDiffBetweenMyValueAndMarketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    PRPScore?: NullableFloatFieldUpdateOperationsInput | number | null
    projectedNextOffseasonDynastyValue?: NullableJsonNullValueInput | InputJsonValue
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: NullableFloatFieldUpdateOperationsInput | number | null
    PNODVScore?: NullableFloatFieldUpdateOperationsInput | number | null
    RVSScore?: NullableFloatFieldUpdateOperationsInput | number | null
    jaxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    travValue?: NullableFloatFieldUpdateOperationsInput | number | null
    joeValue?: NullableFloatFieldUpdateOperationsInput | number | null
    consensusValue?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type tradeAnalyzerDataCreateManyInput = {
    id?: string
    name?: string | null
    position?: string | null
    team?: string | null
    marketValue?: number | null
    myValue?: number | null
    valueDiffBetweenMyValueAndMarketValue?: number | null
    PRPScore?: number | null
    projectedNextOffseasonDynastyValue?: NullableJsonNullValueInput | InputJsonValue
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: number | null
    PNODVScore?: number | null
    RVSScore?: number | null
    jaxValue?: number | null
    travValue?: number | null
    joeValue?: number | null
    consensusValue?: number | null
  }

  export type tradeAnalyzerDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    marketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    myValue?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDiffBetweenMyValueAndMarketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    PRPScore?: NullableFloatFieldUpdateOperationsInput | number | null
    projectedNextOffseasonDynastyValue?: NullableJsonNullValueInput | InputJsonValue
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: NullableFloatFieldUpdateOperationsInput | number | null
    PNODVScore?: NullableFloatFieldUpdateOperationsInput | number | null
    RVSScore?: NullableFloatFieldUpdateOperationsInput | number | null
    jaxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    travValue?: NullableFloatFieldUpdateOperationsInput | number | null
    joeValue?: NullableFloatFieldUpdateOperationsInput | number | null
    consensusValue?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type tradeAnalyzerDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    marketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    myValue?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDiffBetweenMyValueAndMarketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    PRPScore?: NullableFloatFieldUpdateOperationsInput | number | null
    projectedNextOffseasonDynastyValue?: NullableJsonNullValueInput | InputJsonValue
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: NullableFloatFieldUpdateOperationsInput | number | null
    PNODVScore?: NullableFloatFieldUpdateOperationsInput | number | null
    RVSScore?: NullableFloatFieldUpdateOperationsInput | number | null
    jaxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    travValue?: NullableFloatFieldUpdateOperationsInput | number | null
    joeValue?: NullableFloatFieldUpdateOperationsInput | number | null
    consensusValue?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayerStatCreateInput = {
    id?: string
    playerId?: string | null
    playerName?: string | null
    playerDisplayName?: string | null
    position?: string | null
    positionGroup?: string | null
    headshotUrl?: string | null
    recentTeam?: string | null
    season?: number | null
    week?: number | null
    seasonType?: string | null
    opponentTeam?: string | null
    completions?: number | null
    attempts?: number | null
    passingYards?: number | null
    passingTds?: number | null
    interceptions?: number | null
    sacks?: number | null
    sackYards?: number | null
    sackFumbles?: number | null
    sackFumblesLost?: number | null
    passingAirYards?: number | null
    passingYardsAfterCatch?: number | null
    passingFirstDowns?: number | null
    passingEpa?: number | null
    passing2ptConversions?: number | null
    pacr?: number | null
    dakota?: number | null
    carries?: number | null
    rushingYards?: number | null
    rushingTds?: number | null
    rushingFumbles?: number | null
    rushingFumblesLost?: number | null
    rushingFirstDowns?: number | null
    rushingEpa?: number | null
    rushing2ptConversions?: number | null
    receptions?: number | null
    targets?: number | null
    receivingYards?: number | null
    receivingTds?: number | null
    receivingFumbles?: number | null
    receivingFumblesLost?: number | null
    receivingAirYards?: number | null
    receivingYardsAfterCatch?: number | null
    receivingFirstDowns?: number | null
    receivingEpa?: number | null
    receiving2ptConversions?: number | null
    racr?: number | null
    targetShare?: number | null
    airYardsShare?: number | null
    wopr?: number | null
    specialTeamsTds?: number | null
    fantasyPoints?: number | null
    fantasyPointsPpr?: number | null
  }

  export type PlayerStatUncheckedCreateInput = {
    id?: string
    playerId?: string | null
    playerName?: string | null
    playerDisplayName?: string | null
    position?: string | null
    positionGroup?: string | null
    headshotUrl?: string | null
    recentTeam?: string | null
    season?: number | null
    week?: number | null
    seasonType?: string | null
    opponentTeam?: string | null
    completions?: number | null
    attempts?: number | null
    passingYards?: number | null
    passingTds?: number | null
    interceptions?: number | null
    sacks?: number | null
    sackYards?: number | null
    sackFumbles?: number | null
    sackFumblesLost?: number | null
    passingAirYards?: number | null
    passingYardsAfterCatch?: number | null
    passingFirstDowns?: number | null
    passingEpa?: number | null
    passing2ptConversions?: number | null
    pacr?: number | null
    dakota?: number | null
    carries?: number | null
    rushingYards?: number | null
    rushingTds?: number | null
    rushingFumbles?: number | null
    rushingFumblesLost?: number | null
    rushingFirstDowns?: number | null
    rushingEpa?: number | null
    rushing2ptConversions?: number | null
    receptions?: number | null
    targets?: number | null
    receivingYards?: number | null
    receivingTds?: number | null
    receivingFumbles?: number | null
    receivingFumblesLost?: number | null
    receivingAirYards?: number | null
    receivingYardsAfterCatch?: number | null
    receivingFirstDowns?: number | null
    receivingEpa?: number | null
    receiving2ptConversions?: number | null
    racr?: number | null
    targetShare?: number | null
    airYardsShare?: number | null
    wopr?: number | null
    specialTeamsTds?: number | null
    fantasyPoints?: number | null
    fantasyPointsPpr?: number | null
  }

  export type PlayerStatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    playerDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    positionGroup?: NullableStringFieldUpdateOperationsInput | string | null
    headshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recentTeam?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableIntFieldUpdateOperationsInput | number | null
    week?: NullableIntFieldUpdateOperationsInput | number | null
    seasonType?: NullableStringFieldUpdateOperationsInput | string | null
    opponentTeam?: NullableStringFieldUpdateOperationsInput | string | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    passingYards?: NullableFloatFieldUpdateOperationsInput | number | null
    passingTds?: NullableIntFieldUpdateOperationsInput | number | null
    interceptions?: NullableIntFieldUpdateOperationsInput | number | null
    sacks?: NullableIntFieldUpdateOperationsInput | number | null
    sackYards?: NullableFloatFieldUpdateOperationsInput | number | null
    sackFumbles?: NullableIntFieldUpdateOperationsInput | number | null
    sackFumblesLost?: NullableIntFieldUpdateOperationsInput | number | null
    passingAirYards?: NullableFloatFieldUpdateOperationsInput | number | null
    passingYardsAfterCatch?: NullableFloatFieldUpdateOperationsInput | number | null
    passingFirstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    passingEpa?: NullableFloatFieldUpdateOperationsInput | number | null
    passing2ptConversions?: NullableIntFieldUpdateOperationsInput | number | null
    pacr?: NullableFloatFieldUpdateOperationsInput | number | null
    dakota?: NullableFloatFieldUpdateOperationsInput | number | null
    carries?: NullableIntFieldUpdateOperationsInput | number | null
    rushingYards?: NullableFloatFieldUpdateOperationsInput | number | null
    rushingTds?: NullableIntFieldUpdateOperationsInput | number | null
    rushingFumbles?: NullableIntFieldUpdateOperationsInput | number | null
    rushingFumblesLost?: NullableIntFieldUpdateOperationsInput | number | null
    rushingFirstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    rushingEpa?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing2ptConversions?: NullableIntFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    receivingYards?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingTds?: NullableIntFieldUpdateOperationsInput | number | null
    receivingFumbles?: NullableIntFieldUpdateOperationsInput | number | null
    receivingFumblesLost?: NullableIntFieldUpdateOperationsInput | number | null
    receivingAirYards?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingYardsAfterCatch?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingFirstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    receivingEpa?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving2ptConversions?: NullableIntFieldUpdateOperationsInput | number | null
    racr?: NullableFloatFieldUpdateOperationsInput | number | null
    targetShare?: NullableFloatFieldUpdateOperationsInput | number | null
    airYardsShare?: NullableFloatFieldUpdateOperationsInput | number | null
    wopr?: NullableFloatFieldUpdateOperationsInput | number | null
    specialTeamsTds?: NullableIntFieldUpdateOperationsInput | number | null
    fantasyPoints?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasyPointsPpr?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayerStatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    playerDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    positionGroup?: NullableStringFieldUpdateOperationsInput | string | null
    headshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recentTeam?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableIntFieldUpdateOperationsInput | number | null
    week?: NullableIntFieldUpdateOperationsInput | number | null
    seasonType?: NullableStringFieldUpdateOperationsInput | string | null
    opponentTeam?: NullableStringFieldUpdateOperationsInput | string | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    passingYards?: NullableFloatFieldUpdateOperationsInput | number | null
    passingTds?: NullableIntFieldUpdateOperationsInput | number | null
    interceptions?: NullableIntFieldUpdateOperationsInput | number | null
    sacks?: NullableIntFieldUpdateOperationsInput | number | null
    sackYards?: NullableFloatFieldUpdateOperationsInput | number | null
    sackFumbles?: NullableIntFieldUpdateOperationsInput | number | null
    sackFumblesLost?: NullableIntFieldUpdateOperationsInput | number | null
    passingAirYards?: NullableFloatFieldUpdateOperationsInput | number | null
    passingYardsAfterCatch?: NullableFloatFieldUpdateOperationsInput | number | null
    passingFirstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    passingEpa?: NullableFloatFieldUpdateOperationsInput | number | null
    passing2ptConversions?: NullableIntFieldUpdateOperationsInput | number | null
    pacr?: NullableFloatFieldUpdateOperationsInput | number | null
    dakota?: NullableFloatFieldUpdateOperationsInput | number | null
    carries?: NullableIntFieldUpdateOperationsInput | number | null
    rushingYards?: NullableFloatFieldUpdateOperationsInput | number | null
    rushingTds?: NullableIntFieldUpdateOperationsInput | number | null
    rushingFumbles?: NullableIntFieldUpdateOperationsInput | number | null
    rushingFumblesLost?: NullableIntFieldUpdateOperationsInput | number | null
    rushingFirstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    rushingEpa?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing2ptConversions?: NullableIntFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    receivingYards?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingTds?: NullableIntFieldUpdateOperationsInput | number | null
    receivingFumbles?: NullableIntFieldUpdateOperationsInput | number | null
    receivingFumblesLost?: NullableIntFieldUpdateOperationsInput | number | null
    receivingAirYards?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingYardsAfterCatch?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingFirstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    receivingEpa?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving2ptConversions?: NullableIntFieldUpdateOperationsInput | number | null
    racr?: NullableFloatFieldUpdateOperationsInput | number | null
    targetShare?: NullableFloatFieldUpdateOperationsInput | number | null
    airYardsShare?: NullableFloatFieldUpdateOperationsInput | number | null
    wopr?: NullableFloatFieldUpdateOperationsInput | number | null
    specialTeamsTds?: NullableIntFieldUpdateOperationsInput | number | null
    fantasyPoints?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasyPointsPpr?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayerStatCreateManyInput = {
    id?: string
    playerId?: string | null
    playerName?: string | null
    playerDisplayName?: string | null
    position?: string | null
    positionGroup?: string | null
    headshotUrl?: string | null
    recentTeam?: string | null
    season?: number | null
    week?: number | null
    seasonType?: string | null
    opponentTeam?: string | null
    completions?: number | null
    attempts?: number | null
    passingYards?: number | null
    passingTds?: number | null
    interceptions?: number | null
    sacks?: number | null
    sackYards?: number | null
    sackFumbles?: number | null
    sackFumblesLost?: number | null
    passingAirYards?: number | null
    passingYardsAfterCatch?: number | null
    passingFirstDowns?: number | null
    passingEpa?: number | null
    passing2ptConversions?: number | null
    pacr?: number | null
    dakota?: number | null
    carries?: number | null
    rushingYards?: number | null
    rushingTds?: number | null
    rushingFumbles?: number | null
    rushingFumblesLost?: number | null
    rushingFirstDowns?: number | null
    rushingEpa?: number | null
    rushing2ptConversions?: number | null
    receptions?: number | null
    targets?: number | null
    receivingYards?: number | null
    receivingTds?: number | null
    receivingFumbles?: number | null
    receivingFumblesLost?: number | null
    receivingAirYards?: number | null
    receivingYardsAfterCatch?: number | null
    receivingFirstDowns?: number | null
    receivingEpa?: number | null
    receiving2ptConversions?: number | null
    racr?: number | null
    targetShare?: number | null
    airYardsShare?: number | null
    wopr?: number | null
    specialTeamsTds?: number | null
    fantasyPoints?: number | null
    fantasyPointsPpr?: number | null
  }

  export type PlayerStatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    playerDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    positionGroup?: NullableStringFieldUpdateOperationsInput | string | null
    headshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recentTeam?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableIntFieldUpdateOperationsInput | number | null
    week?: NullableIntFieldUpdateOperationsInput | number | null
    seasonType?: NullableStringFieldUpdateOperationsInput | string | null
    opponentTeam?: NullableStringFieldUpdateOperationsInput | string | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    passingYards?: NullableFloatFieldUpdateOperationsInput | number | null
    passingTds?: NullableIntFieldUpdateOperationsInput | number | null
    interceptions?: NullableIntFieldUpdateOperationsInput | number | null
    sacks?: NullableIntFieldUpdateOperationsInput | number | null
    sackYards?: NullableFloatFieldUpdateOperationsInput | number | null
    sackFumbles?: NullableIntFieldUpdateOperationsInput | number | null
    sackFumblesLost?: NullableIntFieldUpdateOperationsInput | number | null
    passingAirYards?: NullableFloatFieldUpdateOperationsInput | number | null
    passingYardsAfterCatch?: NullableFloatFieldUpdateOperationsInput | number | null
    passingFirstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    passingEpa?: NullableFloatFieldUpdateOperationsInput | number | null
    passing2ptConversions?: NullableIntFieldUpdateOperationsInput | number | null
    pacr?: NullableFloatFieldUpdateOperationsInput | number | null
    dakota?: NullableFloatFieldUpdateOperationsInput | number | null
    carries?: NullableIntFieldUpdateOperationsInput | number | null
    rushingYards?: NullableFloatFieldUpdateOperationsInput | number | null
    rushingTds?: NullableIntFieldUpdateOperationsInput | number | null
    rushingFumbles?: NullableIntFieldUpdateOperationsInput | number | null
    rushingFumblesLost?: NullableIntFieldUpdateOperationsInput | number | null
    rushingFirstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    rushingEpa?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing2ptConversions?: NullableIntFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    receivingYards?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingTds?: NullableIntFieldUpdateOperationsInput | number | null
    receivingFumbles?: NullableIntFieldUpdateOperationsInput | number | null
    receivingFumblesLost?: NullableIntFieldUpdateOperationsInput | number | null
    receivingAirYards?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingYardsAfterCatch?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingFirstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    receivingEpa?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving2ptConversions?: NullableIntFieldUpdateOperationsInput | number | null
    racr?: NullableFloatFieldUpdateOperationsInput | number | null
    targetShare?: NullableFloatFieldUpdateOperationsInput | number | null
    airYardsShare?: NullableFloatFieldUpdateOperationsInput | number | null
    wopr?: NullableFloatFieldUpdateOperationsInput | number | null
    specialTeamsTds?: NullableIntFieldUpdateOperationsInput | number | null
    fantasyPoints?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasyPointsPpr?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayerStatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    playerDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    positionGroup?: NullableStringFieldUpdateOperationsInput | string | null
    headshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recentTeam?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableIntFieldUpdateOperationsInput | number | null
    week?: NullableIntFieldUpdateOperationsInput | number | null
    seasonType?: NullableStringFieldUpdateOperationsInput | string | null
    opponentTeam?: NullableStringFieldUpdateOperationsInput | string | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    passingYards?: NullableFloatFieldUpdateOperationsInput | number | null
    passingTds?: NullableIntFieldUpdateOperationsInput | number | null
    interceptions?: NullableIntFieldUpdateOperationsInput | number | null
    sacks?: NullableIntFieldUpdateOperationsInput | number | null
    sackYards?: NullableFloatFieldUpdateOperationsInput | number | null
    sackFumbles?: NullableIntFieldUpdateOperationsInput | number | null
    sackFumblesLost?: NullableIntFieldUpdateOperationsInput | number | null
    passingAirYards?: NullableFloatFieldUpdateOperationsInput | number | null
    passingYardsAfterCatch?: NullableFloatFieldUpdateOperationsInput | number | null
    passingFirstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    passingEpa?: NullableFloatFieldUpdateOperationsInput | number | null
    passing2ptConversions?: NullableIntFieldUpdateOperationsInput | number | null
    pacr?: NullableFloatFieldUpdateOperationsInput | number | null
    dakota?: NullableFloatFieldUpdateOperationsInput | number | null
    carries?: NullableIntFieldUpdateOperationsInput | number | null
    rushingYards?: NullableFloatFieldUpdateOperationsInput | number | null
    rushingTds?: NullableIntFieldUpdateOperationsInput | number | null
    rushingFumbles?: NullableIntFieldUpdateOperationsInput | number | null
    rushingFumblesLost?: NullableIntFieldUpdateOperationsInput | number | null
    rushingFirstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    rushingEpa?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing2ptConversions?: NullableIntFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    receivingYards?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingTds?: NullableIntFieldUpdateOperationsInput | number | null
    receivingFumbles?: NullableIntFieldUpdateOperationsInput | number | null
    receivingFumblesLost?: NullableIntFieldUpdateOperationsInput | number | null
    receivingAirYards?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingYardsAfterCatch?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingFirstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    receivingEpa?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving2ptConversions?: NullableIntFieldUpdateOperationsInput | number | null
    racr?: NullableFloatFieldUpdateOperationsInput | number | null
    targetShare?: NullableFloatFieldUpdateOperationsInput | number | null
    airYardsShare?: NullableFloatFieldUpdateOperationsInput | number | null
    wopr?: NullableFloatFieldUpdateOperationsInput | number | null
    specialTeamsTds?: NullableIntFieldUpdateOperationsInput | number | null
    fantasyPoints?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasyPointsPpr?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ReceivingStatCreateInput = {
    id?: string
    player?: string | null
    playerId?: string | null
    position?: string | null
    teamName?: string | null
    playerGameCount?: number | null
    avgDepthOfTarget?: number | null
    avoidedTackles?: number | null
    caughtPercent?: number | null
    contestedCatchRate?: number | null
    contestedReceptions?: number | null
    contestedTargets?: number | null
    declinedPenalties?: number | null
    dropRate?: number | null
    drops?: number | null
    firstDowns?: number | null
    franchiseId?: number | null
    fumbles?: number | null
    gradesHandsDrop?: number | null
    gradesHandsFumble?: number | null
    gradesOffense?: number | null
    gradesPassBlock?: number | null
    gradesPassRoute?: number | null
    inlineRate?: number | null
    inlineSnaps?: number | null
    interceptions?: number | null
    longest?: number | null
    passBlockRate?: number | null
    passBlocks?: number | null
    passPlays?: number | null
    penalties?: number | null
    receptions?: number | null
    routeRate?: number | null
    routes?: number | null
    slotRate?: number | null
    slotSnaps?: number | null
    targetedQbRating?: number | null
    targets?: number | null
    touchdowns?: number | null
    wideRate?: number | null
    wideSnaps?: number | null
    yards?: number | null
    yardsAfterCatch?: number | null
    yardsAfterCatchPerReception?: number | null
    yardsPerReception?: number | null
    yprr?: number | null
  }

  export type ReceivingStatUncheckedCreateInput = {
    id?: string
    player?: string | null
    playerId?: string | null
    position?: string | null
    teamName?: string | null
    playerGameCount?: number | null
    avgDepthOfTarget?: number | null
    avoidedTackles?: number | null
    caughtPercent?: number | null
    contestedCatchRate?: number | null
    contestedReceptions?: number | null
    contestedTargets?: number | null
    declinedPenalties?: number | null
    dropRate?: number | null
    drops?: number | null
    firstDowns?: number | null
    franchiseId?: number | null
    fumbles?: number | null
    gradesHandsDrop?: number | null
    gradesHandsFumble?: number | null
    gradesOffense?: number | null
    gradesPassBlock?: number | null
    gradesPassRoute?: number | null
    inlineRate?: number | null
    inlineSnaps?: number | null
    interceptions?: number | null
    longest?: number | null
    passBlockRate?: number | null
    passBlocks?: number | null
    passPlays?: number | null
    penalties?: number | null
    receptions?: number | null
    routeRate?: number | null
    routes?: number | null
    slotRate?: number | null
    slotSnaps?: number | null
    targetedQbRating?: number | null
    targets?: number | null
    touchdowns?: number | null
    wideRate?: number | null
    wideSnaps?: number | null
    yards?: number | null
    yardsAfterCatch?: number | null
    yardsAfterCatchPerReception?: number | null
    yardsPerReception?: number | null
    yprr?: number | null
  }

  export type ReceivingStatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    player?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    playerGameCount?: NullableIntFieldUpdateOperationsInput | number | null
    avgDepthOfTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    avoidedTackles?: NullableIntFieldUpdateOperationsInput | number | null
    caughtPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    contestedCatchRate?: NullableFloatFieldUpdateOperationsInput | number | null
    contestedReceptions?: NullableIntFieldUpdateOperationsInput | number | null
    contestedTargets?: NullableIntFieldUpdateOperationsInput | number | null
    declinedPenalties?: NullableIntFieldUpdateOperationsInput | number | null
    dropRate?: NullableFloatFieldUpdateOperationsInput | number | null
    drops?: NullableIntFieldUpdateOperationsInput | number | null
    firstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    franchiseId?: NullableIntFieldUpdateOperationsInput | number | null
    fumbles?: NullableIntFieldUpdateOperationsInput | number | null
    gradesHandsDrop?: NullableFloatFieldUpdateOperationsInput | number | null
    gradesHandsFumble?: NullableFloatFieldUpdateOperationsInput | number | null
    gradesOffense?: NullableFloatFieldUpdateOperationsInput | number | null
    gradesPassBlock?: NullableFloatFieldUpdateOperationsInput | number | null
    gradesPassRoute?: NullableFloatFieldUpdateOperationsInput | number | null
    inlineRate?: NullableFloatFieldUpdateOperationsInput | number | null
    inlineSnaps?: NullableIntFieldUpdateOperationsInput | number | null
    interceptions?: NullableIntFieldUpdateOperationsInput | number | null
    longest?: NullableIntFieldUpdateOperationsInput | number | null
    passBlockRate?: NullableFloatFieldUpdateOperationsInput | number | null
    passBlocks?: NullableIntFieldUpdateOperationsInput | number | null
    passPlays?: NullableIntFieldUpdateOperationsInput | number | null
    penalties?: NullableIntFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    routeRate?: NullableFloatFieldUpdateOperationsInput | number | null
    routes?: NullableIntFieldUpdateOperationsInput | number | null
    slotRate?: NullableFloatFieldUpdateOperationsInput | number | null
    slotSnaps?: NullableIntFieldUpdateOperationsInput | number | null
    targetedQbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    touchdowns?: NullableIntFieldUpdateOperationsInput | number | null
    wideRate?: NullableFloatFieldUpdateOperationsInput | number | null
    wideSnaps?: NullableIntFieldUpdateOperationsInput | number | null
    yards?: NullableIntFieldUpdateOperationsInput | number | null
    yardsAfterCatch?: NullableIntFieldUpdateOperationsInput | number | null
    yardsAfterCatchPerReception?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerReception?: NullableFloatFieldUpdateOperationsInput | number | null
    yprr?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ReceivingStatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    player?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    playerGameCount?: NullableIntFieldUpdateOperationsInput | number | null
    avgDepthOfTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    avoidedTackles?: NullableIntFieldUpdateOperationsInput | number | null
    caughtPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    contestedCatchRate?: NullableFloatFieldUpdateOperationsInput | number | null
    contestedReceptions?: NullableIntFieldUpdateOperationsInput | number | null
    contestedTargets?: NullableIntFieldUpdateOperationsInput | number | null
    declinedPenalties?: NullableIntFieldUpdateOperationsInput | number | null
    dropRate?: NullableFloatFieldUpdateOperationsInput | number | null
    drops?: NullableIntFieldUpdateOperationsInput | number | null
    firstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    franchiseId?: NullableIntFieldUpdateOperationsInput | number | null
    fumbles?: NullableIntFieldUpdateOperationsInput | number | null
    gradesHandsDrop?: NullableFloatFieldUpdateOperationsInput | number | null
    gradesHandsFumble?: NullableFloatFieldUpdateOperationsInput | number | null
    gradesOffense?: NullableFloatFieldUpdateOperationsInput | number | null
    gradesPassBlock?: NullableFloatFieldUpdateOperationsInput | number | null
    gradesPassRoute?: NullableFloatFieldUpdateOperationsInput | number | null
    inlineRate?: NullableFloatFieldUpdateOperationsInput | number | null
    inlineSnaps?: NullableIntFieldUpdateOperationsInput | number | null
    interceptions?: NullableIntFieldUpdateOperationsInput | number | null
    longest?: NullableIntFieldUpdateOperationsInput | number | null
    passBlockRate?: NullableFloatFieldUpdateOperationsInput | number | null
    passBlocks?: NullableIntFieldUpdateOperationsInput | number | null
    passPlays?: NullableIntFieldUpdateOperationsInput | number | null
    penalties?: NullableIntFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    routeRate?: NullableFloatFieldUpdateOperationsInput | number | null
    routes?: NullableIntFieldUpdateOperationsInput | number | null
    slotRate?: NullableFloatFieldUpdateOperationsInput | number | null
    slotSnaps?: NullableIntFieldUpdateOperationsInput | number | null
    targetedQbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    touchdowns?: NullableIntFieldUpdateOperationsInput | number | null
    wideRate?: NullableFloatFieldUpdateOperationsInput | number | null
    wideSnaps?: NullableIntFieldUpdateOperationsInput | number | null
    yards?: NullableIntFieldUpdateOperationsInput | number | null
    yardsAfterCatch?: NullableIntFieldUpdateOperationsInput | number | null
    yardsAfterCatchPerReception?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerReception?: NullableFloatFieldUpdateOperationsInput | number | null
    yprr?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ReceivingStatCreateManyInput = {
    id?: string
    player?: string | null
    playerId?: string | null
    position?: string | null
    teamName?: string | null
    playerGameCount?: number | null
    avgDepthOfTarget?: number | null
    avoidedTackles?: number | null
    caughtPercent?: number | null
    contestedCatchRate?: number | null
    contestedReceptions?: number | null
    contestedTargets?: number | null
    declinedPenalties?: number | null
    dropRate?: number | null
    drops?: number | null
    firstDowns?: number | null
    franchiseId?: number | null
    fumbles?: number | null
    gradesHandsDrop?: number | null
    gradesHandsFumble?: number | null
    gradesOffense?: number | null
    gradesPassBlock?: number | null
    gradesPassRoute?: number | null
    inlineRate?: number | null
    inlineSnaps?: number | null
    interceptions?: number | null
    longest?: number | null
    passBlockRate?: number | null
    passBlocks?: number | null
    passPlays?: number | null
    penalties?: number | null
    receptions?: number | null
    routeRate?: number | null
    routes?: number | null
    slotRate?: number | null
    slotSnaps?: number | null
    targetedQbRating?: number | null
    targets?: number | null
    touchdowns?: number | null
    wideRate?: number | null
    wideSnaps?: number | null
    yards?: number | null
    yardsAfterCatch?: number | null
    yardsAfterCatchPerReception?: number | null
    yardsPerReception?: number | null
    yprr?: number | null
  }

  export type ReceivingStatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    player?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    playerGameCount?: NullableIntFieldUpdateOperationsInput | number | null
    avgDepthOfTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    avoidedTackles?: NullableIntFieldUpdateOperationsInput | number | null
    caughtPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    contestedCatchRate?: NullableFloatFieldUpdateOperationsInput | number | null
    contestedReceptions?: NullableIntFieldUpdateOperationsInput | number | null
    contestedTargets?: NullableIntFieldUpdateOperationsInput | number | null
    declinedPenalties?: NullableIntFieldUpdateOperationsInput | number | null
    dropRate?: NullableFloatFieldUpdateOperationsInput | number | null
    drops?: NullableIntFieldUpdateOperationsInput | number | null
    firstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    franchiseId?: NullableIntFieldUpdateOperationsInput | number | null
    fumbles?: NullableIntFieldUpdateOperationsInput | number | null
    gradesHandsDrop?: NullableFloatFieldUpdateOperationsInput | number | null
    gradesHandsFumble?: NullableFloatFieldUpdateOperationsInput | number | null
    gradesOffense?: NullableFloatFieldUpdateOperationsInput | number | null
    gradesPassBlock?: NullableFloatFieldUpdateOperationsInput | number | null
    gradesPassRoute?: NullableFloatFieldUpdateOperationsInput | number | null
    inlineRate?: NullableFloatFieldUpdateOperationsInput | number | null
    inlineSnaps?: NullableIntFieldUpdateOperationsInput | number | null
    interceptions?: NullableIntFieldUpdateOperationsInput | number | null
    longest?: NullableIntFieldUpdateOperationsInput | number | null
    passBlockRate?: NullableFloatFieldUpdateOperationsInput | number | null
    passBlocks?: NullableIntFieldUpdateOperationsInput | number | null
    passPlays?: NullableIntFieldUpdateOperationsInput | number | null
    penalties?: NullableIntFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    routeRate?: NullableFloatFieldUpdateOperationsInput | number | null
    routes?: NullableIntFieldUpdateOperationsInput | number | null
    slotRate?: NullableFloatFieldUpdateOperationsInput | number | null
    slotSnaps?: NullableIntFieldUpdateOperationsInput | number | null
    targetedQbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    touchdowns?: NullableIntFieldUpdateOperationsInput | number | null
    wideRate?: NullableFloatFieldUpdateOperationsInput | number | null
    wideSnaps?: NullableIntFieldUpdateOperationsInput | number | null
    yards?: NullableIntFieldUpdateOperationsInput | number | null
    yardsAfterCatch?: NullableIntFieldUpdateOperationsInput | number | null
    yardsAfterCatchPerReception?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerReception?: NullableFloatFieldUpdateOperationsInput | number | null
    yprr?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ReceivingStatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    player?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    playerGameCount?: NullableIntFieldUpdateOperationsInput | number | null
    avgDepthOfTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    avoidedTackles?: NullableIntFieldUpdateOperationsInput | number | null
    caughtPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    contestedCatchRate?: NullableFloatFieldUpdateOperationsInput | number | null
    contestedReceptions?: NullableIntFieldUpdateOperationsInput | number | null
    contestedTargets?: NullableIntFieldUpdateOperationsInput | number | null
    declinedPenalties?: NullableIntFieldUpdateOperationsInput | number | null
    dropRate?: NullableFloatFieldUpdateOperationsInput | number | null
    drops?: NullableIntFieldUpdateOperationsInput | number | null
    firstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    franchiseId?: NullableIntFieldUpdateOperationsInput | number | null
    fumbles?: NullableIntFieldUpdateOperationsInput | number | null
    gradesHandsDrop?: NullableFloatFieldUpdateOperationsInput | number | null
    gradesHandsFumble?: NullableFloatFieldUpdateOperationsInput | number | null
    gradesOffense?: NullableFloatFieldUpdateOperationsInput | number | null
    gradesPassBlock?: NullableFloatFieldUpdateOperationsInput | number | null
    gradesPassRoute?: NullableFloatFieldUpdateOperationsInput | number | null
    inlineRate?: NullableFloatFieldUpdateOperationsInput | number | null
    inlineSnaps?: NullableIntFieldUpdateOperationsInput | number | null
    interceptions?: NullableIntFieldUpdateOperationsInput | number | null
    longest?: NullableIntFieldUpdateOperationsInput | number | null
    passBlockRate?: NullableFloatFieldUpdateOperationsInput | number | null
    passBlocks?: NullableIntFieldUpdateOperationsInput | number | null
    passPlays?: NullableIntFieldUpdateOperationsInput | number | null
    penalties?: NullableIntFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    routeRate?: NullableFloatFieldUpdateOperationsInput | number | null
    routes?: NullableIntFieldUpdateOperationsInput | number | null
    slotRate?: NullableFloatFieldUpdateOperationsInput | number | null
    slotSnaps?: NullableIntFieldUpdateOperationsInput | number | null
    targetedQbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    touchdowns?: NullableIntFieldUpdateOperationsInput | number | null
    wideRate?: NullableFloatFieldUpdateOperationsInput | number | null
    wideSnaps?: NullableIntFieldUpdateOperationsInput | number | null
    yards?: NullableIntFieldUpdateOperationsInput | number | null
    yardsAfterCatch?: NullableIntFieldUpdateOperationsInput | number | null
    yardsAfterCatchPerReception?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerReception?: NullableFloatFieldUpdateOperationsInput | number | null
    yprr?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayerSeasonCreateInput = {
    player_id: string
    player_name: string
    season: number
    games_played: number
    position?: string | null
    completions_total?: number | null
    attempts_total?: number | null
    passing_yards_total?: number | null
    passing_tds_total?: number | null
    interceptions_total?: number | null
    passing_first_downs_total?: number | null
    carries_total?: number | null
    rushing_yards_total?: number | null
    rushing_tds_total?: number | null
    rushing_fumbles_total?: number | null
    rushing_fumbles_lost_total?: number | null
    rushing_first_downs_total?: number | null
    targets_total?: number | null
    receiving_yards_total?: number | null
    receiving_tds_total?: number | null
    receiving_air_yards_total?: number | null
    receiving_yards_after_catch_total?: number | null
    receiving_first_downs_total?: number | null
    fantasy_points_total?: number | null
    completions_avg?: number | null
    attempts_avg?: number | null
    passing_yards_avg?: number | null
    passing_tds_avg?: number | null
    interceptions_avg?: number | null
    passing_air_yards_avg?: number | null
    passing_yards_after_catch_avg?: number | null
    passing_first_downs_avg?: number | null
    carries_avg?: number | null
    rushing_yards_avg?: number | null
    rushing_tds_avg?: number | null
    rushing_fumbles_avg?: number | null
    rushing_fumbles_lost_avg?: number | null
    rushing_first_downs_avg?: number | null
    rushing_epa_avg?: number | null
    receptions_avg?: number | null
    targets_avg?: number | null
    receiving_yards_avg?: number | null
    receiving_tds_avg?: number | null
    receiving_air_yards_avg?: number | null
    receiving_yards_after_catch_avg?: number | null
    receiving_first_downs_avg?: number | null
    receiving_epa_avg?: number | null
    racr_avg?: number | null
    target_share_avg?: number | null
    air_yards_share_avg?: number | null
    wopr_avg?: number | null
    fantasy_points_avg?: number | null
    fantasy_points_ppr_avg?: number | null
    YPRR?: number | null
    routes?: number | null
    routes_per_game?: number | null
    TPRR?: number | null
    firstDPRR?: number | null
  }

  export type PlayerSeasonUncheckedCreateInput = {
    player_id: string
    player_name: string
    season: number
    games_played: number
    position?: string | null
    completions_total?: number | null
    attempts_total?: number | null
    passing_yards_total?: number | null
    passing_tds_total?: number | null
    interceptions_total?: number | null
    passing_first_downs_total?: number | null
    carries_total?: number | null
    rushing_yards_total?: number | null
    rushing_tds_total?: number | null
    rushing_fumbles_total?: number | null
    rushing_fumbles_lost_total?: number | null
    rushing_first_downs_total?: number | null
    targets_total?: number | null
    receiving_yards_total?: number | null
    receiving_tds_total?: number | null
    receiving_air_yards_total?: number | null
    receiving_yards_after_catch_total?: number | null
    receiving_first_downs_total?: number | null
    fantasy_points_total?: number | null
    completions_avg?: number | null
    attempts_avg?: number | null
    passing_yards_avg?: number | null
    passing_tds_avg?: number | null
    interceptions_avg?: number | null
    passing_air_yards_avg?: number | null
    passing_yards_after_catch_avg?: number | null
    passing_first_downs_avg?: number | null
    carries_avg?: number | null
    rushing_yards_avg?: number | null
    rushing_tds_avg?: number | null
    rushing_fumbles_avg?: number | null
    rushing_fumbles_lost_avg?: number | null
    rushing_first_downs_avg?: number | null
    rushing_epa_avg?: number | null
    receptions_avg?: number | null
    targets_avg?: number | null
    receiving_yards_avg?: number | null
    receiving_tds_avg?: number | null
    receiving_air_yards_avg?: number | null
    receiving_yards_after_catch_avg?: number | null
    receiving_first_downs_avg?: number | null
    receiving_epa_avg?: number | null
    racr_avg?: number | null
    target_share_avg?: number | null
    air_yards_share_avg?: number | null
    wopr_avg?: number | null
    fantasy_points_avg?: number | null
    fantasy_points_ppr_avg?: number | null
    YPRR?: number | null
    routes?: number | null
    routes_per_game?: number | null
    TPRR?: number | null
    firstDPRR?: number | null
  }

  export type PlayerSeasonUpdateInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    player_name?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    games_played?: IntFieldUpdateOperationsInput | number
    position?: NullableStringFieldUpdateOperationsInput | string | null
    completions_total?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts_total?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_tds_total?: NullableFloatFieldUpdateOperationsInput | number | null
    interceptions_total?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_first_downs_total?: NullableFloatFieldUpdateOperationsInput | number | null
    carries_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_tds_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_fumbles_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_fumbles_lost_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_first_downs_total?: NullableFloatFieldUpdateOperationsInput | number | null
    targets_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_tds_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_air_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_after_catch_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_first_downs_total?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasy_points_total?: NullableFloatFieldUpdateOperationsInput | number | null
    completions_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_tds_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    interceptions_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_air_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_yards_after_catch_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_first_downs_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    carries_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_tds_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_fumbles_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_fumbles_lost_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_first_downs_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_epa_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receptions_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    targets_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_tds_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_air_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_after_catch_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_first_downs_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_epa_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    racr_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    target_share_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    air_yards_share_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    wopr_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasy_points_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasy_points_ppr_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    YPRR?: NullableFloatFieldUpdateOperationsInput | number | null
    routes?: NullableFloatFieldUpdateOperationsInput | number | null
    routes_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    TPRR?: NullableFloatFieldUpdateOperationsInput | number | null
    firstDPRR?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayerSeasonUncheckedUpdateInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    player_name?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    games_played?: IntFieldUpdateOperationsInput | number
    position?: NullableStringFieldUpdateOperationsInput | string | null
    completions_total?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts_total?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_tds_total?: NullableFloatFieldUpdateOperationsInput | number | null
    interceptions_total?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_first_downs_total?: NullableFloatFieldUpdateOperationsInput | number | null
    carries_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_tds_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_fumbles_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_fumbles_lost_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_first_downs_total?: NullableFloatFieldUpdateOperationsInput | number | null
    targets_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_tds_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_air_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_after_catch_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_first_downs_total?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasy_points_total?: NullableFloatFieldUpdateOperationsInput | number | null
    completions_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_tds_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    interceptions_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_air_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_yards_after_catch_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_first_downs_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    carries_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_tds_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_fumbles_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_fumbles_lost_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_first_downs_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_epa_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receptions_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    targets_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_tds_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_air_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_after_catch_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_first_downs_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_epa_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    racr_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    target_share_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    air_yards_share_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    wopr_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasy_points_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasy_points_ppr_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    YPRR?: NullableFloatFieldUpdateOperationsInput | number | null
    routes?: NullableFloatFieldUpdateOperationsInput | number | null
    routes_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    TPRR?: NullableFloatFieldUpdateOperationsInput | number | null
    firstDPRR?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayerSeasonCreateManyInput = {
    player_id: string
    player_name: string
    season: number
    games_played: number
    position?: string | null
    completions_total?: number | null
    attempts_total?: number | null
    passing_yards_total?: number | null
    passing_tds_total?: number | null
    interceptions_total?: number | null
    passing_first_downs_total?: number | null
    carries_total?: number | null
    rushing_yards_total?: number | null
    rushing_tds_total?: number | null
    rushing_fumbles_total?: number | null
    rushing_fumbles_lost_total?: number | null
    rushing_first_downs_total?: number | null
    targets_total?: number | null
    receiving_yards_total?: number | null
    receiving_tds_total?: number | null
    receiving_air_yards_total?: number | null
    receiving_yards_after_catch_total?: number | null
    receiving_first_downs_total?: number | null
    fantasy_points_total?: number | null
    completions_avg?: number | null
    attempts_avg?: number | null
    passing_yards_avg?: number | null
    passing_tds_avg?: number | null
    interceptions_avg?: number | null
    passing_air_yards_avg?: number | null
    passing_yards_after_catch_avg?: number | null
    passing_first_downs_avg?: number | null
    carries_avg?: number | null
    rushing_yards_avg?: number | null
    rushing_tds_avg?: number | null
    rushing_fumbles_avg?: number | null
    rushing_fumbles_lost_avg?: number | null
    rushing_first_downs_avg?: number | null
    rushing_epa_avg?: number | null
    receptions_avg?: number | null
    targets_avg?: number | null
    receiving_yards_avg?: number | null
    receiving_tds_avg?: number | null
    receiving_air_yards_avg?: number | null
    receiving_yards_after_catch_avg?: number | null
    receiving_first_downs_avg?: number | null
    receiving_epa_avg?: number | null
    racr_avg?: number | null
    target_share_avg?: number | null
    air_yards_share_avg?: number | null
    wopr_avg?: number | null
    fantasy_points_avg?: number | null
    fantasy_points_ppr_avg?: number | null
    YPRR?: number | null
    routes?: number | null
    routes_per_game?: number | null
    TPRR?: number | null
    firstDPRR?: number | null
  }

  export type PlayerSeasonUpdateManyMutationInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    player_name?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    games_played?: IntFieldUpdateOperationsInput | number
    position?: NullableStringFieldUpdateOperationsInput | string | null
    completions_total?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts_total?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_tds_total?: NullableFloatFieldUpdateOperationsInput | number | null
    interceptions_total?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_first_downs_total?: NullableFloatFieldUpdateOperationsInput | number | null
    carries_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_tds_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_fumbles_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_fumbles_lost_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_first_downs_total?: NullableFloatFieldUpdateOperationsInput | number | null
    targets_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_tds_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_air_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_after_catch_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_first_downs_total?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasy_points_total?: NullableFloatFieldUpdateOperationsInput | number | null
    completions_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_tds_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    interceptions_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_air_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_yards_after_catch_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_first_downs_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    carries_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_tds_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_fumbles_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_fumbles_lost_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_first_downs_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_epa_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receptions_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    targets_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_tds_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_air_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_after_catch_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_first_downs_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_epa_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    racr_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    target_share_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    air_yards_share_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    wopr_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasy_points_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasy_points_ppr_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    YPRR?: NullableFloatFieldUpdateOperationsInput | number | null
    routes?: NullableFloatFieldUpdateOperationsInput | number | null
    routes_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    TPRR?: NullableFloatFieldUpdateOperationsInput | number | null
    firstDPRR?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayerSeasonUncheckedUpdateManyInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    player_name?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    games_played?: IntFieldUpdateOperationsInput | number
    position?: NullableStringFieldUpdateOperationsInput | string | null
    completions_total?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts_total?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_tds_total?: NullableFloatFieldUpdateOperationsInput | number | null
    interceptions_total?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_first_downs_total?: NullableFloatFieldUpdateOperationsInput | number | null
    carries_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_tds_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_fumbles_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_fumbles_lost_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_first_downs_total?: NullableFloatFieldUpdateOperationsInput | number | null
    targets_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_tds_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_air_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_after_catch_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_first_downs_total?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasy_points_total?: NullableFloatFieldUpdateOperationsInput | number | null
    completions_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_tds_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    interceptions_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_air_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_yards_after_catch_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_first_downs_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    carries_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_tds_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_fumbles_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_fumbles_lost_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_first_downs_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_epa_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receptions_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    targets_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_tds_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_air_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_after_catch_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_first_downs_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_epa_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    racr_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    target_share_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    air_yards_share_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    wopr_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasy_points_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasy_points_ppr_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    YPRR?: NullableFloatFieldUpdateOperationsInput | number | null
    routes?: NullableFloatFieldUpdateOperationsInput | number | null
    routes_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    TPRR?: NullableFloatFieldUpdateOperationsInput | number | null
    firstDPRR?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tradeAnalyzerDataCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    team?: SortOrder
    marketValue?: SortOrder
    myValue?: SortOrder
    valueDiffBetweenMyValueAndMarketValue?: SortOrder
    PRPScore?: SortOrder
    projectedNextOffseasonDynastyValue?: SortOrder
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: SortOrder
    PNODVScore?: SortOrder
    RVSScore?: SortOrder
    jaxValue?: SortOrder
    travValue?: SortOrder
    joeValue?: SortOrder
    consensusValue?: SortOrder
  }

  export type tradeAnalyzerDataAvgOrderByAggregateInput = {
    marketValue?: SortOrder
    myValue?: SortOrder
    valueDiffBetweenMyValueAndMarketValue?: SortOrder
    PRPScore?: SortOrder
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: SortOrder
    PNODVScore?: SortOrder
    RVSScore?: SortOrder
    jaxValue?: SortOrder
    travValue?: SortOrder
    joeValue?: SortOrder
    consensusValue?: SortOrder
  }

  export type tradeAnalyzerDataMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    team?: SortOrder
    marketValue?: SortOrder
    myValue?: SortOrder
    valueDiffBetweenMyValueAndMarketValue?: SortOrder
    PRPScore?: SortOrder
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: SortOrder
    PNODVScore?: SortOrder
    RVSScore?: SortOrder
    jaxValue?: SortOrder
    travValue?: SortOrder
    joeValue?: SortOrder
    consensusValue?: SortOrder
  }

  export type tradeAnalyzerDataMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    team?: SortOrder
    marketValue?: SortOrder
    myValue?: SortOrder
    valueDiffBetweenMyValueAndMarketValue?: SortOrder
    PRPScore?: SortOrder
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: SortOrder
    PNODVScore?: SortOrder
    RVSScore?: SortOrder
    jaxValue?: SortOrder
    travValue?: SortOrder
    joeValue?: SortOrder
    consensusValue?: SortOrder
  }

  export type tradeAnalyzerDataSumOrderByAggregateInput = {
    marketValue?: SortOrder
    myValue?: SortOrder
    valueDiffBetweenMyValueAndMarketValue?: SortOrder
    PRPScore?: SortOrder
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: SortOrder
    PNODVScore?: SortOrder
    RVSScore?: SortOrder
    jaxValue?: SortOrder
    travValue?: SortOrder
    joeValue?: SortOrder
    consensusValue?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PlayerStatCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    playerName?: SortOrder
    playerDisplayName?: SortOrder
    position?: SortOrder
    positionGroup?: SortOrder
    headshotUrl?: SortOrder
    recentTeam?: SortOrder
    season?: SortOrder
    week?: SortOrder
    seasonType?: SortOrder
    opponentTeam?: SortOrder
    completions?: SortOrder
    attempts?: SortOrder
    passingYards?: SortOrder
    passingTds?: SortOrder
    interceptions?: SortOrder
    sacks?: SortOrder
    sackYards?: SortOrder
    sackFumbles?: SortOrder
    sackFumblesLost?: SortOrder
    passingAirYards?: SortOrder
    passingYardsAfterCatch?: SortOrder
    passingFirstDowns?: SortOrder
    passingEpa?: SortOrder
    passing2ptConversions?: SortOrder
    pacr?: SortOrder
    dakota?: SortOrder
    carries?: SortOrder
    rushingYards?: SortOrder
    rushingTds?: SortOrder
    rushingFumbles?: SortOrder
    rushingFumblesLost?: SortOrder
    rushingFirstDowns?: SortOrder
    rushingEpa?: SortOrder
    rushing2ptConversions?: SortOrder
    receptions?: SortOrder
    targets?: SortOrder
    receivingYards?: SortOrder
    receivingTds?: SortOrder
    receivingFumbles?: SortOrder
    receivingFumblesLost?: SortOrder
    receivingAirYards?: SortOrder
    receivingYardsAfterCatch?: SortOrder
    receivingFirstDowns?: SortOrder
    receivingEpa?: SortOrder
    receiving2ptConversions?: SortOrder
    racr?: SortOrder
    targetShare?: SortOrder
    airYardsShare?: SortOrder
    wopr?: SortOrder
    specialTeamsTds?: SortOrder
    fantasyPoints?: SortOrder
    fantasyPointsPpr?: SortOrder
  }

  export type PlayerStatAvgOrderByAggregateInput = {
    season?: SortOrder
    week?: SortOrder
    completions?: SortOrder
    attempts?: SortOrder
    passingYards?: SortOrder
    passingTds?: SortOrder
    interceptions?: SortOrder
    sacks?: SortOrder
    sackYards?: SortOrder
    sackFumbles?: SortOrder
    sackFumblesLost?: SortOrder
    passingAirYards?: SortOrder
    passingYardsAfterCatch?: SortOrder
    passingFirstDowns?: SortOrder
    passingEpa?: SortOrder
    passing2ptConversions?: SortOrder
    pacr?: SortOrder
    dakota?: SortOrder
    carries?: SortOrder
    rushingYards?: SortOrder
    rushingTds?: SortOrder
    rushingFumbles?: SortOrder
    rushingFumblesLost?: SortOrder
    rushingFirstDowns?: SortOrder
    rushingEpa?: SortOrder
    rushing2ptConversions?: SortOrder
    receptions?: SortOrder
    targets?: SortOrder
    receivingYards?: SortOrder
    receivingTds?: SortOrder
    receivingFumbles?: SortOrder
    receivingFumblesLost?: SortOrder
    receivingAirYards?: SortOrder
    receivingYardsAfterCatch?: SortOrder
    receivingFirstDowns?: SortOrder
    receivingEpa?: SortOrder
    receiving2ptConversions?: SortOrder
    racr?: SortOrder
    targetShare?: SortOrder
    airYardsShare?: SortOrder
    wopr?: SortOrder
    specialTeamsTds?: SortOrder
    fantasyPoints?: SortOrder
    fantasyPointsPpr?: SortOrder
  }

  export type PlayerStatMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    playerName?: SortOrder
    playerDisplayName?: SortOrder
    position?: SortOrder
    positionGroup?: SortOrder
    headshotUrl?: SortOrder
    recentTeam?: SortOrder
    season?: SortOrder
    week?: SortOrder
    seasonType?: SortOrder
    opponentTeam?: SortOrder
    completions?: SortOrder
    attempts?: SortOrder
    passingYards?: SortOrder
    passingTds?: SortOrder
    interceptions?: SortOrder
    sacks?: SortOrder
    sackYards?: SortOrder
    sackFumbles?: SortOrder
    sackFumblesLost?: SortOrder
    passingAirYards?: SortOrder
    passingYardsAfterCatch?: SortOrder
    passingFirstDowns?: SortOrder
    passingEpa?: SortOrder
    passing2ptConversions?: SortOrder
    pacr?: SortOrder
    dakota?: SortOrder
    carries?: SortOrder
    rushingYards?: SortOrder
    rushingTds?: SortOrder
    rushingFumbles?: SortOrder
    rushingFumblesLost?: SortOrder
    rushingFirstDowns?: SortOrder
    rushingEpa?: SortOrder
    rushing2ptConversions?: SortOrder
    receptions?: SortOrder
    targets?: SortOrder
    receivingYards?: SortOrder
    receivingTds?: SortOrder
    receivingFumbles?: SortOrder
    receivingFumblesLost?: SortOrder
    receivingAirYards?: SortOrder
    receivingYardsAfterCatch?: SortOrder
    receivingFirstDowns?: SortOrder
    receivingEpa?: SortOrder
    receiving2ptConversions?: SortOrder
    racr?: SortOrder
    targetShare?: SortOrder
    airYardsShare?: SortOrder
    wopr?: SortOrder
    specialTeamsTds?: SortOrder
    fantasyPoints?: SortOrder
    fantasyPointsPpr?: SortOrder
  }

  export type PlayerStatMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    playerName?: SortOrder
    playerDisplayName?: SortOrder
    position?: SortOrder
    positionGroup?: SortOrder
    headshotUrl?: SortOrder
    recentTeam?: SortOrder
    season?: SortOrder
    week?: SortOrder
    seasonType?: SortOrder
    opponentTeam?: SortOrder
    completions?: SortOrder
    attempts?: SortOrder
    passingYards?: SortOrder
    passingTds?: SortOrder
    interceptions?: SortOrder
    sacks?: SortOrder
    sackYards?: SortOrder
    sackFumbles?: SortOrder
    sackFumblesLost?: SortOrder
    passingAirYards?: SortOrder
    passingYardsAfterCatch?: SortOrder
    passingFirstDowns?: SortOrder
    passingEpa?: SortOrder
    passing2ptConversions?: SortOrder
    pacr?: SortOrder
    dakota?: SortOrder
    carries?: SortOrder
    rushingYards?: SortOrder
    rushingTds?: SortOrder
    rushingFumbles?: SortOrder
    rushingFumblesLost?: SortOrder
    rushingFirstDowns?: SortOrder
    rushingEpa?: SortOrder
    rushing2ptConversions?: SortOrder
    receptions?: SortOrder
    targets?: SortOrder
    receivingYards?: SortOrder
    receivingTds?: SortOrder
    receivingFumbles?: SortOrder
    receivingFumblesLost?: SortOrder
    receivingAirYards?: SortOrder
    receivingYardsAfterCatch?: SortOrder
    receivingFirstDowns?: SortOrder
    receivingEpa?: SortOrder
    receiving2ptConversions?: SortOrder
    racr?: SortOrder
    targetShare?: SortOrder
    airYardsShare?: SortOrder
    wopr?: SortOrder
    specialTeamsTds?: SortOrder
    fantasyPoints?: SortOrder
    fantasyPointsPpr?: SortOrder
  }

  export type PlayerStatSumOrderByAggregateInput = {
    season?: SortOrder
    week?: SortOrder
    completions?: SortOrder
    attempts?: SortOrder
    passingYards?: SortOrder
    passingTds?: SortOrder
    interceptions?: SortOrder
    sacks?: SortOrder
    sackYards?: SortOrder
    sackFumbles?: SortOrder
    sackFumblesLost?: SortOrder
    passingAirYards?: SortOrder
    passingYardsAfterCatch?: SortOrder
    passingFirstDowns?: SortOrder
    passingEpa?: SortOrder
    passing2ptConversions?: SortOrder
    pacr?: SortOrder
    dakota?: SortOrder
    carries?: SortOrder
    rushingYards?: SortOrder
    rushingTds?: SortOrder
    rushingFumbles?: SortOrder
    rushingFumblesLost?: SortOrder
    rushingFirstDowns?: SortOrder
    rushingEpa?: SortOrder
    rushing2ptConversions?: SortOrder
    receptions?: SortOrder
    targets?: SortOrder
    receivingYards?: SortOrder
    receivingTds?: SortOrder
    receivingFumbles?: SortOrder
    receivingFumblesLost?: SortOrder
    receivingAirYards?: SortOrder
    receivingYardsAfterCatch?: SortOrder
    receivingFirstDowns?: SortOrder
    receivingEpa?: SortOrder
    receiving2ptConversions?: SortOrder
    racr?: SortOrder
    targetShare?: SortOrder
    airYardsShare?: SortOrder
    wopr?: SortOrder
    specialTeamsTds?: SortOrder
    fantasyPoints?: SortOrder
    fantasyPointsPpr?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type ReceivingStatCountOrderByAggregateInput = {
    id?: SortOrder
    player?: SortOrder
    playerId?: SortOrder
    position?: SortOrder
    teamName?: SortOrder
    playerGameCount?: SortOrder
    avgDepthOfTarget?: SortOrder
    avoidedTackles?: SortOrder
    caughtPercent?: SortOrder
    contestedCatchRate?: SortOrder
    contestedReceptions?: SortOrder
    contestedTargets?: SortOrder
    declinedPenalties?: SortOrder
    dropRate?: SortOrder
    drops?: SortOrder
    firstDowns?: SortOrder
    franchiseId?: SortOrder
    fumbles?: SortOrder
    gradesHandsDrop?: SortOrder
    gradesHandsFumble?: SortOrder
    gradesOffense?: SortOrder
    gradesPassBlock?: SortOrder
    gradesPassRoute?: SortOrder
    inlineRate?: SortOrder
    inlineSnaps?: SortOrder
    interceptions?: SortOrder
    longest?: SortOrder
    passBlockRate?: SortOrder
    passBlocks?: SortOrder
    passPlays?: SortOrder
    penalties?: SortOrder
    receptions?: SortOrder
    routeRate?: SortOrder
    routes?: SortOrder
    slotRate?: SortOrder
    slotSnaps?: SortOrder
    targetedQbRating?: SortOrder
    targets?: SortOrder
    touchdowns?: SortOrder
    wideRate?: SortOrder
    wideSnaps?: SortOrder
    yards?: SortOrder
    yardsAfterCatch?: SortOrder
    yardsAfterCatchPerReception?: SortOrder
    yardsPerReception?: SortOrder
    yprr?: SortOrder
  }

  export type ReceivingStatAvgOrderByAggregateInput = {
    playerGameCount?: SortOrder
    avgDepthOfTarget?: SortOrder
    avoidedTackles?: SortOrder
    caughtPercent?: SortOrder
    contestedCatchRate?: SortOrder
    contestedReceptions?: SortOrder
    contestedTargets?: SortOrder
    declinedPenalties?: SortOrder
    dropRate?: SortOrder
    drops?: SortOrder
    firstDowns?: SortOrder
    franchiseId?: SortOrder
    fumbles?: SortOrder
    gradesHandsDrop?: SortOrder
    gradesHandsFumble?: SortOrder
    gradesOffense?: SortOrder
    gradesPassBlock?: SortOrder
    gradesPassRoute?: SortOrder
    inlineRate?: SortOrder
    inlineSnaps?: SortOrder
    interceptions?: SortOrder
    longest?: SortOrder
    passBlockRate?: SortOrder
    passBlocks?: SortOrder
    passPlays?: SortOrder
    penalties?: SortOrder
    receptions?: SortOrder
    routeRate?: SortOrder
    routes?: SortOrder
    slotRate?: SortOrder
    slotSnaps?: SortOrder
    targetedQbRating?: SortOrder
    targets?: SortOrder
    touchdowns?: SortOrder
    wideRate?: SortOrder
    wideSnaps?: SortOrder
    yards?: SortOrder
    yardsAfterCatch?: SortOrder
    yardsAfterCatchPerReception?: SortOrder
    yardsPerReception?: SortOrder
    yprr?: SortOrder
  }

  export type ReceivingStatMaxOrderByAggregateInput = {
    id?: SortOrder
    player?: SortOrder
    playerId?: SortOrder
    position?: SortOrder
    teamName?: SortOrder
    playerGameCount?: SortOrder
    avgDepthOfTarget?: SortOrder
    avoidedTackles?: SortOrder
    caughtPercent?: SortOrder
    contestedCatchRate?: SortOrder
    contestedReceptions?: SortOrder
    contestedTargets?: SortOrder
    declinedPenalties?: SortOrder
    dropRate?: SortOrder
    drops?: SortOrder
    firstDowns?: SortOrder
    franchiseId?: SortOrder
    fumbles?: SortOrder
    gradesHandsDrop?: SortOrder
    gradesHandsFumble?: SortOrder
    gradesOffense?: SortOrder
    gradesPassBlock?: SortOrder
    gradesPassRoute?: SortOrder
    inlineRate?: SortOrder
    inlineSnaps?: SortOrder
    interceptions?: SortOrder
    longest?: SortOrder
    passBlockRate?: SortOrder
    passBlocks?: SortOrder
    passPlays?: SortOrder
    penalties?: SortOrder
    receptions?: SortOrder
    routeRate?: SortOrder
    routes?: SortOrder
    slotRate?: SortOrder
    slotSnaps?: SortOrder
    targetedQbRating?: SortOrder
    targets?: SortOrder
    touchdowns?: SortOrder
    wideRate?: SortOrder
    wideSnaps?: SortOrder
    yards?: SortOrder
    yardsAfterCatch?: SortOrder
    yardsAfterCatchPerReception?: SortOrder
    yardsPerReception?: SortOrder
    yprr?: SortOrder
  }

  export type ReceivingStatMinOrderByAggregateInput = {
    id?: SortOrder
    player?: SortOrder
    playerId?: SortOrder
    position?: SortOrder
    teamName?: SortOrder
    playerGameCount?: SortOrder
    avgDepthOfTarget?: SortOrder
    avoidedTackles?: SortOrder
    caughtPercent?: SortOrder
    contestedCatchRate?: SortOrder
    contestedReceptions?: SortOrder
    contestedTargets?: SortOrder
    declinedPenalties?: SortOrder
    dropRate?: SortOrder
    drops?: SortOrder
    firstDowns?: SortOrder
    franchiseId?: SortOrder
    fumbles?: SortOrder
    gradesHandsDrop?: SortOrder
    gradesHandsFumble?: SortOrder
    gradesOffense?: SortOrder
    gradesPassBlock?: SortOrder
    gradesPassRoute?: SortOrder
    inlineRate?: SortOrder
    inlineSnaps?: SortOrder
    interceptions?: SortOrder
    longest?: SortOrder
    passBlockRate?: SortOrder
    passBlocks?: SortOrder
    passPlays?: SortOrder
    penalties?: SortOrder
    receptions?: SortOrder
    routeRate?: SortOrder
    routes?: SortOrder
    slotRate?: SortOrder
    slotSnaps?: SortOrder
    targetedQbRating?: SortOrder
    targets?: SortOrder
    touchdowns?: SortOrder
    wideRate?: SortOrder
    wideSnaps?: SortOrder
    yards?: SortOrder
    yardsAfterCatch?: SortOrder
    yardsAfterCatchPerReception?: SortOrder
    yardsPerReception?: SortOrder
    yprr?: SortOrder
  }

  export type ReceivingStatSumOrderByAggregateInput = {
    playerGameCount?: SortOrder
    avgDepthOfTarget?: SortOrder
    avoidedTackles?: SortOrder
    caughtPercent?: SortOrder
    contestedCatchRate?: SortOrder
    contestedReceptions?: SortOrder
    contestedTargets?: SortOrder
    declinedPenalties?: SortOrder
    dropRate?: SortOrder
    drops?: SortOrder
    firstDowns?: SortOrder
    franchiseId?: SortOrder
    fumbles?: SortOrder
    gradesHandsDrop?: SortOrder
    gradesHandsFumble?: SortOrder
    gradesOffense?: SortOrder
    gradesPassBlock?: SortOrder
    gradesPassRoute?: SortOrder
    inlineRate?: SortOrder
    inlineSnaps?: SortOrder
    interceptions?: SortOrder
    longest?: SortOrder
    passBlockRate?: SortOrder
    passBlocks?: SortOrder
    passPlays?: SortOrder
    penalties?: SortOrder
    receptions?: SortOrder
    routeRate?: SortOrder
    routes?: SortOrder
    slotRate?: SortOrder
    slotSnaps?: SortOrder
    targetedQbRating?: SortOrder
    targets?: SortOrder
    touchdowns?: SortOrder
    wideRate?: SortOrder
    wideSnaps?: SortOrder
    yards?: SortOrder
    yardsAfterCatch?: SortOrder
    yardsAfterCatchPerReception?: SortOrder
    yardsPerReception?: SortOrder
    yprr?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PlayerSeasonPlayer_idSeasonCompoundUniqueInput = {
    player_id: string
    season: number
  }

  export type PlayerSeasonCountOrderByAggregateInput = {
    player_id?: SortOrder
    player_name?: SortOrder
    season?: SortOrder
    games_played?: SortOrder
    position?: SortOrder
    completions_total?: SortOrder
    attempts_total?: SortOrder
    passing_yards_total?: SortOrder
    passing_tds_total?: SortOrder
    interceptions_total?: SortOrder
    passing_first_downs_total?: SortOrder
    carries_total?: SortOrder
    rushing_yards_total?: SortOrder
    rushing_tds_total?: SortOrder
    rushing_fumbles_total?: SortOrder
    rushing_fumbles_lost_total?: SortOrder
    rushing_first_downs_total?: SortOrder
    targets_total?: SortOrder
    receiving_yards_total?: SortOrder
    receiving_tds_total?: SortOrder
    receiving_air_yards_total?: SortOrder
    receiving_yards_after_catch_total?: SortOrder
    receiving_first_downs_total?: SortOrder
    fantasy_points_total?: SortOrder
    completions_avg?: SortOrder
    attempts_avg?: SortOrder
    passing_yards_avg?: SortOrder
    passing_tds_avg?: SortOrder
    interceptions_avg?: SortOrder
    passing_air_yards_avg?: SortOrder
    passing_yards_after_catch_avg?: SortOrder
    passing_first_downs_avg?: SortOrder
    carries_avg?: SortOrder
    rushing_yards_avg?: SortOrder
    rushing_tds_avg?: SortOrder
    rushing_fumbles_avg?: SortOrder
    rushing_fumbles_lost_avg?: SortOrder
    rushing_first_downs_avg?: SortOrder
    rushing_epa_avg?: SortOrder
    receptions_avg?: SortOrder
    targets_avg?: SortOrder
    receiving_yards_avg?: SortOrder
    receiving_tds_avg?: SortOrder
    receiving_air_yards_avg?: SortOrder
    receiving_yards_after_catch_avg?: SortOrder
    receiving_first_downs_avg?: SortOrder
    receiving_epa_avg?: SortOrder
    racr_avg?: SortOrder
    target_share_avg?: SortOrder
    air_yards_share_avg?: SortOrder
    wopr_avg?: SortOrder
    fantasy_points_avg?: SortOrder
    fantasy_points_ppr_avg?: SortOrder
    YPRR?: SortOrder
    routes?: SortOrder
    routes_per_game?: SortOrder
    TPRR?: SortOrder
    firstDPRR?: SortOrder
  }

  export type PlayerSeasonAvgOrderByAggregateInput = {
    season?: SortOrder
    games_played?: SortOrder
    completions_total?: SortOrder
    attempts_total?: SortOrder
    passing_yards_total?: SortOrder
    passing_tds_total?: SortOrder
    interceptions_total?: SortOrder
    passing_first_downs_total?: SortOrder
    carries_total?: SortOrder
    rushing_yards_total?: SortOrder
    rushing_tds_total?: SortOrder
    rushing_fumbles_total?: SortOrder
    rushing_fumbles_lost_total?: SortOrder
    rushing_first_downs_total?: SortOrder
    targets_total?: SortOrder
    receiving_yards_total?: SortOrder
    receiving_tds_total?: SortOrder
    receiving_air_yards_total?: SortOrder
    receiving_yards_after_catch_total?: SortOrder
    receiving_first_downs_total?: SortOrder
    fantasy_points_total?: SortOrder
    completions_avg?: SortOrder
    attempts_avg?: SortOrder
    passing_yards_avg?: SortOrder
    passing_tds_avg?: SortOrder
    interceptions_avg?: SortOrder
    passing_air_yards_avg?: SortOrder
    passing_yards_after_catch_avg?: SortOrder
    passing_first_downs_avg?: SortOrder
    carries_avg?: SortOrder
    rushing_yards_avg?: SortOrder
    rushing_tds_avg?: SortOrder
    rushing_fumbles_avg?: SortOrder
    rushing_fumbles_lost_avg?: SortOrder
    rushing_first_downs_avg?: SortOrder
    rushing_epa_avg?: SortOrder
    receptions_avg?: SortOrder
    targets_avg?: SortOrder
    receiving_yards_avg?: SortOrder
    receiving_tds_avg?: SortOrder
    receiving_air_yards_avg?: SortOrder
    receiving_yards_after_catch_avg?: SortOrder
    receiving_first_downs_avg?: SortOrder
    receiving_epa_avg?: SortOrder
    racr_avg?: SortOrder
    target_share_avg?: SortOrder
    air_yards_share_avg?: SortOrder
    wopr_avg?: SortOrder
    fantasy_points_avg?: SortOrder
    fantasy_points_ppr_avg?: SortOrder
    YPRR?: SortOrder
    routes?: SortOrder
    routes_per_game?: SortOrder
    TPRR?: SortOrder
    firstDPRR?: SortOrder
  }

  export type PlayerSeasonMaxOrderByAggregateInput = {
    player_id?: SortOrder
    player_name?: SortOrder
    season?: SortOrder
    games_played?: SortOrder
    position?: SortOrder
    completions_total?: SortOrder
    attempts_total?: SortOrder
    passing_yards_total?: SortOrder
    passing_tds_total?: SortOrder
    interceptions_total?: SortOrder
    passing_first_downs_total?: SortOrder
    carries_total?: SortOrder
    rushing_yards_total?: SortOrder
    rushing_tds_total?: SortOrder
    rushing_fumbles_total?: SortOrder
    rushing_fumbles_lost_total?: SortOrder
    rushing_first_downs_total?: SortOrder
    targets_total?: SortOrder
    receiving_yards_total?: SortOrder
    receiving_tds_total?: SortOrder
    receiving_air_yards_total?: SortOrder
    receiving_yards_after_catch_total?: SortOrder
    receiving_first_downs_total?: SortOrder
    fantasy_points_total?: SortOrder
    completions_avg?: SortOrder
    attempts_avg?: SortOrder
    passing_yards_avg?: SortOrder
    passing_tds_avg?: SortOrder
    interceptions_avg?: SortOrder
    passing_air_yards_avg?: SortOrder
    passing_yards_after_catch_avg?: SortOrder
    passing_first_downs_avg?: SortOrder
    carries_avg?: SortOrder
    rushing_yards_avg?: SortOrder
    rushing_tds_avg?: SortOrder
    rushing_fumbles_avg?: SortOrder
    rushing_fumbles_lost_avg?: SortOrder
    rushing_first_downs_avg?: SortOrder
    rushing_epa_avg?: SortOrder
    receptions_avg?: SortOrder
    targets_avg?: SortOrder
    receiving_yards_avg?: SortOrder
    receiving_tds_avg?: SortOrder
    receiving_air_yards_avg?: SortOrder
    receiving_yards_after_catch_avg?: SortOrder
    receiving_first_downs_avg?: SortOrder
    receiving_epa_avg?: SortOrder
    racr_avg?: SortOrder
    target_share_avg?: SortOrder
    air_yards_share_avg?: SortOrder
    wopr_avg?: SortOrder
    fantasy_points_avg?: SortOrder
    fantasy_points_ppr_avg?: SortOrder
    YPRR?: SortOrder
    routes?: SortOrder
    routes_per_game?: SortOrder
    TPRR?: SortOrder
    firstDPRR?: SortOrder
  }

  export type PlayerSeasonMinOrderByAggregateInput = {
    player_id?: SortOrder
    player_name?: SortOrder
    season?: SortOrder
    games_played?: SortOrder
    position?: SortOrder
    completions_total?: SortOrder
    attempts_total?: SortOrder
    passing_yards_total?: SortOrder
    passing_tds_total?: SortOrder
    interceptions_total?: SortOrder
    passing_first_downs_total?: SortOrder
    carries_total?: SortOrder
    rushing_yards_total?: SortOrder
    rushing_tds_total?: SortOrder
    rushing_fumbles_total?: SortOrder
    rushing_fumbles_lost_total?: SortOrder
    rushing_first_downs_total?: SortOrder
    targets_total?: SortOrder
    receiving_yards_total?: SortOrder
    receiving_tds_total?: SortOrder
    receiving_air_yards_total?: SortOrder
    receiving_yards_after_catch_total?: SortOrder
    receiving_first_downs_total?: SortOrder
    fantasy_points_total?: SortOrder
    completions_avg?: SortOrder
    attempts_avg?: SortOrder
    passing_yards_avg?: SortOrder
    passing_tds_avg?: SortOrder
    interceptions_avg?: SortOrder
    passing_air_yards_avg?: SortOrder
    passing_yards_after_catch_avg?: SortOrder
    passing_first_downs_avg?: SortOrder
    carries_avg?: SortOrder
    rushing_yards_avg?: SortOrder
    rushing_tds_avg?: SortOrder
    rushing_fumbles_avg?: SortOrder
    rushing_fumbles_lost_avg?: SortOrder
    rushing_first_downs_avg?: SortOrder
    rushing_epa_avg?: SortOrder
    receptions_avg?: SortOrder
    targets_avg?: SortOrder
    receiving_yards_avg?: SortOrder
    receiving_tds_avg?: SortOrder
    receiving_air_yards_avg?: SortOrder
    receiving_yards_after_catch_avg?: SortOrder
    receiving_first_downs_avg?: SortOrder
    receiving_epa_avg?: SortOrder
    racr_avg?: SortOrder
    target_share_avg?: SortOrder
    air_yards_share_avg?: SortOrder
    wopr_avg?: SortOrder
    fantasy_points_avg?: SortOrder
    fantasy_points_ppr_avg?: SortOrder
    YPRR?: SortOrder
    routes?: SortOrder
    routes_per_game?: SortOrder
    TPRR?: SortOrder
    firstDPRR?: SortOrder
  }

  export type PlayerSeasonSumOrderByAggregateInput = {
    season?: SortOrder
    games_played?: SortOrder
    completions_total?: SortOrder
    attempts_total?: SortOrder
    passing_yards_total?: SortOrder
    passing_tds_total?: SortOrder
    interceptions_total?: SortOrder
    passing_first_downs_total?: SortOrder
    carries_total?: SortOrder
    rushing_yards_total?: SortOrder
    rushing_tds_total?: SortOrder
    rushing_fumbles_total?: SortOrder
    rushing_fumbles_lost_total?: SortOrder
    rushing_first_downs_total?: SortOrder
    targets_total?: SortOrder
    receiving_yards_total?: SortOrder
    receiving_tds_total?: SortOrder
    receiving_air_yards_total?: SortOrder
    receiving_yards_after_catch_total?: SortOrder
    receiving_first_downs_total?: SortOrder
    fantasy_points_total?: SortOrder
    completions_avg?: SortOrder
    attempts_avg?: SortOrder
    passing_yards_avg?: SortOrder
    passing_tds_avg?: SortOrder
    interceptions_avg?: SortOrder
    passing_air_yards_avg?: SortOrder
    passing_yards_after_catch_avg?: SortOrder
    passing_first_downs_avg?: SortOrder
    carries_avg?: SortOrder
    rushing_yards_avg?: SortOrder
    rushing_tds_avg?: SortOrder
    rushing_fumbles_avg?: SortOrder
    rushing_fumbles_lost_avg?: SortOrder
    rushing_first_downs_avg?: SortOrder
    rushing_epa_avg?: SortOrder
    receptions_avg?: SortOrder
    targets_avg?: SortOrder
    receiving_yards_avg?: SortOrder
    receiving_tds_avg?: SortOrder
    receiving_air_yards_avg?: SortOrder
    receiving_yards_after_catch_avg?: SortOrder
    receiving_first_downs_avg?: SortOrder
    receiving_epa_avg?: SortOrder
    racr_avg?: SortOrder
    target_share_avg?: SortOrder
    air_yards_share_avg?: SortOrder
    wopr_avg?: SortOrder
    fantasy_points_avg?: SortOrder
    fantasy_points_ppr_avg?: SortOrder
    YPRR?: SortOrder
    routes?: SortOrder
    routes_per_game?: SortOrder
    TPRR?: SortOrder
    firstDPRR?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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