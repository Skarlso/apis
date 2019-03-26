//
// DISCLAIMER
//
// Copyright 2019 ArangoDB Inc, Cologne, Germany
//
// Author Ewout Prangsma
//

package v1

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestUsageURL(t *testing.T) {
	assert.Equal(t, "/Organization/123/UsageItem/u1", UsageItemURL("123", "u1"))
	assert.Equal(t, "/Organization/123%2F567/UsageItem/c2%2F3", UsageItemURL("123/567", "c2/3"))
	assert.Equal(t, "/Organization/123%2F567/UsageItem/a%25b", UsageItemURL("123/567", "a%b"))
}