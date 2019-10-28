//
// This file is AUTO-GENERATED by protoc-gen-ts.
// Do not modify it manually.
///
import api from '../../api'
import * as googleTypes from '../../googleTypes'
import { Budget as arangodb_cloud_common_v1_Budget } from '../../common/v1/common'
import { Empty as arangodb_cloud_common_v1_Empty } from '../../common/v1/common'
import { IDOptions as arangodb_cloud_common_v1_IDOptions } from '../../common/v1/common'
import { ListOptions as arangodb_cloud_common_v1_ListOptions } from '../../common/v1/common'

// File: data/v1/data.proto
// Package: arangodb.cloud.data.v1

// Request arguments for CalculateDeploymentSize
export interface CalculateDeploymentSizeRequest {
  // Number of coordinators of the deployment
  // This field is ignored unless model is "flexible".
  // number
  coordinators?: number;
  
  // Amount of memory (in GB) to allocate for each coordinator.
  // This field is ignored unless model is "flexible".
  // number
  coordinator_memory_size?: number;
  
  // Number of dbservers of the deployment
  // This field is ignored unless model is "flexible".
  // number
  dbservers?: number;
  
  // Amount of memory (in GB) to allocate for each dbserver.
  // This field is ignored unless model is "flexible".
  // number
  dbserver_memory_size?: number;
  
  // Amount of disk space (in GB) to allocate for each dbserver.
  // This field is ignored unless model is "flexible".
  // number
  dbserver_disk_size?: number;
  
  // Type of model being used
  // string
  model?: string;
  
  // Size of nodes being used
  // string
  node_size_id?: string;
  
  // Number of nodes being used
  // number
  node_count?: number;
  
  // Amount of disk space per node (in GB)
  // number
  node_disk_size?: number;
}

// Instructions for connecting a driver to a deployment
export interface ConnectDriverInstructions {
  // Per driver instructions for connecting to a deployment
  // ConnectDriverInstructions_DriverInstructions
  drivers?: ConnectDriverInstructions_DriverInstructions[];
}

// Instructions for a specific driver
export interface ConnectDriverInstructions_DriverInstructions {
  // Human readable name of the driver.
  // E.g. "ArangoDB Go driver"
  // string
  name?: string;
  
  // Lines of code
  // string
  code?: string[];
  
  // Human readable remarks
  // string
  remarks?: string[];
  
  // URL for getting more information on the driver.
  // string
  driver_url?: string;
}

// DataVolumeInfo provides information about a data volume
export interface DataVolumeInfo {
  // The total number of bytes of the data volume.
  // number
  total_bytes?: number;
  
  // The number of bytes used on the data volume.
  // number
  used_bytes?: number;
  
  // The number of bytes available on the data volume.
  // number
  available_bytes?: number;
  
  // When this info has been measused
  // googleTypes.Timestamp
  measured_at?: googleTypes.Timestamp;
}

// A Deployment is represents one deployment of an ArangoDB cluster.
export interface Deployment {
  // System identifier of the deployment.
  // This is a read-only value.
  // string
  id?: string;
  
  // URL of this resource
  // This is a read-only value.
  // string
  url?: string;
  
  // Name of the deployment
  // string
  name?: string;
  
  // Description of the deployment
  // string
  description?: string;
  
  // Identifier of the project that owns this deployment.
  // After creation, this value cannot be changed.
  // string
  project_id?: string;
  
  // Identifier of the region in which the deployment is created.
  // After creation, this value cannot be changed.
  // string
  region_id?: string;
  
  // The creation timestamp of the deployment
  // This is a read-only value.
  // googleTypes.Timestamp
  created_at?: googleTypes.Timestamp;
  
  // The deletion timestamp of the deployment
  // This is a read-only value.
  // googleTypes.Timestamp
  deleted_at?: googleTypes.Timestamp;
  
  // Set when this deployment is deleted.
  // This is a read-only value.
  // boolean
  is_deleted?: boolean;
  
  // Optional identifier of the support plan selected for this deployment.
  // After creation, this value cannot be changed.
  // If no support plan identifier is set, the default support plan is used.
  // string
  support_plan_id?: string;
  
  // Identifier of the user who created this deployment.
  // This is a read-only value.
  // string
  created_by_id?: string;
  
  // This field must be set to the identifier of the current Terms&Conditions
  // when creating a deployment.
  // If the tier of the organization does not require a non-empty Terms&Condition
  // identifier, this field may be left empty.
  // This is a read-only value after creation.
  // string
  accepted_terms_and_conditions_id?: string;
  
