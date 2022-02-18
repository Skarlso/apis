//
// This file is AUTO-GENERATED by protoc-gen-ts.
// Do not modify it manually.
///
import api from '../../api'
import * as googleTypes from '../../googleTypes'
import { Empty as arangodb_cloud_common_v1_Empty } from '../../common/v1/common'
import { IDOptions as arangodb_cloud_common_v1_IDOptions } from '../../common/v1/common'
import { ListOptions as arangodb_cloud_common_v1_ListOptions } from '../../common/v1/common'
import { URLOptions as arangodb_cloud_common_v1_URLOptions } from '../../common/v1/common'
import { Version as arangodb_cloud_common_v1_Version } from '../../common/v1/common'
import { YesOrNo as arangodb_cloud_common_v1_YesOrNo } from '../../common/v1/common'

// File: iam/v1/iam.proto
// Package: arangodb.cloud.iam.v1

// API Keys are authentication "keys" intended to be used for scripting.
export interface APIKey {
  // Identifier of this key
  // string
  id?: string;
  
  // URL of this key.
  // string
  url?: string;
  
  // User represented by this key
  // string
  user_id?: string;
  
  // If set, this key only grants access to this organization.
  // string
  organization_id?: string;
  
  // If set, this key only grants access to read-only API's (List..., Get...)
  // boolean
  is_readonly?: boolean;
  
  // The creation timestamp of the key
  // googleTypes.Timestamp
  created_at?: googleTypes.Timestamp;
  
  // The expiration timestamp of the key
  // googleTypes.Timestamp
  expires_at?: googleTypes.Timestamp;
  
  // Set when this key is expired.
  // boolean
  is_expired?: boolean;
  
  // The revocation timestamp of the key (if any)
  // googleTypes.Timestamp
  revoked_at?: googleTypes.Timestamp;
  
  // Set when this key is explicitly revoked.
  // boolean
  is_revoked?: boolean;
}

// List of APIKey's
export interface APIKeyList {
  // APIKey
  items?: APIKey[];
}

// API key secrets are used once to inform the users of the secret
// for an API key.
export interface APIKeySecret {
  // ID of the API key
  // string
  id?: string;
  
  // Secret of the API key
  // string
  secret?: string;
}

// Request arguments for AuthenticateAPIKey
export interface AuthenticateAPIKeyRequest {
  // API key id
  // string
  id?: string;
  
  // Secret of the API key
  // string
  secret?: string;
  
  // Life time of the token.
  // If set, then this TTL is used reduce the default TTL
  // of an authentication token. It cannot be used to increase the default
  // lifetime of a token.
  // googleTypes.Duration
  time_to_live?: googleTypes.Duration;
}

// Response for AuthenticateAPIKey
export interface AuthenticateAPIKeyResponse {
  // Bearer token
  // string
  token?: string;
  
  // Actual life time of the token.
  // googleTypes.Duration
  time_to_live?: googleTypes.Duration;
}

// Request arguments for CreateAPIKey.
export interface CreateAPIKeyRequest {
  // If set, the created key only grants access to this organization.
  // string
  organization_id?: string;
  
  // If set, the created key only grants access to read-only API's (List..., Get...).
  // If not set, the created key grants access to all API's (that the user has access to).
  // boolean
  readonly?: boolean;
  
  // Duration between now and the expiration date of the created key.
  // A value of 0 means that the API key will not expire.
  // You can still use RevokeAPIKey to revoke such API keys.
  // googleTypes.Duration
  time_to_live?: googleTypes.Duration;
}

// Request arguments for GetMultipleEffectivePermissions
export interface GetMultipleEffectivePermissionsRequest {
  // URLs of the resources to fetch.
  // string
  urls?: string[];
}

// Group of user accounts.
export interface Group {
  // System identifier of the group.
  // This is a read-only value.
  // string
  id?: string;
  
  // Identifier of the organization that owns this group.
  // string
  organization_id?: string;
  
  // Name of the group
  // string
  name?: string;
  
  // Description of the group
  // string
  description?: string;
  
  // The creation timestamp of the group
  // googleTypes.Timestamp
  created_at?: googleTypes.Timestamp;
  
  // The deletion timestamp of the group
  // googleTypes.Timestamp
  deleted_at?: googleTypes.Timestamp;
  
  // Set when this organization is deleted.
  // This is a read-only value.
  // boolean
  is_deleted?: boolean;
  
