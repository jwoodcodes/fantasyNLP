
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
 * Model PlayerSeason
 * 
 */
export type PlayerSeason = $Result.DefaultSelection<Prisma.$PlayerSeasonPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model TeamSeasonStats
 * 
 */
export type TeamSeasonStats = $Result.DefaultSelection<Prisma.$TeamSeasonStatsPayload>

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
   * `prisma.playerSeason`: Exposes CRUD operations for the **PlayerSeason** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerSeasons
    * const playerSeasons = await prisma.playerSeason.findMany()
    * ```
    */
  get playerSeason(): Prisma.PlayerSeasonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamSeasonStats`: Exposes CRUD operations for the **TeamSeasonStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamSeasonStats
    * const teamSeasonStats = await prisma.teamSeasonStats.findMany()
    * ```
    */
  get teamSeasonStats(): Prisma.TeamSeasonStatsDelegate<ExtArgs, ClientOptions>;
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
    PlayerSeason: 'PlayerSeason',
    Feedback: 'Feedback',
    TeamSeasonStats: 'TeamSeasonStats'
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
      modelProps: "tradeAnalyzerData" | "playerStat" | "playerSeason" | "feedback" | "teamSeasonStats"
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
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      TeamSeasonStats: {
        payload: Prisma.$TeamSeasonStatsPayload<ExtArgs>
        fields: Prisma.TeamSeasonStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamSeasonStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamSeasonStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamSeasonStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamSeasonStatsPayload>
          }
          findFirst: {
            args: Prisma.TeamSeasonStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamSeasonStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamSeasonStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamSeasonStatsPayload>
          }
          findMany: {
            args: Prisma.TeamSeasonStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamSeasonStatsPayload>[]
          }
          create: {
            args: Prisma.TeamSeasonStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamSeasonStatsPayload>
          }
          createMany: {
            args: Prisma.TeamSeasonStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamSeasonStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamSeasonStatsPayload>[]
          }
          delete: {
            args: Prisma.TeamSeasonStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamSeasonStatsPayload>
          }
          update: {
            args: Prisma.TeamSeasonStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamSeasonStatsPayload>
          }
          deleteMany: {
            args: Prisma.TeamSeasonStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamSeasonStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamSeasonStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamSeasonStatsPayload>[]
          }
          upsert: {
            args: Prisma.TeamSeasonStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamSeasonStatsPayload>
          }
          aggregate: {
            args: Prisma.TeamSeasonStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamSeasonStats>
          }
          groupBy: {
            args: Prisma.TeamSeasonStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamSeasonStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamSeasonStatsCountArgs<ExtArgs>
            result: $Utils.Optional<TeamSeasonStatsCountAggregateOutputType> | number
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
    playerSeason?: PlayerSeasonOmit
    feedback?: FeedbackOmit
    teamSeasonStats?: TeamSeasonStatsOmit
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
    passingAirYards: number | null
    passingYardsAfterCatch: number | null
    passingEpa: number | null
    pacr: number | null
    carries: number | null
    rushingYards: number | null
    rushingTds: number | null
    rushingFumbles: number | null
    rushingFirstDowns: number | null
    rushingEpa: number | null
    receptions: number | null
    targets: number | null
    receivingYards: number | null
    receivingTds: number | null
    receivingAirYards: number | null
    receivingYardsAfterCatch: number | null
    receivingFirstDowns: number | null
    racr: number | null
    targetShare: number | null
    airYardsShare: number | null
    wopr: number | null
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
    passingAirYards: number | null
    passingYardsAfterCatch: number | null
    passingEpa: number | null
    pacr: number | null
    carries: number | null
    rushingYards: number | null
    rushingTds: number | null
    rushingFumbles: number | null
    rushingFirstDowns: number | null
    rushingEpa: number | null
    receptions: number | null
    targets: number | null
    receivingYards: number | null
    receivingTds: number | null
    receivingAirYards: number | null
    receivingYardsAfterCatch: number | null
    receivingFirstDowns: number | null
    racr: number | null
    targetShare: number | null
    airYardsShare: number | null
    wopr: number | null
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
    passingAirYards: number | null
    passingYardsAfterCatch: number | null
    passingEpa: number | null
    pacr: number | null
    carries: number | null
    rushingYards: number | null
    rushingTds: number | null
    rushingFumbles: number | null
    rushingFirstDowns: number | null
    rushingEpa: number | null
    receptions: number | null
    targets: number | null
    receivingYards: number | null
    receivingTds: number | null
    receivingAirYards: number | null
    receivingYardsAfterCatch: number | null
    receivingFirstDowns: number | null
    racr: number | null
    targetShare: number | null
    airYardsShare: number | null
    wopr: number | null
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
    passingAirYards: number | null
    passingYardsAfterCatch: number | null
    passingEpa: number | null
    pacr: number | null
    carries: number | null
    rushingYards: number | null
    rushingTds: number | null
    rushingFumbles: number | null
    rushingFirstDowns: number | null
    rushingEpa: number | null
    receptions: number | null
    targets: number | null
    receivingYards: number | null
    receivingTds: number | null
    receivingAirYards: number | null
    receivingYardsAfterCatch: number | null
    receivingFirstDowns: number | null
    racr: number | null
    targetShare: number | null
    airYardsShare: number | null
    wopr: number | null
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
    passingAirYards: number
    passingYardsAfterCatch: number
    passingEpa: number
    pacr: number
    carries: number
    rushingYards: number
    rushingTds: number
    rushingFumbles: number
    rushingFirstDowns: number
    rushingEpa: number
    receptions: number
    targets: number
    receivingYards: number
    receivingTds: number
    receivingAirYards: number
    receivingYardsAfterCatch: number
    receivingFirstDowns: number
    racr: number
    targetShare: number
    airYardsShare: number
    wopr: number
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
    passingAirYards?: true
    passingYardsAfterCatch?: true
    passingEpa?: true
    pacr?: true
    carries?: true
    rushingYards?: true
    rushingTds?: true
    rushingFumbles?: true
    rushingFirstDowns?: true
    rushingEpa?: true
    receptions?: true
    targets?: true
    receivingYards?: true
    receivingTds?: true
    receivingAirYards?: true
    receivingYardsAfterCatch?: true
    receivingFirstDowns?: true
    racr?: true
    targetShare?: true
    airYardsShare?: true
    wopr?: true
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
    passingAirYards?: true
    passingYardsAfterCatch?: true
    passingEpa?: true
    pacr?: true
    carries?: true
    rushingYards?: true
    rushingTds?: true
    rushingFumbles?: true
    rushingFirstDowns?: true
    rushingEpa?: true
    receptions?: true
    targets?: true
    receivingYards?: true
    receivingTds?: true
    receivingAirYards?: true
    receivingYardsAfterCatch?: true
    receivingFirstDowns?: true
    racr?: true
    targetShare?: true
    airYardsShare?: true
    wopr?: true
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
    passingAirYards?: true
    passingYardsAfterCatch?: true
    passingEpa?: true
    pacr?: true
    carries?: true
    rushingYards?: true
    rushingTds?: true
    rushingFumbles?: true
    rushingFirstDowns?: true
    rushingEpa?: true
    receptions?: true
    targets?: true
    receivingYards?: true
    receivingTds?: true
    receivingAirYards?: true
    receivingYardsAfterCatch?: true
    receivingFirstDowns?: true
    racr?: true
    targetShare?: true
    airYardsShare?: true
    wopr?: true
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
    passingAirYards?: true
    passingYardsAfterCatch?: true
    passingEpa?: true
    pacr?: true
    carries?: true
    rushingYards?: true
    rushingTds?: true
    rushingFumbles?: true
    rushingFirstDowns?: true
    rushingEpa?: true
    receptions?: true
    targets?: true
    receivingYards?: true
    receivingTds?: true
    receivingAirYards?: true
    receivingYardsAfterCatch?: true
    receivingFirstDowns?: true
    racr?: true
    targetShare?: true
    airYardsShare?: true
    wopr?: true
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
    passingAirYards?: true
    passingYardsAfterCatch?: true
    passingEpa?: true
    pacr?: true
    carries?: true
    rushingYards?: true
    rushingTds?: true
    rushingFumbles?: true
    rushingFirstDowns?: true
    rushingEpa?: true
    receptions?: true
    targets?: true
    receivingYards?: true
    receivingTds?: true
    receivingAirYards?: true
    receivingYardsAfterCatch?: true
    receivingFirstDowns?: true
    racr?: true
    targetShare?: true
    airYardsShare?: true
    wopr?: true
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
    passingAirYards: number | null
    passingYardsAfterCatch: number | null
    passingEpa: number | null
    pacr: number | null
    carries: number | null
    rushingYards: number | null
    rushingTds: number | null
    rushingFumbles: number | null
    rushingFirstDowns: number | null
    rushingEpa: number | null
    receptions: number | null
    targets: number | null
    receivingYards: number | null
    receivingTds: number | null
    receivingAirYards: number | null
    receivingYardsAfterCatch: number | null
    receivingFirstDowns: number | null
    racr: number | null
    targetShare: number | null
    airYardsShare: number | null
    wopr: number | null
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
    passingAirYards?: boolean
    passingYardsAfterCatch?: boolean
    passingEpa?: boolean
    pacr?: boolean
    carries?: boolean
    rushingYards?: boolean
    rushingTds?: boolean
    rushingFumbles?: boolean
    rushingFirstDowns?: boolean
    rushingEpa?: boolean
    receptions?: boolean
    targets?: boolean
    receivingYards?: boolean
    receivingTds?: boolean
    receivingAirYards?: boolean
    receivingYardsAfterCatch?: boolean
    receivingFirstDowns?: boolean
    racr?: boolean
    targetShare?: boolean
    airYardsShare?: boolean
    wopr?: boolean
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
    passingAirYards?: boolean
    passingYardsAfterCatch?: boolean
    passingEpa?: boolean
    pacr?: boolean
    carries?: boolean
    rushingYards?: boolean
    rushingTds?: boolean
    rushingFumbles?: boolean
    rushingFirstDowns?: boolean
    rushingEpa?: boolean
    receptions?: boolean
    targets?: boolean
    receivingYards?: boolean
    receivingTds?: boolean
    receivingAirYards?: boolean
    receivingYardsAfterCatch?: boolean
    receivingFirstDowns?: boolean
    racr?: boolean
    targetShare?: boolean
    airYardsShare?: boolean
    wopr?: boolean
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
    passingAirYards?: boolean
    passingYardsAfterCatch?: boolean
    passingEpa?: boolean
    pacr?: boolean
    carries?: boolean
    rushingYards?: boolean
    rushingTds?: boolean
    rushingFumbles?: boolean
    rushingFirstDowns?: boolean
    rushingEpa?: boolean
    receptions?: boolean
    targets?: boolean
    receivingYards?: boolean
    receivingTds?: boolean
    receivingAirYards?: boolean
    receivingYardsAfterCatch?: boolean
    receivingFirstDowns?: boolean
    racr?: boolean
    targetShare?: boolean
    airYardsShare?: boolean
    wopr?: boolean
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
    passingAirYards?: boolean
    passingYardsAfterCatch?: boolean
    passingEpa?: boolean
    pacr?: boolean
    carries?: boolean
    rushingYards?: boolean
    rushingTds?: boolean
    rushingFumbles?: boolean
    rushingFirstDowns?: boolean
    rushingEpa?: boolean
    receptions?: boolean
    targets?: boolean
    receivingYards?: boolean
    receivingTds?: boolean
    receivingAirYards?: boolean
    receivingYardsAfterCatch?: boolean
    receivingFirstDowns?: boolean
    racr?: boolean
    targetShare?: boolean
    airYardsShare?: boolean
    wopr?: boolean
    fantasyPoints?: boolean
    fantasyPointsPpr?: boolean
  }

  export type PlayerStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "playerName" | "playerDisplayName" | "position" | "positionGroup" | "recentTeam" | "season" | "week" | "seasonType" | "opponentTeam" | "completions" | "attempts" | "passingYards" | "passingTds" | "interceptions" | "sacks" | "passingAirYards" | "passingYardsAfterCatch" | "passingEpa" | "pacr" | "carries" | "rushingYards" | "rushingTds" | "rushingFumbles" | "rushingFirstDowns" | "rushingEpa" | "receptions" | "targets" | "receivingYards" | "receivingTds" | "receivingAirYards" | "receivingYardsAfterCatch" | "receivingFirstDowns" | "racr" | "targetShare" | "airYardsShare" | "wopr" | "fantasyPoints" | "fantasyPointsPpr", ExtArgs["result"]["playerStat"]>

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
      passingAirYards: number | null
      passingYardsAfterCatch: number | null
      passingEpa: number | null
      pacr: number | null
      carries: number | null
      rushingYards: number | null
      rushingTds: number | null
      rushingFumbles: number | null
      rushingFirstDowns: number | null
      rushingEpa: number | null
      receptions: number | null
      targets: number | null
      receivingYards: number | null
      receivingTds: number | null
      receivingAirYards: number | null
      receivingYardsAfterCatch: number | null
      receivingFirstDowns: number | null
      racr: number | null
      targetShare: number | null
      airYardsShare: number | null
      wopr: number | null
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
    readonly passingAirYards: FieldRef<"PlayerStat", 'Float'>
    readonly passingYardsAfterCatch: FieldRef<"PlayerStat", 'Float'>
    readonly passingEpa: FieldRef<"PlayerStat", 'Float'>
    readonly pacr: FieldRef<"PlayerStat", 'Float'>
    readonly carries: FieldRef<"PlayerStat", 'Int'>
    readonly rushingYards: FieldRef<"PlayerStat", 'Float'>
    readonly rushingTds: FieldRef<"PlayerStat", 'Int'>
    readonly rushingFumbles: FieldRef<"PlayerStat", 'Int'>
    readonly rushingFirstDowns: FieldRef<"PlayerStat", 'Int'>
    readonly rushingEpa: FieldRef<"PlayerStat", 'Float'>
    readonly receptions: FieldRef<"PlayerStat", 'Int'>
    readonly targets: FieldRef<"PlayerStat", 'Int'>
    readonly receivingYards: FieldRef<"PlayerStat", 'Float'>
    readonly receivingTds: FieldRef<"PlayerStat", 'Int'>
    readonly receivingAirYards: FieldRef<"PlayerStat", 'Float'>
    readonly receivingYardsAfterCatch: FieldRef<"PlayerStat", 'Float'>
    readonly receivingFirstDowns: FieldRef<"PlayerStat", 'Int'>
    readonly racr: FieldRef<"PlayerStat", 'Float'>
    readonly targetShare: FieldRef<"PlayerStat", 'Float'>
    readonly airYardsShare: FieldRef<"PlayerStat", 'Float'>
    readonly wopr: FieldRef<"PlayerStat", 'Float'>
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
    sacks_total: number | null
    carries_total: number | null
    rushing_yards_total: number | null
    rushing_tds_total: number | null
    rushing_first_downs_total: number | null
    targets_total: number | null
    receptions_total: number | null
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
    sacks_avg: number | null
    passing_air_yards_avg: number | null
    passing_yards_after_catch_avg: number | null
    carries_avg: number | null
    rushing_yards_avg: number | null
    rushing_tds_avg: number | null
    rushing_fumbles_avg: number | null
    rushing_first_downs_avg: number | null
    rushing_epa_avg: number | null
    receptions_avg: number | null
    targets_avg: number | null
    receiving_yards_avg: number | null
    receiving_tds_avg: number | null
    receiving_air_yards_avg: number | null
    receiving_yards_after_catch_avg: number | null
    receiving_first_downs_avg: number | null
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
    green_zone_carries: number | null
    HVTs: number | null
    avg_pass_epa_deep_left: number | null
    avg_pass_epa_deep_middle: number | null
    avg_pass_epa_deep_right: number | null
    avg_pass_epa_short_left: number | null
    avg_pass_epa_short_middle: number | null
    avg_pass_epa_short_right: number | null
    total_tackled_for_loss: number | null
    total_rushes: number | null
    pct_carries_tackled_for_loss: number | null
    rec_avg_rec_epa_deep_left: number | null
    rec_avg_rec_epa_deep_middle: number | null
    rec_avg_rec_epa_deep_right: number | null
    rec_avg_rec_epa_short_left: number | null
    rec_avg_rec_epa_short_middle: number | null
    rec_avg_rec_epa_short_right: number | null
    rec_pct_targets_deep_left: number | null
    rec_pct_targets_deep_middle: number | null
    rec_pct_targets_deep_right: number | null
    rec_pct_targets_short_left: number | null
    rec_pct_targets_short_middle: number | null
    rec_pct_targets_short_right: number | null
    down_1_attempts: number | null
    down_1_completions: number | null
    down_1_passing_yards: number | null
    down_1_carries: number | null
    down_1_rushing_yards: number | null
    down_1_targets: number | null
    down_1_receptions: number | null
    down_1_receiving_yards: number | null
    down_1_team_carries_in_played_games: number | null
    down_1_team_targets_in_played_games: number | null
    down_1_team_receptions_in_played_games: number | null
    down_1_team_carries_all_games: number | null
    down_1_team_targets_all_games: number | null
    down_1_team_receptions_all_games: number | null
    down_1_yards_per_target: number | null
    down_1_yards_per_reception: number | null
    down_1_pass_attempts_per_game: number | null
    down_1_completions_per_game: number | null
    down_1_carries_per_game: number | null
    down_1_rushing_yards_per_game: number | null
    down_1_targets_per_game: number | null
    down_1_receptions_per_game: number | null
    down_1_receiving_yards_per_game: number | null
    down_3_attempts: number | null
    down_3_completions: number | null
    down_3_passing_yards: number | null
  }

  export type PlayerSeasonSumAggregateOutputType = {
    season: number | null
    games_played: number | null
    completions_total: number | null
    attempts_total: number | null
    passing_yards_total: number | null
    passing_tds_total: number | null
    interceptions_total: number | null
    sacks_total: number | null
    carries_total: number | null
    rushing_yards_total: number | null
    rushing_tds_total: number | null
    rushing_first_downs_total: number | null
    targets_total: number | null
    receptions_total: number | null
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
    sacks_avg: number | null
    passing_air_yards_avg: number | null
    passing_yards_after_catch_avg: number | null
    carries_avg: number | null
    rushing_yards_avg: number | null
    rushing_tds_avg: number | null
    rushing_fumbles_avg: number | null
    rushing_first_downs_avg: number | null
    rushing_epa_avg: number | null
    receptions_avg: number | null
    targets_avg: number | null
    receiving_yards_avg: number | null
    receiving_tds_avg: number | null
    receiving_air_yards_avg: number | null
    receiving_yards_after_catch_avg: number | null
    receiving_first_downs_avg: number | null
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
    green_zone_carries: number | null
    HVTs: number | null
    avg_pass_epa_deep_left: number | null
    avg_pass_epa_deep_middle: number | null
    avg_pass_epa_deep_right: number | null
    avg_pass_epa_short_left: number | null
    avg_pass_epa_short_middle: number | null
    avg_pass_epa_short_right: number | null
    total_tackled_for_loss: number | null
    total_rushes: number | null
    pct_carries_tackled_for_loss: number | null
    rec_avg_rec_epa_deep_left: number | null
    rec_avg_rec_epa_deep_middle: number | null
    rec_avg_rec_epa_deep_right: number | null
    rec_avg_rec_epa_short_left: number | null
    rec_avg_rec_epa_short_middle: number | null
    rec_avg_rec_epa_short_right: number | null
    rec_pct_targets_deep_left: number | null
    rec_pct_targets_deep_middle: number | null
    rec_pct_targets_deep_right: number | null
    rec_pct_targets_short_left: number | null
    rec_pct_targets_short_middle: number | null
    rec_pct_targets_short_right: number | null
    down_1_attempts: number | null
    down_1_completions: number | null
    down_1_passing_yards: number | null
    down_1_carries: number | null
    down_1_rushing_yards: number | null
    down_1_targets: number | null
    down_1_receptions: number | null
    down_1_receiving_yards: number | null
    down_1_team_carries_in_played_games: number | null
    down_1_team_targets_in_played_games: number | null
    down_1_team_receptions_in_played_games: number | null
    down_1_team_carries_all_games: number | null
    down_1_team_targets_all_games: number | null
    down_1_team_receptions_all_games: number | null
    down_1_yards_per_target: number | null
    down_1_yards_per_reception: number | null
    down_1_pass_attempts_per_game: number | null
    down_1_completions_per_game: number | null
    down_1_carries_per_game: number | null
    down_1_rushing_yards_per_game: number | null
    down_1_targets_per_game: number | null
    down_1_receptions_per_game: number | null
    down_1_receiving_yards_per_game: number | null
    down_3_attempts: number | null
    down_3_completions: number | null
    down_3_passing_yards: number | null
  }

  export type PlayerSeasonMinAggregateOutputType = {
    player_id: string | null
    season: number | null
    player_name: string | null
    team: string | null
    position: string | null
    head_coach: string | null
    offensive_coordinator: string | null
    games_played: number | null
    completions_total: number | null
    attempts_total: number | null
    passing_yards_total: number | null
    passing_tds_total: number | null
    interceptions_total: number | null
    sacks_total: number | null
    carries_total: number | null
    rushing_yards_total: number | null
    rushing_tds_total: number | null
    rushing_first_downs_total: number | null
    targets_total: number | null
    receptions_total: number | null
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
    sacks_avg: number | null
    passing_air_yards_avg: number | null
    passing_yards_after_catch_avg: number | null
    carries_avg: number | null
    rushing_yards_avg: number | null
    rushing_tds_avg: number | null
    rushing_fumbles_avg: number | null
    rushing_first_downs_avg: number | null
    rushing_epa_avg: number | null
    receptions_avg: number | null
    targets_avg: number | null
    receiving_yards_avg: number | null
    receiving_tds_avg: number | null
    receiving_air_yards_avg: number | null
    receiving_yards_after_catch_avg: number | null
    receiving_first_downs_avg: number | null
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
    green_zone_carries: number | null
    HVTs: number | null
    avg_pass_epa_deep_left: number | null
    avg_pass_epa_deep_middle: number | null
    avg_pass_epa_deep_right: number | null
    avg_pass_epa_short_left: number | null
    avg_pass_epa_short_middle: number | null
    avg_pass_epa_short_right: number | null
    total_tackled_for_loss: number | null
    total_rushes: number | null
    pct_carries_tackled_for_loss: number | null
    rec_avg_rec_epa_deep_left: number | null
    rec_avg_rec_epa_deep_middle: number | null
    rec_avg_rec_epa_deep_right: number | null
    rec_avg_rec_epa_short_left: number | null
    rec_avg_rec_epa_short_middle: number | null
    rec_avg_rec_epa_short_right: number | null
    rec_pct_targets_deep_left: number | null
    rec_pct_targets_deep_middle: number | null
    rec_pct_targets_deep_right: number | null
    rec_pct_targets_short_left: number | null
    rec_pct_targets_short_middle: number | null
    rec_pct_targets_short_right: number | null
    down_1_attempts: number | null
    down_1_completions: number | null
    down_1_passing_yards: number | null
    down_1_carries: number | null
    down_1_rushing_yards: number | null
    down_1_targets: number | null
    down_1_receptions: number | null
    down_1_receiving_yards: number | null
    down_1_team_carries_in_played_games: number | null
    down_1_team_targets_in_played_games: number | null
    down_1_team_receptions_in_played_games: number | null
    down_1_team_carries_all_games: number | null
    down_1_team_targets_all_games: number | null
    down_1_team_receptions_all_games: number | null
    down_1_yards_per_target: number | null
    down_1_yards_per_reception: number | null
    down_1_pass_attempts_per_game: number | null
    down_1_completions_per_game: number | null
    down_1_carries_per_game: number | null
    down_1_rushing_yards_per_game: number | null
    down_1_targets_per_game: number | null
    down_1_receptions_per_game: number | null
    down_1_receiving_yards_per_game: number | null
    down_3_attempts: number | null
    down_3_completions: number | null
    down_3_passing_yards: number | null
  }

  export type PlayerSeasonMaxAggregateOutputType = {
    player_id: string | null
    season: number | null
    player_name: string | null
    team: string | null
    position: string | null
    head_coach: string | null
    offensive_coordinator: string | null
    games_played: number | null
    completions_total: number | null
    attempts_total: number | null
    passing_yards_total: number | null
    passing_tds_total: number | null
    interceptions_total: number | null
    sacks_total: number | null
    carries_total: number | null
    rushing_yards_total: number | null
    rushing_tds_total: number | null
    rushing_first_downs_total: number | null
    targets_total: number | null
    receptions_total: number | null
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
    sacks_avg: number | null
    passing_air_yards_avg: number | null
    passing_yards_after_catch_avg: number | null
    carries_avg: number | null
    rushing_yards_avg: number | null
    rushing_tds_avg: number | null
    rushing_fumbles_avg: number | null
    rushing_first_downs_avg: number | null
    rushing_epa_avg: number | null
    receptions_avg: number | null
    targets_avg: number | null
    receiving_yards_avg: number | null
    receiving_tds_avg: number | null
    receiving_air_yards_avg: number | null
    receiving_yards_after_catch_avg: number | null
    receiving_first_downs_avg: number | null
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
    green_zone_carries: number | null
    HVTs: number | null
    avg_pass_epa_deep_left: number | null
    avg_pass_epa_deep_middle: number | null
    avg_pass_epa_deep_right: number | null
    avg_pass_epa_short_left: number | null
    avg_pass_epa_short_middle: number | null
    avg_pass_epa_short_right: number | null
    total_tackled_for_loss: number | null
    total_rushes: number | null
    pct_carries_tackled_for_loss: number | null
    rec_avg_rec_epa_deep_left: number | null
    rec_avg_rec_epa_deep_middle: number | null
    rec_avg_rec_epa_deep_right: number | null
    rec_avg_rec_epa_short_left: number | null
    rec_avg_rec_epa_short_middle: number | null
    rec_avg_rec_epa_short_right: number | null
    rec_pct_targets_deep_left: number | null
    rec_pct_targets_deep_middle: number | null
    rec_pct_targets_deep_right: number | null
    rec_pct_targets_short_left: number | null
    rec_pct_targets_short_middle: number | null
    rec_pct_targets_short_right: number | null
    down_1_attempts: number | null
    down_1_completions: number | null
    down_1_passing_yards: number | null
    down_1_carries: number | null
    down_1_rushing_yards: number | null
    down_1_targets: number | null
    down_1_receptions: number | null
    down_1_receiving_yards: number | null
    down_1_team_carries_in_played_games: number | null
    down_1_team_targets_in_played_games: number | null
    down_1_team_receptions_in_played_games: number | null
    down_1_team_carries_all_games: number | null
    down_1_team_targets_all_games: number | null
    down_1_team_receptions_all_games: number | null
    down_1_yards_per_target: number | null
    down_1_yards_per_reception: number | null
    down_1_pass_attempts_per_game: number | null
    down_1_completions_per_game: number | null
    down_1_carries_per_game: number | null
    down_1_rushing_yards_per_game: number | null
    down_1_targets_per_game: number | null
    down_1_receptions_per_game: number | null
    down_1_receiving_yards_per_game: number | null
    down_3_attempts: number | null
    down_3_completions: number | null
    down_3_passing_yards: number | null
  }

  export type PlayerSeasonCountAggregateOutputType = {
    player_id: number
    season: number
    player_name: number
    team: number
    position: number
    head_coach: number
    offensive_coordinator: number
    games_played: number
    completions_total: number
    attempts_total: number
    passing_yards_total: number
    passing_tds_total: number
    interceptions_total: number
    sacks_total: number
    carries_total: number
    rushing_yards_total: number
    rushing_tds_total: number
    rushing_first_downs_total: number
    targets_total: number
    receptions_total: number
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
    sacks_avg: number
    passing_air_yards_avg: number
    passing_yards_after_catch_avg: number
    carries_avg: number
    rushing_yards_avg: number
    rushing_tds_avg: number
    rushing_fumbles_avg: number
    rushing_first_downs_avg: number
    rushing_epa_avg: number
    receptions_avg: number
    targets_avg: number
    receiving_yards_avg: number
    receiving_tds_avg: number
    receiving_air_yards_avg: number
    receiving_yards_after_catch_avg: number
    receiving_first_downs_avg: number
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
    green_zone_carries: number
    HVTs: number
    avg_pass_epa_deep_left: number
    avg_pass_epa_deep_middle: number
    avg_pass_epa_deep_right: number
    avg_pass_epa_short_left: number
    avg_pass_epa_short_middle: number
    avg_pass_epa_short_right: number
    total_tackled_for_loss: number
    total_rushes: number
    pct_carries_tackled_for_loss: number
    rec_avg_rec_epa_deep_left: number
    rec_avg_rec_epa_deep_middle: number
    rec_avg_rec_epa_deep_right: number
    rec_avg_rec_epa_short_left: number
    rec_avg_rec_epa_short_middle: number
    rec_avg_rec_epa_short_right: number
    rec_pct_targets_deep_left: number
    rec_pct_targets_deep_middle: number
    rec_pct_targets_deep_right: number
    rec_pct_targets_short_left: number
    rec_pct_targets_short_middle: number
    rec_pct_targets_short_right: number
    down_1_attempts: number
    down_1_completions: number
    down_1_passing_yards: number
    down_1_carries: number
    down_1_rushing_yards: number
    down_1_targets: number
    down_1_receptions: number
    down_1_receiving_yards: number
    down_1_team_carries_in_played_games: number
    down_1_team_targets_in_played_games: number
    down_1_team_receptions_in_played_games: number
    down_1_team_carries_all_games: number
    down_1_team_targets_all_games: number
    down_1_team_receptions_all_games: number
    down_1_yards_per_target: number
    down_1_yards_per_reception: number
    down_1_pass_attempts_per_game: number
    down_1_completions_per_game: number
    down_1_carries_per_game: number
    down_1_rushing_yards_per_game: number
    down_1_targets_per_game: number
    down_1_receptions_per_game: number
    down_1_receiving_yards_per_game: number
    down_3_attempts: number
    down_3_completions: number
    down_3_passing_yards: number
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
    sacks_total?: true
    carries_total?: true
    rushing_yards_total?: true
    rushing_tds_total?: true
    rushing_first_downs_total?: true
    targets_total?: true
    receptions_total?: true
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
    sacks_avg?: true
    passing_air_yards_avg?: true
    passing_yards_after_catch_avg?: true
    carries_avg?: true
    rushing_yards_avg?: true
    rushing_tds_avg?: true
    rushing_fumbles_avg?: true
    rushing_first_downs_avg?: true
    rushing_epa_avg?: true
    receptions_avg?: true
    targets_avg?: true
    receiving_yards_avg?: true
    receiving_tds_avg?: true
    receiving_air_yards_avg?: true
    receiving_yards_after_catch_avg?: true
    receiving_first_downs_avg?: true
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
    green_zone_carries?: true
    HVTs?: true
    avg_pass_epa_deep_left?: true
    avg_pass_epa_deep_middle?: true
    avg_pass_epa_deep_right?: true
    avg_pass_epa_short_left?: true
    avg_pass_epa_short_middle?: true
    avg_pass_epa_short_right?: true
    total_tackled_for_loss?: true
    total_rushes?: true
    pct_carries_tackled_for_loss?: true
    rec_avg_rec_epa_deep_left?: true
    rec_avg_rec_epa_deep_middle?: true
    rec_avg_rec_epa_deep_right?: true
    rec_avg_rec_epa_short_left?: true
    rec_avg_rec_epa_short_middle?: true
    rec_avg_rec_epa_short_right?: true
    rec_pct_targets_deep_left?: true
    rec_pct_targets_deep_middle?: true
    rec_pct_targets_deep_right?: true
    rec_pct_targets_short_left?: true
    rec_pct_targets_short_middle?: true
    rec_pct_targets_short_right?: true
    down_1_attempts?: true
    down_1_completions?: true
    down_1_passing_yards?: true
    down_1_carries?: true
    down_1_rushing_yards?: true
    down_1_targets?: true
    down_1_receptions?: true
    down_1_receiving_yards?: true
    down_1_team_carries_in_played_games?: true
    down_1_team_targets_in_played_games?: true
    down_1_team_receptions_in_played_games?: true
    down_1_team_carries_all_games?: true
    down_1_team_targets_all_games?: true
    down_1_team_receptions_all_games?: true
    down_1_yards_per_target?: true
    down_1_yards_per_reception?: true
    down_1_pass_attempts_per_game?: true
    down_1_completions_per_game?: true
    down_1_carries_per_game?: true
    down_1_rushing_yards_per_game?: true
    down_1_targets_per_game?: true
    down_1_receptions_per_game?: true
    down_1_receiving_yards_per_game?: true
    down_3_attempts?: true
    down_3_completions?: true
    down_3_passing_yards?: true
  }

  export type PlayerSeasonSumAggregateInputType = {
    season?: true
    games_played?: true
    completions_total?: true
    attempts_total?: true
    passing_yards_total?: true
    passing_tds_total?: true
    interceptions_total?: true
    sacks_total?: true
    carries_total?: true
    rushing_yards_total?: true
    rushing_tds_total?: true
    rushing_first_downs_total?: true
    targets_total?: true
    receptions_total?: true
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
    sacks_avg?: true
    passing_air_yards_avg?: true
    passing_yards_after_catch_avg?: true
    carries_avg?: true
    rushing_yards_avg?: true
    rushing_tds_avg?: true
    rushing_fumbles_avg?: true
    rushing_first_downs_avg?: true
    rushing_epa_avg?: true
    receptions_avg?: true
    targets_avg?: true
    receiving_yards_avg?: true
    receiving_tds_avg?: true
    receiving_air_yards_avg?: true
    receiving_yards_after_catch_avg?: true
    receiving_first_downs_avg?: true
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
    green_zone_carries?: true
    HVTs?: true
    avg_pass_epa_deep_left?: true
    avg_pass_epa_deep_middle?: true
    avg_pass_epa_deep_right?: true
    avg_pass_epa_short_left?: true
    avg_pass_epa_short_middle?: true
    avg_pass_epa_short_right?: true
    total_tackled_for_loss?: true
    total_rushes?: true
    pct_carries_tackled_for_loss?: true
    rec_avg_rec_epa_deep_left?: true
    rec_avg_rec_epa_deep_middle?: true
    rec_avg_rec_epa_deep_right?: true
    rec_avg_rec_epa_short_left?: true
    rec_avg_rec_epa_short_middle?: true
    rec_avg_rec_epa_short_right?: true
    rec_pct_targets_deep_left?: true
    rec_pct_targets_deep_middle?: true
    rec_pct_targets_deep_right?: true
    rec_pct_targets_short_left?: true
    rec_pct_targets_short_middle?: true
    rec_pct_targets_short_right?: true
    down_1_attempts?: true
    down_1_completions?: true
    down_1_passing_yards?: true
    down_1_carries?: true
    down_1_rushing_yards?: true
    down_1_targets?: true
    down_1_receptions?: true
    down_1_receiving_yards?: true
    down_1_team_carries_in_played_games?: true
    down_1_team_targets_in_played_games?: true
    down_1_team_receptions_in_played_games?: true
    down_1_team_carries_all_games?: true
    down_1_team_targets_all_games?: true
    down_1_team_receptions_all_games?: true
    down_1_yards_per_target?: true
    down_1_yards_per_reception?: true
    down_1_pass_attempts_per_game?: true
    down_1_completions_per_game?: true
    down_1_carries_per_game?: true
    down_1_rushing_yards_per_game?: true
    down_1_targets_per_game?: true
    down_1_receptions_per_game?: true
    down_1_receiving_yards_per_game?: true
    down_3_attempts?: true
    down_3_completions?: true
    down_3_passing_yards?: true
  }

  export type PlayerSeasonMinAggregateInputType = {
    player_id?: true
    season?: true
    player_name?: true
    team?: true
    position?: true
    head_coach?: true
    offensive_coordinator?: true
    games_played?: true
    completions_total?: true
    attempts_total?: true
    passing_yards_total?: true
    passing_tds_total?: true
    interceptions_total?: true
    sacks_total?: true
    carries_total?: true
    rushing_yards_total?: true
    rushing_tds_total?: true
    rushing_first_downs_total?: true
    targets_total?: true
    receptions_total?: true
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
    sacks_avg?: true
    passing_air_yards_avg?: true
    passing_yards_after_catch_avg?: true
    carries_avg?: true
    rushing_yards_avg?: true
    rushing_tds_avg?: true
    rushing_fumbles_avg?: true
    rushing_first_downs_avg?: true
    rushing_epa_avg?: true
    receptions_avg?: true
    targets_avg?: true
    receiving_yards_avg?: true
    receiving_tds_avg?: true
    receiving_air_yards_avg?: true
    receiving_yards_after_catch_avg?: true
    receiving_first_downs_avg?: true
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
    green_zone_carries?: true
    HVTs?: true
    avg_pass_epa_deep_left?: true
    avg_pass_epa_deep_middle?: true
    avg_pass_epa_deep_right?: true
    avg_pass_epa_short_left?: true
    avg_pass_epa_short_middle?: true
    avg_pass_epa_short_right?: true
    total_tackled_for_loss?: true
    total_rushes?: true
    pct_carries_tackled_for_loss?: true
    rec_avg_rec_epa_deep_left?: true
    rec_avg_rec_epa_deep_middle?: true
    rec_avg_rec_epa_deep_right?: true
    rec_avg_rec_epa_short_left?: true
    rec_avg_rec_epa_short_middle?: true
    rec_avg_rec_epa_short_right?: true
    rec_pct_targets_deep_left?: true
    rec_pct_targets_deep_middle?: true
    rec_pct_targets_deep_right?: true
    rec_pct_targets_short_left?: true
    rec_pct_targets_short_middle?: true
    rec_pct_targets_short_right?: true
    down_1_attempts?: true
    down_1_completions?: true
    down_1_passing_yards?: true
    down_1_carries?: true
    down_1_rushing_yards?: true
    down_1_targets?: true
    down_1_receptions?: true
    down_1_receiving_yards?: true
    down_1_team_carries_in_played_games?: true
    down_1_team_targets_in_played_games?: true
    down_1_team_receptions_in_played_games?: true
    down_1_team_carries_all_games?: true
    down_1_team_targets_all_games?: true
    down_1_team_receptions_all_games?: true
    down_1_yards_per_target?: true
    down_1_yards_per_reception?: true
    down_1_pass_attempts_per_game?: true
    down_1_completions_per_game?: true
    down_1_carries_per_game?: true
    down_1_rushing_yards_per_game?: true
    down_1_targets_per_game?: true
    down_1_receptions_per_game?: true
    down_1_receiving_yards_per_game?: true
    down_3_attempts?: true
    down_3_completions?: true
    down_3_passing_yards?: true
  }

  export type PlayerSeasonMaxAggregateInputType = {
    player_id?: true
    season?: true
    player_name?: true
    team?: true
    position?: true
    head_coach?: true
    offensive_coordinator?: true
    games_played?: true
    completions_total?: true
    attempts_total?: true
    passing_yards_total?: true
    passing_tds_total?: true
    interceptions_total?: true
    sacks_total?: true
    carries_total?: true
    rushing_yards_total?: true
    rushing_tds_total?: true
    rushing_first_downs_total?: true
    targets_total?: true
    receptions_total?: true
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
    sacks_avg?: true
    passing_air_yards_avg?: true
    passing_yards_after_catch_avg?: true
    carries_avg?: true
    rushing_yards_avg?: true
    rushing_tds_avg?: true
    rushing_fumbles_avg?: true
    rushing_first_downs_avg?: true
    rushing_epa_avg?: true
    receptions_avg?: true
    targets_avg?: true
    receiving_yards_avg?: true
    receiving_tds_avg?: true
    receiving_air_yards_avg?: true
    receiving_yards_after_catch_avg?: true
    receiving_first_downs_avg?: true
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
    green_zone_carries?: true
    HVTs?: true
    avg_pass_epa_deep_left?: true
    avg_pass_epa_deep_middle?: true
    avg_pass_epa_deep_right?: true
    avg_pass_epa_short_left?: true
    avg_pass_epa_short_middle?: true
    avg_pass_epa_short_right?: true
    total_tackled_for_loss?: true
    total_rushes?: true
    pct_carries_tackled_for_loss?: true
    rec_avg_rec_epa_deep_left?: true
    rec_avg_rec_epa_deep_middle?: true
    rec_avg_rec_epa_deep_right?: true
    rec_avg_rec_epa_short_left?: true
    rec_avg_rec_epa_short_middle?: true
    rec_avg_rec_epa_short_right?: true
    rec_pct_targets_deep_left?: true
    rec_pct_targets_deep_middle?: true
    rec_pct_targets_deep_right?: true
    rec_pct_targets_short_left?: true
    rec_pct_targets_short_middle?: true
    rec_pct_targets_short_right?: true
    down_1_attempts?: true
    down_1_completions?: true
    down_1_passing_yards?: true
    down_1_carries?: true
    down_1_rushing_yards?: true
    down_1_targets?: true
    down_1_receptions?: true
    down_1_receiving_yards?: true
    down_1_team_carries_in_played_games?: true
    down_1_team_targets_in_played_games?: true
    down_1_team_receptions_in_played_games?: true
    down_1_team_carries_all_games?: true
    down_1_team_targets_all_games?: true
    down_1_team_receptions_all_games?: true
    down_1_yards_per_target?: true
    down_1_yards_per_reception?: true
    down_1_pass_attempts_per_game?: true
    down_1_completions_per_game?: true
    down_1_carries_per_game?: true
    down_1_rushing_yards_per_game?: true
    down_1_targets_per_game?: true
    down_1_receptions_per_game?: true
    down_1_receiving_yards_per_game?: true
    down_3_attempts?: true
    down_3_completions?: true
    down_3_passing_yards?: true
  }

  export type PlayerSeasonCountAggregateInputType = {
    player_id?: true
    season?: true
    player_name?: true
    team?: true
    position?: true
    head_coach?: true
    offensive_coordinator?: true
    games_played?: true
    completions_total?: true
    attempts_total?: true
    passing_yards_total?: true
    passing_tds_total?: true
    interceptions_total?: true
    sacks_total?: true
    carries_total?: true
    rushing_yards_total?: true
    rushing_tds_total?: true
    rushing_first_downs_total?: true
    targets_total?: true
    receptions_total?: true
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
    sacks_avg?: true
    passing_air_yards_avg?: true
    passing_yards_after_catch_avg?: true
    carries_avg?: true
    rushing_yards_avg?: true
    rushing_tds_avg?: true
    rushing_fumbles_avg?: true
    rushing_first_downs_avg?: true
    rushing_epa_avg?: true
    receptions_avg?: true
    targets_avg?: true
    receiving_yards_avg?: true
    receiving_tds_avg?: true
    receiving_air_yards_avg?: true
    receiving_yards_after_catch_avg?: true
    receiving_first_downs_avg?: true
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
    green_zone_carries?: true
    HVTs?: true
    avg_pass_epa_deep_left?: true
    avg_pass_epa_deep_middle?: true
    avg_pass_epa_deep_right?: true
    avg_pass_epa_short_left?: true
    avg_pass_epa_short_middle?: true
    avg_pass_epa_short_right?: true
    total_tackled_for_loss?: true
    total_rushes?: true
    pct_carries_tackled_for_loss?: true
    rec_avg_rec_epa_deep_left?: true
    rec_avg_rec_epa_deep_middle?: true
    rec_avg_rec_epa_deep_right?: true
    rec_avg_rec_epa_short_left?: true
    rec_avg_rec_epa_short_middle?: true
    rec_avg_rec_epa_short_right?: true
    rec_pct_targets_deep_left?: true
    rec_pct_targets_deep_middle?: true
    rec_pct_targets_deep_right?: true
    rec_pct_targets_short_left?: true
    rec_pct_targets_short_middle?: true
    rec_pct_targets_short_right?: true
    down_1_attempts?: true
    down_1_completions?: true
    down_1_passing_yards?: true
    down_1_carries?: true
    down_1_rushing_yards?: true
    down_1_targets?: true
    down_1_receptions?: true
    down_1_receiving_yards?: true
    down_1_team_carries_in_played_games?: true
    down_1_team_targets_in_played_games?: true
    down_1_team_receptions_in_played_games?: true
    down_1_team_carries_all_games?: true
    down_1_team_targets_all_games?: true
    down_1_team_receptions_all_games?: true
    down_1_yards_per_target?: true
    down_1_yards_per_reception?: true
    down_1_pass_attempts_per_game?: true
    down_1_completions_per_game?: true
    down_1_carries_per_game?: true
    down_1_rushing_yards_per_game?: true
    down_1_targets_per_game?: true
    down_1_receptions_per_game?: true
    down_1_receiving_yards_per_game?: true
    down_3_attempts?: true
    down_3_completions?: true
    down_3_passing_yards?: true
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
    season: number
    player_name: string | null
    team: string | null
    position: string | null
    head_coach: string | null
    offensive_coordinator: string | null
    games_played: number | null
    completions_total: number | null
    attempts_total: number | null
    passing_yards_total: number | null
    passing_tds_total: number | null
    interceptions_total: number | null
    sacks_total: number | null
    carries_total: number | null
    rushing_yards_total: number | null
    rushing_tds_total: number | null
    rushing_first_downs_total: number | null
    targets_total: number | null
    receptions_total: number | null
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
    sacks_avg: number | null
    passing_air_yards_avg: number | null
    passing_yards_after_catch_avg: number | null
    carries_avg: number | null
    rushing_yards_avg: number | null
    rushing_tds_avg: number | null
    rushing_fumbles_avg: number | null
    rushing_first_downs_avg: number | null
    rushing_epa_avg: number | null
    receptions_avg: number | null
    targets_avg: number | null
    receiving_yards_avg: number | null
    receiving_tds_avg: number | null
    receiving_air_yards_avg: number | null
    receiving_yards_after_catch_avg: number | null
    receiving_first_downs_avg: number | null
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
    green_zone_carries: number | null
    HVTs: number | null
    avg_pass_epa_deep_left: number | null
    avg_pass_epa_deep_middle: number | null
    avg_pass_epa_deep_right: number | null
    avg_pass_epa_short_left: number | null
    avg_pass_epa_short_middle: number | null
    avg_pass_epa_short_right: number | null
    total_tackled_for_loss: number | null
    total_rushes: number | null
    pct_carries_tackled_for_loss: number | null
    rec_avg_rec_epa_deep_left: number | null
    rec_avg_rec_epa_deep_middle: number | null
    rec_avg_rec_epa_deep_right: number | null
    rec_avg_rec_epa_short_left: number | null
    rec_avg_rec_epa_short_middle: number | null
    rec_avg_rec_epa_short_right: number | null
    rec_pct_targets_deep_left: number | null
    rec_pct_targets_deep_middle: number | null
    rec_pct_targets_deep_right: number | null
    rec_pct_targets_short_left: number | null
    rec_pct_targets_short_middle: number | null
    rec_pct_targets_short_right: number | null
    down_1_attempts: number | null
    down_1_completions: number | null
    down_1_passing_yards: number | null
    down_1_carries: number | null
    down_1_rushing_yards: number | null
    down_1_targets: number | null
    down_1_receptions: number | null
    down_1_receiving_yards: number | null
    down_1_team_carries_in_played_games: number | null
    down_1_team_targets_in_played_games: number | null
    down_1_team_receptions_in_played_games: number | null
    down_1_team_carries_all_games: number | null
    down_1_team_targets_all_games: number | null
    down_1_team_receptions_all_games: number | null
    down_1_yards_per_target: number | null
    down_1_yards_per_reception: number | null
    down_1_pass_attempts_per_game: number | null
    down_1_completions_per_game: number | null
    down_1_carries_per_game: number | null
    down_1_rushing_yards_per_game: number | null
    down_1_targets_per_game: number | null
    down_1_receptions_per_game: number | null
    down_1_receiving_yards_per_game: number | null
    down_3_attempts: number | null
    down_3_completions: number | null
    down_3_passing_yards: number | null
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
    season?: boolean
    player_name?: boolean
    team?: boolean
    position?: boolean
    head_coach?: boolean
    offensive_coordinator?: boolean
    games_played?: boolean
    completions_total?: boolean
    attempts_total?: boolean
    passing_yards_total?: boolean
    passing_tds_total?: boolean
    interceptions_total?: boolean
    sacks_total?: boolean
    carries_total?: boolean
    rushing_yards_total?: boolean
    rushing_tds_total?: boolean
    rushing_first_downs_total?: boolean
    targets_total?: boolean
    receptions_total?: boolean
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
    sacks_avg?: boolean
    passing_air_yards_avg?: boolean
    passing_yards_after_catch_avg?: boolean
    carries_avg?: boolean
    rushing_yards_avg?: boolean
    rushing_tds_avg?: boolean
    rushing_fumbles_avg?: boolean
    rushing_first_downs_avg?: boolean
    rushing_epa_avg?: boolean
    receptions_avg?: boolean
    targets_avg?: boolean
    receiving_yards_avg?: boolean
    receiving_tds_avg?: boolean
    receiving_air_yards_avg?: boolean
    receiving_yards_after_catch_avg?: boolean
    receiving_first_downs_avg?: boolean
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
    green_zone_carries?: boolean
    HVTs?: boolean
    avg_pass_epa_deep_left?: boolean
    avg_pass_epa_deep_middle?: boolean
    avg_pass_epa_deep_right?: boolean
    avg_pass_epa_short_left?: boolean
    avg_pass_epa_short_middle?: boolean
    avg_pass_epa_short_right?: boolean
    total_tackled_for_loss?: boolean
    total_rushes?: boolean
    pct_carries_tackled_for_loss?: boolean
    rec_avg_rec_epa_deep_left?: boolean
    rec_avg_rec_epa_deep_middle?: boolean
    rec_avg_rec_epa_deep_right?: boolean
    rec_avg_rec_epa_short_left?: boolean
    rec_avg_rec_epa_short_middle?: boolean
    rec_avg_rec_epa_short_right?: boolean
    rec_pct_targets_deep_left?: boolean
    rec_pct_targets_deep_middle?: boolean
    rec_pct_targets_deep_right?: boolean
    rec_pct_targets_short_left?: boolean
    rec_pct_targets_short_middle?: boolean
    rec_pct_targets_short_right?: boolean
    down_1_attempts?: boolean
    down_1_completions?: boolean
    down_1_passing_yards?: boolean
    down_1_carries?: boolean
    down_1_rushing_yards?: boolean
    down_1_targets?: boolean
    down_1_receptions?: boolean
    down_1_receiving_yards?: boolean
    down_1_team_carries_in_played_games?: boolean
    down_1_team_targets_in_played_games?: boolean
    down_1_team_receptions_in_played_games?: boolean
    down_1_team_carries_all_games?: boolean
    down_1_team_targets_all_games?: boolean
    down_1_team_receptions_all_games?: boolean
    down_1_yards_per_target?: boolean
    down_1_yards_per_reception?: boolean
    down_1_pass_attempts_per_game?: boolean
    down_1_completions_per_game?: boolean
    down_1_carries_per_game?: boolean
    down_1_rushing_yards_per_game?: boolean
    down_1_targets_per_game?: boolean
    down_1_receptions_per_game?: boolean
    down_1_receiving_yards_per_game?: boolean
    down_3_attempts?: boolean
    down_3_completions?: boolean
    down_3_passing_yards?: boolean
  }, ExtArgs["result"]["playerSeason"]>

  export type PlayerSeasonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    season?: boolean
    player_name?: boolean
    team?: boolean
    position?: boolean
    head_coach?: boolean
    offensive_coordinator?: boolean
    games_played?: boolean
    completions_total?: boolean
    attempts_total?: boolean
    passing_yards_total?: boolean
    passing_tds_total?: boolean
    interceptions_total?: boolean
    sacks_total?: boolean
    carries_total?: boolean
    rushing_yards_total?: boolean
    rushing_tds_total?: boolean
    rushing_first_downs_total?: boolean
    targets_total?: boolean
    receptions_total?: boolean
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
    sacks_avg?: boolean
    passing_air_yards_avg?: boolean
    passing_yards_after_catch_avg?: boolean
    carries_avg?: boolean
    rushing_yards_avg?: boolean
    rushing_tds_avg?: boolean
    rushing_fumbles_avg?: boolean
    rushing_first_downs_avg?: boolean
    rushing_epa_avg?: boolean
    receptions_avg?: boolean
    targets_avg?: boolean
    receiving_yards_avg?: boolean
    receiving_tds_avg?: boolean
    receiving_air_yards_avg?: boolean
    receiving_yards_after_catch_avg?: boolean
    receiving_first_downs_avg?: boolean
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
    green_zone_carries?: boolean
    HVTs?: boolean
    avg_pass_epa_deep_left?: boolean
    avg_pass_epa_deep_middle?: boolean
    avg_pass_epa_deep_right?: boolean
    avg_pass_epa_short_left?: boolean
    avg_pass_epa_short_middle?: boolean
    avg_pass_epa_short_right?: boolean
    total_tackled_for_loss?: boolean
    total_rushes?: boolean
    pct_carries_tackled_for_loss?: boolean
    rec_avg_rec_epa_deep_left?: boolean
    rec_avg_rec_epa_deep_middle?: boolean
    rec_avg_rec_epa_deep_right?: boolean
    rec_avg_rec_epa_short_left?: boolean
    rec_avg_rec_epa_short_middle?: boolean
    rec_avg_rec_epa_short_right?: boolean
    rec_pct_targets_deep_left?: boolean
    rec_pct_targets_deep_middle?: boolean
    rec_pct_targets_deep_right?: boolean
    rec_pct_targets_short_left?: boolean
    rec_pct_targets_short_middle?: boolean
    rec_pct_targets_short_right?: boolean
    down_1_attempts?: boolean
    down_1_completions?: boolean
    down_1_passing_yards?: boolean
    down_1_carries?: boolean
    down_1_rushing_yards?: boolean
    down_1_targets?: boolean
    down_1_receptions?: boolean
    down_1_receiving_yards?: boolean
    down_1_team_carries_in_played_games?: boolean
    down_1_team_targets_in_played_games?: boolean
    down_1_team_receptions_in_played_games?: boolean
    down_1_team_carries_all_games?: boolean
    down_1_team_targets_all_games?: boolean
    down_1_team_receptions_all_games?: boolean
    down_1_yards_per_target?: boolean
    down_1_yards_per_reception?: boolean
    down_1_pass_attempts_per_game?: boolean
    down_1_completions_per_game?: boolean
    down_1_carries_per_game?: boolean
    down_1_rushing_yards_per_game?: boolean
    down_1_targets_per_game?: boolean
    down_1_receptions_per_game?: boolean
    down_1_receiving_yards_per_game?: boolean
    down_3_attempts?: boolean
    down_3_completions?: boolean
    down_3_passing_yards?: boolean
  }, ExtArgs["result"]["playerSeason"]>

  export type PlayerSeasonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    season?: boolean
    player_name?: boolean
    team?: boolean
    position?: boolean
    head_coach?: boolean
    offensive_coordinator?: boolean
    games_played?: boolean
    completions_total?: boolean
    attempts_total?: boolean
    passing_yards_total?: boolean
    passing_tds_total?: boolean
    interceptions_total?: boolean
    sacks_total?: boolean
    carries_total?: boolean
    rushing_yards_total?: boolean
    rushing_tds_total?: boolean
    rushing_first_downs_total?: boolean
    targets_total?: boolean
    receptions_total?: boolean
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
    sacks_avg?: boolean
    passing_air_yards_avg?: boolean
    passing_yards_after_catch_avg?: boolean
    carries_avg?: boolean
    rushing_yards_avg?: boolean
    rushing_tds_avg?: boolean
    rushing_fumbles_avg?: boolean
    rushing_first_downs_avg?: boolean
    rushing_epa_avg?: boolean
    receptions_avg?: boolean
    targets_avg?: boolean
    receiving_yards_avg?: boolean
    receiving_tds_avg?: boolean
    receiving_air_yards_avg?: boolean
    receiving_yards_after_catch_avg?: boolean
    receiving_first_downs_avg?: boolean
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
    green_zone_carries?: boolean
    HVTs?: boolean
    avg_pass_epa_deep_left?: boolean
    avg_pass_epa_deep_middle?: boolean
    avg_pass_epa_deep_right?: boolean
    avg_pass_epa_short_left?: boolean
    avg_pass_epa_short_middle?: boolean
    avg_pass_epa_short_right?: boolean
    total_tackled_for_loss?: boolean
    total_rushes?: boolean
    pct_carries_tackled_for_loss?: boolean
    rec_avg_rec_epa_deep_left?: boolean
    rec_avg_rec_epa_deep_middle?: boolean
    rec_avg_rec_epa_deep_right?: boolean
    rec_avg_rec_epa_short_left?: boolean
    rec_avg_rec_epa_short_middle?: boolean
    rec_avg_rec_epa_short_right?: boolean
    rec_pct_targets_deep_left?: boolean
    rec_pct_targets_deep_middle?: boolean
    rec_pct_targets_deep_right?: boolean
    rec_pct_targets_short_left?: boolean
    rec_pct_targets_short_middle?: boolean
    rec_pct_targets_short_right?: boolean
    down_1_attempts?: boolean
    down_1_completions?: boolean
    down_1_passing_yards?: boolean
    down_1_carries?: boolean
    down_1_rushing_yards?: boolean
    down_1_targets?: boolean
    down_1_receptions?: boolean
    down_1_receiving_yards?: boolean
    down_1_team_carries_in_played_games?: boolean
    down_1_team_targets_in_played_games?: boolean
    down_1_team_receptions_in_played_games?: boolean
    down_1_team_carries_all_games?: boolean
    down_1_team_targets_all_games?: boolean
    down_1_team_receptions_all_games?: boolean
    down_1_yards_per_target?: boolean
    down_1_yards_per_reception?: boolean
    down_1_pass_attempts_per_game?: boolean
    down_1_completions_per_game?: boolean
    down_1_carries_per_game?: boolean
    down_1_rushing_yards_per_game?: boolean
    down_1_targets_per_game?: boolean
    down_1_receptions_per_game?: boolean
    down_1_receiving_yards_per_game?: boolean
    down_3_attempts?: boolean
    down_3_completions?: boolean
    down_3_passing_yards?: boolean
  }, ExtArgs["result"]["playerSeason"]>

  export type PlayerSeasonSelectScalar = {
    player_id?: boolean
    season?: boolean
    player_name?: boolean
    team?: boolean
    position?: boolean
    head_coach?: boolean
    offensive_coordinator?: boolean
    games_played?: boolean
    completions_total?: boolean
    attempts_total?: boolean
    passing_yards_total?: boolean
    passing_tds_total?: boolean
    interceptions_total?: boolean
    sacks_total?: boolean
    carries_total?: boolean
    rushing_yards_total?: boolean
    rushing_tds_total?: boolean
    rushing_first_downs_total?: boolean
    targets_total?: boolean
    receptions_total?: boolean
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
    sacks_avg?: boolean
    passing_air_yards_avg?: boolean
    passing_yards_after_catch_avg?: boolean
    carries_avg?: boolean
    rushing_yards_avg?: boolean
    rushing_tds_avg?: boolean
    rushing_fumbles_avg?: boolean
    rushing_first_downs_avg?: boolean
    rushing_epa_avg?: boolean
    receptions_avg?: boolean
    targets_avg?: boolean
    receiving_yards_avg?: boolean
    receiving_tds_avg?: boolean
    receiving_air_yards_avg?: boolean
    receiving_yards_after_catch_avg?: boolean
    receiving_first_downs_avg?: boolean
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
    green_zone_carries?: boolean
    HVTs?: boolean
    avg_pass_epa_deep_left?: boolean
    avg_pass_epa_deep_middle?: boolean
    avg_pass_epa_deep_right?: boolean
    avg_pass_epa_short_left?: boolean
    avg_pass_epa_short_middle?: boolean
    avg_pass_epa_short_right?: boolean
    total_tackled_for_loss?: boolean
    total_rushes?: boolean
    pct_carries_tackled_for_loss?: boolean
    rec_avg_rec_epa_deep_left?: boolean
    rec_avg_rec_epa_deep_middle?: boolean
    rec_avg_rec_epa_deep_right?: boolean
    rec_avg_rec_epa_short_left?: boolean
    rec_avg_rec_epa_short_middle?: boolean
    rec_avg_rec_epa_short_right?: boolean
    rec_pct_targets_deep_left?: boolean
    rec_pct_targets_deep_middle?: boolean
    rec_pct_targets_deep_right?: boolean
    rec_pct_targets_short_left?: boolean
    rec_pct_targets_short_middle?: boolean
    rec_pct_targets_short_right?: boolean
    down_1_attempts?: boolean
    down_1_completions?: boolean
    down_1_passing_yards?: boolean
    down_1_carries?: boolean
    down_1_rushing_yards?: boolean
    down_1_targets?: boolean
    down_1_receptions?: boolean
    down_1_receiving_yards?: boolean
    down_1_team_carries_in_played_games?: boolean
    down_1_team_targets_in_played_games?: boolean
    down_1_team_receptions_in_played_games?: boolean
    down_1_team_carries_all_games?: boolean
    down_1_team_targets_all_games?: boolean
    down_1_team_receptions_all_games?: boolean
    down_1_yards_per_target?: boolean
    down_1_yards_per_reception?: boolean
    down_1_pass_attempts_per_game?: boolean
    down_1_completions_per_game?: boolean
    down_1_carries_per_game?: boolean
    down_1_rushing_yards_per_game?: boolean
    down_1_targets_per_game?: boolean
    down_1_receptions_per_game?: boolean
    down_1_receiving_yards_per_game?: boolean
    down_3_attempts?: boolean
    down_3_completions?: boolean
    down_3_passing_yards?: boolean
  }

  export type PlayerSeasonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"player_id" | "season" | "player_name" | "team" | "position" | "head_coach" | "offensive_coordinator" | "games_played" | "completions_total" | "attempts_total" | "passing_yards_total" | "passing_tds_total" | "interceptions_total" | "sacks_total" | "carries_total" | "rushing_yards_total" | "rushing_tds_total" | "rushing_first_downs_total" | "targets_total" | "receptions_total" | "receiving_yards_total" | "receiving_tds_total" | "receiving_air_yards_total" | "receiving_yards_after_catch_total" | "receiving_first_downs_total" | "fantasy_points_total" | "completions_avg" | "attempts_avg" | "passing_yards_avg" | "passing_tds_avg" | "interceptions_avg" | "sacks_avg" | "passing_air_yards_avg" | "passing_yards_after_catch_avg" | "carries_avg" | "rushing_yards_avg" | "rushing_tds_avg" | "rushing_fumbles_avg" | "rushing_first_downs_avg" | "rushing_epa_avg" | "receptions_avg" | "targets_avg" | "receiving_yards_avg" | "receiving_tds_avg" | "receiving_air_yards_avg" | "receiving_yards_after_catch_avg" | "receiving_first_downs_avg" | "racr_avg" | "target_share_avg" | "air_yards_share_avg" | "wopr_avg" | "fantasy_points_avg" | "fantasy_points_ppr_avg" | "YPRR" | "routes" | "routes_per_game" | "TPRR" | "firstDPRR" | "green_zone_carries" | "HVTs" | "avg_pass_epa_deep_left" | "avg_pass_epa_deep_middle" | "avg_pass_epa_deep_right" | "avg_pass_epa_short_left" | "avg_pass_epa_short_middle" | "avg_pass_epa_short_right" | "total_tackled_for_loss" | "total_rushes" | "pct_carries_tackled_for_loss" | "rec_avg_rec_epa_deep_left" | "rec_avg_rec_epa_deep_middle" | "rec_avg_rec_epa_deep_right" | "rec_avg_rec_epa_short_left" | "rec_avg_rec_epa_short_middle" | "rec_avg_rec_epa_short_right" | "rec_pct_targets_deep_left" | "rec_pct_targets_deep_middle" | "rec_pct_targets_deep_right" | "rec_pct_targets_short_left" | "rec_pct_targets_short_middle" | "rec_pct_targets_short_right" | "down_1_attempts" | "down_1_completions" | "down_1_passing_yards" | "down_1_carries" | "down_1_rushing_yards" | "down_1_targets" | "down_1_receptions" | "down_1_receiving_yards" | "down_1_team_carries_in_played_games" | "down_1_team_targets_in_played_games" | "down_1_team_receptions_in_played_games" | "down_1_team_carries_all_games" | "down_1_team_targets_all_games" | "down_1_team_receptions_all_games" | "down_1_yards_per_target" | "down_1_yards_per_reception" | "down_1_pass_attempts_per_game" | "down_1_completions_per_game" | "down_1_carries_per_game" | "down_1_rushing_yards_per_game" | "down_1_targets_per_game" | "down_1_receptions_per_game" | "down_1_receiving_yards_per_game" | "down_3_attempts" | "down_3_completions" | "down_3_passing_yards", ExtArgs["result"]["playerSeason"]>

  export type $PlayerSeasonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerSeason"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      player_id: string
      season: number
      player_name: string | null
      team: string | null
      position: string | null
      head_coach: string | null
      offensive_coordinator: string | null
      games_played: number | null
      completions_total: number | null
      attempts_total: number | null
      passing_yards_total: number | null
      passing_tds_total: number | null
      interceptions_total: number | null
      sacks_total: number | null
      carries_total: number | null
      rushing_yards_total: number | null
      rushing_tds_total: number | null
      rushing_first_downs_total: number | null
      targets_total: number | null
      receptions_total: number | null
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
      sacks_avg: number | null
      passing_air_yards_avg: number | null
      passing_yards_after_catch_avg: number | null
      carries_avg: number | null
      rushing_yards_avg: number | null
      rushing_tds_avg: number | null
      rushing_fumbles_avg: number | null
      rushing_first_downs_avg: number | null
      rushing_epa_avg: number | null
      receptions_avg: number | null
      targets_avg: number | null
      receiving_yards_avg: number | null
      receiving_tds_avg: number | null
      receiving_air_yards_avg: number | null
      receiving_yards_after_catch_avg: number | null
      receiving_first_downs_avg: number | null
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
      green_zone_carries: number | null
      HVTs: number | null
      avg_pass_epa_deep_left: number | null
      avg_pass_epa_deep_middle: number | null
      avg_pass_epa_deep_right: number | null
      avg_pass_epa_short_left: number | null
      avg_pass_epa_short_middle: number | null
      avg_pass_epa_short_right: number | null
      total_tackled_for_loss: number | null
      total_rushes: number | null
      pct_carries_tackled_for_loss: number | null
      rec_avg_rec_epa_deep_left: number | null
      rec_avg_rec_epa_deep_middle: number | null
      rec_avg_rec_epa_deep_right: number | null
      rec_avg_rec_epa_short_left: number | null
      rec_avg_rec_epa_short_middle: number | null
      rec_avg_rec_epa_short_right: number | null
      rec_pct_targets_deep_left: number | null
      rec_pct_targets_deep_middle: number | null
      rec_pct_targets_deep_right: number | null
      rec_pct_targets_short_left: number | null
      rec_pct_targets_short_middle: number | null
      rec_pct_targets_short_right: number | null
      down_1_attempts: number | null
      down_1_completions: number | null
      down_1_passing_yards: number | null
      down_1_carries: number | null
      down_1_rushing_yards: number | null
      down_1_targets: number | null
      down_1_receptions: number | null
      down_1_receiving_yards: number | null
      down_1_team_carries_in_played_games: number | null
      down_1_team_targets_in_played_games: number | null
      down_1_team_receptions_in_played_games: number | null
      down_1_team_carries_all_games: number | null
      down_1_team_targets_all_games: number | null
      down_1_team_receptions_all_games: number | null
      down_1_yards_per_target: number | null
      down_1_yards_per_reception: number | null
      down_1_pass_attempts_per_game: number | null
      down_1_completions_per_game: number | null
      down_1_carries_per_game: number | null
      down_1_rushing_yards_per_game: number | null
      down_1_targets_per_game: number | null
      down_1_receptions_per_game: number | null
      down_1_receiving_yards_per_game: number | null
      down_3_attempts: number | null
      down_3_completions: number | null
      down_3_passing_yards: number | null
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
    readonly season: FieldRef<"PlayerSeason", 'Int'>
    readonly player_name: FieldRef<"PlayerSeason", 'String'>
    readonly team: FieldRef<"PlayerSeason", 'String'>
    readonly position: FieldRef<"PlayerSeason", 'String'>
    readonly head_coach: FieldRef<"PlayerSeason", 'String'>
    readonly offensive_coordinator: FieldRef<"PlayerSeason", 'String'>
    readonly games_played: FieldRef<"PlayerSeason", 'Int'>
    readonly completions_total: FieldRef<"PlayerSeason", 'Float'>
    readonly attempts_total: FieldRef<"PlayerSeason", 'Float'>
    readonly passing_yards_total: FieldRef<"PlayerSeason", 'Float'>
    readonly passing_tds_total: FieldRef<"PlayerSeason", 'Float'>
    readonly interceptions_total: FieldRef<"PlayerSeason", 'Float'>
    readonly sacks_total: FieldRef<"PlayerSeason", 'Float'>
    readonly carries_total: FieldRef<"PlayerSeason", 'Float'>
    readonly rushing_yards_total: FieldRef<"PlayerSeason", 'Float'>
    readonly rushing_tds_total: FieldRef<"PlayerSeason", 'Float'>
    readonly rushing_first_downs_total: FieldRef<"PlayerSeason", 'Float'>
    readonly targets_total: FieldRef<"PlayerSeason", 'Float'>
    readonly receptions_total: FieldRef<"PlayerSeason", 'Float'>
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
    readonly sacks_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly passing_air_yards_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly passing_yards_after_catch_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly carries_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly rushing_yards_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly rushing_tds_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly rushing_fumbles_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly rushing_first_downs_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly rushing_epa_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly receptions_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly targets_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly receiving_yards_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly receiving_tds_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly receiving_air_yards_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly receiving_yards_after_catch_avg: FieldRef<"PlayerSeason", 'Float'>
    readonly receiving_first_downs_avg: FieldRef<"PlayerSeason", 'Float'>
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
    readonly green_zone_carries: FieldRef<"PlayerSeason", 'Float'>
    readonly HVTs: FieldRef<"PlayerSeason", 'Float'>
    readonly avg_pass_epa_deep_left: FieldRef<"PlayerSeason", 'Float'>
    readonly avg_pass_epa_deep_middle: FieldRef<"PlayerSeason", 'Float'>
    readonly avg_pass_epa_deep_right: FieldRef<"PlayerSeason", 'Float'>
    readonly avg_pass_epa_short_left: FieldRef<"PlayerSeason", 'Float'>
    readonly avg_pass_epa_short_middle: FieldRef<"PlayerSeason", 'Float'>
    readonly avg_pass_epa_short_right: FieldRef<"PlayerSeason", 'Float'>
    readonly total_tackled_for_loss: FieldRef<"PlayerSeason", 'Float'>
    readonly total_rushes: FieldRef<"PlayerSeason", 'Float'>
    readonly pct_carries_tackled_for_loss: FieldRef<"PlayerSeason", 'Float'>
    readonly rec_avg_rec_epa_deep_left: FieldRef<"PlayerSeason", 'Float'>
    readonly rec_avg_rec_epa_deep_middle: FieldRef<"PlayerSeason", 'Float'>
    readonly rec_avg_rec_epa_deep_right: FieldRef<"PlayerSeason", 'Float'>
    readonly rec_avg_rec_epa_short_left: FieldRef<"PlayerSeason", 'Float'>
    readonly rec_avg_rec_epa_short_middle: FieldRef<"PlayerSeason", 'Float'>
    readonly rec_avg_rec_epa_short_right: FieldRef<"PlayerSeason", 'Float'>
    readonly rec_pct_targets_deep_left: FieldRef<"PlayerSeason", 'Float'>
    readonly rec_pct_targets_deep_middle: FieldRef<"PlayerSeason", 'Float'>
    readonly rec_pct_targets_deep_right: FieldRef<"PlayerSeason", 'Float'>
    readonly rec_pct_targets_short_left: FieldRef<"PlayerSeason", 'Float'>
    readonly rec_pct_targets_short_middle: FieldRef<"PlayerSeason", 'Float'>
    readonly rec_pct_targets_short_right: FieldRef<"PlayerSeason", 'Float'>
    readonly down_1_attempts: FieldRef<"PlayerSeason", 'Int'>
    readonly down_1_completions: FieldRef<"PlayerSeason", 'Int'>
    readonly down_1_passing_yards: FieldRef<"PlayerSeason", 'Float'>
    readonly down_1_carries: FieldRef<"PlayerSeason", 'Int'>
    readonly down_1_rushing_yards: FieldRef<"PlayerSeason", 'Float'>
    readonly down_1_targets: FieldRef<"PlayerSeason", 'Int'>
    readonly down_1_receptions: FieldRef<"PlayerSeason", 'Int'>
    readonly down_1_receiving_yards: FieldRef<"PlayerSeason", 'Float'>
    readonly down_1_team_carries_in_played_games: FieldRef<"PlayerSeason", 'Int'>
    readonly down_1_team_targets_in_played_games: FieldRef<"PlayerSeason", 'Int'>
    readonly down_1_team_receptions_in_played_games: FieldRef<"PlayerSeason", 'Int'>
    readonly down_1_team_carries_all_games: FieldRef<"PlayerSeason", 'Int'>
    readonly down_1_team_targets_all_games: FieldRef<"PlayerSeason", 'Int'>
    readonly down_1_team_receptions_all_games: FieldRef<"PlayerSeason", 'Int'>
    readonly down_1_yards_per_target: FieldRef<"PlayerSeason", 'Float'>
    readonly down_1_yards_per_reception: FieldRef<"PlayerSeason", 'Float'>
    readonly down_1_pass_attempts_per_game: FieldRef<"PlayerSeason", 'Float'>
    readonly down_1_completions_per_game: FieldRef<"PlayerSeason", 'Float'>
    readonly down_1_carries_per_game: FieldRef<"PlayerSeason", 'Float'>
    readonly down_1_rushing_yards_per_game: FieldRef<"PlayerSeason", 'Float'>
    readonly down_1_targets_per_game: FieldRef<"PlayerSeason", 'Float'>
    readonly down_1_receptions_per_game: FieldRef<"PlayerSeason", 'Float'>
    readonly down_1_receiving_yards_per_game: FieldRef<"PlayerSeason", 'Float'>
    readonly down_3_attempts: FieldRef<"PlayerSeason", 'Float'>
    readonly down_3_completions: FieldRef<"PlayerSeason", 'Int'>
    readonly down_3_passing_yards: FieldRef<"PlayerSeason", 'Float'>
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
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    query: string | null
    sql: string | null
    isExpected: boolean | null
    reason: string | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    query: string | null
    sql: string | null
    isExpected: boolean | null
    reason: string | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    createdAt: number
    query: number
    sql: number
    isExpected: number
    reason: number
    _all: number
  }


  export type FeedbackMinAggregateInputType = {
    id?: true
    createdAt?: true
    query?: true
    sql?: true
    isExpected?: true
    reason?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    createdAt?: true
    query?: true
    sql?: true
    isExpected?: true
    reason?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    createdAt?: true
    query?: true
    sql?: true
    isExpected?: true
    reason?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: string
    createdAt: Date
    query: string
    sql: string
    isExpected: boolean
    reason: string | null
    _count: FeedbackCountAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    query?: boolean
    sql?: boolean
    isExpected?: boolean
    reason?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    query?: boolean
    sql?: boolean
    isExpected?: boolean
    reason?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    query?: boolean
    sql?: boolean
    isExpected?: boolean
    reason?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    createdAt?: boolean
    query?: boolean
    sql?: boolean
    isExpected?: boolean
    reason?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "query" | "sql" | "isExpected" | "reason", ExtArgs["result"]["feedback"]>

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      query: string
      sql: string
      isExpected: boolean
      reason: string | null
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
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
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'String'>
    readonly createdAt: FieldRef<"Feedback", 'DateTime'>
    readonly query: FieldRef<"Feedback", 'String'>
    readonly sql: FieldRef<"Feedback", 'String'>
    readonly isExpected: FieldRef<"Feedback", 'Boolean'>
    readonly reason: FieldRef<"Feedback", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
  }


  /**
   * Model TeamSeasonStats
   */

  export type AggregateTeamSeasonStats = {
    _count: TeamSeasonStatsCountAggregateOutputType | null
    _avg: TeamSeasonStatsAvgAggregateOutputType | null
    _sum: TeamSeasonStatsSumAggregateOutputType | null
    _min: TeamSeasonStatsMinAggregateOutputType | null
    _max: TeamSeasonStatsMaxAggregateOutputType | null
  }

  export type TeamSeasonStatsAvgAggregateOutputType = {
    season: number | null
    team_green_zone_carries_all_games: number | null
    team_carries_all_games: number | null
    team_targets_all_games: number | null
    team_receptions_all_games: number | null
    team_rush_fd_all_games: number | null
    team_rec_fd_all_games: number | null
  }

  export type TeamSeasonStatsSumAggregateOutputType = {
    season: number | null
    team_green_zone_carries_all_games: number | null
    team_carries_all_games: number | null
    team_targets_all_games: number | null
    team_receptions_all_games: number | null
    team_rush_fd_all_games: number | null
    team_rec_fd_all_games: number | null
  }

  export type TeamSeasonStatsMinAggregateOutputType = {
    team: string | null
    season: number | null
    team_green_zone_carries_all_games: number | null
    team_carries_all_games: number | null
    team_targets_all_games: number | null
    team_receptions_all_games: number | null
    team_rush_fd_all_games: number | null
    team_rec_fd_all_games: number | null
  }

  export type TeamSeasonStatsMaxAggregateOutputType = {
    team: string | null
    season: number | null
    team_green_zone_carries_all_games: number | null
    team_carries_all_games: number | null
    team_targets_all_games: number | null
    team_receptions_all_games: number | null
    team_rush_fd_all_games: number | null
    team_rec_fd_all_games: number | null
  }

  export type TeamSeasonStatsCountAggregateOutputType = {
    team: number
    season: number
    team_green_zone_carries_all_games: number
    team_carries_all_games: number
    team_targets_all_games: number
    team_receptions_all_games: number
    team_rush_fd_all_games: number
    team_rec_fd_all_games: number
    _all: number
  }


  export type TeamSeasonStatsAvgAggregateInputType = {
    season?: true
    team_green_zone_carries_all_games?: true
    team_carries_all_games?: true
    team_targets_all_games?: true
    team_receptions_all_games?: true
    team_rush_fd_all_games?: true
    team_rec_fd_all_games?: true
  }

  export type TeamSeasonStatsSumAggregateInputType = {
    season?: true
    team_green_zone_carries_all_games?: true
    team_carries_all_games?: true
    team_targets_all_games?: true
    team_receptions_all_games?: true
    team_rush_fd_all_games?: true
    team_rec_fd_all_games?: true
  }

  export type TeamSeasonStatsMinAggregateInputType = {
    team?: true
    season?: true
    team_green_zone_carries_all_games?: true
    team_carries_all_games?: true
    team_targets_all_games?: true
    team_receptions_all_games?: true
    team_rush_fd_all_games?: true
    team_rec_fd_all_games?: true
  }

  export type TeamSeasonStatsMaxAggregateInputType = {
    team?: true
    season?: true
    team_green_zone_carries_all_games?: true
    team_carries_all_games?: true
    team_targets_all_games?: true
    team_receptions_all_games?: true
    team_rush_fd_all_games?: true
    team_rec_fd_all_games?: true
  }

  export type TeamSeasonStatsCountAggregateInputType = {
    team?: true
    season?: true
    team_green_zone_carries_all_games?: true
    team_carries_all_games?: true
    team_targets_all_games?: true
    team_receptions_all_games?: true
    team_rush_fd_all_games?: true
    team_rec_fd_all_games?: true
    _all?: true
  }

  export type TeamSeasonStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamSeasonStats to aggregate.
     */
    where?: TeamSeasonStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamSeasonStats to fetch.
     */
    orderBy?: TeamSeasonStatsOrderByWithRelationInput | TeamSeasonStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamSeasonStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamSeasonStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamSeasonStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamSeasonStats
    **/
    _count?: true | TeamSeasonStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamSeasonStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSeasonStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamSeasonStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamSeasonStatsMaxAggregateInputType
  }

  export type GetTeamSeasonStatsAggregateType<T extends TeamSeasonStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamSeasonStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamSeasonStats[P]>
      : GetScalarType<T[P], AggregateTeamSeasonStats[P]>
  }




  export type TeamSeasonStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamSeasonStatsWhereInput
    orderBy?: TeamSeasonStatsOrderByWithAggregationInput | TeamSeasonStatsOrderByWithAggregationInput[]
    by: TeamSeasonStatsScalarFieldEnum[] | TeamSeasonStatsScalarFieldEnum
    having?: TeamSeasonStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamSeasonStatsCountAggregateInputType | true
    _avg?: TeamSeasonStatsAvgAggregateInputType
    _sum?: TeamSeasonStatsSumAggregateInputType
    _min?: TeamSeasonStatsMinAggregateInputType
    _max?: TeamSeasonStatsMaxAggregateInputType
  }

  export type TeamSeasonStatsGroupByOutputType = {
    team: string
    season: number
    team_green_zone_carries_all_games: number | null
    team_carries_all_games: number | null
    team_targets_all_games: number | null
    team_receptions_all_games: number | null
    team_rush_fd_all_games: number | null
    team_rec_fd_all_games: number | null
    _count: TeamSeasonStatsCountAggregateOutputType | null
    _avg: TeamSeasonStatsAvgAggregateOutputType | null
    _sum: TeamSeasonStatsSumAggregateOutputType | null
    _min: TeamSeasonStatsMinAggregateOutputType | null
    _max: TeamSeasonStatsMaxAggregateOutputType | null
  }

  type GetTeamSeasonStatsGroupByPayload<T extends TeamSeasonStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamSeasonStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamSeasonStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamSeasonStatsGroupByOutputType[P]>
            : GetScalarType<T[P], TeamSeasonStatsGroupByOutputType[P]>
        }
      >
    >


  export type TeamSeasonStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    team?: boolean
    season?: boolean
    team_green_zone_carries_all_games?: boolean
    team_carries_all_games?: boolean
    team_targets_all_games?: boolean
    team_receptions_all_games?: boolean
    team_rush_fd_all_games?: boolean
    team_rec_fd_all_games?: boolean
  }, ExtArgs["result"]["teamSeasonStats"]>

  export type TeamSeasonStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    team?: boolean
    season?: boolean
    team_green_zone_carries_all_games?: boolean
    team_carries_all_games?: boolean
    team_targets_all_games?: boolean
    team_receptions_all_games?: boolean
    team_rush_fd_all_games?: boolean
    team_rec_fd_all_games?: boolean
  }, ExtArgs["result"]["teamSeasonStats"]>

  export type TeamSeasonStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    team?: boolean
    season?: boolean
    team_green_zone_carries_all_games?: boolean
    team_carries_all_games?: boolean
    team_targets_all_games?: boolean
    team_receptions_all_games?: boolean
    team_rush_fd_all_games?: boolean
    team_rec_fd_all_games?: boolean
  }, ExtArgs["result"]["teamSeasonStats"]>

  export type TeamSeasonStatsSelectScalar = {
    team?: boolean
    season?: boolean
    team_green_zone_carries_all_games?: boolean
    team_carries_all_games?: boolean
    team_targets_all_games?: boolean
    team_receptions_all_games?: boolean
    team_rush_fd_all_games?: boolean
    team_rec_fd_all_games?: boolean
  }

  export type TeamSeasonStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"team" | "season" | "team_green_zone_carries_all_games" | "team_carries_all_games" | "team_targets_all_games" | "team_receptions_all_games" | "team_rush_fd_all_games" | "team_rec_fd_all_games", ExtArgs["result"]["teamSeasonStats"]>

  export type $TeamSeasonStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamSeasonStats"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      team: string
      season: number
      team_green_zone_carries_all_games: number | null
      team_carries_all_games: number | null
      team_targets_all_games: number | null
      team_receptions_all_games: number | null
      team_rush_fd_all_games: number | null
      team_rec_fd_all_games: number | null
    }, ExtArgs["result"]["teamSeasonStats"]>
    composites: {}
  }

  type TeamSeasonStatsGetPayload<S extends boolean | null | undefined | TeamSeasonStatsDefaultArgs> = $Result.GetResult<Prisma.$TeamSeasonStatsPayload, S>

  type TeamSeasonStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamSeasonStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamSeasonStatsCountAggregateInputType | true
    }

  export interface TeamSeasonStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamSeasonStats'], meta: { name: 'TeamSeasonStats' } }
    /**
     * Find zero or one TeamSeasonStats that matches the filter.
     * @param {TeamSeasonStatsFindUniqueArgs} args - Arguments to find a TeamSeasonStats
     * @example
     * // Get one TeamSeasonStats
     * const teamSeasonStats = await prisma.teamSeasonStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamSeasonStatsFindUniqueArgs>(args: SelectSubset<T, TeamSeasonStatsFindUniqueArgs<ExtArgs>>): Prisma__TeamSeasonStatsClient<$Result.GetResult<Prisma.$TeamSeasonStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamSeasonStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamSeasonStatsFindUniqueOrThrowArgs} args - Arguments to find a TeamSeasonStats
     * @example
     * // Get one TeamSeasonStats
     * const teamSeasonStats = await prisma.teamSeasonStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamSeasonStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamSeasonStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamSeasonStatsClient<$Result.GetResult<Prisma.$TeamSeasonStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamSeasonStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamSeasonStatsFindFirstArgs} args - Arguments to find a TeamSeasonStats
     * @example
     * // Get one TeamSeasonStats
     * const teamSeasonStats = await prisma.teamSeasonStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamSeasonStatsFindFirstArgs>(args?: SelectSubset<T, TeamSeasonStatsFindFirstArgs<ExtArgs>>): Prisma__TeamSeasonStatsClient<$Result.GetResult<Prisma.$TeamSeasonStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamSeasonStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamSeasonStatsFindFirstOrThrowArgs} args - Arguments to find a TeamSeasonStats
     * @example
     * // Get one TeamSeasonStats
     * const teamSeasonStats = await prisma.teamSeasonStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamSeasonStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamSeasonStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamSeasonStatsClient<$Result.GetResult<Prisma.$TeamSeasonStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamSeasonStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamSeasonStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamSeasonStats
     * const teamSeasonStats = await prisma.teamSeasonStats.findMany()
     * 
     * // Get first 10 TeamSeasonStats
     * const teamSeasonStats = await prisma.teamSeasonStats.findMany({ take: 10 })
     * 
     * // Only select the `team`
     * const teamSeasonStatsWithTeamOnly = await prisma.teamSeasonStats.findMany({ select: { team: true } })
     * 
     */
    findMany<T extends TeamSeasonStatsFindManyArgs>(args?: SelectSubset<T, TeamSeasonStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamSeasonStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamSeasonStats.
     * @param {TeamSeasonStatsCreateArgs} args - Arguments to create a TeamSeasonStats.
     * @example
     * // Create one TeamSeasonStats
     * const TeamSeasonStats = await prisma.teamSeasonStats.create({
     *   data: {
     *     // ... data to create a TeamSeasonStats
     *   }
     * })
     * 
     */
    create<T extends TeamSeasonStatsCreateArgs>(args: SelectSubset<T, TeamSeasonStatsCreateArgs<ExtArgs>>): Prisma__TeamSeasonStatsClient<$Result.GetResult<Prisma.$TeamSeasonStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamSeasonStats.
     * @param {TeamSeasonStatsCreateManyArgs} args - Arguments to create many TeamSeasonStats.
     * @example
     * // Create many TeamSeasonStats
     * const teamSeasonStats = await prisma.teamSeasonStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamSeasonStatsCreateManyArgs>(args?: SelectSubset<T, TeamSeasonStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamSeasonStats and returns the data saved in the database.
     * @param {TeamSeasonStatsCreateManyAndReturnArgs} args - Arguments to create many TeamSeasonStats.
     * @example
     * // Create many TeamSeasonStats
     * const teamSeasonStats = await prisma.teamSeasonStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamSeasonStats and only return the `team`
     * const teamSeasonStatsWithTeamOnly = await prisma.teamSeasonStats.createManyAndReturn({
     *   select: { team: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamSeasonStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamSeasonStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamSeasonStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamSeasonStats.
     * @param {TeamSeasonStatsDeleteArgs} args - Arguments to delete one TeamSeasonStats.
     * @example
     * // Delete one TeamSeasonStats
     * const TeamSeasonStats = await prisma.teamSeasonStats.delete({
     *   where: {
     *     // ... filter to delete one TeamSeasonStats
     *   }
     * })
     * 
     */
    delete<T extends TeamSeasonStatsDeleteArgs>(args: SelectSubset<T, TeamSeasonStatsDeleteArgs<ExtArgs>>): Prisma__TeamSeasonStatsClient<$Result.GetResult<Prisma.$TeamSeasonStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamSeasonStats.
     * @param {TeamSeasonStatsUpdateArgs} args - Arguments to update one TeamSeasonStats.
     * @example
     * // Update one TeamSeasonStats
     * const teamSeasonStats = await prisma.teamSeasonStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamSeasonStatsUpdateArgs>(args: SelectSubset<T, TeamSeasonStatsUpdateArgs<ExtArgs>>): Prisma__TeamSeasonStatsClient<$Result.GetResult<Prisma.$TeamSeasonStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamSeasonStats.
     * @param {TeamSeasonStatsDeleteManyArgs} args - Arguments to filter TeamSeasonStats to delete.
     * @example
     * // Delete a few TeamSeasonStats
     * const { count } = await prisma.teamSeasonStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamSeasonStatsDeleteManyArgs>(args?: SelectSubset<T, TeamSeasonStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamSeasonStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamSeasonStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamSeasonStats
     * const teamSeasonStats = await prisma.teamSeasonStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamSeasonStatsUpdateManyArgs>(args: SelectSubset<T, TeamSeasonStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamSeasonStats and returns the data updated in the database.
     * @param {TeamSeasonStatsUpdateManyAndReturnArgs} args - Arguments to update many TeamSeasonStats.
     * @example
     * // Update many TeamSeasonStats
     * const teamSeasonStats = await prisma.teamSeasonStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamSeasonStats and only return the `team`
     * const teamSeasonStatsWithTeamOnly = await prisma.teamSeasonStats.updateManyAndReturn({
     *   select: { team: true },
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
    updateManyAndReturn<T extends TeamSeasonStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamSeasonStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamSeasonStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamSeasonStats.
     * @param {TeamSeasonStatsUpsertArgs} args - Arguments to update or create a TeamSeasonStats.
     * @example
     * // Update or create a TeamSeasonStats
     * const teamSeasonStats = await prisma.teamSeasonStats.upsert({
     *   create: {
     *     // ... data to create a TeamSeasonStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamSeasonStats we want to update
     *   }
     * })
     */
    upsert<T extends TeamSeasonStatsUpsertArgs>(args: SelectSubset<T, TeamSeasonStatsUpsertArgs<ExtArgs>>): Prisma__TeamSeasonStatsClient<$Result.GetResult<Prisma.$TeamSeasonStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamSeasonStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamSeasonStatsCountArgs} args - Arguments to filter TeamSeasonStats to count.
     * @example
     * // Count the number of TeamSeasonStats
     * const count = await prisma.teamSeasonStats.count({
     *   where: {
     *     // ... the filter for the TeamSeasonStats we want to count
     *   }
     * })
    **/
    count<T extends TeamSeasonStatsCountArgs>(
      args?: Subset<T, TeamSeasonStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamSeasonStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamSeasonStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamSeasonStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamSeasonStatsAggregateArgs>(args: Subset<T, TeamSeasonStatsAggregateArgs>): Prisma.PrismaPromise<GetTeamSeasonStatsAggregateType<T>>

    /**
     * Group by TeamSeasonStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamSeasonStatsGroupByArgs} args - Group by arguments.
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
      T extends TeamSeasonStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamSeasonStatsGroupByArgs['orderBy'] }
        : { orderBy?: TeamSeasonStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamSeasonStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamSeasonStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamSeasonStats model
   */
  readonly fields: TeamSeasonStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamSeasonStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamSeasonStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TeamSeasonStats model
   */
  interface TeamSeasonStatsFieldRefs {
    readonly team: FieldRef<"TeamSeasonStats", 'String'>
    readonly season: FieldRef<"TeamSeasonStats", 'Int'>
    readonly team_green_zone_carries_all_games: FieldRef<"TeamSeasonStats", 'Int'>
    readonly team_carries_all_games: FieldRef<"TeamSeasonStats", 'Int'>
    readonly team_targets_all_games: FieldRef<"TeamSeasonStats", 'Int'>
    readonly team_receptions_all_games: FieldRef<"TeamSeasonStats", 'Int'>
    readonly team_rush_fd_all_games: FieldRef<"TeamSeasonStats", 'Int'>
    readonly team_rec_fd_all_games: FieldRef<"TeamSeasonStats", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TeamSeasonStats findUnique
   */
  export type TeamSeasonStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamSeasonStats
     */
    select?: TeamSeasonStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamSeasonStats
     */
    omit?: TeamSeasonStatsOmit<ExtArgs> | null
    /**
     * Filter, which TeamSeasonStats to fetch.
     */
    where: TeamSeasonStatsWhereUniqueInput
  }

  /**
   * TeamSeasonStats findUniqueOrThrow
   */
  export type TeamSeasonStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamSeasonStats
     */
    select?: TeamSeasonStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamSeasonStats
     */
    omit?: TeamSeasonStatsOmit<ExtArgs> | null
    /**
     * Filter, which TeamSeasonStats to fetch.
     */
    where: TeamSeasonStatsWhereUniqueInput
  }

  /**
   * TeamSeasonStats findFirst
   */
  export type TeamSeasonStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamSeasonStats
     */
    select?: TeamSeasonStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamSeasonStats
     */
    omit?: TeamSeasonStatsOmit<ExtArgs> | null
    /**
     * Filter, which TeamSeasonStats to fetch.
     */
    where?: TeamSeasonStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamSeasonStats to fetch.
     */
    orderBy?: TeamSeasonStatsOrderByWithRelationInput | TeamSeasonStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamSeasonStats.
     */
    cursor?: TeamSeasonStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamSeasonStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamSeasonStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamSeasonStats.
     */
    distinct?: TeamSeasonStatsScalarFieldEnum | TeamSeasonStatsScalarFieldEnum[]
  }

  /**
   * TeamSeasonStats findFirstOrThrow
   */
  export type TeamSeasonStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamSeasonStats
     */
    select?: TeamSeasonStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamSeasonStats
     */
    omit?: TeamSeasonStatsOmit<ExtArgs> | null
    /**
     * Filter, which TeamSeasonStats to fetch.
     */
    where?: TeamSeasonStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamSeasonStats to fetch.
     */
    orderBy?: TeamSeasonStatsOrderByWithRelationInput | TeamSeasonStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamSeasonStats.
     */
    cursor?: TeamSeasonStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamSeasonStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamSeasonStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamSeasonStats.
     */
    distinct?: TeamSeasonStatsScalarFieldEnum | TeamSeasonStatsScalarFieldEnum[]
  }

  /**
   * TeamSeasonStats findMany
   */
  export type TeamSeasonStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamSeasonStats
     */
    select?: TeamSeasonStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamSeasonStats
     */
    omit?: TeamSeasonStatsOmit<ExtArgs> | null
    /**
     * Filter, which TeamSeasonStats to fetch.
     */
    where?: TeamSeasonStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamSeasonStats to fetch.
     */
    orderBy?: TeamSeasonStatsOrderByWithRelationInput | TeamSeasonStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamSeasonStats.
     */
    cursor?: TeamSeasonStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamSeasonStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamSeasonStats.
     */
    skip?: number
    distinct?: TeamSeasonStatsScalarFieldEnum | TeamSeasonStatsScalarFieldEnum[]
  }

  /**
   * TeamSeasonStats create
   */
  export type TeamSeasonStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamSeasonStats
     */
    select?: TeamSeasonStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamSeasonStats
     */
    omit?: TeamSeasonStatsOmit<ExtArgs> | null
    /**
     * The data needed to create a TeamSeasonStats.
     */
    data: XOR<TeamSeasonStatsCreateInput, TeamSeasonStatsUncheckedCreateInput>
  }

  /**
   * TeamSeasonStats createMany
   */
  export type TeamSeasonStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamSeasonStats.
     */
    data: TeamSeasonStatsCreateManyInput | TeamSeasonStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamSeasonStats createManyAndReturn
   */
  export type TeamSeasonStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamSeasonStats
     */
    select?: TeamSeasonStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamSeasonStats
     */
    omit?: TeamSeasonStatsOmit<ExtArgs> | null
    /**
     * The data used to create many TeamSeasonStats.
     */
    data: TeamSeasonStatsCreateManyInput | TeamSeasonStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamSeasonStats update
   */
  export type TeamSeasonStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamSeasonStats
     */
    select?: TeamSeasonStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamSeasonStats
     */
    omit?: TeamSeasonStatsOmit<ExtArgs> | null
    /**
     * The data needed to update a TeamSeasonStats.
     */
    data: XOR<TeamSeasonStatsUpdateInput, TeamSeasonStatsUncheckedUpdateInput>
    /**
     * Choose, which TeamSeasonStats to update.
     */
    where: TeamSeasonStatsWhereUniqueInput
  }

  /**
   * TeamSeasonStats updateMany
   */
  export type TeamSeasonStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamSeasonStats.
     */
    data: XOR<TeamSeasonStatsUpdateManyMutationInput, TeamSeasonStatsUncheckedUpdateManyInput>
    /**
     * Filter which TeamSeasonStats to update
     */
    where?: TeamSeasonStatsWhereInput
    /**
     * Limit how many TeamSeasonStats to update.
     */
    limit?: number
  }

  /**
   * TeamSeasonStats updateManyAndReturn
   */
  export type TeamSeasonStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamSeasonStats
     */
    select?: TeamSeasonStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamSeasonStats
     */
    omit?: TeamSeasonStatsOmit<ExtArgs> | null
    /**
     * The data used to update TeamSeasonStats.
     */
    data: XOR<TeamSeasonStatsUpdateManyMutationInput, TeamSeasonStatsUncheckedUpdateManyInput>
    /**
     * Filter which TeamSeasonStats to update
     */
    where?: TeamSeasonStatsWhereInput
    /**
     * Limit how many TeamSeasonStats to update.
     */
    limit?: number
  }

  /**
   * TeamSeasonStats upsert
   */
  export type TeamSeasonStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamSeasonStats
     */
    select?: TeamSeasonStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamSeasonStats
     */
    omit?: TeamSeasonStatsOmit<ExtArgs> | null
    /**
     * The filter to search for the TeamSeasonStats to update in case it exists.
     */
    where: TeamSeasonStatsWhereUniqueInput
    /**
     * In case the TeamSeasonStats found by the `where` argument doesn't exist, create a new TeamSeasonStats with this data.
     */
    create: XOR<TeamSeasonStatsCreateInput, TeamSeasonStatsUncheckedCreateInput>
    /**
     * In case the TeamSeasonStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamSeasonStatsUpdateInput, TeamSeasonStatsUncheckedUpdateInput>
  }

  /**
   * TeamSeasonStats delete
   */
  export type TeamSeasonStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamSeasonStats
     */
    select?: TeamSeasonStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamSeasonStats
     */
    omit?: TeamSeasonStatsOmit<ExtArgs> | null
    /**
     * Filter which TeamSeasonStats to delete.
     */
    where: TeamSeasonStatsWhereUniqueInput
  }

  /**
   * TeamSeasonStats deleteMany
   */
  export type TeamSeasonStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamSeasonStats to delete
     */
    where?: TeamSeasonStatsWhereInput
    /**
     * Limit how many TeamSeasonStats to delete.
     */
    limit?: number
  }

  /**
   * TeamSeasonStats without action
   */
  export type TeamSeasonStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamSeasonStats
     */
    select?: TeamSeasonStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamSeasonStats
     */
    omit?: TeamSeasonStatsOmit<ExtArgs> | null
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
    passingAirYards: 'passingAirYards',
    passingYardsAfterCatch: 'passingYardsAfterCatch',
    passingEpa: 'passingEpa',
    pacr: 'pacr',
    carries: 'carries',
    rushingYards: 'rushingYards',
    rushingTds: 'rushingTds',
    rushingFumbles: 'rushingFumbles',
    rushingFirstDowns: 'rushingFirstDowns',
    rushingEpa: 'rushingEpa',
    receptions: 'receptions',
    targets: 'targets',
    receivingYards: 'receivingYards',
    receivingTds: 'receivingTds',
    receivingAirYards: 'receivingAirYards',
    receivingYardsAfterCatch: 'receivingYardsAfterCatch',
    receivingFirstDowns: 'receivingFirstDowns',
    racr: 'racr',
    targetShare: 'targetShare',
    airYardsShare: 'airYardsShare',
    wopr: 'wopr',
    fantasyPoints: 'fantasyPoints',
    fantasyPointsPpr: 'fantasyPointsPpr'
  };

  export type PlayerStatScalarFieldEnum = (typeof PlayerStatScalarFieldEnum)[keyof typeof PlayerStatScalarFieldEnum]


  export const PlayerSeasonScalarFieldEnum: {
    player_id: 'player_id',
    season: 'season',
    player_name: 'player_name',
    team: 'team',
    position: 'position',
    head_coach: 'head_coach',
    offensive_coordinator: 'offensive_coordinator',
    games_played: 'games_played',
    completions_total: 'completions_total',
    attempts_total: 'attempts_total',
    passing_yards_total: 'passing_yards_total',
    passing_tds_total: 'passing_tds_total',
    interceptions_total: 'interceptions_total',
    sacks_total: 'sacks_total',
    carries_total: 'carries_total',
    rushing_yards_total: 'rushing_yards_total',
    rushing_tds_total: 'rushing_tds_total',
    rushing_first_downs_total: 'rushing_first_downs_total',
    targets_total: 'targets_total',
    receptions_total: 'receptions_total',
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
    sacks_avg: 'sacks_avg',
    passing_air_yards_avg: 'passing_air_yards_avg',
    passing_yards_after_catch_avg: 'passing_yards_after_catch_avg',
    carries_avg: 'carries_avg',
    rushing_yards_avg: 'rushing_yards_avg',
    rushing_tds_avg: 'rushing_tds_avg',
    rushing_fumbles_avg: 'rushing_fumbles_avg',
    rushing_first_downs_avg: 'rushing_first_downs_avg',
    rushing_epa_avg: 'rushing_epa_avg',
    receptions_avg: 'receptions_avg',
    targets_avg: 'targets_avg',
    receiving_yards_avg: 'receiving_yards_avg',
    receiving_tds_avg: 'receiving_tds_avg',
    receiving_air_yards_avg: 'receiving_air_yards_avg',
    receiving_yards_after_catch_avg: 'receiving_yards_after_catch_avg',
    receiving_first_downs_avg: 'receiving_first_downs_avg',
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
    firstDPRR: 'firstDPRR',
    green_zone_carries: 'green_zone_carries',
    HVTs: 'HVTs',
    avg_pass_epa_deep_left: 'avg_pass_epa_deep_left',
    avg_pass_epa_deep_middle: 'avg_pass_epa_deep_middle',
    avg_pass_epa_deep_right: 'avg_pass_epa_deep_right',
    avg_pass_epa_short_left: 'avg_pass_epa_short_left',
    avg_pass_epa_short_middle: 'avg_pass_epa_short_middle',
    avg_pass_epa_short_right: 'avg_pass_epa_short_right',
    total_tackled_for_loss: 'total_tackled_for_loss',
    total_rushes: 'total_rushes',
    pct_carries_tackled_for_loss: 'pct_carries_tackled_for_loss',
    rec_avg_rec_epa_deep_left: 'rec_avg_rec_epa_deep_left',
    rec_avg_rec_epa_deep_middle: 'rec_avg_rec_epa_deep_middle',
    rec_avg_rec_epa_deep_right: 'rec_avg_rec_epa_deep_right',
    rec_avg_rec_epa_short_left: 'rec_avg_rec_epa_short_left',
    rec_avg_rec_epa_short_middle: 'rec_avg_rec_epa_short_middle',
    rec_avg_rec_epa_short_right: 'rec_avg_rec_epa_short_right',
    rec_pct_targets_deep_left: 'rec_pct_targets_deep_left',
    rec_pct_targets_deep_middle: 'rec_pct_targets_deep_middle',
    rec_pct_targets_deep_right: 'rec_pct_targets_deep_right',
    rec_pct_targets_short_left: 'rec_pct_targets_short_left',
    rec_pct_targets_short_middle: 'rec_pct_targets_short_middle',
    rec_pct_targets_short_right: 'rec_pct_targets_short_right',
    down_1_attempts: 'down_1_attempts',
    down_1_completions: 'down_1_completions',
    down_1_passing_yards: 'down_1_passing_yards',
    down_1_carries: 'down_1_carries',
    down_1_rushing_yards: 'down_1_rushing_yards',
    down_1_targets: 'down_1_targets',
    down_1_receptions: 'down_1_receptions',
    down_1_receiving_yards: 'down_1_receiving_yards',
    down_1_team_carries_in_played_games: 'down_1_team_carries_in_played_games',
    down_1_team_targets_in_played_games: 'down_1_team_targets_in_played_games',
    down_1_team_receptions_in_played_games: 'down_1_team_receptions_in_played_games',
    down_1_team_carries_all_games: 'down_1_team_carries_all_games',
    down_1_team_targets_all_games: 'down_1_team_targets_all_games',
    down_1_team_receptions_all_games: 'down_1_team_receptions_all_games',
    down_1_yards_per_target: 'down_1_yards_per_target',
    down_1_yards_per_reception: 'down_1_yards_per_reception',
    down_1_pass_attempts_per_game: 'down_1_pass_attempts_per_game',
    down_1_completions_per_game: 'down_1_completions_per_game',
    down_1_carries_per_game: 'down_1_carries_per_game',
    down_1_rushing_yards_per_game: 'down_1_rushing_yards_per_game',
    down_1_targets_per_game: 'down_1_targets_per_game',
    down_1_receptions_per_game: 'down_1_receptions_per_game',
    down_1_receiving_yards_per_game: 'down_1_receiving_yards_per_game',
    down_3_attempts: 'down_3_attempts',
    down_3_completions: 'down_3_completions',
    down_3_passing_yards: 'down_3_passing_yards'
  };

  export type PlayerSeasonScalarFieldEnum = (typeof PlayerSeasonScalarFieldEnum)[keyof typeof PlayerSeasonScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    query: 'query',
    sql: 'sql',
    isExpected: 'isExpected',
    reason: 'reason'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const TeamSeasonStatsScalarFieldEnum: {
    team: 'team',
    season: 'season',
    team_green_zone_carries_all_games: 'team_green_zone_carries_all_games',
    team_carries_all_games: 'team_carries_all_games',
    team_targets_all_games: 'team_targets_all_games',
    team_receptions_all_games: 'team_receptions_all_games',
    team_rush_fd_all_games: 'team_rush_fd_all_games',
    team_rec_fd_all_games: 'team_rec_fd_all_games'
  };

  export type TeamSeasonStatsScalarFieldEnum = (typeof TeamSeasonStatsScalarFieldEnum)[keyof typeof TeamSeasonStatsScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
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
    passingAirYards?: FloatNullableFilter<"PlayerStat"> | number | null
    passingYardsAfterCatch?: FloatNullableFilter<"PlayerStat"> | number | null
    passingEpa?: FloatNullableFilter<"PlayerStat"> | number | null
    pacr?: FloatNullableFilter<"PlayerStat"> | number | null
    carries?: IntNullableFilter<"PlayerStat"> | number | null
    rushingYards?: FloatNullableFilter<"PlayerStat"> | number | null
    rushingTds?: IntNullableFilter<"PlayerStat"> | number | null
    rushingFumbles?: IntNullableFilter<"PlayerStat"> | number | null
    rushingFirstDowns?: IntNullableFilter<"PlayerStat"> | number | null
    rushingEpa?: FloatNullableFilter<"PlayerStat"> | number | null
    receptions?: IntNullableFilter<"PlayerStat"> | number | null
    targets?: IntNullableFilter<"PlayerStat"> | number | null
    receivingYards?: FloatNullableFilter<"PlayerStat"> | number | null
    receivingTds?: IntNullableFilter<"PlayerStat"> | number | null
    receivingAirYards?: FloatNullableFilter<"PlayerStat"> | number | null
    receivingYardsAfterCatch?: FloatNullableFilter<"PlayerStat"> | number | null
    receivingFirstDowns?: IntNullableFilter<"PlayerStat"> | number | null
    racr?: FloatNullableFilter<"PlayerStat"> | number | null
    targetShare?: FloatNullableFilter<"PlayerStat"> | number | null
    airYardsShare?: FloatNullableFilter<"PlayerStat"> | number | null
    wopr?: FloatNullableFilter<"PlayerStat"> | number | null
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
    passingAirYards?: SortOrderInput | SortOrder
    passingYardsAfterCatch?: SortOrderInput | SortOrder
    passingEpa?: SortOrderInput | SortOrder
    pacr?: SortOrderInput | SortOrder
    carries?: SortOrderInput | SortOrder
    rushingYards?: SortOrderInput | SortOrder
    rushingTds?: SortOrderInput | SortOrder
    rushingFumbles?: SortOrderInput | SortOrder
    rushingFirstDowns?: SortOrderInput | SortOrder
    rushingEpa?: SortOrderInput | SortOrder
    receptions?: SortOrderInput | SortOrder
    targets?: SortOrderInput | SortOrder
    receivingYards?: SortOrderInput | SortOrder
    receivingTds?: SortOrderInput | SortOrder
    receivingAirYards?: SortOrderInput | SortOrder
    receivingYardsAfterCatch?: SortOrderInput | SortOrder
    receivingFirstDowns?: SortOrderInput | SortOrder
    racr?: SortOrderInput | SortOrder
    targetShare?: SortOrderInput | SortOrder
    airYardsShare?: SortOrderInput | SortOrder
    wopr?: SortOrderInput | SortOrder
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
    passingAirYards?: FloatNullableFilter<"PlayerStat"> | number | null
    passingYardsAfterCatch?: FloatNullableFilter<"PlayerStat"> | number | null
    passingEpa?: FloatNullableFilter<"PlayerStat"> | number | null
    pacr?: FloatNullableFilter<"PlayerStat"> | number | null
    carries?: IntNullableFilter<"PlayerStat"> | number | null
    rushingYards?: FloatNullableFilter<"PlayerStat"> | number | null
    rushingTds?: IntNullableFilter<"PlayerStat"> | number | null
    rushingFumbles?: IntNullableFilter<"PlayerStat"> | number | null
    rushingFirstDowns?: IntNullableFilter<"PlayerStat"> | number | null
    rushingEpa?: FloatNullableFilter<"PlayerStat"> | number | null
    receptions?: IntNullableFilter<"PlayerStat"> | number | null
    targets?: IntNullableFilter<"PlayerStat"> | number | null
    receivingYards?: FloatNullableFilter<"PlayerStat"> | number | null
    receivingTds?: IntNullableFilter<"PlayerStat"> | number | null
    receivingAirYards?: FloatNullableFilter<"PlayerStat"> | number | null
    receivingYardsAfterCatch?: FloatNullableFilter<"PlayerStat"> | number | null
    receivingFirstDowns?: IntNullableFilter<"PlayerStat"> | number | null
    racr?: FloatNullableFilter<"PlayerStat"> | number | null
    targetShare?: FloatNullableFilter<"PlayerStat"> | number | null
    airYardsShare?: FloatNullableFilter<"PlayerStat"> | number | null
    wopr?: FloatNullableFilter<"PlayerStat"> | number | null
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
    passingAirYards?: SortOrderInput | SortOrder
    passingYardsAfterCatch?: SortOrderInput | SortOrder
    passingEpa?: SortOrderInput | SortOrder
    pacr?: SortOrderInput | SortOrder
    carries?: SortOrderInput | SortOrder
    rushingYards?: SortOrderInput | SortOrder
    rushingTds?: SortOrderInput | SortOrder
    rushingFumbles?: SortOrderInput | SortOrder
    rushingFirstDowns?: SortOrderInput | SortOrder
    rushingEpa?: SortOrderInput | SortOrder
    receptions?: SortOrderInput | SortOrder
    targets?: SortOrderInput | SortOrder
    receivingYards?: SortOrderInput | SortOrder
    receivingTds?: SortOrderInput | SortOrder
    receivingAirYards?: SortOrderInput | SortOrder
    receivingYardsAfterCatch?: SortOrderInput | SortOrder
    receivingFirstDowns?: SortOrderInput | SortOrder
    racr?: SortOrderInput | SortOrder
    targetShare?: SortOrderInput | SortOrder
    airYardsShare?: SortOrderInput | SortOrder
    wopr?: SortOrderInput | SortOrder
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
    passingAirYards?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    passingYardsAfterCatch?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    passingEpa?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    pacr?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    carries?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    rushingYards?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    rushingTds?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    rushingFumbles?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    rushingFirstDowns?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    rushingEpa?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    receptions?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    targets?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    receivingYards?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    receivingTds?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    receivingAirYards?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    receivingYardsAfterCatch?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    receivingFirstDowns?: IntNullableWithAggregatesFilter<"PlayerStat"> | number | null
    racr?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    targetShare?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    airYardsShare?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    wopr?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    fantasyPoints?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
    fantasyPointsPpr?: FloatNullableWithAggregatesFilter<"PlayerStat"> | number | null
  }

  export type PlayerSeasonWhereInput = {
    AND?: PlayerSeasonWhereInput | PlayerSeasonWhereInput[]
    OR?: PlayerSeasonWhereInput[]
    NOT?: PlayerSeasonWhereInput | PlayerSeasonWhereInput[]
    player_id?: StringFilter<"PlayerSeason"> | string
    season?: IntFilter<"PlayerSeason"> | number
    player_name?: StringNullableFilter<"PlayerSeason"> | string | null
    team?: StringNullableFilter<"PlayerSeason"> | string | null
    position?: StringNullableFilter<"PlayerSeason"> | string | null
    head_coach?: StringNullableFilter<"PlayerSeason"> | string | null
    offensive_coordinator?: StringNullableFilter<"PlayerSeason"> | string | null
    games_played?: IntNullableFilter<"PlayerSeason"> | number | null
    completions_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    attempts_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_yards_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_tds_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    interceptions_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    sacks_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    carries_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_yards_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_tds_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_first_downs_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    targets_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    receptions_total?: FloatNullableFilter<"PlayerSeason"> | number | null
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
    sacks_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_air_yards_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_yards_after_catch_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    carries_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_yards_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_tds_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_fumbles_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_first_downs_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_epa_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receptions_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    targets_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_yards_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_tds_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_air_yards_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_yards_after_catch_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_first_downs_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
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
    green_zone_carries?: FloatNullableFilter<"PlayerSeason"> | number | null
    HVTs?: FloatNullableFilter<"PlayerSeason"> | number | null
    avg_pass_epa_deep_left?: FloatNullableFilter<"PlayerSeason"> | number | null
    avg_pass_epa_deep_middle?: FloatNullableFilter<"PlayerSeason"> | number | null
    avg_pass_epa_deep_right?: FloatNullableFilter<"PlayerSeason"> | number | null
    avg_pass_epa_short_left?: FloatNullableFilter<"PlayerSeason"> | number | null
    avg_pass_epa_short_middle?: FloatNullableFilter<"PlayerSeason"> | number | null
    avg_pass_epa_short_right?: FloatNullableFilter<"PlayerSeason"> | number | null
    total_tackled_for_loss?: FloatNullableFilter<"PlayerSeason"> | number | null
    total_rushes?: FloatNullableFilter<"PlayerSeason"> | number | null
    pct_carries_tackled_for_loss?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_avg_rec_epa_deep_left?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_avg_rec_epa_deep_middle?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_avg_rec_epa_deep_right?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_avg_rec_epa_short_left?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_avg_rec_epa_short_middle?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_avg_rec_epa_short_right?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_pct_targets_deep_left?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_pct_targets_deep_middle?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_pct_targets_deep_right?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_pct_targets_short_left?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_pct_targets_short_middle?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_pct_targets_short_right?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_attempts?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_completions?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_passing_yards?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_carries?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_rushing_yards?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_targets?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_receptions?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_receiving_yards?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_team_carries_in_played_games?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_team_targets_in_played_games?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_team_receptions_in_played_games?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_team_carries_all_games?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_team_targets_all_games?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_team_receptions_all_games?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_yards_per_target?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_yards_per_reception?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_pass_attempts_per_game?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_completions_per_game?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_carries_per_game?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_rushing_yards_per_game?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_targets_per_game?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_receptions_per_game?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_receiving_yards_per_game?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_3_attempts?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_3_completions?: IntNullableFilter<"PlayerSeason"> | number | null
    down_3_passing_yards?: FloatNullableFilter<"PlayerSeason"> | number | null
  }

  export type PlayerSeasonOrderByWithRelationInput = {
    player_id?: SortOrder
    season?: SortOrder
    player_name?: SortOrderInput | SortOrder
    team?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    head_coach?: SortOrderInput | SortOrder
    offensive_coordinator?: SortOrderInput | SortOrder
    games_played?: SortOrderInput | SortOrder
    completions_total?: SortOrderInput | SortOrder
    attempts_total?: SortOrderInput | SortOrder
    passing_yards_total?: SortOrderInput | SortOrder
    passing_tds_total?: SortOrderInput | SortOrder
    interceptions_total?: SortOrderInput | SortOrder
    sacks_total?: SortOrderInput | SortOrder
    carries_total?: SortOrderInput | SortOrder
    rushing_yards_total?: SortOrderInput | SortOrder
    rushing_tds_total?: SortOrderInput | SortOrder
    rushing_first_downs_total?: SortOrderInput | SortOrder
    targets_total?: SortOrderInput | SortOrder
    receptions_total?: SortOrderInput | SortOrder
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
    sacks_avg?: SortOrderInput | SortOrder
    passing_air_yards_avg?: SortOrderInput | SortOrder
    passing_yards_after_catch_avg?: SortOrderInput | SortOrder
    carries_avg?: SortOrderInput | SortOrder
    rushing_yards_avg?: SortOrderInput | SortOrder
    rushing_tds_avg?: SortOrderInput | SortOrder
    rushing_fumbles_avg?: SortOrderInput | SortOrder
    rushing_first_downs_avg?: SortOrderInput | SortOrder
    rushing_epa_avg?: SortOrderInput | SortOrder
    receptions_avg?: SortOrderInput | SortOrder
    targets_avg?: SortOrderInput | SortOrder
    receiving_yards_avg?: SortOrderInput | SortOrder
    receiving_tds_avg?: SortOrderInput | SortOrder
    receiving_air_yards_avg?: SortOrderInput | SortOrder
    receiving_yards_after_catch_avg?: SortOrderInput | SortOrder
    receiving_first_downs_avg?: SortOrderInput | SortOrder
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
    green_zone_carries?: SortOrderInput | SortOrder
    HVTs?: SortOrderInput | SortOrder
    avg_pass_epa_deep_left?: SortOrderInput | SortOrder
    avg_pass_epa_deep_middle?: SortOrderInput | SortOrder
    avg_pass_epa_deep_right?: SortOrderInput | SortOrder
    avg_pass_epa_short_left?: SortOrderInput | SortOrder
    avg_pass_epa_short_middle?: SortOrderInput | SortOrder
    avg_pass_epa_short_right?: SortOrderInput | SortOrder
    total_tackled_for_loss?: SortOrderInput | SortOrder
    total_rushes?: SortOrderInput | SortOrder
    pct_carries_tackled_for_loss?: SortOrderInput | SortOrder
    rec_avg_rec_epa_deep_left?: SortOrderInput | SortOrder
    rec_avg_rec_epa_deep_middle?: SortOrderInput | SortOrder
    rec_avg_rec_epa_deep_right?: SortOrderInput | SortOrder
    rec_avg_rec_epa_short_left?: SortOrderInput | SortOrder
    rec_avg_rec_epa_short_middle?: SortOrderInput | SortOrder
    rec_avg_rec_epa_short_right?: SortOrderInput | SortOrder
    rec_pct_targets_deep_left?: SortOrderInput | SortOrder
    rec_pct_targets_deep_middle?: SortOrderInput | SortOrder
    rec_pct_targets_deep_right?: SortOrderInput | SortOrder
    rec_pct_targets_short_left?: SortOrderInput | SortOrder
    rec_pct_targets_short_middle?: SortOrderInput | SortOrder
    rec_pct_targets_short_right?: SortOrderInput | SortOrder
    down_1_attempts?: SortOrderInput | SortOrder
    down_1_completions?: SortOrderInput | SortOrder
    down_1_passing_yards?: SortOrderInput | SortOrder
    down_1_carries?: SortOrderInput | SortOrder
    down_1_rushing_yards?: SortOrderInput | SortOrder
    down_1_targets?: SortOrderInput | SortOrder
    down_1_receptions?: SortOrderInput | SortOrder
    down_1_receiving_yards?: SortOrderInput | SortOrder
    down_1_team_carries_in_played_games?: SortOrderInput | SortOrder
    down_1_team_targets_in_played_games?: SortOrderInput | SortOrder
    down_1_team_receptions_in_played_games?: SortOrderInput | SortOrder
    down_1_team_carries_all_games?: SortOrderInput | SortOrder
    down_1_team_targets_all_games?: SortOrderInput | SortOrder
    down_1_team_receptions_all_games?: SortOrderInput | SortOrder
    down_1_yards_per_target?: SortOrderInput | SortOrder
    down_1_yards_per_reception?: SortOrderInput | SortOrder
    down_1_pass_attempts_per_game?: SortOrderInput | SortOrder
    down_1_completions_per_game?: SortOrderInput | SortOrder
    down_1_carries_per_game?: SortOrderInput | SortOrder
    down_1_rushing_yards_per_game?: SortOrderInput | SortOrder
    down_1_targets_per_game?: SortOrderInput | SortOrder
    down_1_receptions_per_game?: SortOrderInput | SortOrder
    down_1_receiving_yards_per_game?: SortOrderInput | SortOrder
    down_3_attempts?: SortOrderInput | SortOrder
    down_3_completions?: SortOrderInput | SortOrder
    down_3_passing_yards?: SortOrderInput | SortOrder
  }

  export type PlayerSeasonWhereUniqueInput = Prisma.AtLeast<{
    player_id_season?: PlayerSeasonPlayer_idSeasonCompoundUniqueInput
    AND?: PlayerSeasonWhereInput | PlayerSeasonWhereInput[]
    OR?: PlayerSeasonWhereInput[]
    NOT?: PlayerSeasonWhereInput | PlayerSeasonWhereInput[]
    player_id?: StringFilter<"PlayerSeason"> | string
    season?: IntFilter<"PlayerSeason"> | number
    player_name?: StringNullableFilter<"PlayerSeason"> | string | null
    team?: StringNullableFilter<"PlayerSeason"> | string | null
    position?: StringNullableFilter<"PlayerSeason"> | string | null
    head_coach?: StringNullableFilter<"PlayerSeason"> | string | null
    offensive_coordinator?: StringNullableFilter<"PlayerSeason"> | string | null
    games_played?: IntNullableFilter<"PlayerSeason"> | number | null
    completions_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    attempts_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_yards_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_tds_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    interceptions_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    sacks_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    carries_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_yards_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_tds_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_first_downs_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    targets_total?: FloatNullableFilter<"PlayerSeason"> | number | null
    receptions_total?: FloatNullableFilter<"PlayerSeason"> | number | null
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
    sacks_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_air_yards_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    passing_yards_after_catch_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    carries_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_yards_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_tds_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_fumbles_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_first_downs_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    rushing_epa_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receptions_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    targets_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_yards_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_tds_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_air_yards_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_yards_after_catch_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
    receiving_first_downs_avg?: FloatNullableFilter<"PlayerSeason"> | number | null
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
    green_zone_carries?: FloatNullableFilter<"PlayerSeason"> | number | null
    HVTs?: FloatNullableFilter<"PlayerSeason"> | number | null
    avg_pass_epa_deep_left?: FloatNullableFilter<"PlayerSeason"> | number | null
    avg_pass_epa_deep_middle?: FloatNullableFilter<"PlayerSeason"> | number | null
    avg_pass_epa_deep_right?: FloatNullableFilter<"PlayerSeason"> | number | null
    avg_pass_epa_short_left?: FloatNullableFilter<"PlayerSeason"> | number | null
    avg_pass_epa_short_middle?: FloatNullableFilter<"PlayerSeason"> | number | null
    avg_pass_epa_short_right?: FloatNullableFilter<"PlayerSeason"> | number | null
    total_tackled_for_loss?: FloatNullableFilter<"PlayerSeason"> | number | null
    total_rushes?: FloatNullableFilter<"PlayerSeason"> | number | null
    pct_carries_tackled_for_loss?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_avg_rec_epa_deep_left?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_avg_rec_epa_deep_middle?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_avg_rec_epa_deep_right?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_avg_rec_epa_short_left?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_avg_rec_epa_short_middle?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_avg_rec_epa_short_right?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_pct_targets_deep_left?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_pct_targets_deep_middle?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_pct_targets_deep_right?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_pct_targets_short_left?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_pct_targets_short_middle?: FloatNullableFilter<"PlayerSeason"> | number | null
    rec_pct_targets_short_right?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_attempts?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_completions?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_passing_yards?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_carries?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_rushing_yards?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_targets?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_receptions?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_receiving_yards?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_team_carries_in_played_games?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_team_targets_in_played_games?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_team_receptions_in_played_games?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_team_carries_all_games?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_team_targets_all_games?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_team_receptions_all_games?: IntNullableFilter<"PlayerSeason"> | number | null
    down_1_yards_per_target?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_yards_per_reception?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_pass_attempts_per_game?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_completions_per_game?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_carries_per_game?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_rushing_yards_per_game?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_targets_per_game?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_receptions_per_game?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_1_receiving_yards_per_game?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_3_attempts?: FloatNullableFilter<"PlayerSeason"> | number | null
    down_3_completions?: IntNullableFilter<"PlayerSeason"> | number | null
    down_3_passing_yards?: FloatNullableFilter<"PlayerSeason"> | number | null
  }, "player_id_season">

  export type PlayerSeasonOrderByWithAggregationInput = {
    player_id?: SortOrder
    season?: SortOrder
    player_name?: SortOrderInput | SortOrder
    team?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    head_coach?: SortOrderInput | SortOrder
    offensive_coordinator?: SortOrderInput | SortOrder
    games_played?: SortOrderInput | SortOrder
    completions_total?: SortOrderInput | SortOrder
    attempts_total?: SortOrderInput | SortOrder
    passing_yards_total?: SortOrderInput | SortOrder
    passing_tds_total?: SortOrderInput | SortOrder
    interceptions_total?: SortOrderInput | SortOrder
    sacks_total?: SortOrderInput | SortOrder
    carries_total?: SortOrderInput | SortOrder
    rushing_yards_total?: SortOrderInput | SortOrder
    rushing_tds_total?: SortOrderInput | SortOrder
    rushing_first_downs_total?: SortOrderInput | SortOrder
    targets_total?: SortOrderInput | SortOrder
    receptions_total?: SortOrderInput | SortOrder
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
    sacks_avg?: SortOrderInput | SortOrder
    passing_air_yards_avg?: SortOrderInput | SortOrder
    passing_yards_after_catch_avg?: SortOrderInput | SortOrder
    carries_avg?: SortOrderInput | SortOrder
    rushing_yards_avg?: SortOrderInput | SortOrder
    rushing_tds_avg?: SortOrderInput | SortOrder
    rushing_fumbles_avg?: SortOrderInput | SortOrder
    rushing_first_downs_avg?: SortOrderInput | SortOrder
    rushing_epa_avg?: SortOrderInput | SortOrder
    receptions_avg?: SortOrderInput | SortOrder
    targets_avg?: SortOrderInput | SortOrder
    receiving_yards_avg?: SortOrderInput | SortOrder
    receiving_tds_avg?: SortOrderInput | SortOrder
    receiving_air_yards_avg?: SortOrderInput | SortOrder
    receiving_yards_after_catch_avg?: SortOrderInput | SortOrder
    receiving_first_downs_avg?: SortOrderInput | SortOrder
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
    green_zone_carries?: SortOrderInput | SortOrder
    HVTs?: SortOrderInput | SortOrder
    avg_pass_epa_deep_left?: SortOrderInput | SortOrder
    avg_pass_epa_deep_middle?: SortOrderInput | SortOrder
    avg_pass_epa_deep_right?: SortOrderInput | SortOrder
    avg_pass_epa_short_left?: SortOrderInput | SortOrder
    avg_pass_epa_short_middle?: SortOrderInput | SortOrder
    avg_pass_epa_short_right?: SortOrderInput | SortOrder
    total_tackled_for_loss?: SortOrderInput | SortOrder
    total_rushes?: SortOrderInput | SortOrder
    pct_carries_tackled_for_loss?: SortOrderInput | SortOrder
    rec_avg_rec_epa_deep_left?: SortOrderInput | SortOrder
    rec_avg_rec_epa_deep_middle?: SortOrderInput | SortOrder
    rec_avg_rec_epa_deep_right?: SortOrderInput | SortOrder
    rec_avg_rec_epa_short_left?: SortOrderInput | SortOrder
    rec_avg_rec_epa_short_middle?: SortOrderInput | SortOrder
    rec_avg_rec_epa_short_right?: SortOrderInput | SortOrder
    rec_pct_targets_deep_left?: SortOrderInput | SortOrder
    rec_pct_targets_deep_middle?: SortOrderInput | SortOrder
    rec_pct_targets_deep_right?: SortOrderInput | SortOrder
    rec_pct_targets_short_left?: SortOrderInput | SortOrder
    rec_pct_targets_short_middle?: SortOrderInput | SortOrder
    rec_pct_targets_short_right?: SortOrderInput | SortOrder
    down_1_attempts?: SortOrderInput | SortOrder
    down_1_completions?: SortOrderInput | SortOrder
    down_1_passing_yards?: SortOrderInput | SortOrder
    down_1_carries?: SortOrderInput | SortOrder
    down_1_rushing_yards?: SortOrderInput | SortOrder
    down_1_targets?: SortOrderInput | SortOrder
    down_1_receptions?: SortOrderInput | SortOrder
    down_1_receiving_yards?: SortOrderInput | SortOrder
    down_1_team_carries_in_played_games?: SortOrderInput | SortOrder
    down_1_team_targets_in_played_games?: SortOrderInput | SortOrder
    down_1_team_receptions_in_played_games?: SortOrderInput | SortOrder
    down_1_team_carries_all_games?: SortOrderInput | SortOrder
    down_1_team_targets_all_games?: SortOrderInput | SortOrder
    down_1_team_receptions_all_games?: SortOrderInput | SortOrder
    down_1_yards_per_target?: SortOrderInput | SortOrder
    down_1_yards_per_reception?: SortOrderInput | SortOrder
    down_1_pass_attempts_per_game?: SortOrderInput | SortOrder
    down_1_completions_per_game?: SortOrderInput | SortOrder
    down_1_carries_per_game?: SortOrderInput | SortOrder
    down_1_rushing_yards_per_game?: SortOrderInput | SortOrder
    down_1_targets_per_game?: SortOrderInput | SortOrder
    down_1_receptions_per_game?: SortOrderInput | SortOrder
    down_1_receiving_yards_per_game?: SortOrderInput | SortOrder
    down_3_attempts?: SortOrderInput | SortOrder
    down_3_completions?: SortOrderInput | SortOrder
    down_3_passing_yards?: SortOrderInput | SortOrder
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
    season?: IntWithAggregatesFilter<"PlayerSeason"> | number
    player_name?: StringNullableWithAggregatesFilter<"PlayerSeason"> | string | null
    team?: StringNullableWithAggregatesFilter<"PlayerSeason"> | string | null
    position?: StringNullableWithAggregatesFilter<"PlayerSeason"> | string | null
    head_coach?: StringNullableWithAggregatesFilter<"PlayerSeason"> | string | null
    offensive_coordinator?: StringNullableWithAggregatesFilter<"PlayerSeason"> | string | null
    games_played?: IntNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    completions_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    attempts_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    passing_yards_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    passing_tds_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    interceptions_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    sacks_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    carries_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rushing_yards_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rushing_tds_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rushing_first_downs_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    targets_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    receptions_total?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
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
    sacks_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    passing_air_yards_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    passing_yards_after_catch_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    carries_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rushing_yards_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rushing_tds_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rushing_fumbles_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rushing_first_downs_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rushing_epa_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    receptions_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    targets_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    receiving_yards_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    receiving_tds_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    receiving_air_yards_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    receiving_yards_after_catch_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    receiving_first_downs_avg?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
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
    green_zone_carries?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    HVTs?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    avg_pass_epa_deep_left?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    avg_pass_epa_deep_middle?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    avg_pass_epa_deep_right?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    avg_pass_epa_short_left?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    avg_pass_epa_short_middle?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    avg_pass_epa_short_right?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    total_tackled_for_loss?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    total_rushes?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    pct_carries_tackled_for_loss?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rec_avg_rec_epa_deep_left?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rec_avg_rec_epa_deep_middle?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rec_avg_rec_epa_deep_right?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rec_avg_rec_epa_short_left?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rec_avg_rec_epa_short_middle?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rec_avg_rec_epa_short_right?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rec_pct_targets_deep_left?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rec_pct_targets_deep_middle?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rec_pct_targets_deep_right?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rec_pct_targets_short_left?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rec_pct_targets_short_middle?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    rec_pct_targets_short_right?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_attempts?: IntNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_completions?: IntNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_passing_yards?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_carries?: IntNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_rushing_yards?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_targets?: IntNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_receptions?: IntNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_receiving_yards?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_team_carries_in_played_games?: IntNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_team_targets_in_played_games?: IntNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_team_receptions_in_played_games?: IntNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_team_carries_all_games?: IntNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_team_targets_all_games?: IntNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_team_receptions_all_games?: IntNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_yards_per_target?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_yards_per_reception?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_pass_attempts_per_game?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_completions_per_game?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_carries_per_game?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_rushing_yards_per_game?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_targets_per_game?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_receptions_per_game?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_1_receiving_yards_per_game?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_3_attempts?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_3_completions?: IntNullableWithAggregatesFilter<"PlayerSeason"> | number | null
    down_3_passing_yards?: FloatNullableWithAggregatesFilter<"PlayerSeason"> | number | null
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: StringFilter<"Feedback"> | string
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    query?: StringFilter<"Feedback"> | string
    sql?: StringFilter<"Feedback"> | string
    isExpected?: BoolFilter<"Feedback"> | boolean
    reason?: StringNullableFilter<"Feedback"> | string | null
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    query?: SortOrder
    sql?: SortOrder
    isExpected?: SortOrder
    reason?: SortOrderInput | SortOrder
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    query?: StringFilter<"Feedback"> | string
    sql?: StringFilter<"Feedback"> | string
    isExpected?: BoolFilter<"Feedback"> | boolean
    reason?: StringNullableFilter<"Feedback"> | string | null
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    query?: SortOrder
    sql?: SortOrder
    isExpected?: SortOrder
    reason?: SortOrderInput | SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feedback"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
    query?: StringWithAggregatesFilter<"Feedback"> | string
    sql?: StringWithAggregatesFilter<"Feedback"> | string
    isExpected?: BoolWithAggregatesFilter<"Feedback"> | boolean
    reason?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
  }

  export type TeamSeasonStatsWhereInput = {
    AND?: TeamSeasonStatsWhereInput | TeamSeasonStatsWhereInput[]
    OR?: TeamSeasonStatsWhereInput[]
    NOT?: TeamSeasonStatsWhereInput | TeamSeasonStatsWhereInput[]
    team?: StringFilter<"TeamSeasonStats"> | string
    season?: IntFilter<"TeamSeasonStats"> | number
    team_green_zone_carries_all_games?: IntNullableFilter<"TeamSeasonStats"> | number | null
    team_carries_all_games?: IntNullableFilter<"TeamSeasonStats"> | number | null
    team_targets_all_games?: IntNullableFilter<"TeamSeasonStats"> | number | null
    team_receptions_all_games?: IntNullableFilter<"TeamSeasonStats"> | number | null
    team_rush_fd_all_games?: IntNullableFilter<"TeamSeasonStats"> | number | null
    team_rec_fd_all_games?: IntNullableFilter<"TeamSeasonStats"> | number | null
  }

  export type TeamSeasonStatsOrderByWithRelationInput = {
    team?: SortOrder
    season?: SortOrder
    team_green_zone_carries_all_games?: SortOrderInput | SortOrder
    team_carries_all_games?: SortOrderInput | SortOrder
    team_targets_all_games?: SortOrderInput | SortOrder
    team_receptions_all_games?: SortOrderInput | SortOrder
    team_rush_fd_all_games?: SortOrderInput | SortOrder
    team_rec_fd_all_games?: SortOrderInput | SortOrder
  }

  export type TeamSeasonStatsWhereUniqueInput = Prisma.AtLeast<{
    team_season?: TeamSeasonStatsTeamSeasonCompoundUniqueInput
    AND?: TeamSeasonStatsWhereInput | TeamSeasonStatsWhereInput[]
    OR?: TeamSeasonStatsWhereInput[]
    NOT?: TeamSeasonStatsWhereInput | TeamSeasonStatsWhereInput[]
    team?: StringFilter<"TeamSeasonStats"> | string
    season?: IntFilter<"TeamSeasonStats"> | number
    team_green_zone_carries_all_games?: IntNullableFilter<"TeamSeasonStats"> | number | null
    team_carries_all_games?: IntNullableFilter<"TeamSeasonStats"> | number | null
    team_targets_all_games?: IntNullableFilter<"TeamSeasonStats"> | number | null
    team_receptions_all_games?: IntNullableFilter<"TeamSeasonStats"> | number | null
    team_rush_fd_all_games?: IntNullableFilter<"TeamSeasonStats"> | number | null
    team_rec_fd_all_games?: IntNullableFilter<"TeamSeasonStats"> | number | null
  }, "team_season">

  export type TeamSeasonStatsOrderByWithAggregationInput = {
    team?: SortOrder
    season?: SortOrder
    team_green_zone_carries_all_games?: SortOrderInput | SortOrder
    team_carries_all_games?: SortOrderInput | SortOrder
    team_targets_all_games?: SortOrderInput | SortOrder
    team_receptions_all_games?: SortOrderInput | SortOrder
    team_rush_fd_all_games?: SortOrderInput | SortOrder
    team_rec_fd_all_games?: SortOrderInput | SortOrder
    _count?: TeamSeasonStatsCountOrderByAggregateInput
    _avg?: TeamSeasonStatsAvgOrderByAggregateInput
    _max?: TeamSeasonStatsMaxOrderByAggregateInput
    _min?: TeamSeasonStatsMinOrderByAggregateInput
    _sum?: TeamSeasonStatsSumOrderByAggregateInput
  }

  export type TeamSeasonStatsScalarWhereWithAggregatesInput = {
    AND?: TeamSeasonStatsScalarWhereWithAggregatesInput | TeamSeasonStatsScalarWhereWithAggregatesInput[]
    OR?: TeamSeasonStatsScalarWhereWithAggregatesInput[]
    NOT?: TeamSeasonStatsScalarWhereWithAggregatesInput | TeamSeasonStatsScalarWhereWithAggregatesInput[]
    team?: StringWithAggregatesFilter<"TeamSeasonStats"> | string
    season?: IntWithAggregatesFilter<"TeamSeasonStats"> | number
    team_green_zone_carries_all_games?: IntNullableWithAggregatesFilter<"TeamSeasonStats"> | number | null
    team_carries_all_games?: IntNullableWithAggregatesFilter<"TeamSeasonStats"> | number | null
    team_targets_all_games?: IntNullableWithAggregatesFilter<"TeamSeasonStats"> | number | null
    team_receptions_all_games?: IntNullableWithAggregatesFilter<"TeamSeasonStats"> | number | null
    team_rush_fd_all_games?: IntNullableWithAggregatesFilter<"TeamSeasonStats"> | number | null
    team_rec_fd_all_games?: IntNullableWithAggregatesFilter<"TeamSeasonStats"> | number | null
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
    passingAirYards?: number | null
    passingYardsAfterCatch?: number | null
    passingEpa?: number | null
    pacr?: number | null
    carries?: number | null
    rushingYards?: number | null
    rushingTds?: number | null
    rushingFumbles?: number | null
    rushingFirstDowns?: number | null
    rushingEpa?: number | null
    receptions?: number | null
    targets?: number | null
    receivingYards?: number | null
    receivingTds?: number | null
    receivingAirYards?: number | null
    receivingYardsAfterCatch?: number | null
    receivingFirstDowns?: number | null
    racr?: number | null
    targetShare?: number | null
    airYardsShare?: number | null
    wopr?: number | null
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
    passingAirYards?: number | null
    passingYardsAfterCatch?: number | null
    passingEpa?: number | null
    pacr?: number | null
    carries?: number | null
    rushingYards?: number | null
    rushingTds?: number | null
    rushingFumbles?: number | null
    rushingFirstDowns?: number | null
    rushingEpa?: number | null
    receptions?: number | null
    targets?: number | null
    receivingYards?: number | null
    receivingTds?: number | null
    receivingAirYards?: number | null
    receivingYardsAfterCatch?: number | null
    receivingFirstDowns?: number | null
    racr?: number | null
    targetShare?: number | null
    airYardsShare?: number | null
    wopr?: number | null
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
    passingAirYards?: NullableFloatFieldUpdateOperationsInput | number | null
    passingYardsAfterCatch?: NullableFloatFieldUpdateOperationsInput | number | null
    passingEpa?: NullableFloatFieldUpdateOperationsInput | number | null
    pacr?: NullableFloatFieldUpdateOperationsInput | number | null
    carries?: NullableIntFieldUpdateOperationsInput | number | null
    rushingYards?: NullableFloatFieldUpdateOperationsInput | number | null
    rushingTds?: NullableIntFieldUpdateOperationsInput | number | null
    rushingFumbles?: NullableIntFieldUpdateOperationsInput | number | null
    rushingFirstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    rushingEpa?: NullableFloatFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    receivingYards?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingTds?: NullableIntFieldUpdateOperationsInput | number | null
    receivingAirYards?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingYardsAfterCatch?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingFirstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    racr?: NullableFloatFieldUpdateOperationsInput | number | null
    targetShare?: NullableFloatFieldUpdateOperationsInput | number | null
    airYardsShare?: NullableFloatFieldUpdateOperationsInput | number | null
    wopr?: NullableFloatFieldUpdateOperationsInput | number | null
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
    passingAirYards?: NullableFloatFieldUpdateOperationsInput | number | null
    passingYardsAfterCatch?: NullableFloatFieldUpdateOperationsInput | number | null
    passingEpa?: NullableFloatFieldUpdateOperationsInput | number | null
    pacr?: NullableFloatFieldUpdateOperationsInput | number | null
    carries?: NullableIntFieldUpdateOperationsInput | number | null
    rushingYards?: NullableFloatFieldUpdateOperationsInput | number | null
    rushingTds?: NullableIntFieldUpdateOperationsInput | number | null
    rushingFumbles?: NullableIntFieldUpdateOperationsInput | number | null
    rushingFirstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    rushingEpa?: NullableFloatFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    receivingYards?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingTds?: NullableIntFieldUpdateOperationsInput | number | null
    receivingAirYards?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingYardsAfterCatch?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingFirstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    racr?: NullableFloatFieldUpdateOperationsInput | number | null
    targetShare?: NullableFloatFieldUpdateOperationsInput | number | null
    airYardsShare?: NullableFloatFieldUpdateOperationsInput | number | null
    wopr?: NullableFloatFieldUpdateOperationsInput | number | null
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
    passingAirYards?: number | null
    passingYardsAfterCatch?: number | null
    passingEpa?: number | null
    pacr?: number | null
    carries?: number | null
    rushingYards?: number | null
    rushingTds?: number | null
    rushingFumbles?: number | null
    rushingFirstDowns?: number | null
    rushingEpa?: number | null
    receptions?: number | null
    targets?: number | null
    receivingYards?: number | null
    receivingTds?: number | null
    receivingAirYards?: number | null
    receivingYardsAfterCatch?: number | null
    receivingFirstDowns?: number | null
    racr?: number | null
    targetShare?: number | null
    airYardsShare?: number | null
    wopr?: number | null
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
    passingAirYards?: NullableFloatFieldUpdateOperationsInput | number | null
    passingYardsAfterCatch?: NullableFloatFieldUpdateOperationsInput | number | null
    passingEpa?: NullableFloatFieldUpdateOperationsInput | number | null
    pacr?: NullableFloatFieldUpdateOperationsInput | number | null
    carries?: NullableIntFieldUpdateOperationsInput | number | null
    rushingYards?: NullableFloatFieldUpdateOperationsInput | number | null
    rushingTds?: NullableIntFieldUpdateOperationsInput | number | null
    rushingFumbles?: NullableIntFieldUpdateOperationsInput | number | null
    rushingFirstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    rushingEpa?: NullableFloatFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    receivingYards?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingTds?: NullableIntFieldUpdateOperationsInput | number | null
    receivingAirYards?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingYardsAfterCatch?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingFirstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    racr?: NullableFloatFieldUpdateOperationsInput | number | null
    targetShare?: NullableFloatFieldUpdateOperationsInput | number | null
    airYardsShare?: NullableFloatFieldUpdateOperationsInput | number | null
    wopr?: NullableFloatFieldUpdateOperationsInput | number | null
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
    passingAirYards?: NullableFloatFieldUpdateOperationsInput | number | null
    passingYardsAfterCatch?: NullableFloatFieldUpdateOperationsInput | number | null
    passingEpa?: NullableFloatFieldUpdateOperationsInput | number | null
    pacr?: NullableFloatFieldUpdateOperationsInput | number | null
    carries?: NullableIntFieldUpdateOperationsInput | number | null
    rushingYards?: NullableFloatFieldUpdateOperationsInput | number | null
    rushingTds?: NullableIntFieldUpdateOperationsInput | number | null
    rushingFumbles?: NullableIntFieldUpdateOperationsInput | number | null
    rushingFirstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    rushingEpa?: NullableFloatFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    receivingYards?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingTds?: NullableIntFieldUpdateOperationsInput | number | null
    receivingAirYards?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingYardsAfterCatch?: NullableFloatFieldUpdateOperationsInput | number | null
    receivingFirstDowns?: NullableIntFieldUpdateOperationsInput | number | null
    racr?: NullableFloatFieldUpdateOperationsInput | number | null
    targetShare?: NullableFloatFieldUpdateOperationsInput | number | null
    airYardsShare?: NullableFloatFieldUpdateOperationsInput | number | null
    wopr?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasyPoints?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasyPointsPpr?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayerSeasonCreateInput = {
    player_id: string
    season: number
    player_name?: string | null
    team?: string | null
    position?: string | null
    head_coach?: string | null
    offensive_coordinator?: string | null
    games_played?: number | null
    completions_total?: number | null
    attempts_total?: number | null
    passing_yards_total?: number | null
    passing_tds_total?: number | null
    interceptions_total?: number | null
    sacks_total?: number | null
    carries_total?: number | null
    rushing_yards_total?: number | null
    rushing_tds_total?: number | null
    rushing_first_downs_total?: number | null
    targets_total?: number | null
    receptions_total?: number | null
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
    sacks_avg?: number | null
    passing_air_yards_avg?: number | null
    passing_yards_after_catch_avg?: number | null
    carries_avg?: number | null
    rushing_yards_avg?: number | null
    rushing_tds_avg?: number | null
    rushing_fumbles_avg?: number | null
    rushing_first_downs_avg?: number | null
    rushing_epa_avg?: number | null
    receptions_avg?: number | null
    targets_avg?: number | null
    receiving_yards_avg?: number | null
    receiving_tds_avg?: number | null
    receiving_air_yards_avg?: number | null
    receiving_yards_after_catch_avg?: number | null
    receiving_first_downs_avg?: number | null
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
    green_zone_carries?: number | null
    HVTs?: number | null
    avg_pass_epa_deep_left?: number | null
    avg_pass_epa_deep_middle?: number | null
    avg_pass_epa_deep_right?: number | null
    avg_pass_epa_short_left?: number | null
    avg_pass_epa_short_middle?: number | null
    avg_pass_epa_short_right?: number | null
    total_tackled_for_loss?: number | null
    total_rushes?: number | null
    pct_carries_tackled_for_loss?: number | null
    rec_avg_rec_epa_deep_left?: number | null
    rec_avg_rec_epa_deep_middle?: number | null
    rec_avg_rec_epa_deep_right?: number | null
    rec_avg_rec_epa_short_left?: number | null
    rec_avg_rec_epa_short_middle?: number | null
    rec_avg_rec_epa_short_right?: number | null
    rec_pct_targets_deep_left?: number | null
    rec_pct_targets_deep_middle?: number | null
    rec_pct_targets_deep_right?: number | null
    rec_pct_targets_short_left?: number | null
    rec_pct_targets_short_middle?: number | null
    rec_pct_targets_short_right?: number | null
    down_1_attempts?: number | null
    down_1_completions?: number | null
    down_1_passing_yards?: number | null
    down_1_carries?: number | null
    down_1_rushing_yards?: number | null
    down_1_targets?: number | null
    down_1_receptions?: number | null
    down_1_receiving_yards?: number | null
    down_1_team_carries_in_played_games?: number | null
    down_1_team_targets_in_played_games?: number | null
    down_1_team_receptions_in_played_games?: number | null
    down_1_team_carries_all_games?: number | null
    down_1_team_targets_all_games?: number | null
    down_1_team_receptions_all_games?: number | null
    down_1_yards_per_target?: number | null
    down_1_yards_per_reception?: number | null
    down_1_pass_attempts_per_game?: number | null
    down_1_completions_per_game?: number | null
    down_1_carries_per_game?: number | null
    down_1_rushing_yards_per_game?: number | null
    down_1_targets_per_game?: number | null
    down_1_receptions_per_game?: number | null
    down_1_receiving_yards_per_game?: number | null
    down_3_attempts?: number | null
    down_3_completions?: number | null
    down_3_passing_yards?: number | null
  }

  export type PlayerSeasonUncheckedCreateInput = {
    player_id: string
    season: number
    player_name?: string | null
    team?: string | null
    position?: string | null
    head_coach?: string | null
    offensive_coordinator?: string | null
    games_played?: number | null
    completions_total?: number | null
    attempts_total?: number | null
    passing_yards_total?: number | null
    passing_tds_total?: number | null
    interceptions_total?: number | null
    sacks_total?: number | null
    carries_total?: number | null
    rushing_yards_total?: number | null
    rushing_tds_total?: number | null
    rushing_first_downs_total?: number | null
    targets_total?: number | null
    receptions_total?: number | null
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
    sacks_avg?: number | null
    passing_air_yards_avg?: number | null
    passing_yards_after_catch_avg?: number | null
    carries_avg?: number | null
    rushing_yards_avg?: number | null
    rushing_tds_avg?: number | null
    rushing_fumbles_avg?: number | null
    rushing_first_downs_avg?: number | null
    rushing_epa_avg?: number | null
    receptions_avg?: number | null
    targets_avg?: number | null
    receiving_yards_avg?: number | null
    receiving_tds_avg?: number | null
    receiving_air_yards_avg?: number | null
    receiving_yards_after_catch_avg?: number | null
    receiving_first_downs_avg?: number | null
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
    green_zone_carries?: number | null
    HVTs?: number | null
    avg_pass_epa_deep_left?: number | null
    avg_pass_epa_deep_middle?: number | null
    avg_pass_epa_deep_right?: number | null
    avg_pass_epa_short_left?: number | null
    avg_pass_epa_short_middle?: number | null
    avg_pass_epa_short_right?: number | null
    total_tackled_for_loss?: number | null
    total_rushes?: number | null
    pct_carries_tackled_for_loss?: number | null
    rec_avg_rec_epa_deep_left?: number | null
    rec_avg_rec_epa_deep_middle?: number | null
    rec_avg_rec_epa_deep_right?: number | null
    rec_avg_rec_epa_short_left?: number | null
    rec_avg_rec_epa_short_middle?: number | null
    rec_avg_rec_epa_short_right?: number | null
    rec_pct_targets_deep_left?: number | null
    rec_pct_targets_deep_middle?: number | null
    rec_pct_targets_deep_right?: number | null
    rec_pct_targets_short_left?: number | null
    rec_pct_targets_short_middle?: number | null
    rec_pct_targets_short_right?: number | null
    down_1_attempts?: number | null
    down_1_completions?: number | null
    down_1_passing_yards?: number | null
    down_1_carries?: number | null
    down_1_rushing_yards?: number | null
    down_1_targets?: number | null
    down_1_receptions?: number | null
    down_1_receiving_yards?: number | null
    down_1_team_carries_in_played_games?: number | null
    down_1_team_targets_in_played_games?: number | null
    down_1_team_receptions_in_played_games?: number | null
    down_1_team_carries_all_games?: number | null
    down_1_team_targets_all_games?: number | null
    down_1_team_receptions_all_games?: number | null
    down_1_yards_per_target?: number | null
    down_1_yards_per_reception?: number | null
    down_1_pass_attempts_per_game?: number | null
    down_1_completions_per_game?: number | null
    down_1_carries_per_game?: number | null
    down_1_rushing_yards_per_game?: number | null
    down_1_targets_per_game?: number | null
    down_1_receptions_per_game?: number | null
    down_1_receiving_yards_per_game?: number | null
    down_3_attempts?: number | null
    down_3_completions?: number | null
    down_3_passing_yards?: number | null
  }

  export type PlayerSeasonUpdateInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    player_name?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    head_coach?: NullableStringFieldUpdateOperationsInput | string | null
    offensive_coordinator?: NullableStringFieldUpdateOperationsInput | string | null
    games_played?: NullableIntFieldUpdateOperationsInput | number | null
    completions_total?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts_total?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_tds_total?: NullableFloatFieldUpdateOperationsInput | number | null
    interceptions_total?: NullableFloatFieldUpdateOperationsInput | number | null
    sacks_total?: NullableFloatFieldUpdateOperationsInput | number | null
    carries_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_tds_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_first_downs_total?: NullableFloatFieldUpdateOperationsInput | number | null
    targets_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receptions_total?: NullableFloatFieldUpdateOperationsInput | number | null
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
    sacks_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_air_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_yards_after_catch_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    carries_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_tds_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_fumbles_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_first_downs_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_epa_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receptions_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    targets_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_tds_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_air_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_after_catch_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_first_downs_avg?: NullableFloatFieldUpdateOperationsInput | number | null
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
    green_zone_carries?: NullableFloatFieldUpdateOperationsInput | number | null
    HVTs?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_deep_left?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_deep_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_deep_right?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_short_left?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_short_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_short_right?: NullableFloatFieldUpdateOperationsInput | number | null
    total_tackled_for_loss?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rushes?: NullableFloatFieldUpdateOperationsInput | number | null
    pct_carries_tackled_for_loss?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_deep_left?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_deep_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_deep_right?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_short_left?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_short_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_short_right?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_deep_left?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_deep_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_deep_right?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_short_left?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_short_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_short_right?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_completions?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_passing_yards?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_carries?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_rushing_yards?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_targets?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_receptions?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_receiving_yards?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_team_carries_in_played_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_team_targets_in_played_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_team_receptions_in_played_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_team_carries_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_team_targets_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_team_receptions_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_yards_per_target?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_yards_per_reception?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_pass_attempts_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_completions_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_carries_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_rushing_yards_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_targets_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_receptions_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_receiving_yards_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_3_attempts?: NullableFloatFieldUpdateOperationsInput | number | null
    down_3_completions?: NullableIntFieldUpdateOperationsInput | number | null
    down_3_passing_yards?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayerSeasonUncheckedUpdateInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    player_name?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    head_coach?: NullableStringFieldUpdateOperationsInput | string | null
    offensive_coordinator?: NullableStringFieldUpdateOperationsInput | string | null
    games_played?: NullableIntFieldUpdateOperationsInput | number | null
    completions_total?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts_total?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_tds_total?: NullableFloatFieldUpdateOperationsInput | number | null
    interceptions_total?: NullableFloatFieldUpdateOperationsInput | number | null
    sacks_total?: NullableFloatFieldUpdateOperationsInput | number | null
    carries_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_tds_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_first_downs_total?: NullableFloatFieldUpdateOperationsInput | number | null
    targets_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receptions_total?: NullableFloatFieldUpdateOperationsInput | number | null
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
    sacks_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_air_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_yards_after_catch_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    carries_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_tds_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_fumbles_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_first_downs_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_epa_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receptions_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    targets_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_tds_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_air_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_after_catch_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_first_downs_avg?: NullableFloatFieldUpdateOperationsInput | number | null
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
    green_zone_carries?: NullableFloatFieldUpdateOperationsInput | number | null
    HVTs?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_deep_left?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_deep_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_deep_right?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_short_left?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_short_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_short_right?: NullableFloatFieldUpdateOperationsInput | number | null
    total_tackled_for_loss?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rushes?: NullableFloatFieldUpdateOperationsInput | number | null
    pct_carries_tackled_for_loss?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_deep_left?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_deep_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_deep_right?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_short_left?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_short_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_short_right?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_deep_left?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_deep_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_deep_right?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_short_left?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_short_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_short_right?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_completions?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_passing_yards?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_carries?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_rushing_yards?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_targets?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_receptions?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_receiving_yards?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_team_carries_in_played_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_team_targets_in_played_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_team_receptions_in_played_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_team_carries_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_team_targets_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_team_receptions_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_yards_per_target?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_yards_per_reception?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_pass_attempts_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_completions_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_carries_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_rushing_yards_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_targets_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_receptions_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_receiving_yards_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_3_attempts?: NullableFloatFieldUpdateOperationsInput | number | null
    down_3_completions?: NullableIntFieldUpdateOperationsInput | number | null
    down_3_passing_yards?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayerSeasonCreateManyInput = {
    player_id: string
    season: number
    player_name?: string | null
    team?: string | null
    position?: string | null
    head_coach?: string | null
    offensive_coordinator?: string | null
    games_played?: number | null
    completions_total?: number | null
    attempts_total?: number | null
    passing_yards_total?: number | null
    passing_tds_total?: number | null
    interceptions_total?: number | null
    sacks_total?: number | null
    carries_total?: number | null
    rushing_yards_total?: number | null
    rushing_tds_total?: number | null
    rushing_first_downs_total?: number | null
    targets_total?: number | null
    receptions_total?: number | null
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
    sacks_avg?: number | null
    passing_air_yards_avg?: number | null
    passing_yards_after_catch_avg?: number | null
    carries_avg?: number | null
    rushing_yards_avg?: number | null
    rushing_tds_avg?: number | null
    rushing_fumbles_avg?: number | null
    rushing_first_downs_avg?: number | null
    rushing_epa_avg?: number | null
    receptions_avg?: number | null
    targets_avg?: number | null
    receiving_yards_avg?: number | null
    receiving_tds_avg?: number | null
    receiving_air_yards_avg?: number | null
    receiving_yards_after_catch_avg?: number | null
    receiving_first_downs_avg?: number | null
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
    green_zone_carries?: number | null
    HVTs?: number | null
    avg_pass_epa_deep_left?: number | null
    avg_pass_epa_deep_middle?: number | null
    avg_pass_epa_deep_right?: number | null
    avg_pass_epa_short_left?: number | null
    avg_pass_epa_short_middle?: number | null
    avg_pass_epa_short_right?: number | null
    total_tackled_for_loss?: number | null
    total_rushes?: number | null
    pct_carries_tackled_for_loss?: number | null
    rec_avg_rec_epa_deep_left?: number | null
    rec_avg_rec_epa_deep_middle?: number | null
    rec_avg_rec_epa_deep_right?: number | null
    rec_avg_rec_epa_short_left?: number | null
    rec_avg_rec_epa_short_middle?: number | null
    rec_avg_rec_epa_short_right?: number | null
    rec_pct_targets_deep_left?: number | null
    rec_pct_targets_deep_middle?: number | null
    rec_pct_targets_deep_right?: number | null
    rec_pct_targets_short_left?: number | null
    rec_pct_targets_short_middle?: number | null
    rec_pct_targets_short_right?: number | null
    down_1_attempts?: number | null
    down_1_completions?: number | null
    down_1_passing_yards?: number | null
    down_1_carries?: number | null
    down_1_rushing_yards?: number | null
    down_1_targets?: number | null
    down_1_receptions?: number | null
    down_1_receiving_yards?: number | null
    down_1_team_carries_in_played_games?: number | null
    down_1_team_targets_in_played_games?: number | null
    down_1_team_receptions_in_played_games?: number | null
    down_1_team_carries_all_games?: number | null
    down_1_team_targets_all_games?: number | null
    down_1_team_receptions_all_games?: number | null
    down_1_yards_per_target?: number | null
    down_1_yards_per_reception?: number | null
    down_1_pass_attempts_per_game?: number | null
    down_1_completions_per_game?: number | null
    down_1_carries_per_game?: number | null
    down_1_rushing_yards_per_game?: number | null
    down_1_targets_per_game?: number | null
    down_1_receptions_per_game?: number | null
    down_1_receiving_yards_per_game?: number | null
    down_3_attempts?: number | null
    down_3_completions?: number | null
    down_3_passing_yards?: number | null
  }

  export type PlayerSeasonUpdateManyMutationInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    player_name?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    head_coach?: NullableStringFieldUpdateOperationsInput | string | null
    offensive_coordinator?: NullableStringFieldUpdateOperationsInput | string | null
    games_played?: NullableIntFieldUpdateOperationsInput | number | null
    completions_total?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts_total?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_tds_total?: NullableFloatFieldUpdateOperationsInput | number | null
    interceptions_total?: NullableFloatFieldUpdateOperationsInput | number | null
    sacks_total?: NullableFloatFieldUpdateOperationsInput | number | null
    carries_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_tds_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_first_downs_total?: NullableFloatFieldUpdateOperationsInput | number | null
    targets_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receptions_total?: NullableFloatFieldUpdateOperationsInput | number | null
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
    sacks_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_air_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_yards_after_catch_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    carries_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_tds_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_fumbles_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_first_downs_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_epa_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receptions_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    targets_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_tds_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_air_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_after_catch_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_first_downs_avg?: NullableFloatFieldUpdateOperationsInput | number | null
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
    green_zone_carries?: NullableFloatFieldUpdateOperationsInput | number | null
    HVTs?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_deep_left?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_deep_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_deep_right?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_short_left?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_short_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_short_right?: NullableFloatFieldUpdateOperationsInput | number | null
    total_tackled_for_loss?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rushes?: NullableFloatFieldUpdateOperationsInput | number | null
    pct_carries_tackled_for_loss?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_deep_left?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_deep_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_deep_right?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_short_left?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_short_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_short_right?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_deep_left?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_deep_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_deep_right?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_short_left?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_short_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_short_right?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_completions?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_passing_yards?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_carries?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_rushing_yards?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_targets?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_receptions?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_receiving_yards?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_team_carries_in_played_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_team_targets_in_played_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_team_receptions_in_played_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_team_carries_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_team_targets_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_team_receptions_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_yards_per_target?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_yards_per_reception?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_pass_attempts_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_completions_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_carries_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_rushing_yards_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_targets_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_receptions_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_receiving_yards_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_3_attempts?: NullableFloatFieldUpdateOperationsInput | number | null
    down_3_completions?: NullableIntFieldUpdateOperationsInput | number | null
    down_3_passing_yards?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayerSeasonUncheckedUpdateManyInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    player_name?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    head_coach?: NullableStringFieldUpdateOperationsInput | string | null
    offensive_coordinator?: NullableStringFieldUpdateOperationsInput | string | null
    games_played?: NullableIntFieldUpdateOperationsInput | number | null
    completions_total?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts_total?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_tds_total?: NullableFloatFieldUpdateOperationsInput | number | null
    interceptions_total?: NullableFloatFieldUpdateOperationsInput | number | null
    sacks_total?: NullableFloatFieldUpdateOperationsInput | number | null
    carries_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_yards_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_tds_total?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_first_downs_total?: NullableFloatFieldUpdateOperationsInput | number | null
    targets_total?: NullableFloatFieldUpdateOperationsInput | number | null
    receptions_total?: NullableFloatFieldUpdateOperationsInput | number | null
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
    sacks_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_air_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    passing_yards_after_catch_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    carries_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_tds_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_fumbles_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_first_downs_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    rushing_epa_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receptions_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    targets_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_tds_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_air_yards_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_yards_after_catch_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    receiving_first_downs_avg?: NullableFloatFieldUpdateOperationsInput | number | null
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
    green_zone_carries?: NullableFloatFieldUpdateOperationsInput | number | null
    HVTs?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_deep_left?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_deep_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_deep_right?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_short_left?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_short_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_pass_epa_short_right?: NullableFloatFieldUpdateOperationsInput | number | null
    total_tackled_for_loss?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rushes?: NullableFloatFieldUpdateOperationsInput | number | null
    pct_carries_tackled_for_loss?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_deep_left?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_deep_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_deep_right?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_short_left?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_short_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_avg_rec_epa_short_right?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_deep_left?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_deep_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_deep_right?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_short_left?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_short_middle?: NullableFloatFieldUpdateOperationsInput | number | null
    rec_pct_targets_short_right?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_completions?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_passing_yards?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_carries?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_rushing_yards?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_targets?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_receptions?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_receiving_yards?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_team_carries_in_played_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_team_targets_in_played_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_team_receptions_in_played_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_team_carries_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_team_targets_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_team_receptions_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    down_1_yards_per_target?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_yards_per_reception?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_pass_attempts_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_completions_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_carries_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_rushing_yards_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_targets_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_receptions_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_1_receiving_yards_per_game?: NullableFloatFieldUpdateOperationsInput | number | null
    down_3_attempts?: NullableFloatFieldUpdateOperationsInput | number | null
    down_3_completions?: NullableIntFieldUpdateOperationsInput | number | null
    down_3_passing_yards?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FeedbackCreateInput = {
    id?: string
    createdAt?: Date | string
    query: string
    sql: string
    isExpected: boolean
    reason?: string | null
  }

  export type FeedbackUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    query: string
    sql: string
    isExpected: boolean
    reason?: string | null
  }

  export type FeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    query?: StringFieldUpdateOperationsInput | string
    sql?: StringFieldUpdateOperationsInput | string
    isExpected?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    query?: StringFieldUpdateOperationsInput | string
    sql?: StringFieldUpdateOperationsInput | string
    isExpected?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedbackCreateManyInput = {
    id?: string
    createdAt?: Date | string
    query: string
    sql: string
    isExpected: boolean
    reason?: string | null
  }

  export type FeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    query?: StringFieldUpdateOperationsInput | string
    sql?: StringFieldUpdateOperationsInput | string
    isExpected?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    query?: StringFieldUpdateOperationsInput | string
    sql?: StringFieldUpdateOperationsInput | string
    isExpected?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamSeasonStatsCreateInput = {
    team: string
    season: number
    team_green_zone_carries_all_games?: number | null
    team_carries_all_games?: number | null
    team_targets_all_games?: number | null
    team_receptions_all_games?: number | null
    team_rush_fd_all_games?: number | null
    team_rec_fd_all_games?: number | null
  }

  export type TeamSeasonStatsUncheckedCreateInput = {
    team: string
    season: number
    team_green_zone_carries_all_games?: number | null
    team_carries_all_games?: number | null
    team_targets_all_games?: number | null
    team_receptions_all_games?: number | null
    team_rush_fd_all_games?: number | null
    team_rec_fd_all_games?: number | null
  }

  export type TeamSeasonStatsUpdateInput = {
    team?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    team_green_zone_carries_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    team_carries_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    team_targets_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    team_receptions_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    team_rush_fd_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    team_rec_fd_all_games?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TeamSeasonStatsUncheckedUpdateInput = {
    team?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    team_green_zone_carries_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    team_carries_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    team_targets_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    team_receptions_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    team_rush_fd_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    team_rec_fd_all_games?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TeamSeasonStatsCreateManyInput = {
    team: string
    season: number
    team_green_zone_carries_all_games?: number | null
    team_carries_all_games?: number | null
    team_targets_all_games?: number | null
    team_receptions_all_games?: number | null
    team_rush_fd_all_games?: number | null
    team_rec_fd_all_games?: number | null
  }

  export type TeamSeasonStatsUpdateManyMutationInput = {
    team?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    team_green_zone_carries_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    team_carries_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    team_targets_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    team_receptions_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    team_rush_fd_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    team_rec_fd_all_games?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TeamSeasonStatsUncheckedUpdateManyInput = {
    team?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    team_green_zone_carries_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    team_carries_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    team_targets_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    team_receptions_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    team_rush_fd_all_games?: NullableIntFieldUpdateOperationsInput | number | null
    team_rec_fd_all_games?: NullableIntFieldUpdateOperationsInput | number | null
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
    passingAirYards?: SortOrder
    passingYardsAfterCatch?: SortOrder
    passingEpa?: SortOrder
    pacr?: SortOrder
    carries?: SortOrder
    rushingYards?: SortOrder
    rushingTds?: SortOrder
    rushingFumbles?: SortOrder
    rushingFirstDowns?: SortOrder
    rushingEpa?: SortOrder
    receptions?: SortOrder
    targets?: SortOrder
    receivingYards?: SortOrder
    receivingTds?: SortOrder
    receivingAirYards?: SortOrder
    receivingYardsAfterCatch?: SortOrder
    receivingFirstDowns?: SortOrder
    racr?: SortOrder
    targetShare?: SortOrder
    airYardsShare?: SortOrder
    wopr?: SortOrder
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
    passingAirYards?: SortOrder
    passingYardsAfterCatch?: SortOrder
    passingEpa?: SortOrder
    pacr?: SortOrder
    carries?: SortOrder
    rushingYards?: SortOrder
    rushingTds?: SortOrder
    rushingFumbles?: SortOrder
    rushingFirstDowns?: SortOrder
    rushingEpa?: SortOrder
    receptions?: SortOrder
    targets?: SortOrder
    receivingYards?: SortOrder
    receivingTds?: SortOrder
    receivingAirYards?: SortOrder
    receivingYardsAfterCatch?: SortOrder
    receivingFirstDowns?: SortOrder
    racr?: SortOrder
    targetShare?: SortOrder
    airYardsShare?: SortOrder
    wopr?: SortOrder
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
    passingAirYards?: SortOrder
    passingYardsAfterCatch?: SortOrder
    passingEpa?: SortOrder
    pacr?: SortOrder
    carries?: SortOrder
    rushingYards?: SortOrder
    rushingTds?: SortOrder
    rushingFumbles?: SortOrder
    rushingFirstDowns?: SortOrder
    rushingEpa?: SortOrder
    receptions?: SortOrder
    targets?: SortOrder
    receivingYards?: SortOrder
    receivingTds?: SortOrder
    receivingAirYards?: SortOrder
    receivingYardsAfterCatch?: SortOrder
    receivingFirstDowns?: SortOrder
    racr?: SortOrder
    targetShare?: SortOrder
    airYardsShare?: SortOrder
    wopr?: SortOrder
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
    passingAirYards?: SortOrder
    passingYardsAfterCatch?: SortOrder
    passingEpa?: SortOrder
    pacr?: SortOrder
    carries?: SortOrder
    rushingYards?: SortOrder
    rushingTds?: SortOrder
    rushingFumbles?: SortOrder
    rushingFirstDowns?: SortOrder
    rushingEpa?: SortOrder
    receptions?: SortOrder
    targets?: SortOrder
    receivingYards?: SortOrder
    receivingTds?: SortOrder
    receivingAirYards?: SortOrder
    receivingYardsAfterCatch?: SortOrder
    receivingFirstDowns?: SortOrder
    racr?: SortOrder
    targetShare?: SortOrder
    airYardsShare?: SortOrder
    wopr?: SortOrder
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
    passingAirYards?: SortOrder
    passingYardsAfterCatch?: SortOrder
    passingEpa?: SortOrder
    pacr?: SortOrder
    carries?: SortOrder
    rushingYards?: SortOrder
    rushingTds?: SortOrder
    rushingFumbles?: SortOrder
    rushingFirstDowns?: SortOrder
    rushingEpa?: SortOrder
    receptions?: SortOrder
    targets?: SortOrder
    receivingYards?: SortOrder
    receivingTds?: SortOrder
    receivingAirYards?: SortOrder
    receivingYardsAfterCatch?: SortOrder
    receivingFirstDowns?: SortOrder
    racr?: SortOrder
    targetShare?: SortOrder
    airYardsShare?: SortOrder
    wopr?: SortOrder
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
    season?: SortOrder
    player_name?: SortOrder
    team?: SortOrder
    position?: SortOrder
    head_coach?: SortOrder
    offensive_coordinator?: SortOrder
    games_played?: SortOrder
    completions_total?: SortOrder
    attempts_total?: SortOrder
    passing_yards_total?: SortOrder
    passing_tds_total?: SortOrder
    interceptions_total?: SortOrder
    sacks_total?: SortOrder
    carries_total?: SortOrder
    rushing_yards_total?: SortOrder
    rushing_tds_total?: SortOrder
    rushing_first_downs_total?: SortOrder
    targets_total?: SortOrder
    receptions_total?: SortOrder
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
    sacks_avg?: SortOrder
    passing_air_yards_avg?: SortOrder
    passing_yards_after_catch_avg?: SortOrder
    carries_avg?: SortOrder
    rushing_yards_avg?: SortOrder
    rushing_tds_avg?: SortOrder
    rushing_fumbles_avg?: SortOrder
    rushing_first_downs_avg?: SortOrder
    rushing_epa_avg?: SortOrder
    receptions_avg?: SortOrder
    targets_avg?: SortOrder
    receiving_yards_avg?: SortOrder
    receiving_tds_avg?: SortOrder
    receiving_air_yards_avg?: SortOrder
    receiving_yards_after_catch_avg?: SortOrder
    receiving_first_downs_avg?: SortOrder
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
    green_zone_carries?: SortOrder
    HVTs?: SortOrder
    avg_pass_epa_deep_left?: SortOrder
    avg_pass_epa_deep_middle?: SortOrder
    avg_pass_epa_deep_right?: SortOrder
    avg_pass_epa_short_left?: SortOrder
    avg_pass_epa_short_middle?: SortOrder
    avg_pass_epa_short_right?: SortOrder
    total_tackled_for_loss?: SortOrder
    total_rushes?: SortOrder
    pct_carries_tackled_for_loss?: SortOrder
    rec_avg_rec_epa_deep_left?: SortOrder
    rec_avg_rec_epa_deep_middle?: SortOrder
    rec_avg_rec_epa_deep_right?: SortOrder
    rec_avg_rec_epa_short_left?: SortOrder
    rec_avg_rec_epa_short_middle?: SortOrder
    rec_avg_rec_epa_short_right?: SortOrder
    rec_pct_targets_deep_left?: SortOrder
    rec_pct_targets_deep_middle?: SortOrder
    rec_pct_targets_deep_right?: SortOrder
    rec_pct_targets_short_left?: SortOrder
    rec_pct_targets_short_middle?: SortOrder
    rec_pct_targets_short_right?: SortOrder
    down_1_attempts?: SortOrder
    down_1_completions?: SortOrder
    down_1_passing_yards?: SortOrder
    down_1_carries?: SortOrder
    down_1_rushing_yards?: SortOrder
    down_1_targets?: SortOrder
    down_1_receptions?: SortOrder
    down_1_receiving_yards?: SortOrder
    down_1_team_carries_in_played_games?: SortOrder
    down_1_team_targets_in_played_games?: SortOrder
    down_1_team_receptions_in_played_games?: SortOrder
    down_1_team_carries_all_games?: SortOrder
    down_1_team_targets_all_games?: SortOrder
    down_1_team_receptions_all_games?: SortOrder
    down_1_yards_per_target?: SortOrder
    down_1_yards_per_reception?: SortOrder
    down_1_pass_attempts_per_game?: SortOrder
    down_1_completions_per_game?: SortOrder
    down_1_carries_per_game?: SortOrder
    down_1_rushing_yards_per_game?: SortOrder
    down_1_targets_per_game?: SortOrder
    down_1_receptions_per_game?: SortOrder
    down_1_receiving_yards_per_game?: SortOrder
    down_3_attempts?: SortOrder
    down_3_completions?: SortOrder
    down_3_passing_yards?: SortOrder
  }

  export type PlayerSeasonAvgOrderByAggregateInput = {
    season?: SortOrder
    games_played?: SortOrder
    completions_total?: SortOrder
    attempts_total?: SortOrder
    passing_yards_total?: SortOrder
    passing_tds_total?: SortOrder
    interceptions_total?: SortOrder
    sacks_total?: SortOrder
    carries_total?: SortOrder
    rushing_yards_total?: SortOrder
    rushing_tds_total?: SortOrder
    rushing_first_downs_total?: SortOrder
    targets_total?: SortOrder
    receptions_total?: SortOrder
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
    sacks_avg?: SortOrder
    passing_air_yards_avg?: SortOrder
    passing_yards_after_catch_avg?: SortOrder
    carries_avg?: SortOrder
    rushing_yards_avg?: SortOrder
    rushing_tds_avg?: SortOrder
    rushing_fumbles_avg?: SortOrder
    rushing_first_downs_avg?: SortOrder
    rushing_epa_avg?: SortOrder
    receptions_avg?: SortOrder
    targets_avg?: SortOrder
    receiving_yards_avg?: SortOrder
    receiving_tds_avg?: SortOrder
    receiving_air_yards_avg?: SortOrder
    receiving_yards_after_catch_avg?: SortOrder
    receiving_first_downs_avg?: SortOrder
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
    green_zone_carries?: SortOrder
    HVTs?: SortOrder
    avg_pass_epa_deep_left?: SortOrder
    avg_pass_epa_deep_middle?: SortOrder
    avg_pass_epa_deep_right?: SortOrder
    avg_pass_epa_short_left?: SortOrder
    avg_pass_epa_short_middle?: SortOrder
    avg_pass_epa_short_right?: SortOrder
    total_tackled_for_loss?: SortOrder
    total_rushes?: SortOrder
    pct_carries_tackled_for_loss?: SortOrder
    rec_avg_rec_epa_deep_left?: SortOrder
    rec_avg_rec_epa_deep_middle?: SortOrder
    rec_avg_rec_epa_deep_right?: SortOrder
    rec_avg_rec_epa_short_left?: SortOrder
    rec_avg_rec_epa_short_middle?: SortOrder
    rec_avg_rec_epa_short_right?: SortOrder
    rec_pct_targets_deep_left?: SortOrder
    rec_pct_targets_deep_middle?: SortOrder
    rec_pct_targets_deep_right?: SortOrder
    rec_pct_targets_short_left?: SortOrder
    rec_pct_targets_short_middle?: SortOrder
    rec_pct_targets_short_right?: SortOrder
    down_1_attempts?: SortOrder
    down_1_completions?: SortOrder
    down_1_passing_yards?: SortOrder
    down_1_carries?: SortOrder
    down_1_rushing_yards?: SortOrder
    down_1_targets?: SortOrder
    down_1_receptions?: SortOrder
    down_1_receiving_yards?: SortOrder
    down_1_team_carries_in_played_games?: SortOrder
    down_1_team_targets_in_played_games?: SortOrder
    down_1_team_receptions_in_played_games?: SortOrder
    down_1_team_carries_all_games?: SortOrder
    down_1_team_targets_all_games?: SortOrder
    down_1_team_receptions_all_games?: SortOrder
    down_1_yards_per_target?: SortOrder
    down_1_yards_per_reception?: SortOrder
    down_1_pass_attempts_per_game?: SortOrder
    down_1_completions_per_game?: SortOrder
    down_1_carries_per_game?: SortOrder
    down_1_rushing_yards_per_game?: SortOrder
    down_1_targets_per_game?: SortOrder
    down_1_receptions_per_game?: SortOrder
    down_1_receiving_yards_per_game?: SortOrder
    down_3_attempts?: SortOrder
    down_3_completions?: SortOrder
    down_3_passing_yards?: SortOrder
  }

  export type PlayerSeasonMaxOrderByAggregateInput = {
    player_id?: SortOrder
    season?: SortOrder
    player_name?: SortOrder
    team?: SortOrder
    position?: SortOrder
    head_coach?: SortOrder
    offensive_coordinator?: SortOrder
    games_played?: SortOrder
    completions_total?: SortOrder
    attempts_total?: SortOrder
    passing_yards_total?: SortOrder
    passing_tds_total?: SortOrder
    interceptions_total?: SortOrder
    sacks_total?: SortOrder
    carries_total?: SortOrder
    rushing_yards_total?: SortOrder
    rushing_tds_total?: SortOrder
    rushing_first_downs_total?: SortOrder
    targets_total?: SortOrder
    receptions_total?: SortOrder
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
    sacks_avg?: SortOrder
    passing_air_yards_avg?: SortOrder
    passing_yards_after_catch_avg?: SortOrder
    carries_avg?: SortOrder
    rushing_yards_avg?: SortOrder
    rushing_tds_avg?: SortOrder
    rushing_fumbles_avg?: SortOrder
    rushing_first_downs_avg?: SortOrder
    rushing_epa_avg?: SortOrder
    receptions_avg?: SortOrder
    targets_avg?: SortOrder
    receiving_yards_avg?: SortOrder
    receiving_tds_avg?: SortOrder
    receiving_air_yards_avg?: SortOrder
    receiving_yards_after_catch_avg?: SortOrder
    receiving_first_downs_avg?: SortOrder
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
    green_zone_carries?: SortOrder
    HVTs?: SortOrder
    avg_pass_epa_deep_left?: SortOrder
    avg_pass_epa_deep_middle?: SortOrder
    avg_pass_epa_deep_right?: SortOrder
    avg_pass_epa_short_left?: SortOrder
    avg_pass_epa_short_middle?: SortOrder
    avg_pass_epa_short_right?: SortOrder
    total_tackled_for_loss?: SortOrder
    total_rushes?: SortOrder
    pct_carries_tackled_for_loss?: SortOrder
    rec_avg_rec_epa_deep_left?: SortOrder
    rec_avg_rec_epa_deep_middle?: SortOrder
    rec_avg_rec_epa_deep_right?: SortOrder
    rec_avg_rec_epa_short_left?: SortOrder
    rec_avg_rec_epa_short_middle?: SortOrder
    rec_avg_rec_epa_short_right?: SortOrder
    rec_pct_targets_deep_left?: SortOrder
    rec_pct_targets_deep_middle?: SortOrder
    rec_pct_targets_deep_right?: SortOrder
    rec_pct_targets_short_left?: SortOrder
    rec_pct_targets_short_middle?: SortOrder
    rec_pct_targets_short_right?: SortOrder
    down_1_attempts?: SortOrder
    down_1_completions?: SortOrder
    down_1_passing_yards?: SortOrder
    down_1_carries?: SortOrder
    down_1_rushing_yards?: SortOrder
    down_1_targets?: SortOrder
    down_1_receptions?: SortOrder
    down_1_receiving_yards?: SortOrder
    down_1_team_carries_in_played_games?: SortOrder
    down_1_team_targets_in_played_games?: SortOrder
    down_1_team_receptions_in_played_games?: SortOrder
    down_1_team_carries_all_games?: SortOrder
    down_1_team_targets_all_games?: SortOrder
    down_1_team_receptions_all_games?: SortOrder
    down_1_yards_per_target?: SortOrder
    down_1_yards_per_reception?: SortOrder
    down_1_pass_attempts_per_game?: SortOrder
    down_1_completions_per_game?: SortOrder
    down_1_carries_per_game?: SortOrder
    down_1_rushing_yards_per_game?: SortOrder
    down_1_targets_per_game?: SortOrder
    down_1_receptions_per_game?: SortOrder
    down_1_receiving_yards_per_game?: SortOrder
    down_3_attempts?: SortOrder
    down_3_completions?: SortOrder
    down_3_passing_yards?: SortOrder
  }

  export type PlayerSeasonMinOrderByAggregateInput = {
    player_id?: SortOrder
    season?: SortOrder
    player_name?: SortOrder
    team?: SortOrder
    position?: SortOrder
    head_coach?: SortOrder
    offensive_coordinator?: SortOrder
    games_played?: SortOrder
    completions_total?: SortOrder
    attempts_total?: SortOrder
    passing_yards_total?: SortOrder
    passing_tds_total?: SortOrder
    interceptions_total?: SortOrder
    sacks_total?: SortOrder
    carries_total?: SortOrder
    rushing_yards_total?: SortOrder
    rushing_tds_total?: SortOrder
    rushing_first_downs_total?: SortOrder
    targets_total?: SortOrder
    receptions_total?: SortOrder
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
    sacks_avg?: SortOrder
    passing_air_yards_avg?: SortOrder
    passing_yards_after_catch_avg?: SortOrder
    carries_avg?: SortOrder
    rushing_yards_avg?: SortOrder
    rushing_tds_avg?: SortOrder
    rushing_fumbles_avg?: SortOrder
    rushing_first_downs_avg?: SortOrder
    rushing_epa_avg?: SortOrder
    receptions_avg?: SortOrder
    targets_avg?: SortOrder
    receiving_yards_avg?: SortOrder
    receiving_tds_avg?: SortOrder
    receiving_air_yards_avg?: SortOrder
    receiving_yards_after_catch_avg?: SortOrder
    receiving_first_downs_avg?: SortOrder
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
    green_zone_carries?: SortOrder
    HVTs?: SortOrder
    avg_pass_epa_deep_left?: SortOrder
    avg_pass_epa_deep_middle?: SortOrder
    avg_pass_epa_deep_right?: SortOrder
    avg_pass_epa_short_left?: SortOrder
    avg_pass_epa_short_middle?: SortOrder
    avg_pass_epa_short_right?: SortOrder
    total_tackled_for_loss?: SortOrder
    total_rushes?: SortOrder
    pct_carries_tackled_for_loss?: SortOrder
    rec_avg_rec_epa_deep_left?: SortOrder
    rec_avg_rec_epa_deep_middle?: SortOrder
    rec_avg_rec_epa_deep_right?: SortOrder
    rec_avg_rec_epa_short_left?: SortOrder
    rec_avg_rec_epa_short_middle?: SortOrder
    rec_avg_rec_epa_short_right?: SortOrder
    rec_pct_targets_deep_left?: SortOrder
    rec_pct_targets_deep_middle?: SortOrder
    rec_pct_targets_deep_right?: SortOrder
    rec_pct_targets_short_left?: SortOrder
    rec_pct_targets_short_middle?: SortOrder
    rec_pct_targets_short_right?: SortOrder
    down_1_attempts?: SortOrder
    down_1_completions?: SortOrder
    down_1_passing_yards?: SortOrder
    down_1_carries?: SortOrder
    down_1_rushing_yards?: SortOrder
    down_1_targets?: SortOrder
    down_1_receptions?: SortOrder
    down_1_receiving_yards?: SortOrder
    down_1_team_carries_in_played_games?: SortOrder
    down_1_team_targets_in_played_games?: SortOrder
    down_1_team_receptions_in_played_games?: SortOrder
    down_1_team_carries_all_games?: SortOrder
    down_1_team_targets_all_games?: SortOrder
    down_1_team_receptions_all_games?: SortOrder
    down_1_yards_per_target?: SortOrder
    down_1_yards_per_reception?: SortOrder
    down_1_pass_attempts_per_game?: SortOrder
    down_1_completions_per_game?: SortOrder
    down_1_carries_per_game?: SortOrder
    down_1_rushing_yards_per_game?: SortOrder
    down_1_targets_per_game?: SortOrder
    down_1_receptions_per_game?: SortOrder
    down_1_receiving_yards_per_game?: SortOrder
    down_3_attempts?: SortOrder
    down_3_completions?: SortOrder
    down_3_passing_yards?: SortOrder
  }

  export type PlayerSeasonSumOrderByAggregateInput = {
    season?: SortOrder
    games_played?: SortOrder
    completions_total?: SortOrder
    attempts_total?: SortOrder
    passing_yards_total?: SortOrder
    passing_tds_total?: SortOrder
    interceptions_total?: SortOrder
    sacks_total?: SortOrder
    carries_total?: SortOrder
    rushing_yards_total?: SortOrder
    rushing_tds_total?: SortOrder
    rushing_first_downs_total?: SortOrder
    targets_total?: SortOrder
    receptions_total?: SortOrder
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
    sacks_avg?: SortOrder
    passing_air_yards_avg?: SortOrder
    passing_yards_after_catch_avg?: SortOrder
    carries_avg?: SortOrder
    rushing_yards_avg?: SortOrder
    rushing_tds_avg?: SortOrder
    rushing_fumbles_avg?: SortOrder
    rushing_first_downs_avg?: SortOrder
    rushing_epa_avg?: SortOrder
    receptions_avg?: SortOrder
    targets_avg?: SortOrder
    receiving_yards_avg?: SortOrder
    receiving_tds_avg?: SortOrder
    receiving_air_yards_avg?: SortOrder
    receiving_yards_after_catch_avg?: SortOrder
    receiving_first_downs_avg?: SortOrder
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
    green_zone_carries?: SortOrder
    HVTs?: SortOrder
    avg_pass_epa_deep_left?: SortOrder
    avg_pass_epa_deep_middle?: SortOrder
    avg_pass_epa_deep_right?: SortOrder
    avg_pass_epa_short_left?: SortOrder
    avg_pass_epa_short_middle?: SortOrder
    avg_pass_epa_short_right?: SortOrder
    total_tackled_for_loss?: SortOrder
    total_rushes?: SortOrder
    pct_carries_tackled_for_loss?: SortOrder
    rec_avg_rec_epa_deep_left?: SortOrder
    rec_avg_rec_epa_deep_middle?: SortOrder
    rec_avg_rec_epa_deep_right?: SortOrder
    rec_avg_rec_epa_short_left?: SortOrder
    rec_avg_rec_epa_short_middle?: SortOrder
    rec_avg_rec_epa_short_right?: SortOrder
    rec_pct_targets_deep_left?: SortOrder
    rec_pct_targets_deep_middle?: SortOrder
    rec_pct_targets_deep_right?: SortOrder
    rec_pct_targets_short_left?: SortOrder
    rec_pct_targets_short_middle?: SortOrder
    rec_pct_targets_short_right?: SortOrder
    down_1_attempts?: SortOrder
    down_1_completions?: SortOrder
    down_1_passing_yards?: SortOrder
    down_1_carries?: SortOrder
    down_1_rushing_yards?: SortOrder
    down_1_targets?: SortOrder
    down_1_receptions?: SortOrder
    down_1_receiving_yards?: SortOrder
    down_1_team_carries_in_played_games?: SortOrder
    down_1_team_targets_in_played_games?: SortOrder
    down_1_team_receptions_in_played_games?: SortOrder
    down_1_team_carries_all_games?: SortOrder
    down_1_team_targets_all_games?: SortOrder
    down_1_team_receptions_all_games?: SortOrder
    down_1_yards_per_target?: SortOrder
    down_1_yards_per_reception?: SortOrder
    down_1_pass_attempts_per_game?: SortOrder
    down_1_completions_per_game?: SortOrder
    down_1_carries_per_game?: SortOrder
    down_1_rushing_yards_per_game?: SortOrder
    down_1_targets_per_game?: SortOrder
    down_1_receptions_per_game?: SortOrder
    down_1_receiving_yards_per_game?: SortOrder
    down_3_attempts?: SortOrder
    down_3_completions?: SortOrder
    down_3_passing_yards?: SortOrder
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    query?: SortOrder
    sql?: SortOrder
    isExpected?: SortOrder
    reason?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    query?: SortOrder
    sql?: SortOrder
    isExpected?: SortOrder
    reason?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    query?: SortOrder
    sql?: SortOrder
    isExpected?: SortOrder
    reason?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TeamSeasonStatsTeamSeasonCompoundUniqueInput = {
    team: string
    season: number
  }

  export type TeamSeasonStatsCountOrderByAggregateInput = {
    team?: SortOrder
    season?: SortOrder
    team_green_zone_carries_all_games?: SortOrder
    team_carries_all_games?: SortOrder
    team_targets_all_games?: SortOrder
    team_receptions_all_games?: SortOrder
    team_rush_fd_all_games?: SortOrder
    team_rec_fd_all_games?: SortOrder
  }

  export type TeamSeasonStatsAvgOrderByAggregateInput = {
    season?: SortOrder
    team_green_zone_carries_all_games?: SortOrder
    team_carries_all_games?: SortOrder
    team_targets_all_games?: SortOrder
    team_receptions_all_games?: SortOrder
    team_rush_fd_all_games?: SortOrder
    team_rec_fd_all_games?: SortOrder
  }

  export type TeamSeasonStatsMaxOrderByAggregateInput = {
    team?: SortOrder
    season?: SortOrder
    team_green_zone_carries_all_games?: SortOrder
    team_carries_all_games?: SortOrder
    team_targets_all_games?: SortOrder
    team_receptions_all_games?: SortOrder
    team_rush_fd_all_games?: SortOrder
    team_rec_fd_all_games?: SortOrder
  }

  export type TeamSeasonStatsMinOrderByAggregateInput = {
    team?: SortOrder
    season?: SortOrder
    team_green_zone_carries_all_games?: SortOrder
    team_carries_all_games?: SortOrder
    team_targets_all_games?: SortOrder
    team_receptions_all_games?: SortOrder
    team_rush_fd_all_games?: SortOrder
    team_rec_fd_all_games?: SortOrder
  }

  export type TeamSeasonStatsSumOrderByAggregateInput = {
    season?: SortOrder
    team_green_zone_carries_all_games?: SortOrder
    team_carries_all_games?: SortOrder
    team_targets_all_games?: SortOrder
    team_receptions_all_games?: SortOrder
    team_rush_fd_all_games?: SortOrder
    team_rec_fd_all_games?: SortOrder
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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