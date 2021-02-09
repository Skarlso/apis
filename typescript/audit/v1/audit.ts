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

// File: audit/v1/audit.proto
// Package: arangodb.cloud.audit.v1

// Request arguments for AttachProjectToAuditLog.
export interface AttachProjectToAuditLogRequest {
  // ID of project to attach the AuditLog to.
  // string
  project_id?: string;
  
  // ID of the AuditLog to attach.
  // string
  auditlog_id?: string;
}

// AuditLog holds a specification destinations that audit events should be
// sent to and it acts as a grouping of audit log archives.
export interface AuditLog {
  // The ID of this resource.
  // string
  id?: string;
  
  // URL of this resource
  // This is a read-only value.
  // string
  url?: string;
  
  // Name of the audit log
  // string
  name?: string;
  
  // Description of the audit log
  // string
  description?: string;
  
  // The creation timestamp of the resource
  // This is a read-only value.
  // googleTypes.Timestamp
  created_at?: googleTypes.Timestamp;
  
  // The deletion timestamp of the resource
  // This is a read-only value.
  // googleTypes.Timestamp
  deleted_at?: googleTypes.Timestamp;
  
  // Set when this resource is deleted.
  // This is a read-only value.
  // boolean
  is_deleted?: boolean;
  
  // Identifier of the user who created this resource.
  // This is a read-only value.
  // string
  created_by_id?: string;
  
  // Identifier of the organization that owns this audit log.
  // This is a read-only value.
  // string
  organization_id?: string;
  
  // If set, this AuditLog is the default for the organization.
  // boolean
  is_default?: boolean;
  
  // Destinations that events of this AuditLog should be sent to.
  // Note that there can only be 1 destination of type "cloud".
  // AuditLog_Destination
  destinations?: AuditLog_Destination[];
}

// Specification of a destination for audit events.
export interface AuditLog_Destination {
  // Type of destination.
  // Possible values are: "cloud", "https-post"
  // string
  type?: string;
  
  // Settings for destinations of type "https-post"
  // AuditLog_HttpsPostSettings
  http_post?: AuditLog_HttpsPostSettings;
  
  // Status of this destination (per deployment)
  // This is a read-only value.
  // AuditLog_DestinationStatus
  Statusses?: AuditLog_DestinationStatus[];
}

// The status of a destination for audit events (for a deployment).
// All fields in this message are read-only values.
export interface AuditLog_DestinationStatus {
  // ID of the deployment that the status applied to (if applicable)
  // The deployment ID of the status is optional, inside the list at most
  // one destination status is allowed to be empty, meaning the Oasis status,
  // all others will be bound to a specific deployment as indicated by this ID.
  // string
  deployment_id?: string;
  
  // Set if this destination has errors
  // boolean
  has_errors?: boolean;
  
  // Human readable error message (if any)
  // string
  details?: string;
  
  // The events this destination (for the provided deployment) has been processed
  // on the day as specified by updated_at.
  // number
  events_since_midnight?: number;
  
  // Timestamp when this status has been last updated
  // googleTypes.Timestamp
  updated_at?: googleTypes.Timestamp;
}

// HTTP header pair
export interface AuditLog_Header {
  // Key of the header
  // string
  key?: string;
  
  // Value of the header
  // string
  value?: string;
}

// Settings for a destination of type "https-post"
export interface AuditLog_HttpsPostSettings {
  // URL of the server to POST to.
  // The scheme of the URL must be "https".
  // string
  url?: string;
  
  // PEM encoded public key of the CA used to sign
  // the server TLS certificate.
  // This public key will be used to verify the
  // TLS connection provided by the server.
  // If this field is empty, a well known CA is expected.
  // string
  trusted_server_ca_pem?: string;
  
  // PEM encoded public key of the client certificate
  // used to make the request.
  // string
  client_certificate_pem?: string;
  
  // PEM encoded private key of the client certificate
  // used to make the request.
  // string
  client_key_pem?: string;
  
  // HTTP headers to add to the request.
  // It is allowed to pass multiple headers with the same key.
  // AuditLog_Header
  headers?: AuditLog_Header[];
  
  // Do not send audit events with these topics to this destination.
  // string
  excluded_topics?: string[];
  
  // The period this https-post destination will retry to deliver audit events.
  // Not specifying this value will default to 4 hours, the maximum allowed value is 24 hours.
  // When this time is exceeded for an event this event will be discarded, however newer events will still be delivered.
  // googleTypes.Duration
  retry_period?: googleTypes.Duration;
}