  // URL of this resource
  // This is a read-only value and cannot be initialized.
  // string
  url?: string;
  
  // Set if this group is virtual and managed by the system.
  // This is a read-only value.
  // boolean
  is_virtual?: boolean;
}

// List of groups.
export interface GroupList {
  // Group
  items?: Group[];
}

// List of group members (user ID's)
export interface GroupMemberList {
  // List of ID's of users that are member of the group.
  // string
  items?: string[];
  
  // List of users that are member of the group.
  // User
  users?: User[];
}

// Request arguments for Add/DeleteGroupMembers.
export interface GroupMembersRequest {
  // ID of the group to add/remove members to/from.
  // string
  group_id?: string;
  
  // ID's of users to add/remove to/from the group.
  // string
  user_ids?: string[];
}

// Request arguments for HasPermissionsRequest.
export interface HasPermissionsRequest {
  // URL of the resource to query permissions for.
  // string
  url?: string;
  
  // The list of permissions that are required.
  // string
  permissions?: string[];
}

// Request arguments for IsMemberOfGroup.
export interface IsMemberOfGroupRequest {
  // Identifier of the user
  // string
  user_id?: string;
  
  // Identifier of the group
  // string
  group_id?: string;
}

// Multiple Lists of permissions.
export interface MultiplePermissionLists {
  // PermissionList
  items?: PermissionList[];
}

// List of permissions.
export interface PermissionList {
  // The permissions
  // string
  items?: string[];
  
  // URL of the resource (filled out when GetMultipleEffectivePermissions was called).
  // string
  url?: string;
}

// Policy bindings members to roles for access to a resource.
export interface Policy {
  // URL of the resource to which this policy applies.
  // string
  resource_url?: string;
  
  // Role bindings to apply to the resource.
  // RoleBinding
  bindings?: RoleBinding[];
}

// Request arguments for RenewAPIKeyToken.
export interface RenewAPIKeyTokenRequest {
  // Bearer token
  // string
  token?: string;
  
  // Extended life time of the token.
  // By default, a renewed token will have a default lifetime from the moment
  // of the renew call.
  // If this field is set, then this TTL is used reduce the default TTL
  // of the renewed token. It cannot be used to increase the default
  // lifetime of the renewed token.
  // googleTypes.Duration
  time_to_live?: googleTypes.Duration;
}

// Response for RenewAPIKeyToken.
export interface RenewAPIKeyTokenResponse {
  // Actual life time of the token.
  // googleTypes.Duration
  time_to_live?: googleTypes.Duration;
}

// Request arguments for RevokeAPIKeyToken.
export interface RevokeAPIKeyTokenRequest {
  // Bearer token
  // string
  token?: string;
}

// A role is a list of permissions.
// Roles can be bound to resources for members.
export interface Role {
  // System identifier of the role.
  // This is a read-only value.
  // string
  id?: string;
  
  // Identifier of the organization that owns this role.
  // This value is undefined for predefined roles.
  // string
  organization_id?: string;
  
  // Name of the role
  // string
  name?: string;
  
  // Description of the role
  // string
  description?: string;
  
  // Permissions to grant when this role is bound.
  // string
  permissions?: string[];
  
  // Set if this role is predefined.
  // This is a read-only value.
  // boolean
  is_predefined?: boolean;
  
  // The creation timestamp of the role
  // googleTypes.Timestamp
  created_at?: googleTypes.Timestamp;
  
  // The deletion timestamp of the role
  // googleTypes.Timestamp
  deleted_at?: googleTypes.Timestamp;
  
  // Set when this organization is deleted.
  // This is a read-only value.
  // boolean
  is_deleted?: boolean;
  
  // URL of this resource
  // This is a read-only value and cannot be initialized.
  // string
  url?: string;
}

// RoleBinding binds a Role to a member.
export interface RoleBinding {
  // System identifier of the role-binding.
  // This is a read-only value.
  // string
  id?: string;
  
  // Identifier of the member to bind a role to.
  // Member ID is formatted as:
  // - user:<user_id>
  // - group:<group_id>
  // string
  member_id?: string;
  
  // Identifier of the Role to grant to member
  // string
  role_id?: string;
  
  // If set, this this role-binding cannot be deleted
  // This is a read-only value.
  // boolean
  delete_not_allowed?: boolean;
}

