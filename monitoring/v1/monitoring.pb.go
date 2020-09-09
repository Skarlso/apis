// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: monitoring.proto

package v1

import (
	context "context"
	fmt "fmt"
	v1 "github.com/arangodb-managed/apis/common/v1"
	types "github.com/gogo/protobuf/types"
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

// GetDeploymentLogsRequest contains request arguments for GetDeploymentLogs.
type GetDeploymentLogsRequest struct {
	// Identifier of the deployment to get the logs from.
	DeploymentId string `protobuf:"bytes,1,opt,name=deployment_id,json=deploymentId,proto3" json:"deployment_id,omitempty"`
	// If set, limit logs to servers of this role.
	Role string `protobuf:"bytes,2,opt,name=role,proto3" json:"role,omitempty"`
	// Formatting for log messages.
	// The possible values are text and json, with default value being text.
	Format string `protobuf:"bytes,3,opt,name=format,proto3" json:"format,omitempty"`
	// If set limits logs to the server with this ID.
	ServerId string `protobuf:"bytes,4,opt,name=server_id,json=serverId,proto3" json:"server_id,omitempty"`
	// The start time for the query. Defaults to one hour ago.
	StartAt *types.Timestamp `protobuf:"bytes,100,opt,name=start_at,json=startAt,proto3" json:"start_at,omitempty"`
	// The end time for the query. Defaults to now.
	EndAt *types.Timestamp `protobuf:"bytes,101,opt,name=end_at,json=endAt,proto3" json:"end_at,omitempty"`
	// Limit the number of log lines. Defaults to 1000.
	Limit                int32    `protobuf:"varint,102,opt,name=limit,proto3" json:"limit,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetDeploymentLogsRequest) Reset()         { *m = GetDeploymentLogsRequest{} }
func (m *GetDeploymentLogsRequest) String() string { return proto.CompactTextString(m) }
func (*GetDeploymentLogsRequest) ProtoMessage()    {}
func (*GetDeploymentLogsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_b9068e71705f3706, []int{0}
}
func (m *GetDeploymentLogsRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *GetDeploymentLogsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_GetDeploymentLogsRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *GetDeploymentLogsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetDeploymentLogsRequest.Merge(m, src)
}
func (m *GetDeploymentLogsRequest) XXX_Size() int {
	return m.Size()
}
func (m *GetDeploymentLogsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetDeploymentLogsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetDeploymentLogsRequest proto.InternalMessageInfo

func (m *GetDeploymentLogsRequest) GetDeploymentId() string {
	if m != nil {
		return m.DeploymentId
	}
	return ""
}

func (m *GetDeploymentLogsRequest) GetRole() string {
	if m != nil {
		return m.Role
	}
	return ""
}

func (m *GetDeploymentLogsRequest) GetFormat() string {
	if m != nil {
		return m.Format
	}
	return ""
}

func (m *GetDeploymentLogsRequest) GetServerId() string {
	if m != nil {
		return m.ServerId
	}
	return ""
}

func (m *GetDeploymentLogsRequest) GetStartAt() *types.Timestamp {
	if m != nil {
		return m.StartAt
	}
	return nil
}

func (m *GetDeploymentLogsRequest) GetEndAt() *types.Timestamp {
	if m != nil {
		return m.EndAt
	}
	return nil
}

func (m *GetDeploymentLogsRequest) GetLimit() int32 {
	if m != nil {
		return m.Limit
	}
	return 0
}

type DeploymentLogsChunk struct {
	// Chunk of bytes from the logs
	Chunk                []byte   `protobuf:"bytes,1,opt,name=chunk,proto3" json:"chunk,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeploymentLogsChunk) Reset()         { *m = DeploymentLogsChunk{} }
func (m *DeploymentLogsChunk) String() string { return proto.CompactTextString(m) }
func (*DeploymentLogsChunk) ProtoMessage()    {}
func (*DeploymentLogsChunk) Descriptor() ([]byte, []int) {
	return fileDescriptor_b9068e71705f3706, []int{1}
}
func (m *DeploymentLogsChunk) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *DeploymentLogsChunk) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_DeploymentLogsChunk.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *DeploymentLogsChunk) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeploymentLogsChunk.Merge(m, src)
}
func (m *DeploymentLogsChunk) XXX_Size() int {
	return m.Size()
}
func (m *DeploymentLogsChunk) XXX_DiscardUnknown() {
	xxx_messageInfo_DeploymentLogsChunk.DiscardUnknown(m)
}

