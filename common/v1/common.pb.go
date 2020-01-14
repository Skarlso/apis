// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: common.proto

package v1

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

// Empty message
type Empty struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Empty) Reset()         { *m = Empty{} }
func (m *Empty) String() string { return proto.CompactTextString(m) }
func (*Empty) ProtoMessage()    {}
func (*Empty) Descriptor() ([]byte, []int) {
	return fileDescriptor_555bd8c177793206, []int{0}
}
func (m *Empty) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Empty) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Empty.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Empty) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Empty.Merge(m, src)
}
func (m *Empty) XXX_Size() int {
	return m.Size()
}
func (m *Empty) XXX_DiscardUnknown() {
	xxx_messageInfo_Empty.DiscardUnknown(m)
}

var xxx_messageInfo_Empty proto.InternalMessageInfo

// Options for a list request.
type ListOptions struct {
	// Maximum number of items to return.
	// If not specified, a default number items are returned.
	// Unless specified otherwise, the default number is DefaultPageSize.
	PageSize int32 `protobuf:"varint,1,opt,name=page_size,json=pageSize,proto3" json:"page_size,omitempty"`
	// Page to start with (defaults to 0).
	Page int64 `protobuf:"varint,2,opt,name=page,proto3" json:"page,omitempty"`
	// Identifier of the resource in which the list request is made.
	ContextId            string   `protobuf:"bytes,3,opt,name=context_id,json=contextId,proto3" json:"context_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ListOptions) Reset()         { *m = ListOptions{} }
func (m *ListOptions) String() string { return proto.CompactTextString(m) }
func (*ListOptions) ProtoMessage()    {}
func (*ListOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_555bd8c177793206, []int{1}
}
func (m *ListOptions) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ListOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ListOptions.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ListOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListOptions.Merge(m, src)
}
func (m *ListOptions) XXX_Size() int {
	return m.Size()
}
func (m *ListOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_ListOptions.DiscardUnknown(m)
}

var xxx_messageInfo_ListOptions proto.InternalMessageInfo

func (m *ListOptions) GetPageSize() int32 {
	if m != nil {
		return m.PageSize
	}
	return 0
}

func (m *ListOptions) GetPage() int64 {
	if m != nil {
		return m.Page
	}
	return 0
}

func (m *ListOptions) GetContextId() string {
	if m != nil {
		return m.ContextId
	}
	return ""
}

// Options for a get-by-id request
type IDOptions struct {
	// System identifier of the object to fetch.
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *IDOptions) Reset()         { *m = IDOptions{} }
func (m *IDOptions) String() string { return proto.CompactTextString(m) }
func (*IDOptions) ProtoMessage()    {}
func (*IDOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_555bd8c177793206, []int{2}
}
func (m *IDOptions) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *IDOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_IDOptions.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *IDOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_IDOptions.Merge(m, src)
}
func (m *IDOptions) XXX_Size() int {
	return m.Size()
}
func (m *IDOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_IDOptions.DiscardUnknown(m)
}

var xxx_messageInfo_IDOptions proto.InternalMessageInfo

func (m *IDOptions) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

// Options for a get-by-url request
type URLOptions struct {
	// URL of the resource to fetch.
	Url                  string   `protobuf:"bytes,1,opt,name=url,proto3" json:"url,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *URLOptions) Reset()         { *m = URLOptions{} }
func (m *URLOptions) String() string { return proto.CompactTextString(m) }
func (*URLOptions) ProtoMessage()    {}
func (*URLOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_555bd8c177793206, []int{3}
}
func (m *URLOptions) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *URLOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_URLOptions.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *URLOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_URLOptions.Merge(m, src)
}
func (m *URLOptions) XXX_Size() int {
	return m.Size()
}
func (m *URLOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_URLOptions.DiscardUnknown(m)
}

var xxx_messageInfo_URLOptions proto.InternalMessageInfo

func (m *URLOptions) GetUrl() string {
	if m != nil {
		return m.Url
	}
	return ""
}