  // ArangoDB version to use for this deployment.
  // See Version.version.
  // If you change this value to a higher version,
  // the deployment will be upgraded.
  // If you change this value to a lower patch value,
  // the deployment will be downgraded.
  // Any attempt to change to a lower minor or major version
  // is considered an invalid request.
  // Any attempt to change to a version that is not in the
  // list of available versions is considered an invalid request.
  // string
  version?: string;
  
  // Deployment_CertificateSpec
  certificates?: Deployment_CertificateSpec;
  
  // Deployment_ServersSpec
  servers?: Deployment_ServersSpec;
  
  // Optional identifier of IP whitelist to use for this deployment.
  // string
  ipwhitelist_id?: string;
  
  // Deployment_ModelSpec
  model?: Deployment_ModelSpec;
  
  // Deployment_Status
  status?: Deployment_Status;
  
  // Detailed size of the deployment
  // This is a read-only field.
  // DeploymentSize
  size?: DeploymentSize;
  
  // Deployment_Expiration
  expiration?: Deployment_Expiration;
  
  // Information about a backup restore.
  // If this field is set the deployment will be restored to that backup.
  // This is a read-only field. To set this field please use the backup service RestoreBackup method.
  // Deployment_BackupRestoreSpec
  backup_restore?: Deployment_BackupRestoreSpec;
  
  // Recommendations made for deployments using the "sharded" model.
  // ShardedDeploymentSizeRecommendation
  sharded_deployment_recommendations?: ShardedDeploymentSizeRecommendation[];
}

// Information about a backup restore.
// All members of this message are read-only.
export interface Deployment_BackupRestoreSpec {
  // The revision of this BackupRestoreSpec
  // number
  revision?: number;
  
  // The timestamp of when the last revision has been updated.
  // googleTypes.Timestamp
  last_updated_at?: googleTypes.Timestamp;
  
  // Identifier of a backup to restore to.
  // string
  backup_id?: string;
}

// The status of backup restore
// All members of this message are read-only.
export interface Deployment_BackupRestoreStatus {
  // The revision of the used BackupRestoreSpec
  // number
  revision?: number;
  
  // Set if the deployment is preparing or restoring a backup
  // boolean
  restoring?: boolean;
  
  // Status of the restore backup operation.
  // Enum of the following values: "<empty>|Preparing|Restoring|Restored|Failed"
  // string
  status?: string;
  
  // Failure reason of the backup restore (if applicable)
  // string
  failure_reason?: string;
}
export interface Deployment_CertificateSpec {
  // Identifier of the CACertificate used to sign TLS certificates for the deployment.
  // If you change this value after the creation of the deployment a complete
  // rotation of the deployment is required, which will result in some downtime.
  // string
  ca_certificate_id?: string;
  
  // Zero or more DNS names to include in the TLS certificate of the deployment.
  // string
  alternate_dns_names?: string[];
}

// Expiration of the deployment.
// All members of this message are read-only.
export interface Deployment_Expiration {
  // The expiration timestamp of the deployment
  // If not set, the deployment will not expire.
  // googleTypes.Timestamp
  expires_at?: googleTypes.Timestamp;
  
  // Human readable reason for why the deployment expires (or does not expire).
  // string
  reason?: string;
  
  // The timestamp of when the last "this deployment will expire at" email was
  // send.
  // If not set, no such email has been send.
  // googleTypes.Timestamp
  last_warning_email_send_at?: googleTypes.Timestamp;
  
  // List of email addresses to which the last warning email has been send.
  // Not set when no such email has been send.
  // string
  last_warning_email_send_to?: string[];
}
export interface Deployment_ModelSpec {
  // Type of model being used
  // string
  model?: string;
  
  // Size of nodes being used
  // string
  node_size_id?: string;
  
  // Number of nodes being used
  // number
  node_count?: number;
  
  // Amount of disk space per node (in GB)
  // number
  node_disk_size?: number;
}

// Status of a single server (of the ArangoDB cluster)
export interface Deployment_ServerStatus {
  // ID of the server
  // string
  id?: string;
  
  // Type of server (agent|coordinator|dbserver)
  // string
  type?: string;
  
  // Human readable description of the status of the deployment.
  // string
  description?: string;
  
  // The creation timestamp of the server
  // googleTypes.Timestamp
  created_at?: googleTypes.Timestamp;
  