var xxx_messageInfo_DeploymentLogsChunk proto.InternalMessageInfo

func (m *DeploymentLogsChunk) GetChunk() []byte {
	if m != nil {
		return m.Chunk
	}
	return nil
}

func init() {
	proto.RegisterType((*GetDeploymentLogsRequest)(nil), "arangodb.cloud.monitoring.v1.GetDeploymentLogsRequest")
	proto.RegisterType((*DeploymentLogsChunk)(nil), "arangodb.cloud.monitoring.v1.DeploymentLogsChunk")
}

func init() { proto.RegisterFile("monitoring.proto", fileDescriptor_b9068e71705f3706) }

var fileDescriptor_b9068e71705f3706 = []byte{
	// 498 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x52, 0xcf, 0x8a, 0x13, 0x4f,
	0x10, 0xfe, 0x4d, 0x7e, 0x9b, 0xb8, 0xdb, 0xee, 0x82, 0xdb, 0xca, 0x32, 0xc4, 0x25, 0xc6, 0x08,
	0x12, 0xd4, 0xf4, 0x38, 0x2b, 0x2a, 0xe8, 0xc5, 0xf8, 0x87, 0x25, 0xa0, 0x20, 0x51, 0x3c, 0x78,
	0x59, 0x3a, 0x99, 0xca, 0x6c, 0xe3, 0x74, 0xd7, 0xd8, 0x5d, 0x19, 0x08, 0xde, 0x3c, 0x79, 0xf7,
	0xe2, 0xab, 0xf8, 0x06, 0x1e, 0x3c, 0x08, 0xbe, 0x80, 0x44, 0x1f, 0x44, 0xe6, 0x4f, 0x36, 0xbb,
	0xba, 0xbb, 0xde, 0xaa, 0xea, 0xab, 0xaf, 0xba, 0xaa, 0xbf, 0x8f, 0x9d, 0xd3, 0x68, 0x14, 0xa1,
	0x55, 0x26, 0x16, 0xa9, 0x45, 0x42, 0xbe, 0x2d, 0xad, 0x34, 0x31, 0x46, 0x23, 0x31, 0x4e, 0x70,
	0x1a, 0x89, 0x43, 0x0d, 0x59, 0xd8, 0xdc, 0x1a, 0xa3, 0xd6, 0x68, 0x82, 0x2c, 0x0c, 0xca, 0xa8,
	0x64, 0x35, 0xef, 0xc7, 0x8a, 0xf6, 0xa7, 0x23, 0x31, 0x46, 0x1d, 0xc4, 0x98, 0x48, 0x13, 0x07,
	0x05, 0x30, 0x9a, 0x4e, 0x82, 0x94, 0x66, 0x29, 0xb8, 0x80, 0x94, 0x06, 0x47, 0x52, 0xa7, 0xcb,
	0xa8, 0x22, 0x6f, 0xc7, 0x88, 0x71, 0x02, 0x81, 0x4c, 0x55, 0x20, 0x8d, 0x41, 0x92, 0xa4, 0xd0,
	0xb8, 0x12, 0xed, 0x7c, 0xa8, 0x31, 0x7f, 0x17, 0xe8, 0x31, 0xa4, 0x09, 0xce, 0x34, 0x18, 0x7a,
	0x8a, 0xb1, 0x1b, 0xc2, 0xdb, 0x29, 0x38, 0xe2, 0x57, 0xd8, 0x46, 0x74, 0x00, 0xec, 0xa9, 0xc8,
	0xf7, 0xda, 0x5e, 0x77, 0x6d, 0xb8, 0xbe, 0x2c, 0x0e, 0x22, 0xce, 0xd9, 0x8a, 0xc5, 0x04, 0xfc,
	0x5a, 0x81, 0x15, 0x31, 0xdf, 0x62, 0x8d, 0x09, 0x5a, 0x2d, 0xc9, 0xff, 0xbf, 0xa8, 0x56, 0x19,
	0xbf, 0xc8, 0xd6, 0x1c, 0xd8, 0x0c, 0x6c, 0x3e, 0x6c, 0xa5, 0x80, 0x56, 0xcb, 0xc2, 0x20, 0xe2,
	0xb7, 0xd9, 0xaa, 0x23, 0x69, 0x69, 0x4f, 0x92, 0x1f, 0xb5, 0xbd, 0xee, 0xd9, 0x9d, 0xa6, 0x28,
	0x77, 0x17, 0x8b, 0x6b, 0xc5, 0xcb, 0xc5, 0x71, 0xc3, 0x33, 0x45, 0x6f, 0x9f, 0x78, 0xc8, 0x1a,
	0x60, 0xa2, 0x9c, 0x04, 0xff, 0x24, 0xd5, 0xc1, 0x44, 0x7d, 0xe2, 0x17, 0x58, 0x3d, 0x51, 0x5a,
	0x91, 0x3f, 0x69, 0x7b, 0xdd, 0xfa, 0xb0, 0x4c, 0x3a, 0xd7, 0xd9, 0xf9, 0xa3, 0xdf, 0xf0, 0x68,
	0x7f, 0x6a, 0xde, 0xe4, 0xcd, 0xe3, 0x3c, 0x28, 0x8e, 0x5f, 0x1f, 0x96, 0xc9, 0xce, 0xd7, 0x1a,
	0xdb, 0x7c, 0x76, 0x20, 0xde, 0x0b, 0xb0, 0x99, 0x1a, 0x03, 0x7f, 0xc7, 0x36, 0x76, 0x81, 0xfa,
	0xcf, 0x07, 0xaf, 0xc0, 0x3a, 0x85, 0x86, 0x5f, 0x12, 0x7f, 0x08, 0x5e, 0xe9, 0x9a, 0x85, 0xe2,
	0x89, 0x4e, 0x69, 0xd6, 0xbc, 0x7c, 0x72, 0x43, 0x35, 0xa3, 0x73, 0xf5, 0xfd, 0xf7, 0x5f, 0x1f,
	0x6b, 0x6d, 0xde, 0x2a, 0x24, 0x5c, 0x3a, 0x26, 0xb7, 0x89, 0x4c, 0x55, 0x2f, 0xab, 0xde, 0xfa,
	0xec, 0xb1, 0xcd, 0xbf, 0xa4, 0xe4, 0x77, 0xc4, 0x69, 0x96, 0x13, 0x27, 0x69, 0xdf, 0x0c, 0x4f,
	0xe7, 0x1d, 0xf3, 0x53, 0x9d, 0xbb, 0xc5, 0xa2, 0x61, 0xe7, 0xc6, 0x31, 0x8b, 0x3a, 0xb2, 0x20,
	0x75, 0x9e, 0x2c, 0xcd, 0xd3, 0x4b, 0x30, 0x76, 0xf7, 0xbc, 0x6b, 0x37, 0xbd, 0x87, 0x0f, 0xbe,
	0xcc, 0x5b, 0xde, 0xb7, 0x79, 0xcb, 0xfb, 0x31, 0x6f, 0x79, 0x9f, 0x7e, 0xb6, 0xfe, 0x7b, 0x2d,
	0x0e, 0x79, 0x7e, 0xb1, 0x49, 0x4f, 0x4b, 0x23, 0x63, 0x88, 0xf2, 0xf9, 0xee, 0xe8, 0x03, 0xa3,
	0x46, 0x21, 0xf7, 0xad, 0xdf, 0x01, 0x00, 0x00, 0xff, 0xff, 0xe2, 0x37, 0xa0, 0xd7, 0x74, 0x03,
	0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// MonitoringServiceClient is the client API for MonitoringService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MonitoringServiceClient interface {
	// Get the current API version of this service.
	// Required permissions:
	// - None
	GetAPIVersion(ctx context.Context, in *v1.Empty, opts ...grpc.CallOption) (*v1.Version, error)
	// Fetch all logs of the deployment that matches the given request.
	// Required permissions:
	// - monitoring.logs.get on the deployment identified by the given deployment ID.
	GetDeploymentLogs(ctx context.Context, in *GetDeploymentLogsRequest, opts ...grpc.CallOption) (MonitoringService_GetDeploymentLogsClient, error)
}

