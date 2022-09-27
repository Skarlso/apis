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
import { DataVolumeInfo as arangodb_cloud_data_v1_DataVolumeInfo } from '../../data/v1/data'

// File: notebook/v1/notebook.proto
// Package: arangodb.cloud.notebook.v1

// Requet for listing notebook models.
export interface ListNotebookModelRequest {
  // ID of the deployment that the notebook belongs to.
  // string
  deployment_id?: string;
}

// Request for listing notebooks.
export interface ListNotebookRequest {
  // List notebooks for this deployment ID.
  // string
  deployment_id?: string;
  
  // Optional common list options, the context_id is ignored
  // arangodb.cloud.common.v1.ListOptions
  options?: arangodb_cloud_common_v1_ListOptions;
}

// Model specification for the notebook.
export interface ModelSpec {
  // Type of model being used.
  // This should refer to the `id` of a `NotebookModel` object.
  // string
  notebook_model_id?: string;
  
  // Disk size allocated to the notebook instance (in GiB).
  // number
  disk_size?: number;
}

// Contains the specification and status of a given notebook instance.
export interface Notebook {
  // ID of the Notebook.
  // This is a read-only value.
  // string
  id?: string;
  
  // ID of the Deployment this notebook belongs to.
  // After creation, this value cannot be changed.
  // string
  deployment_id?: string;
  
  // URL of the Notebook.
  // This is a read-only value.
  // string
  url?: string;
  
  // Name of the notebook.
  // string
  name?: string;
  
  // Description of the notebook.
  // string
  description?: string;
  
  // Indicates that this notebook is paused.
  // Use the notebook.PauseNotebook method to pause, and notebook.ResumeNotebook to resume (unpause).
  // This is a read-only value.
  // boolean
  is_paused?: boolean;
  
  // The last paused timestamp of the notebook.
  // This is the timestamp that is_paused is transitioned from unset to set.
  // This is a read-only value.
  // googleTypes.Timestamp
  last_paused_at?: googleTypes.Timestamp;
  
  // The last resumed timestamp of the notebook.
  // This is the timestamp that is_paused is transitioned from set to unset.
  // This is a read-only value.
  // googleTypes.Timestamp
  last_resumed_at?: googleTypes.Timestamp;
  
  // Identifier of the user that created this notebook.
  // This is a read-only value.
  // string
  created_by_id?: string;
  
  // Time at which this notebook was created.
  // This is a read-only value.
  // googleTypes.Timestamp
  created_at?: googleTypes.Timestamp;
  
  // Model specification for the notebook.
  // ModelSpec
  model?: ModelSpec;
  
  // Set when this notebook is deleted.
  // This is a read-only value.
  // boolean
  is_deleted?: boolean;
  
  // The deletion timestamp of the deployment
  // This is a read-only value.
  // googleTypes.Timestamp
  deleted_at?: googleTypes.Timestamp;
  
  // Status of the notebook.
  // This is a read-only value.
  // Status
  status?: Status;
}

// List of Notebooks.
export interface NotebookList {
  // Notebook
  items?: Notebook[];
}

// Specifies the resource configuration for a notebook.
export interface NotebookModel {
  // System identifier of the model.
  // string
  id?: string;
  
  // Human readable name of the model.
  // string
  name?: string;
  
  // CPU units allocated to the notebook.
  // 1 CPU unit equals 1 physical / virtual CPU.
  // number
  cpu?: number;
  
  // Memory allocated to the notebook in 'GiB'.
  // number
  memory?: number;
  
  // Maximum amount of disk space (in GiB) to available to the notebook.
  // number
  max_disk_size?: number;
  
  // Minimum amount of disk space (in GiB) to available to the notebook.
  // number
  min_disk_size?: number;
}

// List of notebook models.
export interface NotebookModelList {
  // NotebookModel
  items?: NotebookModel[];
}

// Status of the notebook.
// Note: all fields in this block are read-only.
export interface Status {
  // Where the notebook is in its lifecycle at any given time.
  // Should contain only one of the following values:
  // "Initialising"   - Notebook is initialising.
  // "Running"        - Notebook is running.
  // "Hibernating"    - Notebook is moving to a hibernated state.
  // "Hibernated"     - Notebook has moved to a hibernated state.
  // "Error"          - Notebook is in an errored state. Additional information can be obtained from `message` field.
  // string
  phase?: string;
  
  // Supporting information about the notebook phase - such as error messages in case of failures.
  // string
  message?: string;
  
  // The timestamp of when the status of the notebook was last updated.
  // googleTypes.Timestamp
  last_updated_at?: googleTypes.Timestamp;
  
  // Endpoint URL used to reach the notebook
  // This value will be empty during the creation of the notebook.
  // string
  endpoint?: string;
  
  // Resource usage of the notebook.
  // Status_Usage
  usage?: Status_Usage;
}

// Resource usage of the notebook.
export interface Status_Usage {
  // Information about the data volume used to store the data
  // arangodb.cloud.data.v1.DataVolumeInfo
  data_volume_info?: arangodb_cloud_data_v1_DataVolumeInfo;
  
  // Last known memory usage in bytes
  // number
  last_memory_usage?: number;
  
  // Last known CPU usage in vCPU units
  // number
  last_cpu_usage?: number;
  
  // Last known memory limit in bytes
  // number
  last_memory_limit?: number;
  
  // Last known CPU limit in vCPU units
  // number
  last_cpu_limit?: number;
}

