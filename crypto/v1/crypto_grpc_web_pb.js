/**
 * @fileoverview gRPC-Web generated client stub for arangodb.cloud.crypto.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var common_v1_common_pb = require('./common/v1/common_pb.js')

var github_com_golang_protobuf_ptypes_duration_duration_pb = require('./github.com/golang/protobuf/ptypes/duration/duration_pb.js')

var github_com_golang_protobuf_ptypes_timestamp_timestamp_pb = require('./github.com/golang/protobuf/ptypes/timestamp/timestamp_pb.js')

var google_api_annotations_pb = require('./google/api/annotations_pb.js')
const proto = {};
proto.arangodb = {};
proto.arangodb.cloud = {};
proto.arangodb.cloud.crypto = {};
proto.arangodb.cloud.crypto.v1 = require('./crypto_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.arangodb.cloud.crypto.v1.CryptoServiceClient =
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
proto.arangodb.cloud.crypto.v1.CryptoServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.arangodb.cloud.crypto.v1.CryptoServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.arangodb.cloud.crypto.v1.CryptoServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.ListOptions,
 *   !proto.arangodb.cloud.crypto.v1.CACertificateList>}
 */
const methodInfo_CryptoService_ListCACertificates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.crypto.v1.CACertificateList,
  /** @param {!proto.arangodb.cloud.common.v1.ListOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.crypto.v1.CACertificateList.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.crypto.v1.CACertificateList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.crypto.v1.CACertificateList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.crypto.v1.CryptoServiceClient.prototype.listCACertificates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.crypto.v1.CryptoService/ListCACertificates',
      request,
      metadata,
      methodInfo_CryptoService_ListCACertificates,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.crypto.v1.CACertificateList>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.crypto.v1.CryptoServicePromiseClient.prototype.listCACertificates =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listCACertificates(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.IDOptions,
 *   !proto.arangodb.cloud.crypto.v1.CACertificate>}
 */
const methodInfo_CryptoService_GetCACertificate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.crypto.v1.CACertificate,
  /** @param {!proto.arangodb.cloud.common.v1.IDOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.crypto.v1.CACertificate.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.IDOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.crypto.v1.CACertificate)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.crypto.v1.CACertificate>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.crypto.v1.CryptoServiceClient.prototype.getCACertificate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.crypto.v1.CryptoService/GetCACertificate',
      request,
      metadata,
      methodInfo_CryptoService_GetCACertificate,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.IDOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.crypto.v1.CACertificate>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.crypto.v1.CryptoServicePromiseClient.prototype.getCACertificate =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getCACertificate(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.crypto.v1.CACertificate,
 *   !proto.arangodb.cloud.crypto.v1.CACertificate>}
 */
const methodInfo_CryptoService_CreateCACertificate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.crypto.v1.CACertificate,
  /** @param {!proto.arangodb.cloud.crypto.v1.CACertificate} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.crypto.v1.CACertificate.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.crypto.v1.CACertificate} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.crypto.v1.CACertificate)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.crypto.v1.CACertificate>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.crypto.v1.CryptoServiceClient.prototype.createCACertificate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.crypto.v1.CryptoService/CreateCACertificate',
      request,
      metadata,
      methodInfo_CryptoService_CreateCACertificate,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.crypto.v1.CACertificate} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.crypto.v1.CACertificate>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.crypto.v1.CryptoServicePromiseClient.prototype.createCACertificate =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createCACertificate(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.crypto.v1.CACertificate,
 *   !proto.arangodb.cloud.crypto.v1.CACertificate>}
 */
const methodInfo_CryptoService_UpdateCACertificate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.crypto.v1.CACertificate,
  /** @param {!proto.arangodb.cloud.crypto.v1.CACertificate} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.crypto.v1.CACertificate.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.crypto.v1.CACertificate} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.crypto.v1.CACertificate)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.crypto.v1.CACertificate>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.crypto.v1.CryptoServiceClient.prototype.updateCACertificate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.crypto.v1.CryptoService/UpdateCACertificate',
      request,
      metadata,
      methodInfo_CryptoService_UpdateCACertificate,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.crypto.v1.CACertificate} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.crypto.v1.CACertificate>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.crypto.v1.CryptoServicePromiseClient.prototype.updateCACertificate =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateCACertificate(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.crypto.v1.CACertificate,
 *   !proto.arangodb.cloud.common.v1.Empty>}
 */
const methodInfo_CryptoService_DeleteCACertificate = new grpc.web.AbstractClientBase.MethodInfo(
  common_v1_common_pb.Empty,
  /** @param {!proto.arangodb.cloud.crypto.v1.CACertificate} request */
  function(request) {
    return request.serializeBinary();
  },
  common_v1_common_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.crypto.v1.CACertificate} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.common.v1.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.common.v1.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.crypto.v1.CryptoServiceClient.prototype.deleteCACertificate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.crypto.v1.CryptoService/DeleteCACertificate',
      request,
      metadata,
      methodInfo_CryptoService_DeleteCACertificate,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.crypto.v1.CACertificate} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.common.v1.Empty>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.crypto.v1.CryptoServicePromiseClient.prototype.deleteCACertificate =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteCACertificate(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.arangodb.cloud.crypto.v1;

