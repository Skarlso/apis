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

// File: metrics/v1/metrics.proto
// Package: arangodb.cloud.metrics.v1

// Request arguments for GetMetricsEndpoint
export interface GetMetricsEndpointRequest {
  // ID of the deployment to get the endpoint for.
  // string
  deployment_id?: string;
}

// Request arguments for ListTokens.
export interface ListTokensRequest {
  // Common list options.
  // Context_id is ignored.
  // arangodb.cloud.common.v1.ListOptions
  options?: arangodb_cloud_common_v1_ListOptions;
  
  // Required ID of deployment to list tokens for.
  // string
  deployment_id?: string;
  
  // If set, do not return revoked tokens.
  // boolean
  exclude_revoked?: boolean;
  
  // If set, do not return expired tokens.
  // boolean
  exclude_expired?: boolean;
  
  // If set, do not return deleted (marked for deletion) tokens.
  // boolean
  exclude_deleted?: boolean;
}

// Response for GetMetricsEndpoint
export interface MetricsEndpoint {
  // Endpoint (url) to get metrics from.
  // If no valid metrics tokens are configured this field is empty.
  // string
  endpoint?: string;
  
  // Endpoint URL used to reach the metrics server with self signed certificate on port 18829
  // If no valid metrics tokens are configured this field is empty.
  // string
  endpoint_self_signed?: string;
  
  // Endpoint URL used to reach the metrics server on default port 443
  // If no valid metrics tokens are configured this field is empty.
  // This endpoint is recommended for human-to-metrics-server connections.
  // string
  endpoint_default?: string;
}

// A Token is represents an access token used to authenticate requests for metrics.
export interface Token {
  // System identifier of the token.
  // This is a read-only value.
  // string
  id?: string;
  
  // URL of this resource
  // This is a read-only value.
  // string
  url?: string;
  
  // Name of the token
  // string
  name?: string;
  
  // Description of the token
  // string
  description?: string;
  
  // Identifier of the deployment that owns this token.
  // This value cannot be changed after creation.
  // string
  deployment_id?: string;
  
  // Time from creation of the token to expiration.
  // This value cannot be changed after creation.
  // If no value is set, a default value of 90 days is used.
  // googleTypes.Duration
  lifetime?: googleTypes.Duration;
  
  // The creation timestamp of the token.
  // This is a read-only value.
  // googleTypes.Timestamp
  created_at?: googleTypes.Timestamp;
  
  // The deletion timestamp of the token.
  // This is a read-only value.
  // googleTypes.Timestamp
  deleted_at?: googleTypes.Timestamp;
  
  // The expiration timestamp of the token.
  // This is a read-only value.
  // googleTypes.Timestamp
  expires_at?: googleTypes.Timestamp;
  
  // The bearer token used for authentication.
  // This is a read-only value that is only given directly after
  // creation of the token. In all other calls, this field
  // will be empty.
  // string
  token?: string;
  
  // Set when this token is deleted.
  // This is a read-only value.
  // boolean
  is_deleted?: boolean;
  
  // Set when this token has expired.
  // This is a read-only value.
  // boolean
  is_expired?: boolean;
  
  // Set when this token will expire in the next month.
  // This is a read-only value.
  // boolean
  will_expire_soon?: boolean;
  
  // Set when this token is revoked.
  // This is a read-only value.
  // boolean
  is_revoked?: boolean;
}

// List of Tokens.
export interface TokenList {
  // Token
  items?: Token[];
}

// MetricsService is the API used to configure various metrics objects.
// Prerelease: This Service is not yet available in production
export interface IMetricsService {
  // Get the current API version of this service.
  // Required permissions:
  // - None
  GetAPIVersion: (req?: arangodb_cloud_common_v1_Empty) => Promise<arangodb_cloud_common_v1_Version>;
  
  // Fetch all metrics token in the deployment identified by the given deployment ID.
  // Required permissions:
  // - metrics.token.list on the deployment identified by the given deployment ID
  ListTokens: (req: ListTokensRequest) => Promise<TokenList>;
  
  // Fetch a metrics token by its id.
  // Required permissions:
  // - metrics.token.get on the token identified by the given ID
  GetToken: (req: arangodb_cloud_common_v1_IDOptions) => Promise<Token>;
  
  // Create a new metrics token.
  // Required permissions:
  // - metrics.token.create on the deployment that owns the token
  CreateToken: (req: Token) => Promise<Token>;
  
