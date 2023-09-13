import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'canFly'
})

export class canFlyPipe implements PipeTransform {

    // transform(value: string): string {
    //     if (value) {
    //         return 'vuela'
    //     } return 'no vuela'
    // }
    // transform(value: string): string {
    //     return (value) 
    //         ?'vuela'
    //         :'no vuela'
    // }
    transform(value: boolean): 'vuela' | 'no vuela' {
        return value ?'vuela' :'no vuela'
    }

}