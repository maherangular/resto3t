import { Comment } from './../../shared/comment';
import { Dish } from 'src/shared/dish';
import { Component, OnInit, Inject } from '@angular/core';
import { DishService } from '../services/dish.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { visibility } from '../animations/app.animation';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'] ,
  animations: [visibility()]
})
export class DishdetailComponent implements OnInit {
dish: Dish ;
comments: Comment[];
dishesIds: String[] ;
prev;
next;
date: Date = new Date() ;
CommentForm: FormGroup ;

Errmsgdish: String ;
ErrmsgdishIds: String ;

visibility = 'shown' ;
FormError = {
  comment: '',
  author: ''
} ;

ValidatorsMessages = {
  comment: {
    'required' : 'this field is requried' ,
    'minlength' : 'this field must be at least 3 characters ',
    'maxlength' : 'this field must be < 50 characters '


  } ,
  author : {

    'required' : 'this field is requried' ,
    'minlength' : 'this field must be at least 4 characters ',



  }

};


    constructor(private dishservice: DishService ,
                private ActivedRoute: ActivatedRoute ,
                private location: Location ,
                private fb: FormBuilder ,
                   @Inject('baseURL') protected baseURL) { }

  ngOnInit() {
    this.createForm();

    this.dishservice.getDishesIds().subscribe(
      dishIds => this.dishesIds = dishIds ,
      error => this.ErrmsgdishIds = error
    )

       this.ActivedRoute.params.subscribe(param => {
         this.visibility = 'hidden';

                   this.dishservice.getDish(param.id).subscribe(
                 dish => this.handeldish(dish) ,
                 error => this.Errmsgdish = error

        );}


        );
  }





  goBack() {

    this.location.back();
}


handeldish(dish) {
 this.visibility = 'shown';
  this.dish = dish ;
  this.comments = dish.comments ;
  this.SetPrevNext(dish.id);
}

SetPrevNext(id: String) {

  const index = this.dishesIds.indexOf(id);
  this.next = this.dishesIds[(this.dishesIds.length + index + 1 ) % this.dishesIds.length];
  this.prev = this.dishesIds[(this.dishesIds.length + index - 1 ) % this.dishesIds.length];

}


createForm () {
  this.CommentForm = this.fb.group({

            author: ['', [ Validators.required, Validators.minLength(4)]],
            rating: [5] ,
            comment: ['', [Validators.required , Validators.minLength(3) , Validators.maxLength(50)]],
            date: [this.date.toISOString()]
  });

 this.CommentForm.valueChanges.subscribe(data => this.onValueChanged(data) );

}

onValueChanged(data?: any  ) {

  if (!this.CommentForm) { return; }


  const form = this.CommentForm;

  // tslint:disable-next-line:forin
  for (const field in this.FormError) {

         this.FormError[field] = '';

          const control = form.get(field);

          if (control && control.dirty && !control.valid) {

            const messages = this.ValidatorsMessages[field];

            // tslint:disable-next-line:forin
            for (const key in control.errors) {

                this.FormError[field] += messages[key] + ' ';

            }
          }
      }
    }

    putDish() {
      const comment = this.CommentForm.value ;
      let dishcopy = this.dish ;

      dishcopy.comments.push(comment);

      this.dishservice.PutDish(dishcopy).subscribe(
            dish => {this.dish = dish ; dishcopy = dish ;   }  ,
            error => { this.dish = null ; dishcopy = null ;}) ;


             this.CommentForm.reset({
               author:'' ,
               comment:'' ,
               rating: [5]
             });

    }

}
