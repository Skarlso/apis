// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: credits.proto

package v1

import (
	context "context"
	encoding_binary "encoding/binary"
	fmt "fmt"
	_ "github.com/arangodb-managed/apis/common/v1"
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

// Request for listing credit bundles
type ListCreditBundlesRequest struct {
	// ID of the organization for which credit bundles are listed.
	// This is a required field.
	OrganizationId string `protobuf:"bytes,1,opt,name=organization_id,json=organizationId,proto3" json:"organization_id,omitempty"`
	// If set, exclude expired bundles.
	ExcludeExpired       bool     `protobuf:"varint,2,opt,name=exclude_expired,json=excludeExpired,proto3" json:"exclude_expired,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ListCreditBundlesRequest) Reset()         { *m = ListCreditBundlesRequest{} }
func (m *ListCreditBundlesRequest) String() string { return proto.CompactTextString(m) }
func (*ListCreditBundlesRequest) ProtoMessage()    {}
func (*ListCreditBundlesRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_a0331d70383bb145, []int{0}
}
func (m *ListCreditBundlesRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ListCreditBundlesRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ListCreditBundlesRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ListCreditBundlesRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListCreditBundlesRequest.Merge(m, src)
}
func (m *ListCreditBundlesRequest) XXX_Size() int {
	return m.Size()
}
func (m *ListCreditBundlesRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ListCreditBundlesRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ListCreditBundlesRequest proto.InternalMessageInfo

func (m *ListCreditBundlesRequest) GetOrganizationId() string {
	if m != nil {
		return m.OrganizationId
	}
	return ""
}

func (m *ListCreditBundlesRequest) GetExcludeExpired() bool {
	if m != nil {
		return m.ExcludeExpired
	}
	return false
}

// List of credit bundles
type CreditBundlesList struct {
	Items                []*CreditBundle `protobuf:"bytes,1,rep,name=items,proto3" json:"items,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *CreditBundlesList) Reset()         { *m = CreditBundlesList{} }
func (m *CreditBundlesList) String() string { return proto.CompactTextString(m) }
func (*CreditBundlesList) ProtoMessage()    {}
func (*CreditBundlesList) Descriptor() ([]byte, []int) {
	return fileDescriptor_a0331d70383bb145, []int{1}
}
func (m *CreditBundlesList) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *CreditBundlesList) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_CreditBundlesList.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *CreditBundlesList) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreditBundlesList.Merge(m, src)
}
func (m *CreditBundlesList) XXX_Size() int {
	return m.Size()
}
func (m *CreditBundlesList) XXX_DiscardUnknown() {
	xxx_messageInfo_CreditBundlesList.DiscardUnknown(m)
}

var xxx_messageInfo_CreditBundlesList proto.InternalMessageInfo

func (m *CreditBundlesList) GetItems() []*CreditBundle {
	if m != nil {
		return m.Items
	}
	return nil
}

type CreditBundle struct {
	// Unique identifier of this credit bundle.
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// The organization this credit bundle belongs to.
	OrganizationId string `protobuf:"bytes,2,opt,name=organization_id,json=organizationId,proto3" json:"organization_id,omitempty"`
	// The number of credits purchased in this bundle.
	CreditsPurchased float32 `protobuf:"fixed32,3,opt,name=credits_purchased,json=creditsPurchased,proto3" json:"credits_purchased,omitempty"`
	// The total price of these credits.
	TotalPrice float32 `protobuf:"fixed32,4,opt,name=total_price,json=totalPrice,proto3" json:"total_price,omitempty"`
	// Currency used for total_price.
	Currency string `protobuf:"bytes,5,opt,name=currency,proto3" json:"currency,omitempty"`
	// The number of credits remaining in this bundle.
	CreditsRemaining float32 `protobuf:"fixed32,6,opt,name=credits_remaining,json=creditsRemaining,proto3" json:"credits_remaining,omitempty"`
	// The date at which this bundle was purchased.
	PurchasedAt *types.Timestamp `protobuf:"bytes,7,opt,name=purchased_at,json=purchasedAt,proto3" json:"purchased_at,omitempty"`
	// The date from which this bundle is valid.
	ValidFrom *types.Timestamp `protobuf:"bytes,8,opt,name=valid_from,json=validFrom,proto3" json:"valid_from,omitempty"`
	// The date until which this bundle is valid.
	ValidUntil           *types.Timestamp `protobuf:"bytes,9,opt,name=valid_until,json=validUntil,proto3" json:"valid_until,omitempty"`
	XXX_NoUnkeyedLiteral struct{}         `json:"-"`
	XXX_unrecognized     []byte           `json:"-"`
	XXX_sizecache        int32            `json:"-"`
}

