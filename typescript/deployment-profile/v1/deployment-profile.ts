//
// This file is AUTO-GENERATED by protoc-gen-ts.
// Do not modify it manually.
///
import api from '../../api'
import * as googleTypes from '../../googleTypes'
import { Empty as arangodb_cloud_common_v1_Empty } from '../../common/v1/common'
import { IDOptions as arangodb_cloud_common_v1_IDOptions } from '../../common/v1/common'
import { ListOptions as arangodb_cloud_common_v1_ListOptions } from '../../common/v1/common'
import { Version as arangodb_cloud_common_v1_Version } from '../../common/v1/common'

// File: deployment-profile/v1/deployment-profile.proto
// Package: arangodb.cloud.data.v1

// DeploymentProfile represents a single Deployment Profile for an organization.
export interface DeploymentProfile {
  // System identifier of the deployment profile.
  // This is a read-only value.
  // string
  id?: string;
  
  // URL of the deployment profile resource.
  // This is a read-only value.
  // string
  url?: string;
  
  // Name of the deployment profile.
  // string
  name?: string;
  
  // Description of the deployment profile.
  // string
  description?: string;
  
  // Organization id of the deployment profile.
  // This is a read-only value.
  // string
  organization_id?: string;
  
  // The creation timestamp of the deployment profile.
  // This is a read-only value.
  // googleTypes.Timestamp
  created_at?: googleTypes.Timestamp;
}

// List of deployment profiles.
export interface DeploymentProfileList {
  // DeploymentProfile
  items?: DeploymentProfile[];
}

// Request for listing deployment profiles.
export interface ListDeploymentProfilesRequest {
  // List deployment profiles for this organization ID.
  // This is a required field.
  // string
  organization_id?: string;
  
  // List deployment profiles for this ArangoDB version
  // This is an optional field.
  // string
  arangodb_version?: string;
  
  // Optional common list options, the context_id is ignored
  // This is an optional field.
  // arangodb.cloud.common.v1.ListOptions
  options?: arangodb_cloud_common_v1_ListOptions;
}

// Deployment Profile service is used to manage Deployment Profiles.
export interface IDeploymentProfileService {
  // Get the current API version of this service.
  // Required permissions:
  // - None (authenticated only)
  GetAPIVersion: (req?: arangodb_cloud_common_v1_Empty) => Promise<arangodb_cloud_common_v1_Version>;
  
  // List all deployment profiles for the organization identified by the given organization identifier.
  // Required permissions:
  // - deploymentprofile.deploymentprofile.list on the organization
  ListDeploymentProfiles: (req: ListDeploymentProfilesRequest) => Promise<DeploymentProfileList>;
  
  // Fetch a specific Deployment Profile identified by the given ID.
  // Required permissions:
  // - deploymentprofile.deploymentprofile.get on the organization that owns the deployment profile with given ID.
  GetDeploymentProfile: (req: arangodb_cloud_common_v1_IDOptions) => Promise<DeploymentProfile>;
}

// Deployment Profile service is used to manage Deployment Profiles.
export class DeploymentProfileService implements IDeploymentProfileService {
  // Get the current API version of this service.
  // Required permissions:
  // - None (authenticated only)
  async GetAPIVersion(req?: arangodb_cloud_common_v1_Empty): Promise<arangodb_cloud_common_v1_Version> {
    const path = `/api/deploymentprofile/v1/api-version`;
    const url = path + api.queryString(req, []);
    return api.get(url, undefined);
  }
  
  // List all deployment profiles for the organization identified by the given organization identifier.
  // Required permissions:
  // - deploymentprofile.deploymentprofile.list on the organization
  async ListDeploymentProfiles(req: ListDeploymentProfilesRequest): Promise<DeploymentProfileList> {
    const url = `/api/deploymentprofile/v1/deploymentprofiles`;
    return api.post(url, req);
  }
  
  // Fetch a specific Deployment Profile identified by the given ID.
  // Required permissions:
  // - deploymentprofile.deploymentprofile.get on the organization that owns the deployment profile with given ID.
  async GetDeploymentProfile(req: arangodb_cloud_common_v1_IDOptions): Promise<DeploymentProfile> {
    const path = `/api/deploymentprofile/v1/deploymentprofiles/${encodeURIComponent(req.id || '')}`;
    const url = path + api.queryString(req, [`id`]);
    return api.get(url, undefined);
  }
}