// Response for single boolean.
type YesOrNo struct {
	Result               bool     `protobuf:"varint,1,opt,name=result,proto3" json:"result,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *YesOrNo) Reset()         { *m = YesOrNo{} }
func (m *YesOrNo) String() string { return proto.CompactTextString(m) }
func (*YesOrNo) ProtoMessage()    {}
func (*YesOrNo) Descriptor() ([]byte, []int) {
	return fileDescriptor_555bd8c177793206, []int{4}
}
func (m *YesOrNo) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *YesOrNo) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_YesOrNo.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *YesOrNo) XXX_Merge(src proto.Message) {
	xxx_messageInfo_YesOrNo.Merge(m, src)
}
func (m *YesOrNo) XXX_Size() int {
	return m.Size()
}
func (m *YesOrNo) XXX_DiscardUnknown() {
	xxx_messageInfo_YesOrNo.DiscardUnknown(m)
}

var xxx_messageInfo_YesOrNo proto.InternalMessageInfo

func (m *YesOrNo) GetResult() bool {
	if m != nil {
		return m.Result
	}
	return false
}

// Budget for resources of a specific kind
type Budget struct {
	// How many resources of the specific kind are in use
	Used int64 `protobuf:"varint,1,opt,name=used,proto3" json:"used,omitempty"`
	// How many resources of the specific kind are still available.
	// Note a value above 0 does not mean that the caller has permission to add those resources.
	Available int64 `protobuf:"varint,2,opt,name=available,proto3" json:"available,omitempty"`
	// If set, there is no limit to the number of resources of a specific kind that can be created.
	// If set, available is 0.
	Unlimited            bool     `protobuf:"varint,3,opt,name=unlimited,proto3" json:"unlimited,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Budget) Reset()         { *m = Budget{} }
func (m *Budget) String() string { return proto.CompactTextString(m) }
func (*Budget) ProtoMessage()    {}
func (*Budget) Descriptor() ([]byte, []int) {
	return fileDescriptor_555bd8c177793206, []int{5}
}
func (m *Budget) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Budget) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Budget.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Budget) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Budget.Merge(m, src)
}
func (m *Budget) XXX_Size() int {
	return m.Size()
}
func (m *Budget) XXX_DiscardUnknown() {
	xxx_messageInfo_Budget.DiscardUnknown(m)
}

var xxx_messageInfo_Budget proto.InternalMessageInfo

func (m *Budget) GetUsed() int64 {
	if m != nil {
		return m.Used
	}
	return 0
}

func (m *Budget) GetAvailable() int64 {
	if m != nil {
		return m.Available
	}
	return 0
}

func (m *Budget) GetUnlimited() bool {
	if m != nil {
		return m.Unlimited
	}
	return false
}