func (m *CreditBundle) Reset()         { *m = CreditBundle{} }
func (m *CreditBundle) String() string { return proto.CompactTextString(m) }
func (*CreditBundle) ProtoMessage()    {}
func (*CreditBundle) Descriptor() ([]byte, []int) {
	return fileDescriptor_a0331d70383bb145, []int{2}
}
func (m *CreditBundle) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *CreditBundle) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_CreditBundle.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *CreditBundle) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreditBundle.Merge(m, src)
}
func (m *CreditBundle) XXX_Size() int {
	return m.Size()
}
func (m *CreditBundle) XXX_DiscardUnknown() {
	xxx_messageInfo_CreditBundle.DiscardUnknown(m)
}

var xxx_messageInfo_CreditBundle proto.InternalMessageInfo

func (m *CreditBundle) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *CreditBundle) GetOrganizationId() string {
	if m != nil {
		return m.OrganizationId
	}
	return ""
}

func (m *CreditBundle) GetCreditsPurchased() float32 {
	if m != nil {
		return m.CreditsPurchased
	}
	return 0
}

func (m *CreditBundle) GetTotalPrice() float32 {
	if m != nil {
		return m.TotalPrice
	}
	return 0
}

func (m *CreditBundle) GetCurrency() string {
	if m != nil {
		return m.Currency
	}
	return ""
}

func (m *CreditBundle) GetCreditsRemaining() float32 {
	if m != nil {
		return m.CreditsRemaining
	}
	return 0
}

func (m *CreditBundle) GetPurchasedAt() *types.Timestamp {
	if m != nil {
		return m.PurchasedAt
	}
	return nil
}

func (m *CreditBundle) GetValidFrom() *types.Timestamp {
	if m != nil {
		return m.ValidFrom
	}
	return nil
}

func (m *CreditBundle) GetValidUntil() *types.Timestamp {
	if m != nil {
		return m.ValidUntil
	}
	return nil
}

func init() {
	proto.RegisterType((*ListCreditBundlesRequest)(nil), "arangodb.cloud.credits.v1.ListCreditBundlesRequest")
	proto.RegisterType((*CreditBundlesList)(nil), "arangodb.cloud.credits.v1.CreditBundlesList")
	proto.RegisterType((*CreditBundle)(nil), "arangodb.cloud.credits.v1.CreditBundle")
}

func init() { proto.RegisterFile("credits.proto", fileDescriptor_a0331d70383bb145) }

