/**
 * @fileoverview gRPC-Web generated client stub for arangodb.cloud.iam.v1
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
proto.arangodb.cloud.iam = {};
proto.arangodb.cloud.iam.v1 = require('./iam_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient =
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
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.arangodb.cloud.iam.v1.IAMServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.arangodb.cloud.iam.v1.IAMServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.Empty,
 *   !proto.arangodb.cloud.iam.v1.User>}
 */
const methodInfo_IAMService_GetThisUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.iam.v1.User,
  /** @param {!proto.arangodb.cloud.common.v1.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.iam.v1.User.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.iam.v1.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.iam.v1.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.getThisUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/GetThisUser',
      request,
      metadata,
      methodInfo_IAMService_GetThisUser,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.iam.v1.User>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.getThisUser =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getThisUser(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.IDOptions,
 *   !proto.arangodb.cloud.iam.v1.User>}
 */
const methodInfo_IAMService_GetUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.iam.v1.User,
  /** @param {!proto.arangodb.cloud.common.v1.IDOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.iam.v1.User.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.IDOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.iam.v1.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.iam.v1.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/GetUser',
      request,
      metadata,
      methodInfo_IAMService_GetUser,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.IDOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.iam.v1.User>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.getUser =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getUser(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.ListOptions,
 *   !proto.arangodb.cloud.iam.v1.GroupList>}
 */
const methodInfo_IAMService_ListGroups = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.iam.v1.GroupList,
  /** @param {!proto.arangodb.cloud.common.v1.ListOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.iam.v1.GroupList.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.iam.v1.GroupList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.iam.v1.GroupList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.listGroups =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/ListGroups',
      request,
      metadata,
      methodInfo_IAMService_ListGroups,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.iam.v1.GroupList>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.listGroups =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listGroups(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.IDOptions,
 *   !proto.arangodb.cloud.iam.v1.Group>}
 */
const methodInfo_IAMService_GetGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.iam.v1.Group,
  /** @param {!proto.arangodb.cloud.common.v1.IDOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.iam.v1.Group.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.IDOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.iam.v1.Group)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.iam.v1.Group>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.getGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/GetGroup',
      request,
      metadata,
      methodInfo_IAMService_GetGroup,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.IDOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.iam.v1.Group>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.getGroup =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getGroup(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.iam.v1.Group,
 *   !proto.arangodb.cloud.iam.v1.Group>}
 */
const methodInfo_IAMService_CreateGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.iam.v1.Group,
  /** @param {!proto.arangodb.cloud.iam.v1.Group} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.iam.v1.Group.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.iam.v1.Group} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.iam.v1.Group)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.iam.v1.Group>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.createGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/CreateGroup',
      request,
      metadata,
      methodInfo_IAMService_CreateGroup,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.iam.v1.Group} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.iam.v1.Group>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.createGroup =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createGroup(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.iam.v1.Group,
 *   !proto.arangodb.cloud.iam.v1.Group>}
 */
const methodInfo_IAMService_UpdateGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.iam.v1.Group,
  /** @param {!proto.arangodb.cloud.iam.v1.Group} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.iam.v1.Group.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.iam.v1.Group} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.iam.v1.Group)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.iam.v1.Group>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.updateGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/UpdateGroup',
      request,
      metadata,
      methodInfo_IAMService_UpdateGroup,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.iam.v1.Group} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.iam.v1.Group>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.updateGroup =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateGroup(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.iam.v1.Group,
 *   !proto.arangodb.cloud.common.v1.Empty>}
 */
const methodInfo_IAMService_DeleteGroup = new grpc.web.AbstractClientBase.MethodInfo(
  common_v1_common_pb.Empty,
  /** @param {!proto.arangodb.cloud.iam.v1.Group} request */
  function(request) {
    return request.serializeBinary();
  },
  common_v1_common_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.iam.v1.Group} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.common.v1.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.common.v1.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.deleteGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/DeleteGroup',
      request,
      metadata,
      methodInfo_IAMService_DeleteGroup,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.iam.v1.Group} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.common.v1.Empty>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.deleteGroup =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteGroup(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.ListOptions,
 *   !proto.arangodb.cloud.iam.v1.GroupMemberList>}
 */
const methodInfo_IAMService_ListGroupMembers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.iam.v1.GroupMemberList,
  /** @param {!proto.arangodb.cloud.common.v1.ListOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.iam.v1.GroupMemberList.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.iam.v1.GroupMemberList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.iam.v1.GroupMemberList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.listGroupMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/ListGroupMembers',
      request,
      metadata,
      methodInfo_IAMService_ListGroupMembers,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.iam.v1.GroupMemberList>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.listGroupMembers =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listGroupMembers(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.iam.v1.GroupMembersRequest,
 *   !proto.arangodb.cloud.iam.v1.Group>}
 */
