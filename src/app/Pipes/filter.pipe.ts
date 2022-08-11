import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchString?:any) {

    if (value.length === 0 || searchString == '') {
      return value;
    }

    const searchResult = [];
    for(const book of value){
      if(book.bookName.toLowerCase().includes(searchString.toLowerCase()) || 
          book.author.toLowerCase().includes(searchString.toLowerCase()) || 
            book.bookDetail.toLowerCase().includes(searchString.toLowerCase())){
              searchResult.push(book);
      }
    }
    return searchResult;
  }
}
