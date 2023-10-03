//
// This file is AUTO-GENERATED by protoc-gen-ts.
// Do not modify it manually.
///
import api from '../../api'
import * as googleTypes from '../../googleTypes'
import { Empty as arangodb_cloud_common_v1_Empty } from '../../common/v1/common'
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
export interface GetUsagePDFReportRequest {
  // ID of the PDF report that needs to be fetched.
  // This is a read-only field.
  // string
  report_id?: string;
  
  // ID of the organization that owns this report.
  // This is a read-only field.
  // string
  organization_id?: string;
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

// Request for listing PDF reports.
export interface ListPDFReportsRequest {
  // ID of the organization for which PDF reports are requested.
  // string
  organization_id?: string;
}

// Response for ListPDFReports
export interface ListPDFReportsResponse {
  // PDFReport
  items?: PDFReport[];
}
export interface PDFReport {
  // ID of this PDF report.
  // This is a read-only field.
  // string
  id?: string;
  
  // ID of the organization to which this report belongs to.
  // This is a required field.
  // string
  organization_id?: string;
  
  // The date from which credit usage is listed.
  // This is a required field.
  // googleTypes.Timestamp
  starts_at?: googleTypes.Timestamp;
  
  // The date until which credit usage is listed.
  // This is a required field.
  // googleTypes.Timestamp
  ends_at?: googleTypes.Timestamp;
  
  // The timestamp at which this report was requested.
  // This is a read-only field.
  // googleTypes.Timestamp
  requested_at?: googleTypes.Timestamp;
  
  // Status of the PDF report.
  // This is a read-only field.
  // PDFReport_Status
  status?: PDFReport_Status;
}

// Status of the PDF report.
// This is a read-only block.
export interface PDFReport_Status {
  // The contents of the PDF.
  // This is filled in by the server.
  // This is a read-only field.
  // string
  contents?: string;
  
  // If set, this PDF report is ready.
  // The contents may be read from the contents field.
  // This is a read-only field.
  // boolean
  is_ready?: boolean;
  
  // The timestamp at which this report was ready.
  // This is a read-only field.
  // googleTypes.Timestamp
  ready_at?: googleTypes.Timestamp;
  
  // The timestamp at which this report expires.
  // Once this timestamp is met, the report is no longer available in the system.
  // This is a read-only field.
  // googleTypes.Timestamp
  expires_at?: googleTypes.Timestamp;
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
  
  // Request the creation of a new credit usage PDF report.
  // The server returns a response immediately and handles the actual
  // PDF creation asynchronously.
  // The client is expected to poll the status of the PDF report.
  // Once the PDF report is ready, the contents may be obtained using GetCreditBundleUsagePDFReport rpc.
  // Required permissions:
  // - credit.pdfreport.create on organization identified by the given organization ID.
  CreateUsagePDFReport: (req: PDFReport) => Promise<PDFReport>;
  
  // Get a credit bundle usage PDF report identified by the given id,
  // owned by the organization identified by the `organization_id`
  // Returns an error if the PDFReport is not yet ready.
  // Required permissions:
  // - credit.pdfreport.get on organization identified by the given organization ID.
  GetUsagePDFReport: (req: GetUsagePDFReportRequest) => Promise<PDFReport>;
  
  // List the PDF reports for the organization identified by the ID.
  // The response will not include the PDF content bytes.
  // Use `GetCreditBundleUsagePDFReport` rpc for getting the content bytes of a ready PDFReport.
  // Required permissions:
  // - credit.pdfreport.list on organization identified by the given organization ID.
  ListUsagePDFReports: (req: ListPDFReportsRequest) => Promise<ListPDFReportsResponse>;
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
  
  // Request the creation of a new credit usage PDF report.
  // The server returns a response immediately and handles the actual
  // PDF creation asynchronously.
  // The client is expected to poll the status of the PDF report.
  // Once the PDF report is ready, the contents may be obtained using GetCreditBundleUsagePDFReport rpc.
  // Required permissions:
  // - credit.pdfreport.create on organization identified by the given organization ID.
  async CreateUsagePDFReport(req: PDFReport): Promise<PDFReport> {
    const path = `/api/credit/v1/${encodeURIComponent(req.organization_id || '')}/pdf`;
    const url = path + api.queryString(req, [`organization_id`]);
    return api.post(url, undefined);
  }
  
  // Get a credit bundle usage PDF report identified by the given id,
  // owned by the organization identified by the `organization_id`
  // Returns an error if the PDFReport is not yet ready.
  // Required permissions:
  // - credit.pdfreport.get on organization identified by the given organization ID.
  async GetUsagePDFReport(req: GetUsagePDFReportRequest): Promise<PDFReport> {
    const path = `/api/credit/v1/${encodeURIComponent(req.organization_id || '')}/pdf/${encodeURIComponent(req.report_id || '')}`;
    const url = path + api.queryString(req, [`organization_id`, `report_id`]);
    return api.get(url, undefined);
  }
  
  // List the PDF reports for the organization identified by the ID.
  // The response will not include the PDF content bytes.
  // Use `GetCreditBundleUsagePDFReport` rpc for getting the content bytes of a ready PDFReport.
  // Required permissions:
  // - credit.pdfreport.list on organization identified by the given organization ID.
  async ListUsagePDFReports(req: ListPDFReportsRequest): Promise<ListPDFReportsResponse> {
    const path = `/api/credit/v1/${encodeURIComponent(req.organization_id || '')}/pdfs`;
    const url = path + api.queryString(req, [`organization_id`]);
    return api.get(url, undefined);
  }
}
