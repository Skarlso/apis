//
// This file is AUTO-GENERATED by protoc-gen-ts.
// Do not modify it manually.
///
import api from '../../api'
import * as googleTypes from '../../googleTypes'
import { ListOptions as arangodb_cloud_common_v1_ListOptions } from '../../common/v1/common'

// File: usage/v1/usage.proto
// Package: arangodb.cloud.usage.v1

// Request arguments for ListUsageItems
export interface ListUsageItemsRequest {
  // Request usage items for the organization with this id.
  // This is a required field.
  // string
  organization_id?: string;
  
  // Request usage items that overlaps in time with the time period that starts with this timestamp (inclusive).
  // This is a required field.
  // googleTypes.Timestamp
  from?: googleTypes.Timestamp;
  
  // Request usage items that overlaps in time with the time period that ends with this timestamp (inclusive).
  // This is a required field.
  // googleTypes.Timestamp
  to?: googleTypes.Timestamp;
  
  // Standard list options
  // This is an optional field.
  // arangodb.cloud.common.v1.ListOptions
  options?: arangodb_cloud_common_v1_ListOptions;
  
  // Limit to usage items for the resource with this URL.
  // This is an optional field.
  // string
  resource_url?: string;
  
  // Limit to usage items for the resource with this kind.
  // This is an optional field.
  // string
  resource_kind?: string;
  
  // Limit to usage items for the project with this id.
  // This is an optional field.
  // string
  project_id?: string;
  
  // Limit to usage items for the deployment with this id.
  // This is an optional field.
  // string
  deployment_id?: string;
  
  // If set, limit to usage items that have no invoice_id set.
  // boolean
  has_no_invoice_id?: boolean;
  
  // If set, limit to usage items that have an invoice_id set.
  // boolean
  has_invoice_id?: boolean;
}

// A UsageItem message contained usage tracking information for a tracked
// resource (usually deployment) in a specific time period.
export interface UsageItem {
  // System identifier of the usage item.
  // string
  id?: string;
  
  // URL of this resource
  // string
  url?: string;
  
  // Kind of usage item
  // string
  kind?: string;
  
  // Identification of the resource covered by this usage item
  // UsageItem_Resource
  resource?: UsageItem_Resource;
  
  // This usage item covers a time period that starts at this timestamp
  // googleTypes.Timestamp
  starts_at?: googleTypes.Timestamp;
  
  // This usage item covers a time period that ends at this timestamp.
  // If the usage item has not yet ended, this field is is set to the current time.
  // googleTypes.Timestamp
  ends_at?: googleTypes.Timestamp;
  
  // Set when this usage item has ended.
  // boolean
  has_ended?: boolean;
  
  // Identifier of the tier the organization was using at the start of this usage period.
  // string
  tier_id?: string;
  
  // Identifier of the invoice that includes this usage item.
  // The usage item must be ended when this field it set.
  // string
  invoice_id?: string;
  
  // Amount of (computer) resources used by the resource covered by this usage item.
  // This field is only set when the usage item is of kind DeploymentSize.
  // UsageItem_DeploymentSize
  deployment_size?: UsageItem_DeploymentSize;
  
  // Amount of network traffic used by the resource covered by this usage item.
  // This field is only set when the usage item is of kind NetworkTransferSize.
  // UsageItem_NetworkTransferSize
  network_transfer_size?: UsageItem_NetworkTransferSize;
  
  // Amount of backup related cloud storage used by the resource covered by this usage item.
  // This field is only set when the usage item is of kind BackupStorageSize.
  // UsageItem_BackupStorageSize
  backup_storage_size?: UsageItem_BackupStorageSize;
}
export interface UsageItem_BackupStorageSize {
  // Amount of cloud storage (in bytes) used by backups of a deployment.
  // number
  cloud_storage_size?: number;
}
export interface UsageItem_DeploymentSize {
  // Number of coordinators of the deployment
  // number
  coordinators?: number;
  
  // Amount of memory (in GB) allocated for each coordinator.
  // number
  coordinator_memory_size?: number;
  