  // Set once the server is ready
  // boolean
  ready?: boolean;
  
  // Set once the server has been known to be a member of the cluster
  // boolean
  member_of_cluster?: boolean;
  
  // Set if the server is in a failed state
  // Every server is always in 1 (and only 1) of these state: failed/creating/ok/upgrading.
  // boolean
  failed?: boolean;
  
  // Set if the server is still being created
  // Every server is always in 1 (and only 1) of these state: failed/creating/ok/upgrading.
  // boolean
  creating?: boolean;
  
  // Set if the server is in the ok state.
  // Every server is always in 1 (and only 1) of these state: failed/creating/ok/upgrading.
  // boolean
  ok?: boolean;
  
  // Set if the server is still being upgraded
  // Every server is always in 1 (and only 1) of these state: failed/creating/ok/upgrading.
  // boolean
  upgrading?: boolean;
  
  // Latest known ArangoDB version used by this server.
  // Initially this field is empty.
  // string
  version?: string;
  
  // Information about the data volume used to store the data
  // DataVolumeInfo
  data_volume_info?: DataVolumeInfo;
}
export interface Deployment_ServersSpec {
  // Number of coordinators of the deployment
  // This field is automatically set unless the flexible model is used.
  // number
  coordinators?: number;
  
  // Amount of memory (in GB) to allocate for coordinators.
  // This field is automatically set unless the flexible model is used.
  // number
  coordinator_memory_size?: number;
  
  // Custom command line arguments passed to all coordinators.
  // This field is ignored set unless the flexible model is used.
  // string
  coordinator_args?: string[];
  
  // Number of dbservers of the deployment
  // This field is automatically set unless the flexible model is used.
  // number
  dbservers?: number;
  
  // Amount of memory (in GB) to allocate for dbservers.
  // This field is automatically set unless the flexible model is used.
  // number
  dbserver_memory_size?: number;
  
  // Amount of disk space (in GB) to allocate for dbservers.
  // This field is automatically set unless the flexible model is used.
  // number
  dbserver_disk_size?: number;
  
  // Custom command line arguments passed to all dbservers.
  // This field is ignored set unless the flexible model is used.
  // string
  dbserver_args?: string[];
}

// Status of the deployment
// All members of this field are read-only.
export interface Deployment_Status {
  // Endpoint URL used to reach the deployment
  // This value will be empty during the creation of the deployment.
  // string
  endpoint?: string;
  
  // Human readable description of the status of the deployment.
  // string
  description?: string;
  
  // Set once the deployment has been created.
  // boolean
  created?: boolean;
  
  // Set if the deployment is ready to be used.
  // If the deployment has downtime (e.g. because of changing a CA certificate)
  // this will go to false until the downtime is over.
  // boolean
  ready?: boolean;
  
  // Set if the deployment is being upgraded.
  // boolean
  upgrading?: boolean;
  
  // Versions of running servers
  // string
  server_versions?: string[];
  
  // Status of individual servers of the deployment
  // Deployment_ServerStatus
  servers?: Deployment_ServerStatus[];
  
  // Set if the ready boolean is transitioned to true for the very first time.
  // googleTypes.Timestamp
  bootstrapped_at?: googleTypes.Timestamp;
  
  // Set if bootstrapped_at has a value, otherwise false.
  // boolean
  bootstrapped?: boolean;
  
  // The status of backup restore (if applicable).
  // This field will be set to empty if a new revision of the spec is available
  // Deployment_BackupRestoreStatus
  backup_restore_status?: Deployment_BackupRestoreStatus;
  
  // The total size of all backups in the external source (in bytes)
  // number
  total_backup_size_bytes?: number;
  
  // Set if there is any backup currently uploading data to the external source
  // boolean
  backup_upload_in_progress?: boolean;
}

// Result for GetDeploymentCredentials
export interface DeploymentCredentials {
  // Name of the user for which credentials were asked.
  // Default to username of root user.
  // string
  username?: string;
  
  // Password of the user for which credentials were asked.
  // string
  password?: string;
}

// Request arguments for GetDeploymentCredentials
export interface DeploymentCredentialsRequest {
  // Identifier of deployment to request credentials for.
  // string
  deployment_id?: string;
}

// List of Deployments.
export interface DeploymentList {
  // Actual deployments
  // Deployment
  items?: Deployment[];
  
  // Budget for deployments
  // arangodb.cloud.common.v1.Budget
  budget?: arangodb_cloud_common_v1_Budget;
}

