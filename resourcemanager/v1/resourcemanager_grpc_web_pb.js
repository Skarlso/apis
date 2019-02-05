/**
 * @fileoverview gRPC-Web generated client stub for arangodb.cloud.resourcemanager.v1
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
proto.arangodb.cloud.resourcemanager = {};
proto.arangodb.cloud.resourcemanager.v1 = require('./resourcemanager_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServiceClient =
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
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.ListOptions,
 *   !proto.arangodb.cloud.resourcemanager.v1.OrganizationList>}
 */
const methodInfo_ResourceManagerService_ListOrganizations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.resourcemanager.v1.OrganizationList,
  /** @param {!proto.arangodb.cloud.common.v1.ListOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.resourcemanager.v1.OrganizationList.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.resourcemanager.v1.OrganizationList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.resourcemanager.v1.OrganizationList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServiceClient.prototype.listOrganizations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.resourcemanager.v1.ResourceManagerService/ListOrganizations',
      request,
      metadata,
      methodInfo_ResourceManagerService_ListOrganizations,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.resourcemanager.v1.OrganizationList>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServicePromiseClient.prototype.listOrganizations =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listOrganizations(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.IDOptions,
 *   !proto.arangodb.cloud.resourcemanager.v1.Organization>}
 */
const methodInfo_ResourceManagerService_GetOrganization = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.resourcemanager.v1.Organization,
  /** @param {!proto.arangodb.cloud.common.v1.IDOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.resourcemanager.v1.Organization.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.IDOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.resourcemanager.v1.Organization)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.resourcemanager.v1.Organization>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServiceClient.prototype.getOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.resourcemanager.v1.ResourceManagerService/GetOrganization',
      request,
      metadata,
      methodInfo_ResourceManagerService_GetOrganization,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.IDOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.resourcemanager.v1.Organization>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServicePromiseClient.prototype.getOrganization =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getOrganization(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.resourcemanager.v1.Organization,
 *   !proto.arangodb.cloud.resourcemanager.v1.Organization>}
 */
const methodInfo_ResourceManagerService_CreateOrganization = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.resourcemanager.v1.Organization,
  /** @param {!proto.arangodb.cloud.resourcemanager.v1.Organization} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.resourcemanager.v1.Organization.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.resourcemanager.v1.Organization} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.resourcemanager.v1.Organization)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.resourcemanager.v1.Organization>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServiceClient.prototype.createOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.resourcemanager.v1.ResourceManagerService/CreateOrganization',
      request,
      metadata,
      methodInfo_ResourceManagerService_CreateOrganization,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.resourcemanager.v1.Organization} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.resourcemanager.v1.Organization>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServicePromiseClient.prototype.createOrganization =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createOrganization(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.resourcemanager.v1.Organization,
 *   !proto.arangodb.cloud.resourcemanager.v1.Organization>}
 */
const methodInfo_ResourceManagerService_UpdateOrganization = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.resourcemanager.v1.Organization,
  /** @param {!proto.arangodb.cloud.resourcemanager.v1.Organization} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.resourcemanager.v1.Organization.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.resourcemanager.v1.Organization} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.resourcemanager.v1.Organization)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.resourcemanager.v1.Organization>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServiceClient.prototype.updateOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.resourcemanager.v1.ResourceManagerService/UpdateOrganization',
      request,
      metadata,
      methodInfo_ResourceManagerService_UpdateOrganization,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.resourcemanager.v1.Organization} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.resourcemanager.v1.Organization>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServicePromiseClient.prototype.updateOrganization =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateOrganization(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.resourcemanager.v1.Organization,
 *   !proto.arangodb.cloud.common.v1.Empty>}
 */
