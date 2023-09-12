import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

    transform(value: string , toUpper: boolean): string {
        return (toUpper)
            ? value.toUpperCase()
            : value.toLowerCase()
    }

}