// Result of CalculateDeploymentSize
export interface DeploymentSize {
  // Number of agents
  // number
  agents?: number;
  
  // Amount of memory (in GB) to allocate for each agent.
  // number
  agent_memory_size?: number;
  
  // Amount of disk space (in GB) to allocate for each agent.
  // number
  agent_disk_size?: number;
  
  // Total (combined) amount of memory (in GB) used by all servers (agents, coordinators & dbservers)
  // number
  total_memory_size?: number;
  
  // Total (combined) amount of disk space (in GB) used by all servers (agents & dbservers)
  // number
  total_disk_size?: number;
}

// Request arguments for ListVersions.
export interface ListVersionsRequest {
  // Common list options
  // arangodb.cloud.common.v1.ListOptions
  options?: arangodb_cloud_common_v1_ListOptions;
  
  // If set, the result includes all versions for that are available for the
  // organization identified by this ID.
  // If not set, only versions are returned that are available to all organizations.
  // string
  organization_id?: string;
  
  // If set, only versions will be returned that are safe to upgrade to from this version.
  // string
  current_version?: string;
}

// NodeSize specifies the size constraints of different data nodes.
export interface NodeSize {
  // System identifier of the node size
  // string
  id?: string;
  
  // Human readable name of the node size
  // string
  name?: string;
  
  // Amount of memory (in GB) that is available on this size of node.
  // number
  memory_size?: number;
  
  // Minimum amount of disk (in GB) that is available on this size of node.
  // number
  min_disk_size?: number;
  
  // Maximum amount of disk (in GB) that is available on this size of node.
  // number
  max_disk_size?: number;
}

// List of node sizes.
export interface NodeSizeList {
  // NodeSize
  items?: NodeSize[];
}

// Request arguments for ListNodeSizes
export interface NodeSizesRequest {
  // Identifier of project that will own a deployment.
  // string
  project_id?: string;
  
  // Identifier of a region in which a deployment will be created.
  // string
  region_id?: string;
}

// Limits of allowed values for fields of Deployment.ServersSpec.
export interface ServersSpecLimits {
  // Limits for the number of coordinators of the deployment
  // ServersSpecLimits_Limits
  coordinators?: ServersSpecLimits_Limits;
  
  // Possible values for the amount of memory (in GB) to allocate
  // for coordinators.
  // ServersSpecLimits_Limits
  coordinator_memory_size?: ServersSpecLimits_Limits;
  
  // Limits for the number of dbservers of the deployment
  // ServersSpecLimits_Limits
  dbservers?: ServersSpecLimits_Limits;
  
  // Possible values for the amount of memory (in GB) to allocate
  // for dbservers.
  // ServersSpecLimits_Limits
  dbserver_memory_size?: ServersSpecLimits_Limits;
  
  // Amount of disk space (in GB) to allocate for dbservers.
  // ServersSpecLimits_Limits
  dbserver_disk_size?: ServersSpecLimits_Limits;
  
  // Possible values for the amount of memory (in GB) to allocate
  // for pairs of coordinator, dbserver.
  // ServersSpecLimits_Limits
  node_memory_size?: ServersSpecLimits_Limits;
  
  // Possible values for the number of nodes.
  // Value must be min/max (not using allowed_values)
  // ServersSpecLimits_Limits
  node_count?: ServersSpecLimits_Limits;
}
export interface ServersSpecLimits_Limits {
  // Minimum value
  // number
  min?: number;
  
  // Maximum value
  // number
  max?: number;
  
  // Set of allowed values.
  // If this field is non-empty, only one of these values
  // is allowed.
  // number
  allowed_values?: number[];
}

// Request arguments for ListServersSpecLimits
export interface ServersSpecLimitsRequest {
  // Identifier of project that will own a deployment.
  // string
  project_id?: string;
  
  // Identifier of a region in which a deployment will be created.
  // string
  region_id?: string;
  
  // Optional identifier of a deployment for which compatible server specifications are request.
  // string
  deployment_id?: string;
}

// Specification of a ServersSpecPreset, which can be used to initialize a deployment.servers
// This message is now deprecated.
export interface ServersSpecPreset {
  // Name of the ServersSpecPreset
  // This is a read-only value.
  // string
  name?: string;
  
  // Set when this preset is the default.
  // This is a read-only value.
  // boolean
  is_default?: boolean;
  
  // The ServersSpec associated for this name
  // Deployment_ServersSpec
  servers?: Deployment_ServersSpec;
}

