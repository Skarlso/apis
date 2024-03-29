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

const (
	// Deployment models

	// ModelDeveloper is the model that yields a deployment with:
	// - a single instance of nodes (1).
	// - a variable node size.
	// - not for production use
	// - not highly available
	ModelDeveloper = "developer"

	// ModelOneShard is the model that yields a deployment with:
	// - a fixed number of nodes (3).
	// - a variable node size.
	// - a limitation of 1 shard per collection.
	// - a fixed replication factor of 3 (per collection)
	// - optimized for graph use cases
	ModelOneShard = "oneshard"

	// ModelSharded is the model that yields a deployment with:
	// - a variable number of nodes (>= 3).
	// - a variable node size.
	// - a minimum replication factor of 2 (per shard)
	// - a default replication factor of 3 (per shard)
	// - no limitation of shards per collection
	ModelSharded = "sharded"

	// ModelFlexible is the model that yields a deployment with:
	// - completely flexible in number of coordinators (>= 2), dbservers (>= 3)
	// - completely flexible in resources used by coordinators, dbservers
	// - no limitation of shards per collection
	// - a minimum replication factor of 1 (per collection)
	ModelFlexible = "flexible"

	// ModelFree is the model that yields a deployment with:
	// - a single A4 node
	// - a maximum of 3 databases
	// - not for production use
	// - not highly available
	ModelFree = "free"
)