const methodInfo_IAMService_AddGroupMembers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.iam.v1.Group,
  /** @param {!proto.arangodb.cloud.iam.v1.GroupMembersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.iam.v1.Group.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.iam.v1.GroupMembersRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.iam.v1.Group)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.iam.v1.Group>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.addGroupMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/AddGroupMembers',
      request,
      metadata,
      methodInfo_IAMService_AddGroupMembers,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.iam.v1.GroupMembersRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.iam.v1.Group>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.addGroupMembers =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addGroupMembers(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.iam.v1.GroupMembersRequest,
 *   !proto.arangodb.cloud.iam.v1.Group>}
 */
const methodInfo_IAMService_DeleteGroupMembers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.iam.v1.Group,
  /** @param {!proto.arangodb.cloud.iam.v1.GroupMembersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.iam.v1.Group.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.iam.v1.GroupMembersRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.iam.v1.Group)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.iam.v1.Group>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.deleteGroupMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/DeleteGroupMembers',
      request,
      metadata,
      methodInfo_IAMService_DeleteGroupMembers,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.iam.v1.GroupMembersRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.iam.v1.Group>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.deleteGroupMembers =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteGroupMembers(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.iam.v1.IsMemberOfGroupRequest,
 *   !proto.arangodb.cloud.common.v1.YesOrNo>}
 */
const methodInfo_IAMService_IsMemberOfGroup = new grpc.web.AbstractClientBase.MethodInfo(
  common_v1_common_pb.YesOrNo,
  /** @param {!proto.arangodb.cloud.iam.v1.IsMemberOfGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  common_v1_common_pb.YesOrNo.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.iam.v1.IsMemberOfGroupRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.common.v1.YesOrNo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.common.v1.YesOrNo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.isMemberOfGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/IsMemberOfGroup',
      request,
      metadata,
      methodInfo_IAMService_IsMemberOfGroup,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.iam.v1.IsMemberOfGroupRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.common.v1.YesOrNo>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.isMemberOfGroup =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.isMemberOfGroup(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.ListOptions,
 *   !proto.arangodb.cloud.iam.v1.RoleList>}
 */
const methodInfo_IAMService_ListRoles = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.iam.v1.RoleList,
  /** @param {!proto.arangodb.cloud.common.v1.ListOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.iam.v1.RoleList.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.iam.v1.RoleList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.iam.v1.RoleList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.listRoles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/ListRoles',
      request,
      metadata,
      methodInfo_IAMService_ListRoles,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.ListOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.iam.v1.RoleList>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.listRoles =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listRoles(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.IDOptions,
 *   !proto.arangodb.cloud.iam.v1.Role>}
 */
const methodInfo_IAMService_GetRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.iam.v1.Role,
  /** @param {!proto.arangodb.cloud.common.v1.IDOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.iam.v1.Role.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.IDOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.iam.v1.Role)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.iam.v1.Role>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.getRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/GetRole',
      request,
      metadata,
      methodInfo_IAMService_GetRole,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.IDOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.iam.v1.Role>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.getRole =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getRole(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.iam.v1.Role,
 *   !proto.arangodb.cloud.iam.v1.Role>}
 */
const methodInfo_IAMService_CreateRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.iam.v1.Role,
  /** @param {!proto.arangodb.cloud.iam.v1.Role} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.iam.v1.Role.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.iam.v1.Role} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.iam.v1.Role)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.iam.v1.Role>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.createRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/CreateRole',
      request,
      metadata,
      methodInfo_IAMService_CreateRole,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.iam.v1.Role} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.iam.v1.Role>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.createRole =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createRole(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.iam.v1.Role,
 *   !proto.arangodb.cloud.iam.v1.Role>}
 */
const methodInfo_IAMService_UpdateRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.iam.v1.Role,
  /** @param {!proto.arangodb.cloud.iam.v1.Role} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.iam.v1.Role.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.iam.v1.Role} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.iam.v1.Role)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.iam.v1.Role>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.updateRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/UpdateRole',
      request,
      metadata,
      methodInfo_IAMService_UpdateRole,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.iam.v1.Role} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.iam.v1.Role>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.updateRole =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateRole(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.iam.v1.Role,
 *   !proto.arangodb.cloud.common.v1.Empty>}
 */
const methodInfo_IAMService_DeleteRole = new grpc.web.AbstractClientBase.MethodInfo(
  common_v1_common_pb.Empty,
  /** @param {!proto.arangodb.cloud.iam.v1.Role} request */
  function(request) {
    return request.serializeBinary();
  },
  common_v1_common_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.iam.v1.Role} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.common.v1.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.common.v1.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.deleteRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/DeleteRole',
      request,
      metadata,
      methodInfo_IAMService_DeleteRole,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.iam.v1.Role} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.common.v1.Empty>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.deleteRole =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteRole(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.URLOptions,
 *   !proto.arangodb.cloud.iam.v1.Policy>}
 */