// List of ServersSpecPreset.
// This message is now deprecated.
export interface ServersSpecPresetList {
  // ServersSpecPreset
  items?: ServersSpecPreset[];
}

// Request arguments for ListServersSpecPresets and GetDefaultServersSpecPreset
// This message is now deprecated.
export interface ServersSpecPresetsRequest {
  // Identifier of project that will own a deployment.
  // string
  project_id?: string;
  
  // Identifier of a region in which a deployment will be created.
  // string
  region_id?: string;
}

// Response of RecommendShardedDeploymentSize.
export interface ShardedDeploymentSizeRecommendation {
  // Request that resulted in this recommendation.
  // ShardedDeploymentSizeRequest
  request?: ShardedDeploymentSizeRequest;
  
  // Time when the recommendation was made.
  // googleTypes.Timestamp
  created_at?: googleTypes.Timestamp;
  
  // Amount of memory space per node (in GB) being recommended
  // number
  node_memory_size?: number;
  
  // Amount of disk space per node (in GB) being recommended
  // number
  node_disk_size?: number;
  
  // Number of nodes being recommended
  // number
  node_count?: number;
}

// Request arguments for RecommendShardedDeploymentSize.
export interface ShardedDeploymentSizeRequest {
  // Size of entire dataset (on disk) in GB.
  // Required field.
  // Must be >= 1.
  // number
  dataset_size?: number;
  
  // File format on dataset
  // Possible values:
  // - JSON
  // - CSV
  // string
  file_format?: string;
  
  // Percentage of dataset_size that is considered "hot"
  // Must be >= 0.0 and <= 1.0
  // number
  working_set_percentage?: number;
  
  // Percentage of operations that are READ
  // Must be >= 0.0 and <= 1.0
  // number
  access_read_percentage?: number;
  
  // Percentage of operations that are CREATE
  // Must be >= 0.0 and <= 1.0
  // number
  access_create_percentage?: number;
  
  // Percentage of operations that are UPDATE
  // Must be >= 0.0 and <= 1.0
  // number
  access_update_percentage?: number;
  
  // Increase factor of the dataset_size in 1 year.
  // number
  growth_rate?: number;
  
  // Desired number of replicas.
  // Must be >= 3 and <= 5
  // number
  replication_factor?: number;
}

// Version of an ArangoDB release
export interface Version {
  // Version in the format of major.minor.patch
  // string
  version?: string;
}

// List of Versions.
export interface VersionList {
  // Version
  items?: Version[];
}

// DataService is the API used to configure data objects.
export class DataService {
  // Fetch all deployments in the project identified by the given context ID.
  // Required permissions:
  // - data.deployment.list on the project identified by the given context ID
  async ListDeployments(req: arangodb_cloud_common_v1_ListOptions): Promise<DeploymentList> {
    const path = `/api/data/v1/projects/${encodeURIComponent(req.context_id || '')}/deployments`;
    const url = path + api.queryString(req, [`context_id`]);
    return api.get(url, undefined);
  }
  
  // Fetch a deployment by its id.
  // Required permissions:
  // - data.deployment.get on the deployment identified by the given ID
  async GetDeployment(req: arangodb_cloud_common_v1_IDOptions): Promise<Deployment> {
    const path = `/api/data/v1/deployments/${encodeURIComponent(req.id || '')}`;
    const url = path + api.queryString(req, [`id`]);
    return api.get(url, undefined);
  }
  
  // Create a new deployment
  // Required permissions:
  // - data.deployment.create on the project that owns the deployment
  // Note that deployment.status & deployment.expiration are ignored
  // in this request.
  async CreateDeployment(req: Deployment): Promise<Deployment> {
    const url = `/api/data/v1/project/${encodeURIComponent(req.project_id || '')}/deployments`;
    return api.post(url, req);
  }
  
  // Update a deployment
  // Required permissions:
  // - data.deployment.update on the deployment
  // Note that deployment.status & deployment.expiration are ignored
  // in this request.
  async UpdateDeployment(req: Deployment): Promise<Deployment> {
    const url = `/api/data/v1/deployments/${encodeURIComponent(req.id || '')}`;
    return api.patch(url, req);
  }
  
  // Delete a deployment
  // Note that deployments are initially only marked for deletion.
  // Once all their resources are removed the deployment itself is removed.
  // Required permissions:
  // - data.deployment.delete on the deployment
  async DeleteDeployment(req: arangodb_cloud_common_v1_IDOptions): Promise<void> {
    const path = `/api/data/v1/deployments/${encodeURIComponent(req.id || '')}`;
    const url = path + api.queryString(req, [`id`]);
    return api.delete(url, undefined);
  }
  