type monitoringServiceClient struct {
	cc *grpc.ClientConn
}

func NewMonitoringServiceClient(cc *grpc.ClientConn) MonitoringServiceClient {
	return &monitoringServiceClient{cc}
}

func (c *monitoringServiceClient) GetAPIVersion(ctx context.Context, in *v1.Empty, opts ...grpc.CallOption) (*v1.Version, error) {
	out := new(v1.Version)
	err := c.cc.Invoke(ctx, "/arangodb.cloud.monitoring.v1.MonitoringService/GetAPIVersion", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *monitoringServiceClient) GetDeploymentLogs(ctx context.Context, in *GetDeploymentLogsRequest, opts ...grpc.CallOption) (MonitoringService_GetDeploymentLogsClient, error) {
	stream, err := c.cc.NewStream(ctx, &_MonitoringService_serviceDesc.Streams[0], "/arangodb.cloud.monitoring.v1.MonitoringService/GetDeploymentLogs", opts...)
	if err != nil {
		return nil, err
	}
	x := &monitoringServiceGetDeploymentLogsClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type MonitoringService_GetDeploymentLogsClient interface {
	Recv() (*DeploymentLogsChunk, error)
	grpc.ClientStream
}

type monitoringServiceGetDeploymentLogsClient struct {
	grpc.ClientStream
}

func (x *monitoringServiceGetDeploymentLogsClient) Recv() (*DeploymentLogsChunk, error) {
	m := new(DeploymentLogsChunk)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// MonitoringServiceServer is the server API for MonitoringService service.
type MonitoringServiceServer interface {
	// Get the current API version of this service.
	// Required permissions:
	// - None
	GetAPIVersion(context.Context, *v1.Empty) (*v1.Version, error)
	// Fetch all logs of the deployment that matches the given request.
	// Required permissions:
	// - monitoring.logs.get on the deployment identified by the given deployment ID.
	GetDeploymentLogs(*GetDeploymentLogsRequest, MonitoringService_GetDeploymentLogsServer) error
}

// UnimplementedMonitoringServiceServer can be embedded to have forward compatible implementations.
type UnimplementedMonitoringServiceServer struct {
}

func (*UnimplementedMonitoringServiceServer) GetAPIVersion(ctx context.Context, req *v1.Empty) (*v1.Version, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAPIVersion not implemented")
}
func (*UnimplementedMonitoringServiceServer) GetDeploymentLogs(req *GetDeploymentLogsRequest, srv MonitoringService_GetDeploymentLogsServer) error {
	return status.Errorf(codes.Unimplemented, "method GetDeploymentLogs not implemented")
}

func RegisterMonitoringServiceServer(s *grpc.Server, srv MonitoringServiceServer) {
	s.RegisterService(&_MonitoringService_serviceDesc, srv)
}

func _MonitoringService_GetAPIVersion_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v1.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MonitoringServiceServer).GetAPIVersion(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/arangodb.cloud.monitoring.v1.MonitoringService/GetAPIVersion",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MonitoringServiceServer).GetAPIVersion(ctx, req.(*v1.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _MonitoringService_GetDeploymentLogs_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(GetDeploymentLogsRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(MonitoringServiceServer).GetDeploymentLogs(m, &monitoringServiceGetDeploymentLogsServer{stream})
}

type MonitoringService_GetDeploymentLogsServer interface {
	Send(*DeploymentLogsChunk) error
	grpc.ServerStream
}

type monitoringServiceGetDeploymentLogsServer struct {
	grpc.ServerStream
}

func (x *monitoringServiceGetDeploymentLogsServer) Send(m *DeploymentLogsChunk) error {
	return x.ServerStream.SendMsg(m)
}

var _MonitoringService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "arangodb.cloud.monitoring.v1.MonitoringService",
	HandlerType: (*MonitoringServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetAPIVersion",
			Handler:    _MonitoringService_GetAPIVersion_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "GetDeploymentLogs",
			Handler:       _MonitoringService_GetDeploymentLogs_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "monitoring.proto",
}

func (m *GetDeploymentLogsRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *GetDeploymentLogsRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *GetDeploymentLogsRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if m.Limit != 0 {
		i = encodeVarintMonitoring(dAtA, i, uint64(m.Limit))
		i--
		dAtA[i] = 0x6
		i--
		dAtA[i] = 0xb0
	}
	if m.EndAt != nil {
		{
			size, err := m.EndAt.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintMonitoring(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x6
		i--
		dAtA[i] = 0xaa
	}
	if m.StartAt != nil {
		{
			size, err := m.StartAt.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintMonitoring(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x6
		i--
		dAtA[i] = 0xa2
	}
	if len(m.ServerId) > 0 {
		i -= len(m.ServerId)
		copy(dAtA[i:], m.ServerId)
		i = encodeVarintMonitoring(dAtA, i, uint64(len(m.ServerId)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Format) > 0 {
		i -= len(m.Format)
		copy(dAtA[i:], m.Format)
		i = encodeVarintMonitoring(dAtA, i, uint64(len(m.Format)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Role) > 0 {
		i -= len(m.Role)
		copy(dAtA[i:], m.Role)
		i = encodeVarintMonitoring(dAtA, i, uint64(len(m.Role)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.DeploymentId) > 0 {
		i -= len(m.DeploymentId)
		copy(dAtA[i:], m.DeploymentId)
		i = encodeVarintMonitoring(dAtA, i, uint64(len(m.DeploymentId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *DeploymentLogsChunk) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *DeploymentLogsChunk) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *DeploymentLogsChunk) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if len(m.Chunk) > 0 {
		i -= len(m.Chunk)
		copy(dAtA[i:], m.Chunk)
		i = encodeVarintMonitoring(dAtA, i, uint64(len(m.Chunk)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintMonitoring(dAtA []byte, offset int, v uint64) int {
	offset -= sovMonitoring(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *GetDeploymentLogsRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.DeploymentId)
	if l > 0 {
		n += 1 + l + sovMonitoring(uint64(l))
	}
	l = len(m.Role)
	if l > 0 {
		n += 1 + l + sovMonitoring(uint64(l))
	}
	l = len(m.Format)
	if l > 0 {
		n += 1 + l + sovMonitoring(uint64(l))
	}
	l = len(m.ServerId)
	if l > 0 {
		n += 1 + l + sovMonitoring(uint64(l))
	}
	if m.StartAt != nil {
		l = m.StartAt.Size()
		n += 2 + l + sovMonitoring(uint64(l))
	}
	if m.EndAt != nil {
		l = m.EndAt.Size()
		n += 2 + l + sovMonitoring(uint64(l))
	}
	if m.Limit != 0 {
		n += 2 + sovMonitoring(uint64(m.Limit))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *DeploymentLogsChunk) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Chunk)
	if l > 0 {
		n += 1 + l + sovMonitoring(uint64(l))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func sovMonitoring(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozMonitoring(x uint64) (n int) {
	return sovMonitoring(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *GetDeploymentLogsRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowMonitoring
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
			return fmt.Errorf("proto: GetDeploymentLogsRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: GetDeploymentLogsRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DeploymentId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonitoring
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
				return ErrInvalidLengthMonitoring
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMonitoring
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DeploymentId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Role", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonitoring
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
				return ErrInvalidLengthMonitoring
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMonitoring
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Role = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Format", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonitoring
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
				return ErrInvalidLengthMonitoring
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMonitoring
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Format = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ServerId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonitoring
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
				return ErrInvalidLengthMonitoring
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMonitoring
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ServerId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 100:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field StartAt", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonitoring
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
				return ErrInvalidLengthMonitoring
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthMonitoring
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.StartAt == nil {
				m.StartAt = &types.Timestamp{}
			}
			if err := m.StartAt.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 101:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field EndAt", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonitoring
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
				return ErrInvalidLengthMonitoring
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthMonitoring
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.EndAt == nil {
				m.EndAt = &types.Timestamp{}
			}
			if err := m.EndAt.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 102:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Limit", wireType)
			}
			m.Limit = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonitoring
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Limit |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipMonitoring(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthMonitoring
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthMonitoring
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
func (m *DeploymentLogsChunk) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowMonitoring
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
			return fmt.Errorf("proto: DeploymentLogsChunk: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: DeploymentLogsChunk: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Chunk", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonitoring
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				byteLen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthMonitoring
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthMonitoring
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Chunk = append(m.Chunk[:0], dAtA[iNdEx:postIndex]...)
			if m.Chunk == nil {
				m.Chunk = []byte{}
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipMonitoring(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthMonitoring
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthMonitoring
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
func skipMonitoring(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowMonitoring
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
					return 0, ErrIntOverflowMonitoring
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
					return 0, ErrIntOverflowMonitoring
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
				return 0, ErrInvalidLengthMonitoring
			}
			iNdEx += length
			if iNdEx < 0 {
				return 0, ErrInvalidLengthMonitoring
			}
			return iNdEx, nil
		case 3:
			for {
				var innerWire uint64
				var start int = iNdEx
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return 0, ErrIntOverflowMonitoring
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
				next, err := skipMonitoring(dAtA[start:])
				if err != nil {
					return 0, err
				}
				iNdEx = start + next
				if iNdEx < 0 {
					return 0, ErrInvalidLengthMonitoring
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
	ErrInvalidLengthMonitoring = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowMonitoring   = fmt.Errorf("proto: integer overflow")
)