// Notebook service is used to manage notebooks.
export interface INotebookService {
  // Get the current API version of this service.
  // Required permissions:
  // - None
  GetAPIVersion: (req?: arangodb_cloud_common_v1_Empty) => Promise<arangodb_cloud_common_v1_Version>;
  
  // Get a Notebook using its ID.
  // Required permissions:
  // - notebook.notebook.get on the notebook
  GetNotebook: (req: arangodb_cloud_common_v1_IDOptions) => Promise<Notebook>;
  
  // Create a new Notebook by specifying its configuration.
  // Required permissions:
  // - notebook.notebook.create
  CreateNotebook: (req: Notebook) => Promise<Notebook>;
  
  // Delete an existing notebook using its ID.
  // This initially marks the notebook for deletion. It is deleted from CP once all its child resources are deleted.
  // Required permissions:
  // - notebook.notebook.delete on the notebook
  DeleteNotebook: (req: arangodb_cloud_common_v1_IDOptions) => Promise<void>;
  
  // Update an existing notebook. Returns updated Notebook.
  // Required permissions:
  // - notebook.notebook.update on the notebook
  UpdateNotebook: (req: Notebook) => Promise<void>;
  
  // List all notebooks for the deployments identified by the given deployment identifier.
  // Required permissions:
  // - notebook.notebook.list on the deployment
  ListNotebooks: (req: ListNotebookRequest) => Promise<NotebookList>;
  
  // List all notebook models available in the context of the given deployment.
  // Required permissions:
  // - notebook.model.list
  ListNotebookModels: (req: ListNotebookModelRequest) => Promise<NotebookModelList>;
  
  // Pauses a running notebook identified by the given id.
  // Required permissions:
  // - notebook.notebook.pause on the notebook
  PauseNotebook: (req: arangodb_cloud_common_v1_IDOptions) => Promise<void>;
  
  // Resumes a paused notebook identified by the given id.
  // When ResumeNotebook is invoked on a notebook that has is_paused not set, an PreconditionFailed error is returned.
  // Required permissions:
  // - notebook.notebook.resume on the notebook
  ResumeNotebook: (req: arangodb_cloud_common_v1_IDOptions) => Promise<void>;
}

// Notebook service is used to manage notebooks.
export class NotebookService implements INotebookService {
  // Get the current API version of this service.
  // Required permissions:
  // - None
  async GetAPIVersion(req?: arangodb_cloud_common_v1_Empty): Promise<arangodb_cloud_common_v1_Version> {
    const path = `/api/notebook/v1/api-version`;
    const url = path + api.queryString(req, []);
    return api.get(url, undefined);
  }
  
  // Get a Notebook using its ID.
  // Required permissions:
  // - notebook.notebook.get on the notebook
  async GetNotebook(req: arangodb_cloud_common_v1_IDOptions): Promise<Notebook> {
    const path = `/api/notebook/v1/notebook/${encodeURIComponent(req.id || '')}`;
    const url = path + api.queryString(req, [`id`]);
    return api.get(url, undefined);
  }
  
  // Create a new Notebook by specifying its configuration.
  // Required permissions:
  // - notebook.notebook.create
  async CreateNotebook(req: Notebook): Promise<Notebook> {
    const url = `/api/notebook/v1/notebook`;
    return api.put(url, req);
  }
  
  // Delete an existing notebook using its ID.
  // This initially marks the notebook for deletion. It is deleted from CP once all its child resources are deleted.
  // Required permissions:
  // - notebook.notebook.delete on the notebook
  async DeleteNotebook(req: arangodb_cloud_common_v1_IDOptions): Promise<void> {
    const path = `/api/notebook/v1/notebook/${encodeURIComponent(req.id || '')}`;
    const url = path + api.queryString(req, [`id`]);
    return api.delete(url, undefined);
  }
  
  // Update an existing notebook. Returns updated Notebook.
  // Required permissions:
  // - notebook.notebook.update on the notebook
  async UpdateNotebook(req: Notebook): Promise<void> {
    const url = `/api/notebook/v1/notebook/${encodeURIComponent(req.id || '')}`;
    return api.post(url, req);
  }
  
  // List all notebooks for the deployments identified by the given deployment identifier.
  // Required permissions:
  // - notebook.notebook.list on the deployment
  async ListNotebooks(req: ListNotebookRequest): Promise<NotebookList> {
    const url = `/api/notebook/v1/notebooks`;
    return api.post(url, req);
  }
  
  // List all notebook models available in the context of the given deployment.
  // Required permissions:
  // - notebook.model.list
  async ListNotebookModels(req: ListNotebookModelRequest): Promise<NotebookModelList> {
    const url = `/api/notebook/v1/models`;
    return api.post(url, req);
  }
  
  // Pauses a running notebook identified by the given id.
  // Required permissions:
  // - notebook.notebook.pause on the notebook
  async PauseNotebook(req: arangodb_cloud_common_v1_IDOptions): Promise<void> {
    const path = `/api/notebook/v1/${encodeURIComponent(req.id || '')}/pause`;
    const url = path + api.queryString(req, [`id`]);
    return api.post(url, undefined);
  }
  
  // Resumes a paused notebook identified by the given id.
  // When ResumeNotebook is invoked on a notebook that has is_paused not set, an PreconditionFailed error is returned.
  // Required permissions:
  // - notebook.notebook.resume on the notebook
  async ResumeNotebook(req: arangodb_cloud_common_v1_IDOptions): Promise<void> {
    const path = `/api/notebook/v1/${encodeURIComponent(req.id || '')}/resume`;
    const url = path + api.queryString(req, [`id`]);
    return api.post(url, undefined);
  }
}
