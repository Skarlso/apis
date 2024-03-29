// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: auth.proto

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

// Request arguments for Authorize
type AuthorizeRequest struct {
	// Resource identifier, example (notebook id)
	ResourceId string `protobuf:"bytes,1,opt,name=resource_id,json=resourceId,proto3" json:"resource_id,omitempty"`
	// Resource Type is the kind of resource
	ResourceType string `protobuf:"bytes,2,opt,name=resource_type,json=resourceType,proto3" json:"resource_type,omitempty"`
	// Endpoint of a resource
	CallbackUrl          string   `protobuf:"bytes,3,opt,name=callback_url,json=callbackUrl,proto3" json:"callback_url,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *AuthorizeRequest) Reset()         { *m = AuthorizeRequest{} }
func (m *AuthorizeRequest) String() string { return proto.CompactTextString(m) }
func (*AuthorizeRequest) ProtoMessage()    {}
func (*AuthorizeRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_8bbd6f3875b0e874, []int{0}
}
func (m *AuthorizeRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *AuthorizeRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_AuthorizeRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *AuthorizeRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AuthorizeRequest.Merge(m, src)
}
func (m *AuthorizeRequest) XXX_Size() int {
	return m.Size()
}
func (m *AuthorizeRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_AuthorizeRequest.DiscardUnknown(m)
}

var xxx_messageInfo_AuthorizeRequest proto.InternalMessageInfo

func (m *AuthorizeRequest) GetResourceId() string {
	if m != nil {
		return m.ResourceId
	}
	return ""
}

func (m *AuthorizeRequest) GetResourceType() string {
	if m != nil {
		return m.ResourceType
	}
	return ""
}

func (m *AuthorizeRequest) GetCallbackUrl() string {
	if m != nil {
		return m.CallbackUrl
	}
	return ""
}

func init() {
	proto.RegisterType((*AuthorizeRequest)(nil), "arangodb.cloud.auth.v1.AuthorizeRequest")
}

func init() { proto.RegisterFile("auth.proto", fileDescriptor_8bbd6f3875b0e874) }

var fileDescriptor_8bbd6f3875b0e874 = []byte{
	// 367 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x92, 0xcf, 0x4a, 0xeb, 0x40,
	0x14, 0xc6, 0x6f, 0x7a, 0xa1, 0xd0, 0x69, 0x0b, 0x97, 0xb9, 0x58, 0x42, 0x94, 0xb4, 0x8d, 0x9b,
	0x6e, 0x9a, 0x50, 0xdd, 0xb9, 0xab, 0x20, 0x52, 0x70, 0x21, 0xf5, 0xcf, 0xc2, 0x4d, 0x99, 0x24,
	0x43, 0x32, 0x98, 0xe4, 0xc4, 0xc9, 0x4c, 0xa0, 0xba, 0xf3, 0x15, 0xdc, 0xf8, 0x48, 0x2e, 0x05,
	0x5f, 0x40, 0xaa, 0xbe, 0x87, 0x64, 0xd2, 0x14, 0x5a, 0x94, 0xee, 0xc2, 0x39, 0x1f, 0xbf, 0x5f,
	0xce, 0xc7, 0x20, 0x44, 0xa4, 0x08, 0xed, 0x94, 0x83, 0x00, 0xdc, 0x21, 0x9c, 0x24, 0x01, 0xf8,
	0xae, 0xed, 0x45, 0x20, 0x7d, 0x5b, 0xad, 0xf2, 0x91, 0xd1, 0xf1, 0x20, 0x8e, 0x21, 0x71, 0xf2,
	0x91, 0x53, 0x7e, 0x95, 0x79, 0x63, 0x2f, 0x00, 0x08, 0x22, 0xea, 0x90, 0x94, 0x39, 0x24, 0x49,
	0x40, 0x10, 0xc1, 0x20, 0xc9, 0xca, 0xad, 0xf5, 0x80, 0xfe, 0x8d, 0xa5, 0x08, 0x81, 0xb3, 0x7b,
	0x3a, 0xa5, 0x77, 0x92, 0x66, 0x02, 0x77, 0x51, 0x93, 0xd3, 0x0c, 0x24, 0xf7, 0xe8, 0x8c, 0xf9,
	0xba, 0xd6, 0xd3, 0x06, 0x8d, 0x29, 0xaa, 0x46, 0x13, 0x1f, 0xef, 0xa3, 0xf6, 0x2a, 0x20, 0xe6,
	0x29, 0xd5, 0x6b, 0x2a, 0xd2, 0xaa, 0x86, 0x97, 0xf3, 0x94, 0xe2, 0x3e, 0x6a, 0x79, 0x24, 0x8a,
	0x5c, 0xe2, 0xdd, 0xce, 0x24, 0x8f, 0xf4, 0xbf, 0x2a, 0xd3, 0xac, 0x66, 0x57, 0x3c, 0x3a, 0xf8,
	0xaa, 0xa1, 0x66, 0x61, 0xbf, 0xa0, 0x3c, 0x67, 0x1e, 0xc5, 0x12, 0xb5, 0x4f, 0xa9, 0x18, 0x9f,
	0x4f, 0xae, 0x29, 0xcf, 0x18, 0x24, 0xb8, 0x6b, 0x6f, 0x1c, 0xbb, 0xbc, 0x2c, 0x1f, 0xd9, 0x27,
	0x71, 0x2a, 0xe6, 0x46, 0xff, 0xf7, 0xc0, 0x92, 0x61, 0xf5, 0x1e, 0xdf, 0x3e, 0x9f, 0x6a, 0x06,
	0xd6, 0xcb, 0x06, 0xa4, 0x08, 0x8b, 0x8a, 0x48, 0xca, 0x86, 0xf9, 0xd2, 0x92, 0xa3, 0xc6, 0xaa,
	0x03, 0x3c, 0xb0, 0x7f, 0xee, 0xd7, 0xde, 0xac, 0xc9, 0xd8, 0xf6, 0x73, 0x96, 0xa9, 0xcc, 0xba,
	0xd5, 0x59, 0x37, 0xaf, 0x54, 0x01, 0xaa, 0x9f, 0x41, 0x00, 0x52, 0x6c, 0xbf, 0x73, 0xab, 0x6b,
	0x57, 0xb9, 0x76, 0xf0, 0xff, 0x35, 0x57, 0xa4, 0xf0, 0xc7, 0x47, 0x2f, 0x0b, 0x53, 0x7b, 0x5d,
	0x98, 0xda, 0xfb, 0xc2, 0xd4, 0x9e, 0x3f, 0xcc, 0x3f, 0x37, 0x83, 0x80, 0x89, 0x50, 0xba, 0x05,
	0xc6, 0xa9, 0xc8, 0xc3, 0x98, 0x24, 0x24, 0xa0, 0x7e, 0x41, 0xc8, 0x2a, 0x84, 0x5b, 0x57, 0xef,
	0xe4, 0xf0, 0x3b, 0x00, 0x00, 0xff, 0xff, 0x70, 0x0d, 0x5d, 0xb0, 0x83, 0x02, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// AuthServiceClient is the client API for AuthService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type AuthServiceClient interface {
	// Get the current API version of this service.
	// Required permissions:
	// - None (authenticated only)
	GetAPIVersion(ctx context.Context, in *v1.Empty, opts ...grpc.CallOption) (*v1.Version, error)
	// Verify the current user based on JWT token provided in the request header
	// Verify if the resource URI in request is allowed for a given user
	// If the permission is allowed,
	// Set cookie (arango_graph_[env]]) in response for resource URL
	// Redirect user to callback_url in the request
	// Required permissions:
	// - None (since the subject is always the authenticated user).
	Authorize(ctx context.Context, in *AuthorizeRequest, opts ...grpc.CallOption) (*v1.Empty, error)
	// Logout the user from auth dashboard by deleting the cookie
	// - None (since the subject is always the authenticated user).
	Logout(ctx context.Context, in *v1.Empty, opts ...grpc.CallOption) (*v1.Empty, error)
}

type authServiceClient struct {
	cc *grpc.ClientConn
}

func NewAuthServiceClient(cc *grpc.ClientConn) AuthServiceClient {
	return &authServiceClient{cc}
}

func (c *authServiceClient) GetAPIVersion(ctx context.Context, in *v1.Empty, opts ...grpc.CallOption) (*v1.Version, error) {
	out := new(v1.Version)
	err := c.cc.Invoke(ctx, "/arangodb.cloud.auth.v1.AuthService/GetAPIVersion", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) Authorize(ctx context.Context, in *AuthorizeRequest, opts ...grpc.CallOption) (*v1.Empty, error) {
	out := new(v1.Empty)
	err := c.cc.Invoke(ctx, "/arangodb.cloud.auth.v1.AuthService/Authorize", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) Logout(ctx context.Context, in *v1.Empty, opts ...grpc.CallOption) (*v1.Empty, error) {
	out := new(v1.Empty)
	err := c.cc.Invoke(ctx, "/arangodb.cloud.auth.v1.AuthService/Logout", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AuthServiceServer is the server API for AuthService service.
type AuthServiceServer interface {
	// Get the current API version of this service.
	// Required permissions:
	// - None (authenticated only)
	GetAPIVersion(context.Context, *v1.Empty) (*v1.Version, error)
	// Verify the current user based on JWT token provided in the request header
	// Verify if the resource URI in request is allowed for a given user
	// If the permission is allowed,
	// Set cookie (arango_graph_[env]]) in response for resource URL
	// Redirect user to callback_url in the request
	// Required permissions:
	// - None (since the subject is always the authenticated user).
	Authorize(context.Context, *AuthorizeRequest) (*v1.Empty, error)
	// Logout the user from auth dashboard by deleting the cookie
	// - None (since the subject is always the authenticated user).
	Logout(context.Context, *v1.Empty) (*v1.Empty, error)
}

// UnimplementedAuthServiceServer can be embedded to have forward compatible implementations.
type UnimplementedAuthServiceServer struct {
}

func (*UnimplementedAuthServiceServer) GetAPIVersion(ctx context.Context, req *v1.Empty) (*v1.Version, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAPIVersion not implemented")
}
func (*UnimplementedAuthServiceServer) Authorize(ctx context.Context, req *AuthorizeRequest) (*v1.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Authorize not implemented")
}
func (*UnimplementedAuthServiceServer) Logout(ctx context.Context, req *v1.Empty) (*v1.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Logout not implemented")
}

func RegisterAuthServiceServer(s *grpc.Server, srv AuthServiceServer) {
	s.RegisterService(&_AuthService_serviceDesc, srv)
}

func _AuthService_GetAPIVersion_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v1.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).GetAPIVersion(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/arangodb.cloud.auth.v1.AuthService/GetAPIVersion",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).GetAPIVersion(ctx, req.(*v1.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_Authorize_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AuthorizeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).Authorize(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/arangodb.cloud.auth.v1.AuthService/Authorize",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).Authorize(ctx, req.(*AuthorizeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_Logout_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v1.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).Logout(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/arangodb.cloud.auth.v1.AuthService/Logout",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).Logout(ctx, req.(*v1.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

var _AuthService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "arangodb.cloud.auth.v1.AuthService",
	HandlerType: (*AuthServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetAPIVersion",
			Handler:    _AuthService_GetAPIVersion_Handler,
		},
		{
			MethodName: "Authorize",
			Handler:    _AuthService_Authorize_Handler,
		},
		{
			MethodName: "Logout",
			Handler:    _AuthService_Logout_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "auth.proto",
}

func (m *AuthorizeRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *AuthorizeRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *AuthorizeRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if len(m.CallbackUrl) > 0 {
		i -= len(m.CallbackUrl)
		copy(dAtA[i:], m.CallbackUrl)
		i = encodeVarintAuth(dAtA, i, uint64(len(m.CallbackUrl)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.ResourceType) > 0 {
		i -= len(m.ResourceType)
		copy(dAtA[i:], m.ResourceType)
		i = encodeVarintAuth(dAtA, i, uint64(len(m.ResourceType)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.ResourceId) > 0 {
		i -= len(m.ResourceId)
		copy(dAtA[i:], m.ResourceId)
		i = encodeVarintAuth(dAtA, i, uint64(len(m.ResourceId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintAuth(dAtA []byte, offset int, v uint64) int {
	offset -= sovAuth(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *AuthorizeRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.ResourceId)
	if l > 0 {
		n += 1 + l + sovAuth(uint64(l))
	}
	l = len(m.ResourceType)
	if l > 0 {
		n += 1 + l + sovAuth(uint64(l))
	}
	l = len(m.CallbackUrl)
	if l > 0 {
		n += 1 + l + sovAuth(uint64(l))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func sovAuth(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozAuth(x uint64) (n int) {
	return sovAuth(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *AuthorizeRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowAuth
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
			return fmt.Errorf("proto: AuthorizeRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: AuthorizeRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ResourceId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuth
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
				return ErrInvalidLengthAuth
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAuth
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ResourceId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ResourceType", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuth
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
				return ErrInvalidLengthAuth
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAuth
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ResourceType = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CallbackUrl", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuth
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
				return ErrInvalidLengthAuth
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAuth
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CallbackUrl = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipAuth(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthAuth
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
func skipAuth(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowAuth
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
					return 0, ErrIntOverflowAuth
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowAuth
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
				return 0, ErrInvalidLengthAuth
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupAuth
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthAuth
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthAuth        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowAuth          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupAuth = fmt.Errorf("proto: unexpected end of group")
)