// AuditLogArchive collects files of audit events in a specific region,
// usually for a specific deployment.
export interface AuditLogArchive {
  // The ID of this resource.
  // This is a read-only value.
  // string
  id?: string;
  
  // URL of this resource
  // This is a read-only value.
  // string
  url?: string;
  
  // The creation timestamp of the resource
  // This is a read-only value.
  // googleTypes.Timestamp
  created_at?: googleTypes.Timestamp;
  
  // The deletion timestamp of the resource
  // This is a read-only value.
  // googleTypes.Timestamp
  deleted_at?: googleTypes.Timestamp;
  
  // Set when this resource is deleted.
  // This is a read-only value.
  // boolean
  is_deleted?: boolean;
  
  // Identifier of the auditlog that owns this audit log archive.
  // This is a read-only value.
  // string
  auditlog_id?: string;
  
  // If set, this archive is collecting audit events for a deployment with this ID.
  // Note that the deployment may have already been deleted.
  // string
  deployment_id?: string;
  
  // Last known size of this archive in bytes.
  // Note that this field is only update periodically.
  // This is a read-only value.
  // number
  size_in_bytes?: number;
  
  // The timestamp of the last modification of size_in_bytes.
  // This is a read-only value.
  // googleTypes.Timestamp
  size_in_bytes_changed_at?: googleTypes.Timestamp;
  
  // If set, this archive is collecting audit events for a deployment in the project with this ID.
  // This is a read-only value.
  // string
  project_id?: string;
}

// List of AuditLogArchive's.
export interface AuditLogArchiveList {
  // AuditLogArchive
  items?: AuditLogArchive[];
}

// Single audit log event
export interface AuditLogEvent {
  // When did the event happen
  // googleTypes.Timestamp
  timestamp?: googleTypes.Timestamp;
  
  // Topic of the event
  // string
  topic?: string;
  
  // ID of the project that the event happened in (if applicable)
  // string
  project_id?: string;
  
  // ID of the deployment that the event happened in (if applicable)
  // string
  deployment_id?: string;
  
  // ID of the server that the event happened in (if applicable)
  // string
  server_id?: string;
  
  // Instance ID of the server that the event happened in (if applicable)
  // string
  instance_id?: string;
  
  // Sequence number. Must be even increasing for (deployment_id, server_id, instance_id) pairs.
  // number
  sequence?: number;
  
  // ID of the user that caused the event
  // string
  user_id?: string;
  
  // Name of database the operation is in (if applicable)
  // string
  database?: string;
  
  // IP address of source of operation (if available)
  // string
  client_ip?: string;
  
  // Authentication details
  // string
  authentication?: string;
  
  // Free format text describing the event
  // string
  message?: string;
  
  // ID of the AuditLogArchive that contains this event (if applicable)
  // string
  auditlogarchive_id?: string;
}

// List of AuditLogEvent's.
export interface AuditLogEventList {
  // AuditLogEvent
  items?: AuditLogEvent[];
}

// List of AuditLog's.
export interface AuditLogList {
  // AuditLog
  items?: AuditLog[];
}

// Request arguments for DeleteAuditLogArchiveEvents.
export interface DeleteAuditLogArchiveEventsRequest {
  // Identifier of the audit log archive to delete events from.
  // string
  auditlogarchive_id?: string;
  
  // Remove events created before this timestamp.
  // Note that this timestamp will be rounded down to the nearest hour.
  // googleTypes.Timestamp
  to?: googleTypes.Timestamp;
}

// Request arguments for ListAuditLogEvents.
export interface GetAuditLogEventsRequest {
  // Identifier of the audit log to request events for.
  // string
  auditlog_id?: string;
  
  // If set, include only events from this AuditLogArchive.
  // string
  auditlogarchive_id?: string;
  
  // Request events created at or after this timestamp.
  // This is an optional field.
  // googleTypes.Timestamp
  from?: googleTypes.Timestamp;
  
  // Request events created before this timestamp.
  // This is an optional field.
  // googleTypes.Timestamp
  to?: googleTypes.Timestamp;
  
  // If non-empty, only request events with one of these topics.
  // string
  included_topics?: string[];
  
  // If non-empty, leave out events with one of these topics.
  // If a topic is specified in included_topics as well as excluded_topics,
  // events of that topic will not be included in the results.
  // string
  excluded_topics?: string[];
  