// Request arguments for Add/DeleteRoleBindings.
export interface RoleBindingsRequest {
  // URL of the resource to add/remove policy binding to/from.
  // string
  resource_url?: string;
  
  // Role bindings to add/remove to the policy.
  // RoleBinding
  bindings?: RoleBinding[];
}

// List of roles.
export interface RoleList {
  // Role
  items?: Role[];
}

// User represents an actual person.
export interface User {
  // Identifier of the user.
  // This is a read-only value.
  // string
  id?: string;
  
  // Primary email address of the user.
  // All emails send to this user will use this address.
  // This is a read-only value.
  // string
  email?: string;
  
  // Name of the user.
  // This may be empty if not filled out by the user.
  // string
  name?: string;
  
  // Given name of the user.
  // This may be empty if not filled out by the user.
  // string
  given_name?: string;
  
  // Family name of the user.
  // This may be empty if not filled out by the user.
  // string
  family_name?: string;
  
  // The creation timestamp of the user.
  // This is a read-only value.
  // googleTypes.Timestamp
  created_at?: googleTypes.Timestamp;
  
  // Additional email addresses of the user.
  // This will be filled in when the authentication provided
  // knows multiple email addresses for the user.
  // This is a read-only value.
  // string
  additional_emails?: string[];
  
  // Mobile phone number of the user.
  // This value must be unique globally.
  // This field will not be filled, unless:
  // - The currently authenticated user is this user
  // - The currently authenticated user has `iam.user.get-personal-data` permission
  // on the organization that user is a member of.
  // This value can only be changed to a non-empty value.
  // If changed, the new number has to be verified again.
  // string
  mobile_phone?: string;
  
  // Set when the mobile phone number has been successfully verified.
  // This is a read-only value.
  // boolean
  mobile_phone_verified?: boolean;
  
  // Company name of the user
  // This may be empty if not filled out by the user.
  // string
  company_name?: string;
  
  // If set, this user is denied access to the dashboard.
  // This is a read-only value.
  // boolean
  dashboard_access_denied?: boolean;
  
  // If set, this field describes the reason why this user is denied access to the dashboard.
  // This is a read-only value.
  // string
  dashboard_access_denied_reason?: string;
  
  // If set, this user is currently being authenticated using an API key (identified by this ID)
  // string
  apikey_id?: string;
  
  // If set, contains Slack name of this user in the arangodb-community slack.
  // string
  slack_name?: string;
  
  // The timestamp of the last login of the user.
  // This is a read-only value.
  // googleTypes.Timestamp
  last_login_at?: googleTypes.Timestamp;
  
  // If set, contains IP address from which the user last logged in.
  // string
  last_ip?: string;
  
  // Defines if a user's mobile phone number needs verification based on email root domain address.
  // boolean
  mobile_phone_needs_verification?: boolean;
}

// Request arguments for VerifyUserMobilePhone
export interface VerifyUserMobilePhoneRequest {
  // Code that was send to the mobile phone number.
  // string
  code?: string;
}

// IAMService is the API used to configure IAM objects.
export interface IIAMService {
  // Get the current API version of this service.
  // Required permissions:
  // - None
  GetAPIVersion: (req?: arangodb_cloud_common_v1_Empty) => Promise<arangodb_cloud_common_v1_Version>;
  
  // Fetch all available information of the currently authenticated user.
  // Required permissions:
  // - None
  GetThisUser: (req?: arangodb_cloud_common_v1_Empty) => Promise<User>;
  
  // Fetch all available information of the user identified by the given ID.
  // Required permissions:
  // - resourcemanager.organization.get on one of the organizations that the requested user and authenticated user are both a member of
  GetUser: (req: arangodb_cloud_common_v1_IDOptions) => Promise<User>;
  
  // Update a user
  // Required permissions:
  // - None if the given user is the authenticated user.
  // or
  // - resourcemanager.organization.get on one of the organizations that the requested user and authenticated user are both a member of and
  // - iam.user.update on organization on one of the organizations that the requested user and authenticated user are both a member of
  UpdateUser: (req: User) => Promise<User>;
  
  // Verify the mobile phone number of a user, by provided the unique
  // code that was send to the number.
  // If the code is valid an empty result is returned, otherwise an InvalidArgument error is returned.
  // The authenticated user is always the subject of this request.
  // Required permissions:
  // - None (since the subject is always the authenticated user).
  VerifyUserMobilePhone: (req: VerifyUserMobilePhoneRequest) => Promise<void>;
  
