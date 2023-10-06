//
// This file is AUTO-GENERATED by protoc-gen-ts.
// Do not modify it manually.
///
import api, { IStreamMessage, IServerStream } from '../../api'
import * as googleTypes from '../../googleTypes'
import { Empty as arangodb_cloud_common_v1_Empty } from '../../common/v1/common'
import { IDOptions as arangodb_cloud_common_v1_IDOptions } from '../../common/v1/common'
import { ListOptions as arangodb_cloud_common_v1_ListOptions } from '../../common/v1/common'
import { Version as arangodb_cloud_common_v1_Version } from '../../common/v1/common'

// File: credits/v1/credits.proto
// Package: arangodb.cloud.credits.v1
export interface CreditBundle {
  // ID of the credit bundle.
  // This is a read-only value.
  // string
  id?: string;
  
  // URL of this credit bundle.
  // This is a read-only value.
  // string
  url?: string;
  
  // The organization this credit bundle belongs to.
  // This is a read-only value.
  // string
  organization_id?: string;
  
  // The number of credits purchased in this bundle.
  // This is a read-only value.
  // number
  credits_purchased?: number;
  
  // The total price of these credits.
  // This is a read-only value.
  // number
  total_price?: number;
  
  // Currency used for total_price.
  // This is a read-only value.
  // string
  currency?: string;
  
  // The number of credits remaining in this bundle.
  // This is a read-only value.
  // number
  credits_remaining?: number;
  
  // The date at which this bundle was purchased.
  // This is a read-only value.
  // googleTypes.Timestamp
  purchased_at?: googleTypes.Timestamp;
  
  // The date from which this bundle is valid.
  // This is a read-only value.
  // googleTypes.Timestamp
  valid_from?: googleTypes.Timestamp;
  
  // The date until which this bundle is valid.
  // This is a read-only value.
  // googleTypes.Timestamp
  valid_until?: googleTypes.Timestamp;
  
  // Timestamp of when this credit bundle was last used.
  // googleTypes.Timestamp
  last_used_at?: googleTypes.Timestamp;
}

// Usage of credit bundle.
// All fields are read-only.
export interface CreditBundleUsage {
  // Unique identifier of this credit bundle usage.
  // string
  id?: string;
  
  // ID of the usage item this credit bundle usage corresponds to.
  // string
  usage_item_id?: string;
  
  // ID of the credit bundle from which credit was used.
  // string
  credit_bundle_id?: string;
  
  // ID of the organization this credit bundle (and usage) belongs to.
  // string
  organization_id?: string;
  
  // Amount of credits used from the specified credit_bundle_id.
  // number
  usage?: number;
  
  // Amount of credits remaining after this usage.
  // number
  remaining?: number;
  
  // Timestamp at which this credit usage was created.
  // googleTypes.Timestamp
  created_at?: googleTypes.Timestamp;
}

// List of CreditBundleUsages.
export interface CreditBundleUsageList {
  // CreditBundleUsage
  items?: CreditBundleUsage[];
}

// List of credit bundles
export interface CreditBundlesList {
  // CreditBundle
  items?: CreditBundle[];
}

// CreditUsageReport describes the monthly credit usage for a given organization.
export interface CreditUsageReport {
  // System identifier of the report.
  // string
  id?: string;
  
  // URL of this resource
  // string
  url?: string;
  
  // ID of the organization to which this report belongs.
  // string
  organization_id?: string;
  
  // Amount of credits consumed between the interval in this report (between starts_at and ends_at).
  // number
  amount?: number;
  
  // Credit balance at the start of the month.
  // number
  opening_balance?: number;
  
  // Credit balance at the end of the month.
  // number
  closing_balance?: number;
  
  // Date from which the credit usage are listed in this report.
  // googleTypes.Timestamp
  starts_at?: googleTypes.Timestamp;
  
  // Date until which the credit usage are listed in this report.
  // googleTypes.Timestamp
  ends_at?: googleTypes.Timestamp;
  
  // List of items in this credit usage report.
  // CreditUsageReport_Item
  items?: CreditUsageReport_Item[];
}
export interface CreditUsageReport_Item {
  // Identifiers of the Credit usages that this item covers.
  // string
  creditusage_ids?: string[];
  
  // Amount of credits for this item.
  // number
  amount?: number;
  
  // Human readable description of this item
  // string
  description?: string;
}
export interface CreditUsageReportList {
  // List of credit usage reports.
  // CreditUsageReport
  items?: CreditUsageReport[];
}

// Request for listing credit bundle usages.
export interface ListCreditBundleUsageRequest {
  // The organization this credit bundle belongs to.
  // This is a required field.
  // string
  organization_id?: string;
  
  // If set, list the usage for the specified credit bundle only.
  // By default, returns the usage for all credit bundles in this organization.
  // This is an optional field.
  // string
  credit_bundle_id?: string;
  
  // The date from which credit usage should be listed.
  // If unspecified, defaults to the date 7 days before `ends_at`.
  // This is an optional field.
  // googleTypes.Timestamp
  starts_at?: googleTypes.Timestamp;
  
  // The date until which credit usage should be listed.
  // If unspecified, defaults to the current date (at the time of calling the API).
  // This is an optional field.
  // googleTypes.Timestamp
  ends_at?: googleTypes.Timestamp;
  
  // If set, list the usage for the specified usage item only.
  // This is an optional field.
  // string
  usage_item_id?: string;
  
