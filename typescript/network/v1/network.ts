//
// This file is AUTO-GENERATED by protoc-gen-ts.
// Do not modify it manually.
///
import api from '../../api'
import * as googleTypes from '../../googleTypes'
import { Empty as arangodb_cloud_common_v1_Empty } from '../../common/v1/common'
import { IDOptions as arangodb_cloud_common_v1_IDOptions } from '../../common/v1/common'
import { Version as arangodb_cloud_common_v1_Version } from '../../common/v1/common'

// File: network/v1/network.proto
// Package: arangodb.cloud.network.v1

// PrivateEndpointService represents the service part of the private endpoint
export interface PrivateEndpointService {
  // System identifier of the private endpoint service.
  // This is a read-only value.
  // string
  id?: string;
  
  // URL of this resource.
  // This is a read-only value.
  // string
  url?: string;
  
  // Name of the private endpoint service.
  // string
  name?: string;
  
  // Description of the private endpoint service.
  // string
  description?: string;
  
  // The creation timestamp of the private endpoint service
  // This is a read-only value.
  // googleTypes.Timestamp
  created_at?: googleTypes.Timestamp;
  
  // The deletion timestamp of the private endpoint service
  // This is a read-only value.
  // googleTypes.Timestamp
  deleted_at?: googleTypes.Timestamp;
  
  // Set when this private endpoint service is deleted.
  // This is a read-only value.
  // boolean
  is_deleted?: boolean;
  
  // Identifier of the deployment
  // After creation, this value cannot be changed.
  // string
  deployment_id?: string;
  
  // Specific AKS setting.
  // PrivateEndpointService_Aks
  aks?: PrivateEndpointService_Aks;
  
  // Status of the private endpoint service.
  // All fields are read-only.
  // PrivateEndpointService_Status
  status?: PrivateEndpointService_Status;
}

// Specific AKS setting.
export interface PrivateEndpointService_Aks {
  // The subscription IDs of the client side, needed to auto-approve private endpoint connections.
  // After a private endpoint connection has been made this field cannot be modified anymore.
  // string
  client_subscription_ids?: string[];
}

// Specific AKS private endpoint connection status fields.
export interface PrivateEndpointService_AksPrivateEndpointConnectionStatus {
  // The name of the private endpoint connection
  // string
  name?: string;
  
  // The description of the private endpoint connection
  // string
  description?: string;
  
  // The state of the private endpoint connection
  // string
  state?: string;
  
  // The private endpoint identifier
  // string
  id?: string;
}

// Specific AKS status fields.
// All fields are read-only.
export interface PrivateEndpointService_AksStatus {
  // The alias generated by the Azure private link service needed by the client to setup the private endpoint.
  // string
  alias?: string;
  
  // The status of the private endpoint connections.
  // PrivateEndpointService_AksPrivateEndpointConnectionStatus
  private_endpoint_connections?: PrivateEndpointService_AksPrivateEndpointConnectionStatus[];
}

// Status of the private endpoint service.
// All fields are read-only.
export interface PrivateEndpointService_Status {
  // Set when the private endpoint service is ready.
  // boolean
  ready?: boolean;
  
  // The timestamp the ready flag has been set.
  // googleTypes.Timestamp
  ready_at?: googleTypes.Timestamp;
  
  // Set if this private endpoint service needs attention.
  // boolean
  needs_attention?: boolean;
  
  // Free text message describing the status.
  // string
  message?: string;
  
  // Specific AKS status fields.
  // All fields are read-only.
  // PrivateEndpointService_AksStatus
  aks?: PrivateEndpointService_AksStatus;
}

// NetworkService is the API used to manage the network for a deployment.
export interface INetworkService {
  // Get the current API version of this service.
  // Required permissions:
  // - None
  GetAPIVersion: (req?: arangodb_cloud_common_v1_Empty) => Promise<arangodb_cloud_common_v1_Version>;
  
  // Fetch a private endpoint service by its ID.
  // Required permissions:
  // - network.privateendpointservice.get on the private endpoint service.
  GetPrivateEndpointService: (req: arangodb_cloud_common_v1_IDOptions) => Promise<PrivateEndpointService>;
  
  // Fetch a private endpoint service by the deployment ID.
  // Required permissions:
  // - network.privateendpointservice.get-by-deployment-id on the deployment that owns the private endpoint service.
  GetPrivateEndpointServiceByDeploymentID: (req: arangodb_cloud_common_v1_IDOptions) => Promise<PrivateEndpointService>;
  
  // Create a new private endpoint service.
  // Required permissions:
  // - network.privateendpointservice.create on the deployment that owns the private endpoint service.
  CreatePrivateEndpointService: (req: PrivateEndpointService) => Promise<PrivateEndpointService>;
  
  // Update the private endpoint service.
  // Required permissions:
  // - network.privateendpointservice.update on the private endpoint service.
  UpdatePrivateEndpointService: (req: PrivateEndpointService) => Promise<void>;
}

// NetworkService is the API used to manage the network for a deployment.
export class NetworkService implements INetworkService {
  // Get the current API version of this service.
  // Required permissions:
  // - None
  async GetAPIVersion(req?: arangodb_cloud_common_v1_Empty): Promise<arangodb_cloud_common_v1_Version> {
    const path = `/api/network/v1/api-version`;
    const url = path + api.queryString(req, []);
    return api.get(url, undefined);
  }
  
  // Fetch a private endpoint service by its ID.
  // Required permissions:
  // - network.privateendpointservice.get on the private endpoint service.
  async GetPrivateEndpointService(req: arangodb_cloud_common_v1_IDOptions): Promise<PrivateEndpointService> {
    const path = `/api/network/v1/privateendpointservice/${encodeURIComponent(req.id || '')}`;
    const url = path + api.queryString(req, [`id`]);
    return api.get(url, undefined);
  }
  
  // Fetch a private endpoint service by the deployment ID.
  // Required permissions:
  // - network.privateendpointservice.get-by-deployment-id on the deployment that owns the private endpoint service.
  async GetPrivateEndpointServiceByDeploymentID(req: arangodb_cloud_common_v1_IDOptions): Promise<PrivateEndpointService> {
    const path = `/api/network/v1/deployment/${encodeURIComponent(req.id || '')}/privateendpointservice`;
    const url = path + api.queryString(req, [`id`]);
    return api.get(url, undefined);
  }
  
  // Create a new private endpoint service.
  // Required permissions:
  // - network.privateendpointservice.create on the deployment that owns the private endpoint service.
  async CreatePrivateEndpointService(req: PrivateEndpointService): Promise<PrivateEndpointService> {
    const url = `/api/network/v1/deployment/${encodeURIComponent(req.deployment_id || '')}/privateendpointservice`;
    return api.post(url, req);
  }
  
  // Update the private endpoint service.
  // Required permissions:
  // - network.privateendpointservice.update on the private endpoint service.
  async UpdatePrivateEndpointService(req: PrivateEndpointService): Promise<void> {
    const url = `/api/network/v1/privateendpointservice/${encodeURIComponent(req.id || '')}`;
    return api.patch(url, req);
  }
}