  // Resend a verification code to the mobile phone number listed for the
  // authenticated user.
  // Required permissions:
  // - None (since the subject is always the authenticated user).
  ResendUserMobilePhoneVerification: (req?: arangodb_cloud_common_v1_Empty) => Promise<void>;
  
  // Fetch all groups of the organization identified by the given context ID.
  // Required permissions:
  // - iam.group.list on organization identified by given context ID.
  ListGroups: (req: arangodb_cloud_common_v1_ListOptions) => Promise<GroupList>;
  
  // Fetch a group by its id.
  // Required permissions:
  // - iam.group.get on organization that owns the group
  GetGroup: (req: arangodb_cloud_common_v1_IDOptions) => Promise<Group>;
  
  // Create a group
  // Required permissions:
  // - iam.group.create on organization that owns the group
  CreateGroup: (req: Group) => Promise<Group>;
  
  // Update a group
  // Required permissions:
  // - iam.group.update on organization that owns the group
  UpdateGroup: (req: Group) => Promise<Group>;
  
  // Delete a group
  // Required permissions:
  // - iam.group.delete on organization that owns the group
  DeleteGroup: (req: arangodb_cloud_common_v1_IDOptions) => Promise<void>;
  
  // List of members of the group identified by the given context ID.
  // Required permissions:
  // - iam.group.get on organization that owns the group
  ListGroupMembers: (req: arangodb_cloud_common_v1_ListOptions) => Promise<GroupMemberList>;
  
  // Add one or more members to the group identified by given ID.
  // Required permissions:
  // - iam.group.update on organization that owns the group
  AddGroupMembers: (req: GroupMembersRequest) => Promise<void>;
  
  // Remove one or more members from the group identified by given ID.
  // Required permissions:
  // - iam.group.update on organization that owns the group
  DeleteGroupMembers: (req: GroupMembersRequest) => Promise<void>;
  
  // Is the user identified by the given user ID a member of the group identified by the given group ID.
  // Required permissions:
  // - iam.group.get on organization that owns the group, unless the requested user is identical to the authenticated user.
  // Note that if the identified group does not exist, no is returned.
  IsMemberOfGroup: (req: IsMemberOfGroupRequest) => Promise<arangodb_cloud_common_v1_YesOrNo>;
  
  // Fetch all roles in the organization identified by the given context ID.
  // Required permissions:
  // - iam.role.list on organization identified by given context ID.
  ListRoles: (req: arangodb_cloud_common_v1_ListOptions) => Promise<RoleList>;
  
  // Fetch a role by its id.
  // Required permissions:
  // - iam.role.get on organization that owns the role
  GetRole: (req: arangodb_cloud_common_v1_IDOptions) => Promise<Role>;
  
  // Create a custom role
  // Required permissions:
  // - iam.role.create on organization that owns the role
  CreateRole: (req: Role) => Promise<Role>;
  
  // Update a custom role
  // Required permissions:
  // - iam.role.update on organization that owns the role
  UpdateRole: (req: Role) => Promise<Role>;
  
  // Delete a custom role
  // Required permissions:
  // - iam.role.delete on organization that owns the role
  DeleteRole: (req: arangodb_cloud_common_v1_IDOptions) => Promise<void>;
  
  // Get the policy for a resource identified by given URL.
  // Required permissions:
  // - iam.policy.get on resource identified by the url
  GetPolicy: (req: arangodb_cloud_common_v1_URLOptions) => Promise<Policy>;
  
  // Add one or more RoleBindings to the policy of a resource identified by given URL.
  // Required permissions:
  // - iam.policy.update on resource identified by the url
  AddRoleBindings: (req: RoleBindingsRequest) => Promise<Policy>;
  
  // Remove one or more RoleBindings from the policy of a resource identified by given URL.
  // Required permissions:
  // - iam.policy.update on resource identified by the url
  DeleteRoleBindings: (req: RoleBindingsRequest) => Promise<Policy>;
  
  // Return the list of permissions that are available to the currently authenticated
  // used for actions on the resource identified by the given URL.
  // Required permissions:
  // - None
  GetEffectivePermissions: (req: arangodb_cloud_common_v1_URLOptions) => Promise<PermissionList>;
  
