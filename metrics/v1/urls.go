//
// DISCLAIMER
//
// Copyright 2020 ArangoDB GmbH, Cologne, Germany
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Copyright holder is ArangoDB GmbH, Cologne, Germany
//
// Author Ewout Prangsma
//

package v1

import (
	"net/url"
	"path"

	data "github.com/arangodb-managed/apis/data/v1"
)

const (
	// KindToken is a constants for the kind of metric token resources.
	KindToken = "Token"
)

// TokenURL creates a resource URL for the token with given ID
// in given context.
func TokenURL(organizationID, projectID, deploymentID, tokenID string) string {
	return path.Join(data.DeploymentURL(organizationID, projectID, deploymentID), KindToken, url.PathEscape(tokenID))
}
