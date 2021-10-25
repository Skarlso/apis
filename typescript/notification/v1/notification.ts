//
// This file is AUTO-GENERATED by protoc-gen-ts.
// Do not modify it manually.
///
import api from '../../api'
import * as googleTypes from '../../googleTypes'
import { Empty as arangodb_cloud_common_v1_Empty } from '../../common/v1/common'
import { ListOptions as arangodb_cloud_common_v1_ListOptions } from '../../common/v1/common'
import { Version as arangodb_cloud_common_v1_Version } from '../../common/v1/common'

// File: notification/v1/notification.proto
// Package: arangodb.cloud.prepaid.v1

// ListDeploymentNotificationsRequest is used to request a list of Notifications for given deployment.
export interface ListDeploymentNotificationsRequest {
  // Identifier of the deployment to get a list of notifications for.
  // string
  deployment_id?: string;
  
  // Common listing options.
  // context_id is a don't care.
  // arangodb.cloud.common.v1.ListOptions
  options?: arangodb_cloud_common_v1_ListOptions;
  
  // Get only read notifications
  // boolean
  read_only?: boolean;
  
  // Get only unread notifications
  // boolean
  unread_only?: boolean;
}

// MarkNotificationRequest is used to mark/unmark notifications for given deployment
export interface MarkNotificationRequest {
  // Identifier of notification that has to be marked
  // string
  notification_id?: string;
}

// Notification contains all attributes of a notification.
// All fields in this message are read-only.
export interface Notification {
  // System identifier of the notification
  // string
  id?: string;
  
  // Type of notification.
  // Will be one of following value: "email", "sms".
  // string
  type?: string;
  
  // The creation timestamp of the prepaid deployment.
  // googleTypes.Timestamp
  created_at?: googleTypes.Timestamp;
  
  // Title of notification.
  // string
  title?: string;
  
  // Recipients of notification.
  // email addresses, phone numbers etc
  // string
  recipients?: string[];
  
  // Content of notification.
  // NotificationContent
  content?: NotificationContent[];
  
  // If the message is not markes as read this field is empty
  // Notification_ReadAt
  read_at?: Notification_ReadAt;
  
  // If set this message was marked as read
  // boolean
  is_read?: boolean;
}

// Details about notification read.
// All fields in this message are read-only.
export interface Notification_ReadAt {
  // When the notification was marked as read
  // googleTypes.Timestamp
  read_at?: googleTypes.Timestamp;
  
  // Identifier of user who marked message as read
  // If set the notififaction was read
  // string
  read_by_id?: string;
}

// NotificationContent holds content and it's mime type.
// All fields in this message are read-only.
export interface NotificationContent {
  // MIME Type of notification.
  // string
  content_type?: string;
  
  // Content of notification.
  // string
  content?: string;
}

// NotificationList contains a list of Notification items.
export interface NotificationList {
  // Notification items.
  // Notification
  items?: Notification[];
}

// NotificationService is the API used to interact with deployment notifications.
export interface INotificationService {
  // Get the current API version of this service.
  // Required permissions:
  // - None
  GetAPIVersion: (req?: arangodb_cloud_common_v1_Empty) => Promise<arangodb_cloud_common_v1_Version>;
  
  // Fetch all notifications related to given deployment.
  // Required permissions:
  // - notification.deployment-notification.list on the deployment identified by given deployment_id
  ListDeploymentNotifications: (req: ListDeploymentNotificationsRequest) => Promise<NotificationList>;
  
  // Mark notification related to given deployment as read.
  // Required permissions:
  // - notification.deployment-notification.mark-as-read on the deployment identified by given deployment_id
  MarkNotificationAsRead: (req: MarkNotificationRequest) => Promise<void>;
  
  // Mark notification related to given deployment as unread.
  // Required permissions:
  // - notification.deployment-notification.mark-as-unread on the deployment identified by given deployment_id
  MarkNotificationAsUnread: (req: MarkNotificationRequest) => Promise<void>;
}

// NotificationService is the API used to interact with deployment notifications.
export class NotificationService implements INotificationService {
  // Get the current API version of this service.
  // Required permissions:
  // - None
  async GetAPIVersion(req?: arangodb_cloud_common_v1_Empty): Promise<arangodb_cloud_common_v1_Version> {
    const path = `/api/notification/v1/api-version`;
    const url = path + api.queryString(req, []);
    return api.get(url, undefined);
  }
  
  // Fetch all notifications related to given deployment.
  // Required permissions:
  // - notification.deployment-notification.list on the deployment identified by given deployment_id
  async ListDeploymentNotifications(req: ListDeploymentNotificationsRequest): Promise<NotificationList> {
    const url = `/api/notification/v1/deployment/${encodeURIComponent(req.deployment_id || '')}/notifications`;
    return api.post(url, req);
  }
  
  // Mark notification related to given deployment as read.
  // Required permissions:
  // - notification.deployment-notification.mark-as-read on the deployment identified by given deployment_id
  async MarkNotificationAsRead(req: MarkNotificationRequest): Promise<void> {
    const url = `/api/notification/v1/notifications/${encodeURIComponent(req.notification_id || '')}/mark/read`;
    return api.post(url, req);
  }
  
  // Mark notification related to given deployment as unread.
  // Required permissions:
  // - notification.deployment-notification.mark-as-unread on the deployment identified by given deployment_id
  async MarkNotificationAsUnread(req: MarkNotificationRequest): Promise<void> {
    const url = `/api/notification/v1/notifications/${encodeURIComponent(req.notification_id || '')}/mark/unread`;
    return api.post(url, req);
  }
}