  // Return the lists of permissions that are available to the currently authenticated
  // used for actions on the resources identified by the given URLs.
  // This method can replace multiple GetEffectivePermissions calls into a single roundtrip.
  // Required permissions:
  // - None
  GetMultipleEffectivePermissions: (req: GetMultipleEffectivePermissionsRequest) => Promise<MultiplePermissionLists>;
  
  // Does the authenticated user have all of the requested permissions for the resource
  // identified by the given URL?
  // Required permissions:
  // - None
  HasPermissions: (req: HasPermissionsRequest) => Promise<arangodb_cloud_common_v1_YesOrNo>;
  
  // List all known permissions.
  // Required permissions:
  // - None
  ListPermissions: (req?: arangodb_cloud_common_v1_Empty) => Promise<PermissionList>;
  
  // Fetch all API keys owned by the authenticated caller.
  // Required permissions:
  // - None
  ListAPIKeys: (req: arangodb_cloud_common_v1_ListOptions) => Promise<APIKeyList>;
  
  // Fetch an API key by its id.
  // The API key must be owned by the authenticated caller.
  // Required permissions:
  // - None
  GetAPIKey: (req: arangodb_cloud_common_v1_IDOptions) => Promise<APIKey>;
  
  // Create a new API key.
  // The API key will be owned by the authenticated caller.
  // Required permissions:
  // - None
  CreateAPIKey: (req: CreateAPIKeyRequest) => Promise<APIKeySecret>;
  
  // Ensure that the expiration date of the API key identified by given ID
  // is either in the past or set to now.
  // The API key must be owned by the authenticated caller.
  // Required permissions:
  // - None
  RevokeAPIKey: (req: arangodb_cloud_common_v1_IDOptions) => Promise<void>;
  
  // Delete the API key identified by given ID
  // The API key must be owned by the authenticated caller.
  // Required permissions:
  // - None
  DeleteAPIKey: (req: arangodb_cloud_common_v1_IDOptions) => Promise<void>;
  
  // Authenticate using an API key.
  // If authentication succeeds, this function returns a bearer token.
  // That token must be used to authenticate all other API requests.
  // If the given API key identifier is invalid or expired, or an incorrect secret
  // is given, this function will return an unauthenticated error.
  // Required permissions:
  // - None
  AuthenticateAPIKey: (req: AuthenticateAPIKeyRequest) => Promise<AuthenticateAPIKeyResponse>;
  
  // Renew a non-expired API key authentication token.
  // This allows to extend the lifetime of a token created by AuthenticateAPIKey.
  // If the given token is invalid or expired, or the underlying API key is expired
  // this function will return an unauthenticated error.
  // Required permissions:
  // - None
  RenewAPIKeyToken: (req: RenewAPIKeyTokenRequest) => Promise<RenewAPIKeyTokenResponse>;
  
  // Revoke an API key authentication token.
  // This function will return a non-error response, even if the given token
  // is invalid or already expired.
  // Required permissions:
  // - None
  RevokeAPIKeyToken: (req: RevokeAPIKeyTokenRequest) => Promise<void>;
}

// IAMService is the API used to configure IAM objects.
export class IAMService implements IIAMService {
  // Get the current API version of this service.
  // Required permissions:
  // - None
  async GetAPIVersion(req?: arangodb_cloud_common_v1_Empty): Promise<arangodb_cloud_common_v1_Version> {
    const path = `/api/iam/v1/api-version`;
    const url = path + api.queryString(req, []);
    return api.get(url, undefined);
  }
  
  // Fetch all available information of the currently authenticated user.
  // Required permissions:
  // - None
  async GetThisUser(req?: arangodb_cloud_common_v1_Empty): Promise<User> {
    const path = `/api/iam/v1/self/user`;
    const url = path + api.queryString(req, []);
    return api.get(url, undefined);
  }
  
  // Fetch all available information of the user identified by the given ID.
  // Required permissions:
  // - resourcemanager.organization.get on one of the organizations that the requested user and authenticated user are both a member of
  async GetUser(req: arangodb_cloud_common_v1_IDOptions): Promise<User> {
    const path = `/api/iam/v1/users/${encodeURIComponent(req.id || '')}`;
    const url = path + api.queryString(req, [`id`]);
    return api.get(url, undefined);
  }
  