  // Common list options
  // context_id is ignored.
  // arangodb.cloud.common.v1.ListOptions
  options?: arangodb_cloud_common_v1_ListOptions;
}

// Request for listing credit bundles
export interface ListCreditBundlesRequest {
  // ID of the organization for which credit bundles are listed.
  // This is a required field.
  // string
  organization_id?: string;
  
  // If set, exclude expired bundles.
  // boolean
  exclude_expired?: boolean;
}

// Request for ListCreditUsageReports rpc.
export interface ListCreditUsageReportsRequest {
  // Identifier of the organization for which credit reports are listed.
  // string
  organization_id?: string;
}

// PDFDocument contains the PDF representation of a CreditUsageReport.
export interface PDFDocument {
  // The contents of the PDF.
  // This is a read-only field.
  // string
  contents?: string;
  
  // Name of the PDF file.
  // This is a ready-only field.
  // string
  filename?: string;
}

// CreditsService is the API used for managing credits.
export interface ICreditsService {
  // Get the current API version of this service.
  // Required permissions:
  // - None (authenticated only)
  GetAPIVersion: (req?: arangodb_cloud_common_v1_Empty) => Promise<arangodb_cloud_common_v1_Version>;
  
  // List credit bundles for an organization based on the provided request.
  // Required permissions:
  // - credit.creditbundle.list on the organization identified by the given organization ID
  ListCreditBundles: (req: ListCreditBundlesRequest) => Promise<CreditBundlesList>;
  
  // List credit bundle usages for an organization based on the provided request.
  // Required permissions:
  // - credit.creditbundleusage.list on the organization identified by the given organization ID.
  ListCreditBundlesUsage: (req: ListCreditBundleUsageRequest) => Promise<CreditBundleUsageList>;
  
  // List the credit reports for the organization identified by the given
  // organization ID that match the given criteria.
  // Required permissions:
  // - credit.creditusagereport.list on the organization identified by the given organization ID
  ListCreditUsageReports: (req: ListCreditUsageReportsRequest) => Promise<CreditUsageReportList>;
  
  // Get a credit usage report identified by the given ID.
  // Required permissions:
  // - credit.creditusagereport.get on the organization identified by the given organization ID
  GetCreditUsageReport: (req: arangodb_cloud_common_v1_IDOptions) => Promise<CreditUsageReport>;
  
  // Get a credit usage report identified by the given ID, as a PDF document.
  // Required permissions:
  // - credit.creditusagereport.get on the organization identified by the given organization ID
  GetCreditUsageReportPDF: (req: arangodb_cloud_common_v1_IDOptions, cb: (obj: IStreamMessage<PDFDocument>) => void) => Promise<IServerStream>;
}

// CreditsService is the API used for managing credits.
export class CreditsService implements ICreditsService {
  // Get the current API version of this service.
  // Required permissions:
  // - None (authenticated only)
  async GetAPIVersion(req?: arangodb_cloud_common_v1_Empty): Promise<arangodb_cloud_common_v1_Version> {
    const path = `/api/credit/v1/api-version`;
    const url = path + api.queryString(req, []);
    return api.get(url, undefined);
  }
  
  // List credit bundles for an organization based on the provided request.
  // Required permissions:
  // - credit.creditbundle.list on the organization identified by the given organization ID
  async ListCreditBundles(req: ListCreditBundlesRequest): Promise<CreditBundlesList> {
    const path = `/api/credit/v1/${encodeURIComponent(req.organization_id || '')}/creditbundles`;
    const url = path + api.queryString(req, [`organization_id`]);
    return api.get(url, undefined);
  }
  
  // List credit bundle usages for an organization based on the provided request.
  // Required permissions:
  // - credit.creditbundleusage.list on the organization identified by the given organization ID.
  async ListCreditBundlesUsage(req: ListCreditBundleUsageRequest): Promise<CreditBundleUsageList> {
    const path = `/api/credit/v1/${encodeURIComponent(req.organization_id || '')}/creditbundleusages`;
    const url = path + api.queryString(req, [`organization_id`]);
    return api.get(url, undefined);
  }
  
  // List the credit reports for the organization identified by the given
  // organization ID that match the given criteria.
  // Required permissions:
  // - credit.creditusagereport.list on the organization identified by the given organization ID
  async ListCreditUsageReports(req: ListCreditUsageReportsRequest): Promise<CreditUsageReportList> {
    const path = `/api/credit/v1/${encodeURIComponent(req.organization_id || '')}/creditusagereports`;
    const url = path + api.queryString(req, [`organization_id`]);
    return api.get(url, undefined);
  }
  
  // Get a credit usage report identified by the given ID.
  // Required permissions:
  // - credit.creditusagereport.get on the organization identified by the given organization ID
  async GetCreditUsageReport(req: arangodb_cloud_common_v1_IDOptions): Promise<CreditUsageReport> {
    const path = `/api/credit/v1/creditusagereport/${encodeURIComponent(req.id || '')}`;
    const url = path + api.queryString(req, [`id`]);
    return api.get(url, undefined);
  }
  
  // Get a credit usage report identified by the given ID, as a PDF document.
  // Required permissions:
  // - credit.creditusagereport.get on the organization identified by the given organization ID
  async GetCreditUsageReportPDF(req: arangodb_cloud_common_v1_IDOptions, cb: (obj: IStreamMessage<PDFDocument>) => void): Promise<IServerStream> {
    const url = `/api/credit/v1/creditusagereport/${encodeURIComponent(req.id || '')}/pdf`;
    return api.server_stream(url, "POST", req, cb);
  }
}