// Semantic version number.
type Version struct {
	// Major version (increasing may break APIs)
	Major int32 `protobuf:"varint,1,opt,name=major,proto3" json:"major,omitempty"`
	// Minor version (increased for new features)
	Minor int32 `protobuf:"varint,2,opt,name=minor,proto3" json:"minor,omitempty"`
	// Patch version (increased for fixed)
	Patch                int32    `protobuf:"varint,3,opt,name=patch,proto3" json:"patch,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Version) Reset()         { *m = Version{} }
func (m *Version) String() string { return proto.CompactTextString(m) }
func (*Version) ProtoMessage()    {}
func (*Version) Descriptor() ([]byte, []int) {
	return fileDescriptor_555bd8c177793206, []int{6}
}
func (m *Version) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Version) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Version.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Version) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Version.Merge(m, src)
}
func (m *Version) XXX_Size() int {
	return m.Size()
}
func (m *Version) XXX_DiscardUnknown() {
	xxx_messageInfo_Version.DiscardUnknown(m)
}

var xxx_messageInfo_Version proto.InternalMessageInfo

func (m *Version) GetMajor() int32 {
	if m != nil {
		return m.Major
	}
	return 0
}

func (m *Version) GetMinor() int32 {
	if m != nil {
		return m.Minor
	}
	return 0
}

func (m *Version) GetPatch() int32 {
	if m != nil {
		return m.Patch
	}
	return 0
}

func init() {
	proto.RegisterType((*Empty)(nil), "arangodb.cloud.common.v1.Empty")
	proto.RegisterType((*ListOptions)(nil), "arangodb.cloud.common.v1.ListOptions")
	proto.RegisterType((*IDOptions)(nil), "arangodb.cloud.common.v1.IDOptions")
	proto.RegisterType((*URLOptions)(nil), "arangodb.cloud.common.v1.URLOptions")
	proto.RegisterType((*YesOrNo)(nil), "arangodb.cloud.common.v1.YesOrNo")
	proto.RegisterType((*Budget)(nil), "arangodb.cloud.common.v1.Budget")
	proto.RegisterType((*Version)(nil), "arangodb.cloud.common.v1.Version")
}

func init() { proto.RegisterFile("common.proto", fileDescriptor_555bd8c177793206) }

var fileDescriptor_555bd8c177793206 = []byte{
	// 353 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x44, 0x91, 0xd1, 0x6a, 0xdb, 0x30,
	0x18, 0x85, 0xe7, 0x78, 0x4e, 0xe2, 0x7f, 0x63, 0x0c, 0x31, 0x86, 0x21, 0x9b, 0xc9, 0x7c, 0x15,
	0x06, 0x8b, 0x09, 0xbb, 0xdd, 0x55, 0xd8, 0x2e, 0xc2, 0x42, 0x03, 0x2a, 0x2d, 0x6d, 0xa1, 0x04,
	0xd9, 0x12, 0x8e, 0x8a, 0x2d, 0x19, 0x49, 0x0e, 0x6d, 0x9e, 0xa4, 0x8f, 0xd4, 0xcb, 0x3e, 0x42,
	0x49, 0x5f, 0xa4, 0x48, 0xb6, 0xc9, 0xdd, 0x39, 0xdf, 0x81, 0xc3, 0xcf, 0x7f, 0xe0, 0x63, 0x2e,
	0xab, 0x4a, 0x8a, 0x79, 0xad, 0xa4, 0x91, 0x28, 0x22, 0x8a, 0x88, 0x42, 0xd2, 0x6c, 0x9e, 0x97,
	0xb2, 0xa1, 0xf3, 0x2e, 0xdc, 0x2f, 0x92, 0x11, 0x04, 0xff, 0xaa, 0xda, 0x3c, 0x24, 0xb7, 0xf0,
	0x61, 0xcd, 0xb5, 0xd9, 0xd4, 0x86, 0x4b, 0xa1, 0xd1, 0x04, 0xc2, 0x9a, 0x14, 0x6c, 0xab, 0xf9,
	0x81, 0x45, 0xde, 0xd4, 0x9b, 0x05, 0x78, 0x6c, 0xc1, 0x39, 0x3f, 0x30, 0x84, 0xe0, 0xbd, 0xd5,
	0xd1, 0x60, 0xea, 0xcd, 0x7c, 0xec, 0x34, 0xfa, 0x0e, 0x90, 0x4b, 0x61, 0xd8, 0xbd, 0xd9, 0x72,
	0x1a, 0xf9, 0x53, 0x6f, 0x16, 0xe2, 0xb0, 0x23, 0x2b, 0x9a, 0x4c, 0x20, 0x5c, 0xfd, 0xed, 0xcb,
	0x3f, 0xc1, 0x80, 0x53, 0xd7, 0x1a, 0xe2, 0x01, 0xa7, 0x49, 0x0c, 0x70, 0x81, 0xd7, 0x7d, 0xfa,
	0x19, 0xfc, 0x46, 0x95, 0x5d, 0x6c, 0x65, 0xf2, 0x03, 0x46, 0xd7, 0x4c, 0x6f, 0xd4, 0x99, 0x44,
	0x5f, 0x61, 0xa8, 0x98, 0x6e, 0x4a, 0xe3, 0xf2, 0x31, 0xee, 0x5c, 0x72, 0x05, 0xc3, 0x65, 0x43,
	0x0b, 0x66, 0xec, 0x71, 0x8d, 0x66, 0x6d, 0xbd, 0x8f, 0x9d, 0x46, 0xdf, 0x20, 0x24, 0x7b, 0xc2,
	0x4b, 0x92, 0x95, 0xfd, 0xd5, 0x27, 0x60, 0xd3, 0x46, 0x94, 0xbc, 0xe2, 0x86, 0xb5, 0x97, 0x8f,
	0xf1, 0x09, 0x24, 0xff, 0x61, 0x74, 0xc9, 0x94, 0xe6, 0x52, 0xa0, 0x2f, 0x10, 0x54, 0xe4, 0x4e,
	0xaa, 0xee, 0x21, 0xad, 0x71, 0x94, 0x0b, 0xa9, 0x5c, 0xb1, 0xa5, 0xd6, 0x58, 0x5a, 0x13, 0x93,
	0xef, 0x5c, 0x61, 0x80, 0x5b, 0xb3, 0xfc, 0xf3, 0x74, 0x8c, 0xbd, 0xe7, 0x63, 0xec, 0xbd, 0x1c,
	0x63, 0xef, 0xf1, 0x35, 0x7e, 0x77, 0xf3, 0xb3, 0xe0, 0x66, 0xd7, 0x64, 0x76, 0x92, 0xb4, 0x5f,
	0xe9, 0x57, 0x45, 0x04, 0x29, 0x18, 0x4d, 0x49, 0xcd, 0x75, 0xda, 0x8e, 0x95, 0xee, 0x17, 0xd9,
	0xd0, 0xad, 0xf9, 0xfb, 0x2d, 0x00, 0x00, 0xff, 0xff, 0xdd, 0xc8, 0x56, 0x21, 0xdd, 0x01, 0x00,
	0x00,
}

func (m *Empty) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Empty) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Empty) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	return len(dAtA) - i, nil
}

func (m *ListOptions) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ListOptions) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ListOptions) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if len(m.ContextId) > 0 {
		i -= len(m.ContextId)
		copy(dAtA[i:], m.ContextId)
		i = encodeVarintCommon(dAtA, i, uint64(len(m.ContextId)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Page != 0 {
		i = encodeVarintCommon(dAtA, i, uint64(m.Page))
		i--
		dAtA[i] = 0x10
	}
	if m.PageSize != 0 {
		i = encodeVarintCommon(dAtA, i, uint64(m.PageSize))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *IDOptions) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *IDOptions) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *IDOptions) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if len(m.Id) > 0 {
		i -= len(m.Id)
		copy(dAtA[i:], m.Id)
		i = encodeVarintCommon(dAtA, i, uint64(len(m.Id)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *URLOptions) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *URLOptions) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *URLOptions) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if len(m.Url) > 0 {
		i -= len(m.Url)
		copy(dAtA[i:], m.Url)
		i = encodeVarintCommon(dAtA, i, uint64(len(m.Url)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *YesOrNo) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *YesOrNo) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *YesOrNo) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if m.Result {
		i--
		if m.Result {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *Budget) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Budget) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Budget) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if m.Unlimited {
		i--
		if m.Unlimited {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x18
	}
	if m.Available != 0 {
		i = encodeVarintCommon(dAtA, i, uint64(m.Available))
		i--
		dAtA[i] = 0x10
	}
	if m.Used != 0 {
		i = encodeVarintCommon(dAtA, i, uint64(m.Used))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *Version) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Version) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Version) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if m.Patch != 0 {
		i = encodeVarintCommon(dAtA, i, uint64(m.Patch))
		i--
		dAtA[i] = 0x18
	}
	if m.Minor != 0 {
		i = encodeVarintCommon(dAtA, i, uint64(m.Minor))
		i--
		dAtA[i] = 0x10
	}
	if m.Major != 0 {
		i = encodeVarintCommon(dAtA, i, uint64(m.Major))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintCommon(dAtA []byte, offset int, v uint64) int {
	offset -= sovCommon(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Empty) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *ListOptions) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.PageSize != 0 {
		n += 1 + sovCommon(uint64(m.PageSize))
	}
	if m.Page != 0 {
		n += 1 + sovCommon(uint64(m.Page))
	}
	l = len(m.ContextId)
	if l > 0 {
		n += 1 + l + sovCommon(uint64(l))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *IDOptions) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Id)
	if l > 0 {
		n += 1 + l + sovCommon(uint64(l))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *URLOptions) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Url)
	if l > 0 {
		n += 1 + l + sovCommon(uint64(l))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *YesOrNo) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Result {
		n += 2
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *Budget) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Used != 0 {
		n += 1 + sovCommon(uint64(m.Used))
	}
	if m.Available != 0 {
		n += 1 + sovCommon(uint64(m.Available))
	}
	if m.Unlimited {
		n += 2
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *Version) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Major != 0 {
		n += 1 + sovCommon(uint64(m.Major))
	}
	if m.Minor != 0 {
		n += 1 + sovCommon(uint64(m.Minor))
	}
	if m.Patch != 0 {
		n += 1 + sovCommon(uint64(m.Patch))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func sovCommon(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozCommon(x uint64) (n int) {
	return sovCommon(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Empty) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCommon
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Empty: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Empty: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipCommon(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthCommon
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthCommon
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			m.XXX_unrecognized = append(m.XXX_unrecognized, dAtA[iNdEx:iNdEx+skippy]...)
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *ListOptions) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCommon
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: ListOptions: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ListOptions: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field PageSize", wireType)
			}
			m.PageSize = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCommon
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.PageSize |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Page", wireType)
			}
			m.Page = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCommon
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Page |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ContextId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCommon
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCommon
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCommon
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ContextId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCommon(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthCommon
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthCommon
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			m.XXX_unrecognized = append(m.XXX_unrecognized, dAtA[iNdEx:iNdEx+skippy]...)
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *IDOptions) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCommon
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: IDOptions: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: IDOptions: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCommon
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCommon
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCommon
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Id = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCommon(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthCommon
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthCommon
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			m.XXX_unrecognized = append(m.XXX_unrecognized, dAtA[iNdEx:iNdEx+skippy]...)
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *URLOptions) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCommon
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: URLOptions: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: URLOptions: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Url", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCommon
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCommon
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCommon
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Url = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCommon(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthCommon
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthCommon
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			m.XXX_unrecognized = append(m.XXX_unrecognized, dAtA[iNdEx:iNdEx+skippy]...)
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *YesOrNo) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCommon
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: YesOrNo: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: YesOrNo: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Result", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCommon
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				v |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			m.Result = bool(v != 0)
		default:
			iNdEx = preIndex
			skippy, err := skipCommon(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthCommon
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthCommon
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			m.XXX_unrecognized = append(m.XXX_unrecognized, dAtA[iNdEx:iNdEx+skippy]...)
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *Budget) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCommon
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Budget: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Budget: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Used", wireType)
			}
			m.Used = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCommon
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Used |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Available", wireType)
			}
			m.Available = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCommon
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Available |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Unlimited", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCommon
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				v |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			m.Unlimited = bool(v != 0)
		default:
			iNdEx = preIndex
			skippy, err := skipCommon(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthCommon
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthCommon
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			m.XXX_unrecognized = append(m.XXX_unrecognized, dAtA[iNdEx:iNdEx+skippy]...)
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *Version) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCommon
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Version: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Version: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Major", wireType)
			}
			m.Major = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCommon
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Major |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Minor", wireType)
			}
			m.Minor = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCommon
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Minor |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Patch", wireType)
			}
			m.Patch = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCommon
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Patch |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipCommon(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthCommon
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthCommon
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			m.XXX_unrecognized = append(m.XXX_unrecognized, dAtA[iNdEx:iNdEx+skippy]...)
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipCommon(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowCommon
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowCommon
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
			return iNdEx, nil
		case 1:
			iNdEx += 8
			return iNdEx, nil
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowCommon
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthCommon
			}
			iNdEx += length
			if iNdEx < 0 {
				return 0, ErrInvalidLengthCommon
			}
			return iNdEx, nil
		case 3:
			for {
				var innerWire uint64
				var start int = iNdEx
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return 0, ErrIntOverflowCommon
					}
					if iNdEx >= l {
						return 0, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					innerWire |= (uint64(b) & 0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				innerWireType := int(innerWire & 0x7)
				if innerWireType == 4 {
					break
				}
				next, err := skipCommon(dAtA[start:])
				if err != nil {
					return 0, err
				}
				iNdEx = start + next
				if iNdEx < 0 {
					return 0, ErrInvalidLengthCommon
				}
			}
			return iNdEx, nil
		case 4:
			return iNdEx, nil
		case 5:
			iNdEx += 4
			return iNdEx, nil
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
	}
	panic("unreachable")
}

var (
	ErrInvalidLengthCommon = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowCommon   = fmt.Errorf("proto: integer overflow")
)