var fileDescriptor_a0331d70383bb145 = []byte{
	// 531 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x53, 0xc1, 0x6e, 0xd3, 0x30,
	0x18, 0xc6, 0x29, 0x1b, 0xad, 0x3b, 0x0a, 0xf5, 0x01, 0x99, 0x0a, 0x95, 0xaa, 0x97, 0x55, 0x1a,
	0x24, 0x6a, 0x77, 0x40, 0x68, 0xea, 0x81, 0x21, 0x90, 0x90, 0x38, 0x4c, 0x01, 0x2e, 0x5c, 0x22,
	0x37, 0xf6, 0x32, 0x4b, 0xb1, 0x1d, 0x6c, 0xa7, 0xda, 0x40, 0x5c, 0x78, 0x05, 0x84, 0xc4, 0x5b,
	0xf0, 0x0e, 0x9c, 0x38, 0x22, 0xf1, 0x02, 0xa8, 0xf0, 0x20, 0x28, 0x4e, 0x52, 0x32, 0xd8, 0x18,
	0xb7, 0xe4, 0xfb, 0xbf, 0xcf, 0xdf, 0x6f, 0xff, 0xdf, 0x0f, 0xaf, 0xc6, 0x9a, 0x51, 0x6e, 0x8d,
	0x9f, 0x69, 0x65, 0x15, 0xba, 0x49, 0x34, 0x91, 0x89, 0xa2, 0x0b, 0x3f, 0x4e, 0x55, 0x4e, 0xfd,
	0xba, 0xba, 0x9c, 0x0e, 0x6e, 0xc4, 0x4a, 0x08, 0x25, 0x83, 0xe5, 0x34, 0x28, 0xbf, 0x4a, 0xc9,
	0x60, 0x2f, 0xe1, 0xf6, 0x28, 0x5f, 0xf8, 0xb1, 0x12, 0x41, 0xa2, 0x52, 0x22, 0x93, 0xc0, 0x15,
	0x16, 0xf9, 0x61, 0x90, 0xd9, 0x93, 0x8c, 0x99, 0xc0, 0x72, 0xc1, 0x8c, 0x25, 0x22, 0xfb, 0xfd,
	0x55, 0x89, 0x6f, 0x25, 0x4a, 0x25, 0x29, 0x0b, 0x48, 0xc6, 0x03, 0x22, 0xa5, 0xb2, 0xc4, 0x72,
	0x25, 0xab, 0x6e, 0xc6, 0x29, 0xc4, 0x4f, 0xb9, 0xb1, 0x0f, 0x5d, 0x13, 0xfb, 0xb9, 0xa4, 0x29,
	0x33, 0x21, 0x7b, 0x95, 0x33, 0x63, 0xd1, 0x36, 0xbc, 0xa6, 0x74, 0x42, 0x24, 0x7f, 0xed, 0x24,
	0x11, 0xa7, 0x18, 0x8c, 0xc0, 0xa4, 0x13, 0xf6, 0x9a, 0xf0, 0x13, 0x5a, 0x10, 0xd9, 0x71, 0x9c,
	0xe6, 0x94, 0x45, 0xec, 0x38, 0xe3, 0x9a, 0x51, 0xec, 0x8d, 0xc0, 0xa4, 0x1d, 0xf6, 0x2a, 0xf8,
	0x51, 0x89, 0x8e, 0x43, 0xd8, 0x3f, 0xe5, 0x54, 0x58, 0xa3, 0x39, 0xdc, 0xe0, 0x96, 0x09, 0x83,
	0xc1, 0xa8, 0x35, 0xe9, 0xce, 0xb6, 0xfd, 0x73, 0x1f, 0xc8, 0x6f, 0x8a, 0xc3, 0x52, 0x35, 0xfe,
	0xd0, 0x82, 0x5b, 0x4d, 0x1c, 0xf5, 0xa0, 0xb7, 0xee, 0xd4, 0xe3, 0xf4, 0xac, 0x6b, 0x78, 0x67,
	0x5e, 0x63, 0x07, 0xf6, 0x2b, 0xaf, 0x28, 0xcb, 0x75, 0x7c, 0x44, 0x0c, 0xa3, 0xb8, 0x35, 0x02,
	0x13, 0x2f, 0xbc, 0x5e, 0x15, 0x0e, 0x6a, 0x1c, 0xdd, 0x86, 0x5d, 0xab, 0x2c, 0x49, 0xa3, 0x4c,
	0xf3, 0x98, 0xe1, 0xcb, 0x8e, 0x06, 0x1d, 0x74, 0x50, 0x20, 0x68, 0x00, 0xdb, 0x71, 0xae, 0x35,
	0x93, 0xf1, 0x09, 0xde, 0x70, 0x7e, 0xeb, 0xff, 0xa6, 0x93, 0x66, 0x82, 0x70, 0xc9, 0x65, 0x82,
	0x37, 0x4f, 0x39, 0x85, 0x35, 0x8e, 0xe6, 0x70, 0x6b, 0xdd, 0x4e, 0x44, 0x2c, 0xbe, 0x32, 0x02,
	0x93, 0xee, 0x6c, 0xe0, 0x97, 0x73, 0xf5, 0xeb, 0x24, 0xf8, 0xcf, 0xeb, 0xc1, 0x87, 0xdd, 0x35,
	0xff, 0x81, 0x45, 0xf7, 0x21, 0x5c, 0x92, 0x94, 0xd3, 0xe8, 0x50, 0x2b, 0x81, 0xdb, 0x17, 0x8a,
	0x3b, 0x8e, 0xfd, 0x58, 0x2b, 0x81, 0xf6, 0x60, 0xb7, 0x94, 0xe6, 0xd2, 0xf2, 0x14, 0x77, 0x2e,
	0xd4, 0x96, 0x4e, 0x2f, 0x0a, 0xf6, 0xec, 0x33, 0x80, 0xbd, 0x72, 0x2e, 0xe6, 0x19, 0xd3, 0xcb,
	0xe2, 0x49, 0x3e, 0x01, 0xd8, 0xff, 0x2b, 0x6d, 0x68, 0xf7, 0x1f, 0x03, 0x3f, 0x2f, 0x9b, 0x83,
	0x3b, 0xff, 0x99, 0x12, 0x17, 0xb1, 0xf1, 0xbd, 0x77, 0xdf, 0x7e, 0xbe, 0xf7, 0xa6, 0x28, 0x70,
	0x5b, 0x50, 0x51, 0x8b, 0x35, 0x7b, 0xf3, 0x47, 0x32, 0xde, 0x56, 0xc5, 0x45, 0x29, 0xde, 0x9f,
	0x7f, 0x59, 0x0d, 0xc1, 0xd7, 0xd5, 0x10, 0x7c, 0x5f, 0x0d, 0xc1, 0xc7, 0x1f, 0xc3, 0x4b, 0x2f,
	0x77, 0x1a, 0xbb, 0x58, 0xb7, 0x70, 0x57, 0x10, 0x49, 0x12, 0x46, 0x8b, 0xd3, 0x4d, 0xe3, 0xf8,
	0xc5, 0xa6, 0x7b, 0xa3, 0xdd, 0x5f, 0x01, 0x00, 0x00, 0xff, 0xff, 0x68, 0x67, 0x83, 0x6e, 0x03,
	0x04, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// CreditsServiceClient is the client API for CreditsService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type CreditsServiceClient interface {
	// List credit bundles for an organization.
	// Required permissions:
	// - bundle.credits.list on the organization identified by the given organization ID
	ListCreditBundles(ctx context.Context, in *ListCreditBundlesRequest, opts ...grpc.CallOption) (*CreditBundlesList, error)
}

