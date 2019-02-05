/**
 * @fileoverview gRPC-Web generated client stub for arangodb.cloud.data.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var common_v1_common_pb = require('./common/v1/common_pb.js')

var github_com_golang_protobuf_ptypes_timestamp_timestamp_pb = require('./github.com/golang/protobuf/ptypes/timestamp/timestamp_pb.js')

var google_api_annotations_pb = require('./google/api/annotations_pb.js')
const proto = {};
proto.arangodb = {};
proto.arangodb.cloud = {};
proto.arangodb.cloud.data = {};
proto.arangodb.cloud.data.v1 = require('./data_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.arangodb.cloud.data.v1.DataServiceClient =
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
proto.arangodb.cloud.data.v1.DataServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.arangodb.cloud.data.v1.DataServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.arangodb.cloud.data.v1.DataServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.ListOptions,
 *   !proto.arangodb.cloud.data.v1.DeploymentList>}
 */
const methodInfo_DataService_ListDeployments = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.data.v1.DeploymentList,
  /** @param {!proto.arangodb.cloud.common.v1.ListOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.data.v1.DeploymentList.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.data.v1.DeploymentList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.data.v1.DeploymentList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.data.v1.DataServiceClient.prototype.listDeployments =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.data.v1.DataService/ListDeployments',
      request,
      metadata,
      methodInfo_DataService_ListDeployments,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.data.v1.DeploymentList>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.data.v1.DataServicePromiseClient.prototype.listDeployments =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listDeployments(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.IDOptions,
 *   !proto.arangodb.cloud.data.v1.Deployment>}
 */
const methodInfo_DataService_GetDeployment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.data.v1.Deployment,
  /** @param {!proto.arangodb.cloud.common.v1.IDOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.data.v1.Deployment.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.IDOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.data.v1.Deployment)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.data.v1.Deployment>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.data.v1.DataServiceClient.prototype.getDeployment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.data.v1.DataService/GetDeployment',
      request,
      metadata,
      methodInfo_DataService_GetDeployment,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.IDOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.data.v1.Deployment>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.data.v1.DataServicePromiseClient.prototype.getDeployment =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getDeployment(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.data.v1.Deployment,
 *   !proto.arangodb.cloud.data.v1.Deployment>}
 */
const methodInfo_DataService_CreateDeployment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.data.v1.Deployment,
  /** @param {!proto.arangodb.cloud.data.v1.Deployment} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.data.v1.Deployment.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.data.v1.Deployment} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.data.v1.Deployment)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.data.v1.Deployment>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.data.v1.DataServiceClient.prototype.createDeployment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.data.v1.DataService/CreateDeployment',
      request,
      metadata,
      methodInfo_DataService_CreateDeployment,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.data.v1.Deployment} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.data.v1.Deployment>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.data.v1.DataServicePromiseClient.prototype.createDeployment =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createDeployment(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.data.v1.Deployment,
 *   !proto.arangodb.cloud.data.v1.Deployment>}
 */
const methodInfo_DataService_UpdateDeployment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.data.v1.Deployment,
  /** @param {!proto.arangodb.cloud.data.v1.Deployment} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.data.v1.Deployment.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.data.v1.Deployment} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.data.v1.Deployment)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.data.v1.Deployment>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.data.v1.DataServiceClient.prototype.updateDeployment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.data.v1.DataService/UpdateDeployment',
      request,
      metadata,
      methodInfo_DataService_UpdateDeployment,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.data.v1.Deployment} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.data.v1.Deployment>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.data.v1.DataServicePromiseClient.prototype.updateDeployment =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateDeployment(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.data.v1.Deployment,
 *   !proto.arangodb.cloud.common.v1.Empty>}
 */
const methodInfo_DataService_DeleteDeployment = new grpc.web.AbstractClientBase.MethodInfo(
  common_v1_common_pb.Empty,
  /** @param {!proto.arangodb.cloud.data.v1.Deployment} request */
  function(request) {
    return request.serializeBinary();
  },
  common_v1_common_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.data.v1.Deployment} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.common.v1.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.common.v1.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.data.v1.DataServiceClient.prototype.deleteDeployment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.data.v1.DataService/DeleteDeployment',
      request,
      metadata,
      methodInfo_DataService_DeleteDeployment,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.data.v1.Deployment} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.common.v1.Empty>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.data.v1.DataServicePromiseClient.prototype.deleteDeployment =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteDeployment(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.ListOptions,
 *   !proto.arangodb.cloud.data.v1.VersionList>}
 */
const methodInfo_DataService_ListVersions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.data.v1.VersionList,
  /** @param {!proto.arangodb.cloud.common.v1.ListOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.data.v1.VersionList.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.data.v1.VersionList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.data.v1.VersionList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.data.v1.DataServiceClient.prototype.listVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.data.v1.DataService/ListVersions',
      request,
      metadata,
      methodInfo_DataService_ListVersions,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.data.v1.VersionList>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.data.v1.DataServicePromiseClient.prototype.listVersions =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listVersions(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.Empty,
 *   !proto.arangodb.cloud.data.v1.Version>}
 */
const methodInfo_DataService_GetDefaultVersion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.data.v1.Version,
  /** @param {!proto.arangodb.cloud.common.v1.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.data.v1.Version.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.data.v1.Version)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.data.v1.Version>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.data.v1.DataServiceClient.prototype.getDefaultVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.data.v1.DataService/GetDefaultVersion',
      request,
      metadata,
      methodInfo_DataService_GetDefaultVersion,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.data.v1.Version>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.data.v1.DataServicePromiseClient.prototype.getDefaultVersion =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getDefaultVersion(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.data.v1.ServersSpecLimitsRequest,
 *   !proto.arangodb.cloud.data.v1.ServersSpecLimits>}
 */
const methodInfo_DataService_GetServersSpecLimits = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.data.v1.ServersSpecLimits,
  /** @param {!proto.arangodb.cloud.data.v1.ServersSpecLimitsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.data.v1.ServersSpecLimits.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.data.v1.ServersSpecLimitsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.data.v1.ServersSpecLimits)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.data.v1.ServersSpecLimits>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.data.v1.DataServiceClient.prototype.getServersSpecLimits =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.data.v1.DataService/GetServersSpecLimits',
      request,
      metadata,
      methodInfo_DataService_GetServersSpecLimits,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.data.v1.ServersSpecLimitsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.data.v1.ServersSpecLimits>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.data.v1.DataServicePromiseClient.prototype.getServersSpecLimits =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getServersSpecLimits(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.arangodb.cloud.data.v1;

