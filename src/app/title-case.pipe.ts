import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;

    // let prepositions = [
    //   'of', 
    //   'the'
    // ];

    let words = value.split(' ');
    // for (var i =0; i < words.length; i++){
    //   if (i > 0 && prepositions.includes(words[i].toLowerCase()))
    //     words[i] = words[i].toLocaleLowerCase();
    //   else {
    //     words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1).toLocaleLowerCase();
    //   }
    // }
    for (var i =0; i < words.length; i++){
      if (i > 0 && this.isPreposition(words[i]))
        words[i] = words[i].toLocaleLowerCase();
      else 
        words[i] = this.toTitleCase(words[i]);
      
    }

   
    return words.join(' ');  
  }

  private isPreposition(word: string): boolean {
    let prepositions = [
      'of',
      'the'
    ];

    return prepositions.includes(word.toLowerCase());   
  }

  private toTitleCase(word: string): string{
    return  word.substring(0, 1).toUpperCase() + word.substring(1).toLocaleLowerCase()
  }



}