  // Number of dbservers of the deployment
  // number
  dbservers?: number;
  
  // Amount of memory (in GB) allocated for each dbserver.
  // number
  dbserver_memory_size?: number;
  
  // Amount of disk space (in GB) allocated for each dbserver.
  // number
  dbserver_disk_size?: number;
  
  // Number of agents of the deployment
  // number
  agents?: number;
  
  // Amount of memory (in GB) allocated for each agent.
  // number
  agent_memory_size?: number;
  
  // Amount of disk space (in GB) allocated for each agent.
  // number
  agent_disk_size?: number;
  
  // Identifier of the node-size used for this deployment (empty for flexible)
  // string
  node_size_id?: string;
}
export interface UsageItem_NetworkTransferSize {
  // Total amount of network ingress traffic (in bytes) caused by the use of a deployment.
  // This is excluding inner cluster traffic and excluding backup traffic (downloads).
  // number
  total_transfer_ingress_size?: number;
  
  // Total amount of network egress traffic (in bytes) caused by the use of a deployment.
  // This is excluding inner cluster traffic and excluding backup traffic (uploads).
  // Note: In the future we want to split between cross_region_transfer_x and inner_region_transfer_x,
  // the total_transfer_x is the sum of these 2. Inner region can be cross availability zone.
  // number
  total_transfer_egress_size?: number;
}
export interface UsageItem_Resource {
  // System identifier of the resource that this usage item covers.
  // string
  id?: string;
  
  // URL of the resource that this usage item covers
  // string
  url?: string;
  
  // Kind of resource that this usage item covers.
  // string
  kind?: string;
  
  // Human readable description of the resource that this usage item covers.
  // string
  description?: string;
  
  // Identifier of the organization that owns the resource that this usage item covers.
  // string
  organization_id?: string;
  
  // Name of the organization that owns the resource that this usage item covers.
  // string
  organization_name?: string;
  
  // Identifier of the project that owns the resource that this usage item covers.
  // string
  project_id?: string;
  
  // Name of the project that owns the resource that this usage item covers.
  // string
  project_name?: string;
  
  // Identifier of the deployment that owns the resource that this usage item covers.
  // string
  deployment_id?: string;
  
  // Name of the deployment that owns the resource that this usage item covers.
  // string
  deployment_name?: string;
  
  // Name of the deployment member that owns the resource that this usage item covers.
  // This field is only set when the usage item is specific for a member of the deployment (e.g. network transfer)
  // string
  deployment_member_name?: string;
  
  // Identifier of the cloud provider that is used to run the deployment.
  // string
  cloud_provider_id?: string;
  
  // Identifier of the cloud region that is used to run the deployment.
  // string
  cloud_region_id?: string;
  
  // Identifier of the support plan that is attached to the deployment.
  // string
  support_plan_id?: string;
  
  // Model of the deployment
  // string
  deployment_model?: string;
}

// List of UsageItems.
export interface UsageItemList {
  // UsageItem
  items?: UsageItem[];
}

// UsageService is the API used to fetch usage tracking information.
export interface IUsageService {
  // Fetch all UsageItem resources in the organization identified by the given
  // organization ID that match the given criteria.
  // Required permissions:
  // - usage.usageitem.list on the organization identified by the given organization ID
  ListUsageItems: (req: ListUsageItemsRequest) => Promise<UsageItemList>;
}

// UsageService is the API used to fetch usage tracking information.
export class UsageService implements IUsageService {
  // Fetch all UsageItem resources in the organization identified by the given
  // organization ID that match the given criteria.
  // Required permissions:
  // - usage.usageitem.list on the organization identified by the given organization ID
  async ListUsageItems(req: ListUsageItemsRequest): Promise<UsageItemList> {
    const path = `/api/usage/v1/organization/${encodeURIComponent(req.organization_id || '')}/usageitems`;
    const url = path + api.queryString(req, [`organization_id`]);
    return api.get(url, undefined);
  }
}