  // Limit the number of audit log events. Defaults to 0, meaning no limit.
  // number
  limit?: number;
}

// Request arguments for ListAuditLogArchives
export interface ListAuditLogArchivesRequest {
  // Identifier of the audit log to request the audit log archives for.
  // string
  auditlog_id?: string;
  
  // If set, the result includes all audit log archives, including those who set to deleted,
  // however are not removed from the system currently.
  // If not set, only audit log archives not indicated as deleted are returned.
  // boolean
  include_deleted?: boolean;
  
  // Optional common list options, the context_id is ignored
  // arangodb.cloud.common.v1.ListOptions
  options?: arangodb_cloud_common_v1_ListOptions;
}

// Request arguments for ListAuditLogs
export interface ListAuditLogsRequest {
  // Identifier of the organization to request the audit logs for.
  // string
  organization_id?: string;
  
  // If set, the result includes all audit logs, including those who set to deleted,
  // however are not removed from the system currently.
  // If not set, only audit logs not indicated as deleted are returned.
  // boolean
  include_deleted?: boolean;
  
  // Optional common list options, the context_id is ignored
  // arangodb.cloud.common.v1.ListOptions
  options?: arangodb_cloud_common_v1_ListOptions;
}

// AuditService is the API used to provide access to audit events.
export interface IAuditService {
  // Get the current API version of this service.
  // Required permissions:
  // - None
  GetAPIVersion: (req?: arangodb_cloud_common_v1_Empty) => Promise<arangodb_cloud_common_v1_Version>;
  
  // Fetch all audit logs in the organization identified by the given ID.
  // Required permissions:
  // - audit.auditlog.list on the organization identified by the given ID.
  ListAuditLogs: (req: ListAuditLogsRequest) => Promise<AuditLogList>;
  
  // Fetch a specific AuditLog identified by the given ID.
  // Required permissions:
  // - audit.auditlog.get on the audit log identified by the given ID.
  GetAuditLog: (req: arangodb_cloud_common_v1_IDOptions) => Promise<AuditLog>;
  
  // Create a new audit log.
  // Required permissions:
  // - audit.auditlog.create on the organization identified by the given ID.
  CreateAuditLog: (req: AuditLog) => Promise<AuditLog>;
  
  // Update an audit log.
  // Required permissions:
  // - audit.auditlog.update on the audit log identified by the given ID.
  UpdateAuditLog: (req: AuditLog) => Promise<AuditLog>;
  
  // Delete an audit log.
  // Note that audit logs are initially only marked for deleted.
  // Once all their resources are removed the audit log itself is deleted
  // and cannot be restored.
  // Note that deleting an AuditLog will detach it from all Projects that
  // it was attached to.
  // Required permissions:
  // - audit.auditlog.delete on the audit log.
  DeleteAuditLog: (req: arangodb_cloud_common_v1_IDOptions) => Promise<void>;
  
  // Fetch all audit log archives in the audit log identified by the given ID.
  // Required permissions:
  // - audit.auditlogarchive.list on the audit log identified by the given ID.
  ListAuditLogArchives: (req: ListAuditLogArchivesRequest) => Promise<AuditLogArchiveList>;
  
  // Fetch a specific AuditLogArchive identified by the given ID.
  // Required permissions:
  // - audit.auditlogarchive.get on the audit log archive identified by the given ID.
  GetAuditLogArchive: (req: arangodb_cloud_common_v1_IDOptions) => Promise<AuditLogArchive>;
  
  // Delete an audit log archive.
  // Note that this method will return a precondition-failed error
  // if there is a non-deleted deployment using this archive.
  // Note that audit log archives are initially only marked for deleted.
  // Once all their resources are removed the audit log archive itself is deleted
  // and cannot be restored.
  // Required permissions:
  // - audit.auditlogarchive.delete on the audit log archive.
  DeleteAuditLogArchive: (req: arangodb_cloud_common_v1_IDOptions) => Promise<void>;
  
  // Remove all audit events that match the given filter from the AuditLogArchive
  // identified by the given ID.
  // Note that this method will return a precondition-failed error
  // if there is no destination of type "cloud" in the AuditLog.
  // Required permissions:
  // - audit.auditlogevent.delete on the audit log archive identified by the given ID.
  DeleteAuditLogArchiveEvents: (req: DeleteAuditLogArchiveEventsRequest) => Promise<void>;
  
