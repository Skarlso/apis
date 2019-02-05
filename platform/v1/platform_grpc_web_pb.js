/**
 * @fileoverview gRPC-Web generated client stub for arangodb.cloud.platform.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var common_v1_common_pb = require('./common/v1/common_pb.js')

var google_api_annotations_pb = require('./google/api/annotations_pb.js')
const proto = {};
proto.arangodb = {};
proto.arangodb.cloud = {};
proto.arangodb.cloud.platform = {};
proto.arangodb.cloud.platform.v1 = require('./platform_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.arangodb.cloud.platform.v1.PlatformServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.arangodb.cloud.platform.v1.PlatformServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.arangodb.cloud.platform.v1.PlatformServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.arangodb.cloud.platform.v1.PlatformServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.ListOptions,
 *   !proto.arangodb.cloud.platform.v1.ProviderList>}
 */
const methodInfo_PlatformService_ListProviders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.platform.v1.ProviderList,
  /** @param {!proto.arangodb.cloud.common.v1.ListOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.platform.v1.ProviderList.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.platform.v1.ProviderList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.platform.v1.ProviderList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.platform.v1.PlatformServiceClient.prototype.listProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.platform.v1.PlatformService/ListProviders',
      request,
      metadata,
      methodInfo_PlatformService_ListProviders,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.platform.v1.ProviderList>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.platform.v1.PlatformServicePromiseClient.prototype.listProviders =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listProviders(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.IDOptions,
 *   !proto.arangodb.cloud.platform.v1.Provider>}
 */
const methodInfo_PlatformService_GetProvider = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.platform.v1.Provider,
  /** @param {!proto.arangodb.cloud.common.v1.IDOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.platform.v1.Provider.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.IDOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.platform.v1.Provider)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.platform.v1.Provider>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.platform.v1.PlatformServiceClient.prototype.getProvider =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.platform.v1.PlatformService/GetProvider',
      request,
      metadata,
      methodInfo_PlatformService_GetProvider,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.IDOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.platform.v1.Provider>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.platform.v1.PlatformServicePromiseClient.prototype.getProvider =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getProvider(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.ListOptions,
 *   !proto.arangodb.cloud.platform.v1.RegionList>}
 */
const methodInfo_PlatformService_ListRegions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.platform.v1.RegionList,
  /** @param {!proto.arangodb.cloud.common.v1.ListOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.platform.v1.RegionList.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.platform.v1.RegionList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.platform.v1.RegionList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.platform.v1.PlatformServiceClient.prototype.listRegions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.platform.v1.PlatformService/ListRegions',
      request,
      metadata,
      methodInfo_PlatformService_ListRegions,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.platform.v1.RegionList>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.platform.v1.PlatformServicePromiseClient.prototype.listRegions =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listRegions(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.IDOptions,
 *   !proto.arangodb.cloud.platform.v1.Region>}
 */
const methodInfo_PlatformService_GetRegion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.platform.v1.Region,
  /** @param {!proto.arangodb.cloud.common.v1.IDOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.platform.v1.Region.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.IDOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.platform.v1.Region)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.platform.v1.Region>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.platform.v1.PlatformServiceClient.prototype.getRegion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.platform.v1.PlatformService/GetRegion',
      request,
      metadata,
      methodInfo_PlatformService_GetRegion,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.IDOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.platform.v1.Region>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.platform.v1.PlatformServicePromiseClient.prototype.getRegion =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getRegion(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.arangodb.cloud.platform.v1;

