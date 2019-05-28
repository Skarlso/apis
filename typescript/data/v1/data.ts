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
  
  // Deployment_AuthenticationSpec
  authentication?: Deployment_AuthenticationSpec;
  
  // Deployment_Status
  status?: Deployment_Status;
  
  // Deployment_Expiration
  expiration?: Deployment_Expiration;
}
export interface Deployment_AuthenticationSpec {
  // Password of the root user of the deployment.
  // string
  root_password?: string;
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
  // boolean
  failed?: boolean;
}
export interface Deployment_ServersSpec {
  // Number of coordinators of the deployment
  // number
  coordinators?: number;
  
  // Amount of memory (in GB) to allocate for coordinators.
  // number
  coordinator_memory_size?: number;
  
  // Custom command line arguments passed to all coordinators.
  // string
  coordinator_args?: string[];
  
  // Number of dbservers of the deployment
  // number
  dbservers?: number;
  
  // Amount of memory (in GB) to allocate for dbservers.
  // number
  dbserver_memory_size?: number;
  
  // Amount of disk space (in GB) to allocate for dbservers.
  // number
  dbserver_disk_size?: number;
  
  // Custom command line arguments passed to all dbservers.
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
  
  // Set if bootstrapped_at has a value, othewise false.
  // boolean
  bootstrapped?: boolean;
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
}

// Specification of a ServersSpecPreset, which can be used to initialize a deployment.servers
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
export interface ServersSpecPresetList {
  // ServersSpecPreset
  items?: ServersSpecPreset[];
}

// Request arguments for ListServersSpecPresets and GetDefaultServersSpecPreset
export interface ServersSpecPresetsRequest {
  // Identifier of project that will own a deployment.
  // string
  project_id?: string;
  
  // Identifier of a region in which a deployment will be created.
  // string
  region_id?: string;
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
  async GetServersSpecLimits(req: ServersSpecLimitsRequest): Promise<ServersSpecLimits> {
    const path = `/api/data/v1/projects/${encodeURIComponent(req.project_id || '')}/regions/${encodeURIComponent(req.region_id || '')}/limits`;
    const url = path + api.queryString(req, [`project_id`, `region_id`]);
    return api.get(url, undefined);
  }
  
  // Fetch the presets for server specifications for deployments
  // owned by the given projected, created in the given region.
  // Required permissions:
  // - data.presets.list on the requested project
  async ListServersSpecPresets(req: ServersSpecPresetsRequest): Promise<ServersSpecPresetList> {
    const path = `/api/data/v1/projects/${encodeURIComponent(req.project_id || '')}/regions/${encodeURIComponent(req.region_id || '')}/presets`;
    const url = path + api.queryString(req, [`project_id`, `region_id`]);
    return api.get(url, undefined);
  }
}