  // Fetch all audit events that match the given filter.
  // Note that this method will return a precondition-failed error
  // if there is no destination of type "cloud" in the AuditLog.
  // Required permissions:
  // - audit.auditlogevents.get on the audit log identified by the given ID.
  GetAuditLogEvents: (req: GetAuditLogEventsRequest, cb: (obj: IStreamMessage<AuditLogEventList>) => void) => Promise<IServerStream>;
  
  // Fetch the AuditLog that is attached to the project identified by the given ID.
  // If no AuditLog is attached to the project, a not-found error is returned.
  // Required permissions:
  // - audit.auditlogattachment.get on the project identified by the given ID.
  GetAuditLogAttachedToProject: (req: arangodb_cloud_common_v1_IDOptions) => Promise<AuditLog>;
  
  // Attach the AuditLog identified by given ID to the project identified with given ID.
  // This replaces any existing AuditLog attachment for the project.
  // Required permissions:
  // - audit.auditlogattachment.create on the project identified by the given ID.
  AttachProjectToAuditLog: (req: AttachProjectToAuditLogRequest) => Promise<void>;
  
  // Detach the current AuditLog from the project identified with given ID.
  // After a detachment, no audit events in the context of the project will be sent
  // to an AuditLog.
  // Required permissions:
  // - audit.auditlogattachment.delete on the project identified by the given ID.
  DetachProjectFromAuditLog: (req: arangodb_cloud_common_v1_IDOptions) => Promise<void>;
}

// AuditService is the API used to provide access to audit events.
export class AuditService implements IAuditService {
  // Get the current API version of this service.
  // Required permissions:
  // - None
  async GetAPIVersion(req?: arangodb_cloud_common_v1_Empty): Promise<arangodb_cloud_common_v1_Version> {
    const path = `/api/audit/v1/api-version`;
    const url = path + api.queryString(req, []);
    return api.get(url, undefined);
  }
  
  // Fetch all audit logs in the organization identified by the given ID.
  // Required permissions:
  // - audit.auditlog.list on the organization identified by the given ID.
  async ListAuditLogs(req: ListAuditLogsRequest): Promise<AuditLogList> {
    const path = `/api/audit/v1/organizations/${encodeURIComponent(req.organization_id || '')}/auditlogs`;
    const url = path + api.queryString(req, [`organization_id`]);
    return api.get(url, undefined);
  }
  
  // Fetch a specific AuditLog identified by the given ID.
  // Required permissions:
  // - audit.auditlog.get on the audit log identified by the given ID.
  async GetAuditLog(req: arangodb_cloud_common_v1_IDOptions): Promise<AuditLog> {
    const path = `/api/audit/v1/auditlogs/${encodeURIComponent(req.id || '')}`;
    const url = path + api.queryString(req, [`id`]);
    return api.get(url, undefined);
  }
  
  // Create a new audit log.
  // Required permissions:
  // - audit.auditlog.create on the organization identified by the given ID.
  async CreateAuditLog(req: AuditLog): Promise<AuditLog> {
    const url = `/api/audit/v1/organizations/${encodeURIComponent(req.organization_id || '')}/auditlogs`;
    return api.post(url, req);
  }
  
  // Update an audit log.
  // Required permissions:
  // - audit.auditlog.update on the audit log identified by the given ID.
  async UpdateAuditLog(req: AuditLog): Promise<AuditLog> {
    const url = `/api/audit/v1/auditlogs/${encodeURIComponent(req.id || '')}`;
    return api.patch(url, req);
  }
  
  // Delete an audit log.
  // Note that audit logs are initially only marked for deleted.
  // Once all their resources are removed the audit log itself is deleted
  // and cannot be restored.
  // Note that deleting an AuditLog will detach it from all Projects that
  // it was attached to.
  // Required permissions:
  // - audit.auditlog.delete on the audit log.
  async DeleteAuditLog(req: arangodb_cloud_common_v1_IDOptions): Promise<void> {
    const path = `/api/audit/v1/auditlogs/${encodeURIComponent(req.id || '')}`;
    const url = path + api.queryString(req, [`id`]);
    return api.delete(url, undefined);
  }
  