  // Update a metrics token.
  // Note that you can only change the metadata (name & description) of the
  // token.
  // Required permissions:
  // - metrics.token.update on the token
  UpdateToken: (req: Token) => Promise<Token>;
  
  // Revoke a metrics token.
  // Once a token is revoked, it can no longer be used for authentication.
  // Required permissions:
  // - metrics.token.revoke on the token
  RevokeToken: (req: arangodb_cloud_common_v1_IDOptions) => Promise<void>;
  
  // Delete a metrics token.
  // Note that token are initially only marked for deleted.
  // Once all the resources that depend on it are removed the token itself is deleted
  // and cannot be restored.
  // Required permissions:
  // - metrics.token.delete on the token
  DeleteToken: (req: arangodb_cloud_common_v1_IDOptions) => Promise<void>;
  
  // Fetch the endpoint to use for getting metrics for a deployment with given id.
  // Required permissions:
  // - metrics.endpoint.get on the deployment identified by the given ID
  GetMetricsEndpoint: (req: GetMetricsEndpointRequest) => Promise<MetricsEndpoint>;
}

// MetricsService is the API used to configure various metrics objects.
// Prerelease: This Service is not yet available in production
export class MetricsService implements IMetricsService {
  // Get the current API version of this service.
  // Required permissions:
  // - None
  async GetAPIVersion(req?: arangodb_cloud_common_v1_Empty): Promise<arangodb_cloud_common_v1_Version> {
    const path = `/api/metrics/v1/api-version`;
    const url = path + api.queryString(req, []);
    return api.get(url, undefined);
  }
  
  // Fetch all metrics token in the deployment identified by the given deployment ID.
  // Required permissions:
  // - metrics.token.list on the deployment identified by the given deployment ID
  async ListTokens(req: ListTokensRequest): Promise<TokenList> {
    const path = `/api/metrics/v1/deployments/${encodeURIComponent(req.deployment_id || '')}/tokens`;
    const url = path + api.queryString(req, [`deployment_id`]);
    return api.get(url, undefined);
  }
  
  // Fetch a metrics token by its id.
  // Required permissions:
  // - metrics.token.get on the token identified by the given ID
  async GetToken(req: arangodb_cloud_common_v1_IDOptions): Promise<Token> {
    const path = `/api/metrics/v1/tokens/${encodeURIComponent(req.id || '')}`;
    const url = path + api.queryString(req, [`id`]);
    return api.get(url, undefined);
  }
  
  // Create a new metrics token.
  // Required permissions:
  // - metrics.token.create on the deployment that owns the token
  async CreateToken(req: Token): Promise<Token> {
    const url = `/api/metrics/v1/deployments/${encodeURIComponent(req.deployment_id || '')}/tokens`;
    return api.post(url, req);
  }
  
  // Update a metrics token.
  // Note that you can only change the metadata (name & description) of the
  // token.
  // Required permissions:
  // - metrics.token.update on the token
  async UpdateToken(req: Token): Promise<Token> {
    const url = `/api/metrics/v1/tokens/${encodeURIComponent(req.id || '')}`;
    return api.patch(url, req);
  }
  
  // Revoke a metrics token.
  // Once a token is revoked, it can no longer be used for authentication.
  // Required permissions:
  // - metrics.token.revoke on the token
  async RevokeToken(req: arangodb_cloud_common_v1_IDOptions): Promise<void> {
    const path = `/api/metrics/v1/tokens/${encodeURIComponent(req.id || '')}/revoke`;
    const url = path + api.queryString(req, [`id`]);
    return api.post(url, undefined);
  }
  
  // Delete a metrics token.
  // Note that token are initially only marked for deleted.
  // Once all the resources that depend on it are removed the token itself is deleted
  // and cannot be restored.
  // Required permissions:
  // - metrics.token.delete on the token
  async DeleteToken(req: arangodb_cloud_common_v1_IDOptions): Promise<void> {
    const path = `/api/metrics/v1/tokens/${encodeURIComponent(req.id || '')}`;
    const url = path + api.queryString(req, [`id`]);
    return api.delete(url, undefined);
  }
  
  // Fetch the endpoint to use for getting metrics for a deployment with given id.
  // Required permissions:
  // - metrics.endpoint.get on the deployment identified by the given ID
  async GetMetricsEndpoint(req: GetMetricsEndpointRequest): Promise<MetricsEndpoint> {
    const path = `/api/metrics/v1/endpoints/${encodeURIComponent(req.deployment_id || '')}`;
    const url = path + api.queryString(req, [`deployment_id`]);
    return api.get(url, undefined);
  }
}
