import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false);
  el = inject(ElementRef); //element ref is an angular service that gives direct access to the DOM element to which this directive is applied
  //whenever the value of isCompleted changes, the effect will re-run and update the styles accordingly
  
  stylesEffect = effect(() => {
    if(this.isCompleted()){
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.color = '#6c757d';
      this.el.nativeElement.style.backgroundColor = '#d3f9dB';
    }
    else{
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.color = '#000';
      this.el.nativeElement.style.backgroundColor = '#fff';
    }
  })
}
