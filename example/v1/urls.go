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
// Author Gergely Brautigam
//

package v1

import (
	"net/url"
	"path"

	data "github.com/arangodb-managed/apis/data/v1"
)

const (
	// KindExample is a constants for the kind of Example resources.
	KindExample = "Example"
)

// ExampleURL creates a resource URL for the Example with given ID
// in given context (as individual IDs).
func ExampleURL(organizationID, projectID, deploymentID, exampleID string) string {
	return ExampleURL2(data.DeploymentURL(organizationID, projectID, deploymentID), exampleID)
}

// ExampleURL2 creates a resource URL for the Example with given ID
// in given context (as base URL).
func ExampleURL2(deploymentURL, exampleID string) string {
	return path.Join(deploymentURL, KindExample, url.PathEscape(exampleID))
}