  // Update a user
  // Required permissions:
  // - None if the given user is the authenticated user.
  // or
  // - resourcemanager.organization.get on one of the organizations that the requested user and authenticated user are both a member of and
  // - iam.user.update on organization on one of the organizations that the requested user and authenticated user are both a member of
  async UpdateUser(req: User): Promise<User> {
    const url = `/api/iam/v1/users/${encodeURIComponent(req.id || '')}`;
    return api.patch(url, req);
  }
  
  // Verify the mobile phone number of a user, by provided the unique
  // code that was send to the number.
  // If the code is valid an empty result is returned, otherwise an InvalidArgument error is returned.
  // The authenticated user is always the subject of this request.
  // Required permissions:
  // - None (since the subject is always the authenticated user).
  async VerifyUserMobilePhone(req: VerifyUserMobilePhoneRequest): Promise<void> {
    const url = `/api/iam/v1/user-mobile-phone/verify`;
    return api.post(url, req);
  }
  
  // Resend a verification code to the mobile phone number listed for the
  // authenticated user.
  // Required permissions:
  // - None (since the subject is always the authenticated user).
  async ResendUserMobilePhoneVerification(req?: arangodb_cloud_common_v1_Empty): Promise<void> {
    const url = `/api/iam/v1/user-mobile-phone/resend`;
    return api.post(url, req);
  }
  
  // Fetch all groups of the organization identified by the given context ID.
  // Required permissions:
  // - iam.group.list on organization identified by given context ID.
  async ListGroups(req: arangodb_cloud_common_v1_ListOptions): Promise<GroupList> {
    const path = `/api/iam/v1/organizations/${encodeURIComponent(req.context_id || '')}/groups`;
    const url = path + api.queryString(req, [`context_id`]);
    return api.get(url, undefined);
  }
  
  // Fetch a group by its id.
  // Required permissions:
  // - iam.group.get on organization that owns the group
  async GetGroup(req: arangodb_cloud_common_v1_IDOptions): Promise<Group> {
    const path = `/api/iam/v1/groups/${encodeURIComponent(req.id || '')}`;
    const url = path + api.queryString(req, [`id`]);
    return api.get(url, undefined);
  }
  
  // Create a group
  // Required permissions:
  // - iam.group.create on organization that owns the group
  async CreateGroup(req: Group): Promise<Group> {
    const url = `/api/iam/v1/organizations/${encodeURIComponent(req.organization_id || '')}/groups`;
    return api.post(url, req);
  }
  
  // Update a group
  // Required permissions:
  // - iam.group.update on organization that owns the group
  async UpdateGroup(req: Group): Promise<Group> {
    const url = `/api/iam/v1/groups/${encodeURIComponent(req.id || '')}`;
    return api.patch(url, req);
  }
  
  // Delete a group
  // Required permissions:
  // - iam.group.delete on organization that owns the group
  async DeleteGroup(req: arangodb_cloud_common_v1_IDOptions): Promise<void> {
    const path = `/api/iam/v1/groups/${encodeURIComponent(req.id || '')}`;
    const url = path + api.queryString(req, [`id`]);
    return api.delete(url, undefined);
  }
  
  // List of members of the group identified by the given context ID.
  // Required permissions:
  // - iam.group.get on organization that owns the group
  async ListGroupMembers(req: arangodb_cloud_common_v1_ListOptions): Promise<GroupMemberList> {
    const path = `/api/iam/v1/groups/${encodeURIComponent(req.context_id || '')}/members`;
    const url = path + api.queryString(req, [`context_id`]);
    return api.get(url, undefined);
  }
  
  // Add one or more members to the group identified by given ID.
  // Required permissions:
  // - iam.group.update on organization that owns the group
  async AddGroupMembers(req: GroupMembersRequest): Promise<void> {
    const url = `/api/iam/v1/groups/${encodeURIComponent(req.group_id || '')}/members`;
    return api.post(url, req);
  }
  
  // Remove one or more members from the group identified by given ID.
  // Required permissions:
  // - iam.group.update on organization that owns the group
  async DeleteGroupMembers(req: GroupMembersRequest): Promise<void> {
    const url = `/api/iam/v1/groups/${encodeURIComponent(req.group_id || '')}/members`;
    return api.delete(url, req);
  }
  
