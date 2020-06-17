//
// This file is AUTO-GENERATED by protoc-gen-ts.
// Do not modify it manually.
///
import api from '../../api'
import * as googleTypes from '../../googleTypes'
import { Empty as arangodb_cloud_common_v1_Empty } from '../../common/v1/common'
import { Version as arangodb_cloud_common_v1_Version } from '../../common/v1/common'

// File: monitoring/v1/monitoring.proto
// Package: arangodb.cloud.monitoring.v1
export interface DeploymentLogsChunk {
  // Chunk of bytes from the logs
  // string
  chunk?: string;
}

// GetDeploymentLogsRequest contains request arguments for GetDeploymentLogs.
export interface GetDeploymentLogsRequest {
  // Identifier of the deployment to get the logs from.
  // string
  deployment_id?: string;
  
  // If set, limit logs to servers of this role.
  // string
  role?: string;
  
  // Formatting for log messages.
  // The possible values are text and json, with default value being text.
  // string
  format?: string;
  
  // The start time for the query. Defaults to one hour ago.
  // googleTypes.Timestamp
  start_at?: googleTypes.Timestamp;
  
  // The end time for the query. Defaults to now.
  // googleTypes.Timestamp
  end_at?: googleTypes.Timestamp;
  
  // Limit the number of log lines. Defaults to 1000.
  // number
  limit?: number;
}

// MonitoringService is the API used to monitor deployments.
export interface IMonitoringService {
  // Get the current API version of this service.
  // Required permissions:
  // - None
  GetAPIVersion: (req?: arangodb_cloud_common_v1_Empty) => Promise<arangodb_cloud_common_v1_Version>;
}

// MonitoringService is the API used to monitor deployments.
export class MonitoringService implements IMonitoringService {
  // Get the current API version of this service.
  // Required permissions:
  // - None
  async GetAPIVersion(req?: arangodb_cloud_common_v1_Empty): Promise<arangodb_cloud_common_v1_Version> {
    const path = `/api/monitoring/v1/api-version`;
    const url = path + api.queryString(req, []);
    return api.get(url, undefined);
  }
}
