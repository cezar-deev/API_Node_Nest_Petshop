import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { Contract } from "src/backpffice/contracts/contract";
import { Result } from "src/backpffice/models/result.model";

@Injectable()
export class ValidatorInterceptor implements NestInterceptor {
    
    constructor (public contract : Contract){
    }
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        throw new Error("Method not implemented.");
    }

    Intercept(context: ExecutionContext, call$: Observable<any>): Observable<any> {
        const body = context.switchToHttp().getRequest().body
        const valid = this.contract.validate(body);

        if(!valid){
            throw new HttpException(
                new Result(
                    'Ops, algo saiu errado',
                    false,
                    null,
                    this.contract.errors)
                    , HttpStatus.BAD_REQUEST); 
                    // HttpStatus: existem 3 tipos principais :200=ok/201=criado/400=envio errado do    usuario /401=nao autenticado/ 403=nao autorizado                 
        }

        return call$;       
    }

}

