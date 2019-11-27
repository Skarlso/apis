//
// This file is AUTO-GENERATED by protoc-gen-ts.
// Do not modify it manually.
///
import api from '../../api'
import * as googleTypes from '../../googleTypes'
import { IDOptions as arangodb_cloud_common_v1_IDOptions } from '../../common/v1/common'
import { ListOptions as arangodb_cloud_common_v1_ListOptions } from '../../common/v1/common'

// File: support/v1/support.proto
// Package: arangodb.cloud.support.v1

// Arguments for a ListPlans request
export interface ListPlansRequest {
  // Common list options
  // arangodb.cloud.common.v1.ListOptions
  options?: arangodb_cloud_common_v1_ListOptions;
  
  // If set, list plans as they are available for the organization identified by this ID.
  // string
  organization_id?: string;
}

// Plan represents a specific support plan such as Bronze, Silver or Gold.
export interface Plan {
  // System identifier of the plan.
  // string
  id?: string;
  
  // Name of the plan.
  // string
  name?: string;
  
  // If set, this plan is the default support plan.
  // boolean
  is_default?: boolean;
  
  // Human readable description of the plan
  // string
  description?: string;
  
  // If set, this plan is shown, but not selectable.
  // boolean
  is_unavailable?: boolean;
  
  // SLA times to first response for various situations.
  // When this plan is unavailable, this field is optional.
  // ResponseTimes
  first_response_times?: ResponseTimes;
}

// List of plans.
export interface PlanList {
  // Plan
  items?: Plan[];
}

// Response for various categories on situations.
// All values are in minutes.
// A value of 0 means "best effort".
export interface ResponseTimes {
  // Response time for operation-impeding Error in a production environment.
  // number
  critical?: number;
  
  // Response time for operation-limiting error.
  // number
  high?: number;
  
  // Response time for minor error.
  // number
  normal?: number;
  
  // Response time for usage question.
  // number
  low?: number;
}

// SupportService is the API used to query for support.
export interface ISupportService {
  // Fetch all support plans that are supported by the ArangoDB cloud.
  // Required permissions:
  // - None
  ListPlans: (req: ListPlansRequest) => Promise<PlanList>;
  
  // Fetch a support plan by its id.
  // Required permissions:
  // - None
  GetPlan: (req: arangodb_cloud_common_v1_IDOptions) => Promise<Plan>;
}

// SupportService is the API used to query for support.
export class SupportService implements ISupportService {
  // Fetch all support plans that are supported by the ArangoDB cloud.
  // Required permissions:
  // - None
  async ListPlans(req: ListPlansRequest): Promise<PlanList> {
    const path = `/api/support/v1/plans`;
    const url = path + api.queryString(req, []);
    return api.get(url, undefined);
  }
  
  // Fetch a support plan by its id.
  // Required permissions:
  // - None
  async GetPlan(req: arangodb_cloud_common_v1_IDOptions): Promise<Plan> {
    const path = `/api/support/v1/plans/${encodeURIComponent(req.id || '')}`;
    const url = path + api.queryString(req, [`id`]);
    return api.get(url, undefined);
  }
}
