import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;

  @Output() onSubmit = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  submit() {
    const { value: name } = this.nameInput.nativeElement;
    const { value: amount } = this.amountInput.nativeElement;
    this.onSubmit.emit(new Ingredient(name, +amount));
  }
}
