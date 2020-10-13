// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: tools.proto

package v1

import (
	context "context"
	fmt "fmt"
	v1 "github.com/arangodb-managed/apis/common/v1"
	proto "github.com/golang/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
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

// Response for GetLatestVersion
type ToolsVersion struct {
	// Semantic versioning format of the latest known version of the tool that is compatible with the current API.
	LatestVersion string `protobuf:"bytes,1,opt,name=latest_version,json=latestVersion,proto3" json:"latest_version,omitempty"`
	// Download url of the latest version for a tool.
	DownloadUrl string `protobuf:"bytes,2,opt,name=download_url,json=downloadUrl,proto3" json:"download_url,omitempty"`
	// True if the current list of API-ID+versions is still compatible with current API.
	IsCompatible         bool     `protobuf:"varint,3,opt,name=is_compatible,json=isCompatible,proto3" json:"is_compatible,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ToolsVersion) Reset()         { *m = ToolsVersion{} }
func (m *ToolsVersion) String() string { return proto.CompactTextString(m) }
func (*ToolsVersion) ProtoMessage()    {}
func (*ToolsVersion) Descriptor() ([]byte, []int) {
	return fileDescriptor_71627f96184a6c71, []int{0}
}
func (m *ToolsVersion) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ToolsVersion) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ToolsVersion.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ToolsVersion) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ToolsVersion.Merge(m, src)
}
func (m *ToolsVersion) XXX_Size() int {
	return m.Size()
}
func (m *ToolsVersion) XXX_DiscardUnknown() {
	xxx_messageInfo_ToolsVersion.DiscardUnknown(m)
}

var xxx_messageInfo_ToolsVersion proto.InternalMessageInfo

func (m *ToolsVersion) GetLatestVersion() string {
	if m != nil {
		return m.LatestVersion
	}
	return ""
}

func (m *ToolsVersion) GetDownloadUrl() string {
	if m != nil {
		return m.DownloadUrl
	}
	return ""
}

func (m *ToolsVersion) GetIsCompatible() bool {
	if m != nil {
		return m.IsCompatible
	}
	return false
}

// Request for GetLatestVersion
type GetLatestVersionRequest struct {
	// Name of the tool
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Version pair for the tool depicting compatibility with a given API.
	ExpectedApiVersions  []*APIVersionPair `protobuf:"bytes,2,rep,name=expected_api_versions,json=expectedApiVersions,proto3" json:"expected_api_versions,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *GetLatestVersionRequest) Reset()         { *m = GetLatestVersionRequest{} }
func (m *GetLatestVersionRequest) String() string { return proto.CompactTextString(m) }
func (*GetLatestVersionRequest) ProtoMessage()    {}
func (*GetLatestVersionRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_71627f96184a6c71, []int{1}
}
func (m *GetLatestVersionRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *GetLatestVersionRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_GetLatestVersionRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *GetLatestVersionRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetLatestVersionRequest.Merge(m, src)
}
func (m *GetLatestVersionRequest) XXX_Size() int {
	return m.Size()
}
func (m *GetLatestVersionRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetLatestVersionRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetLatestVersionRequest proto.InternalMessageInfo

func (m *GetLatestVersionRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *GetLatestVersionRequest) GetExpectedApiVersions() []*APIVersionPair {
	if m != nil {
		return m.ExpectedApiVersions
	}
	return nil
}

// The version pair describing the tools compatibility with an API.
type APIVersionPair struct {
	// ID of the api.
	ApiId string `protobuf:"bytes,1,opt,name=api_id,json=apiId,proto3" json:"api_id,omitempty"`
	// Expected version of the api.
	Version              *v1.Version `protobuf:"bytes,2,opt,name=version,proto3" json:"version,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *APIVersionPair) Reset()         { *m = APIVersionPair{} }
func (m *APIVersionPair) String() string { return proto.CompactTextString(m) }
func (*APIVersionPair) ProtoMessage()    {}
func (*APIVersionPair) Descriptor() ([]byte, []int) {
	return fileDescriptor_71627f96184a6c71, []int{2}
}
func (m *APIVersionPair) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *APIVersionPair) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_APIVersionPair.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *APIVersionPair) XXX_Merge(src proto.Message) {
	xxx_messageInfo_APIVersionPair.Merge(m, src)
}
func (m *APIVersionPair) XXX_Size() int {
	return m.Size()
}
func (m *APIVersionPair) XXX_DiscardUnknown() {
	xxx_messageInfo_APIVersionPair.DiscardUnknown(m)
}

var xxx_messageInfo_APIVersionPair proto.InternalMessageInfo

func (m *APIVersionPair) GetApiId() string {
	if m != nil {
		return m.ApiId
	}
	return ""
}

func (m *APIVersionPair) GetVersion() *v1.Version {
	if m != nil {
		return m.Version
	}
	return nil
}

func init() {
	proto.RegisterType((*ToolsVersion)(nil), "arangodb.cloud.tools.v1.ToolsVersion")
	proto.RegisterType((*GetLatestVersionRequest)(nil), "arangodb.cloud.tools.v1.GetLatestVersionRequest")
	proto.RegisterType((*APIVersionPair)(nil), "arangodb.cloud.tools.v1.APIVersionPair")
}

func init() { proto.RegisterFile("tools.proto", fileDescriptor_71627f96184a6c71) }

var fileDescriptor_71627f96184a6c71 = []byte{
	// 452 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x52, 0x4d, 0x6f, 0x13, 0x31,
	0x10, 0xc5, 0x29, 0x14, 0x70, 0x92, 0x0a, 0x19, 0x95, 0x86, 0x50, 0x2d, 0xc9, 0x42, 0x45, 0x38,
	0x74, 0x97, 0x84, 0x63, 0x4f, 0x05, 0xa1, 0xaa, 0x12, 0x87, 0x2a, 0x7c, 0x1c, 0xe0, 0x10, 0x39,
	0x6b, 0x6b, 0xb1, 0xe4, 0xf5, 0x98, 0xb5, 0x77, 0x81, 0x03, 0x17, 0x8e, 0xdc, 0x10, 0x17, 0xc4,
	0x2f, 0xe2, 0x88, 0xc4, 0x1f, 0x40, 0x81, 0x1f, 0x82, 0x76, 0xd7, 0x2e, 0x6d, 0xa5, 0x55, 0x6f,
	0xd6, 0xf3, 0xcc, 0x7b, 0x6f, 0xde, 0x0c, 0xee, 0x5a, 0x00, 0x69, 0x22, 0x9d, 0x83, 0x05, 0xb2,
	0x45, 0x73, 0xaa, 0x52, 0x60, 0xcb, 0x28, 0x91, 0x50, 0xb0, 0xa8, 0xf9, 0x2b, 0xa7, 0xc3, 0xed,
	0x14, 0x20, 0x95, 0x3c, 0xa6, 0x5a, 0xc4, 0x54, 0x29, 0xb0, 0xd4, 0x0a, 0x50, 0xae, 0x6d, 0x78,
	0x23, 0x81, 0x2c, 0x03, 0x15, 0x97, 0xd3, 0xb8, 0x79, 0x35, 0x78, 0xf8, 0x11, 0xf7, 0x9e, 0x57,
	0x0c, 0x2f, 0x79, 0x6e, 0x04, 0x28, 0xb2, 0x83, 0x37, 0x24, 0xb5, 0xdc, 0xd8, 0x45, 0xd9, 0x20,
	0x03, 0x34, 0x42, 0x93, 0xab, 0xf3, 0x7e, 0x83, 0xfa, 0xb2, 0x31, 0xee, 0x31, 0x78, 0xa7, 0x24,
	0x50, 0xb6, 0x28, 0x72, 0x39, 0xe8, 0xd4, 0x45, 0x5d, 0x8f, 0xbd, 0xc8, 0x25, 0xb9, 0x83, 0xfb,
	0xc2, 0x2c, 0x12, 0xc8, 0x34, 0xb5, 0x62, 0x29, 0xf9, 0x60, 0x6d, 0x84, 0x26, 0x57, 0xe6, 0x3d,
	0x61, 0x1e, 0x1f, 0x63, 0xe1, 0x67, 0x84, 0xb7, 0x0e, 0xb8, 0x7d, 0x7a, 0x92, 0x7c, 0xce, 0xdf,
	0x16, 0xdc, 0x58, 0x42, 0xf0, 0x45, 0x45, 0x33, 0xee, 0x0c, 0xd4, 0x6f, 0xf2, 0x1a, 0x6f, 0xf2,
	0xf7, 0x9a, 0x27, 0x96, 0xb3, 0x05, 0xd5, 0xc2, 0x9b, 0x34, 0x83, 0xce, 0x68, 0x6d, 0xd2, 0x9d,
	0xdd, 0x8b, 0x5a, 0xd2, 0x89, 0xf6, 0x8f, 0x0e, 0x1d, 0xfd, 0x11, 0x15, 0xf9, 0xfc, 0xba, 0x67,
	0xd9, 0xd7, 0xc2, 0xe1, 0x26, 0x64, 0x78, 0xe3, 0x74, 0x19, 0xd9, 0xc4, 0xeb, 0x95, 0x8a, 0x60,
	0xce, 0xc4, 0x25, 0xaa, 0xc5, 0x21, 0x23, 0x7b, 0xf8, 0xb2, 0x4f, 0xa7, 0x1a, 0xbc, 0x3b, 0x1b,
	0x9f, 0xd5, 0x75, 0x19, 0x97, 0xd3, 0xc8, 0x0f, 0xe5, 0x3b, 0x66, 0xdf, 0x3b, 0x2e, 0xf2, 0x67,
	0x3c, 0x2f, 0x45, 0xc2, 0x49, 0x89, 0xfb, 0x07, 0xdc, 0xfe, 0x57, 0x26, 0xb7, 0xdb, 0xd9, 0x9e,
	0x64, 0xda, 0x7e, 0x18, 0x9e, 0x2f, 0x17, 0x8e, 0x3f, 0xfd, 0xfa, 0xfb, 0xb5, 0x73, 0x8b, 0xdc,
	0xac, 0xef, 0xa1, 0x8e, 0xa1, 0xda, 0x3d, 0xd5, 0x62, 0xd7, 0x19, 0x21, 0x5f, 0x10, 0xbe, 0x76,
	0x36, 0x7b, 0xf2, 0xa0, 0x35, 0xc1, 0x96, 0x35, 0x0d, 0x77, 0x5a, 0x3b, 0x4e, 0x1e, 0x56, 0x78,
	0xb7, 0x36, 0x14, 0x90, 0xed, 0xd3, 0x86, 0x9a, 0xb3, 0xf2, 0x9e, 0x1e, 0xed, 0xfd, 0x58, 0x05,
	0xe8, 0xe7, 0x2a, 0x40, 0xbf, 0x57, 0x01, 0xfa, 0xf6, 0x27, 0xb8, 0xf0, 0xea, 0x7e, 0x2a, 0xec,
	0x9b, 0x62, 0x59, 0x8d, 0x18, 0x7b, 0xa1, 0xdd, 0x8c, 0x2a, 0x9a, 0x72, 0x56, 0x51, 0x99, 0x63,
	0xae, 0xe5, 0x7a, 0x7d, 0xd2, 0x0f, 0xff, 0x05, 0x00, 0x00, 0xff, 0xff, 0xe5, 0xdf, 0x5e, 0xbc,
	0x30, 0x03, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// ToolsServiceClient is the client API for ToolsService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ToolsServiceClient interface {
	// Get the current API version of this service.
	// Required permissions:
	// - None
	GetAPIVersion(ctx context.Context, in *v1.Empty, opts ...grpc.CallOption) (*v1.Version, error)
	// Get the latest version for a tool.
	// Required permissions:
	// - None
	GetLatestVersion(ctx context.Context, in *GetLatestVersionRequest, opts ...grpc.CallOption) (*ToolsVersion, error)
}

type toolsServiceClient struct {
	cc *grpc.ClientConn
}

func NewToolsServiceClient(cc *grpc.ClientConn) ToolsServiceClient {
	return &toolsServiceClient{cc}
}

func (c *toolsServiceClient) GetAPIVersion(ctx context.Context, in *v1.Empty, opts ...grpc.CallOption) (*v1.Version, error) {
	out := new(v1.Version)
	err := c.cc.Invoke(ctx, "/arangodb.cloud.tools.v1.ToolsService/GetAPIVersion", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *toolsServiceClient) GetLatestVersion(ctx context.Context, in *GetLatestVersionRequest, opts ...grpc.CallOption) (*ToolsVersion, error) {
	out := new(ToolsVersion)
	err := c.cc.Invoke(ctx, "/arangodb.cloud.tools.v1.ToolsService/GetLatestVersion", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ToolsServiceServer is the server API for ToolsService service.
type ToolsServiceServer interface {
	// Get the current API version of this service.
	// Required permissions:
	// - None
	GetAPIVersion(context.Context, *v1.Empty) (*v1.Version, error)
	// Get the latest version for a tool.
	// Required permissions:
	// - None
	GetLatestVersion(context.Context, *GetLatestVersionRequest) (*ToolsVersion, error)
}

// UnimplementedToolsServiceServer can be embedded to have forward compatible implementations.
type UnimplementedToolsServiceServer struct {
}

func (*UnimplementedToolsServiceServer) GetAPIVersion(ctx context.Context, req *v1.Empty) (*v1.Version, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAPIVersion not implemented")
}
func (*UnimplementedToolsServiceServer) GetLatestVersion(ctx context.Context, req *GetLatestVersionRequest) (*ToolsVersion, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetLatestVersion not implemented")
}

func RegisterToolsServiceServer(s *grpc.Server, srv ToolsServiceServer) {
	s.RegisterService(&_ToolsService_serviceDesc, srv)
}

func _ToolsService_GetAPIVersion_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v1.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ToolsServiceServer).GetAPIVersion(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/arangodb.cloud.tools.v1.ToolsService/GetAPIVersion",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ToolsServiceServer).GetAPIVersion(ctx, req.(*v1.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _ToolsService_GetLatestVersion_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetLatestVersionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ToolsServiceServer).GetLatestVersion(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/arangodb.cloud.tools.v1.ToolsService/GetLatestVersion",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ToolsServiceServer).GetLatestVersion(ctx, req.(*GetLatestVersionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _ToolsService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "arangodb.cloud.tools.v1.ToolsService",
	HandlerType: (*ToolsServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetAPIVersion",
			Handler:    _ToolsService_GetAPIVersion_Handler,
		},
		{
			MethodName: "GetLatestVersion",
			Handler:    _ToolsService_GetLatestVersion_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "tools.proto",
}

func (m *ToolsVersion) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ToolsVersion) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ToolsVersion) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if m.IsCompatible {
		i--
		if m.IsCompatible {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x18
	}
	if len(m.DownloadUrl) > 0 {
		i -= len(m.DownloadUrl)
		copy(dAtA[i:], m.DownloadUrl)
		i = encodeVarintTools(dAtA, i, uint64(len(m.DownloadUrl)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.LatestVersion) > 0 {
		i -= len(m.LatestVersion)
		copy(dAtA[i:], m.LatestVersion)
		i = encodeVarintTools(dAtA, i, uint64(len(m.LatestVersion)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *GetLatestVersionRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *GetLatestVersionRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *GetLatestVersionRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if len(m.ExpectedApiVersions) > 0 {
		for iNdEx := len(m.ExpectedApiVersions) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.ExpectedApiVersions[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintTools(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
		}
	}
	if len(m.Name) > 0 {
		i -= len(m.Name)
		copy(dAtA[i:], m.Name)
		i = encodeVarintTools(dAtA, i, uint64(len(m.Name)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *APIVersionPair) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *APIVersionPair) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *APIVersionPair) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if m.Version != nil {
		{
			size, err := m.Version.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintTools(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if len(m.ApiId) > 0 {
		i -= len(m.ApiId)
		copy(dAtA[i:], m.ApiId)
		i = encodeVarintTools(dAtA, i, uint64(len(m.ApiId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintTools(dAtA []byte, offset int, v uint64) int {
	offset -= sovTools(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *ToolsVersion) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.LatestVersion)
	if l > 0 {
		n += 1 + l + sovTools(uint64(l))
	}
	l = len(m.DownloadUrl)
	if l > 0 {
		n += 1 + l + sovTools(uint64(l))
	}
	if m.IsCompatible {
		n += 2
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *GetLatestVersionRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Name)
	if l > 0 {
		n += 1 + l + sovTools(uint64(l))
	}
	if len(m.ExpectedApiVersions) > 0 {
		for _, e := range m.ExpectedApiVersions {
			l = e.Size()
			n += 1 + l + sovTools(uint64(l))
		}
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *APIVersionPair) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.ApiId)
	if l > 0 {
		n += 1 + l + sovTools(uint64(l))
	}
	if m.Version != nil {
		l = m.Version.Size()
		n += 1 + l + sovTools(uint64(l))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func sovTools(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTools(x uint64) (n int) {
	return sovTools(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *ToolsVersion) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTools
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
			return fmt.Errorf("proto: ToolsVersion: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ToolsVersion: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field LatestVersion", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTools
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
				return ErrInvalidLengthTools
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTools
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.LatestVersion = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DownloadUrl", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTools
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
				return ErrInvalidLengthTools
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTools
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DownloadUrl = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field IsCompatible", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTools
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
			m.IsCompatible = bool(v != 0)
		default:
			iNdEx = preIndex
			skippy, err := skipTools(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthTools
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthTools
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
func (m *GetLatestVersionRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTools
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
			return fmt.Errorf("proto: GetLatestVersionRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: GetLatestVersionRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Name", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTools
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
				return ErrInvalidLengthTools
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTools
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Name = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ExpectedApiVersions", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTools
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthTools
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthTools
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ExpectedApiVersions = append(m.ExpectedApiVersions, &APIVersionPair{})
			if err := m.ExpectedApiVersions[len(m.ExpectedApiVersions)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTools(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthTools
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthTools
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
func (m *APIVersionPair) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTools
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
			return fmt.Errorf("proto: APIVersionPair: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: APIVersionPair: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ApiId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTools
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
				return ErrInvalidLengthTools
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTools
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ApiId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Version", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTools
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthTools
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthTools
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Version == nil {
				m.Version = &v1.Version{}
			}
			if err := m.Version.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTools(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthTools
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthTools
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
func skipTools(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTools
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
					return 0, ErrIntOverflowTools
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
					return 0, ErrIntOverflowTools
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
				return 0, ErrInvalidLengthTools
			}
			iNdEx += length
			if iNdEx < 0 {
				return 0, ErrInvalidLengthTools
			}
			return iNdEx, nil
		case 3:
			for {
				var innerWire uint64
				var start int = iNdEx
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return 0, ErrIntOverflowTools
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
				next, err := skipTools(dAtA[start:])
				if err != nil {
					return 0, err
				}
				iNdEx = start + next
				if iNdEx < 0 {
					return 0, ErrInvalidLengthTools
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
	ErrInvalidLengthTools = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTools   = fmt.Errorf("proto: integer overflow")
)