  // Is the user identified by the given user ID a member of the group identified by the given group ID.
  // Required permissions:
  // - iam.group.get on organization that owns the group, unless the requested user is identical to the authenticated user.
  // Note that if the identified group does not exist, no is returned.
  async IsMemberOfGroup(req: IsMemberOfGroupRequest): Promise<arangodb_cloud_common_v1_YesOrNo> {
    const path = `/api/iam/v1/groups/${encodeURIComponent(req.group_id || '')}/members/${encodeURIComponent(req.user_id || '')}`;
    const url = path + api.queryString(req, [`group_id`, `user_id`]);
    return api.get(url, undefined);
  }
  
  // Fetch all roles in the organization identified by the given context ID.
  // Required permissions:
  // - iam.role.list on organization identified by given context ID.
  async ListRoles(req: arangodb_cloud_common_v1_ListOptions): Promise<RoleList> {
    const path = `/api/iam/v1/organizations/${encodeURIComponent(req.context_id || '')}/roles`;
    const url = path + api.queryString(req, [`context_id`]);
    return api.get(url, undefined);
  }
  
  // Fetch a role by its id.
  // Required permissions:
  // - iam.role.get on organization that owns the role
  async GetRole(req: arangodb_cloud_common_v1_IDOptions): Promise<Role> {
    const path = `/api/iam/v1/roles/${encodeURIComponent(req.id || '')}`;
    const url = path + api.queryString(req, [`id`]);
    return api.get(url, undefined);
  }
  
  // Create a custom role
  // Required permissions:
  // - iam.role.create on organization that owns the role
  async CreateRole(req: Role): Promise<Role> {
    const url = `/api/iam/v1/organizations/${encodeURIComponent(req.organization_id || '')}/roles`;
    return api.post(url, req);
  }
  
  // Update a custom role
  // Required permissions:
  // - iam.role.update on organization that owns the role
  async UpdateRole(req: Role): Promise<Role> {
    const url = `/api/iam/v1/roles/${encodeURIComponent(req.id || '')}`;
    return api.patch(url, req);
  }
  
  // Delete a custom role
  // Required permissions:
  // - iam.role.delete on organization that owns the role
  async DeleteRole(req: arangodb_cloud_common_v1_IDOptions): Promise<void> {
    const path = `/api/iam/v1/roles/${encodeURIComponent(req.id || '')}`;
    const url = path + api.queryString(req, [`id`]);
    return api.delete(url, undefined);
  }
  
  // Get the policy for a resource identified by given URL.
  // Required permissions:
  // - iam.policy.get on resource identified by the url
  async GetPolicy(req: arangodb_cloud_common_v1_URLOptions): Promise<Policy> {
    const path = `/api/iam/v1/policies`;
    const url = path + api.queryString(req, []);
    return api.get(url, undefined);
  }
  
  // Add one or more RoleBindings to the policy of a resource identified by given URL.
  // Required permissions:
  // - iam.policy.update on resource identified by the url
  async AddRoleBindings(req: RoleBindingsRequest): Promise<Policy> {
    const url = `/api/iam/v1/policies/bindings`;
    return api.post(url, req);
  }
  
  // Remove one or more RoleBindings from the policy of a resource identified by given URL.
  // Required permissions:
  // - iam.policy.update on resource identified by the url
  async DeleteRoleBindings(req: RoleBindingsRequest): Promise<Policy> {
    const url = `/api/iam/v1/policies/bindings`;
    return api.delete(url, req);
  }
  
  // Return the list of permissions that are available to the currently authenticated
  // used for actions on the resource identified by the given URL.
  // Required permissions:
  // - None
  async GetEffectivePermissions(req: arangodb_cloud_common_v1_URLOptions): Promise<PermissionList> {
    const path = `/api/iam/v1/policies/effective-permissions`;
    const url = path + api.queryString(req, []);
    return api.get(url, undefined);
  }
  
  // Return the lists of permissions that are available to the currently authenticated
  // used for actions on the resources identified by the given URLs.
  // This method can replace multiple GetEffectivePermissions calls into a single roundtrip.
  // Required permissions:
  // - None
  async GetMultipleEffectivePermissions(req: GetMultipleEffectivePermissionsRequest): Promise<MultiplePermissionLists> {
    const path = `/api/iam/v1/policies/effective-permissions-multiple`;
    const url = path + api.queryString(req, []);
    return api.get(url, undefined);
  }
  