const methodInfo_IAMService_GetPolicy = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.iam.v1.Policy,
  /** @param {!proto.arangodb.cloud.common.v1.URLOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.iam.v1.Policy.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.URLOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.iam.v1.Policy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.iam.v1.Policy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.getPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/GetPolicy',
      request,
      metadata,
      methodInfo_IAMService_GetPolicy,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.URLOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.iam.v1.Policy>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.getPolicy =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getPolicy(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.iam.v1.RoleBindingsRequest,
 *   !proto.arangodb.cloud.iam.v1.Policy>}
 */
const methodInfo_IAMService_AddRoleBindings = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.iam.v1.Policy,
  /** @param {!proto.arangodb.cloud.iam.v1.RoleBindingsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.iam.v1.Policy.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.iam.v1.RoleBindingsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.iam.v1.Policy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.iam.v1.Policy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.addRoleBindings =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/AddRoleBindings',
      request,
      metadata,
      methodInfo_IAMService_AddRoleBindings,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.iam.v1.RoleBindingsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.iam.v1.Policy>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.addRoleBindings =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addRoleBindings(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.iam.v1.RoleBindingsRequest,
 *   !proto.arangodb.cloud.iam.v1.Policy>}
 */
const methodInfo_IAMService_DeleteRoleBindings = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.iam.v1.Policy,
  /** @param {!proto.arangodb.cloud.iam.v1.RoleBindingsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.iam.v1.Policy.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.iam.v1.RoleBindingsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.iam.v1.Policy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.iam.v1.Policy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.deleteRoleBindings =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/DeleteRoleBindings',
      request,
      metadata,
      methodInfo_IAMService_DeleteRoleBindings,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.iam.v1.RoleBindingsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.iam.v1.Policy>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.deleteRoleBindings =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteRoleBindings(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.URLOptions,
 *   !proto.arangodb.cloud.iam.v1.PermissionList>}
 */
const methodInfo_IAMService_GetEffectivePermissions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.iam.v1.PermissionList,
  /** @param {!proto.arangodb.cloud.common.v1.URLOptions} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.iam.v1.PermissionList.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.URLOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.iam.v1.PermissionList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.iam.v1.PermissionList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.getEffectivePermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/GetEffectivePermissions',
      request,
      metadata,
      methodInfo_IAMService_GetEffectivePermissions,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.URLOptions} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.iam.v1.PermissionList>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.getEffectivePermissions =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getEffectivePermissions(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.iam.v1.HasPermissionsRequest,
 *   !proto.arangodb.cloud.common.v1.YesOrNo>}
 */
const methodInfo_IAMService_HasPermissions = new grpc.web.AbstractClientBase.MethodInfo(
  common_v1_common_pb.YesOrNo,
  /** @param {!proto.arangodb.cloud.iam.v1.HasPermissionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  common_v1_common_pb.YesOrNo.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.iam.v1.HasPermissionsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.common.v1.YesOrNo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.common.v1.YesOrNo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.hasPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/HasPermissions',
      request,
      metadata,
      methodInfo_IAMService_HasPermissions,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.iam.v1.HasPermissionsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.common.v1.YesOrNo>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.hasPermissions =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.hasPermissions(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arangodb.cloud.common.v1.Empty,
 *   !proto.arangodb.cloud.iam.v1.PermissionList>}
 */
const methodInfo_IAMService_ListPermissions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arangodb.cloud.iam.v1.PermissionList,
  /** @param {!proto.arangodb.cloud.common.v1.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.arangodb.cloud.iam.v1.PermissionList.deserializeBinary
);


/**
 * @param {!proto.arangodb.cloud.common.v1.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arangodb.cloud.iam.v1.PermissionList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arangodb.cloud.iam.v1.PermissionList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServiceClient.prototype.listPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arangodb.cloud.iam.v1.IAMService/ListPermissions',
      request,
      metadata,
      methodInfo_IAMService_ListPermissions,
      callback);
};


/**
 * @param {!proto.arangodb.cloud.common.v1.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arangodb.cloud.iam.v1.PermissionList>}
 *     The XHR Node Readable Stream
 */
proto.arangodb.cloud.iam.v1.IAMServicePromiseClient.prototype.listPermissions =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listPermissions(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.arangodb.cloud.iam.v1;

