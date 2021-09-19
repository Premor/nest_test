import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

interface HelloRequest {
    name:string;
}

interface HelloReply {
    message:string;
}

@Controller()
export class TestController {
    @GrpcMethod('Greeter','SayHello')
    sayHello(data:HelloRequest, metadata: Metadata, call: ServerUnaryCall<HelloRequest,HelloReply>):HelloReply {
        return {message:`Hello ${data.name}`};
    }
}