  // Fetch all audit log archives in the audit log identified by the given ID.
  // Required permissions:
  // - audit.auditlogarchive.list on the audit log identified by the given ID.
  async ListAuditLogArchives(req: ListAuditLogArchivesRequest): Promise<AuditLogArchiveList> {
    const path = `/api/audit/v1/auditlogs/${encodeURIComponent(req.auditlog_id || '')}/auditlogarchives`;
    const url = path + api.queryString(req, [`auditlog_id`]);
    return api.get(url, undefined);
  }
  
  // Fetch a specific AuditLogArchive identified by the given ID.
  // Required permissions:
  // - audit.auditlogarchive.get on the audit log archive identified by the given ID.
  async GetAuditLogArchive(req: arangodb_cloud_common_v1_IDOptions): Promise<AuditLogArchive> {
    const path = `/api/audit/v1/auditlogarchives/${encodeURIComponent(req.id || '')}`;
    const url = path + api.queryString(req, [`id`]);
    return api.get(url, undefined);
  }
  
  // Delete an audit log archive.
  // Note that this method will return a precondition-failed error
  // if there is a non-deleted deployment using this archive.
  // Note that audit log archives are initially only marked for deleted.
  // Once all their resources are removed the audit log archive itself is deleted
  // and cannot be restored.
  // Required permissions:
  // - audit.auditlogarchive.delete on the audit log archive.
  async DeleteAuditLogArchive(req: arangodb_cloud_common_v1_IDOptions): Promise<void> {
    const path = `/api/audit/v1/auditlogarchives/${encodeURIComponent(req.id || '')}`;
    const url = path + api.queryString(req, [`id`]);
    return api.delete(url, undefined);
  }
  
  // Remove all audit events that match the given filter from the AuditLogArchive
  // identified by the given ID.
  // Note that this method will return a precondition-failed error
  // if there is no destination of type "cloud" in the AuditLog.
  // Required permissions:
  // - audit.auditlogevent.delete on the audit log archive identified by the given ID.
  async DeleteAuditLogArchiveEvents(req: DeleteAuditLogArchiveEventsRequest): Promise<void> {
    const url = `/api/audit/v1/auditlogarchives/${encodeURIComponent(req.auditlogarchive_id || '')}/events`;
    return api.delete(url, req);
  }
  
  // Fetch all audit events that match the given filter.
  // Note that this method will return a precondition-failed error
  // if there is no destination of type "cloud" in the AuditLog.
  // Required permissions:
  // - audit.auditlogevents.get on the audit log identified by the given ID.
  async GetAuditLogEvents(req: GetAuditLogEventsRequest, cb: (obj: IStreamMessage<AuditLogEventList>) => void): Promise<IServerStream> {
    const url = `/api/audit/v1/auditlogs/${encodeURIComponent(req.auditlog_id || '')}/events`;
    return api.server_stream(url, "POST", req, cb);
  }
  
  // Fetch the AuditLog that is attached to the project identified by the given ID.
  // If no AuditLog is attached to the project, a not-found error is returned.
  // Required permissions:
  // - audit.auditlogattachment.get on the project identified by the given ID.
  async GetAuditLogAttachedToProject(req: arangodb_cloud_common_v1_IDOptions): Promise<AuditLog> {
    const path = `/api/audit/v1/projects/${encodeURIComponent(req.id || '')}/auditlog`;
    const url = path + api.queryString(req, [`id`]);
    return api.get(url, undefined);
  }
  
  // Attach the AuditLog identified by given ID to the project identified with given ID.
  // This replaces any existing AuditLog attachment for the project.
  // Required permissions:
  // - audit.auditlogattachment.create on the project identified by the given ID.
  async AttachProjectToAuditLog(req: AttachProjectToAuditLogRequest): Promise<void> {
    const url = `/api/audit/v1/projects/${encodeURIComponent(req.project_id || '')}/auditlogs/${encodeURIComponent(req.auditlog_id || '')}/attach`;
    return api.post(url, req);
  }
  
  // Detach the current AuditLog from the project identified with given ID.
  // After a detachment, no audit events in the context of the project will be sent
  // to an AuditLog.
  // Required permissions:
  // - audit.auditlogattachment.delete on the project identified by the given ID.
  async DetachProjectFromAuditLog(req: arangodb_cloud_common_v1_IDOptions): Promise<void> {
    const path = `/api/audit/v1/projects/${encodeURIComponent(req.id || '')}/auditlogs`;
    const url = path + api.queryString(req, [`id`]);
    return api.delete(url, undefined);
  }
}