  // Does the authenticated user have all of the requested permissions for the resource
  // identified by the given URL?
  // Required permissions:
  // - None
  async HasPermissions(req: HasPermissionsRequest): Promise<arangodb_cloud_common_v1_YesOrNo> {
    const path = `/api/iam/v1/policies/permissions`;
    const url = path + api.queryString(req, []);
    return api.get(url, undefined);
  }
  
  // List all known permissions.
  // Required permissions:
  // - None
  async ListPermissions(req?: arangodb_cloud_common_v1_Empty): Promise<PermissionList> {
    const path = `/api/iam/v1/permissions`;
    const url = path + api.queryString(req, []);
    return api.get(url, undefined);
  }
  
  // Fetch all API keys owned by the authenticated caller.
  // Required permissions:
  // - None
  async ListAPIKeys(req: arangodb_cloud_common_v1_ListOptions): Promise<APIKeyList> {
    const path = `/api/iam/v1/apikeys`;
    const url = path + api.queryString(req, []);
    return api.get(url, undefined);
  }
  
  // Fetch an API key by its id.
  // The API key must be owned by the authenticated caller.
  // Required permissions:
  // - None
  async GetAPIKey(req: arangodb_cloud_common_v1_IDOptions): Promise<APIKey> {
    const path = `/api/iam/v1/apikeys/${encodeURIComponent(req.id || '')}`;
    const url = path + api.queryString(req, [`id`]);
    return api.get(url, undefined);
  }
  
  // Create a new API key.
  // The API key will be owned by the authenticated caller.
  // Required permissions:
  // - None
  async CreateAPIKey(req: CreateAPIKeyRequest): Promise<APIKeySecret> {
    const url = `/api/iam/v1/apikeys`;
    return api.post(url, req);
  }
  
  // Ensure that the expiration date of the API key identified by given ID
  // is either in the past or set to now.
  // The API key must be owned by the authenticated caller.
  // Required permissions:
  // - None
  async RevokeAPIKey(req: arangodb_cloud_common_v1_IDOptions): Promise<void> {
    const path = `/api/iam/v1/apikeys/${encodeURIComponent(req.id || '')}/revoke`;
    const url = path + api.queryString(req, [`id`]);
    return api.post(url, undefined);
  }
  
  // Delete the API key identified by given ID
  // The API key must be owned by the authenticated caller.
  // Required permissions:
  // - None
  async DeleteAPIKey(req: arangodb_cloud_common_v1_IDOptions): Promise<void> {
    const path = `/api/iam/v1/apikeys/${encodeURIComponent(req.id || '')}`;
    const url = path + api.queryString(req, [`id`]);
    return api.delete(url, undefined);
  }
  
  // Authenticate using an API key.
  // If authentication succeeds, this function returns a bearer token.
  // That token must be used to authenticate all other API requests.
  // If the given API key identifier is invalid or expired, or an incorrect secret
  // is given, this function will return an unauthenticated error.
  // Required permissions:
  // - None
  async AuthenticateAPIKey(req: AuthenticateAPIKeyRequest): Promise<AuthenticateAPIKeyResponse> {
    const path = `/api/iam/v1/apikeys/${encodeURIComponent(req.id || '')}/authenticate`;
    const url = path + api.queryString(req, [`id`]);
    return api.post(url, undefined);
  }
  
  // Renew a non-expired API key authentication token.
  // This allows to extend the lifetime of a token created by AuthenticateAPIKey.
  // If the given token is invalid or expired, or the underlying API key is expired
  // this function will return an unauthenticated error.
  // Required permissions:
  // - None
  async RenewAPIKeyToken(req: RenewAPIKeyTokenRequest): Promise<RenewAPIKeyTokenResponse> {
    const path = `/api/iam/v1/tokens/${encodeURIComponent(req.token || '')}/renew`;
    const url = path + api.queryString(req, [`token`]);
    return api.post(url, undefined);
  }
  
  // Revoke an API key authentication token.
  // This function will return a non-error response, even if the given token
  // is invalid or already expired.
  // Required permissions:
  // - None
  async RevokeAPIKeyToken(req: RevokeAPIKeyTokenRequest): Promise<void> {
    const path = `/api/iam/v1/tokens/${encodeURIComponent(req.token || '')}/revoke`;
    const url = path + api.queryString(req, [`token`]);
    return api.post(url, undefined);
  }
}
