// Code generated by protoc-gen-grpc-gateway. DO NOT EDIT.
// source: monitoring.proto

/*
Package v1 is a reverse proxy.

It translates gRPC into RESTful JSON APIs.
*/
package v1

import (
	"context"
	"io"
	"net/http"

	"github.com/arangodb-managed/apis/common/v1"
	"github.com/golang/protobuf/proto"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"github.com/grpc-ecosystem/grpc-gateway/utilities"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/grpclog"
	"google.golang.org/grpc/status"
)

var _ codes.Code
var _ io.Reader
var _ status.Status
var _ = runtime.String
var _ = utilities.NewDoubleArray

func request_MonitoringService_GetAPIVersion_0(ctx context.Context, marshaler runtime.Marshaler, client MonitoringServiceClient, req *http.Request, pathParams map[string]string) (proto.Message, runtime.ServerMetadata, error) {
	var protoReq v1.Empty
	var metadata runtime.ServerMetadata

	msg, err := client.GetAPIVersion(ctx, &protoReq, grpc.Header(&metadata.HeaderMD), grpc.Trailer(&metadata.TrailerMD))
	return msg, metadata, err

}

func local_request_MonitoringService_GetAPIVersion_0(ctx context.Context, marshaler runtime.Marshaler, server MonitoringServiceServer, req *http.Request, pathParams map[string]string) (proto.Message, runtime.ServerMetadata, error) {
	var protoReq v1.Empty
	var metadata runtime.ServerMetadata

	msg, err := server.GetAPIVersion(ctx, &protoReq)
	return msg, metadata, err

}

// RegisterMonitoringServiceHandlerServer registers the http handlers for service MonitoringService to "mux".
// UnaryRPC     :call MonitoringServiceServer directly.
// StreamingRPC :currently unsupported pending https://github.com/grpc/grpc-go/issues/906.
func RegisterMonitoringServiceHandlerServer(ctx context.Context, mux *runtime.ServeMux, server MonitoringServiceServer) error {

	mux.Handle("GET", pattern_MonitoringService_GetAPIVersion_0, func(w http.ResponseWriter, req *http.Request, pathParams map[string]string) {
		ctx, cancel := context.WithCancel(req.Context())
		defer cancel()
		inboundMarshaler, outboundMarshaler := runtime.MarshalerForRequest(mux, req)
		rctx, err := runtime.AnnotateContext(ctx, mux, req)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}
		resp, md, err := local_request_MonitoringService_GetAPIVersion_0(rctx, inboundMarshaler, server, req, pathParams)
		ctx = runtime.NewServerMetadataContext(ctx, md)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}

		forward_MonitoringService_GetAPIVersion_0(ctx, mux, outboundMarshaler, w, req, resp, mux.GetForwardResponseOptions()...)

	})

	return nil
}

// RegisterMonitoringServiceHandlerFromEndpoint is same as RegisterMonitoringServiceHandler but
// automatically dials to "endpoint" and closes the connection when "ctx" gets done.
func RegisterMonitoringServiceHandlerFromEndpoint(ctx context.Context, mux *runtime.ServeMux, endpoint string, opts []grpc.DialOption) (err error) {
	conn, err := grpc.Dial(endpoint, opts...)
	if err != nil {
		return err
	}
	defer func() {
		if err != nil {
			if cerr := conn.Close(); cerr != nil {
				grpclog.Infof("Failed to close conn to %s: %v", endpoint, cerr)
			}
			return
		}
		go func() {
			<-ctx.Done()
			if cerr := conn.Close(); cerr != nil {
				grpclog.Infof("Failed to close conn to %s: %v", endpoint, cerr)
			}
		}()
	}()

	return RegisterMonitoringServiceHandler(ctx, mux, conn)
}

// RegisterMonitoringServiceHandler registers the http handlers for service MonitoringService to "mux".
// The handlers forward requests to the grpc endpoint over "conn".
func RegisterMonitoringServiceHandler(ctx context.Context, mux *runtime.ServeMux, conn *grpc.ClientConn) error {
	return RegisterMonitoringServiceHandlerClient(ctx, mux, NewMonitoringServiceClient(conn))
}

// RegisterMonitoringServiceHandlerClient registers the http handlers for service MonitoringService
// to "mux". The handlers forward requests to the grpc endpoint over the given implementation of "MonitoringServiceClient".
// Note: the gRPC framework executes interceptors within the gRPC handler. If the passed in "MonitoringServiceClient"
// doesn't go through the normal gRPC flow (creating a gRPC client etc.) then it will be up to the passed in
// "MonitoringServiceClient" to call the correct interceptors.
func RegisterMonitoringServiceHandlerClient(ctx context.Context, mux *runtime.ServeMux, client MonitoringServiceClient) error {

	mux.Handle("GET", pattern_MonitoringService_GetAPIVersion_0, func(w http.ResponseWriter, req *http.Request, pathParams map[string]string) {
		ctx, cancel := context.WithCancel(req.Context())
		defer cancel()
		inboundMarshaler, outboundMarshaler := runtime.MarshalerForRequest(mux, req)
		rctx, err := runtime.AnnotateContext(ctx, mux, req)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}
		resp, md, err := request_MonitoringService_GetAPIVersion_0(rctx, inboundMarshaler, client, req, pathParams)
		ctx = runtime.NewServerMetadataContext(ctx, md)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}

		forward_MonitoringService_GetAPIVersion_0(ctx, mux, outboundMarshaler, w, req, resp, mux.GetForwardResponseOptions()...)

	})

	return nil
}

var (
	pattern_MonitoringService_GetAPIVersion_0 = runtime.MustPattern(runtime.NewPattern(1, []int{2, 0, 2, 1, 2, 2, 2, 3}, []string{"api", "monitoring", "v1", "api-version"}, "", runtime.AssumeColonVerbOpt(true)))
)

var (
	forward_MonitoringService_GetAPIVersion_0 = runtime.ForwardResponseMessage
)