const methodInfo_ResourceManagerService_DeleteOrganization = new grpc.web.AbstractClientBase.MethodInfo(
  common_v1_common_pb.Empty,
  /** @param {!proto.arangodb.cloud.resourcemanager.v1.Organization} request */
  function(request) {
    return request.serializeBinary();
  },
  common_v1_common_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.resourcemanager.v1.Organization} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.common.v1.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.common.v1.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServiceClient.prototype.deleteOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.resourcemanager.v1.ResourceManagerService/DeleteOrganization',
      request,
      metadata,
      methodInfo_ResourceManagerService_DeleteOrganization,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.resourcemanager.v1.Organization} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.common.v1.Empty>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServicePromiseClient.prototype.deleteOrganization =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteOrganization(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.ListOptions,
 *   !proto.arangodb.cloud.resourcemanager.v1.MemberList>}
 */
const methodInfo_ResourceManagerService_ListOrganizationMembers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.resourcemanager.v1.MemberList,
  /** @param {!proto.arangodb.cloud.common.v1.ListOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.resourcemanager.v1.MemberList.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.resourcemanager.v1.MemberList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.resourcemanager.v1.MemberList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServiceClient.prototype.listOrganizationMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.resourcemanager.v1.ResourceManagerService/ListOrganizationMembers',
      request,
      metadata,
      methodInfo_ResourceManagerService_ListOrganizationMembers,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.resourcemanager.v1.MemberList>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServicePromiseClient.prototype.listOrganizationMembers =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listOrganizationMembers(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.resourcemanager.v1.OrganizationMembersRequest,
 *   !proto.arangodb.cloud.common.v1.Empty>}
 */