type creditsServiceClient struct {
	cc *grpc.ClientConn
}

func NewCreditsServiceClient(cc *grpc.ClientConn) CreditsServiceClient {
	return &creditsServiceClient{cc}
}

func (c *creditsServiceClient) ListCreditBundles(ctx context.Context, in *ListCreditBundlesRequest, opts ...grpc.CallOption) (*CreditBundlesList, error) {
	out := new(CreditBundlesList)
	err := c.cc.Invoke(ctx, "/arangodb.cloud.credits.v1.CreditsService/ListCreditBundles", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CreditsServiceServer is the server API for CreditsService service.
type CreditsServiceServer interface {
	// List credit bundles for an organization.
	// Required permissions:
	// - bundle.credits.list on the organization identified by the given organization ID
	ListCreditBundles(context.Context, *ListCreditBundlesRequest) (*CreditBundlesList, error)
}

// UnimplementedCreditsServiceServer can be embedded to have forward compatible implementations.
type UnimplementedCreditsServiceServer struct {
}

func (*UnimplementedCreditsServiceServer) ListCreditBundles(ctx context.Context, req *ListCreditBundlesRequest) (*CreditBundlesList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListCreditBundles not implemented")
}

func RegisterCreditsServiceServer(s *grpc.Server, srv CreditsServiceServer) {
	s.RegisterService(&_CreditsService_serviceDesc, srv)
}

func _CreditsService_ListCreditBundles_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListCreditBundlesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CreditsServiceServer).ListCreditBundles(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/arangodb.cloud.credits.v1.CreditsService/ListCreditBundles",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CreditsServiceServer).ListCreditBundles(ctx, req.(*ListCreditBundlesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _CreditsService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "arangodb.cloud.credits.v1.CreditsService",
	HandlerType: (*CreditsServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListCreditBundles",
			Handler:    _CreditsService_ListCreditBundles_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "credits.proto",
}

func (m *ListCreditBundlesRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ListCreditBundlesRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ListCreditBundlesRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if m.ExcludeExpired {
		i--
		if m.ExcludeExpired {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x10
	}
	if len(m.OrganizationId) > 0 {
		i -= len(m.OrganizationId)
		copy(dAtA[i:], m.OrganizationId)
		i = encodeVarintCredits(dAtA, i, uint64(len(m.OrganizationId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *CreditBundlesList) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *CreditBundlesList) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *CreditBundlesList) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if len(m.Items) > 0 {
		for iNdEx := len(m.Items) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Items[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintCredits(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func (m *CreditBundle) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *CreditBundle) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *CreditBundle) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if m.ValidUntil != nil {
		{
			size, err := m.ValidUntil.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintCredits(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x4a
	}
	if m.ValidFrom != nil {
		{
			size, err := m.ValidFrom.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintCredits(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x42
	}
	if m.PurchasedAt != nil {
		{
			size, err := m.PurchasedAt.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintCredits(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x3a
	}
	if m.CreditsRemaining != 0 {
		i -= 4
		encoding_binary.LittleEndian.PutUint32(dAtA[i:], uint32(math.Float32bits(float32(m.CreditsRemaining))))
		i--
		dAtA[i] = 0x35
	}
	if len(m.Currency) > 0 {
		i -= len(m.Currency)
		copy(dAtA[i:], m.Currency)
		i = encodeVarintCredits(dAtA, i, uint64(len(m.Currency)))
		i--
		dAtA[i] = 0x2a
	}
	if m.TotalPrice != 0 {
		i -= 4
		encoding_binary.LittleEndian.PutUint32(dAtA[i:], uint32(math.Float32bits(float32(m.TotalPrice))))
		i--
		dAtA[i] = 0x25
	}
	if m.CreditsPurchased != 0 {
		i -= 4
		encoding_binary.LittleEndian.PutUint32(dAtA[i:], uint32(math.Float32bits(float32(m.CreditsPurchased))))
		i--
		dAtA[i] = 0x1d
	}
	if len(m.OrganizationId) > 0 {
		i -= len(m.OrganizationId)
		copy(dAtA[i:], m.OrganizationId)
		i = encodeVarintCredits(dAtA, i, uint64(len(m.OrganizationId)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Id) > 0 {
		i -= len(m.Id)
		copy(dAtA[i:], m.Id)
		i = encodeVarintCredits(dAtA, i, uint64(len(m.Id)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintCredits(dAtA []byte, offset int, v uint64) int {
	offset -= sovCredits(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *ListCreditBundlesRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.OrganizationId)
	if l > 0 {
		n += 1 + l + sovCredits(uint64(l))
	}
	if m.ExcludeExpired {
		n += 2
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *CreditBundlesList) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Items) > 0 {
		for _, e := range m.Items {
			l = e.Size()
			n += 1 + l + sovCredits(uint64(l))
		}
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *CreditBundle) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Id)
	if l > 0 {
		n += 1 + l + sovCredits(uint64(l))
	}
	l = len(m.OrganizationId)
	if l > 0 {
		n += 1 + l + sovCredits(uint64(l))
	}
	if m.CreditsPurchased != 0 {
		n += 5
	}
	if m.TotalPrice != 0 {
		n += 5
	}
	l = len(m.Currency)
	if l > 0 {
		n += 1 + l + sovCredits(uint64(l))
	}
	if m.CreditsRemaining != 0 {
		n += 5
	}
	if m.PurchasedAt != nil {
		l = m.PurchasedAt.Size()
		n += 1 + l + sovCredits(uint64(l))
	}
	if m.ValidFrom != nil {
		l = m.ValidFrom.Size()
		n += 1 + l + sovCredits(uint64(l))
	}
	if m.ValidUntil != nil {
		l = m.ValidUntil.Size()
		n += 1 + l + sovCredits(uint64(l))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func sovCredits(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozCredits(x uint64) (n int) {
	return sovCredits(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *ListCreditBundlesRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCredits
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
			return fmt.Errorf("proto: ListCreditBundlesRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ListCreditBundlesRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field OrganizationId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCredits
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
				return ErrInvalidLengthCredits
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCredits
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.OrganizationId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ExcludeExpired", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCredits
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
			m.ExcludeExpired = bool(v != 0)
		default:
			iNdEx = preIndex
			skippy, err := skipCredits(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthCredits
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
func (m *CreditBundlesList) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCredits
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
			return fmt.Errorf("proto: CreditBundlesList: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: CreditBundlesList: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Items", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCredits
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
				return ErrInvalidLengthCredits
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthCredits
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Items = append(m.Items, &CreditBundle{})
			if err := m.Items[len(m.Items)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCredits(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthCredits
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
func (m *CreditBundle) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCredits
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
			return fmt.Errorf("proto: CreditBundle: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: CreditBundle: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCredits
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
				return ErrInvalidLengthCredits
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCredits
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Id = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field OrganizationId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCredits
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
				return ErrInvalidLengthCredits
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCredits
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.OrganizationId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 5 {
				return fmt.Errorf("proto: wrong wireType = %d for field CreditsPurchased", wireType)
			}
			var v uint32
			if (iNdEx + 4) > l {
				return io.ErrUnexpectedEOF
			}
			v = uint32(encoding_binary.LittleEndian.Uint32(dAtA[iNdEx:]))
			iNdEx += 4
			m.CreditsPurchased = float32(math.Float32frombits(v))
		case 4:
			if wireType != 5 {
				return fmt.Errorf("proto: wrong wireType = %d for field TotalPrice", wireType)
			}
			var v uint32
			if (iNdEx + 4) > l {
				return io.ErrUnexpectedEOF
			}
			v = uint32(encoding_binary.LittleEndian.Uint32(dAtA[iNdEx:]))
			iNdEx += 4
			m.TotalPrice = float32(math.Float32frombits(v))
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Currency", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCredits
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
				return ErrInvalidLengthCredits
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCredits
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Currency = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 5 {
				return fmt.Errorf("proto: wrong wireType = %d for field CreditsRemaining", wireType)
			}
			var v uint32
			if (iNdEx + 4) > l {
				return io.ErrUnexpectedEOF
			}
			v = uint32(encoding_binary.LittleEndian.Uint32(dAtA[iNdEx:]))
			iNdEx += 4
			m.CreditsRemaining = float32(math.Float32frombits(v))
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PurchasedAt", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCredits
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
				return ErrInvalidLengthCredits
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthCredits
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.PurchasedAt == nil {
				m.PurchasedAt = &types.Timestamp{}
			}
			if err := m.PurchasedAt.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ValidFrom", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCredits
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
				return ErrInvalidLengthCredits
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthCredits
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.ValidFrom == nil {
				m.ValidFrom = &types.Timestamp{}
			}
			if err := m.ValidFrom.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ValidUntil", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCredits
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
				return ErrInvalidLengthCredits
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthCredits
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.ValidUntil == nil {
				m.ValidUntil = &types.Timestamp{}
			}
			if err := m.ValidUntil.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCredits(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthCredits
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
func skipCredits(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowCredits
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
					return 0, ErrIntOverflowCredits
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
					return 0, ErrIntOverflowCredits
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
				return 0, ErrInvalidLengthCredits
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupCredits
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthCredits
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthCredits        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowCredits          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupCredits = fmt.Errorf("proto: unexpected end of group")
)