  // Fetch credentials for accessing deployment by its id.
  // Required permissions:
  // - data.deployment.get on the deployment identified by the given ID
  // - data.deploymentcredentials.get on the deployment identified by the given ID
  async GetDeploymentCredentials(req: DeploymentCredentialsRequest): Promise<DeploymentCredentials> {
    const path = `/api/data/v1/deploymentcredentials/${encodeURIComponent(req.deployment_id || '')}`;
    const url = path + api.queryString(req, [`deployment_id`]);
    return api.get(url, undefined);
  }
  
  // Fetch all ArangoDB versions that are available for deployments.
  // Required permissions:
  // - None
  async ListVersions(req: ListVersionsRequest): Promise<VersionList> {
    const path = `/api/data/v1/versions`;
    const url = path + api.queryString(req, []);
    return api.get(url, undefined);
  }
  
  // Fetch the default ArangoDB version for new deployment.
  // Required permissions:
  // - None
  async GetDefaultVersion(req?: arangodb_cloud_common_v1_Empty): Promise<Version> {
    const path = `/api/data/v1/versions/default`;
    const url = path + api.queryString(req, []);
    return api.get(url, undefined);
  }
  
  // Fetch the limits for server specifications for deployments
  // owned by the given projected, created in the given region.
  // Required permissions:
  // - data.limits.get on the requested project
  // - data.deployment.get on the specified deployment (if deployment_id is set)
  // This method is deprecated.
  async GetServersSpecLimits(req: ServersSpecLimitsRequest): Promise<ServersSpecLimits> {
    const path = `/api/data/v1/projects/${encodeURIComponent(req.project_id || '')}/regions/${encodeURIComponent(req.region_id || '')}/limits`;
    const url = path + api.queryString(req, [`project_id`, `region_id`]);
    return api.get(url, undefined);
  }
  
  // Fetch the node sizes available for deployments
  // owned by the given project, created in the given region.
  // Required permissions:
  // - data.nodesize.list on the requested project
  async ListNodeSizes(req: NodeSizesRequest): Promise<NodeSizeList> {
    const path = `/api/data/v1/projects/${encodeURIComponent(req.project_id || '')}/regions/${encodeURIComponent(req.region_id || '')}/nodesizes`;
    const url = path + api.queryString(req, [`project_id`, `region_id`]);
    return api.get(url, undefined);
  }
  
  // Fetch the presets for server specifications for deployments
  // owned by the given projected, created in the given region.
  // Required permissions:
  // - data.presets.list on the requested project
  // This method is deprecated.
  async ListServersSpecPresets(req: ServersSpecPresetsRequest): Promise<ServersSpecPresetList> {
    const path = `/api/data/v1/projects/${encodeURIComponent(req.project_id || '')}/regions/${encodeURIComponent(req.region_id || '')}/presets`;
    const url = path + api.queryString(req, [`project_id`, `region_id`]);
    return api.get(url, undefined);
  }
  
  // Calculate the total size of a deployment with given arguments.
  // Required permissions:
  // - none
  async CalculateDeploymentSize(req: CalculateDeploymentSizeRequest): Promise<DeploymentSize> {
    const path = `/api/data/v1/deployment-size/calculate`;
    const url = path + api.queryString(req, []);
    return api.get(url, undefined);
  }
  
  // Recommend a deployment size, for a sharded deployment, using the
  // given input values.
  // Required permissions:
  // - none
  async RecommendShardedDeploymentSize(req: ShardedDeploymentSizeRequest): Promise<ShardedDeploymentSizeRecommendation> {
    const path = `/api/data/v1/deployment-size/recommend/sharded`;
    const url = path + api.queryString(req, []);
    return api.get(url, undefined);
  }
  
  // Fetch instructions for connecting drivers to the deployment identified by the given id.
  // Required permissions:
  // - data.deployment.get on the deployment identified by the given ID
  async GetConnectDriverInstructions(req: arangodb_cloud_common_v1_IDOptions): Promise<ConnectDriverInstructions> {
    const path = `/api/data/v1/deployments/${encodeURIComponent(req.id || '')}/connect-driver-instructions`;
    const url = path + api.queryString(req, [`id`]);
    return api.get(url, undefined);
  }
}