const methodInfo_ResourceManagerService_AddOrganizationMembers = new grpc.web.AbstractClientBase.MethodInfo(
  common_v1_common_pb.Empty,
  /** @param {!proto.arangodb.cloud.resourcemanager.v1.OrganizationMembersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  common_v1_common_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.resourcemanager.v1.OrganizationMembersRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.common.v1.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.common.v1.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServiceClient.prototype.addOrganizationMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.resourcemanager.v1.ResourceManagerService/AddOrganizationMembers',
      request,
      metadata,
      methodInfo_ResourceManagerService_AddOrganizationMembers,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.resourcemanager.v1.OrganizationMembersRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.common.v1.Empty>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServicePromiseClient.prototype.addOrganizationMembers =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addOrganizationMembers(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.resourcemanager.v1.OrganizationMembersRequest,
 *   !proto.arangodb.cloud.common.v1.Empty>}
 */
const methodInfo_ResourceManagerService_DeleteOrganizationMembers = new grpc.web.AbstractClientBase.MethodInfo(
  common_v1_common_pb.Empty,
  /** @param {!proto.arangodb.cloud.resourcemanager.v1.OrganizationMembersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  common_v1_common_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.resourcemanager.v1.OrganizationMembersRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.common.v1.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.common.v1.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServiceClient.prototype.deleteOrganizationMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.resourcemanager.v1.ResourceManagerService/DeleteOrganizationMembers',
      request,
      metadata,
      methodInfo_ResourceManagerService_DeleteOrganizationMembers,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.resourcemanager.v1.OrganizationMembersRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.common.v1.Empty>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServicePromiseClient.prototype.deleteOrganizationMembers =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteOrganizationMembers(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.resourcemanager.v1.IsMemberOfOrganizationRequest,
 *   !proto.arangodb.cloud.common.v1.YesOrNo>}
 */
const methodInfo_ResourceManagerService_IsMemberOfOrganization = new grpc.web.AbstractClientBase.MethodInfo(
  common_v1_common_pb.YesOrNo,
  /** @param {!proto.arangodb.cloud.resourcemanager.v1.IsMemberOfOrganizationRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  common_v1_common_pb.YesOrNo.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.resourcemanager.v1.IsMemberOfOrganizationRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.common.v1.YesOrNo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.common.v1.YesOrNo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServiceClient.prototype.isMemberOfOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.resourcemanager.v1.ResourceManagerService/IsMemberOfOrganization',
      request,
      metadata,
      methodInfo_ResourceManagerService_IsMemberOfOrganization,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.resourcemanager.v1.IsMemberOfOrganizationRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.common.v1.YesOrNo>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServicePromiseClient.prototype.isMemberOfOrganization =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.isMemberOfOrganization(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.ListOptions,
 *   !proto.arangodb.cloud.resourcemanager.v1.ProjectList>}
 */
const methodInfo_ResourceManagerService_ListProjects = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.resourcemanager.v1.ProjectList,
  /** @param {!proto.arangodb.cloud.common.v1.ListOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.resourcemanager.v1.ProjectList.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.resourcemanager.v1.ProjectList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.resourcemanager.v1.ProjectList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServiceClient.prototype.listProjects =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.resourcemanager.v1.ResourceManagerService/ListProjects',
      request,
      metadata,
      methodInfo_ResourceManagerService_ListProjects,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.resourcemanager.v1.ProjectList>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServicePromiseClient.prototype.listProjects =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listProjects(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.IDOptions,
 *   !proto.arangodb.cloud.resourcemanager.v1.Project>}
 */
const methodInfo_ResourceManagerService_GetProject = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.resourcemanager.v1.Project,
  /** @param {!proto.arangodb.cloud.common.v1.IDOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.resourcemanager.v1.Project.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.IDOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.resourcemanager.v1.Project)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.resourcemanager.v1.Project>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServiceClient.prototype.getProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.resourcemanager.v1.ResourceManagerService/GetProject',
      request,
      metadata,
      methodInfo_ResourceManagerService_GetProject,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.IDOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.resourcemanager.v1.Project>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServicePromiseClient.prototype.getProject =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getProject(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.resourcemanager.v1.Project,
 *   !proto.arangodb.cloud.resourcemanager.v1.Project>}
 */
const methodInfo_ResourceManagerService_CreateProject = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.resourcemanager.v1.Project,
  /** @param {!proto.arangodb.cloud.resourcemanager.v1.Project} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.resourcemanager.v1.Project.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.resourcemanager.v1.Project} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.resourcemanager.v1.Project)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.resourcemanager.v1.Project>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServiceClient.prototype.createProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.resourcemanager.v1.ResourceManagerService/CreateProject',
      request,
      metadata,
      methodInfo_ResourceManagerService_CreateProject,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.resourcemanager.v1.Project} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.resourcemanager.v1.Project>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServicePromiseClient.prototype.createProject =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createProject(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.resourcemanager.v1.Project,
 *   !proto.arangodb.cloud.resourcemanager.v1.Project>}
 */
const methodInfo_ResourceManagerService_UpdateProject = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.resourcemanager.v1.Project,
  /** @param {!proto.arangodb.cloud.resourcemanager.v1.Project} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.resourcemanager.v1.Project.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.resourcemanager.v1.Project} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.resourcemanager.v1.Project)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.resourcemanager.v1.Project>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServiceClient.prototype.updateProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.resourcemanager.v1.ResourceManagerService/UpdateProject',
      request,
      metadata,
      methodInfo_ResourceManagerService_UpdateProject,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.resourcemanager.v1.Project} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.resourcemanager.v1.Project>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServicePromiseClient.prototype.updateProject =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateProject(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.resourcemanager.v1.Project,
 *   !proto.arangodb.cloud.common.v1.Empty>}
 */
const methodInfo_ResourceManagerService_DeleteProject = new grpc.web.AbstractClientBase.MethodInfo(
  common_v1_common_pb.Empty,
  /** @param {!proto.arangodb.cloud.resourcemanager.v1.Project} request */
  function(request) {
    return request.serializeBinary();
  },
  common_v1_common_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.resourcemanager.v1.Project} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.common.v1.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.common.v1.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServiceClient.prototype.deleteProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.resourcemanager.v1.ResourceManagerService/DeleteProject',
      request,
      metadata,
      methodInfo_ResourceManagerService_DeleteProject,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.resourcemanager.v1.Project} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.common.v1.Empty>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.resourcemanager.v1.ResourceManagerServicePromiseClient.prototype.deleteProject =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteProject(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.arangodb.cloud.resourcemanager.v1;

